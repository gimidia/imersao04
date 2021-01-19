COMO RODAR O PROJETO BAIXADO
Instalar todas as dependencias indicada pelo package.json
### npm install

Rodar o projeto usando emulador ou dispositivo fisico
### npx react-native run-android

Não fechar o janela do Metro Bundler, caso tenha fechado, para rodar somente executar o comando
### npx react-native start



SEQUENCIA PARA CRIAR O PROJETO
Criar o projeto com React Native
### npx react-native init NOME_DO_PROJETO

Rodar o projeto usando emulador ou dispositivo fisico
### npx react-native run-android

Para navegar entre as página
### npm install @react-navigation/native
### npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
### npm install @react-navigation/stack

Para IOS
### cd ios
### pod-install
### cd ..

Transforma o CSS em componentes
### npm install --save styled-components

Realizar chamada para API
### npm install axios --save