import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarXlRegularIcon = (
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
      <path d='M16.5 27V15h-5.25A2.22 2.22 0 0 1 9 12.75V7.5H3c-.844 0-1.5.703-1.5 1.5v18c0 .844.656 1.5 1.5 1.5h12c.797 0 1.5-.656 1.5-1.5m-.047-13.5c-.047-.094-.094-.234-.187-.328l-5.438-5.438c-.094-.093-.234-.14-.328-.187v5.203c0 .422.328.75.75.75zM0 9c0-1.64 1.313-3 3-3h7.313c.562 0 1.171.281 1.593.703l5.39 5.39c.423.423.704 1.032.704 1.595V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm3 .75c0-.375.328-.75.75-.75h3c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-3A.74.74 0 0 1 3 9.75m0 3c0-.375.328-.75.75-.75h3c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-3a.74.74 0 0 1-.75-.75m6.75 4.688v.656c.375.047.75.093 1.078.187a.74.74 0 0 1 .563.89.74.74 0 0 1-.891.563c-.516-.093-1.031-.187-1.547-.187-.375-.047-.844.047-1.125.234-.281.14-.328.282-.328.422 0 .094 0 .188.281.328.328.188.797.282 1.407.469.515.14 1.171.328 1.687.61.563.28 1.078.843 1.125 1.687 0 .89-.516 1.453-1.125 1.828-.328.188-.75.281-1.125.375v.61c0 .421-.375.75-.75.75a.74.74 0 0 1-.75-.75v-.657a11 11 0 0 1-1.453-.375c-.094-.047-.188-.047-.281-.094-.375-.093-.61-.515-.516-.937.14-.375.563-.61.938-.516.14.047.234.094.328.14C7.922 23.86 8.438 24 9 24c.469.047.89-.047 1.172-.187.234-.141.328-.329.328-.516 0-.094-.047-.235-.328-.375-.328-.188-.797-.328-1.406-.469l-.047-.047c-.516-.14-1.125-.281-1.64-.562C6.562 21.562 6 21.047 6 20.204c0-.892.563-1.454 1.125-1.782.375-.188.75-.281 1.125-.328v-.657a.74.74 0 0 1 .75-.75.74.74 0 0 1 .75.75' />
    </g>
    <defs>
      <clipPath id='58dfa08ca26e66a322c1744140c82ead__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarXlRegularIcon);
export default ForwardRef;
