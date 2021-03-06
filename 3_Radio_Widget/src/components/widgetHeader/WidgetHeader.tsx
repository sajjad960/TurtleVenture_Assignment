import React from 'react';
import styled from 'styled-components'
import { modeChecker } from '../../utiles/helpers';


const WidgetHeader = () => {
    // Host address helping to load image from public folder
    const hostAddress = modeChecker();
    return (
        <Wrapper>
            <div className="radio_controlling">
                <button>
                    <img src={`${hostAddress}/back-arrow.png`} className='radio_controlling-img--backarrow' alt="Back Station" />
                </button>
                <h2 className='radio_controlling-txt'>Stations</h2>
                <button>
                    <img src={`${hostAddress}/switch.png`} className='radio_controlling-img' alt="Turn of Station" />
                </button>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    padding: 1.2rem .8rem;
    font-size: 1.2rem;
    display: block;
    border-radius: 20px 20px 0 0;
    /* background-color: #eca95b; */
    background-color: var(--primary-color);;
    


    .radio_controlling {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: inherit;

        &-img {
            width: 1.1rem;
            height: 100%;
            background-color: inherit;


            &--backarrow {
                width: .7rem;
                height: 100%;
                background-color: inherit;

            }
        }
        &-txt {
            text-transform: uppercase;
            font-size: 1.1rem;
            color: white;
            background-color: inherit;

        }
    }

   
`

export default WidgetHeader