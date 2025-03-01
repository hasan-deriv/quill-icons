import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagParaguayIcon = (
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
      fill='#124BBA'
      fillRule='evenodd'
      d='M0 13.995C0 15.102.897 16 2.005 16h19.99A2.003 2.003 0 0 0 24 13.995V11H0v2.995Z'
      clipRule='evenodd'
    />
    <path fill='#fff' d='M24 5H0v6h24V5Z' />
    <path
      fill='#E33F39'
      fillRule='evenodd'
      d='M0 5h24V2.005A2.004 2.004 0 0 0 21.995 0H2.005A2.003 2.003 0 0 0 0 2.005V5Z'
      clipRule='evenodd'
    />
    <path
      fill='#3D3D3D'
      fillRule='evenodd'
      d='M12 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9.7 8a2.3 2.3 0 1 1 4.6 0 2.3 2.3 0 0 1-4.6 0Z'
      clipRule='evenodd'
    />
    <path
      fill='#06A86E'
      fillRule='evenodd'
      d='M11.118 6.777a.15.15 0 0 1-.013.212 1.35 1.35 0 1 0 1.81.019.15.15 0 0 1 .203-.221 1.65 1.65 0 1 1-2.212-.023.15.15 0 0 1 .212.013Z'
      clipRule='evenodd'
    />
    <path
      fill='#FFD34F'
      d='m12 8.325-.351.185a.05.05 0 0 1-.073-.053l.067-.391-.284-.277a.05.05 0 0 1 .028-.085l.393-.057.175-.356a.05.05 0 0 1 .09 0l.175.356.393.057a.05.05 0 0 1 .028.085l-.284.277.067.39a.05.05 0 0 1-.073.054L12 8.325Z'
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
const ForwardRef = forwardRef(FlagParaguayIcon);
export default ForwardRef;
