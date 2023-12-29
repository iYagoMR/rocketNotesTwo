import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    border-radius: 10px;

    > textarea {
        width: 100%;
        height: 150px;
        
        border: none;
        resize: none;
        background: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};


        margin-bottom: 8px;
        padding: 16px;
    
        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300}
        }
    }

`;