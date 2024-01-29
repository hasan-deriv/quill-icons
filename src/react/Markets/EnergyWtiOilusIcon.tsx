import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const EnergyWtiOilusIcon = (
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
    <path fill='#5798B4' d='M23 6H9v20h14z' />
    <path
      fill='#3B7B96'
      fillRule='evenodd'
      d='M8.5 6h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1m0 2h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1m15 17h-15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1m-15-2h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1'
      clipRule='evenodd'
    />
    <path
      fill='#FFC521'
      d='M18.99 17.15c0 1.583-1.346 2.85-2.99 2.85s-2.99-1.267-2.99-2.85S16 12 16 12s2.99 3.583 2.99 5.15'
    />
    <path
      fill='#fff'
      d='M16 19.25c-1.207 0-2.203-.933-2.203-2.1 0-.133.122-.25.262-.25s.262.117.262.25c0 .883.752 1.6 1.679 1.6.14 0 .262.117.262.25s-.122.25-.262.25M17 5.355v.765h15v-.765zM24.188 4.59H32v-.765h-7.812zM24.188 3.06H32v-.765h-7.812zM24.188 1.53H32v-.28q-.002-.26-.098-.485h-7.715zM32 6.885H17v.765h15zM17 8.415h15v.335q-.001.228-.076.43H17.076A1.3 1.3 0 0 1 17 8.75z'
    />
    <path
      fill='#F44336'
      d='M30.75 0h-6.562v.765h7.714A1.25 1.25 0 0 0 30.75 0M24.188 5.355H32V4.59h-7.812zM24.188 3.825H32V3.06h-7.812zM24.188 2.295H32V1.53h-7.812zM17 6.12h15v.765H17zM32 7.65H17v.765h15zM17.076 9.18h14.848a1.25 1.25 0 0 1-1.174.82h-12.5a1.25 1.25 0 0 1-1.174-.82'
    />
    <path
      fill='#0D47A1'
      fillRule='evenodd'
      d='M24.188 0H18.25C17.56 0 17 .56 17 1.25v4.105h7.188zm-6.445 4.436-.06-.175c-.006-.025-.037-.025-.04 0l-.06.177H17.4q-.017.001-.024.017-.005.016.009.027l.15.11-.062.175a.02.02 0 0 0 .003.02.025.025 0 0 0 .035.008l.15-.108.15.107q.014.011.03.001a.03.03 0 0 0 .009-.028l-.056-.175.15-.111a.02.02 0 0 0 .008-.012.025.025 0 0 0-.023-.033zm5.609-.175a.02.02 0 0 0-.021-.016.02.02 0 0 0-.02.017l-.06.176h-.184a.025.025 0 0 0-.024.032.03.03 0 0 0 .009.012l.15.11-.062.175a.025.025 0 0 0 .038.027l.15-.107.15.107a.025.025 0 0 0 .039-.027l-.056-.175.15-.111a.025.025 0 0 0-.015-.045h-.185zm-1.419 0a.02.02 0 0 0-.02-.016.02.02 0 0 0-.02.017l-.06.176h-.184q-.017.001-.024.017-.005.016.009.027l.15.11-.062.175a.03.03 0 0 0 .01.027q.014.01.029 0l.15-.107.15.107a.025.025 0 0 0 .038-.027l-.056-.175.15-.111a.025.025 0 0 0-.015-.045h-.185zm-2.773.175-.059-.175c-.007-.025-.04-.025-.04 0l-.06.177h-.185a.025.025 0 0 0-.015.044l.15.11-.061.175a.03.03 0 0 0 .01.027c.008.007.02.007.028 0l.15-.107.15.107q.013.011.03.001a.03.03 0 0 0 .009-.028l-.057-.175.15-.111a.03.03 0 0 0 .008-.027.03.03 0 0 0-.023-.018zm1.418 0-.059-.175c-.007-.025-.04-.025-.04 0l-.06.177h-.185a.025.025 0 0 0-.015.044l.15.11-.061.175a.03.03 0 0 0 0 .017.02.02 0 0 0 .01.01c.008.007.02.007.028 0l.15-.107.15.107q.014.011.03.001a.03.03 0 0 0 .009-.028l-.057-.175.15-.111a.03.03 0 0 0 .008-.027.03.03 0 0 0-.023-.018zm-2.126-.464-.06-.176c-.006-.024-.037-.024-.04 0l-.06.176h-.19q-.017.001-.023.016-.004.016.008.028l.15.11-.056.177a.025.025 0 0 0 .038.026l.15-.107.15.107q.014.011.03.001a.024.024 0 0 0 .009-.027l-.056-.176.15-.111a.03.03 0 0 0 .008-.028.03.03 0 0 0-.023-.016zm4.19-.176a.023.023 0 1 0-.046 0l-.059.176h-.184a.025.025 0 0 0-.016.044l.15.11-.056.177q-.004.016.01.027.014.009.029 0l.15-.108.15.107a.025.025 0 0 0 .038-.026l-.056-.176.15-.111a.025.025 0 0 0-.015-.044h-.185zm-1.354.176-.06-.176c-.007-.024-.04-.024-.046 0l-.06.176h-.184a.025.025 0 0 0-.015.044l.15.11-.056.177q-.005.016.01.027c.008.006.02.006.028 0l.15-.108.15.107q.013.011.03.001a.024.024 0 0 0 .008-.027l-.056-.176.15-.111a.03.03 0 0 0 .008-.028.03.03 0 0 0-.023-.016zm-1.419 0-.059-.176c-.007-.024-.04-.024-.04 0l-.06.176h-.19q-.017.001-.023.016-.004.016.008.028l.15.11-.056.177a.025.025 0 0 0 .038.027l.15-.108.15.107q.013.011.03.001a.024.024 0 0 0 .009-.027l-.057-.176.15-.111a.03.03 0 0 0 .008-.028.03.03 0 0 0-.023-.016zm-.709-.451-.059-.176c-.007-.02-.04-.02-.04 0l-.06.176h-.19q-.017.001-.023.017-.004.016.008.028l.15.11-.056.176a.03.03 0 0 0 .01.027c.008.006.02.006.028 0l.15-.107.15.107.006.003a.025.025 0 0 0 .033-.03l-.057-.176.15-.11a.03.03 0 0 0 .008-.028.03.03 0 0 0-.023-.017zm4.251 0-.06-.176c-.003-.02-.037-.02-.046 0l-.059.176h-.184a.025.025 0 0 0-.016.045l.15.11-.056.176a.025.025 0 0 0 .038.027l.15-.107.15.107a.025.025 0 0 0 .039-.027l-.056-.176.15-.11a.025.025 0 0 0-.015-.045zm-5.668 0-.06-.176c-.006-.02-.037-.02-.04 0l-.06.176h-.19a.025.025 0 0 0-.015.045l.15.11-.056.176a.025.025 0 0 0 .038.027l.15-.107.15.107q.014.01.03 0a.03.03 0 0 0 .009-.027l-.056-.176.15-.11a.03.03 0 0 0 .008-.028.03.03 0 0 0-.024-.017zm4.25 0-.06-.176c-.002-.012-.014-.017-.025-.015a.03.03 0 0 0-.02.015l-.06.176h-.184l-.012.003a.03.03 0 0 0-.012.014q-.004.016.008.028l.15.11-.056.176a.025.025 0 0 0 .038.027l.15-.107.15.107a.025.025 0 0 0 .039-.027l-.056-.176.15-.11a.025.025 0 0 0-.015-.045zm-1.415 0-.059-.176c-.007-.02-.04-.02-.04 0l-.06.176h-.19q-.017.001-.023.017-.004.016.008.028l.15.11-.056.176a.03.03 0 0 0 .01.027c.008.006.02.006.028 0l.15-.107.15.107q.014.01.03 0a.03.03 0 0 0 .009-.027l-.057-.176.15-.11a.03.03 0 0 0 .008-.028.03.03 0 0 0-.023-.017zm-2.126-.465-.06-.175c-.006-.024-.037-.024-.04 0l-.06.177h-.184q-.017.001-.024.016-.005.016.009.028l.15.11-.062.175a.025.025 0 0 0 .038.027l.15-.107.15.107q.014.011.03.001a.03.03 0 0 0 .009-.028l-.056-.175.15-.111a.03.03 0 0 0 .008-.027.03.03 0 0 0-.023-.018zm4.19-.175a.023.023 0 1 0-.046 0l-.059.175h-.184l-.012.003a.03.03 0 0 0-.012.014q-.004.016.008.028l.15.11-.056.176a.03.03 0 0 0 .01.027.03.03 0 0 0 .029 0l.15-.107.15.107a.025.025 0 0 0 .038-.027l-.056-.175.15-.111a.025.025 0 0 0-.015-.045h-.185zm-1.354.175-.06-.175c-.007-.024-.04-.024-.046 0l-.06.175h-.184l-.013.005a.025.025 0 0 0-.002.04l.15.11-.056.176a.03.03 0 0 0 .01.027c.008.007.02.007.028 0l.15-.107.15.107q.013.011.03.001a.03.03 0 0 0 .008-.028l-.056-.175.15-.111a.03.03 0 0 0 .008-.027.03.03 0 0 0-.023-.018zm-1.419 0-.059-.175c-.007-.024-.04-.024-.04 0l-.06.177h-.185a.025.025 0 0 0-.022.035l.007.009.15.11-.061.175a.03.03 0 0 0 .01.027c.008.007.02.007.028 0l.15-.107.15.107q.013.011.03.001a.03.03 0 0 0 .009-.028l-.057-.175.15-.111a.03.03 0 0 0 .008-.027.03.03 0 0 0-.023-.018zm-.709-.447-.059-.176c-.007-.024-.04-.024-.04.001L19 2.61h-.185a.03.03 0 0 0-.023.017q-.004.015.008.028l.15.11-.061.175a.03.03 0 0 0 .01.027c.008.006.02.006.028 0l.15-.107.15.107q.013.01.03 0a.024.024 0 0 0 .009-.027l-.057-.176.15-.11a.025.025 0 0 0 0-.04.03.03 0 0 0-.015-.005zm4.18-.19-.01-.002a.02.02 0 0 0-.02.017l-.059.176h-.184q-.017.001-.024.017-.005.015.009.028l.15.11-.062.175a.025.025 0 0 0 .038.027l.15-.107.15.107a.024.024 0 0 0 .03 0 .024.024 0 0 0 .009-.027l-.056-.176.15-.11a.025.025 0 0 0-.015-.045h-.185l-.06-.176a.02.02 0 0 0-.011-.014m-1.407.014a.023.023 0 0 0-.046 0l-.059.176h-.184a.025.025 0 0 0-.016.045l.15.11-.056.176a.025.025 0 0 0 .038.027l.15-.107.15.107a.025.025 0 0 0 .03 0 .03.03 0 0 0 .009-.027l-.056-.176.15-.11a.025.025 0 0 0-.015-.045h-.185zm-4.19.176-.06-.176c-.006-.024-.037-.024-.04.001l-.06.176H17.4q-.017.001-.024.017-.005.015.009.028l.15.11-.062.175a.025.025 0 0 0 .038.027l.15-.107.15.107q.014.01.03 0a.024.024 0 0 0 .009-.027l-.056-.176.15-.11a.03.03 0 0 0 .008-.028.03.03 0 0 0-.024-.017zm2.835 0-.059-.176c-.007-.024-.04-.024-.04 0l-.06.176h-.19a.025.025 0 0 0-.023.033.02.02 0 0 0 .008.012l.15.11-.056.176a.025.025 0 0 0 .024.032q.008 0 .014-.005l.15-.107.15.107q.014.01.03 0a.024.024 0 0 0 .009-.027l-.057-.176.15-.11a.03.03 0 0 0 .008-.028.03.03 0 0 0-.023-.017zm-2.126-.469-.06-.176c-.006-.02-.037-.02-.04 0l-.06.176h-.19l-.012.004a.025.025 0 0 0-.003.041l.15.11-.056.176a.025.025 0 0 0 .038.028l.15-.108.15.108q.014.01.03 0a.03.03 0 0 0 .009-.028l-.056-.176.15-.11a.03.03 0 0 0 .008-.027.03.03 0 0 0-.023-.018zm2.835 0-.059-.176c-.007-.02-.04-.02-.046 0l-.06.176h-.184q-.017.002-.023.018a.03.03 0 0 0 .008.027l.15.11-.056.176a.03.03 0 0 0 .01.028c.008.006.02.006.028 0l.15-.108.15.108a.025.025 0 0 0 .038-.028l-.056-.176.15-.11a.025.025 0 0 0-.015-.045zm-1.418 0-.059-.176c-.007-.02-.04-.02-.04 0l-.06.176h-.19q-.017.002-.023.018-.004.016.008.027l.15.11-.056.176a.03.03 0 0 0 .01.028c.008.006.02.006.028 0l.15-.108.15.108q.013.01.03 0a.03.03 0 0 0 .009-.028l-.057-.176.15-.11a.03.03 0 0 0 .008-.027.03.03 0 0 0-.023-.018zm2.833 0-.06-.176c-.003-.02-.037-.02-.046 0l-.059.176h-.184a.025.025 0 0 0-.016.045l.15.11-.056.176a.025.025 0 0 0 .038.027l.15-.107.15.108a.024.024 0 0 0 .039-.028l-.056-.176.15-.11a.025.025 0 0 0-.006-.042l-.01-.002zm-2.124-.447-.059-.176c-.007-.02-.04-.02-.04 0l-.06.177h-.19a.025.025 0 0 0-.015.044l.15.11-.056.177a.03.03 0 0 0 .01.027.03.03 0 0 0 .028 0l.15-.108.15.108q.014.01.03 0a.03.03 0 0 0 .009-.027l-.057-.177.15-.11a.03.03 0 0 0 .008-.027.03.03 0 0 0-.023-.018zm-2.835 0-.06-.176c-.006-.02-.037-.02-.04 0l-.06.177h-.19a.025.025 0 0 0-.015.044l.15.11-.056.177a.025.025 0 0 0 .038.027l.15-.108.15.108q.014.01.03 0a.03.03 0 0 0 .009-.027l-.056-.177.15-.11a.03.03 0 0 0 .008-.027.03.03 0 0 0-.024-.018zm1.42 0-.06-.176c-.009-.02-.042-.02-.046 0l-.059.177h-.184a.025.025 0 0 0-.015.044l.15.11-.057.177a.025.025 0 0 0 .039.027l.15-.108.15.108q.013.01.03 0a.03.03 0 0 0 .008-.027l-.056-.177.15-.11a.03.03 0 0 0 .008-.027.03.03 0 0 0-.023-.018zm2.83 0-.06-.176c-.003-.02-.037-.02-.046 0l-.059.177h-.184a.025.025 0 0 0-.016.044l.15.11-.056.177a.03.03 0 0 0 .01.027q.014.009.029 0l.15-.108.15.108a.025.025 0 0 0 .038-.027l-.056-.177.15-.11a.03.03 0 0 0 .008-.027.03.03 0 0 0-.024-.018zm1.418 0-.06-.176c-.003-.02-.037-.02-.046 0l-.059.177h-.184a.025.025 0 0 0-.016.044l.15.11-.056.177a.025.025 0 0 0 .038.027l.15-.108.15.108a.02.02 0 0 0 .02.005l.01-.005a.03.03 0 0 0 .009-.027l-.056-.177.15-.11a.025.025 0 0 0-.015-.045zm-2.123-.464-.06-.176c-.007-.024-.04-.024-.046 0l-.06.176h-.184q-.017.001-.023.016-.004.016.008.028l.15.11-.056.176a.03.03 0 0 0 .001.018l.008.01q.014.009.029 0l.15-.108.15.107q.013.011.03.001a.03.03 0 0 0 .008-.028l-.056-.175.15-.111a.025.025 0 0 0 0-.04.02.02 0 0 0-.015-.004zm-1.419 0-.059-.176c-.005-.017-.021-.022-.031-.016q-.01.004-.01.017l-.059.176h-.185a.025.025 0 0 0-.015.044l.15.11-.061.175a.025.025 0 0 0 .038.027l.15-.107.15.107q.013.011.03.001a.03.03 0 0 0 .009-.028l-.057-.175.15-.111a.03.03 0 0 0 .008-.027.03.03 0 0 0-.023-.017zm-1.417 0-.06-.176c-.006-.024-.037-.024-.04 0l-.06.177h-.184q-.017.001-.024.017-.005.016.009.027l.15.11-.062.175a.025.025 0 0 0 .038.027l.15-.107.15.107q.014.011.03.001a.03.03 0 0 0 .009-.028l-.056-.175.15-.111a.03.03 0 0 0 .008-.027.03.03 0 0 0-.023-.017zm4.19-.176a.023.023 0 1 0-.046 0l-.059.176h-.184a.025.025 0 0 0-.016.044l.15.11-.056.176a.025.025 0 0 0 .038.027l.15-.107.15.107a.02.02 0 0 0 .014.006q.009 0 .016-.005a.03.03 0 0 0 .009-.028l-.056-.175.15-.111a.025.025 0 0 0-.015-.044h-.185zM17.743.782l-.06-.176c-.006-.024-.037-.024-.04 0l-.06.177H17.4q-.017.001-.024.017-.005.016.009.027l.15.11-.062.176a.025.025 0 0 0 .038.026l.15-.107.15.107a.024.024 0 0 0 .039-.026l-.056-.176.15-.111a.03.03 0 0 0 .008-.028.03.03 0 0 0-.024-.016zm1.418 0L19.1.606c-.004-.014-.017-.02-.027-.018q-.012.003-.014.018l-.059.177h-.185q-.017.001-.023.017-.004.016.008.027l.15.11-.061.176a.025.025 0 0 0 .021.031.02.02 0 0 0 .017-.005l.15-.107.15.107a.024.024 0 0 0 .038-.026L19.21.937l.15-.111a.03.03 0 0 0 .009-.013.025.025 0 0 0-.024-.031zm1.417 0L20.52.606c-.007-.024-.04-.024-.04 0l-.06.176h-.19q-.017.001-.023.016-.004.016.008.028l.15.11-.056.177a.03.03 0 0 0 0 .015.03.03 0 0 0 .02.016q.01.001.018-.005l.15-.107.15.107a.024.024 0 0 0 .038-.026l-.056-.176.15-.111a.03.03 0 0 0 .008-.028.03.03 0 0 0-.023-.016zm1.355-.176a.023.023 0 0 0-.046 0l-.059.176h-.184a.025.025 0 0 0-.016.044l.15.11-.056.177q-.004.016.01.027.014.009.029 0l.15-.108.15.107.012.006q.01 0 .017-.005a.03.03 0 0 0 .009-.027l-.056-.176.15-.111a.025.025 0 0 0-.015-.044h-.185zm1.419 0a.02.02 0 0 0-.041.001l-.06.176h-.184l-.013.003a.025.025 0 0 0-.002.041l.15.11-.062.176a.025.025 0 0 0 .038.026l.15-.107.15.107a.03.03 0 0 0 .03.001.03.03 0 0 0 .009-.027l-.056-.176.15-.111a.025.025 0 0 0-.015-.044h-.185z'
      clipRule='evenodd'
    />
    <path
      fill='#F5F5F5'
      d='m17.683 4.26.06.176h.184q.017.002.024.018.004.016-.009.027l-.15.11.057.176a.025.025 0 0 1-.038.027l-.15-.107-.15.107a.025.025 0 0 1-.039-.027l.061-.174-.15-.111a.03.03 0 0 1-.008-.027.03.03 0 0 1 .023-.017h.186l.059-.176c.003-.026.034-.026.04-.001m5.648-.015q.016 0 .02.016l.06.175h.184a.025.025 0 0 1 .015.045l-.15.11.057.176c.003.01 0 .022-.01.028a.03.03 0 0 1-.029 0l-.15-.108-.15.107a.025.025 0 0 1-.038-.027l.061-.174-.15-.111a.025.025 0 0 1 .016-.044h.184l.06-.176a.02.02 0 0 1 .02-.017m-1.418 0q.016 0 .02.016l.06.175h.184a.025.025 0 0 1 .015.045l-.15.11.057.176c.003.01 0 .022-.01.028a.03.03 0 0 1-.028 0l-.15-.108-.15.107a.03.03 0 0 1-.03 0 .03.03 0 0 1-.009-.027l.061-.174-.15-.111a.025.025 0 0 1 .015-.044h.185l.06-.176a.02.02 0 0 1 .02-.017M19.1 4.26l.06.175h.184q.017.002.023.018.004.016-.008.027l-.15.11.056.176a.025.025 0 0 1-.038.027l-.15-.107-.15.107a.03.03 0 0 1-.029 0 .03.03 0 0 1-.01-.027l.062-.174-.15-.111a.025.025 0 0 1 .015-.044H19l.06-.176c0-.026.033-.026.04-.001m1.418 0 .06.175h.184q.017.002.023.018.004.016-.008.027l-.15.11.056.176a.025.025 0 0 1-.038.027l-.15-.107-.15.107a.03.03 0 0 1-.029 0 .03.03 0 0 1-.01-.027l.062-.174-.15-.111a.025.025 0 0 1 .015-.044h.185l.06-.176c0-.026.033-.026.04-.001m-2.127-.465.06.176h.184q.017.001.024.016.005.016-.009.028l-.15.11.057.177a.024.024 0 0 1-.038.026l-.15-.107-.15.107a.025.025 0 0 1-.038-.027l.055-.175-.15-.111a.025.025 0 0 1 .015-.044h.19l.06-.176c.003-.024.034-.024.04 0m4.239-.02a.02.02 0 0 1 .011.02l.06.176h.184a.025.025 0 0 1 .015.044l-.15.11.057.177q.005.016-.01.027a.03.03 0 0 1-.028 0l-.15-.108-.15.107a.025.025 0 0 1-.039-.026l.056-.176-.15-.111a.025.025 0 0 1 .015-.044h.185l.06-.176a.023.023 0 0 1 .034-.02m-1.403.02.06.176h.184q.017.001.023.016.004.016-.008.028l-.15.11.056.177a.024.024 0 0 1-.038.026l-.15-.107-.15.107a.03.03 0 0 1-.029 0 .03.03 0 0 1-.01-.026l.057-.176-.15-.111a.03.03 0 0 1-.008-.028.03.03 0 0 1 .023-.016h.184l.06-.176c.006-.024.039-.024.046 0m-1.418 0 .06.176h.184q.017.001.023.016.004.016-.008.028l-.15.11.056.177a.024.024 0 0 1-.038.026l-.15-.107-.15.107a.03.03 0 0 1-.029 0 .03.03 0 0 1-.01-.026l.057-.176-.15-.111a.03.03 0 0 1-.008-.028.03.03 0 0 1 .023-.016h.19l.06-.176c0-.024.033-.024.04 0m-.709-.451.06.176h.184q.017.001.023.017.004.016-.008.028l-.15.11.056.176a.025.025 0 0 1-.038.027l-.15-.107-.15.107a.03.03 0 0 1-.029 0 .03.03 0 0 1-.01-.027l.057-.176-.15-.11a.03.03 0 0 1-.008-.028.03.03 0 0 1 .023-.017h.19l.06-.176c0-.02.033-.02.04 0m4.25 0 .06.176h.184a.025.025 0 0 1 .015.045l-.15.11.057.176q.005.017-.01.028a.03.03 0 0 1-.029-.001l-.15-.107-.15.107a.025.025 0 0 1-.038-.027l.056-.176-.15-.11a.025.025 0 0 1 .015-.045h.185l.06-.176c.008-.02.041-.02.046 0m-5.668 0 .06.176h.184q.017.001.024.017.004.016-.009.028l-.15.11.057.176a.025.025 0 0 1-.038.027l-.15-.107-.15.107a.025.025 0 0 1-.038-.027l.055-.176-.15-.11a.025.025 0 0 1 .015-.045h.19l.06-.176c.003-.02.034-.02.04 0m4.25 0 .06.176h.184a.025.025 0 0 1 .015.045l-.15.11.057.176q.005.017-.01.028a.03.03 0 0 1-.028-.001l-.15-.107-.15.107a.025.025 0 0 1-.039-.027l.056-.176-.15-.11a.025.025 0 0 1 .015-.045h.185l.06-.176c.008-.02.041-.02.045 0m-1.414 0 .06.176h.184q.017.001.023.017.004.016-.008.028l-.15.11.056.176a.025.025 0 0 1-.038.027l-.15-.107-.15.107a.03.03 0 0 1-.029 0 .03.03 0 0 1-.01-.027l.057-.176-.15-.11a.03.03 0 0 1-.008-.028.03.03 0 0 1 .023-.017h.19l.06-.176c0-.02.033-.02.04 0m-2.127-.464.06.175h.184q.017.002.024.018.005.016-.009.027l-.15.11.057.176a.025.025 0 0 1-.038.027l-.15-.107-.15.107a.025.025 0 0 1-.038-.027l.06-.174-.15-.111a.03.03 0 0 1-.008-.028.03.03 0 0 1 .024-.016h.184l.06-.176c.003-.025.034-.025.04-.001m4.227-.023q.021.002.023.023l.06.175h.184a.025.025 0 0 1 .015.045l-.15.11.057.176q.005.017-.01.028a.03.03 0 0 1-.028 0l-.15-.108-.15.107a.025.025 0 0 1-.039-.027l.056-.175-.15-.111a.025.025 0 0 1 .015-.045h.185l.06-.175c0-.013.01-.023.022-.023m-1.391.023.06.175h.184q.017.002.023.018.004.016-.008.027l-.15.11.056.176a.025.025 0 0 1-.038.027l-.15-.107-.15.107a.03.03 0 0 1-.029 0 .03.03 0 0 1-.01-.027l.057-.175-.15-.111a.03.03 0 0 1-.008-.027.03.03 0 0 1 .023-.018h.184l.06-.175c.006-.024.039-.024.046 0m-1.418 0 .06.175h.184q.017.002.023.018.004.016-.008.027l-.15.11.056.176a.025.025 0 0 1-.038.027l-.15-.107-.15.107a.03.03 0 0 1-.029 0 .03.03 0 0 1-.01-.027l.062-.174-.15-.111a.03.03 0 0 1-.008-.028.03.03 0 0 1 .023-.016h.185l.06-.176c0-.025.033-.025.04-.001m-.709-.448.06.176h.184q.017.001.023.017.004.015-.008.028l-.15.11.056.176a.024.024 0 0 1-.038.027l-.15-.107-.15.107a.03.03 0 0 1-.029 0 .03.03 0 0 1-.01-.027l.062-.175-.15-.11a.025.025 0 0 1 .015-.044H19l.06-.177c0-.025.033-.025.04-.001m4.23-.016q.016 0 .02.016l.06.176h.184a.025.025 0 0 1 .015.045l-.15.11.057.176q.005.017-.01.028a.03.03 0 0 1-.029-.001l-.15-.107-.15.107a.025.025 0 0 1-.038-.027l.062-.175-.15-.11a.025.025 0 0 1 .015-.045h.184l.06-.176a.02.02 0 0 1 .02-.017m-1.42-.007q.02.002.022.023l.06.176h.184a.025.025 0 0 1 .015.045l-.15.11.057.176q.005.017-.01.028a.03.03 0 0 1-.028-.001l-.15-.107-.15.107a.025.025 0 0 1-.039-.027l.056-.176-.15-.11a.025.025 0 0 1 .015-.045h.185l.06-.176c0-.013.01-.023.022-.023m-4.228.023.06.176h.184q.017.001.024.017.004.015-.009.028l-.15.11.057.176a.024.024 0 0 1-.038.027l-.15-.107-.15.107a.025.025 0 0 1-.038-.027l.06-.175-.15-.11a.03.03 0 0 1-.008-.028.03.03 0 0 1 .023-.017h.186l.059-.176c.003-.025.034-.025.04-.001m2.836 0 .06.176h.184q.017.001.023.017.004.015-.008.028l-.15.11.056.176a.024.024 0 0 1-.038.027l-.15-.107-.15.107a.03.03 0 0 1-.029 0 .03.03 0 0 1-.01-.027l.057-.176-.15-.11a.03.03 0 0 1-.008-.028.03.03 0 0 1 .023-.017h.19l.06-.176c0-.024.033-.024.04 0m-2.127-.469.06.176h.184q.017.002.024.018.005.016-.009.027l-.15.11.057.176a.025.025 0 0 1-.038.028l-.15-.108-.15.108a.025.025 0 0 1-.038-.027l.055-.177-.15-.11a.025.025 0 0 1 .015-.045h.19l.06-.176c.003-.02.034-.02.04 0m2.836 0 .06.176h.184q.017.002.023.018.004.016-.008.027l-.15.11.056.176a.025.025 0 0 1-.038.028l-.15-.108-.15.108a.03.03 0 0 1-.029 0 .03.03 0 0 1-.01-.028l.057-.176-.15-.11a.03.03 0 0 1-.008-.027.03.03 0 0 1 .023-.018h.184l.06-.176c.006-.02.039-.02.046 0m-1.418 0 .06.176h.184q.017.002.023.018.004.016-.008.027l-.15.11.056.176a.025.025 0 0 1-.038.028l-.15-.108-.15.108a.03.03 0 0 1-.029 0 .03.03 0 0 1-.01-.028l.057-.176-.15-.11a.03.03 0 0 1-.008-.027.03.03 0 0 1 .023-.018h.19l.06-.176c0-.02.033-.02.04 0m2.832 0 .06.176h.184a.025.025 0 0 1 .015.045l-.15.11.057.176c.003.01 0 .022-.01.028a.03.03 0 0 1-.028 0l-.15-.108-.15.108a.025.025 0 0 1-.039-.028l.056-.176-.15-.11a.025.025 0 0 1 .015-.045h.185l.06-.176c.008-.02.041-.02.045 0m-2.123-.447.06.177h.184q.017.001.023.017.004.016-.008.027l-.15.11.056.177a.025.025 0 0 1-.038.027l-.15-.108-.15.108a.03.03 0 0 1-.029 0 .03.03 0 0 1-.01-.027l.057-.177-.15-.11a.025.025 0 0 1 .015-.045h.19l.06-.176c0-.02.033-.02.04 0m-2.836 0 .06.177h.184q.017.001.024.017.004.016-.009.027l-.15.11.057.177a.025.025 0 0 1-.038.027l-.15-.108-.15.108a.025.025 0 0 1-.038-.027l.055-.177-.15-.11a.025.025 0 0 1 .015-.045h.19l.06-.176c.003-.02.034-.02.04 0m1.42 0 .06.177h.185q.017.001.023.017.004.016-.008.027l-.15.11.056.177q.005.016-.009.027a.03.03 0 0 1-.029 0l-.15-.108-.15.108a.025.025 0 0 1-.039-.027l.057-.177-.15-.11a.025.025 0 0 1 .015-.045h.184l.06-.176c.003-.02.036-.02.045 0m2.83 0 .06.177h.184a.025.025 0 0 1 .015.044l-.15.11.057.177q.005.016-.01.027a.03.03 0 0 1-.028 0l-.15-.108-.15.108a.025.025 0 0 1-.039-.027l.056-.177-.15-.11a.025.025 0 0 1 .015-.045h.185l.06-.176c.008-.02.041-.02.045 0m1.419 0 .059.177h.184a.025.025 0 0 1 .015.044l-.15.11.057.177q.005.016-.01.027a.03.03 0 0 1-.029 0l-.15-.108-.15.108a.025.025 0 0 1-.038-.027l.056-.177-.15-.11a.025.025 0 0 1 .015-.045h.185l.06-.176c.008-.02.041-.02.046 0m-2.124-.464.06.176h.184q.017.001.023.016.004.016-.008.028l-.15.11.056.176a.025.025 0 0 1-.038.027l-.15-.107-.15.107a.025.025 0 0 1-.038-.027l.056-.175-.15-.111a.03.03 0 0 1-.008-.027.03.03 0 0 1 .023-.017h.184l.06-.176c.006-.024.039-.024.046 0m-1.418 0 .06.176h.184q.017.001.023.016.004.016-.008.028l-.15.11.056.176a.025.025 0 0 1-.038.027l-.15-.107-.15.107a.025.025 0 0 1-.038-.027l.061-.174-.15-.111a.025.025 0 0 1 .015-.044h.185l.06-.176c0-.026.033-.025.04-.001m-1.418 0 .06.176h.184q.017.001.024.016.005.016-.009.028l-.15.11.057.176a.025.025 0 0 1-.038.027l-.15-.107-.15.107a.025.025 0 0 1-.038-.027l.06-.174-.15-.111a.025.025 0 0 1 .016-.044h.184l.06-.176c.003-.025.034-.025.04-.001m4.239-.02a.02.02 0 0 1 .011.02l.06.176h.184a.025.025 0 0 1 .015.044l-.15.11.057.176c.003.01 0 .022-.01.028a.03.03 0 0 1-.028 0l-.15-.108-.15.107a.025.025 0 0 1-.039-.027l.056-.175-.15-.111a.025.025 0 0 1 .015-.044h.185l.06-.176a.023.023 0 0 1 .034-.02M17.683.606l.06.176h.184q.017.001.024.016.004.016-.009.028l-.15.11.057.177a.025.025 0 0 1-.038.026l-.15-.107-.15.107a.025.025 0 0 1-.038-.027l.06-.175-.15-.11a.025.025 0 0 1 .015-.044h.186l.059-.177c.003-.024.034-.024.04 0m1.418 0 .06.176h.184q.017.001.023.016.004.016-.008.028l-.15.11.056.177a.025.025 0 0 1-.038.026l-.15-.107-.15.107a.03.03 0 0 1-.029 0 .03.03 0 0 1-.01-.026l.062-.175-.15-.111a.025.025 0 0 1 .015-.044H19l.06-.177c0-.025.033-.024.04 0m1.418 0 .06.176h.184q.017.001.023.016.004.016-.008.028l-.15.11.056.177a.025.025 0 0 1-.038.026l-.15-.107-.15.107a.03.03 0 0 1-.029 0 .03.03 0 0 1-.01-.026l.057-.176-.15-.111a.03.03 0 0 1-.008-.028.03.03 0 0 1 .023-.016h.19l.06-.176c0-.024.033-.024.04 0m1.403-.02a.02.02 0 0 1 .011.02l.06.176h.184a.025.025 0 0 1 .015.044l-.15.11.057.177q.005.016-.01.027a.03.03 0 0 1-.028 0l-.15-.108-.15.107a.025.025 0 0 1-.039-.026l.056-.176-.15-.111a.025.025 0 0 1 .015-.044h.185l.06-.176a.023.023 0 0 1 .034-.02m1.409.004q.016 0 .02.016l.06.176h.184a.025.025 0 0 1 .015.044l-.15.11.057.177q.005.016-.01.027a.03.03 0 0 1-.029 0l-.15-.108-.15.107a.025.025 0 0 1-.038-.027l.062-.175-.15-.11a.025.025 0 0 1 .015-.044h.184l.06-.177a.02.02 0 0 1 .02-.016'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M30.75.625h-12.5a.625.625 0 0 0-.625.625v7.5c0 .345.28.625.625.625h12.5c.345 0 .625-.28.625-.625v-7.5a.625.625 0 0 0-.625-.625M18.25 0C17.56 0 17 .56 17 1.25v7.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25v-7.5C32 .56 31.44 0 30.75 0z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(EnergyWtiOilusIcon);
export default ForwardRef;
