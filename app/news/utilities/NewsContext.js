import React, { createContext } from 'react'
import AxiosInstance from '../../axiosClient/AxiosInstance';

export const NewsContext = createContext();

export const NewsProvider = (props) => {
    const { children } = props;

    const getNews = async () => { // lấy danh sách bài viết từ API
        try {
            const result = await AxiosInstance().get('articles');
            return result.data;
        } catch (error) {
            console.log('getNews error: ', error);
        }
        return [];
    }

    const getDetail = async (id) => { // lấy chi tiết 1 bài viết
        try {
            const result = await AxiosInstance().get(`articles/${id}/detail`);
            return result.data[0];
        } catch (error) {
            console.log('getDetail error: ', error);
        }
        return [];
    }

    const uploadImage = async (form) => { // upload ảnh lên server
        try {
            const result = await AxiosInstance('multipart/form-data')
                                .post('media/upload', form);
            return result.data;
        } catch (error) {
            console.log('uploadImage error: ', error);
        }
        return null;
    }

    const addNews = async (title, content, image) => { // thêm bài viết
        try {
            const body = {
                title, 
                content,
                image,
            }
            await AxiosInstance().post('articles', body);
            return true;
        } catch (error) {
            console.log('addNews error: ', error);
        }
        return false;
    }

    return (
        <NewsContext.Provider value={{ getNews, getDetail, uploadImage, addNews }}>
            {children}
        </NewsContext.Provider>
    )
}