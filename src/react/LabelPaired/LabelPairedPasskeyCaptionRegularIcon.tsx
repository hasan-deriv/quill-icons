import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasskeyCaptionRegularIcon = (
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
      <path d='M5.93 9.875a8 8 0 0 1 1.054-.07c.188 0 .375 0 .54.023.187 0 .351.024.539.047h.023q-.07.81.281 1.547c.258.469.61.867 1.055 1.148v1.57H2.555v-1.85c0-.352.093-.68.304-.985.188-.305.422-.54.75-.703.54-.258 1.079-.47 1.664-.586.211-.07.446-.118.657-.141m-2.438 1.828 3.844-1.148h-.352c-.515 0-1.03.047-1.546.187a7.2 7.2 0 0 0-1.5.54 1.1 1.1 0 0 0-.446.421m3.844-1.148-3.844 1.148a1.1 1.1 0 0 0-.187.586v1.102h5.367v-.446a3.44 3.44 0 0 1-.961-1.195 3.6 3.6 0 0 1-.375-1.195M6.023 9.102a2.3 2.3 0 0 1-.75-.516 2.35 2.35 0 0 1-.703-1.711c0-.656.235-1.242.703-1.71a2.35 2.35 0 0 1 1.711-.704c.68 0 1.243.234 1.711.703.492.469.727 1.055.727 1.711s-.235 1.242-.727 1.71c-.21.235-.468.4-.726.517-.14.046-.258.093-.399.14-.187.024-.375.047-.586.047-.351 0-.656-.047-.96-.187m-.21-1.055c.328.351.703.492 1.171.492.47 0 .844-.14 1.196-.492.328-.328.492-.703.492-1.172s-.164-.844-.492-1.172c-.352-.328-.727-.492-1.196-.492s-.843.164-1.171.492c-.352.328-.493.703-.493 1.172s.14.844.492 1.172m5.46 7.289 1.102-1.102-.844-.82.844-.82-.68-.703c.375-.141.657-.375.89-.68.212-.328.33-.68.33-1.102 0-.515-.188-.984-.563-1.359a1.84 1.84 0 0 0-1.36-.562c-.539 0-.984.187-1.36.562a1.84 1.84 0 0 0-.562 1.36c0 .445.117.82.375 1.171.258.328.586.563.985.68v2.555zm-.28-4.945a.62.62 0 0 1-.516-.258.65.65 0 0 1 0-.586c.117-.164.304-.281.515-.258a.51.51 0 0 1 .492.258.53.53 0 0 1 0 .586c-.093.164-.28.258-.492.258' />
    </g>
    <defs>
      <clipPath id='66ab842decbc5d9cef8781903414f27a__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasskeyCaptionRegularIcon);
export default ForwardRef;
