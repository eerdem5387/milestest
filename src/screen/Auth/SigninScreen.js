import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, Image, TouchableHighlight } from 'react-native';


const SigninScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            console.log('Başarılı giriş!', userCredential.user);
        } catch (error) {
            console.error('Giriş hatası:', error);
            alert('Bilgilerinizi Kontrol Ediniz', 'Giriş yaparken bir hata oluştu.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={{ width: 250, height: 250 }}
                source={require("../../assest/money1.png")}
            />
            <View style={{ gap: 10 }}>
                <View style={styles.inputarea}>
                    <Image
                        source={require("../../assest/mail.png")}
                        style={styles.icon}
                    />
                    <TextInput
                        style={styles.textinput}
                        placeholder="E-Mail"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        keyboardType="email-address"
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.inputarea}>
                    <Image
                        source={require("../../assest/password.png")}
                        style={styles.icon}
                    />
                    <TextInput
                        style={styles.textinput}
                        placeholder="Password"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={true}
                    />
                </View>
            </View>
            <TouchableHighlight style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttontext}>Login</Text>
            </TouchableHighlight>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50
    },
    inputarea: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center"
    },
    icon: {
        width: 25,
        height: 25,
    },
    textinput: {
        width: 310,
        height: 50,
        padding: 10,
        backgroundColor: "lightgray",
        borderRadius: 10,
    },
    button: {
        width: 350,
        height: 50,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
    buttontext: {
        color: "white",
    }
});

export default SigninScreen;