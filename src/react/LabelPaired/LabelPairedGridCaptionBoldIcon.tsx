import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGridCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.313 5.188H1.187v1.125h1.126zM1.187 4.25h1.126q.398 0 .656.281.28.257.281.657v1.125a.85.85 0 0 1-.281.656.85.85 0 0 1-.656.281H1.187a.85.85 0 0 1-.656-.281.85.85 0 0 1-.281-.657V5.188q0-.398.281-.656a.85.85 0 0 1 .657-.281m1.126 4.688H1.187v1.124h1.126zM1.187 8h1.126q.398 0 .656.281.28.258.281.656v1.126a.85.85 0 0 1-.281.656.85.85 0 0 1-.656.281H1.187a.85.85 0 0 1-.656-.281.85.85 0 0 1-.281-.656V8.937q0-.398.281-.656A.85.85 0 0 1 1.188 8m0 4.688v1.124h1.126v-1.124zm-.937 0q0-.399.281-.657a.85.85 0 0 1 .657-.281h1.125q.398 0 .656.281.28.258.281.656v1.126a.85.85 0 0 1-.281.656.85.85 0 0 1-.656.281H1.187a.85.85 0 0 1-.656-.281.85.85 0 0 1-.281-.656zm5.813-7.5H4.938v1.125h1.125zM4.938 4.25h1.125q.398 0 .656.281.28.257.281.657v1.125a.85.85 0 0 1-.281.656.85.85 0 0 1-.657.281H4.938a.85.85 0 0 1-.656-.281A.85.85 0 0 1 4 6.312V5.188q0-.398.281-.656a.85.85 0 0 1 .657-.281m0 4.688v1.124h1.125V8.939zm-.938 0q0-.399.281-.657A.85.85 0 0 1 4.938 8h1.125q.398 0 .656.281.28.258.281.656v1.126a.85.85 0 0 1-.281.656.85.85 0 0 1-.657.281H4.938a.85.85 0 0 1-.656-.281.85.85 0 0 1-.281-.656zm2.063 3.75H4.938v1.124h1.125zm-1.125-.938h1.125q.398 0 .656.281.28.258.281.656v1.126a.85.85 0 0 1-.281.656.85.85 0 0 1-.657.281H4.938a.85.85 0 0 1-.656-.281.85.85 0 0 1-.281-.656v-1.126q0-.398.281-.656a.85.85 0 0 1 .657-.281m3.75-6.562v1.125h1.124V5.188zm-.938 0q0-.399.281-.657a.85.85 0 0 1 .656-.281h1.126q.398 0 .656.281.28.257.281.657v1.125a.85.85 0 0 1-.281.656.85.85 0 0 1-.656.281H8.687a.85.85 0 0 1-.656-.281.85.85 0 0 1-.281-.657zm2.063 3.75H8.687v1.124h1.126zM8.687 8h1.126q.398 0 .656.281.28.258.281.656v1.126a.85.85 0 0 1-.281.656.85.85 0 0 1-.656.281H8.687a.85.85 0 0 1-.656-.281.85.85 0 0 1-.281-.656V8.937q0-.398.281-.656A.85.85 0 0 1 8.687 8m0 4.688v1.124h1.126v-1.124zm-.937 0q0-.399.281-.657a.85.85 0 0 1 .656-.281h1.126q.398 0 .656.281.28.258.281.656v1.126a.85.85 0 0 1-.281.656.85.85 0 0 1-.656.281H8.687a.85.85 0 0 1-.656-.281.85.85 0 0 1-.281-.656z' />
    </g>
    <defs>
      <clipPath id='62f7a8dbeb277ef9e23cc4ea9549a84a__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGridCaptionBoldIcon);
export default ForwardRef;
