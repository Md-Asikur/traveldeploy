
import { Dashboard, Logout, Settings } from "@mui/icons-material";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import React from "react";
import { Await, useNavigate } from "react-router-dom";
import { useValue } from "../../context/ContextProvider";
 import useCheckToken from '../../hooks/useCheckToken';
 import Profile from './Profile';

const UserMenu = ({ anchorUserMenu, setAnchorUserMenu }) => {
   useCheckToken();
  const {
    dispatch,
    state: { currentUser },
  } = useValue();
  const handleCloseUserMenu = () => {
    setAnchorUserMenu(null);
  };

  const navigate = useNavigate();
  //test auth
  // const testAuthorazation = async () => {
  //   const url = process.env.REACT_APP_SERVER_URL + '/room';
  //   try {
  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         authorization:`Bearer ${currentUser.token}t`
  //       }
       
  //     })
  //     const data = await response.json();
  //     console.log(data)
  //     if (!data.success) {
  //       if (response.status === 401) {
  //         dispatch({type:"UPDATE_USER",payload:null})
  //       }
  //       throw new Error(data.message)
  //     }
  //   } catch (error) {
  //     dispatch({
  //               type: 'UPDATE_ALERT',
  //               payload: {
  //                 open: true,
  //                 severity: "error",
  //         message: error.message
  //       }
  //     })
  //     console.log(error)
  //   }
  
  // }

  return (
    <>
      <Menu
        anchorEl={anchorUserMenu}
        open={Boolean(anchorUserMenu)}
        onClose={handleCloseUserMenu}
        onClick={handleCloseUserMenu}
      >
        {!currentUser.google && (
          <MenuItem
            onClick={() =>
              dispatch({
                type: "UPDATE_PROFILE",
                payload: {
                  open: true,
                  file: null,
                  photoURL: currentUser?.photoURL,
                },
              })
            }
          >
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Profile
          </MenuItem>
        )}

        <MenuItem onClick={() => navigate("dashboard")}>
          <ListItemIcon>
            <Dashboard fontSize="small" />
          </ListItemIcon>
          Dashboard
        </MenuItem>
        <MenuItem onClick={() => dispatch({ type: "UPDATE_USER", payload: null })}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <Profile />
    </>
  );
};

export default UserMenu;
