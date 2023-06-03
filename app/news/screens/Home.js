import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { NewsContext } from '../utilities/NewsContext';

const Home = (props) => {

    const { navigation } = props;
    const { getNews } = useContext(NewsContext);
    const [data, setData] = useState([]); // khởi tạo danh sách bài viết
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        // chạy 1 lần duy nhất khi compenent đc gọi 
    });

    useEffect(() => {
        // chạy khi component đc gọi và khi state của component thay đổi 
    }, []);

    useEffect(() => {
        // chạy khi component đc gọi và khi state data của component thay đổi 
    }, [data]);

    useEffect(() => {
        const getData = async () => {
            const result = await getNews();
            setData(result);
        };
        getData();
        return () => { }
    }, []);

    const refreshingData = () => {
        setRefreshing(true);
        const getData = async () => {
            const result = await getNews();
            setData(result);
            setRefreshing(false);
        };
        getData();
    }

    const renderItem = (props) => {
        const { item } = props;
        const { _id, title, content, image, createdAt } = item;

        const displayDate = (value) => {
            const date = new Date(value);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        }

        return (
            <Pressable onPress={() => navigation.navigate("Detail", { id: _id })}>
                <View style={styles.row}>
                    <View>
                        <Image source={{ uri: image }}
                            style={styles.customImage} />
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.font}>{title}</Text>
                        <Text style={styles.font1}>{content}</Text>
                        <Text style={styles.font2}>{displayDate(createdAt)}</Text>
                    </View>
                </View>
            </Pressable>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
                showsVerticalScrollIndicator={false}
                refreshing={refreshing}
                onRefresh={refreshingData} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    column: {
        width: 240,
        paddingLeft: 4,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 15.3,
    },
    customImage: {
        borderRadius: 8,
        width: 100,
        height: 100,
    },
    font: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.12,
        color: 'red',
        marginBottom: 4,
    },
    font1: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 13,
        lineHeight: 20,
        letterSpacing: 0.12,
        color: 'black',
        marginBottom: 4,
    },
    font2: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 11,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#00000',
    },
})

export default Home;