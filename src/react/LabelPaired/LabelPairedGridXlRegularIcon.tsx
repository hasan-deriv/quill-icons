import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGridXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.125 9h-2.25q-.328.047-.375.375v2.25q.046.328.375.375h2.25q.329-.047.375-.375v-2.25Q4.454 9.047 4.125 9m-2.25-1.5h2.25q.797 0 1.313.563Q6 8.577 6 9.375v2.25q0 .797-.562 1.313-.516.562-1.313.562h-2.25q-.797 0-1.312-.562Q0 12.422 0 11.625v-2.25q0-.797.563-1.312.514-.564 1.312-.563m2.25 9h-2.25q-.328.046-.375.375v2.25q.046.329.375.375h2.25q.329-.046.375-.375v-2.25q-.046-.329-.375-.375M1.875 15h2.25q.797 0 1.313.563.562.514.562 1.312v2.25q0 .797-.562 1.313Q4.922 21 4.125 21h-2.25q-.797 0-1.312-.562Q0 19.922 0 19.125v-2.25q0-.797.563-1.312Q1.077 15 1.875 15m0 9q-.328.046-.375.375v2.25q.046.329.375.375h2.25q.329-.046.375-.375v-2.25q-.046-.329-.375-.375zM0 24.375q0-.797.563-1.312.514-.563 1.312-.563h2.25q.797 0 1.313.563.562.514.562 1.312v2.25q0 .797-.562 1.313-.516.562-1.313.562h-2.25q-.797 0-1.312-.562Q0 27.422 0 26.625zM11.625 9h-2.25q-.328.047-.375.375v2.25q.047.328.375.375h2.25q.328-.047.375-.375v-2.25q-.047-.328-.375-.375m-2.25-1.5h2.25q.797 0 1.313.563.562.514.562 1.312v2.25q0 .797-.562 1.313-.516.562-1.313.562h-2.25q-.797 0-1.312-.562-.564-.516-.563-1.313v-2.25q0-.797.563-1.312.514-.564 1.312-.563m0 9q-.328.046-.375.375v2.25q.047.329.375.375h2.25q.328-.046.375-.375v-2.25q-.047-.329-.375-.375zm-1.875.375q0-.797.563-1.312Q8.577 15 9.375 15h2.25q.797 0 1.313.563.562.514.562 1.312v2.25q0 .797-.562 1.313-.516.562-1.313.562h-2.25q-.797 0-1.312-.562-.564-.516-.563-1.313zM11.625 24h-2.25q-.328.046-.375.375v2.25q.047.329.375.375h2.25q.328-.046.375-.375v-2.25q-.047-.329-.375-.375m-2.25-1.5h2.25q.797 0 1.313.563.562.514.562 1.312v2.25q0 .797-.562 1.313-.516.562-1.313.562h-2.25q-.797 0-1.312-.562-.564-.516-.563-1.313v-2.25q0-.797.563-1.312.514-.563 1.312-.563m7.5-13.5q-.329.047-.375.375v2.25q.046.328.375.375h2.25q.329-.047.375-.375v-2.25q-.046-.328-.375-.375zM15 9.375q0-.797.563-1.312.514-.564 1.312-.563h2.25q.797 0 1.313.563.562.514.562 1.312v2.25q0 .797-.562 1.313-.516.562-1.313.562h-2.25q-.797 0-1.312-.562Q15 12.422 15 11.625zm4.125 7.125h-2.25q-.329.046-.375.375v2.25q.046.329.375.375h2.25q.329-.046.375-.375v-2.25q-.046-.329-.375-.375m-2.25-1.5h2.25q.797 0 1.313.563.562.514.562 1.312v2.25q0 .797-.562 1.313-.516.562-1.313.562h-2.25q-.797 0-1.312-.562Q15 19.922 15 19.125v-2.25q0-.797.563-1.312.514-.563 1.312-.563m0 9q-.329.046-.375.375v2.25q.046.329.375.375h2.25q.329-.046.375-.375v-2.25q-.046-.329-.375-.375zM15 24.375q0-.797.563-1.312.514-.563 1.312-.563h2.25q.797 0 1.313.563.562.514.562 1.312v2.25q0 .797-.562 1.313-.516.562-1.313.562h-2.25q-.797 0-1.312-.562Q15 27.422 15 26.625z' />
    </g>
    <defs>
      <clipPath id='0e58cbe84a2d4231d7faf1704c728f4e__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGridXlRegularIcon);
export default ForwardRef;
