import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarXlFillIcon = (
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
      <path d='M3 6h7.5v6c0 .844.656 1.5 1.5 1.5h6V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3m9 0 6 6h-6zM3 9.75c0 .422.328.75.75.75h3c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75h-3c-.422 0-.75.375-.75.75m0 3c0 .422.328.75.75.75h3c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75h-3c-.422 0-.75.375-.75.75m6 3.375c-.422 0-.75.375-.75.75v.844c-.422.047-.797.187-1.172.375-.61.375-1.078.984-1.078 1.922 0 .843.469 1.406 1.031 1.734.516.328 1.125.516 1.64.656h.095c.562.188 1.03.328 1.359.563.281.14.328.328.328.515.047.328-.094.516-.328.657-.281.187-.703.28-1.125.234-.562 0-1.078-.187-1.687-.375-.141-.047-.235-.094-.329-.14-.421-.094-.843.093-.984.468-.094.422.094.844.469.985a.9.9 0 0 1 .328.093c.422.14.89.328 1.453.422v.797c0 .422.328.75.75.75.375 0 .75-.328.75-.75v-.797a3 3 0 0 0 1.172-.422c.61-.375 1.078-1.031 1.078-1.922-.047-.89-.516-1.453-1.078-1.828-.516-.328-1.172-.515-1.688-.656h-.046c-.61-.187-1.032-.328-1.36-.516-.281-.187-.328-.328-.328-.468 0-.282.094-.47.375-.61.281-.187.703-.281 1.078-.281.469.047.985.14 1.5.281.422.094.844-.14.938-.562.093-.375-.141-.797-.516-.89-.375-.095-.75-.188-1.125-.235v-.844c0-.375-.375-.75-.75-.75' />
    </g>
    <defs>
      <clipPath id='a426f94d4d17466cbb90235d3fed2eba__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarXlFillIcon);
export default ForwardRef;
