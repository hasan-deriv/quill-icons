import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzleSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.75 3.75h3.5c.957 0 1.75.793 1.75 1.75v3.063c0 .492-.41.874-.875.874h-.875c0 .739-.602 1.313-1.312 1.313a1.296 1.296 0 0 1-1.313-1.312H8.75a.864.864 0 0 1-.875-.876v-.656c0-.465.383-.875.875-.875h.438a.45.45 0 0 0 .437-.437.47.47 0 0 0-.437-.438H8.75a.864.864 0 0 1-.875-.875v-.656c0-.465.383-.875.875-.875m0 .875v.656h.438c.71 0 1.312.602 1.312 1.313 0 .738-.602 1.312-1.312 1.312H8.75v.657h1.313A.47.47 0 0 1 10.5 9v.438c0 .246.191.437.438.437a.45.45 0 0 0 .437-.437V9a.45.45 0 0 1 .438-.437h1.312V5.5a.9.9 0 0 0-.875-.875zm-7 .875h3.938a.9.9 0 0 1 .875.875v4.813h.875a.9.9 0 0 1 .875.874v.438c0 .246.19.438.437.438a.45.45 0 0 0 .438-.438v-.437c0-.465.382-.876.874-.876h1.313a.9.9 0 0 1 .875.876V16c0 .984-.793 1.75-1.75 1.75H1.75C.766 17.75 0 16.984 0 16V7.25C0 6.293.766 5.5 1.75 5.5m3.938.875H1.75a.88.88 0 0 0-.875.875v3.938h1.313v-.438c0-.71.574-1.312 1.312-1.312.71 0 1.313.601 1.313 1.312v.438h.875zm-3.5 5.688H.875V16c0 .492.383.875.875.875h3.938v-1.312H5.25a1.296 1.296 0 0 1-1.312-1.313c0-.71.574-1.312 1.312-1.312h.438v-.876h-.875a.864.864 0 0 1-.875-.874v-.438a.47.47 0 0 0-.438-.437.45.45 0 0 0-.437.437v.438c0 .492-.41.874-.876.874m4.374 3.5v1.312H10.5a.88.88 0 0 0 .875-.875v-3.937h-1.312v.437c0 .738-.602 1.313-1.313 1.313A1.296 1.296 0 0 1 7.438 12.5v-.437h-.875v.874c0 .493-.41.876-.875.876H5.25a.45.45 0 0 0-.437.437c0 .246.19.438.437.438h.438a.9.9 0 0 1 .875.874' />
    </g>
    <defs>
      <clipPath id='eddee6e008b0312626a53e846dfbf80e__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzleSmRegularIcon);
export default ForwardRef;
