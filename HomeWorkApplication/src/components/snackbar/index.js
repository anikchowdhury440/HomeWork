import React from 'react'
import { Snackbar } from 'react-native-paper'

const SnackbarComponent = ({...props}) => {
    return (
        <Snackbar
            style = {{marginBottom : 50}}
            visible={props.showSnackbar}
            onDismiss={props.dismissSnackbar}
            duration = {5000}>
                {props.snackbarMessage}
        </Snackbar>
    )
}

export default SnackbarComponent