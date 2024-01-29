import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodZingpayBlackIcon = (
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
    <g fill='#000'>
      <path
        fillRule='evenodd'
        d='M13.497 19.379a4.32 4.32 0 0 1 4.105-3.376l-.002-.002h-.011a4.341 4.341 0 0 1 4.446 4.569 4.38 4.38 0 0 1-2.791 3.899c-.645.228-1.329.296-2.01.363-.762.075-1.52.15-2.22.449a4.39 4.39 0 0 0-2.236 2.299 5.93 5.93 0 0 0-.36 3.211q.032.21.027.424l.008.038.007.03c.055.384.168.758.338 1.108a4.77 4.77 0 0 0 1.746 1.786 6.3 6.3 0 0 0 2.941.625 4.5 4.5 0 0 1 2.22.31 4.33 4.33 0 0 1 2.43 2.577c.155.438.24.902.249 1.375a4.4 4.4 0 0 1-.081.762l-.009.14c-.043.7-.087 1.398.223 2.053.883 1.787 3.315 2.515 5.133 2.515q.41-.008.82-.06.06.013.118.03c.725-.073 1.445-.18 2.12-.573a4.7 4.7 0 0 0 1.55-1.55c.535-.911.786-1.962.717-3.019a4.373 4.373 0 0 1 4.26-4.473 4.37 4.37 0 0 1 4.494 4.25 4.41 4.41 0 0 1-2.175 3.878 5.73 5.73 0 0 1-3.15.36h-.165a3.5 3.5 0 0 0-1.211.195 5.28 5.28 0 0 0-3.102 2.959l.055.085a5.5 5.5 0 0 0-.37 1.981 5.5 5.5 0 0 0 .543 2.401l-.013.026q.15.31.342.6a4.54 4.54 0 0 0 1.868 1.704c.962.526 2.056.761 3.151.677l-.053-.02a4.37 4.37 0 0 1 4.16 4.366 4.37 4.37 0 0 1-4.16 4.368 4.4 4.4 0 0 1-3.795-2.197c-.464-.783-.515-1.625-.567-2.465-.026-.426-.052-.852-.132-1.27a4.85 4.85 0 0 0-3.04-3.946l-.018.008a5 5 0 0 0-.52-.167l-.003.002a5 5 0 0 0-.725-.13 5 5 0 0 0-.394-.016 4.76 4.76 0 0 0-4.638 3.553 6.3 6.3 0 0 0-.325 1.853 4.3 4.3 0 0 1-.117 1.821 4.426 4.426 0 0 1-8.714-1.126v-.011l-.02-.202c-.078-.828-.158-1.658-.616-2.427a4.56 4.56 0 0 0-1.684-1.5 5.4 5.4 0 0 0-3.078-.719 4.37 4.37 0 0 1-3.99-2.03 4.375 4.375 0 0 1 2.256-6.458c.603-.233 1.238-.294 1.874-.355.777-.074 1.556-.148 2.281-.538a5.05 5.05 0 0 0 2.197-4.607l-.003-.157a4 4 0 0 1-.038-.645l-.009-.105c-.063-.781-.127-1.563-.574-2.326a4.4 4.4 0 0 0-1.551-1.55 5.26 5.26 0 0 0-2.684-.74 4.5 4.5 0 0 1-1.812-.172 4.363 4.363 0 0 1-2.838-5.357 4.36 4.36 0 0 1 4.978-3.113q.6.009 1.195-.04a3.18 3.18 0 0 0 1.94-1.24c.463-.643.77-1.383.894-2.166.08-.449.116-.905.152-1.361.037-.483.075-.966.165-1.442m6.526 34.987-.032.04-.008-.002h-.124c-.09 0-.184.028-.276.056q-.068.022-.135.037h-1.21a6 6 0 0 1-.79-.062 4 4 0 0 0-.28.087 5.61 5.61 0 0 1-4.156-3.575l.012-.03a6 6 0 0 1-.224-.924 6 6 0 0 1-.083-.78v-.185a5.63 5.63 0 0 1 2.77-4.864h.051a5.6 5.6 0 0 1 2.732-.719.95.95 0 0 0 .42-.094 5.7 5.7 0 0 1 4.117 2.3 5.7 5.7 0 0 1 1.045 2.487 4 4 0 0 0-.017.537q-.01.249.006.502l.002.014q.002.094.009.187l-.021.142q-.01.264-.051.524-.037.249-.102.493l-.021.064-.04.008-.002.002.008.02.006.016.006.017q-.145.42-.348.818a7 7 0 0 1-.337.595 5.13 5.13 0 0 1-2.868 2.304l-.034-.01zM80.31 31.46q.575 0 1.138.124.579.126 1.138.318h4.394v1.354h-2.945v.084c.321.368.575.793.748 1.251.15.456.224.934.226 1.416a4 4 0 0 1-1.334 3.08 4.4 4.4 0 0 1-3.08 1.24s-1.435 0-1.537.256c0 0-1.345 1.171 0 1.788.576.25 1.19.41 1.815.47l.204.014.09.006.067.006.07.005c.243.02.522.043.832.043h.266c.648.082 1.098.082 1.376.082.406.024.802.128 1.17.306.382.196.729.451 1.026.761.334.347.606.748.801 1.19.212.518.318 1.073.307 1.633a4.45 4.45 0 0 1-.39 1.846 4.1 4.1 0 0 1-1.23 1.518 6.6 6.6 0 0 1-2.053 1.028c-.949.259-1.932.379-2.916.359a7.9 7.9 0 0 1-4.238-.912 2.93 2.93 0 0 1-1.405-2.65 2.7 2.7 0 0 1 1.026-2.216 4.36 4.36 0 0 1 2.585-.894v-.183a10 10 0 0 1-.78-.32 3 3 0 0 1-.698-.43 2.2 2.2 0 0 1-.533-.688 2.1 2.1 0 0 1-.206-1.027c.006-.487.172-.96.473-1.343.392-.45.885-.803 1.437-1.027v-.206a5.1 5.1 0 0 1-1.879-1.6 3.85 3.85 0 0 1-.677-2.259 4.17 4.17 0 0 1 1.325-3.18 4.73 4.73 0 0 1 3.386-1.24zm.676 14.195c-1.283-.073-2.505.544-2.505 2.053.004.232.055.462.146.675.104.244.266.46.47.628.247.202.534.353.842.441.42.128.857.186 1.293.174a3.3 3.3 0 0 0 2.053-.595c.498-.442.792-1.07.81-1.734a1.47 1.47 0 0 0-.523-1.253 2.25 2.25 0 0 0-1.201-.297c-.462-.092-.923-.092-1.385-.092m-.77-12.699a1.22 1.22 0 0 0-.708.207c-.21.15-.376.35-.481.584a3 3 0 0 0-.247.842 6.6 6.6 0 0 0-.073 1.006c-.025.662.12 1.319.42 1.908.2.436.622.724 1.1.748.498.006.953-.282 1.159-.737a3.7 3.7 0 0 0 .41-1.857c.033-.68-.11-1.36-.41-1.97a1.29 1.29 0 0 0-1.168-.73z'
        clipRule='evenodd'
      />
      <path d='M55.935 27.313v3.613l-5.503 11.996h5.605v3.069H45.774v-1.334l6.702-13.68h-6.517v-3.664zM61.774 32.18V45.99h-3.715V32.179zM70.683 31.459a3.7 3.7 0 0 1 3.242 1.497q.053.09.091.186c.387.898.542 1.88.453 2.852v9.999h-3.981v-9.424c.009-.626.018-1.642-.657-1.949a1.5 1.5 0 0 0-.781-.113 1.4 1.4 0 0 0-.646.196c-.626.4-.626 1.496-.626 2.165v9.123h-3.983V31.667h3.983v.82a4.42 4.42 0 0 1 2.905-1.027zM59.946 26.461c.487.002.95.212 1.273.575l.146.173c.272.363.416.807.409 1.263a2.05 2.05 0 0 1-.566 1.457c-.328.37-.806.577-1.303.566a1.72 1.72 0 0 1-1.271-.576 2.186 2.186 0 0 1 0-2.894l.182-.164a1.87 1.87 0 0 1 1.131-.402zM124 31.879l-5.227 15.392-.36 1.027-.144.356c-.188.456-.358.843-.522 1.162q-.367.69-.863 1.294l-.244.262a3.6 3.6 0 0 1-1.203.763 5.1 5.1 0 0 1-1.928.34q-.708.001-1.407-.103h-.37v-2.616l.514.082c.309.047.621.07.934.06.54.04 1.077-.12 1.507-.45.416-.415.705-.938.832-1.51l.185-.647-5.346-15.332h4.167l2.71 10.479 2.709-10.479h3.448l.604-.082z' />
      <path
        fillRule='evenodd'
        d='M105.012 31.735a5.3 5.3 0 0 1 3.623 1.231 4.8 4.8 0 0 1 1.447 3.808v10.057h-2.751v-1.025c-.261.273-.562.51-.892.697a4.7 4.7 0 0 1-2.39.596c-.632 0-1.256-.12-1.84-.36a4.1 4.1 0 0 1-1.456-1.026 4.4 4.4 0 0 1-.934-1.487l-.124-.376a5.5 5.5 0 0 1-.215-1.555 4.8 4.8 0 0 1 .555-2.33 3.9 3.9 0 0 1 1.693-1.56 5.5 5.5 0 0 1 2.616-.565h2.956v-1.026a2.23 2.23 0 0 0-.584-1.744 2.52 2.52 0 0 0-1.755-.555 2.85 2.85 0 0 0-1.509.35c-.365.236-.62.603-.719 1.026l-.091.32h-2.671v-.475a3.92 3.92 0 0 1 1.54-2.974 5.7 5.7 0 0 1 3.499-1.027zm2.014 8.785-2.28.031a1.43 1.43 0 0 0-1.25.513 2.36 2.36 0 0 0-.382 1.405c-.043.572.128 1.14.484 1.592l.144.145c.303.27.697.42 1.108.42.624 0 1.206-.31 1.56-.822.432-.595.649-1.319.616-2.052zM92.965 28.266a6.48 6.48 0 0 1 4.526 1.354l.252.298a5.65 5.65 0 0 1 1.186 3.962 7 7 0 0 1-.71 3.336c-.48.897-1.26 1.6-2.206 1.98l-.584.17a11 11 0 0 1-2.997.364v6.877H88.51v-18.34zm-.533 3.018v5.388c.66.047 1.319-.117 1.879-.474.476-.57.693-1.314.593-2.051a3.3 3.3 0 0 0-.604-2.217 2.33 2.33 0 0 0-1.868-.646'
        clipRule='evenodd'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodZingpayBlackIcon);
export default ForwardRef;
