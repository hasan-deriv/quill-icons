import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleArrowLeftLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.875 15.5c0 1.484.365 2.839 1.094 4.063.703 1.224 1.692 2.213 2.969 2.968A8.062 8.062 0 0 0 10 23.625a8.061 8.061 0 0 0 4.063-1.094c1.275-.755 2.265-1.744 2.968-2.968.73-1.224 1.094-2.579 1.094-4.063 0-1.484-.365-2.838-1.094-4.062-.703-1.225-1.692-2.214-2.968-2.97A8.062 8.062 0 0 0 10 7.376a8.062 8.062 0 0 0-4.062 1.094c-1.277.755-2.266 1.745-2.97 2.969-.728 1.223-1.093 2.578-1.093 4.062M20 15.5c-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.411-.443-5-1.328c-1.562-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5 .026-1.823.469-3.49 1.328-5C2.214 8.99 3.438 7.766 5 6.828 6.589 5.943 8.255 5.5 10 5.5s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5M8.71 11.398c.444-.364.886-.364 1.33 0 .364.443.364.886 0 1.329l-1.837 1.835h5.86c.572.053.885.365.937.938-.052.573-.365.885-.937.938h-5.86l1.836 1.835c.365.443.365.886 0 1.329-.443.364-.885.364-1.328 0l-3.438-3.438c-.364-.443-.364-.885 0-1.328z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowLeftLgBoldIcon);
export default ForwardRef;
