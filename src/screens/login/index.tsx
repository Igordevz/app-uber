import {  Text, TextInput, Image } from 'react-native'
import { Buttonlogin, Container, Contentbefore, Modalform } from './style'

export default function LoginScreen({ }) {
    return (
        <Container>
            <Modalform>
                <Text style={{ marginLeft: 20, fontWeight: "600" }}>Enter Your Cell Phone Email</Text>
                <TextInput placeholder='Digite Seu Email'
                    style={{
                        marginTop: 10,
                        marginLeft: 20,
                        width: "88%",
                        backgroundColor: "#EEEEEE",
                        height: 45,
                        paddingLeft: 20,
                    }}>
                </TextInput>
                 <Buttonlogin>
                    <Text style={{color: "white", fontSize: 15}}>Next</Text>
                    <Image source={require("../../assets/seta-lado.png")}  style={{position: "absolute", right: 20}}/>
                 </Buttonlogin>
                <Contentbefore>
                    <Text
                    style={{
                        marginLeft: 20,
                        marginTop: 10,
                        color: "gray"}}>By continuing you may receive a Gmail for verification. Message fees may apply</Text>
                 </Contentbefore>
            </Modalform>
        </Container>
    )
}