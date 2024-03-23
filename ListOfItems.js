import React from 'react';
import { View, Text, StyleSheet, FlatList, } from 'react-native';


const ListOfItems = () => {

    const data = [
        { id: 1, name: Lakshmi, Qualification: BigInt.tech },
        { id: 2, name: Durga, Qualification: B.Tech },
        { id: 3, name: Thulasi, Qualification: M.Farm },
        { id: 4, name: Bhargavi, Qualification: B.Farm }
    ];

    return (
        <View>
            <FlatList style={styles.flatlistItems}>
                data={data}
                KeyExtractor= {(item) => (item.id.data)}
                renderItem= {({ item }) =>
                    <View style={styles.containerView}>
                        <Text>item.id</Text>
                        <Text>item.name</Text>
                        <Text>item.Qualification</Text>
                    </View>
                }
            </FlatList>
        </View>
    );
};

export default ListOfItems;
const styles = StyleSheet.create({
    containerView: {
        alignContent: 'center',
        justifyContent: 'center'
    },
    flatlistItems: {
        alignItems: 'center',
    }
});