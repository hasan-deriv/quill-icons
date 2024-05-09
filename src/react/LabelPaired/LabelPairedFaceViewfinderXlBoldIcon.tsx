import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFaceViewfinderXlBoldIcon = (
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
      <path d='M0 8.625C0 7.219 1.172 6 2.625 6h3.75c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 6.375 8.25h-3.75a.37.37 0 0 0-.375.375v3.75A1.11 1.11 0 0 1 1.125 13.5C.469 13.5 0 13.031 0 12.375zm16.5-1.5c0-.61.469-1.125 1.125-1.125h3.75C22.781 6 24 7.219 24 8.625v3.75a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125v-3.75a.4.4 0 0 0-.375-.375h-3.75c-.656 0-1.125-.469-1.125-1.125M1.125 22.5c.61 0 1.125.516 1.125 1.125v3.75c0 .234.14.375.375.375h3.75c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 6.375 30h-3.75A2.62 2.62 0 0 1 0 27.375v-3.75c0-.61.469-1.125 1.125-1.125m21.75 0c.61 0 1.125.516 1.125 1.125v3.75C24 28.828 22.781 30 21.375 30h-3.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h3.75a.37.37 0 0 0 .375-.375v-3.75c0-.61.469-1.125 1.125-1.125M11.25 16.125a1.11 1.11 0 0 1-1.125 1.125C9.469 17.25 9 16.781 9 16.125c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125m2.625 1.125c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125M12 12.75c-1.922 0-3.61 1.031-4.547 2.625-.984 1.64-.984 3.656 0 5.25.938 1.64 2.625 2.625 4.547 2.625 1.875 0 3.563-.984 4.5-2.625.984-1.594.984-3.61 0-5.25-.937-1.594-2.625-2.625-4.5-2.625m0 12.75a7.46 7.46 0 0 1-6.516-3.75c-1.359-2.297-1.359-5.156 0-7.5C6.844 11.953 9.281 10.5 12 10.5c2.672 0 5.11 1.453 6.469 3.75 1.36 2.344 1.36 5.203 0 7.5-1.36 2.344-3.797 3.75-6.469 3.75m-1.969-6.375c.375.703 1.125 1.125 1.969 1.125.797 0 1.547-.422 1.922-1.125.234-.328.656-.469 1.031-.234.375.187.469.656.281 1.03C14.578 21 13.36 21.798 12 21.798c-1.406 0-2.625-.797-3.281-1.875-.188-.375-.094-.844.281-1.031.375-.235.844-.094 1.031.234' />
    </g>
    <defs>
      <clipPath id='af24066b0f9c576b93b57d1cfa4d7ac6__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderXlBoldIcon);
export default ForwardRef;
