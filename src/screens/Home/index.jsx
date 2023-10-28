import { useEffect } from "react"
import { View, Text } from "react-native"

export function Home() {

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then.(json => setData(json.results))
    }, [])
        

    return (
    <View>
        {DataTransfer.map(({name}) => <Text>{name}</Text>)}
    </View>
    )
}