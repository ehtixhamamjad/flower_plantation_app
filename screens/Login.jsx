import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  style,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/action";

const Login = ({ navigation }) => {
  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    dispatch(login(email, password));
  };

  // useEffect(() => {
  //     if (error) {
  //         alert(error)
  //         dispatch({ type: "clearError" })
  //     }

  // }, [error, dispatch, alert,])
  useEffect(() => {
    console.log(isAuthenticated);
    // console.log(error);
  }, [error]);

  return (
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
      <Text style={{ fontSize: 23, margin: 10 }}>Welcome </Text>
      <Text style={{ fontSize: 20, margin: 10 }}>Flower Plantation</Text>
      <View style={{ width: "70%" }}>
        <TextInput
          style={Styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          secureTextEntry
          style={Styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Button
        disabled={!email || !password}
        style={Styles.btn}
        onPress={loginHandler}
      >
        <Text style={{ color: "#fff" }}>Login</Text>
      </Button>

      <Text
        style={{
          marginTop: 20,
        }}
      >
        Or
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("register")}>
        <Text
          style={{
            color: "rgb(0, 110, 0)",
            height: 30,
            margin: 20,
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("forgetpassword")}>
        <Text> Forget Password </Text>
      </TouchableOpacity>
      
    </View>
  );
};
export default Login;

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
