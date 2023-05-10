import { StyleSheet } from "react-native";
import colors from "../../constants/theme";

const styles = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 10,
    /* shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    elevation: 5, */
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.actionColor
  }
});

export default styles