import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import {Galaxy, RootStackParamList} from "../../Objets";
import {transformJsonToGalaxy} from "../../utils";
import GalaxyList from "../components/GalaxyList";
import GalaxyCard from "../components/GalaxyCard";
import {StackNavigationProp} from "react-navigation-stack/lib/typescript/src/vendor/types";
import { RouteProp } from '@react-navigation/native';


type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MainScreen'>;

type Props = {
    navigation: ProfileScreenNavigationProp;
}

const MainScreen: React.FC<Props> = (props) => {

    const [galaxies, setGalaxies] = useState<Galaxy[]>([])
    const [galaxy, setGalaxy] = useState<Galaxy>()
    const key = "EZeSZjbbselDest8shNukFYCan9IXH0QvNRwAic1"
    const dateDebut = "2020-11-26"
    const dateFin = "2020-12-01"

    const callGalaxy = async() => {
        const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${dateDebut}&end_date=${dateFin}`)
        /*let a = transformJsonToGalaxy(res);
        galaxies.push(a);
        setGalaxies([...galaxies])*/
        setGalaxies(res.data)
        console.log('Galaxies')
        console.log(galaxies)
        setGalaxy(galaxies[0])
        console.log("Galaxy")
        console.log(galaxy)
    }

    useEffect(() => {
        callGalaxy()
    }, [])

    const pressIcon = (item: Galaxy) => {
        setGalaxy(item)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navigation}>
                <ScrollView>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={galaxies}
                        keyExtractor={galaxy => galaxy.title}
                        renderItem={({item}) => {
                            return <TouchableOpacity onPress={() => pressIcon(item)}>
                                <GalaxyList galaxy={item}/>
                            </TouchableOpacity>
                        }
                        }
                    />
                </ScrollView>
            </View>
            <View style={styles.body}>
                <ScrollView>
                    <GalaxyCard galaxy={galaxy}/>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30, /*Problème avec SafeAreaView*/
        display: "flex",
        flex: 1,
        backgroundColor: '#fff',
    },
    navigation: {
        flex: 2,
        backgroundColor: 'black'
    },
    body: {
        flex : 9,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    buttonGalaxy: {
        flex: 1,
        flexDirection: "row"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    scrollView: {
      flex: 1,
      alignItems: "flex-end",
    },
    title: {
        flex: 5,
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
    containerIcon: {
        width: 120,
        height: 140,
        justifyContent: "space-around",
        alignItems: "center",
        margin: 5
    },
});

export default MainScreen