import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneHuaweiAppGalleryIcon = (
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
      d='m14.984 17.203-.351.899-.04.078h.821l-.039-.078-.39-.899ZM21.313 6.5A4.701 4.701 0 0 1 26 11.188v10.664c0 2.578-2.11 4.648-4.688 4.648H10.649A4.635 4.635 0 0 1 6 21.852V11.187C6 8.61 8.07 6.5 10.648 6.5h10.665Zm-3.399 10-.586 1.875-.586-1.875h-.547l.899 2.734h.468l.586-1.797.586 1.797h.43l.938-2.734h-.547l-.586 1.875-.586-1.875h-.469Zm-3.125 0-1.172 2.734h.547l.234-.507v-.04h1.211l.235.547h.547l-1.133-2.695V16.5h-.469Zm8.32 0v2.734h.547V16.5h-.547Zm-15 0v2.734h.547v-1.093h1.172v1.093h.547V16.5h-.547v1.133H8.656V16.5H8.11Zm4.727 0v1.563c0 .468-.234.703-.586.703-.39 0-.625-.235-.625-.703v-1.524h-.508v1.523c0 .782.39 1.211 1.094 1.211.742 0 1.133-.43 1.133-1.21V16.5h-.508Zm7.695 0v2.734h1.953v-.507H21.04v-.665h.977v-.507h-.977v-.547h1.406V16.5h-1.914Zm-8.203-6.797c0 1.914 1.602 3.438 3.555 3.438s3.555-1.524 3.555-3.438h-.508c0 1.64-1.367 2.93-3.047 2.93-1.68 0-3.047-1.29-3.047-2.93h-.508Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneHuaweiAppGalleryIcon);
export default ForwardRef;
