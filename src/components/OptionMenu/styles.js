import styled, { css } from 'styled-components'
import { lightTheme, colorsTheme } from '../../styles/theme';

export const Button = styled.button`
    background: transparent;
    -webkit-app-region: no-drag;
    padding: 10px 15px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${props => props.theme.colors.dark};
    transition: 0.25s;

    &:hover{
    ${props =>
        props.theme === lightTheme
        ? css`
            background: ${props.theme.backgrounds.darkest};
            color: ${props.theme.backgrounds.dark}
        `
        : css`
            background: ${props.theme.backgrounds.lightest};
            color: ${props.theme.colors.dark}
        `
        };
    }
}
`;

export const Dropdown = styled.div`
    position: absolute;
    top: 40px;
    display: grid;
    align-content: center;
    min-width: 70px;
    width: max-content;
    border: 1px solid ${props => props.theme.backgrounds.darkest};

    ${props => 
        props.render === true
        ? css`
            display: grid;
        `
        : css`
            display: none;
        `
    }

    a {
        width: auto;
        padding: 10px 15px;
        background: ${props => props.theme.backgrounds.darker};      
        text-decoration: none; 
        color: ${props => props.theme.colors.dark};
        transition: 0.25s;
    }
    a:hover{
        ${props =>
            props.theme === lightTheme
            ? css`
                background: ${props.theme.backgrounds.darkest};
                color: ${props.theme.backgrounds.dark}
            `
            : css`
                background: ${props.theme.backgrounds.lightest};
                color: ${props.theme.colors.dark}
            `
            };
        }
`;