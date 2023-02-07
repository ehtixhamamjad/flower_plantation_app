import { View, Text } from 'react-native'
import { Checkbox } from 'react-native-paper'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/AntDesign"

const Plan = ({}) => {
    const [completed, setCompleted] = useState();
  return (
    <View
    style={{
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    }}
>
    <View style={{ width: "70%" }}>
        <Text style={{ fontSize: 20, marginVertical: 7, color: "#1EA65C" }}>
            {/* {title} */}
            Plan
        </Text>
        <Text style={{ color: "#4a4a4a" }}>
            {/* {description} */}
            Discription
            </Text>
    </View>
    <Checkbox
        status={completed ? "checked" : "unchecked"}
        color="#474747"
        // onPress={handleCheckbox}
    />
    <Icon
        name="delete"
        color="#fff"
        size={20}
        style={{
            backgroundColor: "#1EA65C",
            padding: 10,
            borderRadius: 100,
        }}
        // onPress={deleteHandler}
    />
</View>
  )
}

export default Plan