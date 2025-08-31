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
    <div className='container-progress-bar'>
      <svg className='svg-progress-bar' viewBox='0 0 120 120'>
        {/* Círculo de fundo, representa 100% */}
        <circle
          className='background-progress-bar'
          cx='60'
          cy='60'
          r={radius}
          strokeWidth='10'
        />

        {/* Círculo de progresso, animado pelo 'offset' */}
        <circle
          className='progress-progress-bar'
          cx='60'
          cy='60'
          r={radius}
          strokeWidth='10'
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className='text-progress-bar'>
        <span className='text-progress-progress-bar'>{progress}</span>
        <span className='percent-progress-progress-bar'>%</span>
      </div>
    </div>
  );
};

export default CircularProgressBar;
