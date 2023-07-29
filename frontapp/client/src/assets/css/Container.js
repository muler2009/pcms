import { styled } from 'styled-components';

export const IconContainer = styled.div`
    border-color: #ddd;
`
export const Icon = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #9eacc7;
    
    &:hover {
        border-radius: 50%;
        background-color: #ffffff;
        color: #000;
    }
`

export const Text = styled.h5`
    font-family: Poppins;
    font-size: 14px;
    color: #5c727d;
`
export const InnerContainer = styled.div`
    color: "#000";
`
export const OuterContainer = styled.div`
    color: "#000";
`