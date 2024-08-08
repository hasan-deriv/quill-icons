import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMacosXlIcon = (
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
      <path d='M14.11 20.578c0 2.016-1.032 3.281-2.72 3.281-1.687 0-2.718-1.265-2.718-3.28 0-2.017 1.031-3.282 2.719-3.282s2.718 1.265 2.718 3.281m2.343-7.125-.703.047c-.422.047-.61.188-.61.469s.235.422.563.422c.422 0 .75-.282.75-.657zM3 18A11.91 11.91 0 0 1 9 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C5.25 26.25 3 22.313 3 18m14.766-4.687c0 .984.515 1.593 1.406 1.593.75 0 1.219-.422 1.265-1.031h-.562c-.094.328-.328.516-.703.516-.516 0-.797-.422-.797-1.078s.281-1.032.797-1.032c.375 0 .656.235.703.516h.563c-.047-.563-.516-1.031-1.266-1.031-.89 0-1.406.609-1.406 1.547m-8.063-1.454v2.954h.563v-1.829c0-.375.28-.703.656-.703.328 0 .562.235.562.563v1.969h.61v-1.876c0-.374.234-.656.61-.656.374 0 .562.235.562.61v1.922h.609V12.75c0-.61-.328-.984-.937-.984-.422 0-.797.234-.938.562h-.047c-.14-.328-.422-.562-.844-.562-.375 0-.703.187-.796.562h-.047v-.515zm5.485 8.72c0-2.579-1.454-4.22-3.797-4.22-2.297 0-3.75 1.641-3.75 4.22 0 2.624 1.453 4.265 3.75 4.265 2.343 0 3.797-1.64 3.797-4.266m.374-5.72c.376 0 .704-.14.891-.468h.047v.422h.563v-2.016c0-.656-.422-1.031-1.172-1.031-.657 0-1.172.328-1.22.843h.563c.094-.234.329-.328.657-.328.375 0 .609.188.609.516v.234l-.844.047c-.703.047-1.078.375-1.078.938-.047.515.375.843.985.843m6.47 7.5c0-1.172-.704-1.828-2.391-2.203l-.891-.234c-1.125-.235-1.594-.656-1.594-1.313 0-.843.797-1.359 1.828-1.359 1.078 0 1.782.563 1.875 1.453h1.032c-.047-1.36-1.266-2.344-2.86-2.344-1.734 0-2.906.938-2.906 2.297 0 1.172.703 1.922 2.344 2.25l.937.235c1.125.234 1.594.703 1.594 1.359 0 .844-.844 1.406-1.922 1.406-1.219 0-2.015-.515-2.156-1.406h-.985c.094 1.406 1.266 2.344 3.047 2.344 1.828 0 3.047-.985 3.047-2.485' />
    </g>
    <defs>
      <clipPath id='1e2153522f485b9c4ad0e6758e3758d9__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMacosXlIcon);
export default ForwardRef;
