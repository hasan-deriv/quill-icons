import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={36}
    viewBox='0 0 12 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 12.75c-.844 0-1.547-.422-1.969-1.125-.422-.656-.422-1.547 0-2.25C.703 8.719 1.406 8.25 2.25 8.25c.797 0 1.5.469 1.922 1.125.422.703.422 1.594 0 2.25-.422.703-1.125 1.125-1.922 1.125m0 7.5c-.844 0-1.547-.422-1.969-1.125-.422-.656-.422-1.547 0-2.25.422-.656 1.125-1.125 1.969-1.125.797 0 1.5.469 1.922 1.125.422.703.422 1.594 0 2.25-.422.703-1.125 1.125-1.922 1.125M4.5 25.5c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0C.422 27.047 0 26.344 0 25.5c0-.797.422-1.5 1.125-1.922.656-.422 1.547-.422 2.25 0C4.031 24 4.5 24.703 4.5 25.5m5.25-12.75c-.844 0-1.547-.422-1.969-1.125-.422-.656-.422-1.547 0-2.25.422-.656 1.125-1.125 1.969-1.125.797 0 1.5.469 1.922 1.125.422.703.422 1.594 0 2.25-.422.703-1.125 1.125-1.922 1.125M12 18c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0C7.922 19.547 7.5 18.844 7.5 18c0-.797.422-1.5 1.125-1.922.656-.422 1.547-.422 2.25 0C11.531 16.5 12 17.203 12 18m-2.25 9.75c-.844 0-1.547-.422-1.969-1.125-.422-.656-.422-1.547 0-2.25.422-.656 1.125-1.125 1.969-1.125.797 0 1.5.469 1.922 1.125.422.703.422 1.594 0 2.25-.422.703-1.125 1.125-1.922 1.125' />
    </g>
    <defs>
      <clipPath id='af6722a6ad2676fe21bff6ea00830e07__a'>
        <path d='M0 0h12v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalXlFillIcon);
export default ForwardRef;
