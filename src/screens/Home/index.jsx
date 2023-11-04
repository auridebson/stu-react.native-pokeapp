import { useEffect, useState } from "react"
import { FlatList, View, Text, TextInput, Image } from "react-native"
import { Container, Header, HeaderTitle, HeaderSubTitle, ListItem, ListItemText, PokemonImagem } from "./styles"

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
            style={{
                marginBottom: 120
            }}
            data={data}
            renderItem={({ item: {name, url}, index}) =>  (
                <ListItem onPress={() => navigation.navigate('Details')}>
                    <ListItemText>{name}</ListItemText>
                    <PokemonImagem
                        source={{
                            uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
                        }} />
                </ListItem>
                
            )}
        />

    </Container>

    )
}