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
  