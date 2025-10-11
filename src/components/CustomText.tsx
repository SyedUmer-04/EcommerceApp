import { StyleSheet, Text, TextStyle } from "react-native";
import { colors } from "../utils/theme";
import { vh } from "../utils/measurements";
import { FC } from "react";

interface TexTI {
    textStyles?: TextStyle,
    children: React.ReactNode
}

const  CustomText: FC<TexTI> = ({ children, textStyles})=> {



    return (
        <Text style={[styles.text, textStyles]}>
            {children}
        </Text>

    )
}

const styles = StyleSheet.create({
    text: {
        color: colors.LoginText,
        fontSize: vh * 1.5,
        margin: 0,
        padding: 0,

    }
})

export default CustomText;