import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.5 8.625q-1.914.039-3.477.781a9.7 9.7 0 0 0-2.773 1.875 13.4 13.4 0 0 0-1.914 2.188A18 18 0 0 0 2.164 15.5q.43.898 1.172 2.031.78 1.134 1.914 2.188a9.7 9.7 0 0 0 2.773 1.875q1.563.742 3.477.781 1.914-.04 3.477-.781a9.7 9.7 0 0 0 2.773-1.875 13.4 13.4 0 0 0 1.914-2.188q.742-1.133 1.172-2.031a18 18 0 0 0-1.172-2.031 13.4 13.4 0 0 0-1.914-2.188 9.7 9.7 0 0 0-2.773-1.875q-1.563-.742-3.477-.781m-7.54 1.29a12.8 12.8 0 0 1 3.282-2.227q1.875-.9 4.258-.938 2.383.04 4.258.938a12.8 12.8 0 0 1 3.281 2.226q1.368 1.29 2.266 2.656.898 1.368 1.367 2.461.195.469 0 .938-.469 1.094-1.367 2.46-.899 1.368-2.266 2.657a12.8 12.8 0 0 1-3.281 2.227q-1.876.898-4.258.937-2.383-.039-4.258-.937a12.8 12.8 0 0 1-3.281-2.227q-1.368-1.29-2.266-2.656-.898-1.368-1.328-2.461a1.17 1.17 0 0 1 0-.938q.43-1.094 1.328-2.46.899-1.368 2.266-2.657m7.54 8.71q1.328-.04 2.227-.898.858-.9.898-2.227-.039-1.328-.898-2.227-.9-.858-2.227-.898h-.078q.078.313.078.625-.039 1.055-.742 1.758T9 15.5q-.312 0-.625-.078v.078q.04 1.328.898 2.227.9.858 2.227.898m0-8.125q1.368 0 2.5.664A5.17 5.17 0 0 1 15.836 13q.664 1.172.664 2.5t-.664 2.5A5.17 5.17 0 0 1 14 19.836a4.85 4.85 0 0 1-2.5.664 4.85 4.85 0 0 1-2.5-.664A5.17 5.17 0 0 1 7.164 18a5 5 0 0 1-.664-2.5q0-1.328.664-2.5A5.17 5.17 0 0 1 9 11.164a4.85 4.85 0 0 1 2.5-.664' />
    </g>
    <defs>
      <clipPath id='c95f9562f84329ead8626d6bf367ffe9__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeLgBoldIcon);
export default ForwardRef;
