import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOfframpSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 7.25c0-1.914 1.559-3.5 3.5-3.5 1.914 0 3.5 1.586 3.5 3.5 0 .355-.055.684-.164 1.012l2.652 2.652c.328-.11.657-.164 1.012-.164 1.914 0 3.5 1.586 3.5 3.5 0 1.941-1.586 3.5-3.5 3.5H4.188A2.16 2.16 0 0 1 2 15.563zm.875 2.324v5.989c0 .738.574 1.312 1.313 1.312h5.988C9.437 16.246 9 15.316 9 14.25c0-1.258.656-2.352 1.64-2.953L8.454 9.109A3.45 3.45 0 0 1 5.5 10.75c-1.066 0-1.996-.437-2.625-1.176M5.5 4.625c-.957 0-1.832.52-2.297 1.313a2.7 2.7 0 0 0 0 2.652 2.67 2.67 0 0 0 2.27 1.312c.957 0 1.804-.52 2.297-1.312a2.65 2.65 0 0 0 0-2.625c-.465-.82-1.34-1.313-2.27-1.34m4.484 1.887a.463.463 0 0 1 .63 0L12.5 8.398v-.71a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v1.75a.42.42 0 0 1-.273.41c-.165.082-.356.027-.493-.082L9.984 7.14a.463.463 0 0 1 0-.63m2.516 5.113c-.355 0-.656.082-.957.191h-.027a2.626 2.626 0 1 0 .984-.191M5.035 5.199v.602h.602v-.602h.574v.602c.219 0 .41.082.574.219a.867.867 0 0 1 .055 1.23.85.85 0 0 1 .246.602c0 .492-.41.875-.875.875V9.3h-.574v-.574h-.602V9.3h-.574v-.574h-.574v-.602h.574v-1.75h-.574v-.574h.574v-.602zm1.176 2.352H5.035v.574h1.176c.164 0 .3-.137.3-.3 0-.138-.136-.274-.3-.274m0-1.176H5.035v.602h1.176c.164 0 .3-.137.3-.301s-.136-.301-.3-.301m6.644 5.688v.328c.465.136.766.574.766 1.066v.11h-.71v-.11c0-.219-.192-.41-.438-.41a.42.42 0 0 0-.41.41c0 .246.19.438.41.438.629 0 1.148.52 1.148 1.148 0 .492-.3.93-.766 1.066v.328h-.738v-.328c-.465-.136-.765-.574-.765-1.066v-.11h.71v.11c0 .219.192.41.41.41.247 0 .438-.191.438-.41a.43.43 0 0 0-.437-.437c-.63 0-1.121-.52-1.121-1.149 0-.492.3-.93.765-1.066v-.328z' />
    </g>
    <defs>
      <clipPath id='4391ac442e5d3bb09016dc147b1bd9d7__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOfframpSmRegularIcon);
export default ForwardRef;
