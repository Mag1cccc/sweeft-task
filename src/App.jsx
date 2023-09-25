import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CountryList } from "./components/country/CountryList";
import { Home } from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const client = new QueryClient();

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <QueryClientProvider client={client}>
                <Home />
              </QueryClientProvider>
            }
          />
          <Route path="*" element={<h1> PAGE NOT FOUND! </h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
