import React from "react";
import { TouchableOpacity, Text, View, ScrollView } from "react-native";
import { randomValueFromList, nonCurrentList } from "../common/listutil";
import styles from "../styles";

import { useGlobalState } from "./Example";

/**
 * 関数のタイトル
 */
export const ExampleCurrentTitle = () => {
  const [exampleText] = useGlobalState("exampleText");
  return (
    <Text numberOfLines={1} style={styles.exampleCurrentTitle}>
      {exampleText.title}
    </Text>
  );
};

/**
 * 関数の用例
 */
export const ExampleCurrentView = () => {
  const [exampleText] = useGlobalState("exampleText");
  return (
    <View style={styles.example}>
      <ScrollView>
        <Text numberOfLines={8} style={styles.exampleCurrentText}>
          {exampleText ? exampleText.example : "終了"}
        </Text>
      </ScrollView>
    </View>
  );
};

/**
 * リストから外すボタン
 */
export const CurrentDeleteButton = () => {
  const [examplesList, setExamplesList] = useGlobalState("examplesList");
  const [exampleText, setExampleText] = useGlobalState("exampleText");
  return (
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
  );
};

/**
 * ランダムで他の関数を表示切り替え
 */
export const NextButton = () => {
  const [examplesList] = useGlobalState("examplesList");
  const [exampleText, setExampleText] = useGlobalState("exampleText");
  return (
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
  );
};
