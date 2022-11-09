import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomListItem from "../Components/CustomListItem";
import { Avatar } from "react-native-elements";
import { auth, db } from "../firebase";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { bakcgroundColor: "#fff" },
      headerTitleStyle: { color: "#242424" },
      headerTintColor: "#242424",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => {
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="#242424" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <SimpleLineIcons name="pencil" size={24} color="#242424"/>
          </TouchableOpacity>
        </View>;
      },
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
