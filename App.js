import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';
import { Alert } from 'react-native';


export default class extends React.Component {

  state= {
    isLoding: true
  }

  //비동기 처리방식
  getLocation = async() => {
    try {
      //Location permission
      await Location.requestPermissionsAsync();
      //위치정보
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.setState({isLoding: false});
      //위치정보 콘솔 확인
      //console.log("죽지않아");
    } catch(error) {
      //에러 메세지
      Alert.alert("읍스~~ 에러났어요.");
    }
  }

  componentDidMount() {
    this.getLocation();
  }


  render() {
    const {isLoding} = this.state;
    return isLoding ?<Loading /> : null;
  }

}