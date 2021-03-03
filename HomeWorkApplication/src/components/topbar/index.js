import React, { Component } from 'react';
import { Appbar } from "react-native-paper";
import Styles from './styles';

const Topbar = (props) => {
    const handleMenuButton = () => {
        props.navigation.openDrawer();
    }

    return(
        <Appbar style = {Styles.container}>
            <Appbar.Action icon = 'menu' onPress = {handleMenuButton}/>
            <Appbar.Content title = {props.heading} titleStyle = {{fontSize : 18}} />
        </Appbar>
    )
}

export default Topbar