import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneGearRegularIcon = (
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
    <path d='m14.71 7.984-.507 1.836c-.156.495-.456.847-.898 1.055-.287.13-.56.287-.82.469-.391.26-.834.351-1.329.273l-1.914-.469a.166.166 0 0 0-.156 0c-.208.26-.404.547-.586.86l-.156.273c-.156.287-.3.586-.43.899 0 .052.026.104.078.156l1.328 1.406c.339.365.495.794.47 1.29-.027.155-.04.312-.04.468 0 .156.013.326.04.508.025.469-.131.885-.47 1.25l-1.328 1.406c-.052.026-.091.078-.117.156.13.313.286.612.469.899l.156.273c.182.313.378.6.586.86a.166.166 0 0 0 .156 0l1.875-.47c.521-.077.964.014 1.328.274.287.183.573.339.86.469.416.208.716.56.898 1.055l.508 1.836a.613.613 0 0 0 .117.156 8.856 8.856 0 0 0 2.344 0 .613.613 0 0 0 .117-.156l.508-1.836c.156-.495.456-.847.898-1.055a6.99 6.99 0 0 0 .86-.469c.39-.26.82-.351 1.289-.273l1.914.469a.166.166 0 0 0 .156 0c.208-.26.404-.547.586-.86l.156-.273c.157-.287.3-.586.43-.899 0-.078-.026-.13-.078-.156l-1.328-1.406c-.339-.365-.482-.781-.43-1.25v-.977a1.572 1.572 0 0 1 .43-1.289l1.328-1.406c.052-.026.091-.078.117-.156a5.892 5.892 0 0 0-.469-.899l-.156-.273a7.109 7.109 0 0 0-.586-.86.166.166 0 0 0-.156 0l-1.875.47c-.521.077-.964-.014-1.328-.274a6.99 6.99 0 0 0-.86-.469c-.416-.208-.716-.547-.898-1.016l-.508-1.875a.613.613 0 0 0-.117-.156 8.86 8.86 0 0 0-2.344 0 .613.613 0 0 0-.117.156M16 6.5c.52 0 1.016.04 1.484.117.078 0 .144.026.196.078.39.183.65.495.78.938l.548 1.875c.026.078.104.156.234.234.339.156.677.352 1.016.586a.693.693 0 0 0 .312.078l1.875-.469c.443-.104.847-.039 1.211.196a.613.613 0 0 1 .157.117c.286.338.546.703.78 1.094l.157.312c.208.39.39.794.547 1.211.026.052.052.117.078.195 0 .443-.156.834-.469 1.172l-1.328 1.368a.422.422 0 0 0-.117.312c.026.182.039.378.039.586 0 .208-.013.404-.04.586 0 .13.04.234.118.312l1.328 1.407c.313.312.469.69.469 1.133a1.518 1.518 0 0 1-.078.195c-.156.416-.339.82-.547 1.21l-.156.313h-.04c-.208.39-.455.756-.741 1.094a.613.613 0 0 1-.157.117c-.364.235-.768.313-1.21.235l-1.876-.47a.44.44 0 0 0-.312.04c-.339.234-.677.43-1.016.586-.13.078-.208.156-.234.234l-.547 1.875c-.13.443-.39.768-.781.977a.435.435 0 0 1-.196.039A9.029 9.029 0 0 1 16 26.5c-.52 0-1.016-.04-1.484-.117a.435.435 0 0 1-.196-.04 1.556 1.556 0 0 1-.78-.976l-.548-1.875c-.026-.078-.104-.156-.234-.234a6.782 6.782 0 0 1-1.016-.586.44.44 0 0 0-.312-.04l-1.875.47a1.753 1.753 0 0 1-1.211-.196l-.156-.156a6.217 6.217 0 0 1-.743-1.094h-.039l-.156-.312a10.13 10.13 0 0 1-.547-1.211.435.435 0 0 1-.039-.195c-.026-.417.117-.795.43-1.133l1.328-1.407a.422.422 0 0 0 .117-.312A4.149 4.149 0 0 1 8.5 16.5v-.273c0-.105.013-.209.04-.313 0-.13-.04-.234-.118-.312l-1.328-1.368a1.676 1.676 0 0 1-.469-1.171c.026-.079.052-.144.078-.196.156-.417.339-.82.547-1.21l.156-.313h.04c.208-.39.455-.755.742-1.094a.613.613 0 0 1 .156-.117c.364-.235.768-.3 1.21-.195l1.876.468a.693.693 0 0 0 .312-.078c.339-.234.677-.43 1.016-.586.13-.078.208-.156.234-.234l.547-1.875c.13-.443.39-.755.781-.938a.265.265 0 0 1 .196-.078A9.026 9.026 0 0 1 16 6.5m-2.187 10c.025.833.39 1.458 1.093 1.875.73.417 1.459.417 2.188 0 .703-.417 1.067-1.042 1.093-1.875-.026-.833-.39-1.458-1.093-1.875-.73-.417-1.459-.417-2.188 0-.703.417-1.068 1.042-1.094 1.875m5.624 0c-.052 1.302-.625 2.292-1.718 2.969-1.146.625-2.292.625-3.438 0-1.094-.677-1.666-1.667-1.719-2.969.053-1.302.626-2.292 1.72-2.969 1.145-.625 2.29-.625 3.437 0 1.093.677 1.666 1.667 1.718 2.969' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGearRegularIcon);
export default ForwardRef;
