import React, { useMemo } from 'react';
import { Animated, Pressable, PressableProps, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import colors from "@/themes/colors";
import Typography from '../Typography/Typography';

interface ButtonProps extends PressableProps {
  color?: 'primary' | 'blue' | 'green' | 'red' | 'orange' | 'brown';
  variant?: 'primary' | 'secondary' | 'disabled';
  size?: 'small' | 'medium' | 'large' | 'tity';
  loading?: boolean;
  raiseLevel?: number;
  textClassName?: string;
}

const buttonStyles = {
  default: "rounded-2xl py-3.5 px-3 w-full",
  primary: "bg-brand-500 text-neutral-50 border-solid border-brand-500 border",
  secondary: "bg-white-500 text-brand-500 border-solid border-brand-500 border-[1px]",
  disabled: "bg-brand-300 text-neutral-400",
};

const textStyles = {
  default: "text-center",
  primary: "text-neutral-50",
  secondary: "text-brand-500",
  disabled: "text-neutral-300",
};

export const Button = React.forwardRef<View, ButtonProps>(({
  children,
  style,
  disabled,
  raiseLevel = 4,
  color = 'primary',
  size = 'medium',
  variant = 'primary',
  loading,
  className,
  textClassName,
  ...props
}, ref) => {
  const translateY = new Animated.Value(0);

  const handlePressIn = () => {
    Animated.spring(translateY, {
      toValue: raiseLevel,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  return (
    <View ref={ref} className={className}>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled}
        {...props}
        className={`${buttonStyles.default} ${buttonStyles[variant]} `}
      >
        {typeof children === 'string' ? (
          <Typography
            variant='base'
            weight='semibold'
            className={`${textStyles.default} ${textStyles[variant]} ${textClassName}`}
          >
            {children}
          </Typography>
        ) : (
          children
        )}
      </Pressable>
    </View>
  );
});

Button.displayName = 'Button';

export default Button;
