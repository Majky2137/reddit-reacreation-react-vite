import React from 'react';
import { HomePage } from "@modules";
import { MainMenuGlobalComponent } from "@/global-components";

const App: React.FC = () => (
  <>
    <MainMenuGlobalComponent/>
    <HomePage />
  </>
);

export default App;
