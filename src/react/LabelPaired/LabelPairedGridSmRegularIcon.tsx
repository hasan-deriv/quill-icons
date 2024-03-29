import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGridSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.781 5.5H1.47a.216.216 0 0 0-.219.219V7.03c0 .137.082.219.219.219H2.78c.11 0 .219-.082.219-.219V5.72c0-.11-.11-.219-.219-.219M1.47 4.625H2.78c.602 0 1.094.492 1.094 1.094V7.03a1.08 1.08 0 0 1-1.094 1.094H1.47A1.063 1.063 0 0 1 .375 7.031V5.72a1.08 1.08 0 0 1 1.094-1.094m1.312 5.25H1.47a.216.216 0 0 0-.219.219v1.312c0 .137.082.219.219.219H2.78c.11 0 .219-.082.219-.219v-1.312c0-.11-.11-.219-.219-.219M1.47 9H2.78c.602 0 1.094.492 1.094 1.094v1.312A1.08 1.08 0 0 1 2.781 12.5H1.47a1.063 1.063 0 0 1-1.094-1.094v-1.312A1.08 1.08 0 0 1 1.469 9m0 5.25a.216.216 0 0 0-.219.219v1.312c0 .137.082.219.219.219H2.78c.11 0 .219-.082.219-.219V14.47c0-.11-.11-.219-.219-.219zm-1.094.219a1.08 1.08 0 0 1 1.094-1.094H2.78c.602 0 1.094.492 1.094 1.094v1.312a1.08 1.08 0 0 1-1.094 1.094H1.47a1.063 1.063 0 0 1-1.094-1.094zM7.156 5.5H5.844a.216.216 0 0 0-.219.219V7.03c0 .137.082.219.219.219h1.312c.11 0 .219-.082.219-.219V5.72c0-.11-.11-.219-.219-.219m-1.312-.875h1.312c.602 0 1.094.492 1.094 1.094V7.03a1.08 1.08 0 0 1-1.094 1.094H5.844A1.063 1.063 0 0 1 4.75 7.031V5.72a1.08 1.08 0 0 1 1.094-1.094m0 5.25a.216.216 0 0 0-.219.219v1.312c0 .137.082.219.219.219h1.312c.11 0 .219-.082.219-.219v-1.312c0-.11-.11-.219-.219-.219zm-1.094.219A1.08 1.08 0 0 1 5.844 9h1.312c.602 0 1.094.492 1.094 1.094v1.312A1.08 1.08 0 0 1 7.156 12.5H5.844a1.063 1.063 0 0 1-1.094-1.094zm2.406 4.156H5.844a.216.216 0 0 0-.219.219v1.312c0 .137.082.219.219.219h1.312c.11 0 .219-.082.219-.219V14.47c0-.11-.11-.219-.219-.219m-1.312-.875h1.312c.602 0 1.094.492 1.094 1.094v1.312a1.08 1.08 0 0 1-1.094 1.094H5.844a1.063 1.063 0 0 1-1.094-1.094V14.47a1.08 1.08 0 0 1 1.094-1.094M10.219 5.5a.216.216 0 0 0-.219.219V7.03c0 .137.082.219.219.219h1.312c.11 0 .219-.082.219-.219V5.72c0-.11-.11-.219-.219-.219zm-1.094.219a1.08 1.08 0 0 1 1.094-1.094h1.312c.602 0 1.094.492 1.094 1.094V7.03a1.08 1.08 0 0 1-1.094 1.094H10.22a1.063 1.063 0 0 1-1.094-1.094zm2.406 4.156H10.22a.216.216 0 0 0-.219.219v1.312c0 .137.082.219.219.219h1.312c.11 0 .219-.082.219-.219v-1.312c0-.11-.11-.219-.219-.219M10.22 9h1.312c.602 0 1.094.492 1.094 1.094v1.312a1.08 1.08 0 0 1-1.094 1.094H10.22a1.063 1.063 0 0 1-1.094-1.094v-1.312A1.08 1.08 0 0 1 10.219 9m0 5.25a.216.216 0 0 0-.219.219v1.312c0 .137.082.219.219.219h1.312c.11 0 .219-.082.219-.219V14.47c0-.11-.11-.219-.219-.219zm-1.094.219a1.08 1.08 0 0 1 1.094-1.094h1.312c.602 0 1.094.492 1.094 1.094v1.312a1.08 1.08 0 0 1-1.094 1.094H10.22a1.063 1.063 0 0 1-1.094-1.094z' />
    </g>
    <defs>
      <clipPath id='776d2609ffd49a2a031459570c151196__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGridSmRegularIcon);
export default ForwardRef;
