import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { NewsContext } from '../utilities/NewsContext';

const Detail = (props) => {
    const { navigation } = props;
    const id  = props.route?.params?.id;
    const { getDetail } = useContext(NewsContext);
    const [ data, setData ] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const result = await getDetail(id);
            setData(result);
        };
        if (id) getData();
        return () => { }
    }, [id]);
    console.log(data);

    return (
        (id && data && data._id.toString() == id.toString()) ?
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}> 
                <View style={styles.column1}>
                    <View style={styles.row}>
                        <View style={styles.row1}>
                            <Image source={require('../../../src/media/images/ic_bbcnews.png')} />
                            <View style={styles.column2}>
                                <Text style={styles.fontBBCN}>BBC News</Text>
                                <Text style={styles.fonttimepicker}>14m ago</Text>
                            </View>
                        </View>
                        <Pressable style={styles.btnF}>
                            <Text style={styles.btnFLabel}>Following</Text>
                        </Pressable>
                    </View>
                    <Image source={{uri: data.image}}
                        style={styles.imagethuyen} />
                    <Text style={styles.fontE}>Europe</Text>
                    <Text style={styles.fontU1}>{data.title}</Text>
                    <Text style={styles.fontU2}>{data.content}</Text>
                </View>
        </View>
        </ScrollView>
        :
        <View>
            <Text style={{ fontSize: 40}}>Đang tải dữ liệu</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    column1: {
        marginTop: 36,
    },
    column2: {
        marginTop: 4,
        marginLeft: 4,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    row1: {
        flexDirection: 'row',
    },
    fontBBCN: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000',
    },
    fonttimepicker: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    btnF: {
        marginTop: 10,
        width: 102,
        height: 34,
        backgroundColor: '#1877F2',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 11,
        paddingVertical: 5,
        borderRadius: 6,
    },
    btnFLabel: {
        color: '#ffff',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
    },
    imagethuyen: {
        marginTop: 15,
        borderRadius: 12,
        width: '100%',
        height: 200,
    },
    fontE: {
        marginTop: 8,
        color: '#4E4B66',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
    },
    fontU1: {
        marginTop: 4,
        color: '#000',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 36,
        letterSpacing: 0.12,
    },
    fontU2: {
        marginTop: 16,
        color: '#4E4B66',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
    },
})

export default Detail;