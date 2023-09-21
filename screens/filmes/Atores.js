import React, { useEffect, useState } from 'react'
import apiFilmes from '../../service/apiFilmes'
import { Card, Text } from 'react-native-paper'
import { ScrollView } from 'react-native'

const Atores = ({ navigation, route }) => {

    const [ator, setAtor] = useState({})
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const id = route.params.id
        apiFilmes.get(`/person/${id}`).then(resultado => {
            setAtor(resultado.data)
        })
        apiFilmes.get(`/person/${id}/movie_credits`).then(resultado => {
            setFilmes(resultado.data.cast)
        })
    }, [])

    return (
        <>
            <ScrollView >
                <Card >
                    <Card.Cover
                        source={{ uri: 'https://image.tmdb.org/t/p/w500/' + ator.profile_path }} style={{ width: 400, height: 600 }} />
                    <Card.Content>
                        <Text variant="titleLarge">{ator.name}</Text>
                    </Card.Content>
                </Card>

                <Card mode='outlined'>
                    <Card.Content>
                        <Text variant="bodyMedium"><strong>Sexo:</strong> {ator.gender}</Text>
                        <Text variant="bodyMedium"><strong>Biografia:</strong>{ator.biography}</Text>
                        <Text variant="bodyMedium"><strong>Local de nascimento:</strong> {ator.place_of_birth}</Text>
                        <Text variant="bodyMedium"><strong>Data de nascimento:</strong> {ator.birthday}</Text>
                    </Card.Content>
                </Card>


                <Text variant="titleLarge">Filmes</Text>

                {filmes.map(item => (
                    <Card
                        key={item.id} mode='outlined'
                        style={{ marginBottom: 15 }}
                        onPress={() => navigation.push('filmes-detalhes', { id: item.id })}>
                        <Card.Cover
                            source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.backdrop_path }}/>
                        <Card.Title
                            title={item.title}
                            subtitle={item.overview}
                        />
                    </Card>

                ))}
            </ScrollView>

        </>
    )
}

export default Atores