import React, { useState } from 'react'
import styled from 'styled-components'

function Header() {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 70) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <Nav className={navbar ? 'navbar active' : 'navbar'}>
            <Name>
                <a href='#top'>
                    JOSH HERMANS - FRONT END DEV
                </a>
            </Name>
            <NavMenu>
                <a href='#portfolio'>
                    <span>PORTFOLIO</span>
                </a>
                <a href='#skills'>
                    <span>SKILLS</span>
                </a>
                <a>
                    <span>ABOUT</span>
                </a>
                <a href='#contact'>
                    <span>CONTACT</span>
                </a>
            </NavMenu>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    background-color: transparent;
    position: fixed;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    z-index: 2;
`

const Name = styled.div`
    width: 50%;
    transition: all 250ms;

    a {
        text-decoration: none;
        color: #66FCF1;
        font-size: 25px;
        display: inline-block;

        &:hover {
            transform: scaleX(1.05);
            color: white;
        }
    }
`

const NavMenu = styled.div`
    width: 50%;
    display: flex;
    margin-left: 25rem;
    transition: all 250ms;

    a {
        margin: 0 2rem;
        text-decoration: none;
        color: #66FCF1;

        span {
            font-size: 25px;
        }

        &:hover {
            transform: scaleX(1.05);
            color: white;
        }
    }
` 