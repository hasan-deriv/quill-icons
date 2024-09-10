import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.68 22.727-7.5-6.25-.43-.391v5.664c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V9.25C.25 8.586.797 8 1.5 8c.664 0 1.25.586 1.25 1.25v5.664l.43-.351 7.5-6.25c.39-.313.898-.391 1.328-.196.43.235.742.664.742 1.133v12.5c0 .508-.312.938-.742 1.133-.43.234-.938.156-1.328-.156' />
    </g>
    <defs>
      <clipPath id='60f2c55f45fc42c277a18466eeb2e4ba__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepLgFillIcon);
export default ForwardRef;
