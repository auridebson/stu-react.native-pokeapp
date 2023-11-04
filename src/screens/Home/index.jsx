import { useEffect, useState } from "react"
import { FlatList, View, Text, TextInput } from "react-native"
import { Container, Header, HeaderTitle, HeaderSubTitle, ListItem } from "./styles"

export function Home({ navigation }) {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(json => setData(json.results))
    }, [])

    const i = 0
        

    return (
    <Container>
        <Header>
            <HeaderTitle>Pokedex</HeaderTitle>
            <HeaderSubTitle>Busque seu pokemon</HeaderSubTitle>
        </Header>

        <FlatList
            data={data}
            renderItem={({ item: {name}}) =>  (
                <ListItem onPress={() => navigation.navigate('Details')}>
                    <Text>{name}</Text>
                </ListItem>

                
            )}
        />

    </Container>

    )
}