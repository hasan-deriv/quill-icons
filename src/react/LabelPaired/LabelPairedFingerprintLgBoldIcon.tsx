import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFingerprintLgBoldIcon = (
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
      <path d='M1.875 15.5v1.563c0 .546-.43.937-.937.937C.39 18 0 17.61 0 17.063V15.5c0-5.508 4.453-10 10-10 3.008 0 5.742 1.367 7.578 3.516a.974.974 0 0 1-.117 1.328.974.974 0 0 1-1.328-.117C14.648 8.507 12.46 7.375 10 7.375c-4.492 0-8.125 3.672-8.125 8.125m17.89-2.031c.157.664.235 1.328.235 2.031v1.602a.95.95 0 0 1-.937.937.925.925 0 0 1-.938-.937v-1.563c0-.586-.078-1.172-.195-1.719-.117-.468.234-.976.742-1.093.508-.118.976.234 1.094.742M10 8.625c3.79 0 6.875 3.086 6.875 6.875v.977a30 30 0 0 1-.195 3.242.93.93 0 0 1-.938.781c-.547 0-1.015-.508-.937-1.055.117-.976.195-1.953.195-2.968V15.5c0-2.734-2.266-5-5-5a5 5 0 0 0-1.328.195c-.39.117-.86 0-1.133-.312-.43-.469-.273-1.211.313-1.406A6.5 6.5 0 0 1 10 8.625M5.86 11.32c.312.39.312.938 0 1.328A5.1 5.1 0 0 0 5 15.5v.977c0 1.132-.156 2.265-.39 3.359-.079.39-.47.664-.86.664a.97.97 0 0 1-.937-1.21c.195-.9.312-1.837.312-2.813V15.5c0-1.562.508-3.047 1.406-4.18.352-.43.977-.39 1.328 0m7.89 4.18v.977c0 1.562-.156 3.125-.469 4.609a.836.836 0 0 1-.82.664.878.878 0 0 1-.86-1.055c.274-1.367.43-2.773.43-4.218V15.5c0-1.094-.937-2.031-2.031-2.031A2.04 2.04 0 0 0 7.969 15.5v.977c0 1.601-.235 3.164-.625 4.687a.845.845 0 0 1-.82.586c-.586 0-.977-.547-.82-1.133.35-1.328.546-2.734.546-4.14V15.5a3.751 3.751 0 0 1 7.5 0M10 14.563a.95.95 0 0 1 .938.937v.977c0 2.578-.508 5.117-1.407 7.539l-.234.586c-.195.468-.742.742-1.211.546s-.742-.742-.547-1.21l.234-.586a18.8 18.8 0 0 0 1.29-6.875V15.5c0-.508.39-.937.937-.937' />
    </g>
    <defs>
      <clipPath id='974470fd5750cc7aef01da5b8cee3955__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFingerprintLgBoldIcon);
export default ForwardRef;
