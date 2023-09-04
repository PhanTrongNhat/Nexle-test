import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const TwitterIcon = ({
  width,
  height,
  className,
  color = theme.colors.primary.main,
}: IconProps) => {
  const DEFAULT_WIDTH = '20';
  const DEFAULT_COLOR = '#f1f1f1';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || DEFAULT_WIDTH}
      height={height || DEFAULT_WIDTH}
      viewBox="0 0 15 14"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.768 1.27683C13.9426 1.1595 14.2336 1.1595 14.4083 1.27683C14.5829 1.39415 14.6993 1.6288 14.6411 1.86345C14.4665 2.68473 14.059 3.44734 13.4769 4.09263V4.38594C13.4769 7.61239 12.0799 10.3109 9.57697 11.7188C8.29639 12.4814 6.89939 12.8334 5.44418 12.8334C3.98896 12.8334 2.41734 12.4227 0.962126 11.6014C0.729292 11.4841 0.612875 11.1908 0.671083 10.9562C0.729292 10.7215 1.02033 10.5455 1.25317 10.5455C2.24271 10.5455 3.23225 10.3695 4.10538 9.95889C1.95167 8.60965 1.36958 6.73245 1.31138 5.26588C1.25317 3.56467 1.83525 2.15677 1.89346 2.0981C1.95167 1.92212 2.12629 1.74613 2.35913 1.74613C2.59196 1.74613 2.76659 1.80479 2.883 1.98078C3.87255 3.38868 5.38597 4.26862 7.07401 4.38594C7.07401 3.44734 7.48147 2.5674 8.23818 1.98078C9.46056 0.86619 11.265 0.924852 12.4292 1.98078C12.8949 1.80479 13.3605 1.57014 13.768 1.27683ZM12.2546 4.03397C12.2546 3.85798 12.3128 3.62333 12.4292 3.50601C12.4874 3.41801 12.5456 3.34468 12.6038 3.27136C12.662 3.19803 12.7202 3.1247 12.7784 3.0367C12.7202 3.06604 12.6475 3.0807 12.5747 3.09537C12.5019 3.11003 12.4292 3.1247 12.371 3.15403C12.1964 3.21269 11.9635 3.15403 11.7889 2.97804C11.0904 2.15677 9.7516 2.03944 8.93668 2.80205C8.47101 3.21269 8.23818 3.79932 8.23818 4.38594V4.97257C8.23818 5.26588 7.94714 5.5592 7.6561 5.5592C5.73522 5.61786 3.93076 4.85524 2.65017 3.56467C2.30092 5.03123 2.1845 7.9057 5.56059 9.43093C5.73522 9.48959 5.90984 9.66558 5.90984 9.90023C5.90984 10.1349 5.85163 10.3109 5.6188 10.4282C4.97851 10.8975 4.28001 11.1908 3.5233 11.4255C5.44417 11.8948 7.36505 11.6601 8.99489 10.7215C11.0904 9.48959 12.3128 7.20175 12.3128 4.38594C12.3128 4.26862 12.3128 4.15129 12.2546 4.03397Z"
        fill="black"
      />
      <mask
        id="mask0_6_322"
        maskUnits="userSpaceOnUse"
        x="0"
        y="1"
        width="15"
        height="12"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.768 1.27683C13.9426 1.1595 14.2336 1.1595 14.4083 1.27683C14.5829 1.39415 14.6993 1.6288 14.6411 1.86345C14.4665 2.68473 14.059 3.44734 13.4769 4.09263V4.38594C13.4769 7.61239 12.0799 10.3109 9.57697 11.7188C8.29639 12.4814 6.89939 12.8334 5.44418 12.8334C3.98896 12.8334 2.41734 12.4227 0.962126 11.6014C0.729292 11.4841 0.612875 11.1908 0.671083 10.9562C0.729292 10.7215 1.02033 10.5455 1.25317 10.5455C2.24271 10.5455 3.23225 10.3695 4.10538 9.95889C1.95167 8.60965 1.36958 6.73245 1.31138 5.26588C1.25317 3.56467 1.83525 2.15677 1.89346 2.0981C1.95167 1.92212 2.12629 1.74613 2.35913 1.74613C2.59196 1.74613 2.76659 1.80479 2.883 1.98078C3.87255 3.38868 5.38597 4.26862 7.07401 4.38594C7.07401 3.44734 7.48147 2.5674 8.23818 1.98078C9.46056 0.86619 11.265 0.924852 12.4292 1.98078C12.8949 1.80479 13.3605 1.57014 13.768 1.27683ZM12.2546 4.03397C12.2546 3.85798 12.3128 3.62333 12.4292 3.50601C12.4874 3.41801 12.5456 3.34468 12.6038 3.27136C12.662 3.19803 12.7202 3.1247 12.7784 3.0367C12.7202 3.06604 12.6475 3.0807 12.5747 3.09537C12.5019 3.11003 12.4292 3.1247 12.371 3.15403C12.1964 3.21269 11.9635 3.15403 11.7889 2.97804C11.0904 2.15677 9.7516 2.03944 8.93668 2.80205C8.47101 3.21269 8.23818 3.79932 8.23818 4.38594V4.97257C8.23818 5.26588 7.94714 5.5592 7.6561 5.5592C5.73522 5.61786 3.93076 4.85524 2.65017 3.56467C2.30092 5.03123 2.1845 7.9057 5.56059 9.43093C5.73522 9.48959 5.90984 9.66558 5.90984 9.90023C5.90984 10.1349 5.85163 10.3109 5.6188 10.4282C4.97851 10.8975 4.28001 11.1908 3.5233 11.4255C5.44417 11.8948 7.36505 11.6601 8.99489 10.7215C11.0904 9.48959 12.3128 7.20175 12.3128 4.38594C12.3128 4.26862 12.3128 4.15129 12.2546 4.03397Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_6_322)">
        <rect x="0.65625" width="14" height="14" fill="white" />
      </g>
    </svg>
  );
};