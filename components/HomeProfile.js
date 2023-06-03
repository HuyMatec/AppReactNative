import { StyleSheet, View, Text, Image, Pressable } from 'react-native'
import React from 'react'

const HomeProfile = (props) => {
  const { title1 = 'Edit profile', title2 = 'Website' } = props;
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.viewRow}>
        <Text>       </Text>
        <Text style={styles.text1}>Profile</Text>
        <Image style={styles.imageBack} source={require('../src/media/images/ic_settings.png')} />
      </View>
      <View style={styles.viewRow}>
        <Image style={styles.imageTest} source={require('../src/media/images/ic_test.png')} />
        <View style={styles.viewRowCustom}>
          <Text style={styles.text2}>2156</Text>
          <Text style={styles.text3}>Followers</Text>
        </View>
        <View style={styles.viewRowCustom}>
          <Text style={styles.text2}>567</Text>
          <Text style={styles.text3}>Following</Text>
        </View>
        <View style={styles.viewRowCustom}>
          <Text style={styles.text2}>23</Text>
          <Text style={styles.text3}>News</Text>
        </View>
      </View>
      <View style={{ marginTop: 16 }}>
        <Text style={styles.text4}>Wilson Franci</Text>
        <Text style={styles.text5}>Lorem Ipsum is simply dummy text of the{'\n'}printing and typesetting industry.</Text>
      </View>
      <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Pressable style={styles.btn}
          onPress={() => navigation.navigate('Profile')} >
          <Text style={styles.textbtn}>{title1}</Text>
        </Pressable>
        <Pressable style={styles.btn}><Text style={styles.textbtn}>{title2}</Text></Pressable>
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
  viewRowCustom: {
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
  text2: {
    color: '#000',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  text3: {
    color: '#000',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  text4: {
    color: '#000',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  text5: {
    color: '#4E4B66',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  imageTest: {
    marginTop: 13,
    width: 100,
    height: 100,
  },
  btn: {
    width: 165,
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

export default HomeProfile