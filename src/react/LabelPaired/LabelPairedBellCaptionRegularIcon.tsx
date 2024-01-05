import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBellCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M5.125 3.875c.016-.234.14-.36.375-.375.234.016.36.14.375.375v.398c.969.11 1.766.508 2.39 1.196.641.687.97 1.531.985 2.531v.68a3.912 3.912 0 0 0 1.125 2.742l.07.07a.992.992 0 0 1 .305.727.944.944 0 0 1-.305.726.944.944 0 0 1-.726.305H1.28a.944.944 0 0 1-.726-.305.944.944 0 0 1-.305-.726c0-.281.102-.531.305-.75l.07-.047A3.912 3.912 0 0 0 1.75 8.68V8c.016-1 .344-1.844.984-2.531.625-.688 1.422-1.086 2.391-1.196zM5.5 5c-.844.016-1.555.305-2.133.867-.562.578-.851 1.29-.867 2.133v.68c-.016 1.265-.469 2.351-1.36 3.258l-.046.07a.291.291 0 0 0-.094.21c.016.173.11.266.281.282H9.72c.172-.016.265-.11.281-.281a.291.291 0 0 0-.094-.211l-.047-.07C8.97 11.03 8.516 9.945 8.5 8.68V8c-.016-.844-.312-1.555-.89-2.133C7.046 5.305 6.343 5.016 5.5 5m-.703 9.258c.125.312.36.476.703.492.344-.016.578-.18.703-.492.094-.219.258-.297.492-.235.203.094.274.25.211.47-.11.296-.289.538-.539.726-.25.187-.539.281-.867.281-.328 0-.617-.094-.867-.281-.25-.188-.43-.43-.54-.727-.062-.219.009-.375.212-.469.234-.062.398.016.492.235' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellCaptionRegularIcon);
export default ForwardRef;
