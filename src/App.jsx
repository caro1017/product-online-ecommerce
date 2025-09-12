import { Router } from "./routes/Router";
import { RegisteredPage } from "./components/pages/RegisteredPage/RegisteredPage";

function App() {
  return (
    <>
      <Router>
        <RegisteredPage />
      </Router>
    </>
  );
}

export default App;
