import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import Icon from 'react-native-vector-icons/Feather';
import Colors from './constants/Colors';

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}
                    options={{
                        headerShadowVisible: false,
                        title: "",
                        headerRight: () => (
                            <Icon name="search" size={20} color={Colors.black} style={{marginHorizontal:15}} />
                        )
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default AppNavigation;
