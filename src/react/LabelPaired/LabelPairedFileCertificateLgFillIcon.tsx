import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateLgFillIcon = (
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
      <path d='M5 8c0-1.367 1.094-2.5 2.5-2.5h6.25v5c0 .703.547 1.25 1.25 1.25h5V23c0 1.406-1.133 2.5-2.5 2.5H8.633a1.6 1.6 0 0 0 .117-.625V21.75c.04 0 .078-.04.117-.04.274-.116.586-.312.82-.624.235-.273.391-.664.43-1.055.04-.117.04-.195.04-.273.077-.04.116-.078.234-.156a2.25 2.25 0 0 0 .703-2.579q-.117-.176-.117-.234c0-.078.039-.156.117-.273a2.26 2.26 0 0 0-.703-2.578c-.118-.079-.157-.118-.235-.157 0-.078 0-.156-.039-.273a2.156 2.156 0 0 0-1.875-1.875c-.117-.04-.195-.04-.273-.04-.04-.038-.078-.116-.157-.234a2.175 2.175 0 0 0-2.578-.664c-.078.04-.195.078-.234.117zm15 2.5h-5v-5zM4.258 11.828l.625.235c.039.039.156.039.234 0l.586-.235c.39-.156.86-.039 1.133.274l.39.546c.04.079.118.118.196.118l.664.078c.43.078.742.39.82.82l.078.664c0 .078.04.156.118.195l.507.391c.352.274.47.703.313 1.094l-.235.625a.33.33 0 0 0 0 .273l.235.586c.156.39.039.86-.274 1.094l-.546.43a.22.22 0 0 0-.118.195l-.078.664a.995.995 0 0 1-.82.82l-.586.078v4.102c0 .234-.156.469-.352.586a.7.7 0 0 1-.625-.04L5 24.407l-1.562 1.016c-.157.117-.43.117-.626.039a.69.69 0 0 1-.312-.586v-4.102l-.625-.078c-.43-.078-.742-.39-.781-.82l-.117-.664a.22.22 0 0 0-.118-.195l-.507-.43c-.352-.234-.47-.703-.313-1.094l.274-.625v-.234l-.274-.586c-.156-.39-.039-.86.313-1.094l.507-.43a.22.22 0 0 0 .118-.195l.078-.664a.995.995 0 0 1 .82-.82l.664-.078a.22.22 0 0 0 .195-.118l.43-.507c.234-.352.703-.47 1.094-.313M7.5 16.75c0-.86-.508-1.68-1.25-2.148-.781-.43-1.758-.43-2.5 0-.781.468-1.25 1.289-1.25 2.148a2.54 2.54 0 0 0 1.25 2.188c.742.43 1.719.43 2.5 0 .742-.47 1.25-1.29 1.25-2.188' />
    </g>
    <defs>
      <clipPath id='23ca41b26db532774397167497fb88fe__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateLgFillIcon);
export default ForwardRef;
