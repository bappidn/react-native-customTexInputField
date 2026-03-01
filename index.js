import React, { useState } from "react";
import { View, TextInput, Text, SafeAreaView, ScrollView } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const CustomTextInputField = ({
  title,
  placeholder,
  value,
  isMandatory = false,
  inputKey,
  validateExtraField = false,
  showError = false,
  customOnChangeText,
  onChangeText,
  editable = true,
  containerStyle,
  inputBoxStyle,
  maxLength,
  validationMessage,
  customStyle,
  showOnlyValue = false,
  numberOfLines = 3,
  keyboardType = "default",
  trimValidationFunc,
  multiline = false,
}) => {
  const [inputValue, setInputValue] = useState("");
  const mandatoryIcon = <Text style={styles.mandatoryIconText}> *</Text>;

  const handleTextInput = (text) => {
    let trimmedText = text?.trimStart();
    trimmedText = trimValidationFunc
      ? trimValidationFunc(trimmedText)
      : trimmedText;

    setInputValue(trimmedText);

    if (!onChangeText) return;

    if (inputKey !== undefined && inputKey !== null) {
      onChangeText(inputKey, trimmedText);
      return;
    }

    onChangeText(trimmedText);
  };

  const placeholderText = placeholder || (title ? `Enter ${title}` : "Enter value");

  return (
    <SafeAreaView>
      <View
        style={[
          styles.inputContainer,
          multiline ? styles.multilineHeight : styles.normalHeight,
          containerStyle,
        ]}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.inputTitle}>
            {title}
            {isMandatory && mandatoryIcon}
          </Text>
        </View>

        <View style={styles.inputBoxContainer}>
          {!showOnlyValue || multiline ? (
            <>
              {!editable && multiline ? (
                <View style={[styles.multilineBox, customStyle]}>
                  <ScrollView nestedScrollEnabled={true}>
                    <Text
                      testID={"info-text"}
                      style={styles.disabledMultilineText}
                    >
                      {value}
                    </Text>
                  </ScrollView>
                </View>
              ) : (
                <TextInput
                  testID={`CustomTextInputField-${inputKey || "value"}`}
                  value={value ?? inputValue}
                  placeholder={placeholderText}
                  style={[
                    multiline ? styles.textArea : styles.textInput,
                    inputBoxStyle,
                    showError && styles.showError,
                    !editable && styles.disabledInputBox,
                    customStyle,
                  ]}
                  keyboardType={keyboardType}
                  editable={editable}
                  onChangeText={
                    customOnChangeText
                      ? customOnChangeText
                      : (text) => handleTextInput(text)
                  }
                  maxLength={maxLength}
                  multiline={multiline}
                  numberOfLines={multiline ? numberOfLines : 1}
                />
              )}
              {validateExtraField && (
                <View style={styles.validationMessageContainer}>
                  <Text style={styles.validationMessage}>
                    {validationMessage}
                  </Text>
                </View>
              )}
            </>
          ) : (
            <View style={[styles.readOnlyBox, inputBoxStyle, customStyle]}>
              <Text style={styles.placeholderText}> {value}</Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

CustomTextInputField.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  isMandatory: PropTypes.bool,
  inputKey: PropTypes.string,
  validateExtraField: PropTypes.bool,
  showError: PropTypes.bool,
  customOnChangeText: PropTypes.func,
  onChangeText: PropTypes.func,
  editable: PropTypes.bool,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  inputBoxStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  maxLength: PropTypes.number,
  validationMessage: PropTypes.string,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  showOnlyValue: PropTypes.bool,
  numberOfLines: PropTypes.number,
  keyboardType: PropTypes.string,
  trimValidationFunc: PropTypes.func,
  multiline: PropTypes.bool,
};

export default CustomTextInputField;
