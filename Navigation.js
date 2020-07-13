import {Image} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator, createTabNavigator } from 'react-navigation-tabs'
import Search from '../Components/recherche'
import FilmDetail from '../Components/FilmDetail'
import Splash from '../Components/Splash'
import Login from '../Components/Login'
import Favorites from '../Components/Favorites'
import React from 'react'
const SearchStackNavigator = createStackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            title: 'Movies App'
        }

    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Authentification'
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Movies App'
        }
    },
    FilmDetail: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
        screen: FilmDetail,
        navigationOptions: {
            title: 'Movies App'
        }
    },


});




export default createAppContainer(SearchStackNavigator)
