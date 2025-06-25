// src/components/Fish.tsx
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Sprite } from '@pixi/react';
import { useTextureLoader } from '../hooks/useTextureLoader';
import { FishProps, Position } from '../types';

interface FishState extends Position {
  direction: number;
  rotation: number;
}

const Fish: React.FC<FishProps> = ({
  id,
  fishType,
  initialX,
  initialY,
  speed,
  bounds,
  onFishClick
}) => {
  const texture = useTextureLoader(
    `https://pixijs.com/assets/tutorials/fish-pond/${fishType}.png`
  );

  const [state, setState] = useState<FishState>({
    x: initialX,
    y: initialY,
    direction: Math.random() * Math.PI * 2,
    rotation: 0
  });

  const turnSpeed = useRef(Math.random() * 0.02 - 0.01); // range [-0.01, 0.01]
  const animationRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      setState(prev => {
        let direction = prev.direction + turnSpeed.current;
        let x = prev.x + Math.sin(direction) * speed;
        let y = prev.y + Math.cos(direction) * speed;

        const rotation = -direction - Math.PI / 2;

        // Wrap bounds
        const pad = 50;
        if (x < -pad) x += bounds.width + pad * 2;
        if (x > bounds.width + pad) x -= bounds.width + pad * 2;
        if (y < -pad) y += bounds.height + pad * 2;
        if (y > bounds.height + pad) y -= bounds.height + pad * 2;

        return { x, y, direction, rotation };
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    if (texture) animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [texture, speed, bounds]);

  const handleClick = useCallback(() => {
    if (onFishClick) {
      onFishClick({ id, type: fishType, position: { x: state.x, y: state.y } });
    }
  }, [onFishClick, id, fishType, state]);

  if (!texture) return null;

  return (
    <Sprite
      texture={texture}
      x={state.x}
      y={state.y}
      rotation={state.rotation}
      anchor={0.5}
      scale={{ x: 0.6, y: 0.6 }}
      pointertap={handleClick}
    />
  );
};

export default React.memo(Fish);
