// src/utils/storageUtils.ts
/**
 * Local storage utilities for saving pond state
 * Note: These won't work in Claude artifacts but are useful for real deployment
 */

export interface PondState {
    fishes: any[];
    theme: string;
    settings: {
      fishCount: number;
      animationSpeed: number;
    };
  }
  
  export const STORAGE_KEYS = {
    POND_STATE: 'fishPond_state',
    USER_PREFERENCES: 'fishPond_preferences'
  } as const;
  
  /**
   * Save pond state to localStorage
   */
  export const savePondState = (state: PondState): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.POND_STATE, JSON.stringify(state));
    } catch (error) {
      console.warn('Failed to save pond state:', error);
    }
  };
  
  /**
   * Load pond state from localStorage
   */
  export const loadPondState = (): PondState | null => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.POND_STATE);
      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      console.warn('Failed to load pond state:', error);
      return null;
    }
  };
  
  /**
   * Clear saved pond state
   */
  export const clearPondState = (): void => {
    try {
      localStorage.removeItem(STORAGE_KEYS.POND_STATE);
    } catch (error) {
      console.warn('Failed to clear pond state:', error);
    }
  };
  