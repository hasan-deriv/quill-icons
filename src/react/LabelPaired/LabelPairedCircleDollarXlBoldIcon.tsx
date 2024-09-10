import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDollarXlBoldIcon = (
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
      <path d='M21.75 18c0-3.469-1.875-6.656-4.875-8.437-3.047-1.735-6.75-1.735-9.75 0C4.078 11.343 2.25 14.53 2.25 18c0 3.516 1.828 6.703 4.875 8.484 3 1.735 6.703 1.735 9.75 0 3-1.78 4.875-4.968 4.875-8.484M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m12.938-5.719v.656c.468.047.937.188 1.359.329.094 0 .187.046.281.046.516.188.844.75.703 1.266-.14.563-.703.844-1.265.703-.047 0-.141-.047-.188-.047a7.5 7.5 0 0 0-.984-.234c-.656-.14-1.36-.094-1.922.188-.516.187-.938.75-.375 1.124.469.282 1.031.422 1.547.61.14 0 .234.047.328.047.75.234 1.687.515 2.39.984.891.61 1.313 1.64 1.126 2.719-.188 1.031-.938 1.734-1.782 2.11-.375.14-.797.234-1.219.28v.704c0 .562-.421 1.03-.984 1.03a1.04 1.04 0 0 1-1.031-1.03v-.797c-.656-.188-1.313-.375-2.016-.61a.993.993 0 0 1-.61-1.265c.188-.563.75-.844 1.267-.657.14.047.234.094.374.141.516.14 1.032.328 1.594.422.797.14 1.453.047 1.875-.094.563-.234.797-.937.235-1.312-.47-.282-1.032-.469-1.594-.61-.094-.047-.235-.047-.328-.093-.703-.188-1.594-.47-2.25-.891-.938-.562-1.36-1.547-1.172-2.625.187-1.031.984-1.687 1.828-2.062.234-.141.516-.188.797-.282v-.75a1.04 1.04 0 0 1 1.031-1.031c.563 0 .985.469.985 1.031' />
    </g>
    <defs>
      <clipPath id='05d923745ab7f0ac1ac1f50f586d2998__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarXlBoldIcon);
export default ForwardRef;
