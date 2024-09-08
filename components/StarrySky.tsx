import React from 'react';

const StarrySky: React.FC = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      {/* 定义背景 */}
      <rect width="100%" height="100%" fill="black" />

      {/* 生成更多闪烁的星星 */}
      <circle cx="100" cy="150" r="2" fill="white">
        <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="300" r="1.5" fill="white">
        <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="350" cy="100" r="1" fill="white">
        <animate attributeName="opacity" values="0;1;0" dur="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="450" cy="400" r="2.5" fill="white">
        <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="600" cy="200" r="1.8" fill="white">
        <animate attributeName="opacity" values="0;1;0" dur="0.7s" repeatCount="indefinite" />
      </circle>
      <circle cx="750" cy="50" r="1.2" fill="white">
        <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="700" cy="500" r="2" fill="white">
        <animate attributeName="opacity" values="0;1;0" dur="0.9s" repeatCount="indefinite" />
      </circle>
      <circle cx="550" cy="350" r="1" fill="white">
        <animate attributeName="opacity" values="0;1;0" dur="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="300" cy="450" r="1.7" fill="white">
        <animate attributeName="opacity" values="0;1;0" dur="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="550" r="2" fill="white">
        <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="50" r="1.2" fill="white">
        <animate attributeName="opacity" values="0;1;0" dur="0.7s" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="200" r="1.3" fill="white">
        <animate attributeName="opacity" values="0;1;0" dur="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="600" cy="400" r="1.4" fill="white">
        <animate attributeName="opacity" values="0;1;0" dur="0.9s" repeatCount="indefinite" />
      </circle>

      {/* 添加移动的星星 */}
      <circle cx="50" cy="50" r="1.5" fill="white">
        <animate attributeName="cx" from="50" to="800" dur="4s" repeatCount="indefinite" />
        <animate attributeName="cy" from="50" to="600" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="750" cy="550" r="2" fill="white">
        <animate attributeName="cx" from="750" to="0" dur="3s" repeatCount="indefinite" />
        <animate attributeName="cy" from="550" to="0" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="100" r="2.5" fill="white">
        <animate attributeName="cx" from="400" to="0" dur="5s" repeatCount="indefinite" />
        <animate attributeName="cy" from="100" to="600" dur="5s" repeatCount="indefinite" />
      </circle>

      {/* 中间添加带有延时动画的 "Welcome" 文本 */}
      <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="48" font-family="Arial" dy=".3em">
        <tspan>
          Welcome
          <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.2;0.4;0.8;1" dur="6s" repeatCount="indefinite" />
        </tspan>
      </text>
    </svg>
  );
};

export default StarrySky;
