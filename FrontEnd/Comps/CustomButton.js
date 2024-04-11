import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const CustomButton = ({ title, onPress, backgroundColor, textColor, fontSize, fontFamily }) =>{
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            onPress={onPress}
        >
            <Text style={[styles.text, { color: textColor, fontSize }]}>{title}</Text>
        </TouchableOpacity>
    );
    };
    
    const styles = StyleSheet.create({
        button: {
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            fontSize: 16,
            fontWeight: 'bold',
        },
    });
    
    export { CustomButton };