import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserCheckLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.75 6.75c-1.367 0-2.578.742-3.281 1.875-.664 1.172-.664 2.617 0 3.75.703 1.172 1.914 1.875 3.281 1.875 1.328 0 2.54-.703 3.242-1.875.664-1.133.664-2.578 0-3.75C11.29 7.492 10.078 6.75 8.75 6.75m0 8.75A4.97 4.97 0 0 1 4.414 13c-.898-1.523-.898-3.437 0-5 .899-1.523 2.54-2.5 4.336-2.5 1.758 0 3.398.977 4.297 2.5.898 1.563.898 3.477 0 5a4.96 4.96 0 0 1-4.297 2.5m-1.797 3.125c-3.125 0-5.664 2.54-5.703 5.625h15c-.078-3.086-2.617-5.625-5.742-5.625zm0-1.25h3.555a6.985 6.985 0 0 1 6.992 6.992c0 .625-.547 1.133-1.172 1.133H1.133A1.134 1.134 0 0 1 0 24.367c0-3.867 3.086-6.992 6.953-6.992m17.852-4.531-5 5a.66.66 0 0 1-.899 0l-2.5-2.5a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0l2.07 2.07 4.531-4.57a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899' />
    </g>
    <defs>
      <clipPath id='73f5c4072024c012a930e92f36eb0c08__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserCheckLgRegularIcon);
export default ForwardRef;
