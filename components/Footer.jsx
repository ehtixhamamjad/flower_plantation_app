import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native"

const Footer = () => {

    const navigation = useNavigation()
    return (
        <View
            style={{
                padding: 20,
                backgroundColor: "#fff",
                flexDirection: "row",
                justifyContent: "space-around",
            }}
        >
            <TouchableOpacity onPress={() => navigation.navigate("home")}>
                <Icon name="home" size={30} color="#1EA65C" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("camera")}>
                <Icon name="camera" size={30} color="#1EA65C" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("profile")}>
                <Icon name="user" size={30} color="#1EA65C" />
            </TouchableOpacity>
        </View>
    )
}

export default Footer