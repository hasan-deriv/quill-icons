import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeDerivedIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M16 3.333C9.013 3.333 3.333 9.013 3.333 16S9.013 28.667 16 28.667 28.667 22.987 28.667 16 22.987 3.333 16 3.333Zm0 24c-1.173 0-2.427-1.96-3.173-5.16A30.776 30.776 0 0 1 16 22c1.08 0 2.147.067 3.173.173-.746 3.187-2 5.16-3.173 5.16Zm0-6.666c-1.187 0-2.333.066-3.44.2a30.077 30.077 0 0 1-.387-4.2h7.64a26.661 26.661 0 0 1-.386 4.2 31.82 31.82 0 0 0-3.44-.2H16Zm0-16c1.173 0 2.427 1.96 3.173 5.16A30.79 30.79 0 0 1 16 10c-1.08 0-2.147-.067-3.173-.173.746-3.187 2-5.16 3.173-5.16Zm0 6.666c1.187 0 2.333-.066 3.44-.2.213 1.267.347 2.667.387 4.2h-7.64c.026-1.52.16-2.933.386-4.2 1.107.12 2.254.2 3.44.2H16Zm-11.293 4c.12-2.106.813-4.053 1.933-5.693 1.28.587 2.867 1.027 4.627 1.32a29.3 29.3 0 0 0-.4 4.373h-6.16Zm6.133 1.334c.027 1.48.173 2.973.4 4.373-1.76.293-3.333.733-4.627 1.32-1.12-1.64-1.8-3.6-1.933-5.693h6.16Zm16.453 0a11.189 11.189 0 0 1-1.933 5.693c-1.28-.587-2.867-1.027-4.627-1.32.24-1.4.374-2.893.4-4.373h6.16Zm-6.146-1.334a31.175 31.175 0 0 0-.4-4.373c1.76-.293 3.333-.733 4.626-1.32 1.12 1.64 1.8 3.6 1.934 5.693h-6.16ZM24.52 8.56c-1.133.467-2.507.84-4.04 1.08-.427-1.867-1.04-3.507-1.84-4.653 2.32.56 4.36 1.826 5.88 3.56v.013ZM13.347 4.987c-.8 1.133-1.414 2.773-1.84 4.653-1.52-.24-2.907-.613-4.04-1.08A11.285 11.285 0 0 1 13.347 5v-.013ZM7.467 23.44c1.133-.467 2.506-.84 4.04-1.08.426 1.867 1.04 3.507 1.84 4.653a11.372 11.372 0 0 1-5.88-3.56v-.013ZM18.653 27c.8-1.133 1.414-2.773 1.84-4.653 1.52.24 2.907.613 4.04 1.08a11.286 11.286 0 0 1-5.88 3.56V27Z'
    />
  </svg>
);
const ForwardRef = forwardRef(IllustrativeDerivedIcon);
export default ForwardRef;
