import { Router } from "./routes/Router";
import { HomePage } from "./components/pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Router>
        <HomePage />
      </Router>
    </>
  );
}

export default App;
