import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapLeftCaptionBoldIcon = (
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
      <path d='M3.21 8c0-.82.68-1.5 1.5-1.5.821 0 1.5.68 1.5 1.5 0 .258-.046.492-.163.703l.469.961.023-.023c.024-.024.047-.024.07-.047.305-.14.68-.094.961.094.047-.047.117-.07.188-.118a.96.96 0 0 1 .937.094c.024-.023.047-.023.047-.047.024 0 .047-.023.07-.023a.915.915 0 0 1 1.243.445l.656 1.383a1.72 1.72 0 0 1-.844 2.32l-1.664.797c-.351.164-.75.234-1.125.211h-.047a2.23 2.23 0 0 1-1.828-1.266l-.047-.14a1.22 1.22 0 0 1-.047-1.031l.164-.376c.024-.07.07-.164.118-.257L4.336 9.453A1.51 1.51 0 0 1 3.21 8m1.43-.07a.92.92 0 0 1 .891.047.81.81 0 0 0-.82-.797.83.83 0 0 0-.586 1.406.97.97 0 0 1 .516-.656m1.97 4.664-.024-.024c.07.117 0 .258-.094.328-.14.047-.258 0-.328-.117l-.258-.562-.14.351a.55.55 0 0 0 0 .47l.07.14c.234.492.703.82 1.242.867h.047q.423.034.773-.14l1.688-.798c.516-.234.726-.867.492-1.382l-.656-1.383c-.047-.117-.211-.164-.305-.117a.3.3 0 0 0-.117.117.41.41 0 0 1-.328.164.37.37 0 0 1-.305-.188c-.047-.117-.187-.164-.305-.117a.32.32 0 0 0-.14.164c-.024.14-.14.281-.305.281-.14.024-.281-.07-.351-.187l-.047-.117c-.047-.117-.211-.14-.305-.094-.07.023-.117.07-.14.164a.305.305 0 0 1-.305.258.33.33 0 0 1-.352-.188l-.586-1.218-.281-.633c-.07-.07-.21-.117-.305-.07a.24.24 0 0 0-.117.257l.281.633zM2.577 4.25a.335.335 0 0 0-.328.328v9.867c0 .164.14.328.328.328a.335.335 0 0 0 .328-.328V4.578a.335.335 0 0 0-.328-.328' />
    </g>
    <defs>
      <clipPath id='01eefceeca734798cd3f9bb608d06691__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapLeftCaptionBoldIcon);
export default ForwardRef;
