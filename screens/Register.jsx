import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { register } from "../redux/action";
import mime from "mime";

const Register = ({ navigation, route }) => {
  // const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  // const [cpassword, setcPassword] = useState("");

  const passwordCheck = () => {
    if (password != cpassword && passwordCheck.length >= 8) {
      <Dialog visible={openDialog} onDismiss={hideDialog}>
        <Dialog.Title>Password Is Not Same</Dialog.Title>
        <Dialog.Content>
          <Text>Enter Minimum 8 character Password</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Button onPress={hideDialog} color="#900">
              OK
            </Button>
          </View>
        </Dialog.Content>
      </Dialog>;
    } else {
      registerHandler();
    }
  };

  const dispatch = useDispatch();

  const handleImage = () => {
    navigation.navigate("camera", {
      updateProfile: false,
    });
  };

  const registerHandler = () => {
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("phone", phone);
    myForm.append("city", city);
    myForm.append("password", password);
    // myForm.append("avatar", {
    //     uri: avatar,
    //     type: mime.getType(avatar),
    //     name: avatar.split("/").pop()
    // })

    dispatch(register(myForm));
  };

  // useEffect(() => {

  //     if (route.params) {
  //         if (route.params.image) {
  //             setAvatar(route.params.image)
  //         }
  //     }

  // }, [route])
  // const [selectedValue, setSelectedValue] = useState("Lahore");

  return (
    <ScrollView style={{ marginTop: 20 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: 135,
            height: 135,
            resizeMode: "stretch",
          }}
          source={require("../assets/images.png")}
        />
        <Text style={{ fontSize: 20, margin: 10 }}>Sign Up</Text>
        {/* <Avatar.Image
                size={100}
                source={{ uri: avatar ? avatar : null }}
                style={{ backgroundColor: "#900" }}
            />
            <TouchableOpacity onPress={handleImage}>
                <Text style={{ color: "#900" }}>Change Photo</Text>
            </TouchableOpacity> */}

        <View style={{ width: "70%" }}>
          <TextInput
            style={Styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={Styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={Styles.input}
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
          />
          <TextInput
            style={Styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
          <TextInput
            secureTextEntry
            style={Styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          {/* <TextInput
                    secureTextEntry
                    style={Styles.input}
                    placeholder="Confirm Password"
                    value={cpassword}
                    onChangeText={setcPassword}
                /> */}
        </View>
        {/* <Text style={{color:"#b5b5b5"}}>Enter 8 Chracter</Text> */}

        <Button style={Styles.btn} onPress={registerHandler}>
          <Text style={{ color: "#fff" }}>Register</Text>
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text
            style={{
              color: "rgb(0, 110, 0)",
              height: 30,
              margin: 20,
            }}
          >
            Have an Account, Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;

const Styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 15,
  },

  btn: {
    backgroundColor: "#1EA65C",
    padding: 5,
    width: "70%",
  },
});
