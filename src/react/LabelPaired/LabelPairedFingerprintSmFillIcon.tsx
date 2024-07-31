import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFingerprintSmFillIcon = (
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
      <path d='M1.313 10.75v1.094c0 .383-.301.656-.657.656A.63.63 0 0 1 0 11.844V10.75c0-3.855 3.117-7 7-7 2.105 0 4.02.957 5.305 2.46a.68.68 0 0 1-.082.93.68.68 0 0 1-.93-.081C10.253 5.855 8.723 5.062 7 5.062c-3.145 0-5.687 2.57-5.687 5.688m12.523-1.422c.11.465.164.93.164 1.422v1.121c0 .356-.3.656-.656.656a.65.65 0 0 1-.656-.656v-1.094c0-.41-.055-.82-.137-1.203-.082-.328.164-.683.52-.765.355-.082.683.164.765.52M7 5.938a4.82 4.82 0 0 1 4.813 4.812v.684c0 .765-.055 1.53-.137 2.27a.65.65 0 0 1-.656.546c-.383 0-.711-.355-.657-.738.082-.684.137-1.367.137-2.078v-.684c0-1.914-1.586-3.5-3.5-3.5-.328 0-.629.055-.93.137a.78.78 0 0 1-.793-.219c-.3-.328-.191-.848.22-.984A4.6 4.6 0 0 1 7 5.937M4.102 7.824a.74.74 0 0 1 0 .93A3.58 3.58 0 0 0 3.5 10.75v.684c0 .793-.11 1.586-.273 2.351-.055.274-.329.465-.602.465a.678.678 0 0 1-.656-.848 9.2 9.2 0 0 0 .218-1.968v-.684c0-1.094.356-2.133.985-2.926.246-.3.683-.273.93 0M7 8.125a2.626 2.626 0 0 1 2.625 2.625v.684c0 1.093-.11 2.187-.328 3.226a.585.585 0 0 1-.574.465.615.615 0 0 1-.602-.738c.191-.957.3-1.942.3-2.953v-.684c0-.766-.655-1.422-1.421-1.422a1.43 1.43 0 0 0-1.422 1.422v.684c0 1.12-.164 2.214-.437 3.28a.59.59 0 0 1-.575.411c-.41 0-.683-.383-.574-.793.246-.93.383-1.914.383-2.898v-.684A2.626 2.626 0 0 1 7 8.125m.656 2.625v.684c0 1.804-.355 3.582-.984 5.277l-.164.41c-.137.328-.52.52-.848.383s-.52-.52-.383-.848l.164-.41c.602-1.531.903-3.172.903-4.812v-.684c0-.355.273-.656.656-.656.355 0 .656.3.656.656' />
    </g>
    <defs>
      <clipPath id='7ef5f840cc912ce876cccfa701ec952e__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFingerprintSmFillIcon);
export default ForwardRef;
