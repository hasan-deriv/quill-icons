import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDerivP2pLgFillIcon = (
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
      <path d='M8.086 13.82c-.156-.039-.313-.039-.508-.039h-.273c-.04 0-.078.04-.117.04H7.07v1.6h.43c.43 0 .742-.038.977-.155.234-.118.312-.352.312-.664 0-.157 0-.313-.078-.391-.04-.117-.117-.195-.234-.274a5 5 0 0 0-.391-.117m9.023 0c-.117-.039-.312-.039-.468-.039h-.313c-.078 0-.117.04-.156.04h-.04v1.6h.391c.43 0 .782-.038.977-.155.234-.118.352-.352.352-.664 0-.157-.04-.313-.118-.391-.039-.117-.117-.195-.234-.274-.078-.039-.234-.078-.39-.117M6.25 5.5h12.5c2.07 0 3.75 1.68 3.75 3.75v12.5c0 2.07-1.68 3.75-3.75 3.75H6.25c-2.07 0-3.75-1.68-3.75-3.75V9.25c0-2.07 1.68-3.75 3.75-3.75m.898 7.227H6.68c-.157.039-.313.039-.43.078-.156 0-.312.039-.43.039v5.547h1.25v-1.875h.43c.82 0 1.484-.157 1.914-.47.469-.273.703-.78.703-1.444 0-.665-.234-1.172-.664-1.446-.469-.312-1.094-.469-1.953-.469-.117 0-.234.04-.352.04m6.758.859a1.5 1.5 0 0 0-.351-.508 2 2 0 0 0-.586-.312 2.7 2.7 0 0 0-.86-.118 2.3 2.3 0 0 0-1.015.235 2.3 2.3 0 0 0-.82.547l.585.82c.04-.04.118-.078.196-.117a.7.7 0 0 1 .273-.195c.078-.079.195-.118.352-.157.117-.078.234-.078.39-.078.196 0 .39.04.508.117.156.117.195.274.195.508 0 .117 0 .235-.078.352-.039.078-.117.195-.195.312l-.664.664c-.078.078-.195.156-.274.235l-.234.234a7 7 0 0 0-.469.547c-.117.195-.234.39-.312.586a2.3 2.3 0 0 0-.117.742v.39h3.75v-1.015h-2.422c.039-.04.078-.117.117-.195.078-.078.156-.157.234-.274.079-.039.118-.117.196-.156 0-.04.039-.078.078-.117l.742-.742c.156-.118.273-.274.39-.43l.079-.078c.117-.156.234-.352.312-.547q.117-.292.117-.586c0-.234-.039-.469-.117-.664m2.656-.899h-.039c-.117 0-.195.04-.312.04h-.469c-.312.039-.625.078-.898.117v5.547h1.289v-1.875h.39c.82 0 1.485-.157 1.954-.47.43-.273.664-.78.664-1.444 0-.665-.235-1.172-.664-1.446-.47-.273-1.094-.43-1.954-.469z' />
    </g>
    <defs>
      <clipPath id='2039ef7d635f4d6b5fcc8109c2029392__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivP2pLgFillIcon);
export default ForwardRef;
