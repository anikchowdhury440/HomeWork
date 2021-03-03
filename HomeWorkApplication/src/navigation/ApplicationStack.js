import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerNavigatorStack from './DrawerNavigationStack';

const Stack = createStackNavigator();

function ApplicationStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions = {{headerShown : false}}>
                <Stack.Screen name = "AppHome" component = {DrawerNavigatorStack}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ApplicationStack;