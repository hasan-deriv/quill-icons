import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSixXlFillIcon = (
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
      <path d='M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m12-.75c.797 0 1.5.469 1.922 1.125.422.703.422 1.594 0 2.25-.422.703-1.125 1.125-1.922 1.125-.844 0-1.547-.422-1.969-1.125-.422-.656-.422-1.547 0-2.25.422-.656 1.125-1.125 1.969-1.125M7.5 19.5a4.501 4.501 0 0 0 9 0 4.485 4.485 0 0 0-3.281-4.312l1.36-1.172a1.17 1.17 0 0 0 .14-1.594 1.17 1.17 0 0 0-1.594-.14l-3.844 3.28A5.26 5.26 0 0 0 7.5 19.5' />
    </g>
    <defs>
      <clipPath id='dfee63f81cd4f5f845e54c08c8d549ca__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSixXlFillIcon);
export default ForwardRef;
