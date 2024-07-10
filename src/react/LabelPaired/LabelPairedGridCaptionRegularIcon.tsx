import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGridCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.313 5H1.187A.185.185 0 0 0 1 5.188v1.125c0 .117.07.187.188.187h1.125c.093 0 .187-.07.187-.187V5.188A.2.2 0 0 0 2.313 5m-1.126-.75h1.126a.94.94 0 0 1 .937.938v1.125c0 .539-.422.937-.937.937H1.187a.91.91 0 0 1-.937-.937V5.188c0-.516.398-.938.938-.938m1.126 4.5H1.187A.185.185 0 0 0 1 8.938v1.124c0 .118.07.188.188.188h1.125c.093 0 .187-.07.187-.187V8.937a.2.2 0 0 0-.187-.187M1.187 8h1.126a.94.94 0 0 1 .937.938v1.124c0 .54-.422.938-.937.938H1.187a.91.91 0 0 1-.937-.937V8.937C.25 8.423.648 8 1.188 8m0 4.5a.185.185 0 0 0-.187.188v1.124c0 .118.07.188.188.188h1.125c.093 0 .187-.07.187-.187v-1.126a.2.2 0 0 0-.187-.187zm-.937.188c0-.516.398-.938.938-.938h1.125a.94.94 0 0 1 .937.938v1.124c0 .54-.422.938-.937.938H1.187a.91.91 0 0 1-.937-.937zM6.063 5H4.938a.185.185 0 0 0-.188.188v1.125c0 .117.07.187.188.187h1.125c.093 0 .187-.07.187-.187V5.188A.2.2 0 0 0 6.063 5m-1.125-.75h1.125A.94.94 0 0 1 7 5.188v1.125c0 .539-.422.937-.937.937H4.938A.91.91 0 0 1 4 6.313V5.188c0-.516.398-.938.938-.938m0 4.5a.185.185 0 0 0-.188.188v1.124c0 .118.07.188.188.188h1.125c.093 0 .187-.07.187-.187V8.937a.2.2 0 0 0-.187-.187zM4 8.938C4 8.422 4.398 8 4.938 8h1.125A.94.94 0 0 1 7 8.938v1.124c0 .54-.422.938-.937.938H4.938A.91.91 0 0 1 4 10.063zM6.063 12.5H4.938a.185.185 0 0 0-.188.188v1.124c0 .118.07.188.188.188h1.125c.093 0 .187-.07.187-.187v-1.126a.2.2 0 0 0-.187-.187m-1.125-.75h1.125a.94.94 0 0 1 .937.938v1.124c0 .54-.422.938-.937.938H4.938A.91.91 0 0 1 4 13.813v-1.126c0-.515.398-.937.938-.937M8.688 5a.185.185 0 0 0-.188.188v1.125c0 .117.07.187.188.187h1.124c.094 0 .188-.07.188-.187V5.188A.2.2 0 0 0 9.813 5zm-.938.188c0-.516.398-.938.938-.938h1.124a.94.94 0 0 1 .938.938v1.125c0 .539-.422.937-.937.937H8.687a.91.91 0 0 1-.937-.937zM9.813 8.75H8.687a.185.185 0 0 0-.187.188v1.124c0 .118.07.188.188.188h1.124c.094 0 .188-.07.188-.187V8.937a.2.2 0 0 0-.187-.187M8.687 8h1.126a.94.94 0 0 1 .937.938v1.124c0 .54-.422.938-.937.938H8.687a.91.91 0 0 1-.937-.937V8.937c0-.515.398-.937.938-.937m0 4.5a.185.185 0 0 0-.187.188v1.124c0 .118.07.188.188.188h1.124c.094 0 .188-.07.188-.187v-1.126a.2.2 0 0 0-.187-.187zm-.937.188c0-.516.398-.938.938-.938h1.124a.94.94 0 0 1 .938.938v1.124c0 .54-.422.938-.937.938H8.687a.91.91 0 0 1-.937-.937z' />
    </g>
    <defs>
      <clipPath id='89a9fdbf5fea92c89d8b123d1fa0e775__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGridCaptionRegularIcon);
export default ForwardRef;
