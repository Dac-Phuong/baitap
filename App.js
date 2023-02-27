import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons,Fontisto } from "react-native-vector-icons";
import HomeScreen from "./src/HomeScreen/HomeScreen";
import Expenses from "./src/Expenses/Expenses";
import BankAccounts from "./src/BankAccounts";
import More from "./src/More";
import Portfolio from "./src/Portfolio";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarInactiveTintColor: "#000",
          tabBarActiveTintColor: "#0a6da8",
          tabBarShowLabel: false,
          tabBarStyle: {
            paddingVertical: 10,
            paddingBottom: 10,
            height: 65,
            tabBarBackground: "#fff",
            position: "absolute",
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Ionicons
                  name="ios-home-outline"
                  color={focused ? "#0a6da8" : null}
                  size={22}
                />
                <Text
                  style={{
                    color: focused ? "#0a6da8" : "#000",
                    fontSize: 11,
                    fontWeight: "500",
                    paddingTop: 2,
                  }}
                >
                  Home
                </Text>
              </View>
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Ionicons
                  name="pie-chart-outline"
                  color={focused ? "#0a6da8" : null}
                  size={22}
                />
                <Text
                  style={{
                    color: focused ? "#0a6da8" : "#000",
                    fontSize: 11,
                    fontWeight: "500",
                    paddingTop: 2,
                  }}
                >
                  Expenses
                </Text>
              </View>
            ),
          }}
          name="Expenses"
          component={Expenses}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <AntDesign
                  name="home"
                  color={focused ? "#0a6da8" : null}
                  size={22}
                />
                <Text
                  style={{
                    color: focused ? "#0a6da8" : "#000",
                    fontSize: 11,
                    fontWeight: "500",
                    paddingTop: 2,
                  }}
                >
                  Portfolio
                </Text>
              </View>
            ),
          }}
          name="Portfolio"
          component={Portfolio}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <AntDesign
                  name="home"
                  color={focused ? "#0a6da8" : null}
                  size={22}
                />
                <Text
                  style={{
                    color: focused ? "#0a6da8" : "#000",
                    fontSize: 11,
                    fontWeight: "500",
                    paddingTop: 2,
                  }}
                >
                  Bank Accounts
                </Text>
              </View>
            ),
          }}
          name="BankAccounts"
          component={BankAccounts}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Fontisto
                  name="move-h-a"
                  color={focused ? "#0a6da8" : null}
                  size={22}
                />
                <Text
                  style={{
                    color: focused ? "#0a6da8" : "#000",
                    fontSize: 11,
                    fontWeight: "500",
                    paddingTop: 2,
                  }}
                >
                  More
                </Text>
              </View>
            ),
          }}
          name="More"
          component={More}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
