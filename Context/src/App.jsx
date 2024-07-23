import MyChildren from "./components/MyChildren";
import { MyProvider } from "./components/Contexto";
import { UserPreferencesProvider } from "./components/UserPreferencesContext";

function App() {
  return (
    <UserPreferencesProvider>
      <MyChildren />
    </UserPreferencesProvider>
  );
}

export default App;
