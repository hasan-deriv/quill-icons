import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUbuntuSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 3.969q1.887.027 3.418.93a6.77 6.77 0 0 1 2.434 2.433q.902 1.53.93 3.418-.028 1.887-.93 3.418a6.8 6.8 0 0 1-2.434 2.434q-1.53.901-3.418.93-1.887-.029-3.418-.93a6.77 6.77 0 0 1-2.434-2.434q-.901-1.53-.93-3.418.028-1.887.93-3.418a6.77 6.77 0 0 1 2.434-2.434q1.53-.901 3.418-.93m1.45 2.543a.77.77 0 0 0-.083.656.95.95 0 0 0 .383.547q.328.165.684.082a.96.96 0 0 0 .52-.41.93.93 0 0 0 .081-.657.83.83 0 0 0-.41-.546.93.93 0 0 0-.656-.082.82.82 0 0 0-.52.41m-5.852 5.113a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629.85.85 0 0 0-.246-.629.85.85 0 0 0-.63-.246.82.82 0 0 0-.6.246.85.85 0 0 0-.247.629q0 .383.246.629a.82.82 0 0 0 .602.246m.793.082a3.78 3.78 0 0 0 1.53 2.16l.657-1.094q-1.065-.793-1.066-2.023 0-1.23 1.066-2.023l-.656-1.094a3.78 3.78 0 0 0-1.531 2.16q.437.41.437.957 0 .575-.437.957m6.234 3.61a.83.83 0 0 0 .41-.547.93.93 0 0 0-.082-.657.96.96 0 0 0-.52-.41 1 1 0 0 0-.683.082.85.85 0 0 0-.383.547.77.77 0 0 0 .082.656q.192.329.52.41a.93.93 0 0 0 .656-.082m.027-1.915q.957-.957 1.094-2.406l-1.258-.027q-.19 1.312-1.23 1.941-1.067.602-2.297.11l-.629 1.093q.984.438 1.723.383.738-.054.93-.137.109-.6.6-.875.495-.274 1.067-.082m-.164-2.87 1.258-.028q-.137-1.449-1.121-2.406-.546.19-1.04-.082-.491-.274-.6-.875h-.028q-.165-.082-.902-.137-.739-.055-1.723.383l.629 1.12q1.23-.519 2.297.083 1.04.63 1.23 1.941' />
    </g>
    <defs>
      <clipPath id='62bd3f4860d56716c01fb170f4c3a723__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUbuntuSmIcon);
export default ForwardRef;
