import { Outlet, Routes, Route } from "react-router-dom";
import { MainLayout } from "./Components/MainLayout/GlobalHeader";
import { Authenticate } from "./Components/Authenticate";
import { PlayList } from "./Components/Playlist";
import { Home } from "./Components/Home";

export function Router(){
    return(
        <Routes>
            <Route element={<MainLayout><Outlet/></MainLayout>}>
                <Route  path="/" element={<Authenticate/>}/>
                <Route path='/Playlist' element={<PlayList/>}/>
                <Route path='/Home' element={<Home/>} />
            </Route>
        </Routes>
    )
}