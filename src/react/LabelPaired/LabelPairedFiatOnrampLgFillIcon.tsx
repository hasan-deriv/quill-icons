import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOnrampLgFillIcon = (
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
      <path d='M18.945 9.68a.433.433 0 0 0-.43-.43h-1.64v.86h1.64c.235 0 .43-.196.43-.43m0 1.64c0-.195-.195-.39-.43-.39h-1.64v.82h1.64c.235 0 .43-.195.43-.43M8.906 15.344l3.399-3.399c-.117-.39-.157-.82-.157-1.25 0-2.851 2.305-5.195 5.157-5.195S22.5 7.844 22.5 10.695V22.18c0 1.836-1.523 3.32-3.36 3.32H7.657A5.15 5.15 0 0 1 2.5 20.344a5.15 5.15 0 0 1 5.156-5.157c.43 0 .86.04 1.25.157m11.719-.664a5.2 5.2 0 0 1-3.32 1.172c-1.68 0-3.203-.82-4.14-2.11l-2.462 2.461a5.12 5.12 0 0 1 2.11 4.14c0 1.25-.43 2.423-1.172 3.282h7.5c.82 0 1.484-.664 1.484-1.445zm-3.75-7.11h-.86v.86h-.82v.82h.82v2.5h-.82v.86h.82v.82h.86v-.82h.82v.82h.82v-.82c.665 0 1.25-.547 1.25-1.25 0-.313-.117-.626-.35-.86a1.24 1.24 0 0 0-.08-1.758c-.194-.195-.507-.312-.82-.312v-.86h-.82v.86h-.82zm-8.867 9.805H6.953v.469c-.664.195-1.094.82-1.094 1.523 0 .899.704 1.64 1.602 1.64.351 0 .625.274.625.626 0 .312-.274.586-.625.586a.6.6 0 0 1-.586-.586v-.156H5.859v.156c0 .703.43 1.328 1.094 1.523v.469h1.055v-.469c.664-.195 1.094-.82 1.094-1.523a1.65 1.65 0 0 0-1.641-1.64c-.313 0-.586-.274-.586-.626a.6.6 0 0 1 .586-.586c.351 0 .625.274.625.586v.156h1.016v-.156c0-.703-.43-1.328-1.094-1.523zM6.055 10.07a.95.95 0 0 1 .937-.937h3.672c.39 0 .742.234.86.586a.9.9 0 0 1-.196 1.015l-3.633 3.633c-.351.352-.937.352-1.328 0a.97.97 0 0 1 0-1.328l2.031-2.031H6.992a.925.925 0 0 1-.937-.938' />
    </g>
    <defs>
      <clipPath id='b368dacf47152a5ba4be1b9e89793a29__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOnrampLgFillIcon);
export default ForwardRef;
