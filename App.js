import React from 'react'
import AppNavigation from './app/navigation/AppNavigation'
import { NewsProvider } from './app/news/utilities/NewsContext'
import { UserProvider } from './app/user/utilities/UserContext'
import Add from './components/Add'
import HomeProfile from './components/HomeProfile'
import Profile from './components/Profile'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <UserProvider>
      <NewsProvider>
        <AppNavigation/>
      </NewsProvider>
    </UserProvider>

    // <Profile/>
    // <HomeProfile/>

    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="HomeProfile" component={HomeProfile} />
    //     <Stack.Screen name="Profile" component={Profile} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default App;