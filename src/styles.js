import { StyleSheet } from "react-native";
// 画面サイズにスケールを合わせてくれるらしいライブラリ
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green"
  },
  example: {
    width: scale(350),
    height: verticalScale(250),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222222"
  },
  exampleListCount: {
    color: "white",
    fontSize: moderateScale(12)
  },
  exampleCurrentText: {
    color: "white",
    fontSize: moderateScale(12)
  },
  currentDeleteButton: {}
});

export default styles;
