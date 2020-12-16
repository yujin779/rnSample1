import React, { useState } from "react";
import { Button, Text, View } from "react-native";
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
        <Text style={styles.exampleListCount}>
          リストの数:{examplesList.length}
        </Text>

        <Text style={styles.exampleCurrentText}>
          {exampleText ? exampleText.example : "終了"}
        </Text>
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
