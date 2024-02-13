import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.89 4.762q.248.327-.027.629L9.051 9.766q-.3.218-.602-.028L5.195 6.512.684 9.793q-.33.192-.602-.11-.192-.327.11-.601l4.812-3.5q.3-.192.547.055l3.226 3.199 4.485-4.102q.327-.246.629.028m-11.702 10.8v-1.75q-.029-.41-.438-.437-.41.027-.437.438v1.75q.027.41.437.437.41-.027.438-.437M1.75 12.5q.547.027.93.383.355.383.382.93v1.75a1.43 1.43 0 0 1-.382.93 1.43 1.43 0 0 1-.93.382 1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.382-.93v-1.75q.027-.546.382-.93.383-.355.93-.382m3.938-1.312q-.029-.411-.438-.438-.41.027-.437.438v4.374q.027.411.437.438.41-.027.438-.437zm-1.75 0q.027-.547.382-.93.383-.356.93-.383.547.027.93.383.355.383.383.93v4.374a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.383 1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93zm5.25 4.374v-2.624q-.028-.411-.438-.438-.41.027-.437.438v2.624q.027.411.437.438.41-.027.438-.437m-.438-3.937q.547.027.93.383.355.383.383.93v2.624a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.383 1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93v-2.624q.028-.548.383-.93.383-.356.93-.383m3.938-.437q-.028-.411-.438-.438-.41.027-.437.438v4.374q.027.411.437.438.41-.027.438-.437zm-1.75 0q.027-.547.382-.93.383-.356.93-.383.548.027.93.383.355.383.383.93v4.374a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.383 1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93z' />
    </g>
    <defs>
      <clipPath id='40ec931c2bbea12e9d7d772d1689a421__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedSmRegularIcon);
export default ForwardRef;
