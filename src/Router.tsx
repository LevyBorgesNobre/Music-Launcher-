import { Outlet, Routes, Route } from "react-router-dom";
import { MainLayout } from "./Components/MainLayout/GlobalHeader";
import { Authenticate } from "./Components/Authenticate";
import { PlayList } from "./Components/Playlist";
import { Home } from "./Components/Home";
import { Wrapper } from "./Components/Wrapper";

export function Router(){
    return(
        <Routes>
            <Route element={<MainLayout><Outlet/></MainLayout>}>
                <Route  path="/" element={<Authenticate/>}/>
                <Route path="/" element={<Wrapper><Outlet/></Wrapper>}>
                <Route path='/Playlist' element={<PlayList/>}/>
                <Route path='/Home' element={<Home/>} />
                </Route>
            </Route>
        </Routes>
    )
}