import { StyleSheet, Text, View, TextInput, Pressable, Image, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'
import { UserContext } from '../utilities/UserContext'
import Checkbox from 'expo-checkbox'

const Register = (props) => {

    const { navigation } = props;
    const { register } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    const handleRegister = async () => {
        const result = await register(email, password);
        if(!result)
        {
            ToastAndroid.show('Register successful', ToastAndroid.LONG);
            navigation.navigate('Login');
        }
        else
        {
            ToastAndroid.show('Register failed', ToastAndroid.LONG);
            setEmail('');
            setPassword('');
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.fontHello}>Hello!</Text>

            <Text style={styles.fontWelcome}>Signup to get Started</Text>

            <View style={styles.marginUP}>
                <Text style={styles.fontUP}>Email<Text style={styles.fontStar}>*</Text></Text>
                <TextInput style={styles.textInput}
                    value={email}
                    onChangeText={setEmail}/>

                <Text style={styles.fontUP}>Password<Text style={styles.fontStar}>*</Text></Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry />
                    <Image source={require('../../../src/media/images/ic_eye.png')}
                        style={styles.ic_eye} />
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.row}>
                    <Checkbox
                        disabled={false}
                        color={toggleCheckBox ? "#1877F2" : undefined}
                        value={toggleCheckBox}
                        onValueChange={setToggleCheckBox}
                    />
                    <Text style={styles.fontRm}>Remember me</Text>
                </View>

            </View>

            <Pressable style={styles.btnSU}
                onPress={handleRegister}>
                <Text style={styles.btnSULabel}>Register</Text>
            </Pressable>

            <View style={styles.center}>
                <Text style={styles.fontocw}>or continue with</Text>
            </View>

            <View style={styles.rowFG}>
                <Pressable style={styles.btnFG}>
                    <Image source={require('../../../src/media/images/ic_fb.png')} />
                    <Text style={styles.fontFG}>Facebook</Text>
                </Pressable>
                <Pressable style={styles.btnFG}>
                    <Image source={require('../../../src/media/images/ic_gg.png')} />
                    <Text style={styles.fontFG}>Google</Text>
                </Pressable>
            </View>

            <View style={styles.center}>
                <View style={styles.rowF}>
                    <Text style={styles.fontahaa}>Already have an account ? </Text>
                    <Text style={styles.fontLogin} onPress={() => navigation.navigate('Login')}>Login</Text>
                </View>
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
    fontHello: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 48,
        lineHeight: 72,
        letterSpacing: 0.12,
        color: '#1877F2',
    },
    fontWelcome: {
        marginTop: 4,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 30,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    marginUP: {
        marginTop: 65,
    },
    fontUP: {
        width: 80,
        height: 21,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
    },
    fontStar: {
        color: 'red',
        lineHeight: 21,
        letterSpacing: 0.12,
    },
    textInput: {
        paddingLeft: 10,
        marginTop: 4,
        marginBottom: 14,
        width: '100%',
        height: 48,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 6,
    },
    fontStar: {
        color: 'red',
        lineHeight: 21,
        letterSpacing: 0.12,
    },
    btnSU: {
        display: 'flex',
        marginTop: 17.5,
        backgroundColor: '#1877F2',
        borderRadius: 6,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnSULabel: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: 'white',
    },
    inputContainer: {
        position: 'relative',
    },
    ic_eye: {
        position: 'absolute',
        right: 10,
        top: 14,
    },
    fontRm: {
        marginStart: 9.54,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    fontocw: {
        marginTop: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    rowFG: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnFG: {
        marginTop: 16,
        width: '46%',
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 12,
        backgroundColor: '#EEF1F4',
        borderRadius: 6,
        flexDirection: 'row',
    },
    fontFG: {
        marginLeft: 10,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#667080',
    },
    rowF: {
        flexDirection: 'row',
    },
    fontahaa: {
        marginTop: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    fontLogin: {
        marginTop: 16,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#1877F2',
    },
})

export default Register