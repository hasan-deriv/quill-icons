import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightUserTieCircleDollarCaptionFillIcon = (
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
      <path d='M0 14.797a3.78 3.78 0 0 1 2.836-3.68c.21-.047.375.094.422.281l.844 3.446.796-2.906-.445-.727c-.14-.258.024-.586.328-.586h.914c.305 0 .47.328.328.586l-.445.726.797 2.907.844-3.446a.36.36 0 0 1 .398-.28 3.6 3.6 0 0 0-.117 1.007c0 1.406.68 2.648 1.734 3.375H.703A.69.69 0 0 1 0 14.797M2.25 6.5c0-1.055.563-2.062 1.5-2.578a2.99 2.99 0 0 1 3 0A3 3 0 0 1 8.25 6.5a3.03 3.03 0 0 1-1.5 2.602c-.937.539-2.086.539-3 0A2.98 2.98 0 0 1 2.25 6.5m6 5.625c0-1.852 1.5-3.375 3.375-3.375A3.39 3.39 0 0 1 15 12.125a3.376 3.376 0 0 1-3.375 3.375 3.36 3.36 0 0 1-3.375-3.375m2.063-.633a.86.86 0 0 0 .492.727c.21.117.468.187.68.234 0 .024.023.024.046.024.235.07.422.117.54.187.093.07.117.094.117.14 0 .048-.024.094-.024.094l-.094.094c-.117.047-.28.07-.445.07-.21 0-.422-.07-.703-.164-.047 0-.094-.023-.14-.023-.188-.07-.4.047-.47.234-.046.211.047.422.258.47.024.023.07.023.117.046.165.047.352.117.563.14v.282c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375v-.258q.21-.035.422-.14c.281-.165.515-.446.515-.868-.023-.375-.257-.61-.492-.75-.21-.14-.492-.21-.703-.281h-.023c-.235-.07-.422-.117-.563-.187-.094-.07-.094-.094-.094-.118v-.07c.024-.023.047-.047.118-.094.117-.047.28-.094.422-.094.21 0 .398.047.632.094.188.07.399-.07.446-.258.047-.21-.07-.421-.282-.468a13 13 0 0 0-.398-.07v-.235a.385.385 0 0 0-.375-.375.37.37 0 0 0-.375.375v.234a1.1 1.1 0 0 0-.422.141c-.281.14-.539.422-.515.867' />
    </g>
    <defs>
      <clipPath id='c2f4f9f98b7d500e598ff308c8878f7c__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightUserTieCircleDollarCaptionFillIcon);
export default ForwardRef;
