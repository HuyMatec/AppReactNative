import { StyleSheet, View, Text, Image, TextInput, Pressable, ToastAndroid } from 'react-native'
import React, { useState, useEffect, useContext, useCallback } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { NewsContext } from '../app/news/utilities/NewsContext';

const Add = (props) => {

    const { navigation } = props;

    const { uploadImage, addNews } = useContext(NewsContext);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    const [cover, setCover] = useState(null);

    const upload = async (cover) => {
        setCover(cover);
        cover = cover.assets[0];
        const formData = new FormData();
        formData.append('image', {
            uri: cover.uri,
            type: cover.type,
            name: cover.fileName,
        });

        const result = await uploadImage(formData);

        console.log("result: " + result);

        setImage(result?.path);

    }

    console.log("upload: " + upload);

    const handleChoosePhoto = useCallback((type) => {
        const options = {
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: false,
            includeExtra: true,
        }
        launchCamera(options, upload);
        // launchImageLibrary(options, upload);
    }, []);

    console.log("setCover: " + cover?.assets[0]?.uri)

    const handlePublish = async () => {
        const result = await addNews(title, content, image);

        if (result) {
            ToastAndroid.show('Add news success', ToastAndroid.LONG);
            navigation.navigate('Home');
        }
        else {
            ToastAndroid.show('Add news failed', ToastAndroid.LONG);
        }

        console.log("title:  " + title + " content: " + content + " image: " + image);
    }

    return (
        <View style={styles.container}>
            {/* <View style={styles.viewRow}>
                <Image style={styles.imageBack} source={require('../src/media/images/ic_back.png')} />
                <Text style={styles.text1}>Create News</Text>
                <Image style={styles.imageRight} source={require('../src/media/images/ic_dotColumn.png')} />
            </View> */}
            {
                (cover) ?
                    <Image
                        source={{ uri: cover?.assets[0]?.uri }}
                        style={{ width: 340, height: 180 }}
                    /> :

                    <Pressable
                        onPress={handleChoosePhoto}>
                        <Image style={styles.imagePicture} source={require('../src/media/images/ic_addPicture.png')} />
                    </Pressable>

            }

            <TextInput
                style={styles.textInput1}
                value={title}
                onChangeText={setTitle}
                placeholder='News title' />
            <TextInput
                style={styles.textInput2}
                value={content}
                onChangeText={setContent}
                placeholder='Add News/Article' />
            <View style={styles.viewBottom}>
                <Pressable
                    style={styles.btnPublish}
                    onPress={handlePublish}>
                    <Text style={styles.textbtn}>Publish</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
    },
    viewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text1: {
        color: '#000000',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePicture: {
        marginTop: 16,
        backgroundColor: '#EEF1F4',
        width: 340,
        height: 180,
    },
    textInput1: {
        height: 60,
        marginTop: 16,
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        borderTopColor: '#fff',
        borderBottomColor: '#A0A3BD',
        borderWidth: 1,
        color: 'red',
        fontWeight: 'bold',
        fontSize: 24,
    },
    textInput2: {
        height: 48,
        marginTop: 16,
        color: '#000',
        fontWeight: 'normal',
        fontSize: 18,
    },
    viewBottom: {
        marginTop: 180,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    btnPublish: {
        width: 110,
        height: 50,
        marginBottom: 14,
        backgroundColor: '#1877F2',
        paddingVertical: 13,
        paddingHorizontal: 24,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textbtn: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        lineHeight: 21,
        letterSpacing: 0.12,
    },
})


export default Add