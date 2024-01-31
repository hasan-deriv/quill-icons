import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWhatsappLgIcon = (
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
      <path d='M15.133 9.29a8.85 8.85 0 0 1 1.914 2.812 8 8 0 0 1 .703 3.32q-.04 2.422-1.21 4.375a8.9 8.9 0 0 1-3.165 3.125Q11.422 24.055 9 24.094a8.44 8.44 0 0 1-4.14-1.055L.25 24.25l1.21-4.492a8.6 8.6 0 0 1-1.132-4.336Q.368 13 1.5 11.047a9 9 0 0 1 3.125-3.125Q6.578 6.789 9 6.75q3.555.038 6.133 2.54M9 22.647q3.047-.078 5.117-2.109 2.07-2.07 2.188-5.117-.079-2.97-2.227-5.078-2.11-2.11-5.078-2.11-3.047.04-5.078 2.11-2.07 2.031-2.149 5.078a7.4 7.4 0 0 0 1.133 3.828l.156.273-.742 2.657 2.735-.703.273.156q1.68.976 3.672 1.015m3.945-5.39q.039 0 .117.039.235.078.313.195.117.195-.156 1.055-.157.39-.625.664-.47.274-.82.352a3.6 3.6 0 0 1-1.055 0q-.547-.117-1.563-.547-1.523-.742-2.46-1.797-.977-1.055-1.173-1.407-.039-.038-.039-.078h-.039q-.117-.156-.468-.78a3.4 3.4 0 0 1-.391-1.446q.039-.743.273-1.172.235-.43.43-.586.04-.039.04-.078.351-.273.585-.235h.469q.195-.116.43.352.078.196.234.508.156.39.273.703.117.352.157.39a.42.42 0 0 1 .039.391q-.313.548-.508.703-.274.235-.117.47.585 1.053 1.289 1.6.702.547 1.64.977.313.195.47-.039.116-.117.35-.39.195-.274.352-.47.196-.272.469-.077.195.078.742.312.547.274.742.39' />
    </g>
    <defs>
      <clipPath id='42caa5c4e874b419__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWhatsappLgIcon);
export default ForwardRef;
