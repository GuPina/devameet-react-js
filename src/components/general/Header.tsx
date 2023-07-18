import logo from '../../assets/images/logoDevameet.svg';
import { Navigation } from './Navigation';

export const Header = () => {

   

    
    return (
        <div className="container-header">
            <img src={logo} alt="Logo Devameet" className="logo" />
            <Navigation/>

        </div>
    )
}