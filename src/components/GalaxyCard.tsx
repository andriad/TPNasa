import {Galaxy} from "../../Objets";
import {Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, Text} from "react-native";
import React from "react";

type Props = {
    galaxy: Galaxy | undefined;
}

const GalaxyCard: React.FC<Props> = ({galaxy}) => {

    return (
        <TouchableOpacity style={styles.container} onPress={() => []}>
            <ImageBackground source={{uri: galaxy?.url}} style={styles.image}>
                <Text style={styles.title}>{galaxy?.title}</Text>
                <Text style={styles.explanation}>{galaxy?.explanation}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    title: {
        flex: 5,
        marginTop: 100,
        marginLeft: 20,
        marginRight: 20,
        color: 'white',
        fontWeight: "bold",
        fontSize: 40,
    },
    explanation: {
        flex: 2,
        marginLeft: 20,
        marginRight: 20,
        color: 'white',
        fontSize: 20,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
});

export default GalaxyCard