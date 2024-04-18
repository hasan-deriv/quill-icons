import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.438 6.438V8.39c1.054.117 2.03.312 2.773.468a.942.942 0 1 1-.43 1.836c-1.21-.273-2.969-.625-4.453-.468q-1.113.059-1.758.468c-.39.274-.664.625-.78 1.211-.118.43-.04.742.077.938.078.234.313.43.664.664.742.469 1.875.742 3.164 1.094l.117.039c1.211.312 2.579.664 3.633 1.289a3.3 3.3 0 0 1 1.328 1.406c.352.625.391 1.367.274 2.148-.274 1.407-1.29 2.305-2.54 2.774a7 7 0 0 1-2.07.43v1.875c0 .546-.43.937-.937.937-.547 0-.937-.39-.937-.937v-1.915c-.157-.039-.274-.039-.391-.078-.977-.117-2.695-.508-3.75-.976-.469-.235-.703-.782-.469-1.25.195-.469.742-.664 1.211-.469.86.352 2.383.742 3.242.86 1.407.195 2.578.078 3.438-.235.82-.312 1.25-.781 1.328-1.367.117-.43.039-.742-.078-.938-.078-.234-.313-.468-.664-.664-.742-.468-1.836-.781-3.164-1.093l-.118-.04c-1.21-.312-2.578-.664-3.632-1.289-.508-.351-1.016-.78-1.328-1.406-.313-.664-.391-1.367-.235-2.148.195-1.133.781-1.914 1.602-2.422.78-.508 1.718-.703 2.617-.781.117-.04.234-.04.39-.04V6.438c0-.508.391-.938.938-.938a.95.95 0 0 1 .938.938' />
    </g>
    <defs>
      <clipPath id='05fc41f2db815a1f1b78bb9f323c3730__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignLgBoldIcon);
export default ForwardRef;
