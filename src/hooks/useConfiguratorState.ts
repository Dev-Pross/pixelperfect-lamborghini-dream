import { useReducer, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { CONFIGURATOR_MODELS, DEFAULT_SELECTIONS } from '@/data/configuratorData';

export type Phase = 'landing' | 'canvas';
export type TabId = 'exterior' | 'interior' | 'equipments';

export interface ConfiguratorState {
  phase: Phase;
  selectedModelIndex: number;
  sidebarOpen: boolean;
  activeTab: TabId;
  activeCategory: string | null;
  selections: Record<string, string>;
  touched: string[];
  showDownloadModal: boolean;
}

export type ConfiguratorAction =
  | { type: 'SELECT_MODEL'; index: number }
  | { type: 'START_CONFIGURATION' }
  | { type: 'BACK_TO_LANDING' }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'OPEN_SIDEBAR' }
  | { type: 'CLOSE_SIDEBAR' }
  | { type: 'SET_TAB'; tab: TabId }
  | { type: 'SELECT_CATEGORY'; categoryId: string }
  | { type: 'BACK_TO_CATEGORIES' }
  | { type: 'SELECT_OPTION'; categoryId: string; optionId: string }
  | { type: 'NAVIGATE_CATEGORY'; direction: 'next' | 'prev' }
  | { type: 'RESET_ALL' }
  | { type: 'SHOW_DOWNLOAD' }
  | { type: 'HIDE_DOWNLOAD' };

const ALL_CATEGORY_IDS = [
  'paint', 'wheels', 'window-tint', 'body-kit',
  'upholstery', 'dashboard', 'steering', 'ambient',
  'audio', 'performance',
];

function createInitialState(modelIndex: number): ConfiguratorState {
  return {
    phase: 'landing',
    selectedModelIndex: modelIndex,
    sidebarOpen: false,
    activeTab: 'exterior',
    activeCategory: null,
    selections: { ...DEFAULT_SELECTIONS },
    touched: [],
    showDownloadModal: false,
  };
}

function reducer(state: ConfiguratorState, action: ConfiguratorAction): ConfiguratorState {
  switch (action.type) {
    case 'SELECT_MODEL':
      return { ...state, selectedModelIndex: action.index };

    case 'START_CONFIGURATION':
      return { ...state, phase: 'canvas', sidebarOpen: true };

    case 'BACK_TO_LANDING':
      return {
        ...state,
        phase: 'landing',
        sidebarOpen: false,
        activeCategory: null,
        activeTab: 'exterior',
      };

    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
        activeCategory: state.sidebarOpen ? null : state.activeCategory,
      };

    case 'OPEN_SIDEBAR':
      return { ...state, sidebarOpen: true };

    case 'CLOSE_SIDEBAR':
      return { ...state, sidebarOpen: false, activeCategory: null };

    case 'SET_TAB':
      return { ...state, activeTab: action.tab, activeCategory: null };

    case 'SELECT_CATEGORY':
      return { ...state, activeCategory: action.categoryId };

    case 'BACK_TO_CATEGORIES':
      return { ...state, activeCategory: null };

    case 'SELECT_OPTION': {
      const newTouched = state.touched.includes(action.categoryId)
        ? state.touched
        : [...state.touched, action.categoryId];
      return {
        ...state,
        selections: { ...state.selections, [action.categoryId]: action.optionId },
        touched: newTouched,
      };
    }

    case 'NAVIGATE_CATEGORY': {
      const currentIndex = state.activeCategory
        ? ALL_CATEGORY_IDS.indexOf(state.activeCategory)
        : -1;
      let nextIndex: number;
      if (action.direction === 'next') {
        nextIndex = currentIndex < ALL_CATEGORY_IDS.length - 1 ? currentIndex + 1 : 0;
      } else {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : ALL_CATEGORY_IDS.length - 1;
      }
      return { ...state, activeCategory: ALL_CATEGORY_IDS[nextIndex] };
    }

    case 'RESET_ALL':
      return {
        ...state,
        selections: { ...DEFAULT_SELECTIONS },
        activeCategory: null,
        activeTab: 'exterior',
        touched: [],
      };

    case 'SHOW_DOWNLOAD':
      return { ...state, showDownloadModal: true };

    case 'HIDE_DOWNLOAD':
      return { ...state, showDownloadModal: false };

    default:
      return state;
  }
}

export const ALL_CATEGORIES = ALL_CATEGORY_IDS;

export function useConfiguratorState() {
  const { modelSlug } = useParams<{ modelSlug?: string }>();

  const initialModelIndex = useMemo(() => {
    if (!modelSlug) return 0;
    const idx = CONFIGURATOR_MODELS.findIndex((m) => m.slug === modelSlug);
    return idx >= 0 ? idx : 0;
  }, [modelSlug]);

  const [state, dispatch] = useReducer(reducer, initialModelIndex, createInitialState);
  const model = CONFIGURATOR_MODELS[state.selectedModelIndex];
  return { state, dispatch, model };
}
