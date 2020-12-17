import React, { useState } from "react";
import { TouchableOpacity, Text, View, ScrollView } from "react-native";
import { randomValueFromList, nonCurrentList } from "../common/listutil";
import { list } from "./data";
import styles from "../styles";
import { createGlobalState } from "react-hooks-global-state";

import { useGlobalState } from "./Example";

export const ExampleCurrentTitle = () => {
  const [exampleText] = useGlobalState("exampleText");
  return (
    <Text numberOfLines={1} style={styles.exampleCurrentTitle}>
      {exampleText.title}
    </Text>
  );
};

export const ExampleCurrentView = () => {
  const [examplesList, setExamplesList] = useGlobalState("examplesList");
  const [exampleText] = useGlobalState("exampleText");
  return (
    <View
      onClick={() => {
        // const newList = nonCurrentList(examplesList)(exampleText);
        // console.log(newList);
        // const newText = randomValueFromList(newList);
        // console.log(newText);
        setExamplesList(
          randomValueFromList(nonCurrentList(examplesList)(exampleText))
        );
      }}
      style={styles.example}
    >
      <ScrollView>
        <Text numberOfLines={8} style={styles.exampleCurrentText}>
          {exampleText ? exampleText.example : "終了"}
        </Text>
      </ScrollView>
    </View>
  );
};
