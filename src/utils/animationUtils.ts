// src/utils/animationUtils.ts
/**
 * Easing functions for smooth animations
 */
export const easeInOut = (t: number): number => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };
  
  export const easeOut = (t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  };
  
  /**
   * Linear interpolation between two values
   */
  export const lerp = (start: number, end: number, factor: number): number => {
    return start + (end - start) * factor;
  };
  
  /**
   * Clamp a value between min and max
   */
  export const clamp = (value: number, min: number, max: number): number => {
    return Math.min(Math.max(value, min), max);
  };
  
  /**
   * Generate smooth wave movement for fish
   */
  export const generateWaveMovement = (time: number, amplitude: number = 1, frequency: number = 1): number => {
    return Math.sin(time * frequency) * amplitude;
  };
  
  /**
   * Calculate fish direction based on movement
   */
  export const calculateDirection = (currentX: number, previousX: number): number => {
    return currentX > previousX ? 1 : -1;
  };