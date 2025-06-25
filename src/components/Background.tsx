// src/components/Background.tsx
import React from 'react';
import { Sprite } from '@pixi/react';
import { BackgroundProps } from '../types';
import { useTextureLoader } from '../hooks/useTextureLoader';

const Background: React.FC<BackgroundProps> = ({ width, height }) => {
  const backgroundTexture = useTextureLoader(
    'https://pixijs.com/assets/tutorials/fish-pond/pond_background.jpg'
  );

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