import React from "react";
import { Text , View ,TouchableOpacity} from "react-native";
import styles from "./Button.styles";

function Button({title}){
    return(
        <View>
            <TouchableOpacity style={styles.container}>
                <Text 
                testID="button-title" 
                style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;