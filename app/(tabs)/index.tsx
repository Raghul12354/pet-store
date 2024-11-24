import {
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  View,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#818AF9', dark: '#818AF9' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/bengal-kitten-isolated 2.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({
    //           ios: 'cmd + d',
    //           android: 'cmd + m',
    //           web: 'F12'
    //         })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>

    <ScrollView>
      {/* banner */}
      <View style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
        <View
          style={{
            height: 200,
            width: "90%",
            backgroundColor: "#818AF9",
            borderRadius: 25,
            display: "flex",
            justifyContent: "center",
            padding: 15,
          }}
        >
          <View style={{ width: "60%", display: 'flex', gap: 10, marginTop: 20 }}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
              Your Catrine will get vaccination tomorrow at 07.00 am!
            </Text>
            <Pressable style={{backgroundColor: 'white', width: 100, height: 40, borderRadius: 15, display: 'flex', justifyContent: 'center', }}><Text style={{fontSize: 14, fontWeight: '500', textAlign: 'center'}}>See details</Text></Pressable>
          </View>
          <ImageBackground
            source={require("../../assets/images/bengal-kitten-isolated 2.png")}
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: 200,
              height: 200,
            }}
          ></ImageBackground>
        </View>
      </View>
      {/* end of banner */}
      <View>
      {/* <TextInput
        style={{height: 40,}}
        placeholder="Type here to translate!"
        // onChangeText={newText => setText(newText)}
        // defaultValue={text}
      /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
});
