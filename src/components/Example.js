import React, { useState } from "react";
import { TouchableOpacity, Text, View, ScrollView } from "react-native";
import { randomValueFromList, nonCurrentList } from "../common/listutil";
import { list } from "./data";
import styles from "../styles";
import { createGlobalState } from "react-hooks-global-state";
import { ExampleCurrentTitle, ExampleCurrentView } from "./ExampleCurrent";

const initialState = {
  examplesList: list,
  exampleText: randomValueFromList(list)
};
export const { useGlobalState } = createGlobalState(initialState);

/**
 * リストの数
 */
const ExampleListCount = () => {
  const [examplesList] = useGlobalState("examplesList");
  return (
    <Text style={styles.exampleListCount}>
      リストの数:{examplesList.length}
    </Text>
  );
};

const Example = () => {
  const [examplesList, setExamplesList] = useGlobalState("examplesList");
  const [exampleText, setExampleText] = useGlobalState("exampleText");
  return (
    <View>
      <ExampleListCount />
      <ExampleCurrentTitle />
      <ExampleCurrentView />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.currentDeleteButton}
          onPress={() => {
            const newList = nonCurrentList(examplesList)(exampleText);
            setExamplesList(newList);
            setExampleText(randomValueFromList(newList));
          }}
        >
          <Text style={styles.buttonText}>
            この関数を表示させない{"\n"}リストから削除
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => {
            setExampleText(
              randomValueFromList(nonCurrentList(examplesList)(exampleText))
            );
          }}
        >
          <Text style={styles.buttonText}>次を表示</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Example;
