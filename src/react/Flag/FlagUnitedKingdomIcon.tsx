import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagUnitedKingdomIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#fff'
      d='M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z'
    />
    <path
      fill='#0D47A1'
      d='M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z'
    />
    <path
      fill='#fff'
      d='M23.975 1.537A1.806 1.806 0 0 0 22.203.013h-.468l-7.666 5.102V.013H9.931v5.102L2.265.013h-.468C.906.013.167.673.025 1.537l6.552 4.361H0v4.204h6.577l-6.552 4.36a1.806 1.806 0 0 0 1.772 1.525h.468l7.666-5.102v5.102h4.138v-5.102l7.666 5.102h.468c.891 0 1.63-.66 1.772-1.524l-6.552-4.361H24V5.898h-6.577l6.552-4.36Z'
    />
    <path
      fill='#F44336'
      d='M13.241.013V6.74H24V9.26H13.241v6.726H10.76V9.26H0V6.74h10.759V.013h2.482ZM9.908 10.102l-8.746 5.767a1.792 1.792 0 0 1-.606-.389l-.124-.132 7.956-5.246h1.52Zm6.329 0 7.527 4.963c-.113.2-.262.378-.439.521l-.137.102-8.471-5.586h1.52ZM.725.373l8.378 5.525h-1.52L.19 1.023C.316.766.5.543.725.373ZM22.824.125a1.8 1.8 0 0 1 .735.517l-7.97 5.256h-1.52L22.823.125Z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagUnitedKingdomIcon);
export default ForwardRef;
