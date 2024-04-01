import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 10.5c-.844 0-1.5.703-1.5 1.5v12c0 .844.656 1.5 1.5 1.5h21c.797 0 1.5-.656 1.5-1.5V12c0-.797-.703-1.5-1.5-1.5zM0 12c0-1.64 1.313-3 3-3h21c1.64 0 3 1.36 3 3v12c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm4.125.375h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75v-.75c0-.375.328-.75.75-.75m-.75 5.25c0-.375.328-.75.75-.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75zm.75 3.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75v-.75c0-.375.328-.75.75-.75m3.75-8.25c0-.375.328-.75.75-.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75zm.75 3.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75v-.75c0-.375.328-.75.75-.75m3.75-3.75c0-.375.328-.75.75-.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75zm.75 3.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75v-.75c0-.375.328-.75.75-.75m3.75-3.75c0-.375.328-.75.75-.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75zm.75 3.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75v-.75c0-.375.328-.75.75-.75m3.75-3.75c0-.375.328-.75.75-.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75zm.75 3.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75v-.75c0-.375.328-.75.75-.75m-.75 5.25c0-.375.328-.75.75-.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75zM8.25 21.75h10.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H8.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='ffab1b4f50b4c1e48d8203f78d652584__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardXlRegularIcon);
export default ForwardRef;
