import React from 'react';
import './styles.css';

interface CircularProgressBarProps {
  progress: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  progress,
}) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  // Calcula o 'offset' do círculo para simular o progresso
  // 100% de progresso = offset 0
  // 0% de progresso = offset igual à circunferência
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className='progress-bar-container'>
      <svg className='progress-bar-svg' viewBox='0 0 120 120'>
        {/* Círculo de fundo, representa 100% */}
        <circle
          className='progress-bar-background'
          cx='60'
          cy='60'
          r={radius}
          strokeWidth='10'
        />

        {/* Círculo de progresso, animado pelo 'offset' */}
        <circle
          className='progress-bar-progress'
          cx='60'
          cy='60'
          r={radius}
          strokeWidth='10'
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className='progress-bar-text'>
        <span className='progress-bar-number-progress'>{progress}</span>
        <span className='progress-bar-percent-progress'>%</span>
      </div>
    </div>
  );
};

export default CircularProgressBar;
