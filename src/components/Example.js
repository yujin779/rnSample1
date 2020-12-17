import React, { useState } from "react";
import { TouchableOpacity, Text, View, ScrollView } from "react-native";
import { randomValueFromList, nonCurrentList } from "../common/listutil";
import { list } from "./data";
import styles from "../styles";

const Example = () => {
  const [examplesList, setExamplesList] = useState(list);
  const [exampleText, setExampleText] = useState(
    randomValueFromList(examplesList)
  );
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.currentDeleteButton}
          onPress={() => {
            const newList = nonCurrentList(examplesList)(exampleText);
            setExamplesList(newList);
            setExampleText(randomValueFromList(newList));
          }}
        >
          <Text style={styles.buttonText}>この関数を表示させない</Text>
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
