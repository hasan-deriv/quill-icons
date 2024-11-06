import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzlePieceTwoLgRegularIcon = (
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
      <path d='M6.25 12.61c0-.43.117-.82.352-1.094.195-.313.507-.547.898-.547.39 0 .703.234.898.547.079.078.157.117.196.117a.17.17 0 0 0 .156-.156v-1.133c0-.547.43-.977.938-.977h1.718a.17.17 0 0 0 .156-.156c0-.04-.039-.117-.117-.195-.312-.235-.508-.547-.508-.938s.196-.703.508-.937c.274-.235.664-.352 1.055-.352s.781.117 1.055.352c.312.234.508.547.508.937s-.196.703-.508.938c-.078.078-.117.156-.117.195 0 .078.078.156.156.156h1.68c.546 0 .937.43.937.977v6.601c0 .117 0 0 .039.235v1.445q0 .117.117.117c.04 0 .117 0 .195-.117.235-.273.547-.508.938-.508.352 0 .664.235.898.508.196.313.352.703.352 1.094 0 .43-.156.86-.352 1.133-.234.312-.546.507-.898.507-.39 0-.703-.195-.937-.507-.079-.118-.157-.157-.196-.157-.078 0-.117.078-.117.157v2.46c0 .547-.43.938-.937.938h-1.72a.76.76 0 0 1-.78-.781c0-.313.195-.547.39-.703a.54.54 0 0 0 .235-.43.54.54 0 0 0-.235-.43 1.26 1.26 0 0 0-.703-.234c-.273 0-.547.117-.703.234a.54.54 0 0 0-.235.43.54.54 0 0 0 .235.43c.195.156.39.39.39.703a.76.76 0 0 1-.78.781h-1.72c-.546 0-.937-.39-.937-.937v-9.571a.17.17 0 0 0-.156-.156c-.04 0-.117.039-.196.117a1.03 1.03 0 0 1-.898.508c-.39 0-.703-.195-.898-.508-.235-.273-.352-.664-.352-1.094m4.844 3.163v.04a1.15 1.15 0 0 1-.156-.626c0-.39.195-.703.507-.937a1.9 1.9 0 0 1 1.055-.352c.39 0 .781.157 1.055.352.117.117.234.234.312.352.117.195.195.39.195.585 0 .43-.195.743-.507.977-.078.078-.117.156-.117.195s0 .078.039.078c.039.04.078.04.117.04h1.68c.195 0 .312-.118.312-.313v-5.82c0-.156-.117-.352-.313-.352h-1.68a.76.76 0 0 1-.78-.781c0-.313.195-.547.39-.703a.54.54 0 0 0 .235-.43.54.54 0 0 0-.235-.43 1.26 1.26 0 0 0-.703-.234c-.273 0-.547.117-.703.234a.54.54 0 0 0-.235.43.54.54 0 0 0 .235.43c.195.156.39.39.39.703a.76.76 0 0 1-.78.781h-1.72c-.156 0-.312.195-.312.352v1.133a.76.76 0 0 1-.781.78.76.76 0 0 1-.664-.35c-.157-.196-.274-.274-.43-.274s-.273.078-.43.273c-.117.156-.195.39-.195.703s.078.547.195.704c.157.195.274.273.43.273s.273-.078.43-.274a.79.79 0 0 1 .664-.39c.43 0 .781.351.781.82v2.422c0 .195.156.313.313.313h1.718c.078 0 .156-.04.156-.118 0-.039-.039-.078-.039-.117-.039-.039-.039-.078-.078-.078a1.1 1.1 0 0 1-.351-.39m1.094.586c0 .43-.352.782-.782.782H9.648a.336.336 0 0 0-.312.312v5.82c0 .196.156.352.312.352h1.758a.17.17 0 0 0 .156-.156c0-.04-.039-.117-.117-.196-.312-.234-.508-.546-.508-.937 0-.39.196-.742.508-.938.274-.234.664-.39 1.055-.39s.781.156 1.055.39a1.1 1.1 0 0 1 .508.938c0 .39-.196.703-.508.937-.078.079-.117.157-.117.196 0 .078.078.156.156.156h1.68c.156 0 .312-.156.312-.352v-2.421c0-.43.351-.782.781-.782.313 0 .547.196.664.39.157.196.274.235.43.235s.273-.039.43-.234c.117-.156.195-.43.195-.742 0-.274-.078-.547-.195-.703-.157-.157-.274-.274-.43-.274s-.273.078-.43.274a.79.79 0 0 1-.664.39.784.784 0 0 1-.781-.781v-1.172a.336.336 0 0 0-.313-.312h-1.68a.8.8 0 0 1-.585-.235.93.93 0 0 1-.195-.547c0-.351.195-.586.39-.742a.54.54 0 0 0 .235-.43c0-.078-.04-.156-.079-.234-.039-.039-.078-.117-.156-.195-.156-.117-.43-.195-.703-.195s-.547.078-.703.195c-.156.156-.235.312-.235.43s0 .195.079.273c.039.039.078.117.156.156.078.078.195.156.234.274.117.117.156.273.156.468' />
    </g>
    <defs>
      <clipPath id='d88156588647e724aa6b7ec680656693__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzlePieceTwoLgRegularIcon);
export default ForwardRef;
