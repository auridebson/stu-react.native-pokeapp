import { useEffect } from "react"
import { View, Text } from "react-native"
import { FlatList } from "react-native-gesture-handler"

export function Home() {

        const [data, setData] = useEffect

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
            resnderItem={({ item: {name} }) =>  (
                <Text>{name}</Text>
            )}
        />
    </View>
    )
}