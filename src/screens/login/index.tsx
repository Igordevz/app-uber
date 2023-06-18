
import { Text, TextInput, Image, Alert } from 'react-native';
import { Buttonlogin, Container, Contentbefore, Modalform } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/ContextApi';
import { Api } from '../../services/Api';

export default function LoginScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(user);

  async function Logar() {

    if (email?.length < 1) {
      Alert.alert('ops...', 'Preencha O Campo Email')
    }
    if (password?.length < 1) {
      Alert.alert('ops...', 'Preencha O Campo Senha ')

    }
    await Api.post("/auth/login", {
      email: email,
      password: password
    })
      .then(async (data) => {
        await AsyncStorage.setItem("user", JSON.stringify(data?.data));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <Container>
      <Image
        source={require('../../assets/logo-preta.png')}
        style={{ marginBottom: 50 }}
      />
      <Modalform>
        <Text style={{ marginLeft: 20, fontWeight: '600' }}>
          Enter Your Cell Phone Email
        </Text>
        <TextInput
          placeholder="Digite Seu Email"
          style={{
            marginTop: 10,
            marginLeft: 20,
            width: '88%',
            backgroundColor: '#EEEEEE',
            height: 45,
            paddingLeft: 20,
          }}
          onChange={(e: any) => setEmail(e.nativeEvent.text)}
        />
        <Text style={{ marginLeft: 20, fontWeight: '600' }}>
          Enter Your Password
        </Text>
        <TextInput
          placeholder="Digite Sua Senha"
          style={{
            marginTop: 10,
            marginLeft: 20,
            width: '88%',
            backgroundColor: '#EEEEEE',
            height: 45,
            paddingLeft: 20,
          }} secureTextEntry={true}
          onChange={(e) => setPassword(e.nativeEvent.text)}
        />
        <Buttonlogin onPress={Logar}>
          <Text style={{ color: 'white', fontSize: 15 }}>Next</Text>
          <Image
            source={require('../../assets/seta-lado.png')}
            style={{ position: 'absolute', right: 20 }}
          />
        </Buttonlogin>
        <Contentbefore>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 10,
              color: 'gray',
            }}
          >
            By continuing you may receive a Gmail for verification. Message
            fees may apply. d'ont account?
          </Text>
        </Contentbefore>
      </Modalform>
    </Container>
  );
}