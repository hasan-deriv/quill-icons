import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDerivP2pCaptionFillIcon = (
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
      <path d='M4.852 8.492c-.094-.023-.188-.023-.305-.023h-.164c-.024 0-.047.023-.07.023h-.07v.961H4.5c.258 0 .445-.023.586-.094.14-.07.187-.21.187-.398 0-.094 0-.188-.046-.234a.32.32 0 0 0-.141-.165c-.07-.023-.14-.046-.234-.07m5.414 0c-.07-.023-.188-.023-.282-.023h-.187c-.047 0-.07.023-.094.023H9.68v.961h.234c.258 0 .469-.023.586-.094.14-.07.21-.21.21-.398 0-.094-.023-.188-.07-.234a.32.32 0 0 0-.14-.165 1.5 1.5 0 0 0-.234-.07M3.75 3.5h7.5a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-7.5A2.25 2.25 0 0 1 3.75 3.5m.54 4.336h-.282c-.094.023-.188.023-.258.047-.094 0-.187.023-.258.023v3.328h.75V10.11H4.5c.492 0 .89-.093 1.148-.28.282-.165.422-.47.422-.868 0-.399-.14-.703-.398-.867-.281-.188-.656-.281-1.172-.281-.07 0-.14.023-.21.023m4.054.516a.9.9 0 0 0-.211-.305c-.094-.07-.211-.14-.352-.188a1.6 1.6 0 0 0-.515-.07c-.211 0-.422.047-.61.14-.187.071-.351.188-.492.329l.352.492a.5.5 0 0 1 .117-.07.4.4 0 0 1 .164-.117c.047-.047.117-.07.21-.094.071-.047.141-.047.235-.047.117 0 .235.023.305.07.094.07.117.164.117.305 0 .07 0 .14-.047.21a2 2 0 0 1-.117.188l-.398.399c-.047.047-.118.094-.165.14l-.14.141c-.094.094-.188.21-.281.328-.07.117-.141.235-.188.352-.047.14-.07.28-.07.445v.234h2.25v-.609H7.055a.5.5 0 0 0 .07-.117c.047-.047.094-.094.14-.164.048-.024.07-.07.118-.094 0-.023.023-.047.047-.07l.445-.446c.094-.07.164-.164.234-.257l.047-.047c.07-.094.14-.211.188-.328a.9.9 0 0 0 .07-.352c0-.14-.023-.281-.07-.398m1.594-.54h-.024c-.07 0-.117.024-.187.024h-.282c-.187.023-.375.047-.539.07v3.328h.774V10.11h.234c.492 0 .89-.093 1.172-.28.258-.165.398-.47.398-.868 0-.399-.14-.703-.398-.867-.281-.164-.656-.258-1.172-.281z' />
    </g>
    <defs>
      <clipPath id='37cfdb8a6c474a6f59435a100fb475f7__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivP2pCaptionFillIcon);
export default ForwardRef;
