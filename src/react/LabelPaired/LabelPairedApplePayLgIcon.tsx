import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedApplePayLgIcon = (
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
      <path d='M4.57 11.71v-.038q.47-.547.43-1.29-.703.04-1.21.626-.47.507-.47 1.25.782 0 1.25-.547m.43.665q.235 0 .664.117.469.157.86.703h-.04q-.156.078-.468.47-.352.35-.391 1.093.039.86.469 1.25.468.39.625.43 0 .039-.157.39a5.4 5.4 0 0 1-.39.781q-.274.39-.586.703a1.1 1.1 0 0 1-.703.313q-.39 0-.625-.156-.274-.157-.742-.196-.469.04-.743.196-.234.117-.586.156-.429 0-.742-.312a4.3 4.3 0 0 1-.586-.743q-.547-.82-.78-1.992-.235-1.172.273-2.148.585-.977 1.718-1.055.43.039.82.234.313.117.508.157.196-.04.508-.157A2.4 2.4 0 0 1 5 12.375m3.906-1.445h2.852q1.133.039 1.836.703.664.703.664 1.797 0 1.133-.703 1.836-.665.663-1.836.703h-1.64v2.578H8.905zm1.172 1.015v3.008h1.367q1.602-.038 1.64-1.484-.038-1.485-1.64-1.524zm6.367 6.68q-.859 0-1.367-.469-.507-.43-.508-1.172.04-1.484 2.11-1.64l1.484-.078v-.43q-.04-.938-1.133-.938-.937.04-1.133.782h-1.054q.039-.782.664-1.25.585-.47 1.562-.47 1.015 0 1.602.509.624.468.625 1.289v3.789h-1.094v-.899h-.039q-.547.938-1.719.977m.313-.898q.624 0 1.015-.352.39-.35.391-.86v-.43l-1.328.08q-1.094.077-1.133.78.078.743 1.055.782m3.984 2.89h-.43v-.937q.157.039.352.039.742.039.977-.782l.117-.351-1.992-5.547h1.21l1.407 4.492h.039l1.367-4.492H25l-2.07 5.82q-.352.977-.82 1.368-.51.429-1.368.39' />
    </g>
    <defs>
      <clipPath id='9cc6ae09b8c7226435e36add1c11fd13__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedApplePayLgIcon);
export default ForwardRef;
