import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksGoldmanSacsIcon = (
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
    <g clipPath='url(#e64b94eb04e9a6988b5ca1dabbffe576__a)'>
      <path
        fill='#7399C6'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M7.418 13.409v2.336c-.49.087-1.01.13-1.341.13-1.5.014-2.077-.88-2.077-2.38C4 11.895 4.779 11 6.293 11c.202 0 .592.014 1.068.115v1.443h-.332l-.202-.563c-.188-.519-.404-.735-.736-.735-.62 0-.937.793-.937 2.206 0 1.443.173 2.106.923 2.106.086 0 .202 0 .36-.029V13.9l-.519-.317v-.173zm-.072 6.346c0 .937-.634 1.485-1.788 1.485-.318 0-.78-.057-1.197-.13v-1.802h.331l.13.404c.303.937.534 1.24.938 1.24.418 0 .706-.317.706-.793 0-.375-.187-.635-.591-.866l-.663-.346c-.534-.288-.823-.721-.823-1.27 0-.821.664-1.312 1.774-1.312.26 0 .534.015 1.01.087v1.485h-.332l-.202-.533c-.187-.534-.375-.736-.764-.736-.39 0-.635.217-.635.577 0 .303.188.563.563.765l.707.389c.562.303.836.75.836 1.356m3.101 1.096.13.202v.1H9.51l-.03-.432c-.115.317-.418.505-.821.505-.534 0-.895-.317-.895-.909 0-.577.318-.937 1.284-1.327l.418-.187v-.49c0-.39-.115-.577-.375-.577-.23 0-.39.158-.533.533l-.217.534h-.317V17.72c.404-.115.822-.202 1.183-.202.807 0 1.226.375 1.226 1.068v2.264zm.447-6.808c0 1.197-.634 1.846-1.442 1.846s-1.442-.663-1.442-1.846c0-1.182.634-1.875 1.442-1.875s1.442.678 1.442 1.875m-1.413 6.173v-1.14l-.13.073c-.404.188-.591.505-.591 1.024 0 .433.115.635.36.635.231 0 .36-.231.36-.592m.39-6.173c0-1.298-.116-1.63-.434-1.63-.317 0-.432.332-.432 1.63s.115 1.616.432 1.616c.318 0 .433-.347.433-1.616m3.418 6.231.201.101c-.216.591-.504.865-1.096.865-.894 0-1.37-.692-1.37-1.831 0-1.226.563-1.89 1.529-1.89.26 0 .62.03.908.159v1.183h-.317l-.13-.433c-.173-.505-.288-.664-.475-.664-.289 0-.505.361-.505 1.674 0 1.067.158 1.442.591 1.442.274 0 .461-.159.664-.606m-.693-4.471h-1.24v-.101l.13-.202v-3.865l-.13-.202v-.116l1.11-.086v4.255l.13.201zm1.745.086c-.793 0-1.24-.678-1.24-1.889s.49-1.832 1.24-1.832c.36 0 .577.159.664.433v-.98l-.13-.203v-.115l1.11-.087v4.255l.13.202v.101h-.98l-.087-.505c-.087.433-.303.62-.707.62m2.423 4.962.13.202v.1h-1.24v-.1l.13-.202v-2.538c0-.274-.116-.433-.318-.433-.274 0-.461.23-.461.606v2.336l.13.202v.101h-1.24v-.101l.129-.202v-3.865l-.13-.202v-.101l1.11-.087v1.414c.13-.332.491-.476.823-.476.591 0 .909.36.909 1.067v2.279zM14.125 14c0 1.211.115 1.601.433 1.601.375 0 .461-.52.461-1.615 0-1.068-.086-1.572-.461-1.572-.318.028-.433.389-.433 1.586m7.038 1.486.13.201v.102h-1.24v-.087l.13-.202v-2.539c0-.23-.101-.418-.318-.418-.26 0-.418.274-.418.62V15.5l.13.202v.1h-1.24v-.1l.13-.202v-2.539c0-.23-.102-.418-.303-.418-.275 0-.419.274-.419.62V15.5l.13.202v.1h-1.24v-.1l.13-.202v-2.856l-.13-.173v-.1l.98-.116h.087l.029.418c.115-.317.461-.505.865-.505s.678.202.808.563c.13-.36.476-.563.894-.563.563 0 .866.36.866 1.039zM19.809 20.1c0 .635-.39 1.14-1.342 1.14-.23 0-.577-.03-1.081-.116v-1.284h.288l.101.274c.23.693.404.895.779.895.36 0 .534-.188.534-.534 0-.288-.16-.476-.49-.663l-.621-.318c-.404-.216-.591-.519-.591-.923 0-.663.49-1.024 1.312-1.024.26 0 .563.029.894.101v1.01h-.288l-.159-.36c-.158-.376-.303-.506-.591-.506-.303 0-.476.159-.476.404 0 .216.13.375.476.563l.62.331c.418.202.635.52.635 1.01m4.586-4.615.13.201v.102h-1.067l-.03-.419c-.114.318-.432.505-.821.505-.534 0-.895-.317-.895-.909 0-.577.318-.937 1.284-1.327l.433-.187v-.49c0-.39-.116-.577-.375-.577-.23 0-.39.158-.534.533l-.216.534h-.317v-1.125c.403-.116.822-.202 1.182-.202.808 0 1.24.375 1.24 1.067v2.294zm-.98-.62v-1.14l-.16.072c-.403.188-.59.505-.59 1.024 0 .418.115.635.36.635.26 0 .39-.246.39-.592m4.586.836v.1h-1.24v-.1l.13-.202v-2.524c0-.274-.116-.418-.318-.418-.274 0-.461.23-.461.606V15.5l.13.202v.1H25v-.1l.13-.202v-2.856l-.13-.173v-.1l.98-.116h.087l.03.418c.114-.36.49-.505.836-.505.591 0 .923.36.923 1.068v2.278z'
      />
    </g>
    <defs>
      <clipPath id='e64b94eb04e9a6988b5ca1dabbffe576__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksGoldmanSacsIcon);
export default ForwardRef;
