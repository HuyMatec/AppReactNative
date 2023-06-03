import React, { createContext, useState } from 'react'
import AxiosInstance from '../../axiosClient/AxiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const { children } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const register = async (email, password) => {
        try {
            const body = {
                email: email,
                password: password
            }
            const response = await AxiosInstance().post('/users/register', body);
            console.log('register response:', response);
        } catch (error) {
            console.log('register error:', error);
        }
        return false;
    }
    const login = async(email, password) => {
        try {
            const body = {
                email: email,
                password: password
            }
            const response = await AxiosInstance().post('/auth/login', body);
            // đọc token
            const { token } = response.data;
            // lưu token vào bộ nhớ
            await AsyncStorage.setItem('token', token);
            // cập nhật state
            setIsLoggedIn(true);
            return true;
            console.log('login response:', response);
        } catch (error) {
            console.log('login error:', error);
        }
        return false;
    }
  return (
    <UserContext.Provider value={{ isLoggedIn, login, register }}>
        {children}
    </UserContext.Provider>
  )
}
