import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Orcamento from './pages/Orcamento';

const Stack = createStackNavigator();

function routes() {

    const screenOptionStyle = {
        headerStyle: {
            backgroundColor: '#17a2b8',
        },
        headerTintColor: '#fff',
        headerBackTitle: 'Voltar',
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name="Orçamento" component={Orcamento} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default routes;