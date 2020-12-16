import { StyleSheet } from "react-native";
// 画面サイズにスケールを合わせてくれるらしいライブラリ
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c9d14a"
  },
  mainTitle: {
    // backgroundColor: "#58719a",
    width: scale(350),
    textAlign: "center",
    color: "#aeb43d",
    textShadow: "1px 1px 0 white",
    fontSize: moderateScale(34)
  },
  exampleCurrentTitle: {
    backgroundColor: "#58719a",
    width: scale(350),
    alignItems: "center",
    color: "white",
    fontSize: moderateScale(20)
  },
  example: {
    width: scale(350),
    height: verticalScale(250),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222222"
  },
  exampleListCount: {
    textAlign: "right",
    color: "white",
    fontSize: moderateScale(12)
  },
  exampleCurrentText: {
    // paddingLeft: "100",
    width: scale(330),
    color: "white",
    fontSize: moderateScale(16)
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  nextButton: {
    width: scale(350 / 2),
    height: scale(80),
    backgroundColor: "#785aa0"
  },
  currentDeleteButton: {
    width: scale(350 / 2),
    height: scale(80),
    backgroundColor: "#ee291a"
  }
});

export default styles;
