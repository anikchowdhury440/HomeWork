import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MySubmissions from '../screens/mySubmissions';
import AddHomework from '../screens/add-homework';
import Home from '../screens/home';

const Drawer = createDrawerNavigator();

function DrawerNavigatorStack() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = 'Home' component = {Home} />
            <Drawer.Screen name = 'Add HomeWork' component = {AddHomework} />
            <Drawer.Screen name = 'MySubmissions' component = {MySubmissions} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigatorStack;