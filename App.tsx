import React, { useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";

import Loading from "./src/components/Loading";
import theme from "./src/theme";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import Routes from "./src/routes/routes";

const App = () => {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleConfirm = () => {
    console.log("Ação confirmada!");
    setModalVisible(false);
  };

  return !fontsLoaded ? (
    <Loading />
  ) : (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider
          initialMetrics={initialWindowMetrics}
          style={{ flex: 1 }}
        >
          <Routes />
          {/* <Input label="Label" placeholder="Digite aqui..." />
            <Button label="abrir modal" onPress={handleOpenModal} /> 
            */}
          {/* <Modal 
              title={'Deseja realmente excluir o\nregistro da refeição?'}
              visible={modalVisible} 
              onClose={handleCloseModal} 
              onConfirm={handleConfirm} 
              /> */}
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

export default App;
