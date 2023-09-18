import auth from '@react-native-firebase/auth';
import React from 'react';
import { SafeAreaView, Text, View, } from 'react-native';


const __signIn = async () => {
    setIsLoading(true)
    if (!UserEmail || !UserPassword) {
        alert("Lütfen email bilgilerini doldurunuz.")
        return setIsLoading(false)
    }
    try {
        let response = await auth().signInWithEmailAndPassword(
            UserEmail,
            UserPassword,
        );
        if (response.user.emailVerified) {
            console.log(response);
            props.navigation.navigate('HomeAuth');
        } else {
            alert('Lütfen mailinizi onaylayın');
            setIsLoading(false)
        }
        setIsLoading(false)
    } catch (e) {
        setIsLoading(false)
        alert('Lütfen bilgilerinizi kontrol ediniz!');
        console.error(e.message);
    }
};

return (
    <SafeAreaView style={{ display: "flex" }}>
        <View>
            <Stack space={4} w="100%" alignItems="center">
                <Input
                    w="300"
                    h="50"
                    bg="#FFFFFF"
                    borderWidth={0}
                    paddingLeft={5}
                    autoCapitalize="none"
                    placeholder="Email"
                    keyboardType="email-address"
                    value={UserEmail}
                    onChangeText={(text) => setUserEmail(text)}
                    _focus={{ bg: "muted.50" }}
                    fontFamily="Proxima Nova Regular"
                    fontSize={16}
                />
                <Input
                    w="300"
                    h="50"
                    bg="#FFFFFF"
                    paddingLeft={5}
                    borderWidth={0}
                    autoCapitalize="none"
                    placeholder="Password"
                    type="password"
                    _focus={{ bg: "muted.50" }}
                    value={UserPassword}
                    onChangeText={(text) => setUserPassword(text)}
                    secureTextEntry={secureText}
                    fontFamily="Proxima Nova Regular"
                    fontSize={16}
                    InputRightElement={
                        <Icon
                            as={secureText === true ? <MaterialCommunityIcons name="eye" /> :
                                <MaterialCommunityIcons name="eye-off" />}
                            size={6}
                            mr="5"
                            color="black"
                            onPress={() => secureText === true ? setSecureText(false) : setSecureText(true)}
                        />
                    }
                />
            </Stack>
            <View marginY={60} alignItems="center">
                <Button
                    style={{ height: 46, width: 180, backgroundColor: "#8BC7FE", borderRadius: 0 }}
                    onPress={__signIn}>
                    {isLoading ? <ActivityIndicator color={'#fff'} /> :
                        <Text fontSize={18} fontWeight="bold" fontFamily="Proxima Nova Regular" color="#fff">Login</Text>}
                </Button>
            </View>
        </View>
    </SafeAreaView>
);

export { SignIn };