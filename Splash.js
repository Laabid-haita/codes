import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, BackHandler, ScrollView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const styles = StyleSheet.create({
    text: {
        flex: 1, fontSize: 50, color: 'black', fontWeight: 'bold', alignItems: 'center', justifyContent: 'center',
        marginTop: 30, marginLeft: 90,
    },

    back1: {
        backgroundColor: '#088A85', flex: 1, paddingBottom: 50, paddingTop: 120, borderBottomStartRadius: 300 / 2,
        borderBottomEndRadius: 300 / 2, borderWidth: 2, borderColor: 'black'
    },
    view: {
        backgroundColor: '#088A85', flex: 0, marginRight: 5,
        marginBottom: 5, marginLeft: 200, borderWidth: 2, borderColor: 'black',
        borderRadius: 120


    },

    logo: {
        justifyContent: 'center', alignItems: 'center', width: 150, height: 150,
    },

    container: {
        flex: 1, backgroundColor: '#008577', alignItems: 'center', justifyContent: 'center',
    },

    titletext: {
        fontSize: 50, color: 'white', fontWeight: 'bold',
        marginTop: 15, marginLeft: 85, fontStyle: 'italic'
    },

    titletext2: {
        marginTop: 0, fontSize: 30, color: 'black', marginLeft: 124,
    }

});



class Splash extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>


                <LinearGradient
                    colors={['#D1F2EB', '#1ABC9C', '#0E6251']}
                    style={{ height: 740 }}


                >
                    <Image
                        source={require('../assets/Film-icon.png')}
                        style={{ height: 150, width: 150, marginLeft: 140, marginTop: 150 }}
                    />


                    <Text style={styles.titletext}>Movies App</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={{ color: 'white', fontSize: 25, marginLeft: 165, marginTop: 300 }}>Suivant</Text>
                    </TouchableOpacity>


                </LinearGradient>






            </View >
        );
    }

}
export default Splash;
