import { StyleSheet, Text, View, TextInput, Pressable, Image, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import Checkbox from 'expo-checkbox';
import { UserContext } from '../utilities/UserContext';

const Login = (props) => {

  const { navigation } = props;

  const { login } = useContext(UserContext);
  const [email, setEmail] = useState('tranhoanghuy02.11.2003@gmail.com');
  const [password, setPassword] = useState('1');

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleLogin = async () => {
    const result = await login(email, password);
    if (!result) {
      ToastAndroid.show('Login successful', ToastAndroid.LONG);
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.fontHello}>Hello</Text>
      <Text style={styles.fontAgain}>Again!</Text>

      <Text style={styles.fontWelcome}>Welcome back you've been missed</Text>

      <View style={styles.marginUP}>
        <Text style={styles.fontUP}>Email<Text style={styles.fontStar}>*</Text></Text>
        <TextInput style={styles.textInput}
          value={email}
          onChangeText={setEmail} />

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

        <Text style={styles.fontFtp}>Forgot the password ?</Text>
      </View>

      <Pressable style={styles.btnLogin}
        onPress={handleLogin}>
        <Text style={styles.btnLoginLabel}>Login</Text>
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
          <Text style={styles.fontdhaa}>don't have an account ? </Text>
          <Text style={styles.fontSU}
            onPress={() => navigation.navigate('Register')}>Sign Up</Text>
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
  },
  fontAgain: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 48,
    lineHeight: 72,
    letterSpacing: 0.12,
    color: '#1877F2',
  },
  fontWelcome: {
    width: 222,
    marginTop: 4,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  marginUP: {
    marginTop: 48,
  },
  fontUP: {
    width: 80,
    height: 21,
    marginEnd: 230,
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
  btnLogin: {
    display: 'flex',
    marginTop: 17.5,
    backgroundColor: '#1877F2',
    borderRadius: 6,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLoginLabel: {
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
  fontFtp: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#5890FF',
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
  fontdhaa: {
    marginTop: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  fontSU: {
    marginTop: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#1877F2',
  },
})

export default Login