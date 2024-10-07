import { useEffect, useState } from 'react';
import { cn } from '@/libs/utils';
import { AppSidebarList, AppSidebarLogo } from './components';

interface AppSidebarProps {
  className?: string;
}
export const AppSidebar = ({ className }: AppSidebarProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [windowWidth]);

  return (
    <aside
      className={cn(
        'flex h-full flex-col gap-y-5 rounded-md border border-violet-300 bg-slate-200 p-3 transition-all duration-200 ease-in',
        windowWidth >= 1024 ? 'w-[300px]' : 'w-[60px]',
        className,
      )}
    >
      <AppSidebarLogo windowWidth={windowWidth} />

      <nav className='flex flex-grow rounded bg-slate-300'>
        <AppSidebarList />
      </nav>

      <div className='flex size-8 items-center justify-center rounded-full bg-slate-300 font-rubik text-n0'>
        JD
      </div>
    </aside>
  );
};
