import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { auth } from './src/services/firebaseConfig'
import { signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword } from "firebase/auth"


export default function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const cadastrar = () => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage)

      });
  }

  const login = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("USUÁRIO LOGADO COM SUCESSO")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage)
      });
  }

  const esqueceuSenha = async () => {
    await sendPasswordResetEmail(auth, email)
      .then((sendPasswordResetEmail) => {
        alert("reset email sent to " + email)
      })
      .catch(function (e) {
        console.log(e);
      });
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Digite seu email'
        value={email}
        onChangeText={(valor) => setEmail(valor)}
      />
      <TextInput
        placeholder='Digite sua senha'
        value={senha}
        //secureTextEntry={true}
        onChangeText={(valor) => setSenha(valor)}
      />

      <TouchableOpacity onPress={login}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={esqueceuSenha}>
        <Text>Esqueceu a senha</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={cadastrar}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
