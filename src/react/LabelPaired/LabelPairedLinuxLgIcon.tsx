import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinuxLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.844 10.344c-.04-.04-.117-.04-.117-.078 0 0 0-.04.039-.04.039-.039.117-.039.195 0 .039.04.117.079.117.118s-.078.039-.117.039-.078-.04-.117-.04m-.86.039c-.039.039-.078 0-.078-.04-.039-.038.078-.077.117-.116.079-.04.157-.04.196 0 .039 0 .039.039.039.039 0 .039-.078.039-.156.078-.04 0-.04.039-.118.039m8.672 10.898c.43.508.586.86.586 1.172 0 .313-.234.547-.547.703-.586.352-1.445.625-1.992 1.25-.547.664-1.21 1.055-1.875 1.094-.664.078-1.25-.234-1.562-.898l-.118-.235c-.82.04-1.562-.234-2.148-.195-.86.078-1.406.273-1.875.273-.195.43-.586.703-1.016.782-.625.156-1.406 0-2.187-.391-.742-.39-1.64-.352-2.305-.508-.351-.039-.664-.195-.781-.469-.156-.273-.117-.664.078-1.25.04-.195 0-.468-.039-.78-.04-.157-.04-.313-.04-.47 0-.195 0-.351.118-.507.156-.313.43-.47.703-.547.274-.117.508-.157.664-.313.196-.234.39-.586.664-.82-.117-.664 0-1.367.235-2.07.469-1.485 1.523-2.891 2.265-3.79.625-.898.82-1.601.86-2.5C6.422 9.563 5.406 5.5 9.39 5.5c3.164.04 3.007 3.36 2.968 5.156 0 1.172.625 1.953 1.329 2.813.585.703 1.367 1.719 1.796 2.89.352.977.508 2.032.157 3.086.039.04.117.04.156.078.039.04.117.079.156.118.235.234.352.547.39.898.079.313.157.586.313.742M8.961 8.938a1.65 1.65 0 0 0-.117.859c.156 0 .351.078.508.156-.079-.469.195-.937.468-.898.352 0 .547.586.352 1.054-.04.079-.117.157-.156.196.273.078.43.156.507.195.313-.39.43-1.016.157-1.602-.39-.82-1.328-.82-1.72.04m-1.563-.47c-.742 0-.937 1.485-.351 2.032.312-.195.273-.156.234-.195-.312-.274-.273-1.094.078-1.094.235-.04.43.39.352.742.156-.078.273-.117.43-.156.039-.781-.352-1.328-.743-1.328m-.546 2.384c-.157.117-.235.273-.157.468.04.196.235.43.547.625.313.157.469.43.781.586.118.04.235.04.391.078.703.04 1.055-.468 1.484-.586.47-.156.782-.43.899-.703.117-.351-.078-.586-.43-.742-.43-.156-.625-.195-.86-.351-.39-.235-.741-.352-1.015-.352-.547 0-.898.39-1.094.547 0 .039-.312.234-.546.43m.117 13.046c.078-.82-1.211-1.914-1.602-2.695l-.742-1.406c-.273-.352-.547-.547-.86-.625-.312-.04-.507.078-.703.273-.195.196-.351.508-.546.703-.313.274-.391.274-.782.391a.97.97 0 0 0-.586.469c-.078.195-.078.469-.039.781.079.273.118.625.04.898v.04c-.196.507-.196.82-.118 1.015.313.586 1.836.235 3.008.86 1.211.625 2.852.664 2.93-.704m-.04-1.015c1.446 1.015 3.204.625 4.454-.274.117-.43.234-.82.273-1.132.04-.586.078-1.133.156-1.563.118-.508.391-.898.86-1.055.078-.82.703-.82 1.484-.507.742.351 1.016.625.899 1.015h.156c.195-.664-.547-1.094-1.211-1.367a2.7 2.7 0 0 0 0-1.367c-.234-1.016-.898-1.875-1.367-2.305-.117 0-.078.078.078.235.469.43 1.445 1.914.937 3.32-.156-.04-.312-.04-.43-.04-.234-1.132-.702-2.07-.937-2.538-.43-.82-1.133-2.54-1.445-3.75-.195.273-.469.468-.86.586-.195.078-.39.234-.624.351-.547.313-1.172.352-1.68-.039-.156-.117-.313-.273-.469-.39a1.2 1.2 0 0 1-.234-.157c-.078 1.485-1.094 3.32-1.563 4.414a7.1 7.1 0 0 0-.547 2.383c-.82-1.133-.195-2.578.118-3.203.39-.703.43-.898.351-.82-.351.547-.86 1.406-1.055 2.304-.117.47-.156.938 0 1.368.118.43.43.859.938 1.171 0 0 .976.547 1.523 1.29.274.39.352.703.274.976-.078.234-.352.313-.664.313.195.234.43.507.586.78m10.04-.43c.039-.234-.117-.508-.508-.976-.39-.43-.313-1.29-.703-1.641-.235-.234-.508-.195-.86-.195-.312.351-1.015.78-1.523.664-.43-.117-.703-.664-.703-1.172-.04 0-.04 0-.04.039-.273.117-.429.39-.546.82-.117.39-.117.899-.156 1.485-.04.468-.235 1.054-.39 1.601-.157.508-.235.977-.04 1.406.273.586.742.82 1.29.782.585-.078 1.21-.391 1.718-1.016.86-1.055 2.422-1.172 2.46-1.797M7.008 11.32c-.156-.117-.117-.234-.078-.234.117 0 .117.117.156.195.078.04.195.156.312.235.235.195.586.39.977.39.39 0 .898-.234 1.172-.39.156-.079.351-.274.547-.391.117-.078.117-.195.234-.195s.04.117-.117.273c-.156.117-.39.274-.586.39-.352.196-.781.43-1.25.43-.43 0-.82-.234-1.055-.43-.117-.077-.234-.195-.312-.273' />
    </g>
    <defs>
      <clipPath id='a1b4b28463cfe87d7d513d71aee0fbe2__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinuxLgIcon);
export default ForwardRef;
