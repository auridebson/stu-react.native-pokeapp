import { useEffect, useState } from "react"
import { FlatList, View, Text } from "react-native"
import { ListItem } from "./styles"

export function Home({ navigation }) {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(json => setData(json.results))
    }, [])
        

    return (
    <View>
        {data.map(({name}) => <Text>{name}</Text>)}
    
        <FlatList
            data={data.results}
            renderItem={({ item: {name} }) =>  (
                <ListItem onPress={() => navigation.navigate('Details')}>
                    <Text>{name}</Text>
                </ListItem>
                
            )}
        />
    </View>
    )
}