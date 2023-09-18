import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleEnvelopeBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8 5.5c-1.188 0-2.27.292-3.25.875-.98.563-1.77 1.354-2.375 2.375A6.45 6.45 0 0 0 1.5 12c0 1.146.292 2.23.875 3.25.604 1.02 1.396 1.813 2.375 2.375.98.583 2.063.875 3.25.875 1.188 0 2.27-.292 3.25-.875.98-.563 1.77-1.354 2.375-2.375A6.45 6.45 0 0 0 14.5 12a6.45 6.45 0 0 0-.875-3.25c-.604-1.02-1.396-1.813-2.375-2.375C10.27 5.792 9.187 5.5 8 5.5ZM8 20c-1.458-.02-2.792-.375-4-1.063C2.792 18.23 1.812 17.25 1.062 16 .355 14.73 0 13.396 0 12s.354-2.73 1.063-4C1.813 6.75 2.792 5.77 4 5.062 5.208 4.375 6.542 4.021 8 4c1.458.02 2.792.375 4 1.063C13.208 5.77 14.188 6.75 14.938 8 15.646 9.27 16 10.604 16 12s-.354 2.73-1.063 4c-.75 1.25-1.729 2.23-2.937 2.938-1.208.687-2.542 1.041-4 1.062Zm-.219-8L4 9.906a.908.908 0 0 1 .313-.625A.935.935 0 0 1 5 9h6c.27 0 .5.083.688.25.187.188.291.406.312.656L8.219 12a.385.385 0 0 1-.219.063A3.003 3.003 0 0 1 7.781 12Zm.938.875L12 11.062V14a.974.974 0 0 1-.281.719A.974.974 0 0 1 11 15H5a.974.974 0 0 1-.719-.281A.974.974 0 0 1 4 14v-2.938l3.281 1.813c.23.104.469.156.719.156s.49-.052.719-.156Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEnvelopeBoldIcon);
export default ForwardRef;
