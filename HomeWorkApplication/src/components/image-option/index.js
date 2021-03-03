import React from 'react'
import {TouchableRipple, Menu} from 'react-native-paper'

const ImageOption = ({...props}) => {
    return (
        <>
            <TouchableRipple onPress={props.onPressCamera}>
                <Menu.Item icon="camera" title="Take Photo" />
            </TouchableRipple>
            <TouchableRipple onPress = {props.onPressLibrary}>
                <Menu.Item icon="panorama" title="Choose From Library" />
            </TouchableRipple>
        </>
    )
}

export default ImageOption;