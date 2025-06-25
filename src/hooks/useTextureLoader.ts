import { useState, useEffect } from 'react';
import { Assets } from '@pixi/assets';
import { Texture } from '@pixi/texture';

export const useTextureLoader = (url: string): Texture | null => {
  const [texture, setTexture] = useState<Texture | null>(null);

  useEffect(() => {
    const loadTexture = async () => {
      try {
        const loadedTexture = await Assets.load<Texture>(url);
        setTexture(loadedTexture);
      } catch (error) {
        console.error(`Failed to load texture from ${url}:`, error);
      }
    };

    loadTexture();
  }, [url]);

  return texture;
};
