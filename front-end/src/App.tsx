import { HeroUIProvider } from "@heroui/react";
import { NavBar } from "./components/NavBar";
import { EntryPage } from "./views/EntryPage";

function App() {
  return (
    <>
      <HeroUIProvider>
        <NavBar />
        <EntryPage />
      </HeroUIProvider>
    </>
  );
}

export default App;
