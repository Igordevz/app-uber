import { View, Text, Button } from 'react-native'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Home({ navigation }: any) {

  const [user, setUser] = useState<any | undefined>()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function buscarUsuario() {
      setLoading(true)
      const key: any | undefined = await AsyncStorage.getItem("user");
      setUser(JSON.parse(key));
      setLoading(false)
    }
    buscarUsuario();
  }, [])


  return (
    <>
      {loading ? (
        <View style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: "center",
          height: "100%",
          width: "100%"
        }}>
          <Text style={{ color: "black" }}>carregando</Text>
          <Button title='apagar usuario' onPress={() => { AsyncStorage.removeItem("user"), navigation.navigate("login") }} />

        </View>
      ) : (
        <View style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: "center",
          height: "100%",
          width: "100%"
        }}>
          <Text style={{ color: "black" }}>ola: {user?.name}</Text>
          <Button title='apagar usuario' onPress={() => { AsyncStorage.removeItem("user"), navigation.navigate("login") }} />

        </View>
      )}
    </>
  )
}