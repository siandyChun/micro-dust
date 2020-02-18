import React from 'react';
import Loading from "./Loading";
import Dust from "./Dust"
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';

const API_KEY = "e996809a82c690f46c3be36b7dab8be2a21f7598";

export default class extends React.Component {

  state= {
    isLoding: true
  }

  getDust = async(latitude, longitude) => {
    const dust = await axios.get(`https://api.waqi.info/feed/beijing/?token=e996809a82c690f46c3be36b7dab8be2a21f7598`);
    
    //const dust = await axios.get(`https://api.waqi.info/feed/geo::37.477821;:&{}/?token=:e996809a82c690f46c3be36b7dab8be2a21f7598`);

    console.log(dust);
  }

  //시티정보
  getCity = async(latitude, longitude) => {    

    console.log(latitude, longitude,);
    const place = await Location.reverseGeocodeAsync({latitude, longitude});
    console.log(city);
    const city = place[0].city;
    console.log(city);

    this.setState({
      isLoding:false,
      city
    })

  }

  //비동기 처리방식
  getLocation = async() => {
    try {
      //Location permission
      await Location.requestPermissionsAsync();
      
      //위치정보
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getCity(latitude,longitude);
      //this.getDust(place[0].city)
      this.setState({isLoding: false});
     //console.log(latitude, longitude);

    } catch(error) {
      //에러 메세지
      Alert.alert("읍스~~ 에러났어요.");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {isLoding, city} = this.state;
    return isLoding ?<Loading /> : <Dust city={city} />;
  }

}