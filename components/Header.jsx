import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"

const Header = () => {

    const navigation = useNavigation()
    return (
        <View
            style={{
                paddingBottom: 12,
                backgroundColor: "#fff",
                flexDirection: "row",
                justifyContent: "space-around",
            }}
        >
            <Text style={{color:"#1EA65C",marginTop:32,fontWeight:'650',fontSize:20}} >Menu</Text>

        </View>
    )
}

export default Header