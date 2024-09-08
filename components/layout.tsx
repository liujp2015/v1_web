// components/Layout.tsx
import React, { ReactNode } from 'react';

// 定义组件的 Props 类型
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header>
        {/* 这里可以放置导航栏或者头部内容 */}
        <h1>My Website</h1>
      </header>
      <main>{children}</main>
      <footer>
        {/* 这里可以放置页脚内容 */}
        <p>© 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
