import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedRightFromBracketRegularIcon = (
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
        d='m14.969 11.938-4.125-3.876C10.802 8.021 10.76 8 10.719 8a.244.244 0 0 0-.219.219V10c-.02.313-.188.48-.5.5H6.25c-.146.02-.23.104-.25.25v2.5c.02.146.104.23.25.25H10c.313.02.48.188.5.5v1.781c.02.125.094.198.219.219.041 0 .083-.02.125-.063l4.125-3.874c.02-.021.031-.042.031-.063 0-.02-.01-.042-.031-.063ZM16 12c0 .313-.115.573-.344.781l-4.125 3.906c-.229.209-.5.313-.812.313-.354 0-.646-.115-.875-.344-.23-.229-.344-.52-.344-.875V14.5H6.25c-.354 0-.646-.125-.875-.375-.25-.23-.375-.52-.375-.875v-2.5c0-.354.125-.646.375-.875.23-.25.52-.375.875-.375H9.5V8.219c0-.354.115-.646.344-.875.229-.23.52-.344.875-.344.312 0 .583.115.812.344l4.125 3.875c.23.208.344.469.344.781ZM5.5 6h-3a1.63 1.63 0 0 0-1.063.438A1.63 1.63 0 0 0 1 7.5v9c.02.417.167.77.438 1.063.291.27.645.416 1.062.437h3c.313.02.48.188.5.5-.02.313-.188.48-.5.5h-3c-.708-.02-1.302-.26-1.781-.719C.26 17.802.02 17.208 0 16.5v-9c.02-.708.26-1.302.719-1.781C1.198 5.26 1.792 5.02 2.5 5h3c.313.02.48.188.5.5-.02.313-.188.48-.5.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketRegularIcon);
export default ForwardRef;
