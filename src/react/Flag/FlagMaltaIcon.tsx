import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagMaltaIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M2.009 0A2.003 2.003 0 0 0 0 1.994v12.012C0 15.106.9 16 2.009 16H12V0H2.009ZM6 2H3v1H2v3h1v1h3V6h1V3H6V2Z'
      clipRule='evenodd'
    />
    <path fill='#DE233C' d='M6 2H3v1H2v3h1v1h3V6h1V3H6V2Z' />
    <path fill='#333' d='M5.5 2.5h-2v1h-1v2h1v1h2v-1h1v-2h-1v-1Z' />
    <path fill='#CCCCCD' d='M5 3H4v1H3v1h1v1h1V5h1V4H5V3Z' />
    <path
      fill='#DE233C'
      fillRule='evenodd'
      d='M12 16h9.991c1.11 0 2.009-.895 2.009-1.994V1.994A2.003 2.003 0 0 0 21.991 0H12v16Z'
      clipRule='evenodd'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagMaltaIcon);
export default ForwardRef;
