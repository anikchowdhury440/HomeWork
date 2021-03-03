import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    parent_container : {
        flex : 1,
        backgroundColor : 'white',
    },
    heading : {
        fontSize : 20,
        fontWeight : 'bold',
        alignSelf : 'center',
        padding : 10
    },

    picker_view_style : {
        borderWidth : 1, 
        borderColor : 'grey', 
        borderRadius : 5, 
        marginVertical : 10
    },

    button_styles : {
        backgroundColor : '#4287F5', 
        width : 200, 
        alignSelf : 'center',
        marginTop : 10
    },

    upload_button_styles : {
        backgroundColor : '#4287F5', 
        width : 200, 
        alignSelf : 'center',
        marginVertical : '5%'
    },

    rbSheet_container_style : {
        paddingTop : 15,
        borderTopRightRadius : 5,
        borderTopLeftRadius : 5
    }, 

    label_text : {
        position : 'absolute', 
        top : -10, 
        backgroundColor : 'white', 
        paddingHorizontal : 5, 
        left : 10, 
        fontSize : 12, 
        color : 'grey'
    },

    textinput : {
        backgroundColor : 'white', 
        height : 45, 
        marginTop : 5,
        marginBottom : 10
    }
})

export default Styles