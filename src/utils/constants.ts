// src/utils/constants.ts
export const POND_CONFIG = {
    MIN_FISH_SPEED: 0.5,
    MAX_FISH_SPEED: 3,
    FISH_SIZE: 100,
    POND_MARGIN: 50,
    ANIMATION_SMOOTHNESS: 0.001,
    WAVE_AMPLITUDE: 0.5,
    COLLISION_THRESHOLD: 50
  } as const;
  
  export const TEXTURE_URLS = {
    BACKGROUND: 'https://pixijs.com/assets/tutorials/fish-pond/pond_background.jpg',
    FISH_BASE: 'https://pixijs.com/assets/tutorials/fish-pond/'
  } as const;
  
  export const THEMES = {
    OCEAN_BLUE: {
      id: 'ocean_blue',
      name: 'Ocean Blue',
      backgroundColor: 0x1099bb,
      description: 'Classic ocean blue theme'
    },
    TROPICAL: {
      id: 'tropical',
      name: 'Tropical Paradise',
      backgroundColor: 0x20b2aa,
      description: 'Warm tropical waters'
    },
    DEEP_SEA: {
      id: 'deep_sea',
      name: 'Deep Sea',
      backgroundColor: 0x191970,
      description: 'Mysterious deep ocean'
    },
    SUNSET: {
      id: 'sunset',
      name: 'Sunset Pond',
      backgroundColor: 0xff6b35,
      description: 'Beautiful sunset reflection'
    }
  } as const;
  
  // src/utils/performanceUtils.ts
  /**
   * Debounce function to limit how often a function can be called
   */
  export const debounce = <T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ): ((...args: Parameters<T>) => void) => {
    let timeoutId: NodeJS.Timeout;
    
    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };
  
  /**
   * Throttle function to limit function calls to once per interval
   */
  export const throttle = <T extends (...args: any[]) => void>(
    func: T,
    interval: number
  ): ((...args: Parameters<T>) => void) => {
    let lastCallTime = 0;
    
    return (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastCallTime >= interval) {
        lastCallTime = now;
        func(...args);
      }
    };
  };
  
  /**
   * Request animation frame wrapper with cleanup
   */
  export class AnimationManager {
    private animationId: number | null = null;
    
    start(callback: FrameRequestCallback): void {
      this.stop();
      this.animationId = requestAnimationFrame(callback);
    }
    
    stop(): void {
      if (this.animationId !== null) {
        cancelAnimationFrame(this.animationId);
        this.animationId = null;
      }
    }
    
    isRunning(): boolean {
      return this.animationId !== null;
    }
  }
  