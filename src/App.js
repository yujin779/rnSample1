import React from "react";
import { View, Text } from "react-native";
import Example from "./components/Example";
import styles from "./styles";

const App = () => {
  return (
    <View style={styles.app}>
      <Text style={styles.mainTitle}>Lodash 用例集ランダム表示</Text>
      <Example />
    </View>
  );
};

export default App;
