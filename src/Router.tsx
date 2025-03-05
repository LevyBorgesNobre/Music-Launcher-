import { Outlet, Routes, Route } from "react-router-dom";
import { MainLayout } from "./Components/MainLayout/GlobalHeader";
import { Login } from "./Components/Login";
import { PlayList } from "./Components/Playlist";
import { Home } from "./Components/Home";

export function Router(){
    return(
        <Routes>
            <Route element={<MainLayout><Outlet/></MainLayout>}>
                <Route  path="/" element={<Login/>}/>
                <Route path='/Playlist' element={<PlayList/>}/>
                <Route path='/Home' element={<Home/>} />
            </Route>
        </Routes>
    )
}