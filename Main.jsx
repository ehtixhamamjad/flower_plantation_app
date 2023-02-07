import React, { useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from './screens/Home'
import Login from './screens/Login'
import Footer from './components/Footer'
import Profile from "./screens/Profile"
import Register from "./screens/Register"
import Camera from "./screens/Camera"
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './redux/action'
import Loader from "./components/Loader"
// import FavoritesScreen from "./screens/home/FavoritesScreen"
import viewAllFlowers from './screens/home/ViewAllFlowers'
import FlowerInYourArea from './screens/home/FlowerInYourArea'
import NurseryInYourArea from './screens/home/NurseryInYourArea'
import YourFuturePlans from './screens/home/YourFuturePlans'
import Verify from './screens/Verify'
import ForgetPassword from './screens/ForgetPassword'
import ChangePassword from './screens/ChangePassword'
import ResetPassword from './screens/ResetPassword'

const Stack = createNativeStackNavigator()

const Main = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUser())

    }, [dispatch])

    const { isAuthenticated, loading } = useSelector(state => state.auth)
    return (
        loading ? <Loader /> : <NavigationContainer>

            {/* <Stack.Navigator initialRouteName={isAuthenticated ? "login" : "login"}> */}
            <Stack.Navigator initialRouteName= "nurseryInYourArea" >

                <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
                {/* <Stack.Screen name='FavoritesScreen' component={FavoritesScreen} options={{ headerShown: false }} /> */}
                 <Stack.Screen name='verify' component={Verify} options={{ headerShown: false }} />
                 <Stack.Screen name='viewAllFlowers' component={viewAllFlowers} options={{ headerShown: false }} />
                 <Stack.Screen name='flowerInYourArea' component={FlowerInYourArea} options={{ headerShown: false }} />
                 <Stack.Screen name='nurseryInYourArea' component={NurseryInYourArea} options={{ headerShown: false }} />
                 <Stack.Screen name='yourFuturePlans' component={YourFuturePlans} options={{ headerShown: false }} />
                <Stack.Screen name='camera' component={Camera} options={{ headerShown: false }} />
                <Stack.Screen name='profile' component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name='forgetpassword' component={ForgetPassword} options={{ headerShown: false }} />
                <Stack.Screen name='resetpassword' component={ResetPassword} options={{ headerShown: false }} /> 
                <Stack.Screen name='changePassword' component={ChangePassword} options={{ headerShown: false }} /> 


            </Stack.Navigator>
            <Footer />

             {/* {isAuthenticated && <Footer />} */}


        </NavigationContainer>
    )
}

export default Main