import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDollarLgRegularIcon = (
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
      <path d='M18.75 15.5c0-3.125-1.68-5.977-4.375-7.54-2.734-1.6-6.055-1.6-8.75 0A8.63 8.63 0 0 0 1.25 15.5c0 3.164 1.64 6.016 4.375 7.578 2.695 1.602 6.016 1.602 8.75 0A8.73 8.73 0 0 0 18.75 15.5M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m10.625-5.312v.898c.508.039 1.016.195 1.523.351.079 0 .118.04.196.04.312.078.508.43.43.78-.079.313-.43.509-.782.43-.078-.039-.195-.039-.273-.078-.274-.078-.586-.195-.899-.234-.742-.078-1.406 0-1.914.195-.508.235-.742.547-.781.782-.078.39.078.625.39.859.43.234 1.055.43 1.797.625v.039c.704.195 1.524.43 2.149.82.742.508 1.055 1.328.898 2.227-.156.82-.742 1.406-1.484 1.68-.352.156-.82.273-1.29.273v.938a.617.617 0 0 1-.624.625.64.64 0 0 1-.625-.625v-.977c-.313-.078-.82-.234-1.25-.352l-.82-.234a.654.654 0 0 1-.391-.82c.117-.313.469-.47.781-.39.274.077.508.194.782.273.43.117.898.234 1.093.273.781.117 1.446.039 1.875-.117.43-.196.664-.469.742-.782.04-.43-.078-.742-.43-.976-.468-.313-1.015-.469-1.6-.625a.56.56 0 0 1-.235-.078c-.703-.156-1.445-.39-2.031-.781-.313-.196-.625-.47-.82-.82-.196-.391-.235-.821-.157-1.29.156-.82.781-1.367 1.523-1.68.274-.117.625-.234.938-.273v-.976c0-.313.273-.626.625-.626.351 0 .625.313.625.626z' />
    </g>
    <defs>
      <clipPath id='dcc83207c25f19c9c8c31376abb38ea5__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarLgRegularIcon);
export default ForwardRef;
