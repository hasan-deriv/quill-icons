import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodPaymeroBlackIcon = (
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
    <mask
      id='37414dfde56edca168634929f40cd7bb__a'
      width={94}
      height={16}
      x={30.846}
      y={32.128}
      fill='#000'
      maskUnits='userSpaceOnUse'
    >
      <path fill='#fff' d='M30.846 32.128h94v16h-94z' />
      <path d='M31.847 46.732a.466.466 0 0 0 .49.49.42.42 0 0 0 .332-.14.53.53 0 0 0 .132-.35v-5.358c.247.346.538.658.866.928.306.283.648.524 1.016.718q.569.288 1.182.464c.42.108.852.164 1.287.166a5.2 5.2 0 0 0 4.806-3.212 4.95 4.95 0 0 0 .411-2.023c0-.719-.156-1.43-.455-2.083a5.18 5.18 0 0 0-4.806-3.204 5 5 0 0 0-1.313.166c-.42.106-.824.268-1.2.482q-.556.306-1.024.735a5.4 5.4 0 0 0-.779 1.007l-.07-1.751a.9.9 0 0 0-.166-.341.31.31 0 0 0-.28-.14.34.34 0 0 0-.307.14.65.65 0 0 0-.079.35v12.956zm1.313-9.98c.204-.506.5-.969.875-1.366a4.22 4.22 0 0 1 3.029-1.251 4.4 4.4 0 0 1 1.69.332c.504.212.96.525 1.339.92.379.393.676.857.875 1.365.218.53.329 1.099.324 1.672a4.2 4.2 0 0 1-.324 1.646 4.5 4.5 0 0 1-.875 1.365 4.4 4.4 0 0 1-1.34.937 4.05 4.05 0 0 1-1.689.342 3.9 3.9 0 0 1-1.646-.342 4.32 4.32 0 0 1-2.258-2.302 4.2 4.2 0 0 1-.368-1.646 4.3 4.3 0 0 1 .333-1.672zm13.192 3.703c.27.623.653 1.19 1.13 1.672a5.25 5.25 0 0 0 3.694 1.532 5 5 0 0 0 2.46-.639 5.5 5.5 0 0 0 1.041-.744 5 5 0 0 0 .823-.928v1.672a.46.46 0 0 0 .14.35.44.44 0 0 0 .341.14.47.47 0 0 0 .36-.14.57.57 0 0 0 .14-.35v-9.227a.7.7 0 0 0-.088-.359.33.33 0 0 0-.298-.131.32.32 0 0 0-.289.131q-.109.158-.166.342l-.087 1.68a4.3 4.3 0 0 0-.876-.875 5.2 5.2 0 0 0-1.024-.727 5 5 0 0 0-1.19-.472 5.5 5.5 0 0 0-1.288-.201 4.95 4.95 0 0 0-2.022.41 5.3 5.3 0 0 0-1.672 1.121 5.1 5.1 0 0 0-1.129 1.672 5.25 5.25 0 0 0 0 4.071m.876-3.703c.204-.506.5-.969.875-1.366a4.2 4.2 0 0 1 1.357-.919 4.38 4.38 0 0 1 3.353 0 4.23 4.23 0 0 1 2.25 2.285 4.32 4.32 0 0 1 0 3.318 4.38 4.38 0 0 1-2.25 2.302 4 4 0 0 1-1.681.342 3.9 3.9 0 0 1-1.672-.342c-.51-.22-.97-.538-1.357-.937a4.4 4.4 0 0 1-.876-1.365 4.2 4.2 0 0 1-.332-1.646 4 4 0 0 1 .332-1.672m13.656-3.134a.46.46 0 0 0-.184-.219.4.4 0 0 0-.254-.087.52.52 0 0 0-.353.154.48.48 0 0 0-.085.546l4.185 9.113-.088.245q-.265.635-.604 1.235c-.184.32-.41.615-.674.875-.25.241-.548.427-.875.543a3 3 0 0 1-1.12.192h-.307a.5.5 0 0 0-.341.123.5.5 0 0 0-.07.604.32.32 0 0 0 .166.14 1.104 1.104 0 0 0 .482.053 4.2 4.2 0 0 0 1.426-.22c.4-.153.77-.375 1.094-.656.34-.336.635-.716.876-1.13q.465-.77.814-1.601l.14-.324 4.21-9.166a.5.5 0 0 0-.428-.7.46.46 0 0 0-.438.306l-3.826 8.36zm12.255 9.384a.47.47 0 0 0 .132.36.46.46 0 0 0 .359.13.41.41 0 0 0 .306-.157c.084-.1.131-.227.131-.359V36.56c.03-.321.113-.635.246-.928a2.77 2.77 0 0 1 1.374-1.305c.299-.137.625-.206.954-.201.331-.005.66.06.963.193.297.118.567.294.797.516.228.22.412.482.542.77.142.305.216.636.22.972v6.443a.46.46 0 0 0 .157.341.43.43 0 0 0 .324.132.41.41 0 0 0 .332-.132.45.45 0 0 0 .132-.341v-6.338c.019-.33.099-.653.236-.954.135-.31.331-.59.578-.823.237-.24.516-.437.823-.578a2.4 2.4 0 0 1 .98-.219c.325-.002.647.064.946.193.294.113.562.286.787.508s.405.483.534.77c.134.3.203.626.202.954v6.47a.43.43 0 0 0 .122.332.48.48 0 0 0 .527.104.4.4 0 0 0 .147-.104.45.45 0 0 0 .14-.341V36.55a4.3 4.3 0 0 0-.245-1.322 3.7 3.7 0 0 0-.665-1.077 3 3 0 0 0-1.007-.726c-.41-.181-.855-.27-1.304-.263a3.3 3.3 0 0 0-.972.14q-.46.138-.875.385a3.5 3.5 0 0 0-.753.595 4 4 0 0 0-.578.77 4.4 4.4 0 0 0-.49-.77 4.3 4.3 0 0 0-.674-.595 3.1 3.1 0 0 0-.823-.403 3.15 3.15 0 0 0-2.547.307c-.478.28-.878.673-1.165 1.147v-.963a1.3 1.3 0 0 0-.166-.35.35.35 0 0 0-.298-.14.31.31 0 0 0-.306.14.65.65 0 0 0-.079.35v9.226zm27.059-4.14a.42.42 0 0 0 .333-.132.5.5 0 0 0 .122-.332 5.2 5.2 0 0 0-.411-2.031 5.5 5.5 0 0 0-1.12-1.655 5.5 5.5 0 0 0-1.664-1.12 4.96 4.96 0 0 0-2.03-.411 4.9 4.9 0 0 0-2.023.41 5.2 5.2 0 0 0-1.663 1.121 5.4 5.4 0 0 0-1.112 1.62 5.252 5.252 0 0 0 0 4.07 5.25 5.25 0 0 0 2.784 2.802 5.1 5.1 0 0 0 2.022.411 4.9 4.9 0 0 0 2.206-.481 5.3 5.3 0 0 0 1.62-1.208.42.42 0 0 0 .166-.36.56.56 0 0 0-.123-.314.6.6 0 0 0-.21-.175.07.07 0 0 0-.052 0h-.053a.57.57 0 0 0-.359.14 3 3 0 0 1-.613.604 5.6 5.6 0 0 1-.77.464 4.5 4.5 0 0 1-.875.289 4 4 0 0 1-.876.096 4.27 4.27 0 0 1-2.897-1.086 4.5 4.5 0 0 1-.876-1.225 4.2 4.2 0 0 1-.411-1.506h8.885zm-8.964-.78a4.377 4.377 0 0 1 1.27-2.784 3.9 3.9 0 0 1 1.313-.83 4 4 0 0 1 1.602-.307 4.1 4.1 0 0 1 1.593.306c.482.196.927.474 1.313.823.412.333.752.747.998 1.217.237.478.377 1 .411 1.532H91.27zm13.7 4.947a.48.48 0 0 0 .305.466.44.44 0 0 0 .194.024.39.39 0 0 0 .324-.131.53.53 0 0 0 .14-.36v-4.236a4.7 4.7 0 0 1 .324-1.751 4.5 4.5 0 0 1 .875-1.436 4.1 4.1 0 0 1 1.357-.971 4 4 0 0 1 1.672-.36h.105a.47.47 0 0 0 .359-.14.426.426 0 0 0 .14-.341.46.46 0 0 0-.301-.448.5.5 0 0 0-.198-.033h-.105a4.5 4.5 0 0 0-1.383.21 4.2 4.2 0 0 0-1.199.569 4.8 4.8 0 0 0-.954.875 5.6 5.6 0 0 0-.727 1.13l-.087-2.338a1.3 1.3 0 0 0-.158-.35.37.37 0 0 0-.306-.14.31.31 0 0 0-.298.14.65.65 0 0 0-.088.35v9.244zM114.8 36.752a4.4 4.4 0 0 1 .875-1.366 4.1 4.1 0 0 1 1.357-.919 4.3 4.3 0 0 1 1.672-.332 4.3 4.3 0 0 1 1.681.332c.506.21.962.523 1.339.92.382.39.68.855.876 1.365.218.53.328 1.099.324 1.672a4.2 4.2 0 0 1-.324 1.646 4.4 4.4 0 0 1-.876 1.366 4.2 4.2 0 0 1-1.339.936 4 4 0 0 1-1.681.342 3.9 3.9 0 0 1-1.672-.342 4.1 4.1 0 0 1-1.357-.936 4.4 4.4 0 0 1-.875-1.366 4.2 4.2 0 0 1-.324-1.646 4.3 4.3 0 0 1 .324-1.672m-.876 3.703a5.4 5.4 0 0 0 1.156 1.672 5.25 5.25 0 0 0 5.743 1.12 5.1 5.1 0 0 0 1.663-1.12 5.6 5.6 0 0 0 1.112-1.672 5.35 5.35 0 0 0 0-4.07 5.5 5.5 0 0 0-1.112-1.672 5.4 5.4 0 0 0-1.663-1.121 5.26 5.26 0 0 0-5.743 1.12 5.1 5.1 0 0 0-1.121 1.672 5.27 5.27 0 0 0 0 4.071z' />
    </mask>
    <path
      fill='#000'
      d='M31.847 46.732a.466.466 0 0 0 .49.49.42.42 0 0 0 .332-.14.53.53 0 0 0 .132-.35v-5.358c.247.346.538.658.866.928.306.283.648.524 1.016.718q.569.288 1.182.464c.42.108.852.164 1.287.166a5.2 5.2 0 0 0 4.806-3.212 4.95 4.95 0 0 0 .411-2.023c0-.719-.156-1.43-.455-2.083a5.18 5.18 0 0 0-4.806-3.204 5 5 0 0 0-1.313.166c-.42.106-.824.268-1.2.482q-.556.306-1.024.735a5.4 5.4 0 0 0-.779 1.007l-.07-1.751a.9.9 0 0 0-.166-.341.31.31 0 0 0-.28-.14.34.34 0 0 0-.307.14.65.65 0 0 0-.079.35v12.956zm1.313-9.98c.204-.506.5-.969.875-1.366a4.22 4.22 0 0 1 3.029-1.251 4.4 4.4 0 0 1 1.69.332c.504.212.96.525 1.339.92.379.393.676.857.875 1.365.218.53.329 1.099.324 1.672a4.2 4.2 0 0 1-.324 1.646 4.5 4.5 0 0 1-.875 1.365 4.4 4.4 0 0 1-1.34.937 4.05 4.05 0 0 1-1.689.342 3.9 3.9 0 0 1-1.646-.342 4.32 4.32 0 0 1-2.258-2.302 4.2 4.2 0 0 1-.368-1.646 4.3 4.3 0 0 1 .333-1.672zm13.192 3.703c.27.623.653 1.19 1.13 1.672a5.25 5.25 0 0 0 3.694 1.532 5 5 0 0 0 2.46-.639 5.5 5.5 0 0 0 1.041-.744 5 5 0 0 0 .823-.928v1.672a.46.46 0 0 0 .14.35.44.44 0 0 0 .341.14.47.47 0 0 0 .36-.14.57.57 0 0 0 .14-.35v-9.227a.7.7 0 0 0-.088-.359.33.33 0 0 0-.298-.131.32.32 0 0 0-.289.131q-.109.158-.166.342l-.087 1.68a4.3 4.3 0 0 0-.876-.875 5.2 5.2 0 0 0-1.024-.727 5 5 0 0 0-1.19-.472 5.5 5.5 0 0 0-1.288-.201 4.95 4.95 0 0 0-2.022.41 5.3 5.3 0 0 0-1.672 1.121 5.1 5.1 0 0 0-1.129 1.672 5.25 5.25 0 0 0 0 4.071m.876-3.703c.204-.506.5-.969.875-1.366a4.2 4.2 0 0 1 1.357-.919 4.38 4.38 0 0 1 3.353 0 4.23 4.23 0 0 1 2.25 2.285 4.32 4.32 0 0 1 0 3.318 4.38 4.38 0 0 1-2.25 2.302 4 4 0 0 1-1.681.342 3.9 3.9 0 0 1-1.672-.342c-.51-.22-.97-.538-1.357-.937a4.4 4.4 0 0 1-.876-1.365 4.2 4.2 0 0 1-.332-1.646 4 4 0 0 1 .332-1.672m13.656-3.134a.46.46 0 0 0-.184-.219.4.4 0 0 0-.254-.087.52.52 0 0 0-.353.154.48.48 0 0 0-.085.546l4.185 9.113-.088.245q-.265.635-.604 1.235c-.184.32-.41.615-.674.875-.25.241-.548.427-.875.543a3 3 0 0 1-1.12.192h-.307a.5.5 0 0 0-.341.123.5.5 0 0 0-.07.604.32.32 0 0 0 .166.14 1.104 1.104 0 0 0 .482.053 4.2 4.2 0 0 0 1.426-.22c.4-.153.77-.375 1.094-.656.34-.336.635-.716.876-1.13q.465-.77.814-1.601l.14-.324 4.21-9.166a.5.5 0 0 0-.428-.7.46.46 0 0 0-.438.306l-3.826 8.36zm12.255 9.384a.47.47 0 0 0 .132.36.46.46 0 0 0 .359.13.41.41 0 0 0 .306-.157c.084-.1.131-.227.131-.359V36.56c.03-.321.113-.635.246-.928a2.77 2.77 0 0 1 1.374-1.305c.299-.137.625-.206.954-.201.331-.005.66.06.963.193.297.118.567.294.797.516.228.22.412.482.542.77.142.305.216.636.22.972v6.443a.46.46 0 0 0 .157.341.43.43 0 0 0 .324.132.41.41 0 0 0 .332-.132.45.45 0 0 0 .132-.341v-6.338c.019-.33.099-.653.236-.954.135-.31.331-.59.578-.823.237-.24.516-.437.823-.578a2.4 2.4 0 0 1 .98-.219c.325-.002.647.064.946.193.294.113.562.286.787.508s.405.483.534.77c.134.3.203.626.202.954v6.47a.43.43 0 0 0 .122.332.48.48 0 0 0 .527.104.4.4 0 0 0 .147-.104.45.45 0 0 0 .14-.341V36.55a4.3 4.3 0 0 0-.245-1.322 3.7 3.7 0 0 0-.665-1.077 3 3 0 0 0-1.007-.726c-.41-.181-.855-.27-1.304-.263a3.3 3.3 0 0 0-.972.14q-.46.138-.875.385a3.5 3.5 0 0 0-.753.595 4 4 0 0 0-.578.77 4.4 4.4 0 0 0-.49-.77 4.3 4.3 0 0 0-.674-.595 3.1 3.1 0 0 0-.823-.403 3.15 3.15 0 0 0-2.547.307c-.478.28-.878.673-1.165 1.147v-.963a1.3 1.3 0 0 0-.166-.35.35.35 0 0 0-.298-.14.31.31 0 0 0-.306.14.65.65 0 0 0-.079.35v9.226zm27.059-4.14a.42.42 0 0 0 .333-.132.5.5 0 0 0 .122-.332 5.2 5.2 0 0 0-.411-2.031 5.5 5.5 0 0 0-1.12-1.655 5.5 5.5 0 0 0-1.664-1.12 4.96 4.96 0 0 0-2.03-.411 4.9 4.9 0 0 0-2.023.41 5.2 5.2 0 0 0-1.663 1.121 5.4 5.4 0 0 0-1.112 1.62 5.252 5.252 0 0 0 0 4.07 5.25 5.25 0 0 0 2.784 2.802 5.1 5.1 0 0 0 2.022.411 4.9 4.9 0 0 0 2.206-.481 5.3 5.3 0 0 0 1.62-1.208.42.42 0 0 0 .166-.36.56.56 0 0 0-.123-.314.6.6 0 0 0-.21-.175.07.07 0 0 0-.052 0h-.053a.57.57 0 0 0-.359.14 3 3 0 0 1-.613.604 5.6 5.6 0 0 1-.77.464 4.5 4.5 0 0 1-.875.289 4 4 0 0 1-.876.096 4.27 4.27 0 0 1-2.897-1.086 4.5 4.5 0 0 1-.876-1.225 4.2 4.2 0 0 1-.411-1.506h8.885zm-8.964-.78a4.377 4.377 0 0 1 1.27-2.784 3.9 3.9 0 0 1 1.313-.83 4 4 0 0 1 1.602-.307 4.1 4.1 0 0 1 1.593.306c.482.196.927.474 1.313.823.412.333.752.747.998 1.217.237.478.377 1 .411 1.532H91.27zm13.7 4.947a.48.48 0 0 0 .305.466.44.44 0 0 0 .194.024.39.39 0 0 0 .324-.131.53.53 0 0 0 .14-.36v-4.236a4.7 4.7 0 0 1 .324-1.751 4.5 4.5 0 0 1 .875-1.436 4.1 4.1 0 0 1 1.357-.971 4 4 0 0 1 1.672-.36h.105a.47.47 0 0 0 .359-.14.426.426 0 0 0 .14-.341.46.46 0 0 0-.301-.448.5.5 0 0 0-.198-.033h-.105a4.5 4.5 0 0 0-1.383.21 4.2 4.2 0 0 0-1.199.569 4.8 4.8 0 0 0-.954.875 5.6 5.6 0 0 0-.727 1.13l-.087-2.338a1.3 1.3 0 0 0-.158-.35.37.37 0 0 0-.306-.14.31.31 0 0 0-.298.14.65.65 0 0 0-.088.35v9.244zM114.8 36.752a4.4 4.4 0 0 1 .875-1.366 4.1 4.1 0 0 1 1.357-.919 4.3 4.3 0 0 1 1.672-.332 4.3 4.3 0 0 1 1.681.332c.506.21.962.523 1.339.92.382.39.68.855.876 1.365.218.53.328 1.099.324 1.672a4.2 4.2 0 0 1-.324 1.646 4.4 4.4 0 0 1-.876 1.366 4.2 4.2 0 0 1-1.339.936 4 4 0 0 1-1.681.342 3.9 3.9 0 0 1-1.672-.342 4.1 4.1 0 0 1-1.357-.936 4.4 4.4 0 0 1-.875-1.366 4.2 4.2 0 0 1-.324-1.646 4.3 4.3 0 0 1 .324-1.672m-.876 3.703a5.4 5.4 0 0 0 1.156 1.672 5.25 5.25 0 0 0 5.743 1.12 5.1 5.1 0 0 0 1.663-1.12 5.6 5.6 0 0 0 1.112-1.672 5.35 5.35 0 0 0 0-4.07 5.5 5.5 0 0 0-1.112-1.672 5.4 5.4 0 0 0-1.663-1.121 5.26 5.26 0 0 0-5.743 1.12 5.1 5.1 0 0 0-1.121 1.672 5.27 5.27 0 0 0 0 4.071z'
    />
    <path
      stroke='#000'
      strokeWidth={0.875}
      d='M31.847 46.732a.466.466 0 0 0 .49.49.42.42 0 0 0 .332-.14.53.53 0 0 0 .132-.35v-5.358c.247.346.538.658.866.928.306.283.648.524 1.016.718q.569.288 1.182.464c.42.108.852.164 1.287.166a5.2 5.2 0 0 0 4.806-3.212 4.95 4.95 0 0 0 .411-2.023c0-.719-.156-1.43-.455-2.083a5.18 5.18 0 0 0-4.806-3.204 5 5 0 0 0-1.313.166c-.42.106-.824.268-1.2.482q-.556.306-1.024.735a5.4 5.4 0 0 0-.779 1.007l-.07-1.751a.9.9 0 0 0-.166-.341.31.31 0 0 0-.28-.14.34.34 0 0 0-.307.14.65.65 0 0 0-.079.35v12.956zm1.313-9.98c.204-.506.5-.969.875-1.366a4.22 4.22 0 0 1 3.029-1.251 4.4 4.4 0 0 1 1.69.332c.504.212.96.525 1.339.92.379.393.676.857.875 1.365.218.53.329 1.099.324 1.672a4.2 4.2 0 0 1-.324 1.646 4.5 4.5 0 0 1-.875 1.365 4.4 4.4 0 0 1-1.34.937 4.05 4.05 0 0 1-1.689.342 3.9 3.9 0 0 1-1.646-.342 4.32 4.32 0 0 1-2.258-2.302 4.2 4.2 0 0 1-.368-1.646 4.3 4.3 0 0 1 .333-1.672zm13.192 3.703c.27.623.653 1.19 1.13 1.672a5.25 5.25 0 0 0 3.694 1.532 5 5 0 0 0 2.46-.639 5.5 5.5 0 0 0 1.041-.744 5 5 0 0 0 .823-.928v1.672a.46.46 0 0 0 .14.35.44.44 0 0 0 .341.14.47.47 0 0 0 .36-.14.57.57 0 0 0 .14-.35v-9.227a.7.7 0 0 0-.088-.359.33.33 0 0 0-.298-.131.32.32 0 0 0-.289.131q-.109.158-.166.342l-.087 1.68a4.3 4.3 0 0 0-.876-.875 5.2 5.2 0 0 0-1.024-.727 5 5 0 0 0-1.19-.472 5.5 5.5 0 0 0-1.288-.201 4.95 4.95 0 0 0-2.022.41 5.3 5.3 0 0 0-1.672 1.121 5.1 5.1 0 0 0-1.129 1.672 5.25 5.25 0 0 0 0 4.071Zm.876-3.703c.204-.506.5-.969.875-1.366a4.2 4.2 0 0 1 1.357-.919 4.38 4.38 0 0 1 3.353 0 4.23 4.23 0 0 1 2.25 2.285 4.32 4.32 0 0 1 0 3.318 4.38 4.38 0 0 1-2.25 2.302 4 4 0 0 1-1.681.342 3.9 3.9 0 0 1-1.672-.342c-.51-.22-.97-.538-1.357-.937a4.4 4.4 0 0 1-.876-1.365 4.2 4.2 0 0 1-.332-1.646 4 4 0 0 1 .332-1.672Zm13.656-3.134a.46.46 0 0 0-.184-.219.4.4 0 0 0-.254-.087.52.52 0 0 0-.353.154.48.48 0 0 0-.085.546l4.185 9.113-.088.245q-.265.635-.604 1.235c-.184.32-.41.615-.674.875-.25.241-.548.427-.875.543a3 3 0 0 1-1.12.192h-.307a.5.5 0 0 0-.341.123.5.5 0 0 0-.07.604.32.32 0 0 0 .166.14 1.104 1.104 0 0 0 .482.053 4.2 4.2 0 0 0 1.426-.22c.4-.153.77-.375 1.094-.656.34-.336.635-.716.876-1.13q.465-.77.814-1.601l.14-.324 4.21-9.166a.5.5 0 0 0-.428-.7.46.46 0 0 0-.438.306l-3.826 8.36zm12.255 9.384a.47.47 0 0 0 .132.36.46.46 0 0 0 .359.13.41.41 0 0 0 .306-.157c.084-.1.131-.227.131-.359V36.56c.03-.321.113-.635.246-.928a2.77 2.77 0 0 1 1.374-1.305c.299-.137.625-.206.954-.201.331-.005.66.06.963.193.297.118.567.294.797.516.228.22.412.482.542.77.142.305.216.636.22.972v6.443a.46.46 0 0 0 .157.341.43.43 0 0 0 .324.132.41.41 0 0 0 .332-.132.45.45 0 0 0 .132-.341v-6.338c.019-.33.099-.653.236-.954.135-.31.331-.59.578-.823.237-.24.516-.437.823-.578a2.4 2.4 0 0 1 .98-.219c.325-.002.647.064.946.193.294.113.562.286.787.508s.405.483.534.77c.134.3.203.626.202.954v6.47a.43.43 0 0 0 .122.332.48.48 0 0 0 .527.104.4.4 0 0 0 .147-.104.45.45 0 0 0 .14-.341V36.55a4.3 4.3 0 0 0-.245-1.322 3.7 3.7 0 0 0-.665-1.077 3 3 0 0 0-1.007-.726c-.41-.181-.855-.27-1.304-.263a3.3 3.3 0 0 0-.972.14q-.46.138-.875.385a3.5 3.5 0 0 0-.753.595 4 4 0 0 0-.578.77 4.4 4.4 0 0 0-.49-.77 4.3 4.3 0 0 0-.674-.595 3.1 3.1 0 0 0-.823-.403 3.15 3.15 0 0 0-2.547.307c-.478.28-.878.673-1.165 1.147v-.963a1.3 1.3 0 0 0-.166-.35.35.35 0 0 0-.298-.14.31.31 0 0 0-.306.14.65.65 0 0 0-.079.35v9.226zm27.059-4.14a.42.42 0 0 0 .333-.132.5.5 0 0 0 .122-.332 5.2 5.2 0 0 0-.411-2.031 5.5 5.5 0 0 0-1.12-1.655 5.5 5.5 0 0 0-1.664-1.12 4.96 4.96 0 0 0-2.03-.411 4.9 4.9 0 0 0-2.023.41 5.2 5.2 0 0 0-1.663 1.121 5.4 5.4 0 0 0-1.112 1.62 5.252 5.252 0 0 0 0 4.07 5.25 5.25 0 0 0 2.784 2.802 5.1 5.1 0 0 0 2.022.411 4.9 4.9 0 0 0 2.206-.481 5.3 5.3 0 0 0 1.62-1.208.42.42 0 0 0 .166-.36.56.56 0 0 0-.123-.314.6.6 0 0 0-.21-.175.07.07 0 0 0-.052 0h-.053a.57.57 0 0 0-.359.14 3 3 0 0 1-.613.604 5.6 5.6 0 0 1-.77.464 4.5 4.5 0 0 1-.875.289 4 4 0 0 1-.876.096 4.27 4.27 0 0 1-2.897-1.086 4.5 4.5 0 0 1-.876-1.225 4.2 4.2 0 0 1-.411-1.506h8.885zm-8.964-.78a4.377 4.377 0 0 1 1.27-2.784 3.9 3.9 0 0 1 1.313-.83 4 4 0 0 1 1.602-.307 4.1 4.1 0 0 1 1.593.306c.482.196.927.474 1.313.823.412.333.752.747.998 1.217.237.478.377 1 .411 1.532H91.27zm13.7 4.947a.48.48 0 0 0 .305.466.44.44 0 0 0 .194.024.39.39 0 0 0 .324-.131.53.53 0 0 0 .14-.36v-4.236a4.7 4.7 0 0 1 .324-1.751 4.5 4.5 0 0 1 .875-1.436 4.1 4.1 0 0 1 1.357-.971 4 4 0 0 1 1.672-.36h.105a.47.47 0 0 0 .359-.14.426.426 0 0 0 .14-.341.46.46 0 0 0-.301-.448.5.5 0 0 0-.198-.033h-.105a4.5 4.5 0 0 0-1.383.21 4.2 4.2 0 0 0-1.199.569 4.8 4.8 0 0 0-.954.875 5.6 5.6 0 0 0-.727 1.13l-.087-2.338a1.3 1.3 0 0 0-.158-.35.37.37 0 0 0-.306-.14.31.31 0 0 0-.298.14.65.65 0 0 0-.088.35v9.244zM114.8 36.752a4.4 4.4 0 0 1 .875-1.366 4.1 4.1 0 0 1 1.357-.919 4.3 4.3 0 0 1 1.672-.332 4.3 4.3 0 0 1 1.681.332c.506.21.962.523 1.339.92.382.39.68.855.876 1.365.218.53.328 1.099.324 1.672a4.2 4.2 0 0 1-.324 1.646 4.4 4.4 0 0 1-.876 1.366 4.2 4.2 0 0 1-1.339.936 4 4 0 0 1-1.681.342 3.9 3.9 0 0 1-1.672-.342 4.1 4.1 0 0 1-1.357-.936 4.4 4.4 0 0 1-.875-1.366 4.2 4.2 0 0 1-.324-1.646 4.3 4.3 0 0 1 .324-1.672Zm-.876 3.703a5.4 5.4 0 0 0 1.156 1.672 5.25 5.25 0 0 0 5.743 1.12 5.1 5.1 0 0 0 1.663-1.12 5.6 5.6 0 0 0 1.112-1.672 5.35 5.35 0 0 0 0-4.07 5.5 5.5 0 0 0-1.112-1.672 5.4 5.4 0 0 0-1.663-1.121 5.26 5.26 0 0 0-5.743 1.12 5.1 5.1 0 0 0-1.121 1.672 5.27 5.27 0 0 0 0 4.071z'
      mask='url(#37414dfde56edca168634929f40cd7bb__a)'
    />
    <g fill='#000'>
      <path d='M14.006 47.012c5.526 0 10.006-4.48 10.006-10.006S19.532 27 14.006 27 4 31.48 4 37.006s4.48 10.006 10.006 10.006' />
      <path d='M14.137 27H4v25.492h10.137z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodPaymeroBlackIcon);
export default ForwardRef;
