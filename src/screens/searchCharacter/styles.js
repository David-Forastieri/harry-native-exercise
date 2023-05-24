import { StyleSheet } from "react-native";
import colors from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center'
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderColor: colors.actionColor,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    margin: 10
  },
  inputText: {
    fontSize: 20,
    marginLeft: 10,
    color: colors.textColor
  }
});

export default styles