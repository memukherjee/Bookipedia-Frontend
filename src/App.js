import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import axios from "axios";

import "./App.css";
import Nav from "./components/Navbar";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import BookDetails from "./pages/BookDetails";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/auth/login/success`, {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Credentials": true,
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        const user = res.data.user;
        // console.log(user);
        if (user) {
          setUser(user);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <>
      <Router>
        <Nav user={user} setUser={setUser} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/search"
            element={user ? <SearchPage user={user} /> : <Navigate to="/" />}
          />
          <Route
            path="/book/:id"
            element={user ? <BookDetails /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
