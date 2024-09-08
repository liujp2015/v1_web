import Image from "next/image";
import { Inter } from "next/font/google";
import StarrySky from '../components/StarrySky'; // 导入 SVG 组件
import { useRouter } from 'next/router'; // 导入 useRouter Hook
import React, { useEffect, useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter(); // 使用 useRouter Hook 获取路由信息
  const isHome = router.pathname === '/'; // 确定当前页面是否为主页

  // 初始化 isLoading 状态，根据是否为主页来设置初始值
  const [isLoading, setIsLoading] = useState<boolean>(isHome);
  // 初始化状态，用于控制星空动画和内容的显示
  const [isStarrySkyVisible, setIsStarrySkyVisible] = useState<boolean>(true); // 星空动画初始可见
  const [fadeOut, setFadeOut] = useState<boolean>(false); // 控制淡出动画的状态
  useEffect(() => {
    if (isHome) {
      // 星空动画持续显示的时间（例如：2秒）
      const starrySkyTimer = setTimeout(() => {
        setFadeOut(true); // 启动淡出动画
      }, 2000); // 2秒后启动淡出

      const contentTimer = setTimeout(() => {
        setIsStarrySkyVisible(false); // 动画结束后隐藏星空动画
        setIsLoading(false); // 结束加载状态
      }, 3000); // 3秒后（1秒淡出动画完成后）显示实际内容

      return () => {
        clearTimeout(starrySkyTimer); // 清除定时器
        clearTimeout(contentTimer); // 清除定时器
      };
    }
  }, [isHome]); // 当 isHome 状态变化时重新运行 useEffect



  return (
   
   
      <>
   
      {isLoading && isStarrySkyVisible  ? (

<div className="flex items-center justify-center h-screen bg-black overflow-hidden">
    <div className={`w-full h-full ${fadeOut ? 'fade-out' : ''}`}>
        <StarrySky /> {/* 显示星空动画 */}
    </div>
</div>

) : (
  <>
    <div className="fillHeight">
      123
      </div> 
  
  </>
)}
     
     </>
    
  );
}
