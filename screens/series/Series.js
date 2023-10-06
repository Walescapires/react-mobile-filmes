import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import apiFilmes from '../../service/apiFilmes'
import { ScrollView } from 'react-native'
import { Card, Text } from 'react-native-paper'


const Series = ({ navigation }) => {

  const [series, setSeries] = useState([])
  

  useEffect(() => {
    
    apiFilmes.get('/tv/popular').then(resultado => {
      setSeries(resultado.data.results)
    })

  }, [])


  return (
    <>

      <ScrollView>
        {series.map(item => (
          <Card
            key={item.id}
            onPress={() => navigation.push('series-populares', { id: item.id })}>
            <Card.Cover
              source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.backdrop_path }} />
            <Card.Content>
              <Text variant="titleLarge"><center>{item.original_name}</center></Text>
              <Text variant="bodyMedium">{item.overview}</Text>
            </Card.Content>
          </Card>
        ))}


      </ScrollView>

    </>
  )
}

export default Series