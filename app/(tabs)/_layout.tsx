import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { FontAwesome, Ionicons, Entypo, FontAwesome5, MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons';

const layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: "Lobster",
        }
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: "Explre",
          tabBarIcon: ({ color, size }) => <Feather name="search" size={size} color={color} />
        }} />
      <Tabs.Screen
        name='wishlists'
        options={{
          tabBarLabel: "Wishlists",
          tabBarIcon: ({ color, size }) => <Entypo name="heart-outlined" size={size} color={color} />
        }} />
      <Tabs.Screen
        name='trips'
        options={{
          tabBarLabel: "Trips",
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="airbnb" size={size} color={color} />
        }} />
      <Tabs.Screen
        name='inbox'
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="message-outline" size={size} color={color} />
        }} />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => <Ionicons name="person-circle-outline" size={size} color={color} />
        }} />


    </Tabs>
  )
}

export default layout