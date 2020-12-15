import React, { useState } from "react";
import { Text, View } from "react-native";
import { randomValueFromList, nonCurrentList } from "../common/listutil";
import { list } from "./data";
import styles from "../styles";

//便利な汎用ライブラリ lodash ramda
// import _ from "lodash";
// import * as R from "ramda";

const Example = (prop) => {
  const [archiveText, setArchiveText] = useState(randomValueFromList(list));
  return (
    <View
      onClick={() => {
        setArchiveText(randomValueFromList(nonCurrentList(list)(archiveText)));
      }}
      style={styles.example}
    >
      <Text style={styles.exampleListCount}>リストの数:{list.length}</Text>

      <Text style={styles.exampleCurrentText}>{archiveText}</Text>
    </View>
  );
};

export default Example;
