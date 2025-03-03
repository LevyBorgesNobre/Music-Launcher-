import MLauncherLogo from '../../../images/Logo.svg'
import { Div } from './styles'

export function Header(){
    return(
       <Div>
       <img src={MLauncherLogo} alt="Logo do site" />
       </Div>
    )
}