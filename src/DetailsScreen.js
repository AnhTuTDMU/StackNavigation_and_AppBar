import React from 'react';
import {Text} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
const DetailsScreen = ({ navigation }) => {
    return (
        <View style = {styles.container}>
            <Text>Details Screen</Text>
        </View>
    )
}

export default DetailsScreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})