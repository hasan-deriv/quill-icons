import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightXlRegularIcon = (
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
      <path d='M12 6c.375 0 .75.375.75.75v3.75c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V6.75c0-.375.328-.75.75-.75M0 18c0-.375.328-.75.75-.75H4.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H.75A.74.74 0 0 1 0 18m18.75 0c0-.375.328-.75.75-.75h3.75c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H19.5a.74.74 0 0 1-.75-.75M12 24.75c.375 0 .75.375.75.75v3.75c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V25.5c0-.375.328-.75.75-.75M3.516 9.516a.736.736 0 0 1 1.03 0l2.673 2.672c.281.28.281.75 0 1.078-.282.28-.797.28-1.078 0l-2.625-2.672c-.328-.281-.328-.75 0-1.078m0 16.968a.663.663 0 0 1 0-1.03L6.14 22.78c.28-.281.797-.281 1.078 0s.281.797 0 1.078l-2.672 2.625a.663.663 0 0 1-1.031 0m13.218-13.218c-.28-.328-.28-.797 0-1.078l2.672-2.672c.282-.282.75-.282 1.078 0 .282.328.282.797 0 1.078l-2.672 2.672c-.28.28-.75.28-1.078 0m0 9.515c.328-.281.797-.281 1.078 0l2.672 2.672a.736.736 0 0 1 0 1.031c-.328.328-.797.328-1.078 0l-2.672-2.625c-.28-.28-.28-.797 0-1.078M15.75 18c0-1.312-.75-2.531-1.875-3.234-1.172-.657-2.625-.657-3.75 0C8.953 15.469 8.25 16.688 8.25 18c0 1.36.703 2.578 1.875 3.281 1.125.657 2.578.657 3.75 0C15 20.578 15.75 19.36 15.75 18m-9 0c0-1.875.984-3.562 2.625-4.5 1.594-.984 3.61-.984 5.25 0 1.594.938 2.625 2.625 2.625 4.5 0 1.922-1.031 3.61-2.625 4.547-1.64.984-3.656.984-5.25 0C7.735 21.609 6.75 19.922 6.75 18' />
    </g>
    <defs>
      <clipPath id='75949a8a40ca6166e4a2b3f5ff6ed001__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightXlRegularIcon);
export default ForwardRef;
