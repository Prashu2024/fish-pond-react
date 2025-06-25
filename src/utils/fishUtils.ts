// src/utils/fishUtils.ts
import { FishData, FishType, Dimensions } from '../types';

export const FISH_TYPES: FishType[] = ['fish1', 'fish2', 'fish3', 'fish4', 'fish5'];

export const FISH_INFO = {
  fish1: { 
    name: 'Goldfish', 
    description: 'A beautiful golden fish that loves to swim around the pond. Known for its bright color and peaceful nature.',
    habitat: 'Shallow waters',
    diet: 'Omnivore'
  },
  fish2: { 
    name: 'Blue Tang', 
    description: 'A vibrant blue fish known for its friendly nature and striking appearance. Very social and active.',
    habitat: 'Coral reefs',
    diet: 'Herbivore'
  },
  fish3: { 
    name: 'Clownfish', 
    description: 'Orange and white striped fish, very playful and curious. Popular in aquariums worldwide.',
    habitat: 'Anemone gardens',
    diet: 'Omnivore'
  },
  fish4: { 
    name: 'Angel Fish', 
    description: 'Elegant fish with flowing fins and graceful movement. Known for its majestic appearance.',
    habitat: 'Tropical waters',
    diet: 'Omnivore'
  },
  fish5: { 
    name: 'Tropical Fish', 
    description: 'Colorful tropical fish that adds vibrant life to the pond. Each one has unique patterns.',
    habitat: 'Warm waters',
    diet: 'Plankton'
  }
};

/**
 * Generates an array of random fish data for initial pond population
 */
export const generateRandomFish = (bounds: Dimensions, count: number = 10): FishData[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: `fish-${index}-${Date.now()}`,
    type: FISH_TYPES[Math.floor(Math.random() * FISH_TYPES.length)],
    position: {
      x: Math.random() * (bounds.width - 100),
      y: 100 + Math.random() * (bounds.height - 200)
    },
    speed: 0.5 + Math.random() * 2,
    direction: Math.random() > 0.5 ? 1 : -1
  }));
};

/**
 * Creates a single random fish at a specific position
 */
export const createRandomFish = (bounds: Dimensions, fishType?: FishType): FishData => {
  return {
    id: `fish-${Date.now()}-${Math.random()}`,
    type: fishType || FISH_TYPES[Math.floor(Math.random() * FISH_TYPES.length)],
    position: {
      x: Math.random() * (bounds.width - 100),
      y: 100 + Math.random() * (bounds.height - 200)
    },
    speed: 0.5 + Math.random() * 2,
    direction: Math.random() > 0.5 ? 1 : -1
  };
};

/**
 * Validates if a position is within pond bounds
 */
export const isValidPosition = (position: { x: number; y: number }, bounds: Dimensions): boolean => {
  return position.x >= 0 && 
         position.x <= bounds.width - 100 && 
         position.y >= 50 && 
         position.y <= bounds.height - 100;
};

/**
 * Calculates distance between two points
 */
export const calculateDistance = (
  point1: { x: number; y: number }, 
  point2: { x: number; y: number }
): number => {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};

/**
 * Checks if two fish are colliding (for future collision detection)
 */
export const areColliding = (fish1: FishData, fish2: FishData, threshold: number = 50): boolean => {
  return calculateDistance(fish1.position, fish2.position) < threshold;
};