import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOfframpXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 12c0-3.281 2.672-6 6-6 3.281 0 6 2.719 6 6 0 .61-.094 1.172-.281 1.734l4.547 4.547A5.4 5.4 0 0 1 21 18c3.281 0 6 2.719 6 6 0 3.328-2.719 6-6 6H6.75C4.64 30 3 28.36 3 26.25zm1.5 3.984V26.25c0 1.266.984 2.25 2.25 2.25h10.266C15.75 27.422 15 25.828 15 24a5.91 5.91 0 0 1 2.813-5.062l-3.75-3.75A5.91 5.91 0 0 1 9 18c-1.828 0-3.422-.75-4.5-2.016M9 7.5c-1.64 0-3.14.89-3.937 2.25a4.62 4.62 0 0 0 0 4.547c.796 1.36 2.296 2.25 3.89 2.25 1.64 0 3.094-.89 3.938-2.25.797-1.406.797-3.14 0-4.5C12.094 8.39 10.594 7.547 9 7.5m7.688 3.234c.28-.28.796-.28 1.078 0L21 13.97V12.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75v3c0 .328-.187.61-.469.703-.281.14-.61.047-.843-.14l-4.5-4.5c-.282-.282-.282-.797 0-1.079M21 19.5c-.61 0-1.125.14-1.64.328h-.047A4.515 4.515 0 0 0 16.5 24a4.501 4.501 0 0 0 9 0c0-2.484-2.016-4.5-4.5-4.5M8.203 8.484v1.032h1.031V8.484h.985v1.032c.375 0 .703.14.984.375.61.562.656 1.5.094 2.109.281.281.422.656.422 1.031 0 .844-.703 1.5-1.5 1.5v.985h-.985v-.985h-1.03v.985h-.985v-.985h-.985V13.5h.985v-3h-.985v-.984h.985V8.484zm2.016 4.032H8.203v.984h2.016a.52.52 0 0 0 .515-.516c0-.234-.234-.468-.515-.468m0-2.016H8.203v1.031h2.016a.52.52 0 0 0 .515-.515.52.52 0 0 0-.515-.516m11.39 9.75v.563c.797.234 1.313.984 1.313 1.828v.187h-1.219v-.187c0-.375-.328-.703-.75-.703a.72.72 0 0 0-.703.703c0 .422.328.75.703.75a1.98 1.98 0 0 1 1.969 1.968c0 .844-.516 1.594-1.313 1.828v.563h-1.265v-.562c-.797-.235-1.313-.985-1.313-1.829v-.187h1.219v.187a.72.72 0 0 0 .703.703c.422 0 .75-.328.75-.703a.74.74 0 0 0-.75-.75c-1.078 0-1.922-.89-1.922-1.968 0-.844.516-1.594 1.313-1.828v-.563z' />
    </g>
    <defs>
      <clipPath id='4c4855fd7cde1871be7ec44f4ba6dfd8__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOfframpXlRegularIcon);
export default ForwardRef;
