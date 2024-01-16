import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
const MenuLink = styled(Link)({
  color: '#ddddddfc',
  textTransform: 'none',
  '&:hover': {
       color: ' #1CAC78',
   
  },
});
export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" sx={{
        color:'#ddddddfc',
      }} >
        <MenuLink underline="hover" color="inherit" component={RouterLink} to="/">
       Главная
        </MenuLink>
        <MenuLink 
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
       События
        </MenuLink>
        <MenuLink  underline="hover" color="inherit"component={RouterLink} to="/form">
      Сотрудники
        </MenuLink>
        <MenuLink  underline="hover" color="inherit" href="/">
        Файлы
        </MenuLink>
        <MenuLink  underline="hover" color="inherit" href="/">
        Заявки
        </MenuLink>
        <MenuLink underline="hover" color="inherit" href="/">
        База знаний
        </MenuLink>
        <MenuLink  underline="hover" color="inherit" href="/">
        Форум
        </MenuLink>
      </Breadcrumbs>
    </div>
  );
}