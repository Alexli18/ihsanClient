import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";

import TimePicker from '../DateTimePicker/TimePickerModal';

export default class ModalTester extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      alredyOrderedHours: [],
      selectedDay: this.props.selectedDate
    }
  }

  
  render(){
    let { isModalVisible } = this.props;
    console.log(this.props)
    return(
      <View style={{ flex: 1 }}>
        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
            <TimePicker
              date = {''}
            />
            <Button title="Hide modal" onPress={()=>this.props.toggleModal(!isModalVisible)} />
          </View>
        </Modal>
      </View>
    )
  }     
      

}
