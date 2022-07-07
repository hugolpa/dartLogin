// importando componentes
//rotas a serem controladas
import {
    BrowserRouter as Router,
    Route,
    Routes,
    
} from "react-router-dom";
import Login from "./components/login";
import Showuser from "./components/showuser.js"
const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/showuser" element={<Showuser/>}/>
            </Routes>

        </Router>
    )
}

export default AppRoutes;