import { FcGraduationCap } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { Icon } from '@/components/ui';
import { ROUTES } from '@/libs/constants';
import { cn } from '@/libs/utils';

interface AppSidebarLogoProps {
  windowWidth: number;
}

export const AppSidebarLogo = ({ windowWidth }: AppSidebarLogoProps) => (
  <Link
    to={ROUTES.Home}
    className='flex w-fit items-center gap-2'
  >
    <Icon
      icon={FcGraduationCap}
      size={24}
    />
    <h1
      className={cn(
        'transition-all duration-200 ease-in',
        windowWidth >= 1024 ? 'text-xl opacity-100' : 'hidden opacity-0',
      )}
    >
      LinguaQuest
    </h1>
  </Link>
);
