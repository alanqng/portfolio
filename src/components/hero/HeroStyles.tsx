import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 70%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 50%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Img = styled.img`
  width:50%;
  height:50%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;
`
