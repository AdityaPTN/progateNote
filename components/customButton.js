import React from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = ({
    backgroundColor,
    color,
    text,
    onPress,
    fontSize = 16,
    width = 120,
}) => {
    const styles = StyleSheet.create({
        button: {
            alignItems: 'center',
            backgroundColor,
            padding: 10,
            width,
        },
        buttonText: {
            fontSize,
            fontWeight: '700',
            color,
        },
    });

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;