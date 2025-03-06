import MLauncherLogo from '../../../images/Logo.svg'
import { Div, HeaderButton } from './styles'
import { useLocation } from 'react-router-dom'

export function Header(){

    const location = useLocation()

    return(
       <Div>
       <img src={MLauncherLogo} alt="Logo do site" />
       {location.pathname === '/home' ? <HeaderButton>Minha Playlist</HeaderButton> : ''}
       {location.pathname === '/Playlist' ? <HeaderButton>Home</HeaderButton> : ''}
       </Div>
    )
}