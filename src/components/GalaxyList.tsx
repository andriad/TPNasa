import {Galaxy, RootStackParamList} from "../../Objets";
import {Image, ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import React, {useState} from "react";

type Props = {
    galaxy: Galaxy;
}

const GalaxyList: React.FC<Props> = ({galaxy}) => {

    return (
        <ScrollView>
            <Image source={{uri: galaxy.url}} style={styles.icon}/>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    icon: {
        width: 120,
        height: 120,
        borderRadius: 20,
        backgroundColor: 'black'
    }
});

export default GalaxyList