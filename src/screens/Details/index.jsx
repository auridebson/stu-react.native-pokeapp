import { useEffect, useState } from "react"
import { View, Text } from "react-native"

export function Details({route: {params}}) {
    const [dataDetails, setDataDetails] = useState([])

    useEffect(() => {
        fetch(params.url)
        .then(response => response.json())
        .then(json => setDataDetails(json))
    }, [])


    return (
    <View>
        <Text>{dataDetails.name}</Text>
    </View>
    )
}