import RoutesComponent from "./routes";
import { Global } from "./styles";
import { UserProvider } from "./context/users";

function App() {
  return (
    <UserProvider>
      <Global/>
      <RoutesComponent/>
    </UserProvider>
  );
}

export default App;
