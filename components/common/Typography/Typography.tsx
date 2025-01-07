import { Text, type TextProps } from 'react-native';

interface TypographyProps extends TextProps {
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  variant?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  className?: string;
}

const typographyStyles = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
};

const fontWeightStyles = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const Typography = ({ style, weight = 'normal', variant = 'sm', children, className }: TypographyProps) => {
  return (
    <Text className={`${typographyStyles[variant]} ${fontWeightStyles[weight]} ${className}`} style={style}>
      {children}
    </Text>
  );
};

export default Typography;
