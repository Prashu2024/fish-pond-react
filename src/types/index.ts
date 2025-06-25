import { Texture } from 'pixi.js';

export interface Dimensions {
  width: number;
  height: number;
}

export interface Position {
  x: number;
  y: number;
}

export interface FishData {
  id: string;
  type: FishType;
  position: Position;
  speed: number;
  direction: number;
}

export interface FishClickData {
  type: FishType;
  position: Position;
  id: string;
}

export type FishType = 'fish1' | 'fish2' | 'fish3' | 'fish4' | 'fish5';

export interface BackgroundProps {
  width: number;
  height: number;
  backgroundImage: string;
}

export interface FishProps {
  id: string;
  fishType: FishType;
  initialX: number;
  initialY: number;
  speed: number;
  direction: number;
  bounds: Dimensions;
  onFishClick?: (data: FishClickData) => void;
}

export interface FishInfoModalProps {
  isOpen: boolean;
  fishData: FishClickData | null;
  onClose: () => void;
}

export interface PondTheme {
  id: string;
  name: string;
  backgroundColor: number;
  backgroundImage: string;
}
