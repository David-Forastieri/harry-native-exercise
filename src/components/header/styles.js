import { StyleSheet } from "react-native";
import colors from "../../constants/theme";

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.secondary,
    marginTop: 50,
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  title: {
    fontSize: 30,
    color: colors.textColor,
    textAlign: "center"
  }
});

export default styles