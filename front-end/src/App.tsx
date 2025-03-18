import { HeroUIProvider } from "@heroui/react";

import { Layout } from "./views/Layout";

function App() {
  return (
    <>
      <HeroUIProvider>
        <Layout />
      </HeroUIProvider>
    </>
  );
}

export default App;
