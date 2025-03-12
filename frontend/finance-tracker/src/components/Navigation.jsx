import React, { useState } from 'react'
import styled from 'styled-components'
import avatar from '../img/avatar.png'
import { signout } from '../utils/Icons'
import { menuItems } from '../utils/menuItems'

function Navigation({active, setActive}) {
    
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Expense Visualizer</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 300px;
    max-width: 90%;
    height: 100%;
    background: rgba(252, 246, 249, 0.85);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(6px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    .user-con {
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1.2rem;

        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .3rem;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
            transition: transform 0.3s ease-in-out;
        }

        img:hover {
            transform: scale(1.05);
        }

        h2 {
            color: rgba(34, 34, 96, 1);
            font-size: 1.3rem;
            font-weight: 600;
        }

        p {
            color: rgba(34, 34, 96, 0.7);
            font-size: 0.9rem;
        }
    }

    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        li {
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            color: rgba(34, 34, 96, 0.6);
            padding: 0.8rem 1rem;
            position: relative;
            border-radius: 10px;

            i {
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all 0.3s ease-in-out;
            }
        }

        li:hover {
            background: rgba(34, 34, 96, 0.1);
            color: rgba(34, 34, 96, 1);

            i {
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .active {
        color: rgba(34, 34, 96, 1) !important;
        background: rgba(34, 34, 96, 0.15) !important;

        i {
            color: rgba(34, 34, 96, 1) !important;
        }

        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation