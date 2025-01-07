import { View, Text } from 'react-native'
import React from 'react'
import { Button, Typography } from '@/components/common'
import { TextInput } from '@/components/form'
import { Link } from 'expo-router'

const Login = () => {
  return (
    <View className='flex-1 p-8 gap-8'>
      <View className='flex flex-col gap-2'>
        <Typography variant='4xl' weight='bold' className='text-brand-500'>Đăng nhập</Typography>
        <Typography variant='base' weight='normal' className='text-neutral-500'>Bạn hãy nhập số điện thoại để đăng nhập vào ứng dụng nhé.</Typography>
      </View>
      <TextInput placeholder='Nhập số điện thoại' />
      <Link href="/(app)/(tabs)/home/home" asChild>
        <Button variant='primary' className='w-full'>Đăng nhập</Button>
      </Link>
      <Typography variant='sm' weight='normal' className='text-neutral-500 text-center'>
        Bạn chưa có tài khoản?{' '}
        <Link href="/(auth)/register/register" asChild>
          <Text className='text-brand-500 text-sm font-semibold'>Đăng ký</Text>
        </Link>
      </Typography>
    </View>
  )
}

export default Login