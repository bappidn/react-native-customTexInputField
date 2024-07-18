import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#1c1939',
    textAlign: 'left',
  },
  titleContainer: {height: 46, justifyContent: 'center'},
  mandatoryIconText: {
    position: 'absolute',
    right: -8,
    color: 'red',
  },
  showError: {borderColor: 'red'},
  inputContainer: {
    width: 500,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  multilineHeight: {
    height: 100,
  },
  normalHeight: {
    height: 70,
  },
  inputBoxContainer: {
    flexDirection: 'column',
  },
  textInput: {
    width: 282.7,
    height: 46,
    borderRadius: 6.7,
    borderWidth: 1.3,
    borderColor: '#caccd1',
    backgroundColor: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#1c1939',
    paddingHorizontal: 15,
    paddingTop: 0,
  },
  textArea: {
    width: 282.7,
    height: 70,
    borderRadius: 6.7,
    borderWidth: 1.3,
    borderColor: '#caccd1',
    backgroundColor: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#1c1939',
    paddingHorizontal: 15,
  },
  disabledInputBox: {
    backgroundColor: '#f2f2f2',
  },
  multilineBox: {
    flexDirection: 'row',
    borderColor: '#caccd1',
    width: 282.7,
    height: 70,
    borderRadius: 6.7,
    borderWidth: 1.3,
    backgroundColor: '#f2f2f2',
  },
  disabledMultilineText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#1c1939',
    paddingHorizontal: 15,
  },
  validationMessageContainer: {width: 282},
  validationMessage: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: 'red',
  },
  readOnlyBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#caccd1',
    alignItems: 'center',
    width: 282.7,
    height: 48,
    borderRadius: 6.7,
    borderWidth: 1.3,
    backgroundColor: '#f2f2f2',
  },
  placeholderText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#1c1939',
    paddingLeft: 18,
  },
});

export default styles;
