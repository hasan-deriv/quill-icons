import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChartAreaBoldIcon = (
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
    <path
      fillOpacity={0.72}
      d='M7.875 8.688v13.75c.052.572.365.885.938.937h16.25c.572.052.885.365.937.938-.052.572-.365.885-.938.937H8.813c-.807-.026-1.47-.3-1.992-.82-.52-.521-.794-1.185-.82-1.992V8.688c.052-.573.365-.886.938-.938.572.052.885.365.937.938Zm9.297 6.64-2.422-2.422-3.125 3.125v3.594h11.25v-3.047l-1.992-2.305-1.055 1.055a1.808 1.808 0 0 1-1.328.547c-.52 0-.963-.182-1.328-.547ZM18.5 14l1.328-1.328.235-.235c.26-.234.56-.351.898-.351.365.026.664.17.898.43l2.422 2.851c.313.339.469.742.469 1.211v3.672c0 .365-.117.664-.352.898-.234.235-.533.352-.898.352H11c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898v-4.219c0-.52.182-.963.547-1.328l3.555-3.555c.26-.26.56-.39.898-.39.338 0 .638.13.898.39l1.524 1.524L18.5 14Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartAreaBoldIcon);
export default ForwardRef;
