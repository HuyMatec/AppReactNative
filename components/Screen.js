import { View, Text, Image } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from './Explore';
import Profile from './Profile';
import Home from '../app/news/screens/Home';
import Detail from '../app/news/screens/Detail';

const Tab = createBottomTabNavigator();


const Screen = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        if (route.name == "Home") {
                            if (focused) {
                                return <Image source={require('../src/media/images/ic_home2.png')} style={{ width: 25, height: 25 }} />;
                            }
                            else {
                                return <Image source={require('../src/media/images/ic_home1.png')} style={{ width: 25, height: 25 }} />;
                            }
                        }
                        else if (route.name == "Explore") {
                            if (focused) {
                                return <Image source={require('../src/media/images/ic_explore2.png')} style={{ width: 25, height: 25 }} />;
                            }
                            else {
                                return <Image source={require('../src/media/images/ic_explore1.png')} style={{ width: 25, height: 25 }} />;
                            }
                        }
                        if (route.name == "Bookmark") {
                            if (focused) {
                                return <Image source={require('../src/media/images/ic_bookmark2.png')} style={{ width: 25, height: 25 }} />;
                            }
                            else {
                                return <Image source={require('../src/media/images/ic_bookmark1.png')} style={{ width: 25, height: 25 }} />;
                            }
                        }
                        else if (route.name == "Profile") {
                            if (focused) {
                                return <Image source={require('../src/media/images/ic_profile2.png')} style={{ width: 25, height: 25 }} />;
                            }
                            else {
                                return <Image source={require('../src/media/images/ic_profile1.png')} style={{ width: 25, height: 25 }} />;
                            }
                        }
                    },
                    tabBarLabel: ({ focused }) => {
                        if (route.name == 'Home') {
                            if (focused) {
                                return <Text style={{ color: 'tomato', fontWeight: 'bold' }}>Home</Text>
                            }
                            else {
                                return <Text style={{ color: 'gray' }}>Home</Text>
                            }
                        }
                        else if (route.name == 'Explore') {
                            if (focused) {
                                return <Text style={{ color: 'tomato', fontWeight: 'bold' }}>Explore</Text>
                            }
                            else {
                                return <Text style={{ color: 'gray' }}>Explore</Text>
                            }
                        }
                        if (route.name == 'Bookmark') {
                            if (focused) {
                                return <Text style={{ color: 'tomato', fontWeight: 'bold' }}>Bookmark</Text>
                            }
                            else {
                                return <Text style={{ color: 'gray' }}>Bookmark</Text>
                            }
                        }
                        else if (route.name == 'Profile') {
                            if (focused) {
                                return <Text style={{ color: 'tomato', fontWeight: 'bold' }}>Profile</Text>
                            }
                            else {
                                return <Text style={{ color: 'gray' }}>Profile</Text>
                            }
                        }
                    },
                    headerShown: false
                })
                }
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Explore" component={Explore} />
                <Tab.Screen name="Bookmark" component={Detail} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Screen