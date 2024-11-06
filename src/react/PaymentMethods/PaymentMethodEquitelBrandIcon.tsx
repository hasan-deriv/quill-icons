import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodEquitelBrandIcon = (
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
      fill='url(#c0cbc2838432dfca4d167a01914b36ff__a)'
      d='M94.319 35.915a8.444 8.444 0 0 0 8.443-8.444 8.443 8.443 0 1 0-16.887 0 8.444 8.444 0 0 0 8.444 8.444'
    />
    <path
      fill='url(#c0cbc2838432dfca4d167a01914b36ff__b)'
      d='M115.556 35.915A8.444 8.444 0 0 0 124 27.47a8.444 8.444 0 1 0-8.444 8.444'
    />
    <path
      fill='url(#c0cbc2838432dfca4d167a01914b36ff__c)'
      d='M72.95 35.915a8.444 8.444 0 1 0 0-16.888 8.444 8.444 0 0 0 0 16.888'
    />
    <path
      fill='#F79624'
      d='M81.343 28.22s-1.32 11.815 11.772 12.99l-1.219 4.95-5.802 1.426S84.72 35.24 73.548 35.879l1.252-6.915 6.544-.744'
    />
    <path
      fill='#8E4822'
      d='M107.265 28.22s1.321 11.815-11.772 12.99l1.22 4.95 5.801 1.426s1.373-12.346 12.546-11.707l-1.251-6.915-6.545-.744z'
    />
    <path
      fill='#AB5116'
      d='M10.505 46.59c2.358.008 4.673.015 6.988.026.038 0 .079.043.115.064l-.505 1.969c-.066.254-.129.509-.203.761-.08.263-.223.347-.576.349l-6.478.001c-.184 0-.369.017-.56.028-.259 1.122-.638 2.183-.853 3.367.76.01 1.456.004 2.152.004h6.324c.041.416-.467 2.475-.77 3.164H4l4.333-16.246h11.934c.068.423-.317 2.015-.765 3.185h-7.817c-.125 0-.25-.008-.375.004-.207.02-.338.126-.382.343-.044.211-.119.414-.17.624-.141.586-.275 1.174-.419 1.76-.043.174-.112.344-.183.556.133.017.219.03.349.041'
    />
    <path
      fill='#AB5015'
      d='M20.31 55.432c-.865-.794-1.313-1.76-1.523-2.875-.106-.56-.168-1.116-.134-1.675.157-2.516 1.197-4.576 3.242-6.084a5.8 5.8 0 0 1 2.034-.96c.753-.185 1.533-.317 2.318-.186 1.186.198 2.16.76 2.895 1.723.027.035.059.064.135.148.083-.132.18-.233.214-.351a9 9 0 0 0 .216-.95c.036-.225.18-.362.362-.364 1.043-.018 2.088-.008 3.183-.008 0 .181.028.323-.005.448-.151.566-.322 1.125-.483 1.687-.08.282-.152.567-.228.851-.246.923-.497 1.845-.736 2.77-.15.583-.274 1.173-.426 1.755s-.33 1.156-.487 1.735c-.094.342-.165.69-.254 1.034-.094.358-.195.713-.294 1.07-.079.282-.168.561-.24.845-.208.838-.404 1.68-.616 2.517a97 97 0 0 1-.56 2.102c-.059.211-.199.345-.44.343h-2.998c-.21-.243-.093-.49-.036-.72.164-.66.342-1.318.524-1.974.161-.58.344-1.156.5-1.74.109-.413.186-.833.278-1.25q-.049-.03-.097-.062c-.231.162-.464.321-.69.485-1.01.73-2.146.966-3.354.775-.847-.134-1.634-.462-2.302-1.086zm6.392-8.68c-.147-.044-.294-.119-.442-.127-.815-.038-1.563.174-2.204.685-1.358 1.084-1.877 2.52-1.692 4.22.11 1.013.876 1.852 1.826 2.002 1.083.17 2.063-.099 2.88-.838a4.47 4.47 0 0 0 1.364-2.292c.189-.746.249-1.468-.043-2.185-.299-.74-.825-1.247-1.69-1.466zM38.229 45.267c-.214.746-.41 1.46-.595 2.177-.15.582-.278 1.171-.429 1.754-.088.342-.225.673-.301 1.017-.14.636-.348 1.268-.252 1.934.071.493.337.843.807 1.033 1.362.546 2.56-.207 3.122-1.341.264-.533.406-1.129.58-1.704.188-.623.352-1.252.519-1.88.15-.569.286-1.143.435-1.712.158-.6.316-1.2.49-1.794.091-.304.053-.666.39-.907.967 0 1.968-.004 2.968.003.27.001.333.07.283.347-.073.41-.176.816-.277 1.222-.094.373-.206.74-.304 1.113-.085.329-.152.664-.244.991-.087.311-.21.612-.291.924-.211.822-.398 1.651-.613 2.471-.153.581-.345 1.15-.501 1.73-.152.566-.282 1.14-.423 1.71-.138.553-.274 1.107-.424 1.657-.03.115-.12.212-.182.317h-3.399l.15-1.044c-.218.12-.34.168-.442.246-.557.426-1.154.8-1.84.943-1.692.352-3.535-.112-4.304-2.013-.325-.802-.355-1.672-.136-2.53.088-.346.156-.697.244-1.042.24-.93.491-1.856.73-2.785.151-.585.277-1.177.43-1.76.153-.584.326-1.163.485-1.745.038-.135.055-.275.08-.413.034-.196.175-.327.345-.33 1.043-.014 2.088-.008 3.151-.008.137.532-.198.937-.258 1.419z'
    />
    <path
      fill='#F79624'
      d='M72.16 49.498c-.138.563-.261 1.087-.421 1.6-.031.1-.2.185-.321.222-.13.04-.28.016-.42.016h-7.637c-.164.502.008.892.211 1.249.29.507.716.836 1.31 1.008 1.223.354 2.315.094 3.366-.534.145-.085.29-.168.47-.271.189.219.39.429.563.66.304.406.58.834.892 1.234.156.2.119.322-.057.462-.561.447-1.186.776-1.853 1.034-1.322.513-2.706.542-4.062.32-1.644-.268-2.989-1.088-3.753-2.658a5.8 5.8 0 0 1-.515-1.683c-.122-.8-.07-1.593.047-2.374.136-.91.48-1.769.96-2.553.656-1.07 1.506-1.966 2.608-2.59.766-.435 1.56-.774 2.455-.896.512-.07 1.018-.159 1.53-.119 1.522.12 2.86.644 3.81 1.897.458.605.728 1.302.832 2.074.084.627.082 1.24-.016 1.9zm-6.424-.319h2.58c.386 0 .556-.126.61-.486.076-.49-.043-.942-.289-1.375-.378-.667-1.031-.825-1.695-.85-.583-.022-1.158.156-1.681.444-.776.43-1.284 1.1-1.677 1.872-.05.097-.033.228-.053.394h2.205zM57.722 55.637c-.012.307-.156.443-.407.54-.97.375-1.977.462-2.992.34-.785-.094-1.496-.383-1.985-1.073-.446-.629-.522-1.318-.383-2.046.077-.411.187-.817.292-1.222.17-.644.354-1.285.523-1.928.152-.585.288-1.176.44-1.76.09-.346.203-.685.296-1.028.038-.144.049-.295.081-.495h-1.325c0-.177-.013-.312.003-.441.056-.45.665-2.422.837-2.698h1.355l.818-3.008c.418-.122 3.006-.144 3.54-.023l-.796 3.008c.228.01.378.023.529.024.657.003 1.314-.004 1.971.004.325.004.382.11.294.405-.116.383-.206.776-.313 1.162-.136.489-.278.976-.436 1.53-.937.066-1.902-.008-2.895.043-.147.577-.282 1.145-.435 1.706-.163.592-.36 1.174-.514 1.768q-.267 1.034-.478 2.081c-.078.385.128.819.671.854.607.038 1.17-.126 1.745-.254l.203-.048c.017.07.054.13.042.179q-.166.67-.352 1.335c-.096.34-.211.675-.327 1.046zM74.597 45.34c.17-.652.339-1.265.502-1.879.15-.569.295-1.14.443-1.71q.222-.855.448-1.708c.048-.179.11-.354.165-.531.37-.157 3.015-.186 3.496-.029-.008.113 0 .238-.03.353q-.26 1.006-.538 2.009c-.156.562-.331 1.12-.487 1.684-.095.342-.169.69-.253 1.034q-.114.472-.235.939c-.172.656-.343 1.311-.525 1.965-.156.563-.328 1.122-.485 1.684-.09.327-.164.658-.25.987q-.148.556-.304 1.11c-.075.267-.159.533-.227.803-.145.582-.271 1.17-.426 1.75-.155.579-.335 1.153-.504 1.73-.017.06-.025.122-.036.185-.108.638-.11.64-.732.64h-2.392c-.15 0-.303-.013-.506-.022.043-.285.06-.532.12-.768q.252-.99.53-1.973c.162-.582.347-1.158.503-1.741s.28-1.177.434-1.762c.15-.57.324-1.131.48-1.7.148-.537.282-1.08.427-1.62.123-.463.25-.926.382-1.428z'
    />
    <path
      fill='#AB5116'
      d='M49.913 43.842c.562 0 1.079.016 1.595-.006.357-.014.39.211.324.455-.184.683-.36 1.37-.552 2.054-.223.801-.467 1.596-.686 2.398-.158.581-.277 1.172-.431 1.754-.154.58-.333 1.154-.496 1.731-.084.298-.154.599-.234.896-.176.654-.358 1.307-.534 1.96q-.116.424-.214.855c-.092.408-.088.414-.517.416-.657.004-1.313 0-1.97 0h-1.076c.013-.185.002-.339.04-.48q.356-1.37.73-2.737c.226-.82.472-1.636.691-2.458s.406-1.655.626-2.477c.215-.807.458-1.607.68-2.413.144-.522.291-1.045.402-1.576.058-.27.209-.366.449-.37.375-.008.75-.002 1.173-.002'
    />
    <path fill='#8E4822' d='M94.304 58a8.444 8.444 0 1 0 0-16.888 8.444 8.444 0 0 0 0 16.887' />
    <path
      fill='url(#c0cbc2838432dfca4d167a01914b36ff__d)'
      d='M72.931 35.88a8.444 8.444 0 1 0 0-16.887 8.444 8.444 0 0 0 0 16.888'
    />
    <path
      fill='url(#c0cbc2838432dfca4d167a01914b36ff__e)'
      d='M94.3 35.88a8.444 8.444 0 1 0 0-16.888 8.444 8.444 0 0 0 0 16.888'
    />
    <path
      fill='url(#c0cbc2838432dfca4d167a01914b36ff__f)'
      d='M115.537 35.88a8.444 8.444 0 0 0 8.444-8.443 8.444 8.444 0 1 0-8.444 8.444'
    />
    <path
      fill='#AB5116'
      d='M50.074 39a.19.19 0 0 0-.181.138q-.374 1.365-.731 2.737c-.026.096-.029.197-.032.31q-.002.08-.008.17h1.076l.657.001q.657.002 1.313 0c.424-.003.425-.009.514-.403l.003-.014c.064-.288.138-.572.214-.855q.133-.49.267-.98.136-.49.267-.98a.1.1 0 0 0-.096-.124z'
    />
    <defs>
      <radialGradient
        id='c0cbc2838432dfca4d167a01914b36ff__a'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='rotate(16.984 -81.976 172.14)scale(69.9605 43.9313)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#F79624' stopOpacity={0.33} />
        <stop offset={0.258} stopColor='#F79624' />
        <stop offset={0.79} stopColor='#F79624' />
      </radialGradient>
      <radialGradient
        id='c0cbc2838432dfca4d167a01914b36ff__b'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='rotate(16.984 -81.976 172.14)scale(69.9605 43.9313)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#8E4822' stopOpacity={0.53} />
        <stop offset={0.258} stopColor='#8E4822' />
        <stop offset={0.79} stopColor='#8E4822' />
      </radialGradient>
      <radialGradient
        id='c0cbc2838432dfca4d167a01914b36ff__c'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='rotate(16.984 -81.976 172.14)scale(69.9605 43.9313)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#F79624' stopOpacity={0.33} />
        <stop offset={0.258} stopColor='#F79624' />
        <stop offset={0.79} stopColor='#F79624' />
      </radialGradient>
      <radialGradient
        id='c0cbc2838432dfca4d167a01914b36ff__d'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='matrix(9.4163 8.21422 -9.1463 10.48478 70.498 24.001)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFCA8B' />
        <stop offset={0.258} stopColor='#F79624' />
        <stop offset={0.79} stopColor='#F79624' />
      </radialGradient>
      <radialGradient
        id='c0cbc2838432dfca4d167a01914b36ff__e'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='matrix(9.4163 8.21422 -9.1463 10.48478 91.866 24.001)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFCA8B' />
        <stop offset={0.258} stopColor='#F79624' />
        <stop offset={0.79} stopColor='#F79624' />
      </radialGradient>
      <radialGradient
        id='c0cbc2838432dfca4d167a01914b36ff__f'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='matrix(9.4163 8.21422 -9.1463 10.48478 113.104 24.001)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#CD8158' />
        <stop offset={0.258} stopColor='#8E4822' />
        <stop offset={0.79} stopColor='#8E4822' />
      </radialGradient>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodEquitelBrandIcon);
export default ForwardRef;
