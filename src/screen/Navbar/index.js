import React, { useState, useEffect } from 'react';
import {Container} from './styles';
import OptionMenu from '../../components/OptionMenu'
import Logo from '../../media/logo.png';

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