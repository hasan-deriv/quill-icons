import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOfframpLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.836 9.25v.86h1.68c.234 0 .43-.196.43-.43a.433.433 0 0 0-.43-.43zm0 1.68v.82h1.68c.234 0 .43-.195.43-.43 0-.195-.196-.39-.43-.39zm10.469 4.258c2.851 0 5.195 2.304 5.195 5.156S20.156 25.5 17.305 25.5H5.82a3.32 3.32 0 0 1-3.32-3.32V10.695C2.5 7.844 4.805 5.5 7.656 5.5c2.852 0 5.157 2.344 5.157 5.195 0 .43-.04.86-.157 1.25l3.399 3.399c.39-.117.82-.156 1.25-.156M4.375 22.18c0 .78.664 1.445 1.445 1.445h7.5c-.742-.86-1.172-2.031-1.172-3.281 0-1.68.82-3.203 2.11-4.14l-2.461-2.462a5.07 5.07 0 0 1-4.14 2.11c-1.25 0-2.423-.43-3.282-1.172zm2.46-13.75v-.86h-.82v.86h-.82v.82h.82v2.5h-.82v.86h.82v.82h.82v-.82h.86v.82h.82v-.82c.665 0 1.25-.547 1.25-1.25 0-.313-.117-.626-.35-.86a1.24 1.24 0 0 0-.08-1.758 1.26 1.26 0 0 0-.82-.312v-.86h-.82v.86zm11.173 9.414v-.469h-1.055v.469c-.664.195-1.094.82-1.094 1.523 0 .899.704 1.64 1.602 1.64.352 0 .625.274.625.626 0 .312-.273.586-.625.586a.6.6 0 0 1-.586-.586v-.156h-1.016v.156c0 .703.43 1.328 1.094 1.523v.469h1.055v-.469c.664-.195 1.094-.82 1.094-1.523a1.65 1.65 0 0 0-1.641-1.64c-.313 0-.586-.274-.586-.626a.6.6 0 0 1 .586-.586c.352 0 .625.274.625.586v.156h1.016v-.156c0-.703-.43-1.328-1.094-1.523m.86-7.774v3.633c0 .39-.235.703-.587.86a.9.9 0 0 1-1.015-.196l-3.633-3.633c-.352-.351-.352-.937 0-1.328a.97.97 0 0 1 1.328 0l2.031 2.031V10.07c0-.508.39-.937.938-.937a.95.95 0 0 1 .937.937' />
    </g>
    <defs>
      <clipPath id='b582a54f102ee3beb00d12809886f802__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOfframpLgFillIcon);
export default ForwardRef;
