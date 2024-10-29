import React from "react";
import { Text , View ,TouchableOpacity} from "react-native";
import styles from "./Button.styles";

function Button({title , onClick}){
    return(
        <View>
            <TouchableOpacity testID="button-touchable" style={styles.container}
            onPress={onClick}>
                <Text 
                testID="button-title" 
                style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;