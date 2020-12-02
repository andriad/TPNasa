import {Galaxy, RootStackParamList} from "../../Objets";
import {Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, Text} from "react-native";
import React from "react";
import {StackNavigationProp} from "react-navigation-stack/lib/typescript/src/vendor/types";
import {LinearGradient} from "expo-linear-gradient";


type Props = {
    galaxy: Galaxy | undefined;
    navigation: StackNavigationProp<RootStackParamList> | undefined
}

const GalaxyCard: React.FC<Props> = ({galaxy, navigation}) => {

    const pressCard = () => {
        navigation?.navigate("ZoomCard", galaxy)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={pressCard}>
                <ImageBackground source={{uri: galaxy?.url}} style={styles.image}>
                    <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']}
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        top: 0,
                                        height: 300,
                                    }}/>
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
        marginTop: 300,
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