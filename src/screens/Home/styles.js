import  styled  from "styled-components/native";
import { SafeAreaView, TouchableOpacity } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    background-color: #fff;
    padding: 5px;
    margin-top: 5px;
`

export const Header = styled.View`
    padding: 18px;
`

export const HeaderTitle = styled.Text`
    font-size: 32px;
`

export const HeaderSubTitle = styled.Text`
    font-size: 18px;
`

export const ListItem = styled.TouchableOpacity`
    background-color: #f4F;
    padding: 12px;
    margin: 6px 8px;
    border-radius: 18px;
    flex-direcion: row;
    justify-content: space-between;
    align-items: center;
`

export const ListItemText = styled.Text`


`

export const PokemonImagem = styled.Image`
    width: 70px;
    height: 70px;

`