import React, { useState } from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

function Header() {
    const [showMenu, setShowMenu] = useState(false);

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
                    JOSH HERMANS<span> - FRONT END DEV</span>
                </a>
            </Name>
            <FaBars onClick={() => setShowMenu(!showMenu)} className='mobile-burger'/>
            <NavMenu id={showMenu ? 'mobileMenuActive': 'mobileMenu'}>
                <a href='#portfolio' onClick={() => setShowMenu(!showMenu)}>
                    <span>PORTFOLIO</span>
                </a>
                <a href='#skills' onClick={() => setShowMenu(!showMenu)}>
                    <span>SKILLS</span>
                </a>
                <a href='#contact' onClick={() => setShowMenu(!showMenu)}>
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
    width: 100vw;
    height: 70px;
    display: flex;
    align-items: center;
    z-index: 2;

    @media only screen and (max-width: 480px) {
        width: 100%;
        justify-content: space-evenly;
        border-bottom: 1px ridge #66FCF1
    }

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

    @media only screen and (max-width: 480px) {
        margin-right: 3rem;
        a {
            width: 100%;
            font-size: 25px;

            span {
                display: none;
            }
        }
    }

    @media only screen and (max-width: 992px) {
        margin-left: 2rem;
        width: 35%;

        a {
            font-size: 1.3125rem;
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

    @media only screen and (max-width: 480px) {
        display: none;
    }

    @media only screen and (max-width: 992px) {
        width: 50%;
        margin-left: 8rem;

        a {
            margin: 0 1rem;

            span {
                font-size: 1.3125rem;
            }

        }
    }
` 