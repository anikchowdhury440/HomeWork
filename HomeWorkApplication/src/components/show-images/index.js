import React from 'react'
import {Image, View} from 'react-native'
import styles from './styles'
import {IconButton} from 'react-native-paper'

const Images = ({...props}) => {
    return (
        <View style = {styles.image_view}>
            {props.images.map((image, index) => (
                <React.Fragment key = {index}>
                    <View style = {styles.one_image_view}>
                        <Image 
                            source = {{ uri : image.path}} 
                            style = {styles.image}  />
                        <IconButton 
                            icon = 'close' 
                            style = {styles.close_icon} 
                            color = 'white' 
                            size = {12}
                            onPress = {() => props.removeImage(index)}/>
                    </View>
                </React.Fragment>
            ))}
        </View>
    )
}

export default Images