import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasskeyMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.906 12.5q.703-.093 1.407-.094c.25 0 .5 0 .718.031.25 0 .469.032.719.063h.031a3.93 3.93 0 0 0 .375 2.063c.344.624.813 1.156 1.406 1.53v2.095H3.406v-2.47c0-.468.125-.905.406-1.312.25-.406.563-.719 1-.937.72-.344 1.438-.625 2.22-.781.28-.094.593-.157.874-.188m-3.25 2.438 5.125-1.532h-.469c-.687 0-1.374.063-2.062.25a9.6 9.6 0 0 0-2 .719c-.25.125-.437.313-.594.563m5.125-1.532-5.125 1.531c-.156.25-.25.5-.25.782v1.469h7.157v-.594c-.532-.407-.97-.969-1.282-1.594-.25-.5-.437-1.031-.5-1.594m-1.75-1.937a3 3 0 0 1-1-.688A3.14 3.14 0 0 1 6.094 8.5c0-.875.312-1.656.937-2.281a3.14 3.14 0 0 1 2.282-.938c.906 0 1.656.313 2.28.938.657.625.97 1.406.97 2.281s-.313 1.656-.97 2.281a2.9 2.9 0 0 1-.968.688c-.187.062-.344.125-.531.187-.25.031-.5.063-.781.063-.47 0-.876-.063-1.282-.25m-.281-1.406c.438.468.938.656 1.563.656.624 0 1.124-.188 1.593-.656.438-.438.656-.938.656-1.563s-.218-1.125-.656-1.562c-.469-.438-.969-.657-1.594-.657-.624 0-1.124.219-1.562.657-.469.437-.656.937-.656 1.562s.187 1.125.656 1.563m7.281 9.718 1.469-1.468-1.125-1.094 1.125-1.094-.906-.937c.5-.188.875-.5 1.187-.907a2.6 2.6 0 0 0 .438-1.469c0-.687-.25-1.312-.75-1.812s-1.094-.75-1.813-.75-1.312.25-1.812.75-.75 1.094-.75 1.813c0 .593.156 1.093.5 1.562.344.438.781.75 1.312.906v3.406zm-.375-6.593a.83.83 0 0 1-.687-.344.86.86 0 0 1 0-.781c.156-.22.406-.376.687-.344a.68.68 0 0 1 .656.344.71.71 0 0 1 0 .78c-.124.22-.374.345-.656.345' />
    </g>
    <defs>
      <clipPath id='aa4218423664e14ba5c6c91d4df6796b__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasskeyMdRegularIcon);
export default ForwardRef;
