import styled from "styled-components";

export const DetailsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 5rem;

    @media (min-width: 768px) {
        grid-template-columns: 3fr 1fr;
    }
`

