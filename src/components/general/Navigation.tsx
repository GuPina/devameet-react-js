import homeIcon from '../../assets/images/home_cinza.svg';
import homeActive from '../../assets/images/home.svg';
import linkIcon from '../../assets/images/conference_room_cinza.svg';
import linkActive from '../../assets/images/conference_room.svg';
import avatarIcon from '../../assets/images/avatar.svg';
import { useLocation, useNavigate } from 'react-router-dom'

export const Navigation = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const mobile = window.innerWidth <= 992;

    const avatarImage = () => {
        const avatar = localStorage.getItem('avatar');
        if (avatar) {
            const path = `../../assets/objects/avatar/${avatar}_front.png`;
            const imageUrl = new URL(path, import.meta.url);
            return imageUrl.href;
        }
        return avatarIcon
    }

    const getIcon = (name: string) => {
        switch (name) {
            case 'home':
                if (location.pathname !== '/user' &&
                    location.pathname !== '/link' &&
                    location.pathname !== '/room') {
                    return homeActive
                }
                return homeIcon;
            case 'room':
                if (location.pathname === '/room' ||
                    location.pathname === '/link') {
                    return linkActive;
                }
                return linkIcon
            default:
                return '';
        }
    }

    const getSelectedClass = () => {
        if (location.pathname === '/user') {
            return 'selected';
        }
        return '';
    }


    return (
        <div className='container-navigation'>
            <ul>
                <li>
                    <img src={getIcon('home')} alt="Minhas reuniões" className='iconeNav' onClick={() => navigate('/')} />
                </li>

                {mobile ?
                    <li>
                        <img src={getIcon('room')} alt="Entrar na reunião" className='iconeNav' onClick={() => navigate('/link')} />
                    </li>
                    :
                    <li className="disabled">
                        <img src={getIcon('room')} alt="Entrar na reunião" className='iconeNav' />
                    </li>
                }
                <li>
                    <div className={'avatar mini' + getSelectedClass()} onClick={() => navigate('/user')}>
                        <img src={avatarImage()} alt='Editar usuário' />
                    </div>
                </li>
            </ul>
        </div>
    );
}