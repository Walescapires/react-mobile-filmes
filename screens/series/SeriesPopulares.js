import React, { useEffect, useState } from 'react'
import apiFilmes from '../../service/apiFilmes'
import { ScrollView } from 'react-native'
import { Card, IconButton, Text } from 'react-native-paper'
import { Image } from 'react-native'



export const SeriesPopulares = ({ navigation, route }) => {
    
  const [series, setSeries] = useState({})
  const [atores, setAtores] = useState([])

  useEffect(() => {
    const id = route.params.id
    apiFilmes.get(`/tv/${id}`).then(resultado => {
      setSeries(resultado.data)
    })
    apiFilmes.get(`/person/${id}/tv_credits`).then(resultado => {
        setAtores(resultado.data.cast)
      })

  }, [])
  return (
    <>

      <ScrollView>
      <Card style={{ marginBottom: 15 }}>
                    <Card.Cover
                        source={{ uri: 'https://image.tmdb.org/t/p/w500/' + series.backdrop_path }} />
                    <Card.Content>
                        <Text variant="titleLarge"><center>{series.name}</center></Text>
                        <Text variant="bodyMedium">{series.overview}</Text>
                    </Card.Content>
                </Card>

                <Card style={{ marginBottom: 15 }} mode='outlined'>
                    <Card.Content style={{ marginBottom: 15 }} mode='outlined'>
                        <Text variant="bodyMedium">Duração: {series.runtime} min.</Text>
                        <Text variant="bodyMedium">Lançamento: {series.last_air_date}</Text>
                        <Text variant="bodyMedium">Popularidade: {series.popularity}</Text>
                    </Card.Content>
                </Card>




        <Text variant="titleLarge">Atores</Text>

        {atores.map(item => (
                    <Card
                        key={item.id} mode='outlined'
                        onPress={() => navigation.push('series-populares', { id: item.id })}
                        style={{ marginBottom: 15 }}>
                        <Card.Title
                            title={item.character}
                            subtitle={item.name}
                            left={(props) =>
                                <Image
                                    source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path }}
                                    style={{ width: 40, height: 40, borderRadius: 20 }} />}
                            right={(props) => <IconButton {...props} icon="chevron-right" />}
                        />
                    </Card>

                ))}


      </ScrollView>

    </>
  )
}
