import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SubBrandWhiteDerivAcademyIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 462 72'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#fff'>
      <path d='m34.986 1.829-2.99 16.955H21.618c-9.682 0-18.911 7.845-20.622 17.527l-.724 4.12C-1.43 50.115 5.03 57.96 14.712 57.96h8.656c7.057 0 13.78-5.713 15.021-12.77L46.361 0zM27.622 43.59c-.382 2.18-2.344 3.954-4.524 3.954h-5.26c-4.351 0-7.263-3.533-6.5-7.893l.454-2.57c.772-4.351 4.925-7.892 9.277-7.892h9.092zm87.292 14.367 6.81-38.634h10.772l-6.81 38.634h-10.781zm1.165-38.188-1.622 9.193c-5.104-1.586-10.369-1.081-11.987-.759q-2.621 14.881-5.245 29.764h-10.78L92.91 21.32c3.506-1.452 12.115-4.399 23.169-1.55m-43.677-.993h-8.385c-8.17 0-15.96 6.62-17.4 14.79l-1.694 9.603c-1.44 8.17 4.01 14.79 12.18 14.79h17.838l1.83-10.382H60.006c-2.72 0-4.543-2.204-4.057-4.933l.055-.326h27.027l1.543-8.752c1.44-8.17-4.01-14.79-12.18-14.79zm1.36 13.963-.063.557H57.63l.087-.493c.485-2.721 2.968-5.116 5.696-5.116h6.277c2.698 0 4.52 2.355 4.074 5.052m100.765-13.416c-3.672 9.763-12.088 26.371-20.24 38.634h-10.78c-3.742-11.671-6.158-27.933-6.619-38.634h10.78c.194 3.49 1.757 16.438 3.54 25.483 4.892-8.8 10.284-20.345 12.531-25.483zM222.528 58a264 264 0 0 1-2.304-6.336 520 520 0 0 0-2.232-6.408h-22.608L190.848 58h-7.272q2.88-7.92 5.4-14.616a768 768 0 0 1 4.896-12.816 500 500 0 0 1 4.824-11.52 282 282 0 0 1 4.968-10.944h6.408q2.592 5.4 4.968 10.944a353 353 0 0 1 4.752 11.52 489 489 0 0 1 4.968 12.816q2.52 6.696 5.4 14.616zm-6.552-18.504a545 545 0 0 0-4.608-12.096 191 191 0 0 0-4.68-11.304 191 191 0 0 0-4.824 11.304 556 556 0 0 0-4.464 12.096zM248.98 58.864q-4.536 0-7.992-1.44-3.384-1.44-5.76-4.032-2.304-2.592-3.456-6.12-1.152-3.6-1.152-7.92t1.224-7.92q1.296-3.6 3.6-6.192 2.304-2.664 5.616-4.104 3.384-1.512 7.488-1.512 2.52 0 5.04.432t4.824 1.368l-1.512 5.688q-1.512-.72-3.528-1.152-1.944-.432-4.176-.432-5.616 0-8.64 3.528-2.952 3.528-2.952 10.296 0 3.024.648 5.544.72 2.52 2.16 4.32 1.512 1.8 3.816 2.808 2.304.936 5.616.936 2.664 0 4.824-.504t3.384-1.08l.936 5.616q-.576.36-1.656.72-1.08.288-2.448.504-1.368.288-2.952.432a21 21 0 0 1-2.952.216M275.969 53.176q2.376 0 4.176-.072 1.872-.144 3.096-.432v-11.16q-.72-.36-2.376-.576-1.584-.288-3.888-.288-1.512 0-3.24.216a9.7 9.7 0 0 0-3.096.936 6.2 6.2 0 0 0-2.304 1.872q-.936 1.152-.936 3.096 0 3.6 2.304 5.04 2.304 1.368 6.264 1.368m-.576-33.552q4.032 0 6.768 1.08 2.808 1.008 4.464 2.952 1.728 1.872 2.448 4.536.72 2.592.72 5.76v23.4q-.864.144-2.448.432-1.512.216-3.456.432a89 89 0 0 1-4.248.36 46 46 0 0 1-4.464.216q-3.168 0-5.832-.648t-4.608-2.016q-1.944-1.44-3.024-3.744t-1.08-5.544q0-3.096 1.224-5.328a10.35 10.35 0 0 1 3.456-3.6q2.16-1.368 5.04-2.016a27.5 27.5 0 0 1 6.048-.648q1.008 0 2.088.144 1.08.072 2.016.288 1.008.144 1.728.288t1.008.216v-1.872q0-1.656-.36-3.24-.36-1.656-1.296-2.88-.936-1.296-2.592-2.016-1.584-.792-4.176-.792-3.312 0-5.832.504-2.448.432-3.672.936l-.792-5.544q1.296-.576 4.32-1.08 3.024-.576 6.552-.576M322.226 28.48q-1.224-1.008-3.528-1.944t-5.04-.936q-2.88 0-4.968 1.08a8.7 8.7 0 0 0-3.312 2.88q-1.296 1.8-1.872 4.32t-.576 5.4q0 6.552 3.24 10.152 3.24 3.528 8.64 3.528 2.736 0 4.536-.216 1.872-.288 2.88-.576zm0-25.2 6.696-1.152V56.92q-2.304.648-5.904 1.296t-8.28.648q-4.32 0-7.776-1.368t-5.904-3.888-3.816-6.12q-1.296-3.672-1.296-8.208 0-4.32 1.08-7.92 1.152-3.6 3.312-6.192a15 15 0 0 1 5.256-4.032q3.168-1.44 7.2-1.44 3.24 0 5.688.864 2.52.864 3.744 1.656zM335.465 39.352q0-4.968 1.44-8.64 1.44-3.744 3.815-6.192a15.5 15.5 0 0 1 5.473-3.672 17.1 17.1 0 0 1 6.336-1.224q7.56 0 11.591 4.752 4.032 4.68 4.032 14.328v1.152q0 .648-.071 1.224h-25.633q.433 5.832 3.384 8.856t9.216 3.024q3.528 0 5.904-.576 2.449-.648 3.673-1.224l.935 5.616q-1.224.648-4.319 1.368-3.024.72-6.913.72-4.896 0-8.496-1.44-3.528-1.512-5.832-4.104t-3.456-6.12q-1.08-3.6-1.079-7.848m25.703-3.672q.072-4.536-2.303-7.416-2.305-2.952-6.409-2.952-2.303 0-4.103.936a9.3 9.3 0 0 0-2.953 2.304 11.4 11.4 0 0 0-1.944 3.312 17.6 17.6 0 0 0-.864 3.816zM374.891 21.64q2.304-.576 6.048-1.224 3.816-.648 8.784-.648 3.6 0 6.048 1.008 2.448.936 4.104 2.808.504-.36 1.584-1.008t2.664-1.224a22 22 0 0 1 3.528-1.08q1.944-.504 4.176-.504 4.32 0 7.056 1.296 2.736 1.224 4.248 3.528 1.584 2.304 2.088 5.472.576 3.168.576 6.912V58h-6.696V38.416q0-3.312-.36-5.688-.288-2.376-1.224-3.96-.864-1.584-2.448-2.304-1.512-.792-3.96-.792-3.384 0-5.616.936-2.16.864-2.952 1.584a24.7 24.7 0 0 1 .864 4.104q.288 2.232.288 4.68V58h-6.696V38.416q0-3.312-.36-5.688t-1.296-3.96q-.864-1.584-2.448-2.304-1.512-.792-3.888-.792a35 35 0 0 0-4.392.288q-1.008.072-1.872.216t-1.152.216V58h-6.696zM428.369 64.984q.792.36 2.016.648 1.296.36 2.52.36 3.96 0 6.192-1.8 2.232-1.728 4.032-5.688-4.536-8.64-8.496-18.288a165 165 0 0 1-6.48-19.656h7.2q.792 3.24 1.872 6.984a238 238 0 0 0 2.52 7.704q1.368 3.96 2.952 7.92t3.312 7.632a192 192 0 0 0 4.752-14.976 394 394 0 0 0 3.816-15.264h6.912a291 291 0 0 1-5.76 20.376q-3.168 9.72-6.84 18.216-1.44 3.24-3.024 5.544-1.512 2.376-3.384 3.888a12.4 12.4 0 0 1-4.248 2.232q-2.304.72-5.256.72-.792 0-1.656-.144a11 11 0 0 1-1.728-.288 14 14 0 0 1-1.512-.36 8 8 0 0 1-.936-.36z' />
    </g>
    <defs>
      <clipPath id='ae4d299edc41195d28f16acb56b5499c__a'>
        <path fill='#fff' d='M0 0h462v72H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SubBrandWhiteDerivAcademyIcon);
export default ForwardRef;
