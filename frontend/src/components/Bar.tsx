import { FC, useContext, useState, MouseEvent } from 'react';
import { AppBar, Button, Divider, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import { AccountCircle, KeyboardArrowDown } from '@mui/icons-material';
import { Role } from '../domain/role';

export const Bar: FC = ({children}) => {

  const {state, assumeRole, logout} = useContext(AuthenticationContext);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChangeRole = (role: Role) => () => {
    assumeRole(role);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if(state.status !== 'AUTHENTICATED') {
    throw new Error('Bad state');
  }

  return <>
  <AppBar position="static">
    <Toolbar>
      <Typography component="div" sx={{flexGrow: 1}}/>
      <Button color="secondary" variant="contained" startIcon={<AccountCircle />} onClick={handleClick} endIcon={<KeyboardArrowDown />}>
        {state.address.substring(0,10)}...
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => logout()}>Logout</MenuItem>
        <Divider/>
        <MenuItem disabled>Change Role</MenuItem>
        {state.availableRoles.map(ar =>
          <MenuItem onClick={handleChangeRole(ar)} key={ar.name}>{ar.name}</MenuItem>
        )}
      </Menu>
    </Toolbar>
  </AppBar>
    {children}
    </>
}
