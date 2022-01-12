import React from 'react';
import { View,  ScrollView, StyleSheet, Image  } from 'react-native';

import { getBarbers } from '../../Api/api';

import Barber from '../../components/Barber/Barber';

import CarouselComponent from '../../shared/Carousel/Carousel';


import { Text, Card, Button, Icon } from 'react-native-elements';

export default class HomeComponent extends React.Component{
    constructor(props, {navigation}){
        super(props);
        this.state = {
            barbers: []
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState !== this.state){
            return true
        }
        return false
    }

    async componentDidMount(){
        let barbers = await getBarbers();
        this.setState({
            barbers: barbers.barbers
        })
        console.log(this.state.barbers);
        console.log("BARBERS");

    }

    navigateToBarberService(barber){
        const { navigate } = this.props.navigation;
        navigate('BarberService', {barber});
    }

    renderBarbers(barbers){
        return barbers.map((barber, idx)=>{
            return(
                    <View 
                        key={idx} 
                        style={{margin: 10}}
                        onClick={()=>{
                            this.navigateToBarberService(barber)
                        }}
                        >
                        <Barber barber={barber}/>
                    </View>
                )
        })
    }

    render(){

        if(this.state.barbers && this.state.barbers.length>0){
            let barberArr = this.state.barbers;
            return(
                <ScrollView>
                    <CarouselComponent/>
                    {
                        this.renderBarbers(barberArr)
                    }
                </ScrollView>
            )
        }else{

            
            
            return(
                <Text>
                    HOME PAGE
                </Text>
            )
        }
    }
        
}