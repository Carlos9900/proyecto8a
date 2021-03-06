import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Account from '../screens/Account/Accounts'
import Login from '../screens/Account/Login'
import Register from '../screens/Account/Register'

const Stack = createStackNavigator()

export default function AccountStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Cuenta'
                component={Account}
                options={{tittle:'Mi Cuenta'}}
            />
            <Stack.Screen
                name='login'
                component={Login}
                options={{title:'Inicie Sesión'}}
            />
            <Stack.Screen
                name='register'
                component={Register}
                options={{title:'Registro'}}
            />
        </Stack.Navigator>
    )
}
