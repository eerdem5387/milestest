import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SigninScreen from './SigninScreen';

const AuthStack = createNativeStackNavigator();

function AuthStackScreen() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Signin"
                component={SigninScreen}
                options={{ headerShown: false }}
            />
        </AuthStack.Navigator>
    );
}
export default AuthStackScreen;