import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapRightXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M23.531 15a2.97 2.97 0 0 1-2.25 2.906l-2.11 4.453c.095.188.188.375.235.516l.328.75c.282.656.235 1.406-.047 2.063l-.14.28A4.45 4.45 0 0 1 15.89 28.5h-.094a4.7 4.7 0 0 1-2.25-.422l-3.328-1.594a3.44 3.44 0 0 1-1.688-4.64l1.313-2.766c.422-.937 1.594-1.36 2.484-.89.047 0 .094.046.14.046l.095.094a1.91 1.91 0 0 1 1.874-.187c.141.093.282.14.422.234a1.91 1.91 0 0 1 1.875-.187c.047.046.094.046.141.093l.047.047.937-1.922c-.234-.422-.328-.89-.328-1.406 0-1.64 1.36-3 3-3s3 1.36 3 3m-2.86-.14c.563.28.938.75 1.032 1.312.281-.281.469-.703.469-1.172 0-.89-.75-1.64-1.64-1.64-.891 0-1.641.703-1.641 1.593.515-.328 1.172-.375 1.78-.094m-3.89 9.328 2.953-6.282.563-1.265a.47.47 0 0 0-.235-.516c-.187-.094-.468 0-.609.14l-.562 1.266-1.172 2.438a.66.66 0 0 1-.703.375.61.61 0 0 1-.61-.516c-.047-.187-.14-.281-.281-.328-.187-.094-.516-.047-.61.188l-.093.234c-.14.234-.422.422-.703.375-.328 0-.563-.281-.61-.563-.046-.14-.14-.234-.28-.328-.235-.093-.517 0-.61.235-.14.234-.375.375-.61.375a.82.82 0 0 1-.656-.328.57.57 0 0 0-.234-.235c-.188-.094-.516 0-.61.235l-1.312 2.765c-.469 1.031-.047 2.297.984 2.766l3.375 1.593q.704.352 1.547.282h.094a3.04 3.04 0 0 0 2.484-1.735l.14-.28c.142-.329.142-.61 0-.938l-.28-.703-.516 1.125a.54.54 0 0 1-.656.234c-.188-.094-.328-.375-.188-.61M24.797 7.5c.375 0 .703.328.703.656v19.735c0 .328-.328.656-.703.656a.67.67 0 0 1-.656-.656V8.156a.67.67 0 0 1 .656-.656' />
    </g>
    <defs>
      <clipPath id='651729591ce1f98693204c1dbf1a9242__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapRightXlBoldIcon);
export default ForwardRef;
