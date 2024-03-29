import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodPseBrandIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='url(#a289689cf314d846be3d2161a0722959__a)'
      d='M64 71.997c17.673 0 32-14.326 32-31.998S81.673 8 64 8 32 22.326 32 39.999s14.327 31.998 32 31.998'
    />
    <path
      fill='#fff'
      d='M72.63 32.127h-7.575c-.034 0-.068-.005-.101.002-1.205.261-3.477 1.493-3.465 4.184-.063 1.035.39 2.684 2.556 3.37h5.4c.239 0 1.713.338 1.615 2.91-.099 2.593-2.31 2.93-2.627 3.274h-8.368c-.263 0-.477.251-.477.515s.214.515.477.515h8.414c.027 0 .054-.125.08-.13a4.336 4.336 0 0 0 3.457-4.193c.138-3.645-2.499-3.875-2.525-3.877.003-.001-5.33-.016-5.33-.016-1.821-.333-1.723-2.266-1.717-2.35v.006c-.019-2.44 2.301-3.18 2.668-3.18h7.519c.264 0 .478-.251.478-.515s-.215-.516-.478-.516M84.165 32.073c-.044-.013-.09.053-.135.053h-5.66c-2.562 0-3.72 2.967-3.767 3.097-.008.02-.014.005-.02.027-.058.266-1.437 6.505-1.391 8.565.044 1.938 2.018 2.643 3.055 2.754.017.002.035-.015.052-.015h7.87c.267 0 .484-.248.484-.515s-.217-.515-.485-.515h-7.84c-.246 0-2.133-.288-2.167-1.788-.018-.805.21-2.346.487-3.903l10.951-.082a.48.48 0 0 0 .473-.396c.022-.12.513-2.92.513-4.6 0-1.998-2.322-2.654-2.42-2.682m1.019 6.722-10.358.087c.318-1.688.641-3.071.696-3.32.11-.276 1.06-2.405 2.848-2.405h5.584c.302 0 1.663.534 1.663 1.667 0 1.238-.298 3.128-.433 3.971M60.048 35.027c.284-1.933-2.157-2.9-2.614-2.9h-.002c-1.97 0-4.957.067-5.269.056-.041-.004-.084.023-.128.03-1.22.194-2.878 1.767-3.41 3.221l.008.01c-.054.162-.1.412-.172.788l-.35 1.884c-.287 1.556-.666 3.632-1.044 5.707-.756 4.15-1.506 8.298-1.506 8.298a.471.471 0 0 0 .926.168c.318-1.754.838-4.626 1.36-7.49 1.229 1.551 2.758 1.714 2.835 1.721a.3.3 0 0 0 .057.002l4.84-.139a.5.5 0 0 0 .122-.02c2.297-.688 2.987-3.057 3.016-3.158l.01-.052 1.315-8.048c.003-.017.004-.06.006-.078m-.94-.018-1.304 7.961c-.068.213-.668 1.944-2.315 2.474l-4.74.135c-.219-.03-1.698-.303-2.656-2.128.698-3.831 1.339-7.323 1.421-7.694.44-1.18 1.86-2.448 2.658-2.584.18.01.428.01.77.011h1.831c1.104-.002 2.207-.006 2.552-.007.56-.005 1.92.945 1.783 1.832'
    />
    <path
      fill='#FDB718'
      d='M38.244 31.853c.745 0 1.348-.644 1.348-1.437 0-.794-.603-1.438-1.348-1.438-.744 0-1.347.643-1.347 1.438 0 .793.603 1.437 1.347 1.437M36.884 25.877c0-.631-.385-1.162-.916-1.355a32 32 0 0 0-1.241 2.498c.226.183.504.295.809.295.744 0 1.348-.644 1.348-1.438M34.163 30.416c0-.39-.147-.743-.383-1.002a32 32 0 0 0-.74 2.415c.637-.115 1.123-.702 1.123-1.413M38.432 49.367c.744 0 1.348-.644 1.348-1.437 0-.794-.604-1.438-1.348-1.438s-1.347.644-1.347 1.438.603 1.437 1.347 1.437M33.672 47.93c0-.6-.417-1.09-.958-1.172q.229 1.065.528 2.103c.26-.218.43-.552.43-.931M36.877 52.617c0-.793-.603-1.437-1.347-1.437-.532 0-.986.33-1.206.807q.419 1.033.905 2.029c.097.023.197.039.3.039.745 0 1.348-.644 1.348-1.438M39.165 43.462h-2.703c-.175-.343-.677-.934-1.276-.934-.744 0-1.347.674-1.347 1.468s.603 1.465 1.347 1.465c.6 0 1.101-.282 1.276-.969h3.039l2.834-5.152h4.371v-.687h-7.165L36.595 33.5h-3.947q-.104.513-.192 1.03h3.71l2.412 4.123H32.02q-.014.342-.021.687h9.509z'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M51.635 28.004H50.22v-.343h1.47l.024.007-.049.164.049-.164h.004l.006.003a1 1 0 0 1 .084.035c.05.026.115.066.179.128.133.128.243.338.197.646l-.295 2.065h-1.7l-.029-.01.06-.162-.06.161h-.002l-.002-.002-.01-.003a1 1 0 0 1-.114-.059.9.9 0 0 1-.238-.203.74.74 0 0 1-.165-.39 1 1 0 0 1 .112-.55l.01-.018.012-.016.133.109-.133-.11h.001l.001-.001.004-.005.012-.014q.015-.019.044-.048c.037-.04.09-.093.154-.146.063-.054.14-.11.224-.154a.64.64 0 0 1 .291-.08h.003l1.282.043.065-.456v-.001c.029-.19-.036-.292-.096-.35a.4.4 0 0 0-.114-.076m.096 1.225-1.238-.041a.3.3 0 0 0-.13.04 1 1 0 0 0-.161.112 2 2 0 0 0-.16.156.65.65 0 0 0-.07.343c.009.087.044.155.09.21a.6.6 0 0 0 .195.152h1.335zM53.12 27.66h1.486v.344h-1.4l-.028.019a1.168 1.168 0 0 0-.472.739l-.002.012-.004.012v.002l-.003.006-.009.028-.03.108a3 3 0 0 0-.068.378c-.03.286-.016.625.125.915l.072.016h1.339v.343H52.75l-.261-.058-.038-.066c-.225-.394-.238-.847-.202-1.186a3 3 0 0 1 .122-.586v-.001a1.5 1.5 0 0 1 .612-.945 1 1 0 0 1 .09-.056l.007-.003.002-.002h.001l.078.153-.077-.153z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='m55.271 26.637.338.061-.189 1.048a1 1 0 0 1 .12-.069l.028-.013.03-.003h.004l.01-.001.036-.003a6 6 0 0 1 .54-.015c.153.004.32.017.465.049a1 1 0 0 1 .209.069.5.5 0 0 1 .15.108l.02.015c.03.022.07.055.107.101.077.095.144.24.136.44v.012l-.339 1.966-.339-.058.335-1.944a.3.3 0 0 0-.06-.2.2.2 0 0 0-.052-.046l-.037-.018-.026-.037a.1.1 0 0 0-.045-.03.6.6 0 0 0-.133-.043 2 2 0 0 0-.4-.041 5 5 0 0 0-.504.014l-.012.001a.9.9 0 0 0-.26.234 1 1 0 0 0-.082.117l-.39 2.115-.339-.061z'
    />
    <defs>
      <radialGradient
        id='a289689cf314d846be3d2161a0722959__a'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='translate(64.572 39.884)scale(31.9994)'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.316} stopColor='#2D5CA8' />
        <stop offset={0.531} stopColor='#285496' />
        <stop offset={0.729} stopColor='#1F4272' />
        <stop offset={1} stopColor='#0D2D4D' />
      </radialGradient>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodPseBrandIcon);
export default ForwardRef;
