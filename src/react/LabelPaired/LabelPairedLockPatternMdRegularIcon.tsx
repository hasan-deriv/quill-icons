import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockPatternMdRegularIcon = (
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
      <path d='M2.5 6A1.5 1.5 0 0 1 4 4.5c.625 0 1.188.438 1.406 1h3.157c.218-.562.78-1 1.437-1 .625 0 1.188.438 1.406 1h3.156c.22-.562.782-1 1.438-1 .813 0 1.5.688 1.5 1.5A1.5 1.5 0 0 1 16 7.5c-.25 0-.469-.031-.656-.125l-4 4c.094.188.156.406.156.625a1.5 1.5 0 0 1-1.5 1.5c-.25 0-.469-.031-.656-.125l-4 4c.031.031.031.094.062.125h3.157c.218-.562.78-1 1.437-1 .625 0 1.188.438 1.406 1h3.156c.22-.562.782-1 1.438-1 .813 0 1.5.688 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5 1.52 1.52 0 0 1-1.437-1h-3.157c-.219.594-.781 1-1.406 1a1.52 1.52 0 0 1-1.437-1H5.406c-.218.594-.781 1-1.437 1a1.5 1.5 0 0 1-1.5-1.5c0-.812.687-1.5 1.5-1.5.25 0 .469.063.656.156l4-4A1.45 1.45 0 0 1 8.469 12c0-.812.687-1.5 1.5-1.5.25 0 .469.063.656.156l4-4c-.031-.031-.031-.093-.062-.156h-3.157c-.219.594-.781 1-1.406 1a1.525 1.525 0 0 1-1.437-1H5.406c-.218.594-.781 1-1.406 1A1.48 1.48 0 0 1 2.5 6m0 6c0 .563.281 1.031.75 1.313.438.28 1.031.28 1.5 0 .438-.282.75-.75.75-1.313 0-.531-.312-1-.75-1.281-.469-.281-1.062-.281-1.5 0-.469.281-.75.75-.75 1.281m12 0c0 .563.281 1.031.75 1.313.438.28 1.031.28 1.5 0 .438-.282.75-.75.75-1.313 0-.531-.312-1-.75-1.281-.469-.281-1.062-.281-1.5 0-.469.281-.75.75-.75 1.281' />
    </g>
    <defs>
      <clipPath id='72db876cdfda4bd38ea90f6bd1cd86c0__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockPatternMdRegularIcon);
export default ForwardRef;
