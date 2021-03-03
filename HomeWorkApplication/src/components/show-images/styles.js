import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    image_view : {
        flexDirection : 'row',
        flexWrap : 'wrap',
        marginLeft : '3%',
        marginBottom : '3%'
    },
    image : {
        height : 120,
    },
    one_image_view : {
        width : '30%',
        marginRight : '3%',
        marginTop : '3%'
    },
    close_icon : {
        position : 'absolute',
        backgroundColor : '#4287F5',
        right : -5,
        top : -5
    }
})

export default styles