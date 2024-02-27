import React from 'react'
import { AppBar, Switch, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom';


const NavBar = ({ changeTheme }) => {
    const handleTheme = () => {
        changeTheme()

    }

    return (
        <div>
            <AppBar sx={{ bgcolor: "#E25822" }}>

                <Toolbar>
                   
                    <Link to={'/'} style={{ width: "60%", textDecoration: "none", color: "black", flexGrow: "1" }}> <Typography variant='h5'>Digital Crypto Currency</Typography></Link>
                    <Link to={'/trending'} style={{ textDecoration: "none", color: "black", marginRight: "10px" }}><Typography variant='h5'>Trending</Typography></Link>
                   

                    <Switch onClick={handleTheme} />
                    {/* <DarkModeIcon /> */}

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar