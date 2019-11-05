import React from 'react';
import { StyleSheet, TextInput, } from 'react-native';

const Input = (props) => {
    return(
      <TextInput
        // {...props} will add/forward all props to TextInput component
        {...props}
        // props.style styling will be merge with styles.input styles 
        style={{...styles.input, ...props.style}} 
      />
    )
}

const styles = StyleSheet.create({
    input: {     
      height: 30,
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
      marginVertical: 10,
    },
});

export default Input;