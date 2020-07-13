import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import FilmItem from './FilmItem'
import { createAppContainer } from 'react-navigation';
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'
import { LinearGradient } from 'expo-linear-gradient'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FilmList from './FilmList'
import Favorites from './Favorites';
const styles = StyleSheet.create({
    textinput: {
        paddingLeft: 5, height: 40, borderColor: 'black', borderWidth: 1, backgroundColor: "white",
        marginRight: 30, marginLeft: 30,
    },
    button: {

        alignItems: "center", justifyContent: "center", marginTop: 10
    },

    back1: {
        backgroundColor: '#088A85', flex: 0, paddingTop: 10,
        borderColor: 'black', borderWidth: 1, borderWidth: 2,
        borderBottomStartRadius: 80,
    },
    back2: {
        flex: 1, backgroundColor: 'white', marginTop: 10

    },
});
class Search extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = ""
        this.page = 0
        this.totalPages = 0
        this.state = {
            films: [],
            isLoading: false
        }
        this._loadFilms= this._loadFilms.bind(this)
    }

    _loadFilms() {
        console.log("Contenu de test : " + this.test)

        if (this.searchedText.length > 0) {
            this.setState({ isLoading: true })
            getFilmsFromApiWithSearchedText(this.searchedText, this.page + 1).then(data => {
                this.page = data.page
                this.totalPages = data.total_pages
                this.setState({
                    films: [...this.state.films, ...data.results],
                    isLoading: false
                })
            })
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }

    _searchFilms() {
        this.page = 0
        this.totalPages = 0
        this.setState({
            films: [],
        }, () => {
            this._loadFilms()
        })
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }
    _displayDetailForFilm = (idFilm) => {
        console.log("Display film with id " + idFilm)
        this.props.navigation.navigate("FilmDetail", { idFilm: idFilm })
    }
    render() {
       
        return (
            
            <View style={{ flex: 1, backgroundColor: '#D1F2EB' }}>
                <View style={styles.back1}>
                    <TextInput placeholder="titre de film" style={styles.textinput}
                        onChangeText={(text) => this._searchTextInputChanged(text)}
                        onSubmitEditing={() => this._searchFilms()} />

                    <TouchableOpacity style={styles.button} onPress={() => { this._searchFilms() }}>
                        <Text style={{ color: 'white', fontSize: 20, marginBottom: 8 }}>Recherche</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.back2}>
                    <LinearGradient
                        colors={['#D1F2EB', '#1ABC9C', '#0E6251']}
                        style={{ height: 630 }}


                    >
                        <FlatList
                            data={this.state.films}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm} />}
                            onEndReachedThreshold={0.5}
                            onEndReached={() => {
                                if (this.page < this.totalPages) {
                                    this._loadFilms()
                                }
                            }}
                        />
                      
                        {this._displayLoading()}

                    </LinearGradient>

                </View>
            </View >
        );
    }

}
const Tab = createBottomTabNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Liste',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../assets/Search.png')}
                    resizeMode='contain'
                />
            )
        },
    },


    

    Favoris: {
        screen: Favorites,
        navigationOptions: {
            title: 'Favoris',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../assets/Favouris.png')}
                    resizeMode='contain'
                />
            )
        }
     


    }
},{
    tabBarOptions: {
       
        activeBackgroundColor: '#088A85',
        inactiveBackgroundColor: '#D1F2EB',
        showIcon: true,
        showLabel: false
    },









});













export default createAppContainer(Tab);


