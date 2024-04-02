import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownLgBoldIcon = (
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
      <path d='M12.617 24.172c-1.484.43-3.047-.469-3.476-1.953l-.196-.782a3.7 3.7 0 0 0-.78-1.367l-1.993-2.187a.97.97 0 0 1 .039-1.328.933.933 0 0 1 1.328.078L9.57 18.82c.547.586.938 1.328 1.172 2.11l.195.78a.98.98 0 0 0 1.172.665.98.98 0 0 0 .664-1.172l-.234-.781a7.6 7.6 0 0 0-1.055-2.188c-.195-.273-.195-.664-.039-.976a.91.91 0 0 1 .82-.508H17.5a.64.64 0 0 0 .625-.625c0-.234-.195-.469-.43-.586-.273-.078-.508-.351-.586-.625a.88.88 0 0 1 .235-.86c.078-.117.156-.234.156-.429a.624.624 0 0 0-.508-.586c-.351-.078-.625-.312-.703-.586a1 1 0 0 1 .117-.937.6.6 0 0 0 .157-.391c0-.234-.196-.469-.43-.586-.43-.156-.664-.625-.547-1.094 0-.078.039-.117.039-.195 0-.312-.312-.625-.625-.625h-3.828c-.508 0-.977.156-1.367.43l-2.422 1.601a.876.876 0 0 1-1.29-.273c-.312-.43-.195-.977.235-1.29l2.422-1.6a4.4 4.4 0 0 1 2.422-.743H15c1.328 0 2.422 1.094 2.5 2.422.547.469.938 1.172.938 1.953 0 .195-.04.352-.079.508.625.469 1.016 1.172 1.016 1.992 0 .273-.04.508-.117.742.43.469.742 1.094.742 1.758 0 1.406-1.133 2.5-2.5 2.5h-3.633q.293.645.469 1.29l.234.78a2.804 2.804 0 0 1-1.953 3.477M1.25 20.5C.547 20.5 0 19.953 0 19.25V10.5c0-.664.547-1.25 1.25-1.25h2.5c.664 0 1.25.586 1.25 1.25v8.75c0 .703-.586 1.25-1.25 1.25z' />
    </g>
    <defs>
      <clipPath id='59a29173b6d96a5869d1a33102206b77__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownLgBoldIcon);
export default ForwardRef;
