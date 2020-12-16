import React from "react";
import { View } from "react-native";
import Example from "./components/Example";
import CurrentDelete from "./components/CurrentDelete";
import styles from "./styles";

const App = () => {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     backgroundColor: "green"
    //   }}
    // >
    <View style={styles.app}>
      <Example />
    </View>
  );
};

export default App;
