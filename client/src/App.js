import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Routes,
  Route,
} from "react-router-dom";
import Join from "./components/Join";
import Chat from "./components/Chat";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact component={Join} />
                <Route path="/chat" exact component={Chat} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
