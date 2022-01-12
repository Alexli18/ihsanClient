import React from 'react';
import { Card } from 'react-native-elements';



export default class Barber extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.barber.name,
            avatar: props.barber.avatar,
            id: props.barber._id
        }
    }


    


    render(){
        let barber = this.state;
        
        return(
            <Card>
                 <Card.Title>{barber.name}</Card.Title>
                 <Card.Image
                    style={{ padding: 0 }}
                    source={{
                    uri: barber.avatar,
                    }}
            />
            </Card>
        )
    }
}
