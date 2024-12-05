import React from 'react';
import { ImageDisplay } from './game/ImageDisplay';
import { NavigationControls } from './game/NavigationControls';
import { AnswerDisplay } from './game/AnswerDisplay';
import { useGameStore } from '../store/gameStore';

export const GameView: React.FC = () => {
  const { currentImageIndex } = useGameStore();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
      <div 
        key={currentImageIndex} 
        className="relative max-w-2xl mx-auto animate-fade-in"
      >
        <ImageDisplay />
        <NavigationControls />
        <AnswerDisplay />
      </div>
    </div>
  );
};