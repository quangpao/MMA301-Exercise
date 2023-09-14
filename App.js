import { Platform, StyleSheet, Text, View } from "react-native";
import ComponentIOS from "./.common_components/ComponentIOS";
import ComponentAndroid from "./.common_components/ComponentAndroid";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      {
        Platform.select({
          ios: () => <ComponentIOS/>,
          android: () => <ComponentAndroid/>
        })()
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: 'yellow'
      },
      android: {
        backgroundColor: 'green'
      },
      default: {
        backgroundColor: 'red'
      }
    })
  },
});