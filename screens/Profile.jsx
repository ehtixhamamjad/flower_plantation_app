import { View, Text, TouchableOpacity, TextInput, StyleSheet ,ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, logout, updateProfile } from '../redux/action'
import mime from "mime"
import Loader from '../components/Loader'

const Profile = ({ navigation, route }) => {

    // const { user, loading } = useSelector(state => state.auth)


    // const [name, setName] = useState(user.name);
    // const [avatar, setAvatar] = useState(user.avatar.url);


    // const dispatch = useDispatch()

    // const submitHandler = async () => {
    //     const myForm = new FormData();
    //     myForm.append("name", name);
    //     myForm.append("avatar", {
    //         uri: avatar,
    //         type: mime.getType(avatar),
    //         name: avatar.split("/").pop()
    //     })
    //     await dispatch(updateProfile(myForm));
    //     dispatch(loadUser())
    // }

    // const handleImage = () => {
    //     navigation.navigate("camera", {
    //         updateProfile: true
    //     })
    // };

    // const logoutHandler = () => {
    //     dispatch(logout())
    // }


    // useEffect(() => {
    //     if (route.params) {
    //         if (route.params.image) {
    //             setAvatar(route.params.image)
    //         }
    //     }

    // }, [route])

    // return (
    //     loading ? <Loader /> : (
    //         <View
    //             style={{
    //                 flex: 1,
    //                 backgroundColor: "#fff",
    //                 alignItems: "center",
    //                 justifyContent: "center",
    //             }}
    //         >
    //             <Avatar.Image
    //                 size={100}
    //                 source={{ uri: avatar ? avatar : null }}
    //                 style={{ backgroundColor: "#900" }}
    //             />
    //             <TouchableOpacity onPress={handleImage}>
    //                 <Text style={{ color: "#900", margin: 20 }}>Change Photo</Text>
    //             </TouchableOpacity>

    //             <View style={{ width: "70%" }}>
    //                 <TextInput
    //                     style={Styles.input}
    //                     placeholder="Name"
    //                     value={name}
    //                     onChangeText={setName}
    //                 />

    //             </View>

    //             <Button
    //                 style={Styles.btn}
    //                 onPress={submitHandler}
    //             >
    //                 <Text style={{ color: "#fff" }}>Update</Text>
    //             </Button>

    //             <Button
    //                 color='rgb(50,50,50)'
    //                 onPress={() => navigation.navigate("changepassword")}
    //             >
    //                 Change Password
    //             </Button>

    //             <Button
    //                 color='rgb(50,50,50)'
    //                 onPress={logoutHandler}
    //             >
    //                 Logout
    //             </Button>

    //             {
    //                 user.verified ? null : <Button
    //                     onPress={() => navigation.navigate("verify")}
    //                 >
    //                     Verify
    //                 </Button>
    //             }


    //         </View>
    //     )
    // )
    return(
        <>
            <ScrollView style={{ marginTop: 20 }}>
      <View
        style={{
          flex: 1,
        //   backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          marginTop:50
        }}
      >

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
            // value={name}
            // onChangeText={setName}
          />
          <TextInput
            style={Styles.input}
            placeholder="Phone"
            // value={phone}
            // onChangeText={setPhone}
          />
          <TextInput
            style={Styles.input}
            placeholder="City"
            // value={city}
            // onChangeText={setCity}
          />
          <TextInput
            secureTextEntry
            style={Styles.input}
            placeholder="Password"
            // value={password}
            // onChangeText={setPassword}
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

        {/* <Button style={Styles.btn} onPress={registerHandler}> */}
        <Button style={Styles.btn} >
          <Text style={{ color: "#fff" }}>Update</Text>
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate("")}>
          <Text
            style={{
            //   color: "rgb(0, 110, 0)",
              color: "#900",
              height: 30,
              margin: 20,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
        </>
    )
}

export default Profile

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
        backgroundColor: "rgb(0, 110, 0)",
        padding: 5,
        width: "70%",
    },
});