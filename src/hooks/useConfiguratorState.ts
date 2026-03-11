import { useReducer } from 'react';
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
  | { type: 'RESET_ALL' }
  | { type: 'SHOW_DOWNLOAD' }
  | { type: 'HIDE_DOWNLOAD' };

const initialState: ConfiguratorState = {
  phase: 'landing',
  selectedModelIndex: 0,
  sidebarOpen: false,
  activeTab: 'exterior',
  activeCategory: null,
  selections: { ...DEFAULT_SELECTIONS },
  showDownloadModal: false,
};

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

    case 'SELECT_OPTION':
      return {
        ...state,
        selections: { ...state.selections, [action.categoryId]: action.optionId },
      };

    case 'RESET_ALL':
      return {
        ...state,
        selections: { ...DEFAULT_SELECTIONS },
        activeCategory: null,
        activeTab: 'exterior',
      };

    case 'SHOW_DOWNLOAD':
      return { ...state, showDownloadModal: true };

    case 'HIDE_DOWNLOAD':
      return { ...state, showDownloadModal: false };

    default:
      return state;
  }
}

export function useConfiguratorState() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const model = CONFIGURATOR_MODELS[state.selectedModelIndex];
  return { state, dispatch, model };
}
