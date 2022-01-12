import React from 'react';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { getBarberServicesByBarberId } from '../../Api/api';
import { View,  ScrollView, StyleSheet, Image  } from 'react-native';

import ServiceItem from '../ServiceItem/ServiceItem';




export default class BarberService extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.route.params.barber.name,
            avatar: this.props.route.params.barber.avatar,
            id: this.props.route.params.barber._id,
            services: []
        }
    }

    async componentDidMount(){
        let barberId = this.state.id;
        let services = await getBarberServicesByBarberId(barberId);
        this.setState({services});
    }

    navigateToOrder(service){
        const { navigate } = this.props.navigation;
        const { name, avatar, id } = this.state;
        navigate('Order', {service, name, avatar });
        //
    }
   
    renderServices(services){
        return services.map((service, idx)=>{
            return <View
                        key={idx}
                        onClick = {()=>this.navigateToOrder(service)}
                    >
                        <ServiceItem service={service}/>
                </View>
        })
    }

    render(){
        let services = this.state.services
        return(
            <Text>
                {
                    this.renderServices(services)
                }
            </Text>
        )
    }
} 