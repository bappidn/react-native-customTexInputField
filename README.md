# react-native-customtextinputfield

A customizable and reusable text input field component for React Native.

## Installation

Install from npm:

```bash
npm install react-native-customtextinputfield
```

or

```bash
yarn add react-native-customtextinputfield
```

## Usage

```javascript
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomTextInputField from 'react-native-customtextinputfield';

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <CustomTextInputField
        title="Username"
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
        isMandatory
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
```

### Using `inputKey` callback style

If you prefer form-style handlers:

```javascript
<CustomTextInputField
  inputKey="username"
  value={username}
  onChangeText={(key, text) => {
    // key => "username"
    setUsername(text);
  }}
/>
```

## Props

- `title` *(string)*: Title of the input field.
- `placeholder` *(string)*: Placeholder text when input is empty.
- `value` *(string)*: Current value of the input field.
- `isMandatory` *(boolean)*: Flag indicating if the field is mandatory.
- `onChangeText` *(function)*: Callback called with `(text)` or `(inputKey, text)`.
- `inputKey` *(string)*: Optional field key for form-style callbacks.
- `maxLength` *(number)*: Maximum length of the input value.
- `editable` *(boolean)*: Whether the input is editable (default: `true`).
- `multiline` *(boolean)*: Whether the input is multiline.

## License

This project is licensed under the MIT License.
