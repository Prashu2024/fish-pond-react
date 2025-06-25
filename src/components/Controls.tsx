// src/components/Controls.tsx
import React from 'react';
import { FishType, PondTheme } from '../types';
import { FISH_TYPES } from '../utils/fishUtils';

interface ControlsProps {
  onAddFish: (type: FishType) => void;
  onClearPond: () => void;
  currentTheme: string;
  onThemeChange: (themeId: string) => void;
  themes: PondTheme[];
}

const Controls: React.FC<ControlsProps> = ({
  onAddFish,
  onClearPond,
  currentTheme,
  onThemeChange,
  themes
}) => {
  return (
    <div className="fixed top-4 left-4 bg-white bg-opacity-90 rounded-lg p-4 shadow-lg z-50">
      <h3 className="font-bold mb-3 text-gray-800">Fish Pond Controls</h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Add Fish:
        </label>
        <div className="flex flex-wrap gap-2">
          {FISH_TYPES.map(type => (
            <button
              key={type}
              onClick={() => onAddFish(type)}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Theme:
        </label>
        <select
          value={currentTheme}
          onChange={(e) => onThemeChange(e.target.value)}
          className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {themes.map(theme => (
            <option key={theme.id} value={theme.id}>
              {theme.name}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={onClearPond}
        className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Clear Pond
      </button>
    </div>
  );
};

export default Controls;