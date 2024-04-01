import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFaceViewfinderLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 5.5h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.75a.64.64 0 0 0-.625.625v3.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-3.75C0 6.359.82 5.5 1.875 5.5m16.25 0C19.141 5.5 20 6.36 20 7.375v3.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-3.75c0-.312-.312-.625-.625-.625h-3.75a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625zM0 23.625v-3.75c0-.312.273-.625.625-.625.313 0 .625.313.625.625v3.75c0 .352.273.625.625.625h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.75A1.85 1.85 0 0 1 0 23.625M18.125 25.5h-3.75a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h3.75a.64.64 0 0 0 .625-.625v-3.75c0-.312.273-.625.625-.625.313 0 .625.313.625.625v3.75c0 1.055-.86 1.875-1.875 1.875m-8.75-11.562c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938m2.188.937c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937M10 10.5c-1.797 0-3.437.977-4.336 2.5-.898 1.563-.898 3.477 0 5A4.97 4.97 0 0 0 10 20.5a4.96 4.96 0 0 0 4.297-2.5c.898-1.523.898-3.437 0-5-.899-1.523-2.54-2.5-4.297-2.5m0 11.25a6.22 6.22 0 0 1-5.43-3.125c-1.133-1.914-1.133-4.297 0-6.25C5.703 10.461 7.734 9.25 10 9.25c2.227 0 4.258 1.21 5.39 3.125 1.133 1.953 1.133 4.336 0 6.25-1.132 1.953-3.163 3.125-5.39 3.125m-1.64-5.312c.312.585.937.937 1.64.937.664 0 1.29-.352 1.602-.937.195-.274.546-.391.859-.196.312.156.39.547.234.86-.547.898-1.562 1.562-2.695 1.562-1.172 0-2.187-.664-2.734-1.562-.157-.313-.079-.704.234-.86a.62.62 0 0 1 .86.195' />
    </g>
    <defs>
      <clipPath id='bda9b21fe4efe2c9f7f65a9f4c218dbd__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderLgRegularIcon);
export default ForwardRef;
