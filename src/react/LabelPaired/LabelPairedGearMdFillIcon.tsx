import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGearMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.469 9.219c.125.281.031.562-.188.781l-1.344 1.219c.032.25.032.531.032.781 0 .281 0 .563-.031.813l1.343 1.218c.219.188.313.5.188.781A6.5 6.5 0 0 1 15 15.876l-.156.25c-.219.344-.438.688-.688.969-.187.25-.5.312-.781.218l-1.719-.53a8.6 8.6 0 0 1-1.375.78l-.406 1.782a.74.74 0 0 1-.562.562 9.4 9.4 0 0 1-2.657 0 .74.74 0 0 1-.562-.562l-.407-1.782a7.4 7.4 0 0 1-1.375-.78l-1.718.53c-.281.094-.594.032-.781-.187-.25-.312-.47-.656-.688-1l-.156-.25A6.5 6.5 0 0 1 .5 14.813c-.125-.282-.031-.563.188-.782l1.343-1.219C2 12.563 2 12.283 2 12c0-.25 0-.531.031-.781L.687 10C.47 9.781.376 9.5.5 9.219c.125-.375.281-.719.469-1.063l.156-.25c.219-.343.438-.687.688-1 .187-.218.5-.281.78-.187l1.72.531c.437-.312.906-.594 1.375-.781l.406-1.782a.74.74 0 0 1 .562-.562C7.094 4.063 7.531 4 8 4c.438 0 .875.063 1.313.125.28.031.5.281.562.563l.406 1.78c.5.188.938.47 1.375.782l1.719-.531c.281-.094.594-.032.781.187.25.313.469.657.688 1l.156.25c.188.344.344.688.5 1.063zM8 14.5c.875 0 1.688-.469 2.156-1.25.438-.75.438-1.719 0-2.5C9.687 10 8.875 9.5 8 9.5c-.906 0-1.719.5-2.187 1.25-.438.781-.438 1.75 0 2.5A2.53 2.53 0 0 0 8 14.5' />
    </g>
    <defs>
      <clipPath id='3d3b99aeedbd2b6e9d7df2f7e905e6ff__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearMdFillIcon);
export default ForwardRef;
