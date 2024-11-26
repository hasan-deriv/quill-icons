import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasskeyXlRegularIcon = (
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
      <path d='M11.86 18.75q1.055-.14 2.109-.14c.375 0 .75 0 1.078.046.375 0 .703.047 1.078.094h.047a5.9 5.9 0 0 0 .562 3.094c.516.937 1.22 1.734 2.11 2.297v3.14H5.109v-3.703c0-.703.188-1.36.61-1.969.375-.609.843-1.078 1.5-1.406 1.078-.515 2.156-.937 3.328-1.172.422-.14.89-.234 1.312-.281m-4.876 3.656 7.688-2.297h-.703c-1.031 0-2.063.094-3.094.375-1.031.235-2.016.61-3 1.078-.375.188-.656.47-.89.844m7.688-2.297-7.688 2.297c-.234.375-.375.75-.375 1.172v2.203h10.735v-.89c-.797-.61-1.453-1.453-1.922-2.391-.375-.75-.656-1.547-.75-2.39m-2.625-2.906c-.563-.234-1.031-.562-1.5-1.031-.938-.938-1.406-2.11-1.406-3.422s.468-2.484 1.406-3.422c.937-.937 2.11-1.406 3.422-1.406 1.36 0 2.484.469 3.422 1.406.984.938 1.453 2.11 1.453 3.422s-.469 2.484-1.453 3.422c-.422.469-.938.797-1.453 1.031-.282.094-.516.188-.797.281-.375.047-.75.094-1.172.094-.703 0-1.313-.094-1.922-.375m-.422-2.11c.656.704 1.406.985 2.344.985s1.687-.281 2.39-.984c.657-.656.985-1.406.985-2.344s-.328-1.687-.985-2.344c-.703-.656-1.453-.984-2.39-.984s-1.688.328-2.344.984c-.703.656-.984 1.406-.984 2.344s.28 1.688.984 2.344m10.922 14.579 2.203-2.203-1.687-1.64 1.687-1.642-1.36-1.406c.75-.281 1.313-.75 1.782-1.36.422-.655.656-1.358.656-2.202a3.76 3.76 0 0 0-1.125-2.719c-.75-.75-1.64-1.125-2.719-1.125s-1.968.375-2.718 1.125-1.125 1.64-1.125 2.719c0 .89.234 1.64.75 2.343.515.657 1.172 1.125 1.968 1.36v5.11zm-.563-9.89c-.422 0-.797-.188-1.03-.516a1.29 1.29 0 0 1 0-1.172c.233-.328.608-.563 1.03-.516.422-.047.797.188.985.516.234.375.234.797 0 1.172-.188.328-.563.515-.985.515' />
    </g>
    <defs>
      <clipPath id='ecf312abda93651127c391a0cc6a3363__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasskeyXlRegularIcon);
export default ForwardRef;
