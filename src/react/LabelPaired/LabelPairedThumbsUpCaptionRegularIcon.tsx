import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpCaptionRegularIcon = (
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
      <path d='m6.75 5.422-.094.398A3.93 3.93 0 0 1 4.97 8.094l-.07.047a1.9 1.9 0 0 0-.493.468.375.375 0 0 1-.515.094c-.164-.14-.211-.375-.094-.539.187-.258.422-.469.703-.656l.07-.047a3.2 3.2 0 0 0 1.36-1.852l.093-.375c.211-.703.915-1.125 1.618-.937.703.21 1.125.914.937 1.617l-.117.399c-.094.328-.211.632-.352.937H10.5c.82 0 1.5.68 1.5 1.5 0 .422-.187.797-.445 1.078q.07.21.07.422c0 .445-.21.844-.492 1.125.07.164.117.375.117.563 0 .562-.305 1.054-.75 1.312 0 .844-.68 1.5-1.5 1.5H6.89c-.515 0-1.03-.14-1.452-.422l-.915-.61c-.28-.21-.539-.445-.726-.75a.36.36 0 0 1 .117-.515.36.36 0 0 1 .516.117c.14.211.304.375.515.516l.914.61c.305.21.657.304 1.032.304H9c.398 0 .75-.328.75-.75 0-.047-.023-.094-.023-.14-.047-.188.07-.4.257-.446a.76.76 0 0 0 .516-.703.75.75 0 0 0-.164-.469c-.07-.094-.094-.187-.07-.305a.36.36 0 0 1 .187-.257.72.72 0 0 0 .422-.657.65.65 0 0 0-.117-.375.37.37 0 0 1 .14-.492.77.77 0 0 0 .352-.633.755.755 0 0 0-.75-.75H7.477c-.141 0-.258-.093-.329-.21a.36.36 0 0 1 0-.375c.258-.399.47-.868.586-1.336l.118-.375a.587.587 0 0 0-.399-.704.587.587 0 0 0-.703.399m-6 3.328V14h1.5V8.75zm-.75 0C0 8.352.328 8 .75 8h1.5c.398 0 .75.352.75.75V14c0 .422-.352.75-.75.75H.75A.74.74 0 0 1 0 14z' />
    </g>
    <defs>
      <clipPath id='d208bb6e92fb58add03f84e0920bfef6__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpCaptionRegularIcon);
export default ForwardRef;
