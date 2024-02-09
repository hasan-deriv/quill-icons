import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOnrampLgRegularIcon = (
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
      <path d='M17.5 6.75c-1.367.04-2.617.742-3.281 1.914-.664 1.133-.664 2.578 0 3.75.703 1.133 1.914 1.875 3.281 1.875 1.328 0 2.578-.742 3.242-1.875a3.85 3.85 0 0 0 0-3.789C20.078 7.492 18.828 6.75 17.5 6.75m3.75 7.07a4.97 4.97 0 0 1-3.75 1.68c-1.797 0-3.398-.937-4.258-2.344l-3.125 3.125c1.406.86 2.383 2.422 2.383 4.219a4.88 4.88 0 0 1-1.719 3.75h8.594c1.016 0 1.875-.82 1.875-1.875zM7.5 24.25c2.07 0 3.75-1.68 3.75-3.75a3.74 3.74 0 0 0-2.383-3.477h-.039A3.7 3.7 0 0 0 7.5 16.75a3.751 3.751 0 0 0 0 7.5m1.406-8.516 3.79-3.789c-.157-.468-.196-.937-.196-1.445 0-2.734 2.227-5 5-5 2.734 0 5 2.266 5 5v11.875a3.11 3.11 0 0 1-3.125 3.125H7.5c-2.773 0-5-2.227-5-5 0-2.734 2.227-5 5-5q.704 0 1.406.234M6.25 9.875c0-.312.273-.625.625-.625h3.75c.234 0 .469.156.547.39.117.235.039.508-.117.704l-3.75 3.75a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899L9.102 10.5H6.875a.617.617 0 0 1-.625-.625m1.758 7.5v.469c.664.195 1.094.82 1.094 1.523v.156H8.086v-.156c0-.312-.274-.586-.625-.586a.6.6 0 0 0-.586.586c0 .352.273.625.586.625.898 0 1.64.742 1.64 1.64 0 .704-.43 1.329-1.093 1.524v.469H6.953v-.469c-.664-.195-1.094-.82-1.094-1.523v-.156h1.016v.156a.6.6 0 0 0 .586.586c.351 0 .625-.274.625-.586a.617.617 0 0 0-.625-.625c-.899 0-1.602-.742-1.602-1.64 0-.704.43-1.329 1.094-1.524v-.469zm8.867-9.805v.86h.82v-.86h.82v.86c.313 0 .626.117.82.312a1.24 1.24 0 0 1 .08 1.758c.233.234.35.547.35.86 0 .703-.585 1.25-1.25 1.25v.82h-.82v-.82h-.82v.82h-.86v-.82h-.82v-.86h.82v-2.5h-.82v-.82h.82v-.86zm1.64 3.36h-1.64v.82h1.64c.235 0 .43-.195.43-.43 0-.195-.195-.39-.43-.39m0-1.68h-1.64v.86h1.64c.235 0 .43-.196.43-.43a.433.433 0 0 0-.43-.43' />
    </g>
    <defs>
      <clipPath id='0b2af0e34fbffee4a0b6b28e03cf1f7d__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOnrampLgRegularIcon);
export default ForwardRef;
