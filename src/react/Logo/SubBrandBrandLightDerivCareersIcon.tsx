import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SubBrandBrandLightDerivCareersIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 414 60'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path
        fill='#FF444F'
        d='m34.986 1.829-2.99 16.955H21.618c-9.682 0-18.911 7.845-20.622 17.527l-.724 4.12C-1.43 50.115 5.03 57.96 14.712 57.96h8.656c7.057 0 13.78-5.713 15.021-12.77L46.361 0zM27.622 43.59c-.382 2.18-2.344 3.954-4.524 3.954h-5.26c-4.351 0-7.263-3.533-6.5-7.893l.454-2.57c.772-4.351 4.925-7.892 9.277-7.892h9.092zm87.292 14.367 6.81-38.634h10.772l-6.81 38.634h-10.781zm1.165-38.188-1.622 9.193c-5.104-1.586-10.369-1.081-11.987-.759q-2.621 14.881-5.245 29.764h-10.78L92.91 21.32c3.506-1.452 12.115-4.399 23.169-1.55m-43.677-.993h-8.385c-8.17 0-15.96 6.62-17.4 14.79l-1.694 9.603c-1.44 8.17 4.01 14.79 12.18 14.79h17.838l1.83-10.382H60.006c-2.72 0-4.543-2.204-4.057-4.933l.055-.326h27.027l1.543-8.752c1.44-8.17-4.01-14.79-12.18-14.79zm1.36 13.963-.063.557H57.63l.087-.493c.485-2.721 2.968-5.116 5.696-5.116h6.277c2.698 0 4.52 2.355 4.074 5.052m100.765-13.416c-3.672 9.763-12.088 26.371-20.24 38.634h-10.78c-3.742-11.671-6.158-27.933-6.619-38.634h10.78c.194 3.49 1.757 16.438 3.54 25.483 4.892-8.8 10.284-20.345 12.531-25.483z'
      />
      <path
        fill='#414652'
        d='M210.648 59.08q-5.256 0-9.576-1.728t-7.416-5.04-4.824-8.136q-1.656-4.896-1.656-11.16t1.872-11.088q1.944-4.896 5.184-8.208a21.8 21.8 0 0 1 7.56-5.04q4.32-1.728 9.216-1.728 3.096 0 5.544.432 2.52.432 4.32 1.008 1.872.576 3.024 1.152t1.584.864l-2.016 5.76q-.648-.432-1.872-.936a37 37 0 0 0-2.808-1.008 20.7 20.7 0 0 0-3.384-.792q-1.8-.36-3.672-.36-3.96 0-7.128 1.368a14.75 14.75 0 0 0-5.4 3.96q-2.232 2.592-3.456 6.336-1.152 3.672-1.152 8.28 0 4.464 1.008 8.136 1.08 3.672 3.168 6.336 2.088 2.592 5.184 4.032 3.168 1.44 7.344 1.44 4.824 0 7.992-1.008t4.752-1.8l1.8 5.76q-.504.36-1.8.936-1.296.504-3.24 1.008t-4.536.864-5.616.36M243.2 53.176q2.376 0 4.176-.072 1.872-.144 3.096-.432v-11.16q-.72-.36-2.376-.576-1.584-.288-3.888-.288-1.512 0-3.24.216a9.7 9.7 0 0 0-3.096.936 6.2 6.2 0 0 0-2.304 1.872q-.936 1.152-.936 3.096 0 3.6 2.304 5.04 2.304 1.368 6.264 1.368m-.576-33.552q4.032 0 6.768 1.08 2.808 1.008 4.464 2.952 1.728 1.872 2.448 4.536.72 2.592.72 5.76v23.4q-.864.144-2.448.432-1.512.216-3.456.432a89 89 0 0 1-4.248.36 46 46 0 0 1-4.464.216q-3.168 0-5.832-.648t-4.608-2.016q-1.944-1.44-3.024-3.744t-1.08-5.544q0-3.096 1.224-5.328a10.35 10.35 0 0 1 3.456-3.6q2.16-1.368 5.04-2.016a27.5 27.5 0 0 1 6.048-.648q1.008 0 2.088.144 1.08.072 2.016.288 1.008.144 1.728.288t1.008.216v-1.872q0-1.656-.36-3.24-.36-1.656-1.296-2.88-.936-1.296-2.592-2.016-1.584-.792-4.176-.792-3.312 0-5.832.504-2.448.432-3.672.936l-.792-5.544q1.296-.576 4.32-1.08 3.024-.576 6.552-.576M279.09 19.768q.864 0 1.944.144 1.152.072 2.232.288 1.08.144 1.944.36.936.144 1.368.288l-1.152 5.832q-.792-.288-2.664-.648-1.8-.432-4.68-.432-1.872 0-3.744.432-1.8.36-2.376.504V58h-6.696V22.144q2.376-.864 5.904-1.584 3.528-.792 7.92-.792M288.071 39.352q0-4.968 1.44-8.64 1.44-3.744 3.816-6.192a15.5 15.5 0 0 1 5.472-3.672 17.1 17.1 0 0 1 6.336-1.224q7.56 0 11.592 4.752 4.032 4.68 4.032 14.328v1.152q0 .648-.072 1.224h-25.632q.432 5.832 3.384 8.856t9.216 3.024q3.528 0 5.904-.576 2.448-.648 3.672-1.224l.936 5.616q-1.224.648-4.32 1.368-3.024.72-6.912.72-4.896 0-8.496-1.44-3.528-1.512-5.832-4.104t-3.456-6.12q-1.08-3.6-1.08-7.848m25.704-3.672q.072-4.536-2.304-7.416-2.304-2.952-6.408-2.952-2.304 0-4.104.936a9.3 9.3 0 0 0-2.952 2.304 11.4 11.4 0 0 0-1.944 3.312 17.6 17.6 0 0 0-.864 3.816zM325.41 39.352q0-4.968 1.44-8.64 1.44-3.744 3.816-6.192a15.5 15.5 0 0 1 5.472-3.672 17.1 17.1 0 0 1 6.336-1.224q7.56 0 11.592 4.752 4.032 4.68 4.032 14.328v1.152q0 .648-.072 1.224h-25.632q.432 5.832 3.384 8.856t9.216 3.024q3.528 0 5.904-.576 2.448-.648 3.672-1.224l.936 5.616q-1.224.648-4.32 1.368-3.024.72-6.912.72-4.896 0-8.496-1.44-3.528-1.512-5.832-4.104t-3.456-6.12q-1.08-3.6-1.08-7.848m25.704-3.672q.072-4.536-2.304-7.416-2.304-2.952-6.408-2.952-2.304 0-4.104.936a9.3 9.3 0 0 0-2.952 2.304 11.4 11.4 0 0 0-1.944 3.312 17.6 17.6 0 0 0-.864 3.816zM378.661 19.768q.864 0 1.944.144 1.152.072 2.232.288 1.08.144 1.944.36.936.144 1.368.288l-1.152 5.832q-.792-.288-2.664-.648-1.8-.432-4.68-.432-1.872 0-3.744.432-1.8.36-2.376.504V58h-6.696V22.144q2.376-.864 5.904-1.584 3.528-.792 7.92-.792M398.442 53.176q4.104 0 6.048-1.08 2.016-1.08 2.016-3.456 0-2.448-1.944-3.888t-6.408-3.24a186 186 0 0 1-4.176-1.728q-1.944-.936-3.384-2.16a9.3 9.3 0 0 1-2.304-2.952q-.864-1.728-.864-4.248 0-4.968 3.672-7.848 3.672-2.952 10.008-2.952 1.584 0 3.168.216 1.584.144 2.952.432 1.368.216 2.376.504 1.08.288 1.656.504l-1.224 5.76q-1.08-.576-3.384-1.152-2.304-.648-5.544-.648-2.808 0-4.896 1.152-2.088 1.08-2.088 3.456 0 1.224.432 2.16.504.936 1.44 1.728 1.008.72 2.448 1.368t3.456 1.368a59 59 0 0 1 4.752 2.016q2.088.936 3.528 2.232a8.45 8.45 0 0 1 2.304 3.168q.792 1.8.792 4.464 0 5.184-3.888 7.848-3.816 2.664-10.944 2.664-4.968 0-7.776-.864-2.808-.792-3.816-1.224l1.224-5.76q1.152.432 3.672 1.296t6.696.864'
      />
    </g>
    <defs>
      <clipPath id='c1dd11751b1de1791ce251c71090ce04__a'>
        <path fill='#fff' d='M0 0h414v60H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SubBrandBrandLightDerivCareersIcon);
export default ForwardRef;
