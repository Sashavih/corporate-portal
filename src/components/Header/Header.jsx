import User from "../User/User";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './Header.scss';
import BasicBreadcrumbs from "./BasicBreadcrumbs/BasicBreadcrumbs";


export const Header = ({pressed}) => {
    const MenuButton = styled(Button)({
        color: '#ddddddfc',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: 'rgba(68, 89, 114, 0.21)',
            color: 'white',
        },
      });
    
return(
    <header className="header">
    <BasicBreadcrumbs/>
<User/>
</header>
);
};