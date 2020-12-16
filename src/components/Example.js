import React, { useState } from "react";
import { Button, Text, View, ScrollView } from "react-native";
import { randomValueFromList, nonCurrentList } from "../common/listutil";
import { list } from "./data";
import styles from "../styles";

//便利な汎用ライブラリ lodash ramda
// import _ from "lodash";
// import * as R from "ramda";

const Example = (prop) => {
  const [examplesList, setExamplesList] = useState(list);
  console.log(examplesList);
  const [exampleText, setExampleText] = useState(
    randomValueFromList(examplesList)
  );
  // randomValueFromList(list)
  return (
    <View>
      <Text style={styles.exampleListCount}>
        リストの数:{examplesList.length}
      </Text>
      <Text numberOfLines={1} style={styles.exampleCurrentTitle}>
        {exampleText.title}
      </Text>
      <View
        onClick={() => {
          // const newList = nonCurrentList(examplesList)(exampleText);
          // console.log(newList);
          // const newText = randomValueFromList(newList);
          // console.log(newText);
          setExampleText(
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
      <Button
        style={styles.currentDeleteButton}
        onPress={() => {
          const newList = nonCurrentList(examplesList)(exampleText);
          setExamplesList(newList);
          setExampleText(randomValueFromList(newList));
        }}
        title="リストから削除"
      />
    </View>
  );
};

export default Example;
