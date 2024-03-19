import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { auth } from "../../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrar = async () => {
    if (!email || !senha) {
      Alert.alert("Atenção!", "Preencha e-mail e senha");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      Alert.alert("Cadastrado", "agora vc pode logar!", [
        {
          text: "Ficar aqui mesmo",
          style: "cancel",
          onPress: () => {
            return;
          },
        },
        {
          text: "Ir para área logada",
          style: "default",
          onPress: () => {
            navigation.replace("AreaLogada");
          },
        },
      ]);
    } catch (error) {
      console.error(error.code);
      let mensagem;
      switch (error.code) {
        case "auth/email-already-in-use":
          mensagem = "E-mail já em uso";
          break;
        case "auth/weak-password":
          mensagem = "Senha fraca (mínimo de 6 caracteres)";
          break;

        case "auth/invalid-email":
          mensagem = "Endereço de e-mail Inválido";

          break;

        default:
          mensagem = "Houve um erro, Tente novamente mais tarde";
          break;
      }
      Alert.alert("Ops!", mensagem);
    }
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.formulario}>
        <TextInput
          placeholder="E-mail"
          style={estilos.input}
          keyboardType="email-address"
          onChangeText={(valor) => setEmail(valor)}
        />
        <TextInput
          placeholder="Senha"
          style={estilos.input}
          secureTextEntry
          onChangeText={(valor) => setSenha(valor)}
        />
        <View style={estilos.botoes}>
          <Button title="Cadastre-se" color="blue" onPress={cadastrar} />
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  formulario: {
    marginVertical: 16,
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
