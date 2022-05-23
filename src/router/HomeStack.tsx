import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {Text, View, SafeAreaView, TextInput} from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import ProductScreen from '../screens/ProductScreen';
import BottomTabNav from './bottomTabNav';
import Feather from 'react-native-vector-icons/Feather'

interface HeaderComponentProps{
    searchValue: string;
    setSearchValue: () => void;


}



const HeaderComponent = ({searchValue, setSearchValue}: HeaderComponentProps) => {
    return( 
        <SafeAreaView style={{ backgroundColor: '#22e3dd'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', margin: 10, padding: 5, backgroundColor: 'white'}}>
            <Feather name="search" size={20} />
            <TextInput 
            style={{height: 40, marginLeft: 10,}}
            placeholder= 'Search.....'
            value={searchValue}
            onChangeText={setSearchValue}
            />
            </View>
        </SafeAreaView>
    
    )
}



const Stack = createStackNavigator();

const HomeStack = () => {

    const [searchValue, setSearchValue] = useState('')

    return(
            <Stack.Navigator
                screenOptions={{
                    header: () => <HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue} />
                }}
            >
                <Stack.Screen 
                    name="HomeScreen"
                    options={{title:'Home'}}>
                        {() => <HomeScreen searchValue = {searchValue} />}
                    </Stack.Screen>
                <Stack.Screen 
                    component={ProductScreen}
                    name="ProductDetails"
                />
            </Stack.Navigator>
    )
}

export default HomeStack;