// src/components/Background.tsx
import React from 'react';
import { Sprite } from '@pixi/react';
import { BackgroundProps } from '../types';
import { useTextureLoader } from '../hooks/useTextureLoader';

const Background: React.FC<BackgroundProps> = ({ width, height, backgroundImage }) => {
  const backgroundTexture = useTextureLoader(backgroundImage);

  if (!backgroundTexture) {
    return null;
  }

  return (
    <Sprite
      texture={backgroundTexture}
      width={width}
      height={height}
    />
  );
};

export default React.memo(Background);
