import React from "react";
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Galaxy, RootStackParamList} from "../../Objets";
import {StackNavigationProp} from "react-navigation-stack/lib/typescript/src/vendor/types";
import { RouteProp } from '@react-navigation/native';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'ZoomScreen'>
type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ZoomScreen'>;

type Props = {
    route: ProfileScreenRouteProp;
    navigation: ProfileScreenNavigationProp;
}

const ZoomScreen: React.FC<Props> = (props) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={{uri: props.route.params.galaxy.hdurl}}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
    }
});

export default ZoomScreen