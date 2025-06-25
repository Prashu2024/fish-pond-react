import React, { useEffect, useRef, useState } from 'react';
import { TilingSprite } from '@pixi/react';
import { Texture } from '@pixi/core';
import { Assets } from '@pixi/assets';

interface WaterOverlayProps {
  width: number;
  height: number;
}

const WaterOverlay: React.FC<WaterOverlayProps> = ({ width, height }) => {
  const [texture, setTexture] = useState<Texture | null>(null);
  const [tilePos, setTilePos] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const load = async () => {
      const tex = await Assets.load<Texture>('https://pixijs.com/assets/tutorials/fish-pond/wave_overlay.png');
      setTexture(tex);
    };
    load();
  }, []);

  useEffect(() => {
    if (!texture) return;

    const animate = () => {
      setTilePos((prev) => ({
        x: prev.x - 1,
        y: prev.y - 1,
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => animationRef.current && cancelAnimationFrame(animationRef.current);
  }, [texture]);

  if (!texture) return null;

  return (
    <TilingSprite
      texture={texture}
      width={width}
      height={height}
      tilePosition={tilePos}
      alpha={0.5}
    />
  );
};

export default WaterOverlay;
