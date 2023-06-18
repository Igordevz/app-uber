import { createContext, useEffect, useState } from "react";
import { Iprops } from "./protocolls"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View } from "react-native";

export const AuthContext = createContext({})

export default function ProviderContext({ children }: Iprops) {

  const [user, setUser] = useState<any | undefined>({});
  useEffect(() => {

    const GetUser = async () => {
      const key: any | undefined = await AsyncStorage.getItem("user");
      setUser(JSON.parse(key));
    };

    GetUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )

}