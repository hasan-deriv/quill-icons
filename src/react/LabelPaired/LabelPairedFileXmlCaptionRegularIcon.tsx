import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileXmlCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 14.75h1.125v.75H1.5A1.48 1.48 0 0 1 0 14V5c0-.82.656-1.5 1.5-1.5h3.656c.282 0 .586.14.797.352l2.695 2.695c.211.21.352.516.352.797v3.281h-.75V8H5.625A1.11 1.11 0 0 1 4.5 6.875V4.25h-3A.755.755 0 0 0 .75 5v9c0 .422.328.75.75.75m6.727-7.5c-.024-.047-.047-.117-.094-.164L5.414 4.367c-.047-.047-.117-.07-.164-.094v2.602c0 .21.164.375.375.375zM4.5 12.125q0 .282.14.492l.235.352.21-.352a.9.9 0 0 0 .165-.492c0-.187.164-.375.375-.375.188 0 .375.188.375.375q0 .492-.281.914l-.399.586.399.61c.187.28.281.585.281.89 0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375.87.87 0 0 0-.164-.469l-.211-.351-.234.351a.85.85 0 0 0-.141.469c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375c0-.305.094-.633.258-.89l.398-.61-.398-.586a1.8 1.8 0 0 1-.258-.914c0-.187.164-.375.375-.375.188 0 .375.188.375.375m6 3v-3c0-.187.164-.375.375-.375.188 0 .375.188.375.375v2.625h.375c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-.75a.37.37 0 0 1-.375-.375m-3.492-3.352c.164-.046.351.024.422.165l.82 1.335.797-1.335a.38.38 0 0 1 .422-.165.37.37 0 0 1 .281.352v3c0 .21-.187.375-.375.375A.37.37 0 0 1 9 15.125v-1.64l-.445.726a.37.37 0 0 1-.305.187.37.37 0 0 1-.328-.187l-.422-.727v1.641c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-3c0-.164.094-.305.258-.352' />
    </g>
    <defs>
      <clipPath id='bb8be3cfef5d841ffb188a0fec02311c__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileXmlCaptionRegularIcon);
export default ForwardRef;
