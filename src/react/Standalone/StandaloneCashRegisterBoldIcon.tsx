import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneCashRegisterBoldIcon = (
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
    <path d='M8.5 6.5h8.75q.547 0 .898.352.352.35.352.898v2.5q0 .547-.352.898-.35.352-.898.352h-3.125v1.25h8.438q.975 0 1.64.625.703.585.86 1.523l.898 6.446q.039.156.039.351V24q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q6.04 25.054 6 24v-2.5q0-.078.04-.156l.898-6.446q.156-.937.859-1.523.665-.625 1.64-.625h2.188V11.5H8.5q-.547 0-.898-.352-.352-.35-.352-.898v-2.5q0-.547.352-.898.35-.352.898-.352m1.25 1.875q-.585.039-.625.625.039.585.625.625H16q.585-.039.625-.625-.039-.585-.625-.625zM7.875 24q.039.585.625.625h15q.585-.039.625-.625v-.625H7.875zm15.313-8.828q-.08-.508-.586-.547H9.438q-.547.039-.626.547L7.915 21.5h16.211zm-12.813.39q.859.079.938.938-.079.859-.938.938-.86-.079-.937-.938.078-.86.937-.937m2.813.938q.078-.86.937-.937.859.078.938.937-.079.859-.938.938-.86-.079-.937-.938m-.938 2.188q.859.078.938.937-.079.859-.938.938-.86-.079-.937-.938.078-.86.937-.937m4.688-2.188q.078-.86.937-.937.859.078.938.937-.079.859-.938.938-.86-.079-.937-.938M16 18.688q.859.078.938.937-.079.859-.938.938-.86-.079-.937-.938.078-.86.937-.937m4.688-2.188q.078-.86.937-.937.859.078.938.937-.079.859-.938.938-.86-.079-.937-.938m-.938 2.188q.859.078.938.937-.079.859-.938.938-.86-.079-.937-.938.078-.86.937-.937' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCashRegisterBoldIcon);
export default ForwardRef;
