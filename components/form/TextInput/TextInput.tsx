import { View, Text, TextInputProps as RNTextInputProps, TextInput as RNTextInput } from 'react-native'
import React from 'react'

interface TextInputProps extends RNTextInputProps {
  className?: string
}

const textInputStyles = {
  default: "bg-gray-50 border border-neutral-300 text-neutral-900 text-base rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-3"
}

const TextInput = ({ className, ...props }: TextInputProps) => {
  return (
    <RNTextInput
      className={`${textInputStyles.default} ${className}`}
      {...props}
    />
  )
}

export default TextInput