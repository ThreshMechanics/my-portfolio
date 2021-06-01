import React from 'react'
import styled from 'styled-components'

function Popup(props) {
    return (props.trigger) ? (
        <Container className='popup'>
            <PopupInner>
                <button>close</button>
                { props.children }
            </PopupInner>
        </Container>
    ) : '';
}

export default Popup

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
`

const PopupInner = styled.div`
    position: relative;
    padding: 32px;
    width: 100%;
    max-width: 640px;
    background-color: white;

    button {
        position: abosolute;
        top: 16px;
        right: 16px;
    }
`