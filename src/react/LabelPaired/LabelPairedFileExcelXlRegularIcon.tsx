import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15 28.5c.797 0 1.5-.656 1.5-1.5V15h-5.25A2.22 2.22 0 0 1 9 12.75V7.5H3c-.844 0-1.5.703-1.5 1.5v18c0 .844.656 1.5 1.5 1.5zm-3.75-15h5.203c-.047-.094-.094-.234-.187-.328l-5.438-5.438c-.094-.093-.234-.14-.328-.187v5.203c0 .422.328.75.75.75M3 6h7.313c.562 0 1.171.281 1.593.703l5.39 5.39c.423.423.704 1.032.704 1.595V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3m3.984 11.578L9 20.484l1.969-2.906c.281-.328.75-.422 1.078-.187s.422.703.187 1.078L9.891 21.75l2.343 3.328c.235.375.141.797-.187 1.078-.375.235-.797.14-1.078-.187L9 23.062 6.984 25.97c-.234.328-.703.422-1.078.187-.328-.281-.422-.75-.187-1.078l2.343-3.328-2.343-3.281c-.235-.375-.14-.844.187-1.078.375-.235.844-.141 1.078.187' />
    </g>
    <defs>
      <clipPath id='916ac6cf07f79a1756c412489ffcedf8__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelXlRegularIcon);
export default ForwardRef;
