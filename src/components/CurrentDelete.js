import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { randomValueFromList, nonCurrentList } from "../common/listutil";
import { list } from "./data";
import styles from "../styles";

const CurrentDelete = (prop) => {
  const [archiveText, setArchiveText] = useState(randomValueFromList(list));
  return (
    <Button
      style={styles.currentDeleteButton}
      onPress={() => {}}
      title="Example button"
    />
  );
};

export default CurrentDelete;
