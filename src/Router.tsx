import { Outlet, Routes, Route } from "react-router-dom";
import { GlobalHeader } from "./Components/GlobalHeader/GlobalHeader";
import { Login } from "./Components/Login";
import { PlayList } from "./Components/Playlist";
import { Home } from "./Components/Home";

export function Router(){
    return(
        <Routes>
            <Route element={<GlobalHeader><Outlet/></GlobalHeader>}>
                <Route  path="/" element={<Login/>}/>
                <Route path='/Playist' element={<PlayList/>}/>
                <Route path='/Home' element={<Home/>} />
            </Route>
        </Routes>
    )
}