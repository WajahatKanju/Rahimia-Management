import React, { useState, useEffect } from "react";
import { Text, View, Image,TextInput,Pressable,Keyboard, ScrollView } from "react-native";

import style from "../styles/StyleMain"

function Login({ navigation }) {
  function login() {}
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);


  function handleLogin(evt) {
    login(email, password);
    setPassword("");
  }

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={style.body}>
      <Text></Text>
      {keyboardStatus !== "Keyboard Shown" && (
        <Image style={style.img} source={require("../static/img/logo.png")} />
      )}
      <View style={style.form}>
        <Text style={style.formHeader}>Login</Text>
        <TextInput
          style={style.input}
          placeholderTextColor="#FFF"
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(evt) => {
            setEmail(evt);
          }}
          value={email}
        />
        <TextInput
          style={style.input}
          placeholderTextColor="#FFF"
          placeholder="password"
          secureTextEntry={true}
          value={password}
          onChangeText={(evt) => {
            setPassword(evt);
          }}
        />

        <Pressable style={style.button} onPress={handleLogin}>
          <Text style={style.buttonText}>LOGIN</Text>
        </Pressable>
        <Pressable
          style={style.navigate}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={style.navigateText}>Create An Account</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default Login;
