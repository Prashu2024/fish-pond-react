// src/components/FishPond.tsx
import React, { useState, useCallback } from 'react';
import { Stage } from '@pixi/react';
import { useWindowDimensions } from '../hooks/useWindowDimentions';
import { FishData, FishClickData, FishType, PondTheme } from '../types';
import { generateRandomFish } from '../utils/fishUtils';
import Background from './Background';
import Fish from './Fish';
import FishInfoModal from './FishInfoModal';
import Controls from './Controls';

const POND_THEMES: PondTheme[] = [
  {
    id: 'default',
    name: 'Ocean Blue',
    backgroundColor: 0x1099bb,
    backgroundImage: 'https://pixijs.com/assets/tutorials/fish-pond/pond_background.jpg'
  },
  {
    id: 'tropical',
    name: 'Tropical',
    backgroundColor: 0x20b2aa,
    backgroundImage: 'https://pixijs.com/assets/tutorials/fish-pond/pond_background.jpg'
  },
  {
    id: 'deep',
    name: 'Deep Sea',
    backgroundColor: 0x191970,
    backgroundImage: 'https://pixijs.com/assets/tutorials/fish-pond/pond_background.jpg'
  }
];

const FishPond: React.FC = () => {
  const dimensions = useWindowDimensions();
  const [fishes, setFishes] = useState<FishData[]>(() => 
    generateRandomFish(dimensions, 8)
  );
  const [selectedFish, setSelectedFish] = useState<FishClickData | null>(null);
  const [currentTheme, setCurrentTheme] = useState('default');

  const handleFishClick = useCallback((fishData: FishClickData) => {
    setSelectedFish(fishData);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedFish(null);
  }, []);

  const handleAddFish = useCallback((type: FishType) => {
    const newFish: FishData = {
      id: `fish-${Date.now()}`,
      type,
      position: {
        x: Math.random() * (dimensions.width - 100),
        y: 100 + Math.random() * (dimensions.height - 200)
      },
      speed: 0.5 + Math.random() * 2,
      direction: Math.random() > 0.5 ? 1 : -1
    };
    setFishes(prev => [...prev, newFish]);
  }, [dimensions]);

  const handleClearPond = useCallback(() => {
    setFishes([]);
  }, []);

  const handleThemeChange = useCallback((themeId: string) => {
    setCurrentTheme(themeId);
  }, []);

  const currentThemeData = POND_THEMES.find(theme => theme.id === currentTheme) || POND_THEMES[0];

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <Stage
        width={dimensions.width}
        height={dimensions.height}
        options={{
          backgroundColor: currentThemeData.backgroundColor,
          resizeTo: window
        }}
      >
        <Background width={dimensions.width} height={dimensions.height} />
        
        {fishes.map(fish => (
          <Fish
            key={fish.id}
            id={fish.id}
            fishType={fish.type}
            initialX={fish.position.x}
            initialY={fish.position.y}
            speed={fish.speed}
            direction={fish.direction}
            bounds={dimensions}
            onFishClick={handleFishClick}
          />
        ))}
      </Stage>

      <Controls
        onAddFish={handleAddFish}
        onClearPond={handleClearPond}
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
        themes={POND_THEMES}
      />

      <FishInfoModal
        isOpen={!!selectedFish}
        fishData={selectedFish}
        onClose={handleCloseModal}
      />

      <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 rounded-lg p-3 text-sm text-gray-600">
        Fish Count: {fishes.length} | Click on fish for info
      </div>
    </div>
  );
};

export default FishPond;
