import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity'

function HomeScreen() {
  const navigation = useNavigation()
  const [featuredCategories, setFeaturedCategories] = useState([])

  useLayoutEffect(()=> {
    navigation.setOptions(
      {
        headerShown: false,
      }     
    )
  }, []);

  useEffect(()=>{
    sanityClient.fetch(`
    *[_type == 'featured']{
      ...,
      resturant[]->{
        ...,
        dishes[]->
      }
    }`).then(data => {
      setFeaturedCategories(data)
    })
  }, [])
  
  return (
    <SafeAreaView className='bg-white pt-5'>
      
        {/* HEADER */}
        <View className='flex-row pb-3 items-stretch mx-4 space-x-2 px-2'>
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
        <View className='flex-row items-center space-x-2 pb-2 mx-4'>
          <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3'>
            <MagnifyingGlassIcon color='#00ccbb' size={20} />
            <TextInput 
              placeholder='Restaurants and Cuisines' className='text-base' keyboardType='default'
            />
          </View>
          <AdjustmentsVerticalIcon  color='#00ccbb'/>
        </View>

        {/* Scroller View */}
        <ScrollView className='bg-gray-100'
          contentContainerStyle={{
            paddingBottom: 100
          }}
        >
          {/* Categories */}
           <Categories />

          {/* Featured  */}
          {featuredCategories.map((category) => {
            
            return (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
          />)
          })}
          

          {/* Tasty Discounts */}
          
        </ScrollView>
        
    </SafeAreaView>
  )
}

export default HomeScreen;