import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGearLgBoldIcon = (
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
      <path d='M10 5.5q1.015 0 1.953.195.235.039.586.196.312.195.547.586.117.195.195.468l.352 1.485q.078.195.273.312t.39.078l1.485-.43q.235-.077.469-.078.47 0 .781.196.352.195.508.39a9.7 9.7 0 0 1 1.914 3.399q.117.234.117.586.039.39-.195.781l-.312.39-1.133 1.055a.63.63 0 0 0-.117.391q0 .235.117.39l1.133 1.055.312.39q.195.43.195.782 0 .39-.117.586a9.7 9.7 0 0 1-1.914 3.399q-.156.195-.508.39-.312.195-.781.195-.234 0-.469-.078l-1.484-.43a.54.54 0 0 0-.39.079.64.64 0 0 0-.274.312l-.352 1.485a2 2 0 0 1-.195.468q-.235.39-.547.586-.351.156-.586.196A9.6 9.6 0 0 1 10 25.5a9.6 9.6 0 0 1-1.953-.195 2.6 2.6 0 0 1-.586-.196 1.7 1.7 0 0 1-.547-.586 2 2 0 0 1-.195-.468l-.352-1.485a.64.64 0 0 0-.273-.312.54.54 0 0 0-.39-.078l-1.485.43a1.5 1.5 0 0 1-.469.078q-.468 0-.781-.196-.352-.195-.469-.39a9.4 9.4 0 0 1-1.953-3.399 1.3 1.3 0 0 1-.117-.586q-.039-.39.195-.781l.313-.39L2.07 15.89a.63.63 0 0 0 .118-.391.63.63 0 0 0-.118-.39L.938 14.054l-.313-.39q-.234-.43-.195-.782 0-.39.117-.586A9.9 9.9 0 0 1 2.5 8.898q.117-.195.469-.39.313-.195.781-.195.234 0 .469.078l1.484.43q.195.039.39-.079a.64.64 0 0 0 .274-.312l.352-1.485q.078-.273.195-.468.235-.39.547-.586.351-.157.586-.196A9.6 9.6 0 0 1 10 5.5M8.516 7.492l-.313 1.406q-.273.938-1.172 1.446a2.5 2.5 0 0 1-1.875.273l-1.328-.39a7.9 7.9 0 0 0-1.484 2.578l1.015.976q.704.704.704 1.719a2.47 2.47 0 0 1-.704 1.758l-1.015.937a7.9 7.9 0 0 0 1.484 2.578l1.367-.39q.938-.273 1.836.273.9.508 1.172 1.446l.313 1.406q1.485.234 2.968 0l.352-1.406a2.41 2.41 0 0 1 1.133-1.446 2.5 2.5 0 0 1 1.875-.273l1.328.39a7.9 7.9 0 0 0 1.484-2.578l-1.015-.976a2.34 2.34 0 0 1-.703-1.719q0-1.015.703-1.758l1.015-.937a7.9 7.9 0 0 0-1.484-2.578l-1.328.39q-.976.273-1.875-.273a2.42 2.42 0 0 1-1.133-1.485l-.352-1.367a9.5 9.5 0 0 0-2.968 0M8.125 15.5q.04 1.055.938 1.64.937.47 1.874 0 .9-.585.938-1.64-.039-1.055-.937-1.64-.938-.47-1.876 0-.898.585-.937 1.64M10 19.25a3.6 3.6 0 0 1-1.875-.508A3.759 3.759 0 0 1 6.25 15.5a3.76 3.76 0 0 1 1.875-3.242A3.6 3.6 0 0 1 10 11.75q1.015 0 1.875.508A3.759 3.759 0 0 1 13.75 15.5a3.76 3.76 0 0 1-1.875 3.242A3.6 3.6 0 0 1 10 19.25' />
    </g>
    <defs>
      <clipPath id='97dc30c89956851e8a7d8944e4441e04__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearLgBoldIcon);
export default ForwardRef;
