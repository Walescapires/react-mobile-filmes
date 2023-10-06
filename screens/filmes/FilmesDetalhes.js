import React, { useEffect, useState } from 'react'
import { Card, IconButton, Text } from 'react-native-paper'
import { Image, ScrollView, View } from 'react-native'
import apiFilmes from '../../service/apiFilmes'

const FilmesDetalhes = ({ navigation, route }) => {

    const [filme, setFilme] = useState({})
    const [atores, setAtores] = useState([])

    useEffect(() => {
        const id = route.params.id
        apiFilmes.get(`/movie/${id}`).then(resultado => {
            setFilme(resultado.data)
        })
        apiFilmes.get(`/person/${id}/movie_credits`).then(resultado => {
            setAtores(resultado.data.cast)
          })
       
    }, [])

    return (
        <>
            <ScrollView style={{ padding: 15 }}>
                <Card style={{ marginBottom: 15 }}>
                    <Card.Cover
                        source={{ uri: 'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path }} />
                    <Card.Content>
                        <Text variant="titleLarge"><center>{filme.title}</center></Text>
                        <Text variant="bodyMedium">{filme.overview}</Text>
                    </Card.Content>
                </Card>

                <Card style={{ marginBottom: 15 }} mode='outlined'>
                    <Card.Content style={{ marginBottom: 15 }} mode='outlined'>
                        <Text variant="bodyMedium">Orçamento: {filme.budget}</Text>
                        <Text variant="bodyMedium">Voto: {filme.vote_average}</Text>
                        <Text variant="bodyMedium">Duração: {filme.runtime} min.</Text>
                        <Text variant="bodyMedium">Lançamento: {filme.release_date}</Text>
                    </Card.Content>
                </Card>



                {atores.map(item => (
                    <Card
                        key={item.id} mode='outlined'
                        onPress={() => navigation.push('filmes-atores', { id: item.id })}
                        style={{ marginBottom: 15 }}>
                        <Card.Title
                            title={item.character}
                            subtitle={item.name}
                            left={(props) =>
                                <Image
                                    source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.profile_path }}
                                    style={{ width: 40, height: 40, borderRadius: 20 }} />}
                            right={(props) => <IconButton {...props} icon="chevron-right" />}
                        />
                    </Card>

                ))}

            </ScrollView>
        </>
    )
}

export default FilmesDetalhes