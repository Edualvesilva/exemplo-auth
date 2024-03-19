import { initializeApp } from "firebase/app";

// Importando recursos da biblioteca de Autenticação
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5c-ay9lnZy4ZMkPExPdNtrMVkDPECsR8",
  authDomain: "exemplo-auth-c85f3.firebaseapp.com",
  projectId: "exemplo-auth-c85f3",
  storageBucket: "exemplo-auth-c85f3.appspot.com",
  messagingSenderId: "168863408719",
  appId: "1:168863408719:web:6d07274d297a973a95803a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Configurando o recurso de autenticação para uso em outras partes
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
