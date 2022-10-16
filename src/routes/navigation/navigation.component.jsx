import './navigation.styles.scss';
import { useNavigate } from 'react-router-dom';


import HomeIcon from '@mui/icons-material/Home';

import Button from '../../components/button/button.component';
import { BUTTON_TYPES_CLASSES } from '../../components/button/button.component';

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
                    <Button buttonType={BUTTON_TYPES_CLASSES.icon} onClick={goToHome}><HomeIcon/></Button>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;