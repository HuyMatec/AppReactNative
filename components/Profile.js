import { StyleSheet, View, Text, Image, TextInput, Pressable } from 'react-native'
import React from 'react'

const Profile = (props) => {
  const { title = 'Next' } = props;
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.viewRow}>
        <Image style={styles.imageBack} source={require('../src/media/images/ic_back.png')} />
        <Text style={styles.text1}>Fill your Profile</Text>
        <Text>       </Text>
      </View>
      <View style={styles.viewCenter}>
        <Image style={styles.imageTest} source={require('../src/media/images/ic_test.png')} />
        <Image style={styles.imageCamera} source={require('../src/media/images/ic_camera.png')} />
      </View>
      <View style={styles.marginTop}>
        <Text style={styles.font1}>Username</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.font1}>Full Name</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.font1}>Email Address<Text style={{ color: '#CE2E71' }}>*</Text></Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.font1}>Phone Number<Text style={{ color: '#CE2E71' }}>*</Text></Text>
        <TextInput style={styles.textInput} />
      </View>
      <View style={{ marginTop: 80 }}>
        <Pressable style={styles.btnNext}
          onPress={() => navigation.navigate('HomeProfile')}>
          <Text style={styles.textbtn}>{title}</Text>
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
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: '#000',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.12,
  },
  imageTest: {
    marginTop: 16,
  },
  imageCamera: {
    marginTop: -30,
    marginStart: 80,
  },
  marginTop: {
    marginTop: 16,
  },
  font1: {
    color: '#4E4B66',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.12,
  },
  textInput: {
    marginTop: 4,
    marginBottom: 16,
    height: 40,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#4E4B66',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNext: {
    height: 50,
    backgroundColor: '#1877F2',
    paddingVertical: 14,
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

export default Profile