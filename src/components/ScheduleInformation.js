import React from 'react';
import styled from 'styled-components';

// components
import SpeakerInfo from './SpeakerInfo';
import borda from '../../public/images/borda.png';

const ScheduleInformation = ({ lecture, startTime, lecturePicture, speakerName, title, overview }) => {
    
    const endTime = (time) => {
        let [h, m] = time.split(':');
        let date = new Date();
        date.setHours(h, m, 0)
        date.toString();
        let res = `${date.getHours()+1}:${date.getMinutes()==0 ? '00':date.getMinutes()}`
        return res
    }

    return (
        <>
            <ScheduleInformationStyle>
                <div className='speakers-box'>
                    {(lecture.speakers.length < 4 && lecture.speakers.length > 0 && !lecturePicture) ?
                        lecture['speakers'].map((s, index) => {
                            return(
                                <SpeakerInfo speaker={s} key={index} />
                            )
                        })
                        :
                        lecturePicture ?
                            <img className='lecture-picture' src={lecturePicture} />
                            :
                            <div className='space-div'></div>
                    }
                </div>

                <div className='duration-box'>
                    <p>{startTime} - {endTime(startTime)}</p>
                </div>

                <div className='description-box'>
                    <p className='speech-overview'>{overview}</p>
                </div>
            </ScheduleInformationStyle >
        </>
    )
}

export default ScheduleInformation;


const ScheduleInformationStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 1rem;

    .speakers-box {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: row;
        align-items: top;
        justify-content: center;
        gap: 1rem;

        .lecture-picture {
            width: 100%;
            max-width: 34rem;
            min-height: 8rem;
            max-height: 14rem;
            border-radius: 16px;
            object-fit: cover;
        }
    }

    .duration-box {
        p {
            font: 400 1rem/1.25rem 'Space_Mono_Bold';
        }
    }

    .space-div {
        height: 1rem;
    }

    .description-box {
        display:flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .speech-overview {
        font: 400 1rem/1.25rem 'Space_Mono';
    }

    @media (min-width:600px) {
        .space-div {
            height: 3rem;
        }
    }

    @media (min-width:1024px) {
        gap: 2rem;

        .speakers-box {
            gap: 1.5rem;

            .lecture-picture {
                height: 23.5rem;
                max-height: none;
                border-radius: 16px;
                object-fit: cover;
            }
        }

        .duration-box {
            p {
                font: 400 1.25rem/1.5rem 'Space_Mono_Bold';
                color: var(--color-primary-500);
            }
        }
        
        .speech-overview {
            font: 400 1.125rem/1.75rem 'Space_Mono';
        }
    }
`