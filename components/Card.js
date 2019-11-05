import React from 'react';
import { StyleSheet, View } from 'react-native';

// props.style styling will be merge with styles.card styles
const Card = (props) => {
    return(
      <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    card: {  
        // works on IOS
        shadowColor: 'black',  
        shadowOffset: {width: 0, height: 2},  
        shadowRadius: 6,  
        shadowOpacity: 0.26,  
        // works on Android
        elevation: 5,  
        backgroundColor: 'white',  
        padding: 20,  
        borderRadius: 10,  
    },
});

export default Card;