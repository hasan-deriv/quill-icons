import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedCrash300Icon = (
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
    <path fill='#0AA0B0' d='m0 14.586 7-7 3 3 7-7 3 3 6-6v2.828l-6 6-3-3-7 7-3-3-7 7z' />
    <path
      fill='#FF444F'
      d='m27 22 4.707-4.707-1.414-1.414L28 18.172V0h-1.414L26 .586v17.586l-2.293-2.293-1.414 1.414z'
    />
    <path
      fill='#414652'
      d='M9.502 29.08q.479 0 .664-.352.184-.352.184-.992V26.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q-.001.64.184.992.183.352.664.352M14.962 28.728q-.184.352-.664.352-.479 0-.664-.352-.184-.352-.184-.992V26.68q0-.64.184-.992t.664-.352.664.352.184.992v1.056q.001.64-.184.992'
    />
    <path
      fill='#414652'
      fillRule='evenodd'
      d='M2 22a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm2.4 4.624q.449 0 .649-.168a.55.55 0 0 0 .208-.432v-.056a.63.63 0 0 0-.2-.488q-.192-.184-.552-.184-.336 0-.632.176a1.46 1.46 0 0 0-.504.488l-.752-.704q.16-.208.344-.376.183-.176.416-.296.231-.128.52-.192.288-.072.648-.072.447 0 .808.104.368.104.624.304.264.192.4.464.144.272.144.608 0 .264-.088.48-.08.216-.232.376a1.3 1.3 0 0 1-.336.264q-.192.096-.408.136v.048q.248.048.456.16.216.104.368.272.16.168.248.4.088.224.088.512 0 .375-.152.68a1.5 1.5 0 0 1-.432.52 2.1 2.1 0 0 1-.672.336q-.393.112-.864.112a3 3 0 0 1-.752-.088 2.4 2.4 0 0 1-.576-.232 2.3 2.3 0 0 1-.424-.344 3 3 0 0 1-.312-.408l.888-.688q.184.345.448.568.272.216.728.216.408 0 .632-.2a.72.72 0 0 0 .232-.56v-.048q0-.344-.264-.512-.256-.176-.712-.176H3.88v-1zm5.102 3.472q-1.096 0-1.624-.76t-.528-2.128.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m3.172-.76q.529.76 1.624.76t1.624-.76q.528-.76.528-2.128t-.528-2.128-1.624-.76-1.624.76-.528 2.128.528 2.128'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M4.4 26.624q.449 0 .649-.168a.55.55 0 0 0 .208-.432v-.056a.63.63 0 0 0-.2-.488q-.192-.184-.552-.184-.336 0-.632.176a1.46 1.46 0 0 0-.504.488l-.752-.704q.16-.208.344-.376.183-.176.416-.296.231-.128.52-.192.288-.072.648-.072.447 0 .808.104.368.104.624.304.264.192.4.464.144.272.144.608 0 .264-.088.48-.08.216-.232.376a1.3 1.3 0 0 1-.336.264q-.192.096-.408.136v.048q.248.048.456.16.216.104.368.272.16.168.248.4.088.224.088.512 0 .375-.152.68a1.5 1.5 0 0 1-.432.52 2.1 2.1 0 0 1-.672.336q-.393.112-.864.112a3 3 0 0 1-.752-.088 2.4 2.4 0 0 1-.576-.232 2.3 2.3 0 0 1-.424-.344 3 3 0 0 1-.312-.408l.888-.688q.184.345.448.568.272.216.728.216.408 0 .632-.2a.72.72 0 0 0 .232-.56v-.048q0-.344-.264-.512-.256-.176-.712-.176H3.88v-1zM9.502 30.096q-1.096 0-1.624-.76t-.528-2.128.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.479 0 .664-.352.184-.352.184-.992V26.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q-.001.64.184.992.183.352.664.352M14.298 30.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V26.68q.001-.64-.184-.992-.184-.352-.664-.352-.479 0-.664.352-.184.352-.184.992v1.056q0 .64.184.992t.664.352'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedCrash300Icon);
export default ForwardRef;
