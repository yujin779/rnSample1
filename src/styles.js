import { StyleSheet } from "react-native";
// 画面サイズにスケールを合わせてくれるらしいライブラリ
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green"
  },
  exampleCurrentTitle: {
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
    color: "white",
    fontSize: moderateScale(12)
  },
  exampleCurrentText: {
    // paddingLeft: "100",
    width: scale(330),
    color: "white",
    fontSize: moderateScale(16)
  },
  currentDeleteButton: {}
});

export default styles;
