import { StyleSheet } from "react-native";
import colors from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center'
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
  },
  buttonBack: {
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    height: 40,
    width: 40,
    borderRadius: 20
  },
  backIcon: {
    fontSize: 25,
    color: '#fff'
  }
});

export default styles