import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const FlagBarbadosIcon = (
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
    <path fill='#002281' d='M16 0h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6z' />
    <path fill='#FFC800' d='M16 0H8v16h8z' />
    <path
      fill='#7F6300'
      fillRule='evenodd'
      d='M11.5 10.5h1v1h-1zm2-2h1v1h-1zm-4 0h1v1h-1z'
      clipRule='evenodd'
    />
    <path
      fill='#333'
      fillRule='evenodd'
      d='M12.5 8.5v-4h-1v4h-1v1h1v1h1v-1h1v-1zm1-3h1v3h-1zm-4 0h1v3h-1z'
      clipRule='evenodd'
    />
    <path fill='#002281' d='M2 0h6v16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagBarbadosIcon);
export default ForwardRef;
