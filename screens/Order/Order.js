import React from 'react';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { View,  ScrollView, StyleSheet, Image  } from 'react-native';
import DateTimePicker from '../../components/DateTimePicker/DateTimePicker';


export default class Order extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            avatar: this.props.route.params.avatar,
            name: this.props.route.params.name,
            barberId: this.props.route.params.service.barberId,
            serviceName: this.props.route.params.service.serviceName,
            selectedDate: '',
            selectedHours: []
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextState !== this.state){
            return true
        }
        return false
    }

    render(){
        console.log(this.state)
        let barber = this.state;
        return(
            <ScrollView>
                <Card>
                {/* <Card.Title>{barber.name}</Card.Title> */}
                <Image
                    style={{ height: 200, padding: 0, margin:0 }}
                    source={{
                        uri: barber.avatar,
                    }}
                    />
                </Card>
                <DateTimePicker barber={barber}/>


            </ScrollView>
        )
    }
}