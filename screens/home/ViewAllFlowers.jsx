import * as React from "react";
import Flower from "./details/Flower"
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Text, Appbar } from "react-native-paper";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function ViewAllFlowers() {
  const navigation = useNavigation();
  const flowers=[1,2,3];
  const [visible, setVisible] = React.useState(false);
  return (
    <View>
      <Appbar.Header
        style={{
          backgroundColor: "#fff",
        }}
      >
        <Appbar.BackAction onPress={() => navigation.navigate("home")} />
        <Appbar.Content 
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
        color="#1EA65C" title="View All Flowers" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      {/* <Icon name="heart" size={30} color="#900" /> */}
      <ScrollView>

      {flowers.map((i,index)=>(
          <Flower key={index}/>
        ))}
        <View style={{ marginTop: 100 }}></View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'blue',
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
