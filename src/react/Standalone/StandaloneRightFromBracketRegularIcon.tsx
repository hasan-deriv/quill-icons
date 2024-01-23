import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneRightFromBracketRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path d='m24.71 16.422-5.155-4.844c-.052-.052-.104-.078-.157-.078a.305.305 0 0 0-.273.273V14c-.026.39-.234.599-.625.625h-4.687c-.183.026-.287.13-.313.313v3.124c.026.183.13.287.313.313H18.5c.39.026.599.234.625.625v2.227a.305.305 0 0 0 .273.273c.053 0 .105-.026.157-.078l5.156-4.844c.026-.026.039-.052.039-.078 0-.026-.013-.052-.04-.078M26 16.5c0 .39-.143.716-.43.977l-5.156 4.882a1.46 1.46 0 0 1-1.016.391c-.442 0-.807-.143-1.093-.43-.287-.286-.43-.65-.43-1.093v-1.602h-4.062c-.443 0-.808-.156-1.094-.469a1.418 1.418 0 0 1-.469-1.093v-3.125c0-.443.156-.808.469-1.094a1.418 1.418 0 0 1 1.094-.469h4.062v-1.602c0-.442.143-.807.43-1.093.286-.287.65-.43 1.093-.43.391 0 .73.143 1.016.43l5.156 4.843c.287.26.43.586.43.977M12.875 9h-3.75c-.52.026-.964.208-1.328.547-.339.364-.521.807-.547 1.328v11.25c.026.52.208.963.547 1.328.364.339.807.521 1.328.547h3.75c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-3.75c-.885-.026-1.628-.326-2.227-.898-.572-.6-.872-1.342-.898-2.227v-11.25c.026-.885.326-1.628.898-2.227.6-.572 1.342-.872 2.227-.898h3.75c.39.026.599.234.625.625-.026.39-.234.599-.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneRightFromBracketRegularIcon);
export default ForwardRef;
