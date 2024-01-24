import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandalonePlaceholderRegularIcon = (
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
    <path d='M10.688 7.75h.937q.585.039.625.625-.039.585-.625.625h-.937q-.938.039-1.563.625-.585.625-.625 1.563v.937q-.039.585-.625.625-.585-.039-.625-.625v-.937q.04-1.446 1.016-2.422t2.422-1.016M7.874 14q.585.039.625.625v3.75q-.039.585-.625.625-.585-.039-.625-.625v-3.75q.039-.585.625-.625m16.25 0q.585.039.625.625v3.75q-.039.585-.625.625-.585-.039-.625-.625v-3.75q.039-.585.625-.625m0-1.25q-.585-.039-.625-.625v-.937q-.039-.938-.625-1.563Q22.25 9.04 21.313 9h-.938q-.585-.039-.625-.625.039-.585.625-.625h.938q1.445.04 2.421 1.016.977.976 1.016 2.422v.937q-.039.585-.625.625m.625 8.125v.938q-.04 1.445-1.016 2.421-.975.977-2.422 1.016h-.937q-.585-.039-.625-.625.039-.585.625-.625h.938q.937-.039 1.562-.625.585-.625.625-1.562v-.938q.039-.585.625-.625.585.039.625.625m-16.25 0v.938q.039.937.625 1.562.625.585 1.563.625h.937q.585.039.625.625-.039.585-.625.625h-.937q-1.446-.04-2.422-1.016-.977-.975-1.016-2.422v-.937q.039-.585.625-.625.585.039.625.625m5.625 4.375q-.585-.039-.625-.625.039-.585.625-.625h3.75q.585.039.625.625-.039.585-.625.625zM13.5 8.375q.039-.585.625-.625h3.75q.585.039.625.625-.039.585-.625.625h-3.75q-.585-.039-.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePlaceholderRegularIcon);
export default ForwardRef;
