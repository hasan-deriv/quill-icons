import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondCaptionBoldIcon = (
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
      <path d='M6.96 3.734a.723.723 0 0 1 1.056 0l2.25 2.25a.723.723 0 0 1 0 1.055l-2.25 2.25a.723.723 0 0 1-1.055 0L4.71 7.04a.723.723 0 0 1 0-1.055zM1.689 5c.914 0 1.687.773 1.687 1.688V9.71a1.67 1.67 0 0 1 1.055-.399c.422 0 .843.188 1.148.493l1.43 1.43c.187.187.351.374.492.585a2.7 2.7 0 0 1 .469-.586l1.43-1.43a1.66 1.66 0 0 1 1.148-.492c.422 0 .797.165 1.078.399V6.687c0-.914.75-1.687 1.688-1.687S15 5.773 15 6.688v5.085c0 .727-.305 1.454-.82 1.993l-1.594 1.57c-.234.234-.586.234-.797 0a.513.513 0 0 1 0-.774l1.594-1.593c.305-.328.492-.75.492-1.196V6.688a.57.57 0 0 0-.562-.563.555.555 0 0 0-.563.563v3.421c0 .61-.258 1.196-.68 1.618l-.375.375-.61.609-.374.375c-.234.234-.586.234-.797 0a.513.513 0 0 1 0-.774l.375-.374.61-.633a.55.55 0 0 0 .164-.352.5.5 0 0 0-.516-.492.52.52 0 0 0-.352.14l-1.43 1.43c-.468.446-.703 1.078-.703 1.711v1.195a.555.555 0 0 1-.562.563.54.54 0 0 1-.562-.562v-1.196c0-.633-.258-1.265-.727-1.71l-1.43-1.43a.55.55 0 0 0-.351-.165.5.5 0 0 0-.492.516c0 .117.046.258.14.352l.633.61.375.374c.21.234.21.586 0 .797-.234.234-.586.234-.797 0l-.375-.375-.633-.61-.375-.374a2.29 2.29 0 0 1-.656-1.618V6.688a.57.57 0 0 0-.562-.563.555.555 0 0 0-.563.563v5.085c0 .446.164.868.492 1.196l1.594 1.57c.21.234.21.586 0 .797-.234.234-.586.234-.797 0L.82 13.766A2.78 2.78 0 0 1 0 11.773V6.688C0 5.773.75 5 1.688 5' />
    </g>
    <defs>
      <clipPath id='6d45821bbcd3d1917c9a67b770467e9a__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondCaptionBoldIcon);
export default ForwardRef;
