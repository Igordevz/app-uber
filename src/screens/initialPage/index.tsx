import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { ButtonNext, Container, ScreenOne } from './style'
import { AuthContext } from '../../context/ContextApi'

export default function InitialPage({navigation}:any) {
 
  const { user }:any = useContext(AuthContext)
  
  if(user?.Token){
    navigation.navigate("home");
  }
  
  return (
    <>
      <ScreenOne>
        <Container>
          <Image source={require("../../assets/Logoinitial.png")}/>
          <Image source={require("../../assets/initial.png")} 
          style={{width: 150, height: 150}}/>
          <Text style={{fontSize: 30, color: "white"}}>Move with safety</Text>
        </Container>
        <ButtonNext onPress={() => navigation.navigate("login")}>
          <Text style={{fontSize: 18, color: "white", fontWeight: "500", letterSpacing: 2}}>Get Started</Text>
          <Image source={require("../../assets/seta-lado.png")} style={{position: "absolute", right: 20}}/>
        </ButtonNext>
      </ScreenOne>
    </>
  )
}