import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animated from 'react-native-animatable';
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Delivery')
        }, 4000)
    },[])
  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
        
            <Animated.Image
                source={require('../assets/Order.gif')}
                animation='slideInUp'
                iterationCount={1}
                className='h-70 w-70 p-4'
            />
        
        <Animated.Text
            animation='slideInUp'
            iterationCount={2}
            className='text-lg my-10 text-white font-bold text-center'
        >
            Waiting for Restaurant to accept your order
        </Animated.Text>
        <Progress.Circle size={60} indeterminate={true} color='white' />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen