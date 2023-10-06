import React from 'react'
import apiFilmes from '../../service/apiFilmes'
import { Card, Text } from 'react-native-paper'
import { ScrollView } from 'react-native'
import { useState } from 'react'
import { useEffect } from 'react'

const AtoresPopulares = ({ navigation }) => {
    const [atores, setAtores] = useState([])

  useEffect(() => {
    apiFilmes.get('/person/popular').then(resultado => {
      setAtores(resultado.data.results)
    })
  }, [])

  return (
    <>

    <ScrollView>
      {atores.map(item => (
        <Card
          key={item.id}
          onPress={() => navigation.push('filmes-atores', { id: item.id })}>
          <Card.Cover
            source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.profile_path }} style={{ width: 400, height: 600 }} />
          <Card.Content>
            <Text variant="titleLarge"><center>{item.name}</center></Text>
            
          </Card.Content>
        </Card>
      ))}
      </ScrollView>

    </>
  )
}

export default AtoresPopulares