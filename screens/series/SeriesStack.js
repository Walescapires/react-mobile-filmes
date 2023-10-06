import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Series from './Series';
import { SeriesPopulares } from './SeriesPopulares';

const Stack = createNativeStackNavigator();

const SeriesStack = () => {
  return (
    <>
            <Stack.Navigator>
                <Stack.Screen name="series" component={Series} options={{ title: 'Séries' }} />
                <Stack.Screen name="series-populares" component={SeriesPopulares} options={{ title: 'Séries Populares' }} />
                
                
            </Stack.Navigator>
        </>
  )
}

export default SeriesStack