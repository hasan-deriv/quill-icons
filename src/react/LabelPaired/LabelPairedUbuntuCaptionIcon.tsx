import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUbuntuCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 3.688q1.617.022 2.93.796a5.8 5.8 0 0 1 2.086 2.086q.772 1.313.797 2.93-.024 1.617-.797 2.93a5.8 5.8 0 0 1-2.086 2.086q-1.313.772-2.93.797-1.617-.024-2.93-.797A5.8 5.8 0 0 1 .984 12.43Q.212 11.117.188 9.5.21 7.883.984 6.57A5.8 5.8 0 0 1 3.07 4.484Q4.383 3.712 6 3.688m1.242 2.18a.66.66 0 0 0-.07.562.82.82 0 0 0 .328.468.85.85 0 0 0 .586.07.82.82 0 0 0 .445-.35.8.8 0 0 0 .07-.563.7.7 0 0 0-.351-.47.8.8 0 0 0-.562-.07.7.7 0 0 0-.446.352M2.227 10.25a.73.73 0 0 0 .539-.21.73.73 0 0 0 .21-.54.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21.7.7 0 0 0-.515.21.73.73 0 0 0-.211.54q0 .328.21.54.212.21.517.21m.68.07a3.24 3.24 0 0 0 1.312 1.852l.562-.938q-.915-.679-.914-1.734 0-1.055.914-1.734l-.562-.938A3.24 3.24 0 0 0 2.906 8.68q.375.351.375.82 0 .492-.375.82m5.343 3.094a.7.7 0 0 0 .352-.469.8.8 0 0 0-.07-.562.83.83 0 0 0-.446-.352.85.85 0 0 0-.586.07.73.73 0 0 0-.328.47.66.66 0 0 0 .07.562q.165.281.446.351a.8.8 0 0 0 .562-.07m.023-1.64q.82-.82.938-2.063l-1.078-.024q-.165 1.125-1.055 1.665-.915.515-1.969.093l-.539.938q.844.375 1.477.328t.797-.117q.093-.516.515-.75.423-.235.914-.07m-.14-2.461 1.078-.024q-.117-1.242-.961-2.062-.469.163-.89-.07-.423-.236-.516-.75H6.82q-.14-.072-.773-.118-.633-.047-1.477.328l.54.961q1.054-.445 1.968.07.89.54 1.055 1.665' />
    </g>
    <defs>
      <clipPath id='921c71c09aab4162be5bdc9c8d2f6c43__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUbuntuCaptionIcon);
export default ForwardRef;
