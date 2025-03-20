import MLauncherLogo from '../../../images/Logo.svg'
import { Div, HeaderButton } from './styles'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export function Header(){
    
    const location = useLocation()
    const navigate = useNavigate()

    return(
       <Div>
       <img src={MLauncherLogo} alt="Logo do site" />
        {
        location.pathname ==='/Home' ? 
        <HeaderButton onClick={()=>{navigate('Playlist')}}>MINHA PLAYLIST</HeaderButton> : 
        <HeaderButton onClick={() => navigate(-1)}>HOME</HeaderButton>
        }
       </Div>
    )
}