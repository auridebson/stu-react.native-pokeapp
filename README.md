# Criar um projeto vazio React Native
npx create-expo-app pokeapp
- Criar o projeto na pasta atual use no lugar do nome do app o ".".

# Instalar o React Native
npm install react-native

# Instalar bibliotecas de nevegação
npm install @react-navigation/native
npm install @react-navigation/native-stack

npx expo install react-native-screens react-native-safe-area-context
npx expo install react-native-gesture-handler
- Verificar documentação do React Navigation
- https://reactnavigation.org/docs/getting-started

# Instalar o animatable
npm install react-native-animatable --save

# Instalar o Axios
npm install axios


-- PARA RODAR NA WEB INSTALAR E INICIAR:
npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config@^19.0.0

-- GERANDO O APK
npm install -g eas-cli
eas build