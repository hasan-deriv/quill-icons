import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOfframpLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 10.5c0-2.734 2.227-5 5-5 2.734 0 5 2.266 5 5 0 .508-.078.977-.234 1.445l3.789 3.79A4.5 4.5 0 0 1 17.5 15.5c2.734 0 5 2.266 5 5 0 2.773-2.266 5-5 5H5.625c-1.758 0-3.125-1.367-3.125-3.125zm1.25 3.32v8.555c0 1.055.82 1.875 1.875 1.875h8.555c-1.055-.898-1.68-2.227-1.68-3.75 0-1.797.938-3.36 2.344-4.219l-3.125-3.125A4.92 4.92 0 0 1 7.5 15.5c-1.523 0-2.852-.625-3.75-1.68M7.5 6.75a3.82 3.82 0 0 0-3.281 1.875 3.85 3.85 0 0 0 0 3.79c.664 1.132 1.914 1.874 3.242 1.874 1.367 0 2.578-.742 3.281-1.875.664-1.172.664-2.617 0-3.75C10.078 7.492 8.828 6.79 7.5 6.75m6.406 2.695a.66.66 0 0 1 .899 0l2.695 2.696v-1.016c0-.312.273-.625.625-.625.313 0 .625.313.625.625v2.5c0 .273-.156.508-.39.586-.235.117-.508.039-.704-.117l-3.75-3.75a.66.66 0 0 1 0-.899M17.5 16.75c-.508 0-.937.117-1.367.273h-.04A3.76 3.76 0 0 0 13.75 20.5a3.751 3.751 0 0 0 7.5 0c0-2.07-1.68-3.75-3.75-3.75M6.836 7.57v.86h.86v-.86h.82v.86c.312 0 .586.117.82.312a1.24 1.24 0 0 1 .078 1.758c.234.234.352.547.352.86 0 .703-.586 1.25-1.25 1.25v.82h-.82v-.82h-.86v.82h-.82v-.82h-.82v-.86h.82v-2.5h-.82v-.82h.82v-.86zm1.68 3.36h-1.68v.82h1.68c.234 0 .43-.195.43-.43 0-.195-.196-.39-.43-.39m0-1.68h-1.68v.86h1.68c.234 0 .43-.196.43-.43a.433.433 0 0 0-.43-.43m9.492 8.125v.469c.664.195 1.094.82 1.094 1.523v.156h-1.016v-.156c0-.312-.273-.586-.625-.586a.6.6 0 0 0-.586.586c0 .352.273.625.586.625.898 0 1.64.742 1.64 1.64 0 .704-.43 1.329-1.093 1.524v.469h-1.055v-.469c-.664-.195-1.094-.82-1.094-1.523v-.156h1.016v.156a.6.6 0 0 0 .586.586c.352 0 .625-.274.625-.586a.617.617 0 0 0-.625-.625c-.898 0-1.602-.742-1.602-1.64 0-.704.43-1.329 1.094-1.524v-.469z' />
    </g>
    <defs>
      <clipPath id='6f8f9a1e1b8d171fd3c238acacfc5f8e__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOfframpLgRegularIcon);
export default ForwardRef;
