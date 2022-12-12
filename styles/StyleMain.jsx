import {StyleSheet, Dimensions} from 'react-native';

export const primaryColor = '#c48d2c';
export const backgroundColor_1 = '#333';
export const backgroundColor_2 = '#3A3A3A';
export const textColor = '#EEE';

export const styleDashboard = StyleSheet.create({
  body: {
    backgroundColor: backgroundColor_1,
    flex: 1,
  },
  text: {
    color: textColor
  }
});

export default style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: backgroundColor_1,
    alignItems: 'center',
    paddingVertical: 50,
  },
  text: {
    color: textColor,
  },
  img: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
  form: {
    flex: 1,
    alignItems: 'center',
    width: Dimensions.get('window').width - 100,
    backgroundColor: backgroundColor_2,
    paddingVertical: 20,
  },
  formHeader: {
    fontSize: 24,
    color: textColor,
  },
  input: {
    fontSize: 18,
    borderWidth: 2,
    borderColor: backgroundColor_2,
    borderBottomColor: primaryColor,
    marginVertical: 20,
    width: 250,
    color: textColor,
  },
  inputSignUp: {
    fontSize: 18,
    borderWidth: 2,
    borderColor: backgroundColor_2,
    borderBottomColor: primaryColor,
    marginVertical: 10,
    width: 250,
    color: textColor,
  },
  button: {
    borderRadius: 10,
    borderWidth: 5,
    borderColor: primaryColor,
    backgroundColor: primaryColor,
  },
  buttonText: {
    color: textColor,
    fontSize: 18,
    padding: 2,
    letterSpacing: 10,
  },
  navigate: {
    marginTop: 10,
  },
  navigateText: {
    color: textColor,
    fontSize: 18,
  },
});
