// src/components/FishInfoModal.tsx
import React from 'react';
import { FishInfoModalProps } from '../types';
import { FISH_INFO } from '../utils/fishUtils';

const FishInfoModal: React.FC<FishInfoModalProps> = ({ isOpen, fishData, onClose }) => {
  if (!isOpen || !fishData) {
    return null;
  }

  const fishInfo = FISH_INFO[fishData.type];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm mx-4 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">{fishInfo.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>
        <p className="text-gray-600 mb-4">{fishInfo.description}</p>
        <div className="text-sm text-gray-500">
          <p>Position: ({Math.round(fishData.position.x)}, {Math.round(fishData.position.y)})</p>
          <p>Type: {fishData.type}</p>
        </div>
      </div>
    </div>
  );
};

export default FishInfoModal;
