import { useMemo } from 'react';
import type { ConfiguratorModel, ConfigTab } from '@/data/configuratorData';
import { ALL_CATEGORIES } from './useConfiguratorState';
import type { ConfiguratorState } from './useConfiguratorState';

export interface ConfigItem {
  tab: string;
  tabId: string;
  category: string;
  categoryId: string;
  selected: string;
  price: string;
  isDefault: boolean;
}

function getOptionFromTabs(tabs: ConfigTab[], categoryId: string, optionId: string) {
  for (const tab of tabs) {
    const cat = tab.categories.find((c) => c.id === categoryId);
    if (cat) {
      const opt = cat.options.find((o) => o.id === optionId);
      if (opt) return { tab, opt };
    }
  }
  return null;
}

export function useConfiguratorComputed(state: ConfiguratorState, model: ConfiguratorModel) {
  const totalPrice = useMemo(() => {
    return Object.entries(state.selections).reduce((sum, [catId, optId]) => {
      const result = getOptionFromTabs(model.tabs, catId, optId);
      if (!result || !result.opt.price || result.opt.price === 'Included') return sum;
      const match = result.opt.price.match(/[\d,]+/);
      return sum + (match ? parseInt(match[0].replace(',', ''), 10) : 0);
    }, 0);
  }, [state.selections, model.tabs]);

  const progressPercent = useMemo(() => {
    return (state.touched.length / ALL_CATEGORIES.length) * 100;
  }, [state.touched]);

  const currentCategoryIndex = useMemo(() => {
    if (!state.activeCategory) return -1;
    return ALL_CATEGORIES.indexOf(state.activeCategory);
  }, [state.activeCategory]);

  const configSummary = useMemo((): ConfigItem[] => {
    return model.tabs.flatMap((tab) =>
      tab.categories
        .filter((cat) => state.selections[cat.id])
        .map((cat) => {
          const opt = cat.options.find((o) => o.id === state.selections[cat.id]);
          return {
            tab: tab.label,
            tabId: tab.id,
            category: cat.title,
            categoryId: cat.id,
            selected: opt?.name || '',
            price: opt?.price || '',
            isDefault: !state.touched.includes(cat.id),
          };
        })
    );
  }, [model.tabs, state.selections, state.touched]);

  const allCategories = useMemo(() => {
    return model.tabs.flatMap((tab) => tab.categories);
  }, [model.tabs]);

  return {
    totalPrice,
    progressPercent,
    currentCategoryIndex,
    configSummary,
    allCategories,
  };
}
