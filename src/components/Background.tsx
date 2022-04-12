import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const noise = keyframes`
    0% { transform: translate(0,0) }
    10% { transform: translate(-5%,-5%) }
    20% { transform: translate(-10%,5%) }
    30% { transform: translate(5%,-10%) }
    40% { transform: translate(-5%,15%) }
    50% { transform: translate(-10%,5%) }
    60% { transform: translate(15%,0) }
    70% { transform: translate(0,10%) }
    80% { transform: translate(-15%,0) }
    90% { transform: translate(10%,5%) }
    100% { transform: translate(5%,0) }

`;

export const Background = styled.div`
  position: fixed;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  width: 200%;
  height: 200vh;
  z-index: 800;
  pointer-events: none;
  background: transparent
    url("https://user-images.githubusercontent.com/73872769/162917230-28049917-b6f5-443c-9369-6763e7fea2cd.png") repeat 0 0;
  background-repeat: repeat;
  animation: ${noise} 0.2s infinite;
  opacity: 0.9;
  visibility: visible;
`;
