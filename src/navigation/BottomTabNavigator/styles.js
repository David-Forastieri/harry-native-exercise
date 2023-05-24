import { StyleSheet } from "react-native";
import colors from "../../constants/theme";

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: colors.black,
    position: "absolute",
    shadowColor: colors.white,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  }
});

export default styles