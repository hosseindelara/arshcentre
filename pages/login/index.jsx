import { useRouter } from 'next/router';

import { parseCookies, setCookie } from 'nookies';
import { useEffect } from 'react';


import styled from "styled-components"

const Mybutton = styled.button`

    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    background-color: white;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;

`;




export default function index() {

    const router = useRouter()


    const cookies = parseCookies()



    useEffect(() => {

        if (cookies.token) {
            router.push('/')
        }
        return () => {

        }
    }, [])


    const handelSetCookie = () => {

        setCookie(null, "token", '9ZieBz+gYR93+UaEUOFkkhJ7KjISbz/6Tt9svuoYS5A=', {
            path: '/'
        })
        router.push('/')
    }


    return (
        <div  >
            <Mybutton onClick={handelSetCookie} >ورود به سایت</Mybutton>


        </div>
    )
}
