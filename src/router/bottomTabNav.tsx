import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import MenuScreen from '../screens/MenuScreen'
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import Entypo from 'react-native-vector-icons/Entypo'
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack'



const Tab = createBottomTabNavigator();

const BottomTabNav = () =>{
    return(
    <Tab.Navigator
    screenOptions={{
        headerShown:false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor:'#ffbd7d',
        tabBarActiveTintColor: '#e47911'
    }}>
        <Tab.Screen 
        component={HomeStack} 
        name="Home" 
        options={{
            tabBarIcon: ({color}) =>(
        <Entypo name="home" color={color} size={25} />

            )
        }}
        
        />
        <Tab.Screen 
        component={HomeScreen} 
        name="profile" 
        options={{
            tabBarIcon: ({color}) =>(
        <Entypo name="user" color={color} size={25} />

            )
        }}
        />
        
        <Tab.Screen 
        component={ShoppingCartStack} 
        name="shoppingCart" 
        options={{
            tabBarIcon: ({color}) =>(
        <Entypo name="shopping-cart" color={color} size={25} />

            )
        }}
        />
        
        <Tab.Screen 
        component={MenuScreen} 
        name="more" 
        options={{
            tabBarIcon: ({color}) =>(
        <Entypo name="menu" color={color} size={25} />

            )
        }}
        />

    </Tab.Navigator>
)
};

export default BottomTabNav;