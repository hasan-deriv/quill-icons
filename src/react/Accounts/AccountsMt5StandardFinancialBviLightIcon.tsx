import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const AccountsMt5StandardFinancialBviLightIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 48 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill='#0364B9' d='M33 7H18a4.5 4.5 0 0 0-4.5 4.5v13.125h24V11.5A4.5 4.5 0 0 0 33 7' />
    <path
      fill='#0A559E'
      d='M18 7a4.5 4.5 0 0 0-4.5 4.5v.13l22.436-3.54A4.48 4.48 0 0 0 33 7zM37.5 11.5c0-1.128-.415-2.16-1.101-2.95l-2.947 16.075H37.5z'
    />
    <path fill='#2A3052' d='M13.5 24.25h24v2.25A4.5 4.5 0 0 1 33 31H18a4.5 4.5 0 0 1-4.5-4.5z' />
    <path
      fill='#fff'
      d='M19.01 14.263q.161.297.369.738.215.432.44.945.235.504.46 1.035l.423.999.423-.999q.225-.531.45-1.035.234-.513.44-.945.216-.441.379-.738h1.278q.09.621.162 1.395.081.765.135 1.602.063.828.108 1.665.054.837.09 1.575h-1.368q-.027-.909-.072-1.98a54 54 0 0 0-.135-2.16l-.36.837-.396.918a82 82 0 0 1-.675 1.593h-.981l-.306-.711-.378-.882a60 60 0 0 0-.387-.918l-.36-.837q-.09 1.089-.135 2.16t-.072 1.98h-1.368q.035-.738.08-1.575l.109-1.665q.063-.837.135-1.602.08-.774.17-1.395zM29.519 14.263v1.197h-1.881v5.04h-1.404v-5.04h-1.881v-1.197zM32.491 18.664a.9.9 0 0 0-.117-.459q-.117-.207-.405-.342a2.9 2.9 0 0 0-.774-.207 9 9 0 0 0-1.224-.072q.099-.837.162-1.701t.1-1.62h3.374v1.125h-2.25a19 19 0 0 1-.045.63 9 9 0 0 1-.045.522q1.314.09 1.935.621.63.522.63 1.458 0 .432-.153.801a1.7 1.7 0 0 1-.459.639q-.306.27-.774.423a3.4 3.4 0 0 1-1.08.153q-.243 0-.513-.036a5 5 0 0 1-.513-.081 6 6 0 0 1-.44-.099 1.7 1.7 0 0 1-.307-.108l.243-1.107q.225.099.594.198.369.09.882.09.621 0 .9-.243.28-.252.28-.585M22.404 28.654q.148 0 .243-.023a.5.5 0 0 0 .157-.067.24.24 0 0 0 .081-.104.4.4 0 0 0 .023-.13q0-.153-.144-.252-.144-.103-.495-.22a4 4 0 0 1-.306-.122 1.2 1.2 0 0 1-.275-.175.9.9 0 0 1-.198-.257.8.8 0 0 1-.076-.369q0-.216.08-.387a.8.8 0 0 1 .23-.297q.15-.122.36-.184.211-.069.477-.068a1.94 1.94 0 0 1 .923.216l-.203.553a2 2 0 0 0-.292-.117 1.2 1.2 0 0 0-.383-.053q-.252 0-.364.072-.108.067-.108.211 0 .085.04.144a.4.4 0 0 0 .113.108q.076.046.17.085l.217.077q.243.09.423.18.18.085.297.202.12.118.18.275.058.157.058.382 0 .437-.306.68-.306.239-.922.239-.207 0-.374-.027a1.864 1.864 0 0 1-.518-.135 2 2 0 0 1-.152-.077l.198-.558q.14.077.342.14.207.057.504.058M26.398 26.071v.598h-.94v2.52h-.703v-2.52h-.94v-.598zM27.55 28.618l.113.009h.158q.526 0 .778-.265.257-.266.257-.734 0-.491-.243-.742-.243-.252-.77-.252a3 3 0 0 0-.148.004 1 1 0 0 0-.144.009zm2.03-.99q0 .406-.126.706a1.3 1.3 0 0 1-.36.5q-.23.198-.562.297a2.6 2.6 0 0 1-.747.099q-.189 0-.441-.018a3.4 3.4 0 0 1-.495-.063v-3.038q.243-.045.504-.058.265-.018.454-.018.4 0 .725.09.328.09.562.284t.36.495q.126.3.126.724'
    />
    <path fill='#0364B9' d='M22 1H7a4.5 4.5 0 0 0-4.5 4.5v13.125h24V5.5A4.5 4.5 0 0 0 22 1' />
    <path
      fill='#0A559E'
      d='M7 1a4.5 4.5 0 0 0-4.5 4.5v.13l22.436-3.54A4.48 4.48 0 0 0 22 1zM26.5 5.5c0-1.128-.415-2.16-1.101-2.95l-2.947 16.075H26.5z'
    />
    <path fill='#71BD0E' d='M2.5 18.25h24v2.25A4.5 4.5 0 0 1 22 25H7a4.5 4.5 0 0 1-4.5-4.5z' />
    <path
      fill='#fff'
      d='M8.007 8.263q.161.297.369.738.215.432.44.945.235.504.46 1.035l.423.999.423-.999q.225-.531.45-1.035.234-.513.44-.945.216-.441.379-.738h1.278q.09.621.162 1.395.081.765.135 1.602.063.828.108 1.665.054.837.09 1.575h-1.368q-.027-.909-.072-1.98a54 54 0 0 0-.135-2.16l-.36.837-.396.918a82 82 0 0 1-.675 1.593h-.981l-.306-.711-.378-.882a60 60 0 0 0-.387-.918l-.36-.837q-.09 1.089-.135 2.16t-.072 1.98H6.17q.036-.738.08-1.575l.109-1.665q.063-.837.135-1.602.08-.774.17-1.395zM18.516 8.263V9.46h-1.881v5.04H15.23V9.46H13.35V8.263zM21.488 12.664a.9.9 0 0 0-.117-.459q-.117-.207-.405-.342a2.9 2.9 0 0 0-.774-.207 9 9 0 0 0-1.224-.072q.099-.837.162-1.701t.1-1.62h3.374v1.125h-2.25a19 19 0 0 1-.045.63 9 9 0 0 1-.045.522q1.314.09 1.935.621.63.522.63 1.458 0 .432-.153.801a1.7 1.7 0 0 1-.459.639q-.306.27-.774.423a3.4 3.4 0 0 1-1.08.153q-.243 0-.513-.036a5 5 0 0 1-.513-.081 6 6 0 0 1-.44-.099 1.7 1.7 0 0 1-.307-.108l.243-1.107q.225.099.594.198.369.09.882.09.621 0 .9-.243.28-.252.28-.585M11.155 23.184v-3.118h2.088v.59h-1.386v.652h1.233v.59h-1.233v1.286zM13.74 20.066h.701v3.118h-.702zM17.255 23.184q-.3-.536-.652-1.057a11 11 0 0 0-.747-.986v2.043h-.693v-3.118h.571q.15.148.329.364t.364.464q.189.243.374.508.184.261.346.504v-1.84h.698v3.118z'
    />
    <path
      fill='#4BB4B3'
      d='M44.384 20h-9.768c-.296 0-.58.117-.789.325s-.327.491-.327.786v7.778c0 .295.118.577.327.786.21.208.493.325.79.325h9.767c.296 0 .58-.117.789-.325s.327-.491.327-.786V21.11c0-.295-.118-.577-.327-.786a1.12 1.12 0 0 0-.79-.325'
    />
    <path
      fill='#fff'
      d='M35.046 23.344h1.892q.486 0 .753.273.274.272.274.722 0 .222-.062.378a.7.7 0 0 1-.156.255.6.6 0 0 1-.229.15 1 1 0 0 1-.279.05v.034a.92.92 0 0 1 .575.21q.128.106.212.278a.9.9 0 0 1 .09.423 1.2 1.2 0 0 1-.285.783q-.135.15-.318.239a1 1 0 0 1-.402.083h-2.065zm.848 3.167h.977q.167 0 .262-.089.1-.095.1-.26v-.19q0-.166-.1-.255a.36.36 0 0 0-.262-.095h-.977zm0-1.578h.843a.36.36 0 0 0 .262-.094.35.35 0 0 0 .095-.261v-.167A.35.35 0 0 0 37 24.15a.36.36 0 0 0-.262-.095h-.843zm3.62 2.29-1.255-3.879h.86l.58 1.861.307 1.217h.016l.296-1.216.58-1.862h.832l-1.267 3.878zm2.576 0v-.673h.502v-2.533h-.502v-.673h1.853v.673h-.502v2.533h.502v.672z'
    />
  </svg>
);
const ForwardRef = forwardRef(AccountsMt5StandardFinancialBviLightIcon);
export default ForwardRef;
