import React from "react";
import AppContainer from "./src/navigations/AppNavigation";
import AppProvider from "./src/contexts/AppProvider";

import "./firebaseConfig";

export default function App() {
  return (
    <AppProvider>
      <AppContainer />
    </AppProvider>
  );
}
