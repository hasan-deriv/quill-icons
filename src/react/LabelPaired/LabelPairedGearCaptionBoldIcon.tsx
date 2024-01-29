import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGearCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 3.5q.61 0 1.172.117.14.024.351.117.188.118.329.352.069.117.117.281l.21.89a.38.38 0 0 0 .165.188q.117.07.234.047l.89-.258a.9.9 0 0 1 .282-.046.87.87 0 0 1 .469.117q.21.117.304.234a5.8 5.8 0 0 1 1.149 2.04q.07.14.07.35a.75.75 0 0 1-.117.47l-.187.234-.68.633a.38.38 0 0 0-.07.234.38.38 0 0 0 .07.234l.68.633.187.235q.117.257.117.468 0 .235-.07.352a5.8 5.8 0 0 1-1.149 2.039 1 1 0 0 1-.304.234.87.87 0 0 1-.469.117.9.9 0 0 1-.281-.046l-.89-.258a.32.32 0 0 0-.235.047.38.38 0 0 0-.164.187l-.211.89q-.047.165-.117.282a1 1 0 0 1-.329.352q-.21.093-.351.117A5.7 5.7 0 0 1 6 15.5q-.61 0-1.172-.117a1.5 1.5 0 0 1-.351-.117 1 1 0 0 1-.329-.352 1.2 1.2 0 0 1-.117-.281l-.21-.89a.38.38 0 0 0-.165-.188.32.32 0 0 0-.234-.047l-.89.258a.9.9 0 0 1-.282.046.87.87 0 0 1-.469-.117q-.21-.117-.281-.234a5.7 5.7 0 0 1-1.172-2.04.8.8 0 0 1-.07-.35.75.75 0 0 1 .117-.47l.188-.234.68-.633a.38.38 0 0 0 .07-.234.38.38 0 0 0-.07-.234l-.68-.633-.188-.235Q.234 8.141.258 7.93q0-.235.07-.352Q.703 6.453 1.5 5.54q.07-.117.281-.234a.87.87 0 0 1 .469-.117q.141 0 .281.046l.89.258q.118.024.235-.047a.38.38 0 0 0 .164-.187l.211-.89q.047-.165.117-.282.141-.235.329-.352.21-.093.351-.117A5.7 5.7 0 0 1 6 3.5m-.89 1.195-.188.844a1.43 1.43 0 0 1-.703.867 1.5 1.5 0 0 1-1.125.164l-.797-.234q-.586.68-.89 1.547l.609.586q.421.422.422 1.031 0 .61-.422 1.055l-.61.562q.305.867.89 1.547l.821-.234q.562-.165 1.102.164.539.304.703.867l.187.844a5.7 5.7 0 0 0 1.782 0l.21-.844q.165-.563.68-.867a1.5 1.5 0 0 1 1.125-.164l.797.234q.586-.68.89-1.547l-.609-.586A1.4 1.4 0 0 1 9.563 9.5q0-.61.421-1.055l.61-.562a4.8 4.8 0 0 0-.89-1.547l-.798.234a1.37 1.37 0 0 1-1.125-.164 1.45 1.45 0 0 1-.68-.89l-.21-.82a5.7 5.7 0 0 0-1.782 0M4.874 9.5q.024.633.563.984.563.282 1.125 0 .538-.351.562-.984a1.17 1.17 0 0 0-.562-.984 1.2 1.2 0 0 0-1.125 0q-.54.351-.563.984M6 11.75q-.609 0-1.125-.305A2.255 2.255 0 0 1 3.75 9.5a2.26 2.26 0 0 1 1.125-1.945A2.17 2.17 0 0 1 6 7.25q.609 0 1.125.305.516.304.82.82.305.54.305 1.125a2.26 2.26 0 0 1-1.125 1.945A2.17 2.17 0 0 1 6 11.75' />
    </g>
    <defs>
      <clipPath id='4ad9081f24399837a232fee3f0a8e791__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearCaptionBoldIcon);
export default ForwardRef;
