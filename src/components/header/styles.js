import { RiShutDownLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    height: 105px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
    display: flex;
    justify-content: space-between;

    padding: 0 70px;

`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;  
        line-height: 24px;

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.ORANGE};
        font-size: 24px;
    }
`;