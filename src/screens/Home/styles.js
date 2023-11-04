import  styled  from "styled-components/native";
import { SafeAreaView, TouchableOpacity } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    background-color: #ccd;
    padding: 5px;
    margin-top: 5px;
`

export const Header = styled.View`
    padding: 18px;
`

export const HeaderTitle = styled.Text`
    font-size: 28px;
`
export const HeaderSubTitle = styled.Text`
    font-size: 18px;
`

export const ListItem = styled.TouchableOpacity`

`