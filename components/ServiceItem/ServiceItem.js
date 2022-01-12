import React from 'react';
import { View,  ScrollView, StyleSheet, Image  } from 'react-native';
import { Card } from 'react-native-elements';


export default class ServiceItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            serviceName: this.props.service.serviceName,
            barberId: this.props.service.barberId,
            serviceId: this.props.service._id
        }
    }

    render(){
        let service = this.state
        return(
            <Card>
                <Card.Title>{service.serviceName}</Card.Title>
                
            </Card>
        )
    }
}