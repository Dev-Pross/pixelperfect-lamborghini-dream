import { useRef, useCallback, useState } from 'react';
import { Download, Share2, Camera, Check } from 'lucide-react';
import { toast } from 'sonner';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { ConfiguratorModel } from '@/data/configuratorData';
import type { ConfigItem } from '@/hooks/useConfiguratorComputed';

interface Props {
  open: boolean;
  onClose: () => void;
  model: ConfiguratorModel;
  totalPrice: number;
  configSummary: ConfigItem[];
}

const ConfiguratorSummaryDrawer = ({ open, onClose, model, totalPrice, configSummary }: Props) => {
  const [downloadedImage, setDownloadedImage] = useState(false);
  const [downloadedText, setDownloadedText] = useState(false);

  // Group by tab
  const groupedByTab: Record<string, ConfigItem[]> = {};
  configSummary.forEach((item) => {
    if (!groupedByTab[item.tab]) groupedByTab[item.tab] = [];
    groupedByTab[item.tab].push(item);
  });

  const capture3DCanvas = (): string | null => {
    const canvasEl = document.querySelector('canvas') as HTMLCanvasElement | null;
    if (!canvasEl) return null;
    try {
      return canvasEl.toDataURL('image/png');
    } catch {
      return null;
    }
  };

  const handleDownloadImage = useCallback(async () => {
    try {
      const canvasDataUrl = capture3DCanvas();
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas context unavailable');

      const width = 1200;
      const lineHeight = 30;
      const padding = 60;
      const carImageHeight = 400;
      const headerHeight = 140;
      const itemCount = configSummary.length;
      const tabCount = new Set(configSummary.map((i) => i.tab)).size;
      const height = headerHeight + carImageHeight + (itemCount + tabCount * 2 + 6) * lineHeight + padding * 2;

      canvas.width = width;
      canvas.height = height;

      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#0f0f0f');
      bgGrad.addColorStop(1, '#1a1a1a');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(129,216,208,0.15)';
      ctx.lineWidth = 1;
      ctx.strokeRect(padding - 20, padding - 20, width - padding * 2 + 40, height - padding * 2 + 40);

      ctx.fillStyle = '#81D8D0';
      ctx.font = 'bold 14px "Nunito Sans", sans-serif';
      ctx.fillText('DTS', padding, padding + 15);

      ctx.fillStyle = '#555';
      ctx.font = '11px "Nunito Sans", sans-serif';
      ctx.fillText('DRIVE TO SURVIVE', padding + 45, padding + 15);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 38px "Nunito Sans", sans-serif';
      ctx.fillText(model.name, padding, padding + 65);

      ctx.fillStyle = '#81D8D0';
      ctx.font = '16px "Nunito Sans", sans-serif';
      ctx.fillText('Configuration Summary', padding, padding + 92);

      ctx.fillStyle = '#666';
      ctx.font = '13px "Nunito Sans", sans-serif';
      ctx.fillText(
        `${model.stats.engine} · ${model.stats.seating} · ${model.stats.length} × ${model.stats.width}`,
        padding,
        padding + 118
      );

      let y = padding + headerHeight;

      // Draw 3D screenshot
      if (canvasDataUrl) {
        await new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            ctx.fillStyle = '#1f1f1f';
            ctx.fillRect(padding, y, width - padding * 2, carImageHeight);
            const imgAspect = img.width / img.height;
            const boxWidth = width - padding * 2;
            const drawWidth = Math.min(boxWidth, carImageHeight * imgAspect);
            const drawHeight = drawWidth / imgAspect;
            const imgX = padding + (boxWidth - drawWidth) / 2;
            const imgY = y + (carImageHeight - drawHeight) / 2;
            ctx.drawImage(img, imgX, imgY, drawWidth, drawHeight);
            resolve();
          };
          img.onerror = reject;
          img.src = canvasDataUrl;
        });
        y += carImageHeight + 30;
      } else {
        y += 20;
      }

      // Draw config items
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
      y += 25;

      let currentTab = '';
      configSummary.forEach((item) => {
        if (item.tab !== currentTab) {
          currentTab = item.tab;
          y += 10;
          ctx.fillStyle = '#81D8D0';
          ctx.font = 'bold 15px "Nunito Sans", sans-serif';
          ctx.fillText(item.tab, padding, y);
          y += lineHeight;
        }
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 14px "Nunito Sans", sans-serif';
        ctx.fillText(item.category, padding + 16, y);
        ctx.fillStyle = '#999';
        ctx.font = '14px "Nunito Sans", sans-serif';
        ctx.fillText(item.selected, padding + 260, y);
        if (item.price) {
          ctx.fillStyle = item.price === 'Included' ? '#81D8D0' : '#F6C974';
          ctx.font = '13px "Nunito Sans", sans-serif';
          const priceWidth = ctx.measureText(item.price).width;
          ctx.fillText(item.price, width - padding - priceWidth, y);
        }
        y += lineHeight;
      });

      y += 20;
      ctx.strokeStyle = '#333';
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
      y += 22;
      ctx.fillStyle = '#555';
      ctx.font = '12px "Nunito Sans", sans-serif';
      ctx.fillText(
        `Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · DTS Configurator`,
        padding,
        y
      );

      // Download
      const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
      if (!blob) throw new Error('Failed to generate image');

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${model.name.replace(/\s+/g, '_')}_Configuration.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setDownloadedImage(true);
      setTimeout(() => setDownloadedImage(false), 2000);
    } catch (err) {
      toast.error('Failed to download image. Please try again.');
    }
  }, [model, configSummary]);

  const handleDownloadText = useCallback(() => {
    try {
      const summary = `
═══════════════════════════════════════════
    ${model.name} — CONFIGURATION SUMMARY
    DTS · Drive to Survive
═══════════════════════════════════════════

Model: ${model.name}
${model.stats.engine} · ${model.stats.seating} · ${model.stats.length} × ${model.stats.width}

───────────────────────────────────────────
CONFIGURATION DETAILS
───────────────────────────────────────────
${configSummary
  .map((item) => `[${item.tab}] ${item.category}: ${item.selected}${item.price ? ` (${item.price})` : ''}`)
  .join('\n')}

───────────────────────────────────────────
Total Options: +$${totalPrice.toLocaleString()}
Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
═══════════════════════════════════════════
`;
      const blob = new Blob([summary], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${model.name.replace(/\s+/g, '_')}_Configuration.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setDownloadedText(true);
      setTimeout(() => setDownloadedText(false), 2000);
    } catch {
      toast.error('Failed to export text. Please try again.');
    }
  }, [model, configSummary, totalPrice]);

  return (
    <Drawer open={open} onOpenChange={(isOpen) => !isOpen && onClose()} snapPoints={[0.65, 0.9]} shouldScaleBackground={false}>
      <DrawerContent className="bg-[#111] border-white/10 max-h-[90vh]">
        <DrawerHeader className="text-left px-6 pt-4 pb-2">
          <div className="flex items-center gap-3 mb-1">
            <span className="font-configurator font-black text-[13px] text-[var(--dts-accent)] tracking-tight">DTS</span>
            <div className="w-px h-4 bg-white/10" />
            <DrawerTitle className="font-configurator font-bold text-[22px] text-white">
              {model.name}
            </DrawerTitle>
          </div>
          <DrawerDescription className="font-configurator text-[13px] text-white/40">
            Configuration Summary
          </DrawerDescription>
          {totalPrice > 0 && (
            <div className="flex items-center gap-2 mt-2">
              <span className="font-configurator text-[13px] text-white/50">Options Total</span>
              <span className="font-configurator font-bold text-[16px] text-[#F6C974]">
                +${totalPrice.toLocaleString()}
              </span>
            </div>
          )}
        </DrawerHeader>

        <ScrollArea className="flex-1 min-h-0 px-6">
          <div className="space-y-4 pb-4">
            {Object.entries(groupedByTab).map(([tabLabel, items]) => (
              <div key={tabLabel}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-4 rounded-full bg-[var(--dts-accent)]" />
                  <h3 className="font-configurator font-bold text-[12px] text-white/70 uppercase tracking-wider">
                    {tabLabel}
                  </h3>
                </div>
                <div className="space-y-1">
                  {items.map((item) => (
                    <div
                      key={item.categoryId}
                      className={`flex items-center justify-between py-2.5 px-3 rounded-[10px] transition-colors ${
                        item.isDefault ? 'bg-white/[0.03]' : 'bg-[var(--dts-accent)]/[0.06] border border-[var(--dts-accent)]/10'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-configurator font-semibold text-[12px] text-white/80">
                          {item.category}
                        </span>
                        <span className="font-configurator text-[11px] text-white/40">
                          {item.selected}
                        </span>
                      </div>
                      <span className={`font-configurator text-[11px] font-semibold ${
                        item.price === 'Included' ? 'text-[var(--dts-accent)]/60' : 'text-[#F6C974]'
                      }`}>
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <DrawerFooter className="flex-row gap-3 px-6 py-4 border-t border-white/[0.06]">
          <button
            onClick={handleDownloadImage}
            className="flex-1 h-[44px] bg-[var(--dts-accent)] rounded-[10px] hover:bg-[var(--dts-accent-hover)] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            {downloadedImage ? (
              <Check className="w-4 h-4 text-[#111]" />
            ) : (
              <Camera className="w-4 h-4 text-[#111]" />
            )}
            <span className="font-configurator font-bold text-[12px] text-[#111]">
              {downloadedImage ? 'Downloaded!' : 'Download Image'}
            </span>
          </button>
          <button
            onClick={handleDownloadText}
            className="h-[44px] px-5 border border-white/20 rounded-[10px] hover:bg-white/5 transition-all flex items-center gap-2"
          >
            {downloadedText ? (
              <Check className="w-4 h-4 text-[var(--dts-accent)]" />
            ) : (
              <Share2 className="w-4 h-4 text-white/70" />
            )}
            <span className="font-configurator font-medium text-[12px] text-white/80">
              {downloadedText ? 'Saved!' : 'Export'}
            </span>
          </button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ConfiguratorSummaryDrawer;
