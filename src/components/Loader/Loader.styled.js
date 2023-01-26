import styled from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';

export const LoaderOverlay = styled.div`
position: fixed;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 48%, rgba(255,255,255,0.4458158263305322) 100%);
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
z-index: 100000;
`;

export const Spinner = styled(RotatingLines)`

`;