import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHuaweiXlIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.547 10.688s4.828 5.812 8.39 13.546v.047l-.046.094c-.047.047-.094 0-.094 0-1.313-.656-6.844-3.469-9.14-5.672 0 0-1.407-1.125-1.548-3v-.469c.141-2.343 2.438-4.546 2.438-4.546m7.5 15.562v.047zs0 .047-.047.14c-.89.61-3.656 2.532-4.875 2.86-1.734.422-3.422-.984-4.453-2.766l9.234-.328s.094 0 .14.094m.094-.937s.046 0 .046.046v.094s-.046.047-.093.047H5.156s-.89 0-1.734-.375c0 0-1.922-.656-2.953-2.766 0 0-.469-.937-.469-2.297v-.046c0-.516.047-1.078.234-1.641 0 0 7.875 4.172 11.907 6.938M11.297 7.03v-.047s1.078-.234 1.5-.28c0 0 2.719 3.562 1.406 16.78 0 .047-.047.047-.047.094l-.047.047s-.046 0-.14-.047c-.844-1.265-4.828-7.172-5.672-10.828 0 0-.188-.562-.188-1.312v-.47a4.4 4.4 0 0 1 .938-2.53 3.95 3.95 0 0 1 2.25-1.407m10.36 2.813c.468 1.172 0 2.906 0 2.906-.798 3.61-4.782 9.516-5.673 10.828 0 0-.046.047-.14.047 0 0-.047-.047-.094-.14-1.312-13.266 1.406-16.782 1.406-16.782.75.14 1.453.281 1.453.281 2.438.61 3.047 2.86 3.047 2.86m-3.61 16.36v-.048H18l9.281.328c-1.406 2.391-2.906 2.813-3.75 2.813h-.187c-.328 0-.563-.047-.563-.047-1.265-.375-3.937-2.25-4.828-2.86-.047-.046-.047-.14-.047-.14.047-.047.14-.047.14-.047m9.75-10.548c-.047 1.875-1.5 3.047-1.5 3.047-2.25 2.203-7.781 5.016-9.094 5.672h-.141c-.046-.094 0-.187 0-.187 3.516-7.641 8.344-13.5 8.344-13.5s2.578 2.39 2.39 4.968m1.922 2.672v.047c.703 2.11-.235 3.89-.235 3.89-.984 2.204-2.953 2.86-2.953 2.86-.89.328-1.593.328-1.593.328-.141.047-5.625.047-7.079.047-.047 0-.093-.094-.093-.094 0-.047.047-.14.047-.14 4.03-2.72 11.906-6.938 11.906-6.938' />
    </g>
    <defs>
      <clipPath id='38e7a1943392881d2b047f942b9a8a1c__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHuaweiXlIcon);
export default ForwardRef;
