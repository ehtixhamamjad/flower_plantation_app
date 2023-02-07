import * as React from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import { Button, Text, Appbar } from "react-native-paper";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Plan from "./details/Plan";
import Icon from "react-native-vector-icons/Entypo";
export default function YourFuturePlans() {
  const navigation = useNavigation();

  const [visible, setVisible] = React.useState(false);
  const plans = [1, 2, 3];
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
          color="#1EA65C"
          title="Your Future Plans"
        />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      {/* <Icon name="heart" size={30} color="#900" /> */}
      <ScrollView>
        {plans.map((i, index) => (
          <Plan key={index} />
        ))}

        <TouchableOpacity
          style={styles.addBtn}
          // onPress={hideDialog}
        >
          <Icon name="add-to-list" size={20} color="#1EA65C" />
        </TouchableOpacity>

        <View style={{ marginTop: 100 }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  addBtn: {
    backgroundColor: "#fff",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    alignSelf: "center",
    marginVertical: 20,
    elevation: 5,
  },
});
