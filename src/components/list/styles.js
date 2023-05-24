import { StyleSheet } from "react-native";
import colors from "../../constants/theme";

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center"
  },
  image: {
    height: 200,
    width: 150,
    borderColor: '#000',
    borderWidth: 3
  },
  textList: {
    color: colors.white,
    fontSize: 20
  }
});

export default styles