import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput, Button } from 'react-native';


const SigninScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            console.log('Başarılı giriş!', userCredential.user);
        } catch (error) {
            console.error('Giriş hatası:', error);
            Alert.alert('Hata', 'Giriş yaparken bir hata oluştu.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Giriş Yap</Text>
            <TextInput
                style={styles.input}
                placeholder="E-posta"
                onChangeText={(text) => setEmail(text)}
                value={email}
                keyboardType="email-address"
                autoCapitalize='none'
            />
            <TextInput
                style={styles.input}
                placeholder="Şifre"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry
            />
            <Button title="Giriş Yap" onPress={handleLogin} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
    },
});

export default SigninScreen;