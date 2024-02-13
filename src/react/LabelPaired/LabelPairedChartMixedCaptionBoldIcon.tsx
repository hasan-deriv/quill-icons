import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedCaptionBoldIcon = (
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
      <path d='M11.813 5.234 7.874 8.61q-.375.282-.75 0L4.453 6.266.867 8.656q-.445.235-.773-.164-.234-.446.164-.773l3.937-2.625q.352-.21.68.047L7.5 7.438l3.563-3.047q.42-.305.796.046.306.422-.046.797m-7.126 8.391v-3.75q-.023-.165-.187-.187-.165.023-.187.187v3.75q.023.165.187.188.165-.024.188-.188M4.5 8.75q.469.024.797.328.304.329.328.797v3.75a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328 1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797v-3.75q.024-.468.328-.797.329-.304.797-.328m-2.812 4.875v-1.5q-.024-.165-.188-.187-.165.023-.187.187v1.5q.023.165.187.188.165-.024.188-.188M1.5 11q.469.024.797.328.304.329.328.797v1.5a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328 1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797v-1.5q.024-.468.328-.797.329-.304.797-.328m6.188.375q-.024-.165-.188-.187-.165.023-.187.187v2.25q.023.165.187.188.165-.024.188-.188zm-1.313 0q.024-.468.328-.797.328-.304.797-.328.469.024.797.328.304.329.328.797v2.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328 1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797zm4.313 2.25v-3.75q-.024-.165-.188-.187-.165.023-.187.187v3.75q.023.165.187.188.165-.024.188-.188M10.5 8.75q.469.024.797.328.304.329.328.797v3.75a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328 1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797v-3.75q.024-.468.328-.797.329-.304.797-.328' />
    </g>
    <defs>
      <clipPath id='2f90e727762224ce421ee55bb0d26648__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedCaptionBoldIcon);
export default ForwardRef;
