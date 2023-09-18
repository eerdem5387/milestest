import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from './SigninScreen';

const AuthStack = createNativeStackNavigator();

function AuthStackScreen() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Signin"
                component={SignIn}
                options={{ headerShown: false }}
            />
        </AuthStack.Navigator>
    );
}
export default AuthStackScreen;