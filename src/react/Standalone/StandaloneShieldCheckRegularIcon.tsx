import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneShieldCheckRegularIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='m15.531 7.945-6.914 2.93q-.703.351-.742 1.094 0 1.875.625 4.375.664 2.46 2.305 4.804 1.68 2.344 4.687 3.868.508.234 1.016 0 3.008-1.485 4.648-3.868 1.68-2.344 2.344-4.804.625-2.5.625-4.375-.039-.743-.742-1.094l-6.875-2.93a1.27 1.27 0 0 0-.977 0m1.446-1.133 6.914 2.93q.663.273 1.054.86.43.585.43 1.367.04 1.992-.664 4.687-.703 2.696-2.54 5.235-1.796 2.578-5.155 4.257a2.32 2.32 0 0 1-2.032 0q-3.36-1.68-5.156-4.257-1.836-2.54-2.539-5.235t-.664-4.687q0-.782.43-1.367.39-.587 1.054-.86l6.914-2.93a2.54 2.54 0 0 1 1.954 0M16 13.689q-.86.078-.937.937.078.859.937.938.859-.079.938-.938-.079-.86-.938-.937m2.188.937q0 .743-.43 1.328a2.35 2.35 0 0 1-1.133.781v2.891q-.039.585-.625.625-.585-.039-.625-.625v-2.89a2.35 2.35 0 0 1-1.133-.782 2.2 2.2 0 0 1-.43-1.328q.04-.938.626-1.562.624-.587 1.562-.626.938.04 1.563.626.585.624.625 1.562' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneShieldCheckRegularIcon);
export default ForwardRef;
