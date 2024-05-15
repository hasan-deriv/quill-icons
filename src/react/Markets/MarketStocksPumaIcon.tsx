import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksPumaIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#db0b1c9fdc8e6ec1c396a94af860f1ad__a)'>
      <path
        fill='#F6F7F8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#000'
        d='M16.878 9.753c.051-.1.093-.18.135-.187.042-.006.097.065.152.137.058.075.117.15.16.136.037-.012.08-.064.126-.12.066-.08.14-.169.212-.16.053.007.261.424.261.424 1.463.072 3.226 1.63 3.828 2.161q.134.118.185.16.03.023.087.075c.216.191.735.652 1.577 1.02.408.18.818.257 1.198.229.507-.037 1.074-.482 1.423-1.088.117-.204.216-.448.323-.71.291-.717.639-1.572 1.563-2.12.176-.105.576-.34.808-.044.186.24.033.634-.162.823-.122.12-.345.24-.767.44a3.4 3.4 0 0 0-.469.314c-.445.34-.77 1.104-1.128 1.946l-.018.041s-.156.422-.842.876c-.09.059-.046.11.039.209q.035.04.076.091c.161.214.485 1.085.443 2.41-.005.192.056.295.137.43l.059.101a.74.74 0 0 0 .281.267c.142.09.267.17.262.427-.007.31.11.49.203.631.082.127.144.222.078.35-.08.157-.074.31-.069.463q.003.059.004.117l.003.052c.007.089.015.185-.152.177-.812-.05-.769-1.126-.753-1.518v-.016c.014-.05-.024-.14-.03-.144-.041-.03-.553-.428-.587-.462-.623-.633-1.033-1.202-1.262-1.786-.152-.39-.308-.774-.575-1.021-.3-.273-.666-.427-.988-.429-1.856-.01-2.517-.671-3.032-1.188a4 4 0 0 0-.35-.328.3.3 0 0 0-.109-.049c-.026.002-.047.025-.066.045l-.019.018c-.24.252-.482.335-.808.335-.435 0-.889-.215-1.229-.376-.263-.125-.458-.217-.522-.151-.046.048-.057.116-.068.183-.015.098-.03.193-.153.218-.297.06-.605-.234-.58-.483.044-.446.5-.576.9-.622.263-.027.487.024.6.05q.043.011.062.013c.185.026.217-.197.187-.341-.032-.146-.162-.185-.303-.226l-.03-.009c-.097-.029-.2 0-.297.027-.086.024-.166.047-.231.025a.42.42 0 0 1-.203-.15c-.029-.033-.06-.07-.106-.11a1.3 1.3 0 0 0-.154-.112c-.117-.076-.215-.14-.214-.287 0-.107.071-.16.147-.216.062-.045.126-.093.156-.173a.6.6 0 0 0 .029-.13c.005-.042.01-.079.026-.106.045-.083.114-.117.187-.152a.6.6 0 0 0 .163-.104 1.2 1.2 0 0 0 .196-.303M9.339 21.4c0 .16.134.29.291.294a.3.3 0 0 0 .293-.294l.002-5.23h1.722v5.765a.51.51 0 0 1-.509.513H8.125c-.281 0-.51-.23-.51-.513V16.17h1.724zM12.793 16.17h5.22c.308 0 .56.25.56.562v5.716h-1.726v-5.243a.29.29 0 0 0-.292-.288c-.16 0-.29.124-.292.283v5.248h-1.719V17.2a.29.29 0 0 0-.294-.283.29.29 0 0 0-.291.288v5.243h-1.726v-5.716c0-.312.252-.563.56-.563'
      />
      <path
        fill='#000'
        fillRule='evenodd'
        d='M4.723 20.87h1.742a.564.564 0 0 0 .565-.565v-3.57a.556.556 0 0 0-.554-.566H3v6.28h1.723zm.293-3.953c.15 0 .293.124.292.299v2.582a.29.29 0 0 1-.292.295h-.293v-3.176zM24.653 22.151h.206l-.287-.372.012-.005a.26.26 0 0 0 .18-.249c0-.173-.127-.264-.367-.264h-.177v.89h.168V21.8zm-.053-.623q-.002.127-.183.127h-.029v-.242h.035q.175 0 .177.114'
        clipRule='evenodd'
      />
      <path
        fill='#000'
        fillRule='evenodd'
        d='M24.497 22.477a.77.77 0 0 0 .765-.773.768.768 0 1 0-1.536 0 .77.77 0 0 0 .771.773m-.648-.77c0-.364.29-.663.637-.663h.011c.355 0 .642.299.642.662s-.287.66-.642.66a.655.655 0 0 1-.648-.66M21.466 20.872v1.576h1.723v-5.716a.56.56 0 0 0-.56-.563h-2.91a.56.56 0 0 0-.56.563v5.716h1.721v-1.576zm0-3.67v2.892h-.586v-2.887a.29.29 0 0 1 .292-.287c.161 0 .29.123.294.283'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='db0b1c9fdc8e6ec1c396a94af860f1ad__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksPumaIcon);
export default ForwardRef;
