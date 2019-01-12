import React, { useState } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Svg from '../Svg';

const BigRedButton = ({ size = 40, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Button
      onClick={onClick}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseLeave={() => isActive && setIsActive(false)}
    >
      <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <mask
          id="outer-mask"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="40"
          height="40"
        >
          <circle cx="20" cy="20" r="15" fill="#000000" />
        </mask>
        <g>
          <circle cx="20" cy="20" r="20" fill="#2B2B2B" />
          <path
            d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20ZM4.81942 20C4.81942 28.384 11.616 35.1806 20 35.1806C28.384 35.1806 35.1806 28.384 35.1806 20C35.1806 11.616 28.384 4.81942 20 4.81942C11.616 4.81942 4.81942 11.616 4.81942 20Z"
            fill="url(#big-red-button-1)"
          />
          <path
            d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20ZM4.81942 20C4.81942 28.384 11.616 35.1806 20 35.1806C28.384 35.1806 35.1806 28.384 35.1806 20C35.1806 11.616 28.384 4.81942 20 4.81942C11.616 4.81942 4.81942 11.616 4.81942 20Z"
            fill="url(#big-red-button-2)"
          />
          <g filter="url(#big-red-button-3)">
            <path
              d="M36.5 20C36.5 24.3761 34.7616 28.5729 31.6673 31.6673C28.5729 34.7616 24.3761 36.5 20 36.5C15.6239 36.5 11.4271 34.7616 8.33274 31.6673C5.23839 28.5729 3.5 24.3761 3.5 20"
              stroke="url(#big-red-button-ya)"
              strokeOpacity="0.5"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#big-red-button-highlight-upper-edge)">
            <path
              d="M8.21985 5.39015C11.4832 2.56555 15.6528 1.00752 19.9687 1.00003C24.2847 0.992532 28.4597 2.53607 31.7328 5.34932"
              stroke="url(#big-red-button-5)"
              strokeOpacity="0.5"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ mixBlendMode: 'luminosity' }}
            />
          </g>
          <g mask="url(#outer-mask)">
            <g
              data-layer-name="the-button-itself"
              style={{
                // opacity: isActive ? 0.8 : 1,
                transformOrigin: 'center center',
                transform: `
                  scale(${isActive ? 0.95 : 1}, ${isActive ? 0.95 : 1})
                `,
              }}
            >
              <circle
                cx="20"
                cy="20"
                r="15"
                fill={isActive ? COLORS.red[500] : COLORS.red[300]}
              />
              <circle
                cx="20"
                cy="20"
                r="13"
                fill="url(#big-red-button-3d-effect)"
                style={{ mixBlendMode: 'hard-light' }}
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="big-red-button-3"
            x="2"
            y="18.5"
            width="36"
            height="19.5"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.5"
              result="effect1_foregroundBlur"
            />
          </filter>
          <filter
            id="big-red-button-highlight-upper-edge"
            x="5.21982"
            y="-2"
            width="29.513"
            height="10.3902"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur" />
          </filter>
          <linearGradient
            id="big-red-button-1"
            x1="20"
            y1="0"
            x2="20"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF2D1A" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="big-red-button-2"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(20 20) rotate(90) scale(20)"
          >
            <stop offset="0.773481" stopColor="#620000" />
            <stop offset="1" stopColor="#FF2D1A" />
          </radialGradient>
          <linearGradient
            id="big-red-button-ya"
            x1="40.7187"
            y1="20"
            x2="-1.25"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF0000" stopOpacity="0" />
            <stop offset="0.490056" stopColor="white" />
            <stop offset="1" stopColor="#FF0000" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="big-red-button-5"
            x1="1"
            y1="0"
            x2="39.5"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.25" />
            <stop offset="0.508287" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.44" />
          </linearGradient>
          <linearGradient
            id="big-red-button-3d-effect"
            x1="20"
            y1="8"
            x2="20"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopOpacity="0.33" />
            <stop offset="1" stopColor="white" stopOpacity="0.21" />
          </linearGradient>
        </defs>
      </Svg>
    </Button>
  );
};

const Button = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 100px;
  border: 4px solid white;
`;

export default BigRedButton;
