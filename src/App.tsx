import {BrowserRouter, Route, Routes} from "react-router";
import Main from "./pages/Main/Main.tsx";
import Character from "./pages/Character/Character.tsx";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/character/:id"} element={<Character/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;