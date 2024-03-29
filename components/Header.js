import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Colors from '../constants/colors';

const Header = (props) => {
    return(
    //  <TouchableOpacity activeOpacity={0.8} onPress={props.deleteItem.bind(this, props.id)}>
      <View style={styles.header}>
       <Text style={styles.headerTitle}>{props.title}</Text> 
      </View>
    //  </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    header: {     
      width: '100%',
      height: 90,
      paddingTop: 36,
      backgroundColor: Colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      color: 'black',  
    }
});

export default Header;