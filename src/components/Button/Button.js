import React from "react";
import { Text , View ,TouchableOpacity} from "react-native";
import styles from "./Button.styles";

function Button({title , onClick , theme ="PRİMARY"}){
    return(
        <View>
            <TouchableOpacity testID="button-touchable" style={styles[theme].container}
            onPress={onClick}>
                <Text 
                testID="button-title" 
                style={styles[theme].title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;