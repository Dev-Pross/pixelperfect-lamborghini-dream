import { Eye, Image, Grid3X3, Camera, ArrowLeft, ArrowRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ConfiguratorAction, ViewMode } from '@/hooks/useConfiguratorState';

interface Props {
  dispatch: React.Dispatch<ConfiguratorAction>;
  sidebarOpen: boolean;
  currentViewMode: ViewMode;
  zoomLevel: number;
  viewAngle: number;
}

const VIEW_MODES: { mode: ViewMode; icon: typeof Eye; label: string }[] = [
  { mode: 'normal', icon: Eye, label: 'Normal' },
  { mode: 'studio', icon: Image, label: 'Studio' },
  { mode: 'wireframe', icon: Grid3X3, label: 'Wireframe' },
  { mode: 'xray', icon: Camera, label: 'X-Ray' },
];

const ConfiguratorToolbar = ({ dispatch, sidebarOpen, currentViewMode, zoomLevel, viewAngle }: Props) => {
  const zoomPercent = Math.round(zoomLevel * 100);

  return (
    <div
      className={`absolute bottom-[70px] lg:bottom-[80px] z-30 flex items-center gap-2.5 transition-all duration-500 ${
        sidebarOpen
          ? 'left-[34%] -translate-x-1/2 lg:left-[34%]'
          : 'left-1/2 -translate-x-1/2'
      }`}
    >
      {/* View Mode Controls */}
      <div className="flex items-center bg-[rgba(0,0,0,0.65)] rounded-[10px] backdrop-blur-sm overflow-hidden">
        {VIEW_MODES.map(({ mode, icon: Icon, label }) => (
          <motion.button
            key={mode}
            onClick={() => dispatch({ type: 'SET_VIEW_MODE', mode })}
            className={`relative px-3.5 py-3 transition-colors ${
              currentViewMode === mode
                ? 'text-[#81D8D0]'
                : 'text-[#CACACA] hover:text-white'
            }`}
            whileTap={{ scale: 0.9 }}
            title={label}
          >
            <Icon className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]" strokeWidth={1.8} />
            {currentViewMode === mode && (
              <motion.div
                layoutId="viewModeIndicator"
                className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#81D8D0]"
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Rotation Controls */}
      <div className="flex items-center gap-1 px-3 py-2.5 bg-[rgba(0,0,0,0.65)] rounded-[10px] backdrop-blur-sm">
        <motion.button
          onClick={() => dispatch({ type: 'ROTATE_LEFT' })}
          className="text-[#CACACA] hover:text-white transition-colors p-0.5"
          whileTap={{ scale: 0.85, x: -3 }}
          title="Rotate left (30°)"
        >
          <ArrowLeft className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]" strokeWidth={2} />
        </motion.button>

        {/* Angle indicator */}
        <span className="text-[10px] text-white/40 font-['Nunito_Sans',sans-serif] font-medium w-[32px] text-center tabular-nums">
          {Math.round(((viewAngle % 360) + 360) % 360)}°
        </span>

        <motion.button
          onClick={() => dispatch({ type: 'ROTATE_RIGHT' })}
          className="text-[#CACACA] hover:text-white transition-colors p-0.5"
          whileTap={{ scale: 0.85, x: 3 }}
          title="Rotate right (30°)"
        >
          <ArrowRight className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]" strokeWidth={2} />
        </motion.button>
      </div>

      {/* Zoom Controls */}
      <div className="flex items-center gap-1 px-3 py-2.5 bg-[rgba(0,0,0,0.65)] rounded-[10px] backdrop-blur-sm">
        <motion.button
          onClick={() => dispatch({ type: 'ZOOM_IN' })}
          className="text-[#CACACA] hover:text-white transition-colors p-0.5"
          whileTap={{ scale: 0.85 }}
          title="Zoom in"
        >
          <ZoomIn className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]" strokeWidth={2} />
        </motion.button>

        {/* Zoom percentage */}
        <span className="text-[10px] text-white/40 font-['Nunito_Sans',sans-serif] font-medium w-[30px] text-center tabular-nums">
          {zoomPercent}%
        </span>

        <motion.button
          onClick={() => dispatch({ type: 'ZOOM_OUT' })}
          className="text-[#CACACA] hover:text-white transition-colors p-0.5"
          whileTap={{ scale: 0.85 }}
          title="Zoom out"
        >
          <ZoomOut className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]" strokeWidth={2} />
        </motion.button>
      </div>

      {/* Reset view */}
      <motion.button
        onClick={() => dispatch({ type: 'RESET_VIEW' })}
        className="p-2.5 bg-[rgba(0,0,0,0.65)] rounded-[10px] backdrop-blur-sm text-[#CACACA] hover:text-white transition-colors"
        whileTap={{ scale: 0.85, rotate: -90 }}
        title="Reset view"
      >
        <RotateCcw className="w-[16px] h-[16px] lg:w-[18px] lg:h-[18px]" strokeWidth={2} />
      </motion.button>
    </div>
  );
};

export default ConfiguratorToolbar;
