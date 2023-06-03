import React, { createContext, useContext } from 'react'
import NewsNavigation from '../news/nagavigation/NewsNavigation'
import UserNavigation from '../user/navigation/UserNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { UserProvider } from '../user/utilities/UserContext'
import { NewsProvider } from '../news/utilities/NewsContext'
import { UserContext } from '../user/utilities/UserContext'

const AppNavigation = () => {
  const { isLoggedIn } = useContext(UserContext);
  return(
    <NavigationContainer>
        {isLoggedIn ? <NewsNavigation/> : <UserNavigation/>}
    </NavigationContainer>
  )
}

export default AppNavigation