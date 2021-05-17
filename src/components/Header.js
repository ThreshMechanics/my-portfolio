import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Name>
                <a href='#top'>
                    JOSH HERMANS - FRONT END DEV
                </a>
            </Name>
            <NavMenu>
                <a>
                    <span>PORTFOLIO</span>
                </a>
                <a>
                    <span>SKILLS</span>
                </a>
                <a>
                    <span>ABOUT</span>
                </a>
                <a>
                    <span>CONTACT</span>
                </a>
            </NavMenu>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    background-color: rgb(11, 12, 16, 0);
    position: fixed;
    height: 70px;
    display: flex;
    align-items: center;
`

const Name = styled.div`
    width: 50%;
    margin-left: 20rem;
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