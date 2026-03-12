import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONFIGURATOR_MODELS } from '@/data/configuratorData';
import type { ConfiguratorModel } from '@/data/configuratorData';
import type { ConfiguratorAction } from '@/hooks/useConfiguratorState';

interface Props {
  model: ConfiguratorModel;
  selectedModelIndex: number;
  dispatch: React.Dispatch<ConfiguratorAction>;
}

// All 8 paint colors as real swatches from configuratorData
const PAINT_SWATCHES = [
  { id: 'rosso-corsa', gradient: 'linear-gradient(130.6deg, #BE292A 20.06%, #FF5850 50.47%, #BA0506 83.49%)', label: 'Rosso Corsa' },
  { id: 'verde-mantis', gradient: 'linear-gradient(130.6deg, #19C419 20.06%, #41EA4D 50.47%, #00B71B 83.49%)', label: 'Verde Mantis' },
  { id: 'giallo-orion', gradient: 'linear-gradient(130.6deg, #D4AC0D 20.06%, #F9E154 50.47%, #B7950B 83.49%)', label: 'Giallo Orion' },
  { id: 'bianco-monocerus', gradient: 'linear-gradient(130.6deg, #D5D8DC 20.06%, #FDFEFE 50.47%, #BDC3C7 83.49%)', label: 'Bianco Monocerus' },
  { id: 'nero-nemesis', gradient: 'linear-gradient(130.6deg, #0A0A0A 20.06%, #3D3D3D 50.47%, #000000 83.49%)', label: 'Nero Nemesis' },
  { id: 'blu-nethuns', gradient: 'linear-gradient(130.6deg, #1A5276 20.06%, #3498DB 50.47%, #154360 83.49%)', label: 'Blu Nethuns' },
  { id: 'grigio-telesto', gradient: 'linear-gradient(130.6deg, #616A6B 20.06%, #95A5A6 50.47%, #515A5A 83.49%)', label: 'Grigio Telesto' },
  { id: 'arancio-borealis', gradient: 'linear-gradient(130.6deg, #CA6F1E 20.06%, #F0932B 50.47%, #A04000 83.49%)', label: 'Arancio Borealis' },
];

const ConfiguratorLanding = ({ model, selectedModelIndex, dispatch }: Props) => {
  const [activeColor, setActiveColor] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToModel = (index: number) => {
    setDirection(index > selectedModelIndex ? 1 : -1);
    dispatch({ type: 'SELECT_MODEL', index });
  };

  const prevModel = () => {
    const newIndex = (selectedModelIndex - 1 + CONFIGURATOR_MODELS.length) % CONFIGURATOR_MODELS.length;
    goToModel(newIndex);
  };

  const nextModel = () => {
    const newIndex = (selectedModelIndex + 1) % CONFIGURATOR_MODELS.length;
    goToModel(newIndex);
  };

  // Visual-only color preview on the landing (does not modify config state)
  const handleColorSelect = useCallback((index: number) => {
    setActiveColor(index);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevModel();
      else if (e.key === 'ArrowRight') nextModel();
      else if (e.key === 'Enter') dispatch({ type: 'START_CONFIGURATION' });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedModelIndex]);

  const currentSwatch = PAINT_SWATCHES[activeColor];

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-[#111]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-30 w-full h-[60px] sm:h-[70px] lg:h-[80px] flex items-center justify-between px-6 lg:px-10 shrink-0"
      >
        <Link
          to="/"
          className="flex items-center gap-2.5 text-white/60 hover:text-white transition-all group"
        >
          <Home className="w-4 h-4" />
          <span className="font-configurator font-black text-[16px] lg:text-[18px] tracking-tight text-white/90 group-hover:text-white transition-colors">
            DTS
          </span>
        </Link>

        <span className="absolute left-1/2 -translate-x-1/2 font-configurator font-light text-[11px] tracking-[0.4em] text-white/30 uppercase">
          Drive to Survive
        </span>

        <span className="font-configurator text-[12px] text-white/30 font-medium">
          {String(selectedModelIndex + 1).padStart(2, '0')} / {String(CONFIGURATOR_MODELS.length).padStart(2, '0')}
        </span>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 relative flex flex-col justify-between overflow-hidden">

        {/* MODEL Letter */}
        <div className="absolute left-6 lg:left-[8%] top-4 lg:top-[6%] z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={model.id}
              initial={{ opacity: 0, x: direction * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-configurator text-[11px] sm:text-[13px] lg:text-[15px] tracking-[0.35em] font-light text-white/40 block">
                MODEL
              </span>
              <span
                className="font-serif italic font-bold text-[70px] sm:text-[100px] lg:text-[150px] leading-[0.78] tracking-[-0.02em] block"
                style={{ color: model.activeColor }}
              >
                {model.letter}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Model selector dots */}
        <div className="absolute left-4 lg:left-[4%] top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2.5">
          {CONFIGURATOR_MODELS.map((m, i) => (
            <button
              key={m.id}
              onClick={() => goToModel(i)}
              className={`rounded-full transition-all duration-300 ${
                selectedModelIndex === i
                  ? 'w-2.5 h-2.5 scale-100'
                  : 'w-2 h-2 opacity-40 hover:opacity-70'
              }`}
              style={{
                backgroundColor: selectedModelIndex === i ? m.activeColor : '#fff',
              }}
              title={m.name}
              aria-label={`Select ${m.name}`}
            />
          ))}
        </div>

        {/* Model description */}
        <div className="absolute left-6 lg:left-[8%] top-[38%] lg:top-[40%] z-20 max-w-[280px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={model.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="font-configurator font-light text-[13px] lg:text-[15px] leading-relaxed text-white/35"
            >
              {model.desc}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Car Image area — transparent to show 3D behind */}
        <div className="flex-1 flex items-center justify-center relative px-4">
          <div className="absolute w-[55%] h-[25%] bottom-[18%] bg-[#050505] blur-[50px] rounded-full pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={model.id}
              initial={{ opacity: 0, scale: 0.92, x: direction * 60 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.96, x: direction * -60 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-[70%] sm:w-[55%] lg:w-[45%] max-w-[864px] aspect-video"
            >
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-full object-contain select-none"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          <motion.button
            onClick={prevModel}
            className="absolute left-[8%] lg:left-[15%] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous model"
          >
            <ChevronLeft className="w-5 h-5 text-white/60" />
          </motion.button>
          <motion.button
            onClick={nextModel}
            className="absolute right-[8%] lg:right-[15%] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next model"
          >
            <ChevronRight className="w-5 h-5 text-white/60" />
          </motion.button>
        </div>

        {/* Bottom: Color Swatches + START CONFIGURATION */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-20 flex items-center justify-center gap-4 lg:gap-6 px-4 lg:px-[8%] pb-5 lg:pb-7"
        >
          <div className="flex items-center gap-2 px-3 py-2 bg-white/[0.05] rounded-[10px] border border-white/[0.08] backdrop-blur-sm overflow-x-auto hide-scrollbar">
            {PAINT_SWATCHES.map((swatch, i) => (
              <motion.button
                key={swatch.id}
                onClick={() => handleColorSelect(i)}
                className={`w-[40px] h-[30px] lg:w-[50px] lg:h-[38px] rounded-[6px] transition-all duration-200 shrink-0 ${
                  activeColor === i
                    ? 'border-2 border-white shadow-lg'
                    : 'border border-white/15 hover:border-white/40'
                }`}
                style={{
                  background: swatch.gradient,
                  boxShadow: activeColor === i ? '0 4px 15px rgba(0,0,0,0.4)' : '0 4px 4px 2px rgba(0,0,0,0.25)',
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                title={swatch.label}
                aria-label={`Select ${swatch.label}`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.span
              key={currentSwatch.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="hidden lg:block font-configurator text-[13px] text-white/35 font-light whitespace-nowrap"
            >
              {currentSwatch.label}
            </motion.span>
          </AnimatePresence>

          <div className="flex-1" />

          <motion.button
            onClick={() => dispatch({ type: 'START_CONFIGURATION' })}
            className="h-[48px] lg:h-[54px] px-6 lg:px-8 bg-[var(--dts-accent)] rounded-[10px] hover:bg-[var(--dts-accent-hover)] transition-all flex items-center gap-3 group shrink-0 shadow-lg"
            style={{ boxShadow: '0 8px 30px var(--dts-accent-glow)' }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="font-configurator font-bold text-[13px] lg:text-[14px] text-[#111] tracking-wide">
              START CONFIGURATION
            </span>
            <ChevronRight className="w-4 h-4 text-[#111] group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ConfiguratorLanding;
