/** @jsx jsx */
import { jsx } from '@emotion/core';
import { css } from 'twin.macro';

const LoadingSpinner = ({ color = '#4a5568', scale = 1, ...props }) => {
  // ================ Style ================
  const Spinner = css`
    display: inline-block;
    position: relative;
    width: ${80 * scale}px;
    height: ${80 * scale}px;
    & div {
      transform-origin: ${40 * scale}px ${40 * scale}px;
      animation: ldsSpinner 1.2s linear infinite;
    }
    & div:after {
      content: ' ';
      display: block;
      position: absolute;
      top: ${3 * scale}px;
      left: ${37 * scale}px;
      width: ${6 * scale}px;
      height: ${18 * scale}px;
      border-radius: 20%;
      background: ${color};
    }
    & div:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -1.1s;
    }
    & div:nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -1s;
    }
    & div:nth-child(3) {
      transform: rotate(60deg);
      animation-delay: -0.9s;
    }
    & div:nth-child(4) {
      transform: rotate(90deg);
      animation-delay: -0.8s;
    }
    & div:nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.7s;
    }
    & div:nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.6s;
    }
    & div:nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.5s;
    }
    & div:nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.4s;
    }
    & div:nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.3s;
    }
    & div:nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.2s;
    }
    & div:nth-child(11) {
      transform: rotate(300deg);
      animation-delay: -0.1s;
    }
    & div:nth-child(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
    }
    @keyframes ldsSpinner {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `;
  return (
    <div css={Spinner} {...props}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export { LoadingSpinner };
