import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOfframpSmFillIcon = (
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
      <path d='M5.035 6.375v.602h1.176c.164 0 .3-.137.3-.301s-.136-.301-.3-.301zm0 1.176v.574h1.176c.164 0 .3-.137.3-.3 0-.138-.136-.274-.3-.274zm7.328 2.98c1.996 0 3.637 1.614 3.637 3.61s-1.64 3.609-3.637 3.609H4.324A2.32 2.32 0 0 1 2 15.426v-8.04C2 5.392 3.613 3.75 5.61 3.75c1.995 0 3.609 1.64 3.609 3.637 0 .3-.028.601-.11.875l2.38 2.379c.273-.082.573-.11.874-.11m-9.05 4.895c0 .547.464 1.011 1.011 1.011h5.25c-.52-.601-.82-1.421-.82-2.296 0-1.176.574-2.243 1.476-2.899L8.509 9.52a3.55 3.55 0 0 1-2.899 1.476c-.875 0-1.695-.3-2.296-.82zM5.034 5.8v-.602h-.574v.602h-.574v.574h.574v1.75h-.574v.602h.574V9.3h.574v-.574h.602V9.3h.574v-.574a.88.88 0 0 0 .875-.875.85.85 0 0 0-.246-.602.867.867 0 0 0-.055-1.23.88.88 0 0 0-.574-.22v-.6h-.574v.6zm7.82 6.59v-.328h-.738v.328c-.465.136-.765.574-.765 1.066 0 .629.492 1.148 1.12 1.148.247 0 .438.192.438.438 0 .219-.191.41-.437.41a.42.42 0 0 1-.41-.41v-.11h-.711v.11c0 .492.3.93.765 1.066v.328h.738v-.328c.465-.136.766-.574.766-1.066 0-.629-.52-1.148-1.148-1.148-.22 0-.41-.192-.41-.438a.42.42 0 0 1 .41-.41c.246 0 .437.191.437.41v.11h.711v-.11c0-.492-.3-.93-.766-1.066m.602-5.442v2.543a.65.65 0 0 1-.41.602.63.63 0 0 1-.711-.137L9.793 7.414c-.246-.246-.246-.656 0-.93a.68.68 0 0 1 .93 0l1.422 1.422V6.95c0-.355.273-.656.656-.656.355 0 .656.3.656.656' />
    </g>
    <defs>
      <clipPath id='45f0f808ef4a0de2a2820c67caaf1a68__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOfframpSmFillIcon);
export default ForwardRef;
