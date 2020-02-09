import styled from 'styled-components';

export const DisplayOnMobile = styled.div`
    ${props => props.theme.breakpoints.up("md")} {
        /* @media (min-width:960px) { */
        display: none;
        background-color: blue;
    }

    /* @media (max-width: 768px) {
        background-color: red;
  } */
`;