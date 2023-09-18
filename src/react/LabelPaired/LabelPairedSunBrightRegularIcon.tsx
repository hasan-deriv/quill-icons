import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSunBrightRegularIcon = (
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
        d='M8 4c.313.02.48.188.5.5V7c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5V4.5c.02-.313.188-.48.5-.5Zm-8 8c.02-.313.188-.48.5-.5H3c.313.02.48.188.5.5-.02.313-.188.48-.5.5H.5c-.313-.02-.48-.188-.5-.5Zm12.5 0c.02-.313.188-.48.5-.5h2.5c.313.02.48.188.5.5-.02.313-.188.48-.5.5H13c-.313-.02-.48-.188-.5-.5ZM8 16.5c.313.02.48.188.5.5v2.5c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5V17c.02-.313.188-.48.5-.5ZM2.344 6.344c.229-.188.469-.188.719 0l1.75 1.781c.187.23.187.458 0 .688-.23.208-.459.208-.688 0l-1.781-1.75c-.188-.25-.188-.49 0-.72Zm0 11.312c-.188-.229-.188-.468 0-.718l1.781-1.75c.23-.188.458-.188.688 0 .208.229.208.458 0 .687l-1.75 1.781c-.25.188-.49.188-.72 0Zm8.844-8.843c-.188-.23-.188-.459 0-.688l1.75-1.781c.25-.188.49-.188.718 0 .188.229.188.468 0 .718l-1.781 1.75c-.23.188-.458.188-.688 0Zm0 6.374c.229-.187.458-.187.687 0l1.781 1.75c.188.25.188.49 0 .72-.229.187-.469.187-.719 0l-1.75-1.782c-.187-.23-.187-.458 0-.688ZM10.5 12c-.02-.938-.438-1.656-1.25-2.156-.833-.459-1.667-.459-2.5 0-.813.5-1.23 1.219-1.25 2.156.02.938.438 1.656 1.25 2.156.833.459 1.667.459 2.5 0 .813-.5 1.23-1.219 1.25-2.156Zm-6 0c0-.625.156-1.208.469-1.75.312-.542.74-.969 1.281-1.281A3.443 3.443 0 0 1 8 8.5c.625 0 1.208.156 1.75.469.542.312.969.74 1.281 1.281.313.542.469 1.125.469 1.75s-.156 1.208-.469 1.75c-.312.542-.74.969-1.281 1.281A3.443 3.443 0 0 1 8 15.5a3.443 3.443 0 0 1-1.75-.469 3.436 3.436 0 0 1-1.281-1.281A3.444 3.444 0 0 1 4.5 12Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightRegularIcon);
export default ForwardRef;
