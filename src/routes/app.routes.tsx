import React from 'react';
import { Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register'; 
import { Resume } from '../screens/Resume'; 

export function AppRoutes() {
    const theme = useTheme();

    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 80,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                }
            }}    
        >
            <Screen  
                name='Listagem'
                component={Dashboard}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <Feather 
                            name='list'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Screen  
                name='Cadastrar'
                component={Register}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <Feather 
                            name='dollar-sign'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Screen  
                name='Resumo'
                component={Resume}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <Feather 
                            name='pie-chart'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Navigator>
    );
}