import React from 'react'
import * as firebase from 'firebase';
import { LinearGradient } from 'expo-linear-gradient'
import { View, StyleSheet, Image,Alert, Text, TouchableOpacity, TouchableNativeFeedbackBase, ActivityIndicator } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Fire from '../Components/Fire'
import Search from '../Components/recherche';
import {connect} from 'react-redux'

const styles = StyleSheet.create({
    textinput1: {
        fontSize: 30, marginLeft: 20,
        marginTop: 60, fontStyle: 'italic', borderBottomWidth: 1,
        borderBottomColor: 'black', marginRight: 20

    },
    titletext: {
        fontSize: 50, color: 'white', fontWeight: 'bold',
        marginTop: 15, marginLeft: 85, fontStyle: 'italic'
    },
});

export default class Login extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            email : " ", 
            password : " "
        };
    }
   submit=(email, password)=>{
       console.log(this.state);
       
       firebase.auth()
           .signInWithEmailAndPassword(email, password)
    
       .then(this.props.navigation.navigate("Search"))
       .catch(error=>Alert.alert(error.message));
       
   }
   getDate(){
       firebase.database().ref("login/").on("value",snapshot=>{
                const email1 = snapshot.val().email;
                const pwd = snapshot.val().password;
                const a = this.state.email;
                const b = this.state.password;
                 if (email1 == a && pwd == b) {
                    this.props.navigation.navigate("Search")
                }
                else {
                    alert("Désolé, Login ou mot de passe est invalide")
                }
               
                }) 
                
    }       
    setData(){
       firebase.database()
       .ref("Login/")
       .set({item3:"haitam"})
   }     
            
   
    render() {
      
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient
                    colors={['#D1F2EB', '#1ABC9C', '#0E6251']}
                    style={{ paddingBottom: 20 }}

                    Vlnbl5GjM2Zhk5xM7X4oUAsn6jV2
                >
                    <Image
                        source={require('../assets/Film-icon.png')}
                        style={{ height: 150, width: 150, marginLeft: 140, marginTop: 150 }}
                    />


                    <Text style={styles.titletext}>Movies App</Text>
                    <TextInput placeholder='Login' style={styles.textinput1}
                        onChangeText={
                            email=>this.setState({ email })
                        }
                        
                    />
                    <TextInput placeholder='Mot de passe' secureTextEntry={true} style={styles.textinput1} 
                        onChangeText={
                            password => this.setState({ password })
                        }
                    />
                   
                    <TouchableOpacity onPress={() => this.getDate()}>
                    <Text style={{ color: 'white', fontSize: 25, marginLeft: 180, marginTop: 100 }}>Valider</Text>
                    </TouchableOpacity>

                </LinearGradient>
            </View>
        );

    }
}         