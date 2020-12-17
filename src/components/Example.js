import React from "react";
import { Text, View } from "react-native";
import { randomValueFromList } from "../common/listutil";
import { list } from "./data";
import styles from "../styles";
import { createGlobalState } from "react-hooks-global-state";
import {
  ExampleCurrentTitle,
  ExampleCurrentView,
  CurrentDeleteButton,
  NextButton
} from "./ExampleCurrent";

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
  return (
    <View>
      <ExampleListCount />
      <ExampleCurrentTitle />
      <ExampleCurrentView />

      <View style={styles.buttonContainer}>
        <CurrentDeleteButton />
        <NextButton />
      </View>
    </View>
  );
};

export default Example;
