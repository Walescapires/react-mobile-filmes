import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Atores from './Atores';
import AtoresPopulares from './AtoresPopulares';
import FilmesDetalhes from '../filmes/FilmesDetalhes';

const Stack = createNativeStackNavigator();

const AtoresStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="atores-populares" component={AtoresPopulares} options={{ title: 'Atores Popular' }} />
                <Stack.Screen name="filmes-atores" component={Atores} options={{ title: 'Atores' }} />
                <Stack.Screen name="filmes-detalhes" component={FilmesDetalhes} options={{ title: 'Detalhes' }} />
            </Stack.Navigator>
        </>
    )
}

export default AtoresStack