import './App.css';
import { useMoralis } from "react-moralis";

const App = () => {

  const { authenticate } = useMoralis()

  const handleAuth = async () => {
    await authenticate({ provider: 'injected '});
  }
  return (
    <div className="App">
      <button onClick={() => handleAuth()}>Login with metamask</button>
    </div>
  );
}

export default App;
