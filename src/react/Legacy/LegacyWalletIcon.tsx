import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyWalletIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#4f25f556b0dc616ccb1ad39c49f9554d__a)'>
      <path
        fill='#333'
        d='M0 1.998A2 2 0 0 1 2 0h9.5A2.5 2.5 0 0 1 14 2.5l.001 1c.525.395.89.991.978 1.674l.016.162L15 5.5l.001 2c.607.457.999 1.183.999 2v1c0 .818-.392 1.543-.999 2l-.001 1a2.5 2.5 0 0 1-2.336 2.495L12.5 16h-10a2.5 2.5 0 0 1-2.495-2.336L0 13.5zm1 1.734V13.5a1.5 1.5 0 0 0 1.356 1.493L2.5 15h10a1.5 1.5 0 0 0 1.493-1.355L14 13.5v-.55q-.242.05-.5.05h-2A2.5 2.5 0 0 1 9 10.5v-1A2.5 2.5 0 0 1 11.5 7h2q.258 0 .5.05V5.5a1.5 1.5 0 0 0-1.355-1.493L12.52 4H2a2 2 0 0 1-1-.268M13.5 8h-2A1.5 1.5 0 0 0 10 9.5v1a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 .714-.18l-.06.03q.065-.03.125-.068l-.065.037a2 2 0 0 0 .123-.074l-.058.037a2 2 0 0 0 .11-.073l-.052.036a2 2 0 0 0 .115-.085l-.064.049q.057-.042.11-.088l-.046.039q.057-.048.109-.1l-.064.06q.05-.044.095-.092l-.031.033q.046-.048.09-.098l-.059.065q.05-.051.093-.108l-.035.043q.04-.05.077-.1l-.042.057q.043-.056.082-.117l-.04.06q.036-.05.066-.102l-.026.042q.036-.057.068-.119l-.042.077a1.5 1.5 0 0 0 .18-.476l.02-.136L15 10.5v-1l-.007-.149-.02-.136-.015-.069a1.5 1.5 0 0 0-.165-.406l.042.075a2 2 0 0 0-.068-.118l.026.043a2 2 0 0 0-.066-.103l.04.06a2 2 0 0 0-.082-.117l.042.057a2 2 0 0 0-.077-.1l.035.043a2 2 0 0 0-.093-.108l.058.065a2 2 0 0 0-.09-.098l.032.033a2 2 0 0 0-.095-.092l.064.06a2 2 0 0 0-.11-.1l.046.04a2 2 0 0 0-.11-.09l.065.05a2 2 0 0 0-.114-.085l.05.036a2 2 0 0 0-.109-.073l.059.037a2 2 0 0 0-.124-.074l.065.037a2 2 0 0 0-.124-.068l.06.03a2 2 0 0 0-.114-.055l.054.025a2 2 0 0 0-.137-.058l.083.033A1.5 1.5 0 0 0 13.5 8M12 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-.5-8H2a1 1 0 0 0-.942.663l-.031.107a1.003 1.003 0 0 0 .856 1.223L2 3h11v-.5a1.5 1.5 0 0 0-1.355-1.493z'
      />
    </g>
    <defs>
      <clipPath id='4f25f556b0dc616ccb1ad39c49f9554d__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyWalletIcon);
export default ForwardRef;
