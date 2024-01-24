import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const FlagCyprusIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path fill='#fff' d='M14.826 5.233q-.091.082-.163.153l.219-.219a1 1 0 0 0-.056.066' />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M2 0h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m15.414 2.78c.16-.24.075-.328-.192-.195l-2.233 1.117c-.278.139-.715.3-1 .37l-1.1.276a2.8 2.8 0 0 1-1.031.026l-1.639-.327a.61.61 0 0 0-.682.403l-.196.587a.79.79 0 0 1-.702.507c-.286 0-.7.167-.907.373l-.32.32a1.47 1.47 0 0 1-.907.373h.534a.535.535 0 0 0-.534.534c0 .286.167.7.373.906l.32.32c.207.207.586.48.847.61l1.187.594c.26.13.581.02.715-.247l.05-.1a.93.93 0 0 1 .775-.483c.286 0 .76-.076 1.04-.17l.587-.195c.284-.095.614-.385.748-.652l.05-.1a.533.533 0 0 1 .725-.242l.1.05c.278.14.65.075.856-.131l.32-.32a.527.527 0 0 0 0-.747l-.32-.32a.53.53 0 0 1-.052-.684c.204-.183.464-.39.65-.514l.725-.484c.241-.16.568-.487.73-.729zm-4.575 9.697a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2.195-2.264.061-.108a.533.533 0 1 1 .954.477c-.24.48-.644.884-1.162 1.23-.28.186-.576.344-.872.475l-.195.083q-.133.053-.213.08a.533.533 0 1 1-.337-1.012l.092-.034q.088-.033.22-.092a5 5 0 0 0 .713-.388c.33-.22.584-.46.74-.711m-7.167-.346a.533.533 0 0 1 .715.238c.145.289.423.567.8.819a4.8 4.8 0 0 0 .933.48l.092.034a.533.533 0 0 1-.337 1.012 4 4 0 0 1-.212-.08l-.196-.083a6 6 0 0 1-.871-.476c-.519-.345-.923-.75-1.163-1.229a.533.533 0 0 1 .239-.715'
      clipRule='evenodd'
    />
    <path
      fill='#E7832C'
      fillRule='evenodd'
      d='M17.222 2.585c.267-.133.352-.045.192.196l-.484.725a3.1 3.1 0 0 1-.729.73l-.725.483c-.242.16-.606.46-.814.668l.22-.22a.53.53 0 0 0-.004.75l.32.32a.527.527 0 0 1 0 .746l-.32.32a.78.78 0 0 1-.856.132l-.1-.05a.533.533 0 0 0-.725.242l-.05.1a1.48 1.48 0 0 1-.748.652l-.587.196c-.28.093-.754.169-1.04.169a.93.93 0 0 0-.775.483l-.05.1a.535.535 0 0 1-.715.247L8.045 8.98a4 4 0 0 1-.846-.61l-.32-.32c-.207-.206-.374-.62-.374-.906 0-.295.242-.534.534-.534h-.534c.295 0 .7-.166.907-.373l.32-.32c.206-.206.62-.373.907-.373a.79.79 0 0 0 .702-.507l.196-.587a.61.61 0 0 1 .682-.404l1.639.328c.284.057.742.046 1.03-.026l1.1-.275a6 6 0 0 0 1-.371l.1-.05.967-.483.1-.05.967-.484z'
      clipRule='evenodd'
    />
    <path fill='#445128' d='M11.839 13.477a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
    <path
      fill='#737D5E'
      d='m15.035 10.213.06-.108a.533.533 0 1 1 .954.477c-.24.48-.644.884-1.162 1.23-.28.186-.576.344-.872.475l-.195.083q-.133.053-.213.08a.533.533 0 1 1-.337-1.012l.092-.034q.088-.033.22-.092a5 5 0 0 0 .713-.388c.33-.22.584-.46.74-.711M8.582 10.105a.533.533 0 1 0-.954.477c.24.48.644.884 1.163 1.23.279.186.575.344.87.475l.197.083q.132.053.212.08a.533.533 0 1 0 .337-1.012l-.092-.034a4.817 4.817 0 0 1-.932-.48c-.378-.252-.656-.53-.8-.819'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagCyprusIcon);
export default ForwardRef;
