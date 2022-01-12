import React from 'react';
import {Calendar} from 'react-native-calendars';
import { View,  ScrollView, StyleSheet, Image, Text  } from 'react-native';
import { getOrdersByBarberId } from '../../Api/api';

import DatePicker from './DatePicker1';



import Modal from '../Modal/Modal';


export default class DateTimePicker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            barberId: this.props.barber.barberId,
            orders: [],
            selectedDate: [],
            selectedHour: [],
            markedDates: {},
            isModalVisible: false
        }
    }


    shouldComponentUpdate(nextProps, nextState){
        if(nextState !== this.state || nextProps !== this.props){
            return true
        }
        if(nextState.orders !== this.state.orders || nextState.markedDates !== this.state.markedDates){
            return true
        }
        if( nextState.selectedDate !== this.state.selectedDate ){
            return true;
        }
        return false
    }

    

    toggleModal(isModalVisible){
        this.setState({isModalVisible})
    }
   
    getDateFromUser(data){
        let isModalVisible = this.state.isModalVisible;
        isModalVisible = !isModalVisible;
        this.setState({isModalVisible});
        let selectedDate = data.dateString
        this.setState({selectedDate});
        console.log(this.state);
        console.log(data)
        // send order to server wait response and 
    }
    
    

    render(){
        let { barberId, orders, markedDates } = this.state;
        let { isModalVisible, selectedDate } = this.state;
        return(
            <View>
                <Modal 
                    isModalVisible={isModalVisible}
                    toggleModal={this.toggleModal.bind(this)}
                    selectedDate={selectedDate}
                    />
        
                <DatePicker 
                    barberId={barberId}
                    func={this.getDateFromUser.bind(this)}
                    orders={orders}
                    markedDates={markedDates}
                />
            </View>
        )
    }


    async getOrderData(){
        try{
            let { barberId } = this.state;
            let orders = await getOrdersByBarberId(barberId);
            orders.map((item)=>{
                return{
                    barberId: item.barberId,
                    date: item.date.split('T')[0],
                    hours: item.hours,
                    userId: item.userId,
                }
            })
            this.setState({orders});

        }catch(err){
            console.log(err);
        }
    }

    async setOrderedDays(){
        try{

            let { orders } = this.state;
            let dateArr = orders.map((item)=>{
                
                return item.date.split('T')[0]
            });
            let markedDay = {};
            dateArr.map((item) => {
                markedDay[item] = {
                    selected: true,
                    marked: true,
                    selectedColor: "orange",
                };
            });
            console.log(markedDay)
            await this.setState({markedDates: markedDay})
        }catch(err){
            console.log(err);
        }

    }

    async componentDidMount(){
        try{
            await this.getOrderData();
            await this.setOrderedDays()

        }catch(err){
            console.log(err)
        }
    }
}