import React from 'react';
import {View, Text, ScrollView} from 'react-native'
import Styles from './styles';
import {Picker} from '@react-native-picker/picker';
import grades from '../../services/grades';
import branches from '../../services/branches';
import {Button, TextInput} from 'react-native-paper'
import chapters from '../../services/chapter';
import RBSheet from "react-native-raw-bottom-sheet";
import ImagePicker from 'react-native-image-crop-picker';
import ImageOption from '../../components/image-option';
import Images from '../../components/show-images';
import SnackbarComponent from '../../components/snackbar';
import Topbar from '../../components/topbar';

class AddHomework extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            grade : 'Pre Primary',
            branch : 1,
            subject : 'Maths',
            chapters : 'WS-1',
            storeImages : [],
            showSnackbar : false,
            snackbarMessage : ''
        }
    }

    handleGrade = (item) => {
        this.setState({
            grade : item
        })
    }

    handleBranch = (item) => {
        this.setState({
            branch : item
        })
    }

    handleSubject = (subject) => {
        this.setState({
            subject : subject
        })
    }

    handleChapter = (item) => {
        this.setState({
            chapters : item
        })
    }

    handleSelectImages = () => {
        this.rbSheet.open()
    }

    handleUploadHomework = () => {
        console.log('press')
    }

    chooseFromLibrary = () => {
        this.rbSheet.close()
        let imageArray = []
        ImagePicker.openPicker({multiple : true, compressImageQuality : 0.8})
            .then(images => {
                if(this.state.storeImages.length + images.length <= 5) {
                    images.map((imageDetails) => {
                        imageArray = this.state.storeImages
                        imageArray.push(imageDetails)
                        this.setState({ storeImages : imageArray})
                    })
                } else {
                    this.setState({
                        showSnackbar : true,
                        snackbarMessage : 'Allowed only 5 images'
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    chooseFromCamera = () => {
        this.rbSheet.close()
        let imageArray = this.state.storeImages
        ImagePicker.openCamera({compressImageQuality : 0.8})
            .then(image => {
                imageArray.push(image)
                this.setState({ storeImages : imageArray})
            })
            .catch(error => {
                console.log(error)
            })
    }

    dismissSnackbar = () => {
        this.setState({
            showSnackbar : false,
            snackbarMessage : ''
        })
    }

    handleRemoveImage = (index) => {
        let images = this.state.storeImages;
        images.splice(index, 1)
        this.setState({ storeImages : images})
    }

    render(){
        return (
            <View style = {Styles.parent_container}>
                <Topbar navigation = {this.props.navigation} heading = 'Add Homework'/>
                <ScrollView style = {{paddingHorizontal : '3%', marginTop : '3%'}}>
                    <View style = {Styles.picker_view_style}>
                        <Text style = {Styles.label_text}>Grades</Text>
                        <Picker
                            selectedValue={this.state.grade}
                            mode = 'dropdown'
                            onValueChange={this.handleGrade}>
                            {grades.map((grade, index) => (
                                <Picker.Item label={grade} value={grade} key={index} />
                            ))}
                        </Picker>
                    </View>
                    <View style = {Styles.picker_view_style}>
                        <Text style = {Styles.label_text}>Branch</Text>
                        <Picker
                            selectedValue={this.state.branch}
                            mode = 'dropdown'
                            onValueChange={this.handleBranch}>
                            {branches.map((branch, index) => (
                                <Picker.Item label={branch} value={index+1} key={index} />
                            ))}
                        </Picker>
                    </View>
                    <TextInput
                        style = {Styles.textinput}
                        label = 'Subject'
                        mode = 'outlined'
                        value = {this.state.subject}
                        onChangeText = {this.handleSubject}
                    />
                    <View style = {Styles.picker_view_style}>
                        <Text style = {Styles.label_text}>Chapter</Text>
                        <Picker
                            selectedValue={this.state.chapters}
                            mode = 'dropdown'
                            onValueChange={this.handleChapter}>
                            {chapters.map((chapter, index) => (
                                <Picker.Item label={chapter} value={chapter} key={index} />
                            ))}
                        </Picker>
                    </View>
                    {this.state.storeImages.length < 5 && 
                    <Button
                        style = {Styles.button_styles}
                        color = 'white'
                        onPress = {this.handleSelectImages}>
                        Select Images
                    </Button> }
                    {this.state.storeImages.length <= 5 && <Images images = {this.state.storeImages} removeImage = {this.handleRemoveImage} />}
                </ScrollView>
                {this.state.storeImages.length > 0 &&
                <Button
                    style = {Styles.upload_button_styles}
                    color = 'white'
                    onPress = {this.handleUploadHomework}>
                        Upload Homework
                </Button> }
                <RBSheet
                    ref = {ref => {this.rbSheet = ref}}
                    height = {130}
                    customStyles = {{
                        container : Styles.rbSheet_container_style
                    }}>
                        <ImageOption 
                            onPressLibrary = {this.chooseFromLibrary}
                            onPressCamera = {this.chooseFromCamera}/>
                </RBSheet>
                <SnackbarComponent 
                    showSnackbar = {this.state.showSnackbar}
                    dismissSnackbar = {this.dismissSnackbar}
                    snackbarMessage = {this.state.snackbarMessage}/>
            </View>
        )
    }
}

export default AddHomework