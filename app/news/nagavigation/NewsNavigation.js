import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Add from '../../../components/Add';
import { Text, Image } from 'react-native'

const Tab = createBottomTabNavigator();

// Khai báo một hàm render Icon Tab
const renderTabIcon = (route, focused, color) => {
    // Tùy chỉnh Icon và CSS cho trường hợp selected và unselected
    let source, fontWeight;
    if (route.name === 'Home') {
      source = focused ? require('../../../src/media/images/ic_home.png') : require('../../../src/media/images/ic_home.png');
      fontWeight = focused ? 'bold' : 'normal';
    } else if (route.name === 'Detail') {
      source = focused ? require('../../../src/media/images/ic_detail.png') : require('../../../src/media/images/ic_detail.png');
      fontWeight = focused ? 'bold' : 'normal';
    } else if (route.name === 'Add') {
      source = focused ? require('../../../src/media/images/ic_add.png') : require('../../../src/media/images/ic_add.png');
      fontWeight = focused ? 'bold' : 'normal';
    }
    // Trả về Component Icon với CSS tùy chỉnh
    return <Image source={source} style={{width: 24, height: 24, tintColor: color, fontWeight: fontWeight }} resizeMode="contain" />;
  };

const NewsNavigation = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => renderTabIcon(route, focused, color),
            tabBarLabel: ({ focused, color }) => (
              // Tạo tùy chỉnh CSS cho Label Tab 
              <Text style={{ color: focused ? 'blue' : 'black', fontWeight: focused ? 'bold' : 'normal'}}>
                {route.name}
              </Text>
            ),
            headerShown: false,
          })}
          >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Detail' component={Detail} />
            <Tab.Screen name='Add' component={Add} />
        </Tab.Navigator>
    )
}

export default NewsNavigation