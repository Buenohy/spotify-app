import { View, Image, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function LoadingScreen() {
  // O hook useRouter nos dá o poder de navegar programaticamente
  const router = useRouter();

  useEffect(() => {
    // Esta função simula uma verificação de autenticação
    const checkAuthStatus = async () => {
      // Em um app real, você verificaria o AsyncStorage, faria uma chamada de API, etc.
      const isLoggedIn = false; // Mude para 'true' para testar o fluxo de login!

      // Aguarda 2 segundos para simular o carregamento
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (isLoggedIn) {
        // Se logado, substitui a tela atual pela tela principal do app
        router.replace('/(app)'); // O Expo Router vai carregar a primeira tela do grupo (app)
      } else {
        // Se não, substitui pela primeira tela do fluxo de autenticação
        router.replace('/(auth)/get-startted');
      }
    };

    checkAuthStatus();
  }, []); // O array vazio [] garante que o useEffect rode apenas uma vez

  return (
    <View className="flex-1 items-center justify-center bg-black">
      {/* Barra de status com ícones claros para combinar com o fundo escuro */}
      <StatusBar style="light" />

      {/* Logo do Spotify */}
      <Image
        source={require('../assets/images/spotify-logo.png')} // Verifique se o caminho está correto
        className="h-20 w-2/3" // Ajuste o tamanho conforme necessário
        resizeMode="contain"
      />

      {/* (Opcional) Adiciona um indicador de carregamento para feedback visual */}
      <ActivityIndicator size="large" color="#1DB954" className="mt-8" />
    </View>
  );
}
