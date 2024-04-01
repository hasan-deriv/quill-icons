import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.875 14V7.25H6a.74.74 0 0 1-.75-.75V4.625H1.5A.385.385 0 0 0 1.125 5v9c0 .21.164.375.375.375h6A.385.385 0 0 0 7.875 14M0 5c0-.82.656-1.5 1.5-1.5h3.867c.399 0 .774.164 1.055.445l2.133 2.133c.28.281.445.656.445 1.055V14c0 .844-.68 1.5-1.5 1.5h-6A1.48 1.48 0 0 1 0 14zm4.5 3.563a.47.47 0 0 1 .469.468v.235c.164.023.328.07.468.093.258.07.422.329.352.563a.45.45 0 0 1-.562.351c-.258-.046-.516-.093-.75-.093a.93.93 0 0 0-.516.093c-.117.07-.117.118-.117.141 0 .024.023.047.094.094.14.07.374.14.68.21.257.071.609.165.866.329.282.164.586.445.586.914.024.492-.258.82-.586.984a1.5 1.5 0 0 1-.539.188v.234a.47.47 0 0 1-.468.469.47.47 0 0 1-.47-.469v-.258c-.234-.046-.444-.117-.632-.164-.047-.023-.094-.023-.14-.047a.47.47 0 0 1-.329-.585.45.45 0 0 1 .586-.305c.07 0 .117.023.164.047.328.093.586.164.844.164a.97.97 0 0 0 .54-.094c.093-.047.116-.094.116-.164 0 0 0-.047-.117-.117a4 4 0 0 0-.68-.211l-.023-.024a6 6 0 0 1-.844-.28c-.281-.165-.586-.446-.586-.915-.023-.492.305-.797.61-.96.164-.095.328-.142.515-.188V9.03a.47.47 0 0 1 .469-.469M2.25 5.75h1.875c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H2.25a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375m0 1.5h1.875c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H2.25a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375' />
    </g>
    <defs>
      <clipPath id='c89c691bca832b34c1de0cd21c70e436__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarCaptionBoldIcon);
export default ForwardRef;
