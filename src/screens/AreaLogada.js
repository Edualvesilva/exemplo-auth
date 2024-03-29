import { Button, StyleSheet, Text, View } from "react-native";
import { auth } from "../../firebase.config";
import { signOut } from "firebase/auth";

export default function AreaLogada({ navigation }) {
  const { email } = auth.currentUser;
  console.log(email);

  const logout = async () => {
    try {
      signOut(auth);
      navigation.replace("Inicial");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={estilos.container}>
      <View style={estilos.topo}>
        <Text style={estilos.bemVindo}>
          Bem-vindo(a) {auth.currentUser.displayName}
        </Text>
        <Text>Seu e-mail de cadastro é: </Text>
        <Text style={{ fontWeight: "bold" }}>{email}</Text>
        <Button title="Logout" color="#D35400" onPress={logout} />
      </View>
      <View style={estilos.geral}>
        <Text>Você está na área logada.</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF3CF",
    padding: 16,
  },
  topo: {
    marginVertical: 32,
  },
  bemVindo: {
    fontSize: 24,
    marginVertical: 16,
  },
});
