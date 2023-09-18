import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEyeSlashBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m1.219 4.156 3.5 2.75a9.013 9.013 0 0 1 2.343-1.375C7.958 5.198 8.938 5.021 10 5c1.27.02 2.406.27 3.406.75s1.875 1.073 2.625 1.781c.73.688 1.334 1.396 1.813 2.125.479.73.843 1.386 1.093 1.969.084.25.084.5 0 .75-.229.52-.552 1.104-.968 1.75a12.917 12.917 0 0 1-1.532 1.969l3.282 2.562c.333.313.375.667.125 1.063-.313.333-.667.375-1.063.125l-18.5-14.5C-.052 5.03-.094 4.677.156 4.28c.313-.333.667-.375 1.063-.125Zm4.718 3.688 1.438 1.125C8.105 8.344 8.979 8.02 10 8c1.125.02 2.073.406 2.844 1.156.75.771 1.135 1.719 1.156 2.844 0 .667-.146 1.281-.438 1.844l1.688 1.312c.52-.541.969-1.094 1.344-1.656.375-.563.666-1.063.875-1.5-.23-.48-.542-1.02-.938-1.625A10.71 10.71 0 0 0 15 8.625a7.718 7.718 0 0 0-2.219-1.5c-.833-.396-1.76-.604-2.781-.625-1.583.042-2.938.49-4.063 1.344Zm6.407 5.031c.104-.27.156-.563.156-.875-.02-.708-.26-1.302-.719-1.781C11.302 9.76 10.708 9.52 10 9.5h-.063c.042.167.063.333.063.5 0 .313-.073.604-.219.875l2.563 2Zm.281 4.094L13.938 18c-1.126.625-2.438.958-3.938 1-1.27-.02-2.406-.27-3.406-.75A9.704 9.704 0 0 1 4 16.469c-.75-.688-1.365-1.396-1.844-2.125-.479-.73-.833-1.386-1.062-1.969a.94.94 0 0 1 0-.75c.291-.75.791-1.604 1.5-2.563l1.187.907c-.562.75-.979 1.427-1.25 2.031.23.48.542 1.02.938 1.625.416.604.927 1.188 1.531 1.75a7.719 7.719 0 0 0 2.219 1.5c.833.396 1.76.604 2.781.625.958-.02 1.833-.198 2.625-.531ZM6 12v-.25l1.75 1.375c.354.688.917 1.125 1.688 1.313l1.75 1.374A3.73 3.73 0 0 1 10 16c-1.125-.02-2.073-.406-2.844-1.156C6.406 14.073 6.021 13.125 6 12Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashBoldIcon);
export default ForwardRef;
