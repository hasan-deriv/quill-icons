import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDollarXlRegularIcon = (
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
      <path d='M22.5 18q-.047-2.859-1.406-5.25-1.407-2.39-3.844-3.844Q14.766 7.5 12 7.5T6.75 8.906Q4.313 10.36 2.906 12.75 1.546 15.141 1.5 18q.047 2.859 1.406 5.25 1.407 2.39 3.844 3.844Q9.234 28.5 12 28.5t5.25-1.406q2.437-1.453 3.844-3.844 1.36-2.391 1.406-5.25M0 18q.047-3.28 1.594-6Q3.187 9.282 6 7.594 8.859 6 12 6t6 1.594Q20.813 9.28 22.406 12q1.548 2.72 1.594 6-.046 3.282-1.594 6-1.593 2.719-4.406 4.406Q15.141 30 12 30t-6-1.594Q3.187 26.72 1.594 24 .047 21.282 0 18m12.75-6.375v1.078q.938.095 1.875.375.047.047.094.047.046 0 .094.047.656.234.515.89-.234.657-.89.563a3 3 0 0 0-.329-.14 17 17 0 0 0-1.078-.235q-1.406-.188-2.344.234-.843.422-.89.938-.141.656.469.984.75.469 2.109.797h.047q1.36.329 2.531 1.031 1.359.985 1.125 2.625-.375 1.548-1.781 2.063a4.9 4.9 0 0 1-1.547.328v1.125q-.093.704-.75.75-.703-.046-.75-.75v-1.219a22 22 0 0 1-1.547-.375 11 11 0 0 1-.937-.328q-.656-.281-.47-.937.236-.61.938-.47l.938.282q.844.282 1.312.375 1.407.188 2.25-.187.75-.33.844-.938.141-.704-.469-1.125a6.8 6.8 0 0 0-1.921-.75.4.4 0 0 0-.188-.047.4.4 0 0 0-.14-.047 10.4 10.4 0 0 1-2.438-.937 3 3 0 0 1-.938-1.031q-.375-.657-.187-1.5.375-1.5 1.781-2.063.563-.187 1.172-.328v-1.125q.047-.703.75-.75.657.047.75.75' />
    </g>
    <defs>
      <clipPath id='b9fd370447bfc5a3850c527caf60cb64__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarXlRegularIcon);
export default ForwardRef;
