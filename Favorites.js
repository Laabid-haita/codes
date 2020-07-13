// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text } from 'react-native'
import FilmList from './FilmList'
import { connect } from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient'


class Favorites extends React.Component {

    render() {
        return (
            <LinearGradient
                colors={['#D1F2EB', '#1ABC9C', '#0E6251']}
                style={{ height: 750, paddingBottom: 30 }}


            >
                <FilmList
                    films={this.props.favoritesFilm}
                    navigation={this.props.navigation}
                    favoriteList={true} // Ici on est bien dans le cas de la liste des films favoris. Ce booléen à true permettra d'empêcher de lancer la recherche de plus de films après un scroll lorsqu'on est sur la vue Favoris.
                />

            </LinearGradient>
       
        )
    }
}

const styles = StyleSheet.create({})

const mapStateToProps = state => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}

export default connect(mapStateToProps)(Favorites)