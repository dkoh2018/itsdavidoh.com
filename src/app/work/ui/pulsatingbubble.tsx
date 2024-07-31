import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Bubble = styled.div`
  width: 14px; /* Increase size slightly */
  height: 14px; /* Increase size slightly */
  background-color: #000;
  border-radius: 50%;
  animation: ${pulse} 1s infinite;
`;

const PulsatingBubble: React.FC = () => {
  return <Bubble />;
};

export default PulsatingBubble;
