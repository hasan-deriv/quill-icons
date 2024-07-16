import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.75 7.5h-9c-.422 0-.75.375-.75.75v1.5c0 .422.328.75.75.75h9c.375 0 .75-.328.75-.75v-1.5c0-.375-.375-.75-.75-.75m-9-1.5h9C13.969 6 15 7.031 15 8.25v1.5A2.25 2.25 0 0 1 12.75 12H9v1.5h10.875c1.5 0 2.766 1.125 2.953 2.578l1.125 7.735c0 .14.047.28.047.421V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-3.188l1.125-7.734c.188-1.453 1.453-2.578 2.953-2.578H7.5V12H3.75A2.22 2.22 0 0 1 1.5 9.75v-1.5A2.25 2.25 0 0 1 3.75 6M1.5 27c0 .844.656 1.5 1.5 1.5h18c.797 0 1.5-.656 1.5-1.5v-1.5h-21zm19.875-10.687c-.14-.75-.75-1.313-1.5-1.313H4.078c-.75 0-1.36.563-1.5 1.313L1.5 24h20.953zm-16.125.562c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125M8.625 18c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125M7.5 20.625c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 7.5 22.875c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125M13.125 18c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125M12 20.625c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 12 22.875c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125M17.625 18c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125M16.5 20.625c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='921c1fafd2a1dbb2d1abd08edc6ea98d__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterXlRegularIcon);
export default ForwardRef;
