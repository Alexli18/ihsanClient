import React from 'react';
import { View, Text, AppRegistry, Button, StyleSheet } from 'react-native';
import Input from '../../shared/Input/Input';
import { login, getBarbers } from '../../Api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';









const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dce8e1",
        flex: 3,
        justifyContent: "center",
        alignItems: "center"
    },
})


export default class LoginComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            phoneNum: ""
        }
    }   

    async componentDidMount(){
        let token = await AsyncStorage.getItem('token');
        if(token !== null){
            this.props.navigation.navigate('Home');
        }
    }

    getName = (data) => {
        this.setState({
            name: data
        });
    }
    
    getPhone = (data) => {
        this.setState({
            phoneNum: data
        })
    }

    sendUserData = async () => {
        try{
            await login(this.state);
            this.props.navigation.navigate('Home') 
        }catch(err){
            console.log(err)
        }
    }


    render(){
        return(
            <View style={styles.container}>
                <Input
                    text = {"Please enter name"}
                    func = {this.getName.bind(this)}
                ></Input>
                <Input
                    text = {"Please enter phone num"}
                    func = {this.getPhone.bind(this)}
                ></Input>
                <Button
                    style={styles.button}
                    color="#268596"
                    title = {"Submit"}
                    onPress = {()=>{
                        this.sendUserData()
                    }}
                >
                </Button>
            </View>
        )
    }
}

AppRegistry.registerComponent('LoginComponent', () => LoginComponent)