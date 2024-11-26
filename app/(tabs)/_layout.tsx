import { Tabs } from "expo-router";
import React from "react";
import { Image, Platform, Text, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

const shoppingIcon = require("../../assets/images/shopping-bag.png");

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
        headerTitle: () => (
            <Text style={{ fontSize: 20, fontWeight: "600" }}>Hello, Human!</Text>
        ),
        headerRight: () => (
          <Image source={shoppingIcon} style={{marginRight: 15, transform: "rotate(-5deg)", width: 30, height: 30}} />
        )
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarInactiveTintColor: '#818AF9',
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({color}) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
