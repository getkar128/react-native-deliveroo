import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, UserIcon, SearchIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline";

export default function HomeScreen() {
  const navigation = useNavigation()

  useLayoutEffect(()=> {
    navigation.setOptions(
      {
        headerShown: false,
      }     
    )
  }, [])
  return (
    <SafeAreaView className='bg-white pt-5'>
      
        {/* HEADER */}
        <View className='flex-row pb-3 items-stretch mx-4 space-x-2'>
          <Image 
            source={{ uri: 'https://links.papareact.com/wru' }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'  
          />
          <View className='flex-1'>
            <Text className='font-bold text-gray-400 text-xs'>
              Deliver Now
            </Text>
            <Text className='font-bold text-2xl'>
              Current Location
              <ChevronDownIcon size={20} color='#00ccbb' />
            </Text>
          </View>
          <UserIcon size={35} color='#00ccbb' />
        </View>
        {/* Search Box */}
        <View>
          <View>
            <SearchIcon />
          </View>
          <AdjustmentsVerticalIcon color='#00ccbb'/>
        </View>
     
    </SafeAreaView>
  )
}