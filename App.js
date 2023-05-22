import React from "react";
import AppContainer from "./src/navigations/AppNavigation";
import AppProvider from "./src/contexts/AppProvider";
import { Text, View } from "react-native";

//import "./firebaseConfig";

export default function App() {
  return (
    <AppProvider>
      <AppContainer />
    </AppProvider>
    
  );
}
