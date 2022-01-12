import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../config/config';
import axios from 'axios';

export const login = async (data) => {
    try{
        let token = await getToken(data)
        token = JSON.stringify(token);
        await AsyncStorage.setItem('token', token);
        return true;
    }catch(err){
        console.log(err);
        return false;
    }
}

export const getBarbers = async () => {
    try{
        let url = BASE_URL+'/barbers/getBarbers';
        let token = await AsyncStorage.getItem('token');
        token = JSON.parse(token);
        if(token !== null){
            let barbers = await axios.get(url,{params: token});
            console.log(barbers.data);
            return barbers.data
        }
        
    }catch(err){
        console.log(err)
    }
}

export const getBarberServicesByBarberId = async (barberId) => {
    try{
        let url = BASE_URL+'/service/getServicesByBarberId';
        let token = await AsyncStorage.getItem('token');
        
        if(token !== null){
            token = JSON.parse(token);
            let barbers = await axios.get(url,{params: {token, barberId}});
            console.log(barbers.data);
            return barbers.data
        }
        
    }catch(err){
        console.log(err)
    }
}

export const getToken = async (data) => {
    try{
        let url = BASE_URL+"/auth/login"
        let token = await axios.get(url, data);
        return token.data;
    }catch(err){
        console.log(err)
    }
}

export const getOrdersByBarberId = async (barberId) => {
    try{
        let token = await AsyncStorage.getItem('token');
        if(token !== null){
            token = JSON.parse(token);
            let orders = await axios.get(BASE_URL+"/order/getOrdersByBarberId", {params:{token, barberId}});
            return orders.data;
        }
    }catch(err){
        console.log(err)
    }
}

export const getUserOrdersData = async () => {
    try{
        let url = BASE_URL+'/order/getOrdersByUserId';
        let token = await AsyncStorage.getItem('token');
        token = JSON.parse(token);
        if(token !== null){
            let orders = await axios.get(url,{params: token});
            return orders.data
        }
    }catch(err){
        console.log(err);
    }
}

export default {
    login,
    getBarbers,
    getOrdersByBarberId,
    getBarberServicesByBarberId,
    getUserOrdersData
}
