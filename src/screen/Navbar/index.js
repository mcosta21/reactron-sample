import React, { useState, useEffect } from 'react';
import {Container} from './styles';
import OptionMenu from '../../components/OptionMenu'
import Logo from '../../media/logo.png';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

function Navbar() {

    return (
        <Container>  
          <div className="logo">
            <img src={Logo} alt="Reactron"/>
          </div>
        </Container>
    )
}

export default Navbar;