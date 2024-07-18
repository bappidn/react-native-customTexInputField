cat <<EOF > README.md
# react-native-customTexInputField

A customizable and reusable text input field component for React Native.

## Installation

You can install \`react-native-customTexInputField\` via npm or yarn:

\`\`\`bash
npm install react-native-customTexInputField
\`
or
\`\`\`bash
yarn add react-native-customTexInputField
\`

## Usage

Import the \`CustomTextInputField\` component in your React Native project and use it as follows:

\`\`\`javascript
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomTextInputField from 'react-native-customTexInputField';

const App = () => {
  const [username, setUsername] = useState('');

  const handleTextChange = (key, text) => {
    // Handle text change logic here
    setUsername(text);
  };

  return (
    <View style={styles.container}>
      <CustomTextInputField
        title="Username"
        placeholder="Enter your username"
        value={username}
        onChangeText={(key, text) => handleTextChange('username', text)}
        isMandatory={true}
        maxLength={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
\`\`\`

## Props

- **\`title\`** _(string, required)_: Title of the input field.
- **\`placeholder\`** _(string)_: Placeholder text when input is empty.
- **\`value\`** _(string)_: Current value of the input field.
- **\`isMandatory\`** _(boolean)_: Flag indicating if the field is mandatory.
- **\`onChangeText\`** _(function, required)_: Callback function called when the text input changes.
- **\`maxLength\`** _(number)_: Maximum length of the input value.
- **\`...\`** _(other props)_: Refer to \`CustomTextInputField.js\` for a complete list of props.

## Contributing

Contributions are welcome! If you have suggestions, enhancements, or bug fixes, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
EOF
