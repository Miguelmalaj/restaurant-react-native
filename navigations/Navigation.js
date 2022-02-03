// import { View, Text } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements';

/* import Restaurants from '../screens/Restaurants';
import Favorites from '../screens/Favorites';
import TopRestaurants from '../screens/TopRestaurants';
import Account from '../screens/Account';
import Search from '../screens/Search'; */
import RestaurantsStack from './RestaurantsStack';
import FavoritesStack from './FavoritesStack';
import TopRestaurantsStack from './TopRestaurantsStack';
import SearchStack from './SearchStack';
import AccountStack from './AccountStack';
// import { TabBarIOSItem } from 'react-native';

const Tab = createBottomTabNavigator()

export default function Navigation() {

    const screenOptions = (route, color) => {
        let iconName
        switch (route.name) {
            case "restaurants":
                iconName = "compass-outline"                
                break;
            case "favorites":
                iconName = "heart-outline"                
                break;
            case "top-restaurants":
                iconName = "star-outline"                
                break;
            case "search":
                iconName = "magnify-plus-outline"                
                break;
            case "account":
                iconName = "home-outline"                
                break;

        }

        return (
            <Icon 
                type="material-community"
                name={iconName}
                size={22}
                color={color}
            />
        )
    }

  return (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName='restaurants'
            tabBarOptions={{
                inactiveTintColor: "#442484",
                activeTintColor: "#a17dc3"
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({color}) => screenOptions(route,color)
            })}
            
        >
            <Tab.Screen 
                name="restaurants"
                component={RestaurantsStack}
                options={{title: "Restaurantes", headerShown:false}}
            />
            <Tab.Screen 
                name="favorites"
                component={FavoritesStack}
                options={{title: "Favoritos", headerShown:false}}
            />
            <Tab.Screen 
                name="top-restaurants"
                component={TopRestaurantsStack}
                options={{title: "Top 5", headerShown:false}}
            />
            <Tab.Screen 
                name="search"
                component={SearchStack}
                options={{title: "Buscar", headerShown:false}}
            />
            <Tab.Screen 
                name="account"
                component={AccountStack}
                options={{title: "Cuenta", headerShown:false}}
            />
        </Tab.Navigator>

    </NavigationContainer>

  );
}
