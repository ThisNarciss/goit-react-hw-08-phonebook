import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: getRandomHexColor(),
      color: 'black',
    },
    children: `${name
      .split(' ')
      .map(str => str.slice(0, 1).toUpperCase())
      .join('')}`,
  };
}

export function UserMenu({
  handleCloseUserMenu,
  handleOpenUserMenu,
  anchorElUser,
}) {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleClickLogoutBtn = e => {
    dispatch(logoutUser());
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar {...stringAvatar(`${user.name}`)} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center">Profile</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <IconButton onClick={handleClickLogoutBtn} sx={{ p: 0 }}>
            <LogoutIcon />
          </IconButton>
        </MenuItem>
      </Menu>
    </Box>
  );
}
