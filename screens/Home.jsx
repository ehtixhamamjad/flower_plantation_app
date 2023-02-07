import {
  View,
  Dimensions,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Task from "../components/Task";
import Icon from "react-native-vector-icons/Entypo";
import { Dialog, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { addTask, loadUser } from "../redux/action";
import { SelectList } from "react-native-dropdown-select-list";
import { useNavigation } from "@react-navigation/native"
import { Appbar } from "react-native-paper";

const DeviceWidth = Dimensions.get("window").width;
const Home = () => {
  const navigation = useNavigation()
  // const { user } = useSelector(state => state.auth)

  // const dispatch = useDispatch();

  // const { loading, message, error } = useSelector(state => state.message)

  // const [openDialog, setOpenDialog] = useState(false);
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

  // const hideDialog = () => {
  //     setOpenDialog(!openDialog)
  // }

  // const addTaskHandler = async () => {
  //     await dispatch(addTask(title, description));
  //     dispatch(loadUser());
  // }

  // useEffect(() => {
  //     if (error) {
  //         alert(error);
  //         dispatch({ type: "clearError" });
  //         dispatch({ type: "clearError" });
  //     }
  //     if (message) {
  //         alert(message)
  //         dispatch({ type: "clearMessage" });
  //     }
  // }, [alert, error, message, dispatch])

  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

  return (
    <>
      {/* <View style={{marginTop:100,paddingHorizontal:20}}>
        <SelectList 
            setSelected={(val) => setSelected(val)} 
            data={data} 
            save="value"
    />
        </View> */}
                         <Appbar.Header
        style={{
          backgroundColor: "#fff",
        }}
      >
        <Appbar.Content 
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
        color="#1EA65C" title="Main Menu" />
      </Appbar.Header>
        <ScrollView>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <TouchableOpacity
            style={{
              width: DeviceWidth * 0.7,
              height: DeviceWidth * 0.30,
              marginBottom: 20,
              backgroundColor: "#2AC3FF",
              borderRadius: 10,
              elevation: 10,
              justifyContent: "center",
              flexDirection: "column",
            }}
            onPress={() => navigation.navigate("flowerInYourArea")}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Icon name="leaf" style={{}} size={30} color="#fff" />
              <View style={{ justifyContent: "center", flexDirection: "row" }}>
                <Text style={{ color: "#fff", fontSize: 20 }}>
                  Flower In Your Area
                </Text>
              </View>
              <Text style={{ color: "#fff" }}>Total Flower 10</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: DeviceWidth * 0.7,
              height: DeviceWidth * 0.30,
              marginBottom: 20,
              backgroundColor: "#FF6968",
              borderRadius: 10,
              elevation: 4,
              justifyContent: "center",
              flexDirection: "column",
            }}
            onPress={() => navigation.navigate("viewAllFlowers")}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Icon name="flower" style={{}} size={30} color="#fff" />
              <View style={{ justifyContent: "center", flexDirection: "row" }}>
                <Text style={{ color: "#fff", fontSize: 20 }}>
                  View All Flower
                </Text>
              </View>
              <Text style={{ color: "#fff" }}>Total</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: DeviceWidth * 0.7,
              height: DeviceWidth * 0.30,
              marginBottom: 20,
              backgroundColor: "#FF8F61",
              borderRadius: 10,
              elevation: 4,
              justifyContent: "center",
              flexDirection: "column",
            }}
            onPress={() => navigation.navigate("nurseryInYourArea")}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Icon name="address" style={{}} size={30} color="#fff" />
              <View style={{ justifyContent: "center", flexDirection: "row" }}>
                <Text style={{ color: "#fff", fontSize: 20 }}>
                Nursery in Your Area
                </Text>
              </View>
              <Text style={{ color: "#fff" }}>Your Future Plans</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: DeviceWidth * 0.7,
              height: DeviceWidth * 0.30,
              marginBottom: 20,
              backgroundColor: "#7A54FF",
              borderRadius: 10,
              elevation: 4,
              justifyContent: "center",
              flexDirection: "column",
            }}
            onPress={() => navigation.navigate("yourFuturePlans")}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Icon name="text-document" style={{}} size={30} color="#fff" />
              <View style={{ justifyContent: "center", flexDirection: "row" }}>
                <Text style={{ color: "#fff", fontSize: 20 }}>
                  Your Future Plans
                </Text>
              </View>
              <Text style={{ color: "#fff" }}>Your Future Plans</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </>

    // <>
    //     <View style={{ backgroundColor: "#fff", flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>

    //         <ScrollView>
    //             <SafeAreaView>
    //                 <Text style={styles.heading}>All Tasks</Text>

    //                 {user && user.tasks.map((item) => (
    //                     <Task key={item._id} title={item.title} description={item.description} status={item.completed} taskId={item._id} />
    //                 ))}

    //                 <TouchableOpacity style={styles.addBtn} onPress={hideDialog}>

    //                     <Icon name='add-to-list' size={20} color="#900" />

    //                 </TouchableOpacity>

    //             </SafeAreaView>

    //         </ScrollView>
    //     </View>
    //     <Dialog visible={openDialog} onDismiss={hideDialog} >
    //         <Dialog.Title>ADD A TASK</Dialog.Title>
    //         <Dialog.Content>
    //             <TextInput
    //                 style={styles.input}
    //                 placeholder="Title"
    //                 value={title}
    //                 onChangeText={setTitle}
    //             />
    //             <TextInput
    //                 style={styles.input}
    //                 placeholder="Description"
    //                 value={description}
    //                 onChangeText={setDescription}
    //             />

    //             <View style={{ flexDirection: "row", alignItems: "center" }}>
    //                 <TouchableOpacity onPress={hideDialog} >
    //                     <Text>CANCEL</Text>
    //                 </TouchableOpacity>
    //                 <Button
    //                     onPress={addTaskHandler}
    //                     color="#900"
    //                     disabled={!title || !description || loading}
    //                 >
    //                     ADD
    //                 </Button>
    //             </View>
    //         </Dialog.Content>
    //     </Dialog>

    // </>
  );
};

export default Home;

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    textAlign: "center",
    marginTop: 25,
    marginBottom: 20,
    color: "#fff",
    backgroundColor: "#474747",
  },
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
});
