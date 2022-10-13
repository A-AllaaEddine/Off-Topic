import './navigation.styles.scss';
import { useNavigate } from 'react-router-dom';

import HomeButton from '../../assets/HomeButton.png'

import { Outlet } from 'react-router-dom';

const Navigation = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }
    return (
        <>
            <div className='navigation-container'>
                <div className='nav-img-container'>
                    <img src={HomeButton} alt='Home' onClick={goToHome}/>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;