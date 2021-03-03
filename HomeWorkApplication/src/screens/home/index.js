import React from 'react'
import {View, Text} from 'react-native'
import Topbar from '../../components/topbar'

const Home = (props) => {
    return (
        <View>
            <Topbar navigation = {props.navigation} heading = 'Home'/>
        </View>
    )
}

export default Home