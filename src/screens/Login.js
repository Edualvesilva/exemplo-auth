import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

// Importando os recursos de autenticação
import { auth } from "../../firebase.config";

// Importando a função de login com e-mail e senha
import { signInWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const login = async () => {
    if (!email || !senha) {
      Alert.alert("Hey, atenção!!", " Preencha Email e senha.");
      return;
    }
    console.log(email, senha);
  };
  return (
    <View style={estilos.container}>
      <View style={estilos.formulario}>
        <TextInput
          placeholder="E-mail"
          style={estilos.input}
          onChangeText={(valor) => setEmail(valor)}
        />
        <TextInput
          placeholder="Senha"
          style={estilos.input}
          secureTextEntry
          onChangeText={(valor) => setSenha(valor)}
        />
        <View style={estilos.botoes}>
          <Button title="Entre" color="green" onPress={login} />
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  formulario: {
    marginBottom: 32,
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    marginVertical: 8,
    padding: 8,
    borderRadius: 4,
  },
  botoes: {
    marginVertical: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
