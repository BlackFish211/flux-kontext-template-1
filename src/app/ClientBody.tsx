"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // 判断是否为功能页面（排除动画的路径）
  // 在视频生成相关页面禁用动效，避免影响用户操作
  const isFunctionalPath = pathname.startsWith('/dashboard') || pathname.startsWith('/generate');
  
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <div className="antialiased">
      {/* 已移除全局流体光标动效，提高性能 */}
      {children}
    </div>
  );
}
