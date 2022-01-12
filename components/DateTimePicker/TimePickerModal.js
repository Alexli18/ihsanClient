import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import {  ScrollView,  Image, Text, Button  } from 'react-native';

// const style = new StyleSheet()

export default class TimePicker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            alredyOrdered: [],
            userOrder: {},
            date: this.props.date
        }
    }



    

    generateWorkHours(){
        let workHours = [];
        for(let i = 11; i<=20; i++){
            for(let j = 0; j<60; j = j+15){
                if(j==0){
                    let hourStr = i+":"+j+"0";
                    workHours.push(hourStr);
                }else{
                    let hourStr = i+":"+j;
                    workHours.push(hourStr);
                }
            }
        }
        return workHours
    }
    

    render(){
        let workHours = this.generateWorkHours()
        console.log(this.props)
        return(
            <View style={{flexDirection: "row",  flexWrap: "wrap", width: '100%', justifyContent: 'center'}}>
                {
                    workHours.map((item,idx)=>{
                    return <View 
                            key={idx}
                            title={item}
                            style={{ height:30, backgroundColor:'skyblue', fontSize:25, width: 60, padding: 5, margin:5, borderRadius: 5 }}
                            >
                                <Text key={idx} style={{color: 'white'}}>
                                    {item}
                                </Text>
                                    
                        </View>
                    })
                }
            </View>
        )
    }
}