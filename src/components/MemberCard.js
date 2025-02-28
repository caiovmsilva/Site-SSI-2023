import React from 'react';
import styled from 'styled-components';

// assets
import FinancesIcon from '../../public/images/co_icons/finances.svg';
import CreationIcon from '../../public/images/co_icons/creation.svg';
import CTFIcon from '../../public/images/co_icons/ctf.svg';
import BoardIcon from '../../public/images/co_icons/board.svg';
// import HackSSIIcon from '../../public/images/co_icons/hackssi.svg';
import InfraIcon from '../../public/images/co_icons/infra.svg';
import LectureIcon from '../../public/images/co_icons/lecture.svg';
import PartnershipIcon from '../../public/images/co_icons/partnership.svg';
import SiteIcon from '../../public/images/co_icons/web.svg';


const MemberCard = ({ name, image, departments, anchor }) => {

    const departmentIcon = (department) => {
        switch (department) {
            case 'Comercial e Financeiro': return FinancesIcon;
            case 'Criação e Comunicação': return CreationIcon;
            case 'CTF': return CTFIcon;
            case 'Diretoria': return BoardIcon;
            // case 'HackSSI': return HackSSIIcon;
            case 'Infraestrutura': return InfraIcon;
            case 'Palestrantes': return LectureIcon;
            case 'Parcerias': return PartnershipIcon;
            case 'Site': return SiteIcon;
        }
    }

    return (
        <MemberWrapper>
            <figure className='member-image'>
                <img src={image} alt={`Foto de ${name}`}></img>
            </figure>
            <figcaption>
                <div className='member-name'>
                    {anchor ?
                        <>
                            <a href={anchor} target="_blank" rel="noreferrer">
                                <p className='name-anchor'>{name}</p>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.9999 7.05C17.9999 6.78478 17.8946 6.53043 17.707 6.34289C17.5195 6.15536 17.2652 6.05 16.9999 6.05L8.99994 6C8.73472 6 8.48037 6.10536 8.29283 6.29289C8.1053 6.48043 7.99994 6.73478 7.99994 7C7.99994 7.26522 8.1053 7.51957 8.29283 7.70711C8.48037 7.89464 8.73472 8 8.99994 8H14.5599L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.42V15C15.9999 15.2652 16.1053 15.5196 16.2928 15.7071C16.4804 15.8946 16.7347 16 16.9999 16C17.2652 16 17.5195 15.8946 17.707 15.7071C17.8946 15.5196 17.9999 15.2652 17.9999 15V7.05Z" fill="#F3F3F3"/>
                                </svg>

                            </a>
                            <div></div>
                        </>
                        :
                        <p>{name}</p>
                    }
                </div>
                <div className='member-department'>
                    {departments.map((department, index) =>
                        <div className='tooltip'>
                            <img src={departmentIcon(department)} />
                            <span className='tooltiptext'>{department}</span>
                        </div>
                    )}
                </div>
            </figcaption>
        </MemberWrapper>
    )
}

export default MemberCard;


const MemberWrapper = styled.div`
    width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    gap: 1rem;
    background-color: var(--color-neutral-800);
    border-radius: 8px;

    .member-image {
        display: flex;
        align-items: center;
        height: 18.75rem;
        width: 17.5rem;
        border-radius: 16px;

        img {
            border-radius: 16px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    figcaption {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        text-align: center;
        max-width: 280px;
    }

    .member-name {
        position: relative;

        a {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;

            svg path {
                transition: all .2s;
            }
        }
        
        div {
            position: absolute;
            width: 0%;
            height: 4px;
            /* margin-left: 50%; */
            /* background-color: var(--color-neutral-50); */
            border-radius: 12px;
            transition: all ease-in-out .2s;
        }

        p {
            font: 400 1rem/1.25rem 'Space_Mono_Bold';
        }

        &:hover {
            div {
                width: 100%;
                height: 4px;
                margin-left: 0%;
                background-color: var(--color-primary-700);
            }

            a {
                svg path {
                    fill: var(--color-primary-500);
                }
            }
        }
    }

    .member-department {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            width: 2.75rem;
            height: 2.75rem;
            background-color: var(--color-neutral-700);
            border-radius: 8px;
            transition: 0.3s all ease-in-out;

            &:hover {
                background-color: var(--color-neutral-600);
            }
        }

        .tooltip {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }

        /* Tooltip text */
        .tooltip .tooltiptext {
            visibility: hidden;
            background-color: var(--color-neutral-600);
            font: 400 0.875rem/1rem 'Space_Mono_Bold';
            text-align: center;
            padding: 5px 10px;
            border-radius: 4px;

            /* Position the tooltip text */
            position: absolute;
            z-index: 1;
            bottom: 120%;

            /* Fade in tooltip */
            opacity: 0;
            transition: opacity 0.3s;
        }

        /* Tooltip arrow */
        .tooltip .tooltiptext::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: var(--color-neutral-600) transparent transparent transparent;
        }

        /* Show the tooltip text when you mouse over the tooltip container */
        .tooltip:hover .tooltiptext {
            visibility: visible;
            opacity: 1;
        }
    }

    @media (min-width:800px) {
        .member-name p {
            font: 400 1.25rem/1.5rem 'Space_Mono_Bold';
        }
    }
`