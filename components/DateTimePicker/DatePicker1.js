import React from 'react';
import {Calendar} from 'react-native-calendars';
import { View,  ScrollView, StyleSheet, Image, Text  } from 'react-native';



export default class DatePicker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            markedDates: this.props.markedDates,
            selectedDate: [],
            orders: this.props.orders,
            orderMarked: {},
            userMarked: {},
            barberId: this.props.barberId
        }
    }

    updateParentState(data){
        this.props.func(data);
        console.log(data)
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.markedDates !== this.state.markedDates || nextProps !== this.props){
            return true
        }
        if(Object.keys(nextState.markedDates).length !== Object.keys(this.state.markedDates).length){
            return true
        }
        if(nextState !== this.state){
            return true
        }
        return false
    }
 

    addToMarkedDates(day){
        let { selectedDate } = this.state;
        let { markedDates } = this.props;
        if(markedDates[day.dateString]){
            return
        }else{
            this.updateParentState(day);
            console.log(markedDates) 
        }
    }

    renderHandler(){
        let {markedDates} = this.props;
            return(
                <Calendar
                markingType={'multi-dot'}
                markedDates = {markedDates}
                onDayPress={(day)=>{
                    this.addToMarkedDates(day)
                }}
                minDate={new Date().toISOString().split('T')[0]}
                >
                </Calendar>
            )
    }

    render(){
        console.log(this.props)
        return(
            <View>
                {
                    this.renderHandler()
                }
            </View>
        )
    }
 




}