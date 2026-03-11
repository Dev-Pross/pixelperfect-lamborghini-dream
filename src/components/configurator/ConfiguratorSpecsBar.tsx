import type { ModelStats } from '@/data/configuratorData';

interface Props {
  stats: ModelStats;
}

const specs = (s: ModelStats) => [
  `Length: ${s.length}`,
  `Width: ${s.width}`,
  `Depth: ${s.depth}`,
  `Seating: ${s.seating}`,
  `Engine Brand: ${s.brand}`,
  `Engine: ${s.engine}`,
  `Certification: ${s.cert}`,
];

const ConfiguratorSpecsBar = ({ stats }: Props) => {
  const items = specs(stats);

  return (
    <div className="w-full bg-black shrink-0">
      <div className="w-full max-w-[1620px] mx-auto px-4 sm:px-6 lg:px-0 py-4 lg:py-5 flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-2 lg:gap-0">
        {items.map((item, i) => (
          <div key={item} className="flex items-center gap-0">
            <span className="whitespace-nowrap text-[11px] sm:text-[13px] lg:text-[15px] text-[#E3E3E3] font-light font-['Nunito_Sans',sans-serif]">
              {item}
            </span>
            {i < items.length - 1 && (
              <div className="hidden lg:block w-[1px] h-[30px] bg-[#E3E3E3] ml-4 lg:ml-6 xl:ml-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConfiguratorSpecsBar;
