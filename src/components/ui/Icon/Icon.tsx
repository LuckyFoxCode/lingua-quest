import { IconType } from 'react-icons';

interface IconProps {
  icon: IconType;
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}

export const Icon = ({
  icon: IconComponent,
  size = 16,
  ...rest
}: IconProps) => (
  <IconComponent
    {...rest}
    size={size}
  />
);
