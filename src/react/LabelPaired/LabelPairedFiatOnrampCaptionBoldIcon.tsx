import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOnrampCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.383 4.625a2.05 2.05 0 0 0-1.711 1.008 1.97 1.97 0 0 0 1.71 2.953 1.97 1.97 0 0 0 1.711-2.953 2 2 0 0 0-1.71-1.008m1.992 4.383a3.13 3.13 0 0 1-1.992.703 3.07 3.07 0 0 1-2.485-1.266L6.422 9.922a3.07 3.07 0 0 1 1.266 2.484c0 .75-.258 1.453-.704 1.969h4.5c.493 0 .891-.398.891-.867zm-7.781 5.367a1.966 1.966 0 0 0 1.968-1.969 1.97 1.97 0 0 0-1.242-1.828h-.023a1.7 1.7 0 0 0-.703-.14c-1.102 0-1.969.89-1.969 1.968a1.95 1.95 0 0 0 1.969 1.969m.75-4.969 2.039-2.039a2.6 2.6 0 0 1-.094-.75c0-1.71 1.383-3.117 3.094-3.117A3.13 3.13 0 0 1 13.5 6.617v6.89c0 1.102-.914 1.993-2.016 1.993h-6.89A3.09 3.09 0 0 1 1.5 12.406a3.09 3.09 0 0 1 3.094-3.094c.258 0 .515.024.75.094M3.633 6.242a.57.57 0 0 1 .562-.562h2.203c.235 0 .446.14.516.351a.54.54 0 0 1-.117.61l-2.18 2.18c-.21.21-.562.21-.797 0a.58.58 0 0 1 0-.798l1.22-1.218h-.845a.555.555 0 0 1-.562-.563m6.422-1.195v.445h.445v-.445h.445v.445c.164 0 .328.047.446.164.28.258.304.68.046.961a.64.64 0 0 1 .188.446.68.68 0 0 1-.68.68v.444H10.5v-.445h-.445v.446h-.446v-.446h-.445v-.445h.445v-1.36h-.445v-.445h.445v-.445zm.89 1.781h-.89v.469h.89a.25.25 0 0 0 .235-.234.25.25 0 0 0-.235-.235m0-.89h-.89v.445h.89c.117 0 .235-.094.235-.211a.235.235 0 0 0-.235-.234m-6.07 4.78v.235c.352.14.61.469.61.844v.07h-.563v-.07a.32.32 0 0 0-.328-.328.32.32 0 0 0-.328.328c0 .187.14.328.328.328a.89.89 0 0 1 .89.89c0 .376-.257.704-.609.844v.235h-.562v-.258a.86.86 0 0 1-.586-.82v-.094h.539v.094c0 .164.14.328.328.328a.335.335 0 0 0 .328-.328.32.32 0 0 0-.328-.328c-.492 0-.867-.399-.867-.891 0-.375.234-.727.586-.844v-.234z' />
    </g>
    <defs>
      <clipPath id='f8632e6ff6cfcb418a8ab9fbd2a0ab53__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOnrampCaptionBoldIcon);
export default ForwardRef;
