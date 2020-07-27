import React, { useState } from 'react';
import {Button, Dropdown} from './styles';

function OptionMenu(props) {
    return (
        <>
            <Button>
                {props.name}
                <Dropdown render={props.visible} className="drop-down">
                    {props.children}
                </Dropdown>
            </Button>
            
        </>
    )
}

export default OptionMenu;