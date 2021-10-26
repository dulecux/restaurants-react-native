import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';


const ListScreen = ({ navigation }) => {

    const [restaurant, setRestaurant] = useState(null);
    const id = navigation.getParam('id');

    const getRestaurant = async (id) => {

         const response = await yelp.get(`${id}`);

        setRestaurant(response.data);
    };

    useEffect(() => {
        getRestaurant(id);
    }, []);

    if(!restaurant) {
        return null;
    }

    return <>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.address}>Address: {restaurant.location.display_address}</Text>
        <Text style={styles.address}>Phone: {restaurant.phone}</Text>
        <FlatList 
        data={restaurant.photos}
        keyExtractor={(photo) => photo}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />
        }}
        />
    </>
};


const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        marginBottom: 10,
        alignSelf: 'center'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 2,
        marginLeft: 5
    },
    address: {
        marginBottom: 2,
        marginLeft: 5
    }
});

export default ListScreen;