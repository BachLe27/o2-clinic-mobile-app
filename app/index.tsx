import { Image } from 'expo-image';
import { View, Text, Pressable } from 'react-native'
import React from 'react'

import { Button, Typography } from '@/components/common';

import doctorImg from '@/assets/images/doctor.png';
import logoImg from '@/assets/images/o2skin.png';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View className="flex-1 items-center w-full bg-neutral-50">
      <Image source={logoImg} contentFit='contain' style={{
        width: '100%',
        height: 56,
        marginTop: 40,
        marginBottom: 20,
      }} />
      <Image source={doctorImg} contentFit='contain' className='mt-10' style={{
        width: '100%',
        height: 500,
      }} />

      <View className='flex-1 items-center w-full gap-3'>
        <View className='flex items-center gap-1'>
          <Typography variant='3xl' weight='bold' className='text-brand-500'> O2 Skin</Typography>
          <Typography variant='lg' weight='bold' className='text-brand-500'>Chuyên Sâu Điều Trị Mụn Từ 2015</Typography>
        </View>
        <Typography variant='xs' weight='normal' className='text-neutral-500'>Hơn 489.000 khách hàng điều trị thành công</Typography>
      </View >

      <View className='flex flex-row gap-2 pb-8 px-8'>
        <Button variant='secondary' className='w-1/2'>Đăng ký</Button>
        <Link href="/(auth)/login/login" asChild>
          <Button variant='primary' className='w-1/2'>Đăng nhập</Button>
        </Link>
      </View>
    </View >
  );
}

export default index