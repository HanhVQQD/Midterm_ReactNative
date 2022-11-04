import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../../consts/colors";

const PrimaryButton = ({title, onPress = () => {}}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} >
            <View style={styles.btnContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create ({
    title: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 18,
    },

    btnContainer: {
        backgroundColor: COLORS.primary,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
 
export {PrimaryButton};