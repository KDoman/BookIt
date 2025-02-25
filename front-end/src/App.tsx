import { HeroUIProvider } from "@heroui/react";
import { NavBar } from "./components/NavBar";
import { TextBookIt } from "./components/TextBookIt";

function App() {
  return (
    <>
      <HeroUIProvider>
        <NavBar />

        <TextBookIt />
      </HeroUIProvider>
    </>
  );
}

export default App;
