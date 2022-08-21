import styled from 'styled-components';

export const ToastList = styled.ul`
    position: fixed;
    top: 95px;
    right: 25px;

    display: flex;
    flex-direction: column;

    max-height: 70vh;
    width: ${({ width }) => width || '250px'};

    & > li:not(:last-child) {
        margin-bottom: 5px;
    }
`;