import React, { useState } from "react";
import {
  Text,
  ScrollView,
  Button,
  View,
  Alert,
  Modal,
  Pressable,
} from "react-native";

import { useAuth } from "../context/AuthContext";

import styles from "../styles/StyleMain";

function Dashboard() {
  const { logout } = useAuth();

  function arrangeClass() {}

  return (
    // <ScrollView styles={{ flex: 1, }}>
    <View
      style={{
        ...styles.flex1,
        ...styles.centerCenter,
        backgroundColor: "red",
      }}
    >
      <Text>This is Dashboard</Text>
      <View
        style={{
          backgroundColor: "green",
          borderRadius: 10,
          margin: 20,
          elevation: 15,
          justifyContent: "center",
        }}
      >
        <Pressable
          android_ripple={{ color: "#AAAA", borderless: true }}
          style={{
            backgroundColor: "navy",
            padding: 10,
            
          }}
        >
          <Text style={{ color: "wheat" }}>Ripple Effect</Text>
        </Pressable>
      </View>
      <Button title="Logout" onPress={logout} />
      <Button title="Arrange A Class" onPress={arrangeClass} />
    </View>
    // </ScrollView>
  );
}

export default Dashboard;
