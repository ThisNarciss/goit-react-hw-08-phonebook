import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import {
  IconLogoBox,
  IconLogoMobBox,
  Item,
  Link,
  List,
  LogoNameBox,
  SiteName,
} from './AppBar.styled';
import { useState } from 'react';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { LogoIcon } from 'custom-icon/LogoMobileIcon';

export function SiteAppBar() {
  const { isLoggedIn } = useAuth();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      color="inherit"
      sx={{ backgroundImage: 'linear-gradient( #7579ff, #b224ef)' }}
    >
      <Container maxWidth="xl">
        <nav>
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconLogoBox>
              <LogoIcon size={40} fill={'#fff68f'} />
            </IconLogoBox>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/goit-react-hw-08-phonebook"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              PHONEBOOK
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <List>
                  <Item>
                    <Link to="/">Home</Link>
                  </Item>
                  <Item>
                    {isLoggedIn && <Link to="/contacts">Contacts</Link>}
                  </Item>
                </List>
              </Menu>
            </Box>
            <IconLogoMobBox>
              <LogoIcon size={40} fill={'#fff68f'} />
            </IconLogoMobBox>
            <LogoNameBox>
              <LogoIcon size={70} fill={'#fff68f'} />
            </LogoNameBox>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/goit-react-hw-08-phonebook"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <SiteName>PHONEBOOK</SiteName>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <List>
                <Item>
                  <Link to="/">Home</Link>
                </Item>
                <Item>
                  {isLoggedIn && <Link to="/contacts">Contacts</Link>}
                </Item>
              </List>
            </Box>
            {!isLoggedIn ? (
              <List>
                <Item>
                  <Link to="/register">Register</Link>
                </Item>
                <Item>
                  <Link to="/login">Login</Link>
                </Item>
              </List>
            ) : (
              <UserMenu />
            )}
          </Toolbar>
        </nav>
      </Container>
    </AppBar>
  );
}
