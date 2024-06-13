import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightSpreadRiskIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 120 152'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#fbce1a1ea2fa45ccace18689af9936c7__a)'>
      <path
        fill='#EBECEE'
        d='M114.256 96.885c-.285 1.013-.786 2.73-2.278 4.373a9.7 9.7 0 0 1-2.97 2.199c-6.318 2.926-9.087 4.152-15.404 7.077a9.8 9.8 0 0 0 1.76-1.117c.337-.268 1.933-1.58 2.967-3.922.74-1.675.852-3.109.929-4.159a14.2 14.2 0 0 0-.293-4.054 14 14 0 0 0-1.18-3.3c-10.275-21.17-20.454-42.137-30.723-63.284a17.7 17.7 0 0 0-1.534-2.679c-.788-1.126-2.01-2.838-4.2-4.212-.901-.567-2.987-1.839-5.935-1.909-.749-.02-2.244-.04-3.965.634 6.65-3.183 9.752-4.671 16.404-7.852 1.3-.27 3.927-.61 6.807.504 2.207.854 3.601 2.187 4.425 2.993a15.3 15.3 0 0 1 3.046 4.215q15.502 31.96 31.002 63.92c.594 1.34 2.446 5.899 1.14 10.573z'
      />
      <path
        fill='#000'
        d='M93.605 110.818a.285.285 0 0 1-.127-.54 9.5 9.5 0 0 0 1.708-1.086c.434-.343 1.92-1.633 2.884-3.814.732-1.654.833-3.047.905-4.065a14 14 0 0 0-.286-3.972 13.7 13.7 0 0 0-1.155-3.233C87.256 72.933 77.077 51.968 66.809 30.82a17.4 17.4 0 0 0-1.511-2.64c-.723-1.033-1.935-2.764-4.118-4.134-.782-.491-2.858-1.796-5.79-1.866-.641-.017-2.14-.057-3.853.615a.284.284 0 0 1-.226-.523c2.98-1.426 5.249-2.511 7.443-3.563 2.7-1.294 5.29-2.533 8.96-4.29a.3.3 0 0 1 .066-.02c1.671-.348 4.237-.54 6.968.516 2.305.89 3.746 2.298 4.521 3.055a15.6 15.6 0 0 1 3.104 4.294q15.504 31.96 31.002 63.92c.957 2.16 2.375 6.418 1.158 10.775-.272.966-.775 2.765-2.341 4.487a9.9 9.9 0 0 1-3.057 2.264 1516 1516 0 0 1-7.704 3.539c-2.234 1.021-4.543 2.076-7.703 3.539a.3.3 0 0 1-.12.028zM54.941 21.605q.274.001.462.007c3.088.074 5.26 1.439 6.079 1.953 2.28 1.431 3.533 3.22 4.281 4.29.595.853 1.12 1.768 1.56 2.721 10.266 21.143 20.445 42.11 30.72 63.279a14.27 14.27 0 0 1 1.5 7.498c-.073.999-.182 2.509-.954 4.254a11 11 0 0 1-2.323 3.381c1.84-.847 3.4-1.56 4.922-2.255 2.232-1.021 4.54-2.075 7.698-3.537a9.4 9.4 0 0 0 2.88-2.133c1.474-1.623 1.955-3.338 2.214-4.258 1.169-4.183-.204-8.3-1.127-10.38-10.328-21.298-20.664-42.605-30.998-63.912a15 15 0 0 0-2.988-4.136c-.746-.727-2.133-2.082-4.33-2.931-2.583-1-5.016-.826-6.614-.498a17843 17843 0 0 0-13.998 6.701c.391-.037.734-.047 1.013-.047z'
      />
      <path
        fill='#fff'
        d='M98.968 97.28a14 14 0 0 0-1.18-3.3C87.514 72.81 77.334 51.844 67.065 30.696a17.7 17.7 0 0 0-1.534-2.679c-.788-1.125-2.01-2.837-4.2-4.212-.9-.566-2.987-1.839-5.935-1.908-.748-.02-2.244-.04-3.964.633l-1.247.596a9.5 9.5 0 0 0-3.282 3.157q-15.925 28.18-31.849 56.364a12.4 12.4 0 0 0-1.323 4.823c-.17 2.665.583 4.647 1.004 5.724.412 1.048 1.548 3.6 3.976 5.724 2.972 2.604 6.382 3.266 7.95 3.551 6.216 1.131 29.06 4.75 60.252 9.17.858.096 2.135.15 3.629-.132.602-.115 1.542-.304 2.61-.766l.39-.18c.023-.012.043-.02.063-.032a9.7 9.7 0 0 0 1.76-1.117c.337-.267 1.934-1.579 2.967-3.922.74-1.675.852-3.108.93-4.158a14.2 14.2 0 0 0-.294-4.055zM62.402 53.606l-.068 21.174-11.604-1.63q.02-10.654.04-21.308c3.878.59 7.756 1.174 11.632 1.764m-11.75 39.896.198-12.071c3.849.593 7.693 1.185 11.54 1.776.008 4.014.02 8.03.028 12.045q-5.883-.875-11.764-1.752z'
      />
      <path
        fill='#000'
        d='M88.292 112.005q-.704 0-1.41-.078c-30.786-4.363-53.777-7.991-60.271-9.174-1.365-.247-4.992-.905-8.087-3.616-2.336-2.046-3.541-4.534-4.052-5.835-.39-.994-1.2-3.065-1.024-5.846.11-1.718.564-3.378 1.353-4.934l2.595-4.592 29.26-51.784c.601-.95 1.67-2.277 3.39-3.263l.019-.01 1.246-.596.02-.009c1.82-.711 3.4-.67 4.075-.653 3.088.074 5.26 1.439 6.079 1.953 2.28 1.431 3.533 3.22 4.281 4.29.595.853 1.12 1.768 1.56 2.721 10.266 21.142 20.445 42.11 30.72 63.278a14.26 14.26 0 0 1 1.5 7.499c-.073.999-.182 2.509-.954 4.254-.987 2.24-2.463 3.565-3.05 4.03a10 10 0 0 1-1.805 1.147q-.022.013-.048.024l-.418.194c-1.136.491-2.136.683-2.674.787a12.5 12.5 0 0 1-2.303.215zM50.318 23.38a9.2 9.2 0 0 0-3.175 3.057c-9.747 17.247-19.5 34.51-29.253 51.77l-2.588 4.583a12 12 0 0 0-1.287 4.7c-.168 2.654.612 4.645.986 5.603.491 1.253 1.652 3.646 3.898 5.614 2.976 2.608 6.366 3.223 7.813 3.486 6.491 1.182 29.472 4.807 60.241 9.169a12 12 0 0 0 3.536-.129c.515-.099 1.477-.284 2.55-.748l.404-.186.02-.01.016-.009a9.5 9.5 0 0 0 1.707-1.085c.434-.343 1.92-1.633 2.884-3.814.732-1.654.833-3.047.905-4.065a14 14 0 0 0-.286-3.972 13.7 13.7 0 0 0-1.155-3.233C87.256 72.936 77.077 51.97 66.809 30.823a17.3 17.3 0 0 0-1.511-2.639c-.723-1.033-1.935-2.764-4.118-4.134-.782-.491-2.858-1.796-5.79-1.866-.639-.017-2.134-.055-3.843.61l-1.228.588zm12.099 72.157q-.023 0-.042-.003l-5.79-.863-5.974-.889a.29.29 0 0 1-.243-.286l.098-6.037.098-6.034a.283.283 0 0 1 .327-.278q5.655.873 11.307 1.741l.233.035c.138.022.24.141.242.28q.005 2.94.014 5.877.008 3.085.014 6.17a.286.286 0 0 1-.284.285zm-11.476-2.28q2.865.425 5.729.852l5.462.814q-.006-2.919-.014-5.839l-.013-5.633q-5.486-.842-10.976-1.689l-.094 5.709q-.048 2.894-.094 5.787zm11.395-18.192q-.02 0-.04-.003l-11.604-1.63a.285.285 0 0 1-.245-.282l.02-10.654.02-10.654a.285.285 0 0 1 .327-.28q2.92.443 5.843.885l5.791.878c.14.022.242.141.242.282l-.068 21.175c0 .082-.036.16-.099.213a.28.28 0 0 1-.186.07zm-11.32-2.163 11.036 1.55.066-20.603-5.548-.841q-2.758-.419-5.515-.836l-.019 10.324-.018 10.406z'
      />
      <path
        fill='#fff'
        d='M50.77 51.842c3.878.59 7.756 1.174 11.633 1.764l-.069 21.174-11.604-1.63q.02-10.654.04-21.308'
      />
      <path
        fill='#000'
        d='M62.336 75.065q-.02 0-.04-.003l-11.604-1.63a.285.285 0 0 1-.245-.282l.02-10.654.02-10.654a.285.285 0 0 1 .327-.28q2.92.443 5.843.885l5.791.878c.14.022.242.141.242.282l-.068 21.175c0 .082-.036.16-.099.213a.28.28 0 0 1-.186.07zm-11.32-2.163 11.036 1.55.066-20.603-5.548-.841q-2.758-.419-5.515-.836l-.019 10.324-.018 10.406z'
      />
      <path
        fill='#fff'
        d='M62.39 83.207c.008 4.014.02 8.03.028 12.045L50.654 93.5l.197-12.07q5.773.89 11.54 1.775z'
      />
      <path
        fill='#000'
        d='M62.417 95.537q-.023 0-.042-.003l-5.79-.863-5.974-.889a.29.29 0 0 1-.244-.286l.099-6.037.098-6.034a.283.283 0 0 1 .327-.278q5.655.873 11.306 1.74l.234.037c.138.02.24.14.242.28q.006 2.938.014 5.876.008 3.084.014 6.17a.286.286 0 0 1-.285.285zm-11.476-2.28q2.865.425 5.728.852l5.463.814-.014-5.839-.013-5.633q-5.487-.842-10.976-1.689l-.094 5.708q-.048 2.894-.094 5.787'
      />
      <path
        fill='#FF444F'
        d='M35.69 94.625h-.002a1.483 1.483 0 0 1-1.137.346l-10.436-1.179a2.458 2.458 0 0 1-1.905-3.576l5.406-10.413c.195-.376.52-.611.873-.705h.003c.613-.16 1.32.1 1.625.764l1.857 4.036.037.08 2.894 6.297.051.11 1.132 2.462a1.5 1.5 0 0 1-.395 1.779z'
      />
      <path
        fill='#000'
        d='M34.727 95.265q-.105 0-.209-.011l-10.436-1.179a2.74 2.74 0 0 1-2.125-3.99l5.405-10.413a1.65 1.65 0 0 1 1.053-.849l.023-.005a1.68 1.68 0 0 1 1.935.926l5.97 12.984a1.78 1.78 0 0 1-.661 2.255c-.286.185-.613.28-.955.28zm-6.182-15.886a1.09 1.09 0 0 0-.678.556l-5.405 10.413a2.15 2.15 0 0 0 .01 2.025 2.15 2.15 0 0 0 1.675 1.139l10.435 1.178a1.2 1.2 0 0 0 .936-.29c.345-.303.571-.86.31-1.432l-5.97-12.983c-.266-.58-.858-.722-1.293-.608l-.019.004z'
      />
      <path
        fill='#FF444F'
        d='M20.18 111.968a1.76 1.76 0 0 1-.934 1.594l-.007.003q-.018.01-.036.017l-.163.075-.007.003a1.76 1.76 0 0 1-1.628-.18l-11.447-7.634c-.964-.642-.857-2.051.108-2.572h.003q.104-.06.222-.099l.01-.005 7.448-2.57.739-.255h.001l2.92-1.008a1.976 1.976 0 0 1 2.621 1.841l.066 4.685.014 1.005.07 5.103z'
      />
      <path
        fill='#000'
        d='M18.387 114.066c-.4 0-.793-.118-1.142-.35l-11.447-7.634a1.77 1.77 0 0 1-.795-1.568 1.77 1.77 0 0 1 .926-1.49l.013-.007c.065-.037.15-.074.246-.108l.02-.009 8.186-2.825.016-.006 2.905-1.003a2.24 2.24 0 0 1 2.036.286c.6.421.952 1.085.962 1.82l.151 10.792a2.04 2.04 0 0 1-1.083 1.849l-.025.012q-.023.012-.042.019l-.158.072s-.015.008-.02.009a2.1 2.1 0 0 1-.75.142zM6.4 103.435l-.017.007a1.3 1.3 0 0 0-.18.078l-.015.009a1.2 1.2 0 0 0-.619 1.01c-.02.436.178.826.544 1.069l11.447 7.634c.411.273.91.33 1.367.152l.157-.071.018-.007.007-.006.013-.006a1.47 1.47 0 0 0 .771-1.332l-.15-10.791a1.68 1.68 0 0 0-.72-1.362 1.67 1.67 0 0 0-1.523-.215l-2.92 1.009s-.011.003-.015.006L6.4 103.436z'
      />
      <path
        fill='#FF444F'
        d='m36.04 126.471-1.357 2.681-3.805 7.523c-.158.313-.39.545-.657.696l-.007.004c-.086.047-.177.09-.27.12-.76.263-1.687-.04-2.067-.893l-5.683-12.719c-.4-.893.079-1.853.893-2.169l.014-.006a1.6 1.6 0 0 1 .808-.083l7.941 1.183 2.486.37a2.287 2.287 0 0 1 1.705 3.292z'
      />
      <path
        fill='#000'
        d='M29.391 137.875c-.748 0-1.45-.433-1.773-1.156l-5.683-12.72a1.87 1.87 0 0 1-.025-1.491c.199-.485.591-.871 1.075-1.058l.016-.007a1.9 1.9 0 0 1 .95-.098l10.428 1.553a2.54 2.54 0 0 1 1.905 1.36c.384.743.388 1.596.011 2.341l-5.16 10.204a1.94 1.94 0 0 1-1.742 1.07zm-6.182-15.902-.006.003a1.35 1.35 0 0 0-.767.748 1.3 1.3 0 0 0 .02 1.043l5.683 12.72c.334.749 1.133.94 1.716.739q.11-.036.223-.1c.237-.134.425-.333.55-.579l5.16-10.204c.294-.58.29-1.245-.008-1.823a1.98 1.98 0 0 0-1.483-1.06l-10.427-1.553a1.3 1.3 0 0 0-.657.066z'
      />
      <path
        fill='#FF444F'
        d='M54.29 112.994c-.12.355-.352.675-.687.898l-.004.003a2 2 0 0 1-.39.197l-9.76 3.553c-1.895.692-3.894-.72-3.881-2.737l.064-10.043a1.48 1.48 0 0 1 .933-1.373c.416-.168.91-.152 1.345.12l6.126 3.831 5.51 3.445c.766.48.995 1.366.743 2.104z'
      />
      <path
        fill='#000'
        d='M42.446 118.11c-.64 0-1.269-.197-1.818-.584a3.14 3.14 0 0 1-1.346-2.619l.064-10.043a1.774 1.774 0 0 1 2.713-1.493l11.637 7.278a2.07 2.07 0 0 1 .86 2.436 2.03 2.03 0 0 1-1.251 1.274l-9.762 3.554a3.2 3.2 0 0 1-1.1.196zm-1.324-14.44q-.228-.001-.45.088a1.19 1.19 0 0 0-.756 1.112l-.064 10.043a2.58 2.58 0 0 0 1.105 2.149c.708.499 1.58.614 2.394.317l9.76-3.554q.18-.066.329-.165a1.46 1.46 0 0 0 .579-.755c.188-.548.07-1.335-.625-1.771l-11.636-7.276a1.2 1.2 0 0 0-.64-.185z'
      />
      <path
        fill='#FF7E88'
        d='M28.492 109.093a1.76 1.76 0 0 1-.933 1.594l-.008.003q-.017.01-.035.017l-.164.076-.007.003-.12.041-8.02 2.755q.018-.007.035-.017l.007-.003c.548-.296.945-.874.934-1.594l-.071-5.103-.014-1.005-.066-4.685a1.977 1.977 0 0 0-2.621-1.841l-2.92 1.009a1 1 0 0 1 .114-.045l.011-.004 7.448-2.57 3.66-1.264a1.976 1.976 0 0 1 2.62 1.842l.066 4.685z'
      />
      <path
        fill='#000'
        d='M19.203 113.867a.285.285 0 0 1-.1-.551l.008-.006.013-.005c.492-.272.78-.769.77-1.333l-.15-10.791a1.68 1.68 0 0 0-.72-1.362 1.67 1.67 0 0 0-1.522-.215l-2.92 1.009a.285.285 0 0 1-.21-.528 1 1 0 0 1 .149-.058l11.108-3.834a2.24 2.24 0 0 1 2.036.286c.6.421.952 1.084.962 1.82l.151 10.792a2.03 2.03 0 0 1-1.083 1.848l-.025.013q-.022.011-.04.019l-.158.072-.014.006-.019.007-.12.041-8.02 2.755a.3.3 0 0 1-.093.016zm-.29-14.757q.229.095.437.24c.6.422.952 1.085.962 1.821l.15 10.791a2.06 2.06 0 0 1-.213.957l6.99-2.401.156-.071s.011-.006.017-.007l.016-.007c.495-.271.787-.77.778-1.337l-.15-10.793a1.68 1.68 0 0 0-.72-1.362 1.68 1.68 0 0 0-1.525-.215l-6.9 2.383z'
      />
      <path
        fill='#FF7E88'
        d='M44.16 90.95h-.003a1.4 1.4 0 0 1-.423.255l-.016.005-8.19 3.534q.083-.054.158-.118h.003a1.5 1.5 0 0 0 .394-1.78l-1.131-2.463-.051-.11-2.894-6.296-.037-.08-1.857-4.036a1.39 1.39 0 0 0-1.625-.764L36.55 75.6q.187-.122.403-.179h.003a1.39 1.39 0 0 1 1.625.764l1.857 4.036 2.93 6.377 1.183 2.57a1.5 1.5 0 0 1-.394 1.78z'
      />
      <path
        fill='#000'
        d='M35.53 95.029a.283.283 0 0 1-.154-.524 1 1 0 0 0 .142-.107c.345-.303.57-.86.309-1.431l-5.97-12.984c-.265-.58-.857-.721-1.293-.607a.285.285 0 0 1-.184-.537l8.04-3.485a1.7 1.7 0 0 1 .487-.208 1.68 1.68 0 0 1 1.937.927l5.969 12.983a1.78 1.78 0 0 1-.469 2.113q-.007.007-.017.014-.227.19-.49.29l-.013.005-8.182 3.53a.3.3 0 0 1-.112.023zm-5.948-16.093c.34.165.624.444.792.808l5.97 12.984c.197.432.214.902.07 1.324l7.215-3.112a1.2 1.2 0 0 0 .357-.216c.344-.303.572-.86.309-1.433l-5.97-12.984c-.266-.58-.857-.723-1.293-.607q-.008 0-.017.004a1.1 1.1 0 0 0-.303.137.3.3 0 0 1-.044.024z'
      />
      <path
        fill='#FF7E88'
        d='m61.655 110.312-8.05 3.58c.334-.225.566-.543.686-.898a1.78 1.78 0 0 0-.743-2.103l-5.511-3.445-6.126-3.832a1.48 1.48 0 0 0-1.344-.119l8.252-3.686a1.48 1.48 0 0 1 1.539.024l11.636 7.278c1.264.791 1.064 2.693-.337 3.202z'
      />
      <path
        fill='#000'
        d='M53.603 114.178a.28.28 0 0 1-.249-.146.287.287 0 0 1 .091-.375 1.46 1.46 0 0 0 .575-.752c.188-.548.073-1.337-.625-1.772l-11.636-7.277a1.2 1.2 0 0 0-1.089-.096.285.285 0 0 1-.221-.524l8.24-3.679a1.75 1.75 0 0 1 1.818.037l11.637 7.278a2.06 2.06 0 0 1 .963 1.978 2.06 2.06 0 0 1-1.345 1.729l-8.042 3.578a.3.3 0 0 1-.115.024zM41.82 103.246q.123.053.242.126l11.636 7.278a2.07 2.07 0 0 1 .831 2.521l7.01-3.118s.012-.006.02-.007c.553-.201.92-.672.983-1.257a1.48 1.48 0 0 0-.7-1.436l-11.636-7.277a1.19 1.19 0 0 0-1.272-.005l-7.114 3.176z'
      />
      <path
        fill='#FF7E88'
        d='m44.485 122.69-5.16 10.204a1.63 1.63 0 0 1-.705.722l-.18.081-8.218 3.673c.268-.151.5-.383.658-.696l3.804-7.523 1.356-2.681a2.286 2.286 0 0 0-1.704-3.292l-2.486-.37-7.941-1.182a1.6 1.6 0 0 0-.808.082l8.28-3.707c.284-.144.617-.209.973-.155l10.427 1.551a2.286 2.286 0 0 1 1.704 3.292z'
      />
      <path
        fill='#000'
        d='M30.222 137.656a.29.29 0 0 1-.254-.157.283.283 0 0 1 .113-.375c.23-.13.419-.329.543-.577l5.16-10.204c.294-.58.29-1.245-.008-1.823a1.98 1.98 0 0 0-1.483-1.06l-10.427-1.553a1.3 1.3 0 0 0-.666.069.287.287 0 0 1-.364-.158.286.286 0 0 1 .147-.369l8.275-3.704c.35-.177.743-.239 1.137-.18l10.426 1.552c.828.124 1.522.62 1.905 1.362.384.741.387 1.594.01 2.339l-5.161 10.204a1.9 1.9 0 0 1-.828.845l-.014.008-.181.081-8.217 3.673a.3.3 0 0 1-.117.024zm-5.775-16.237 9.93 1.479a2.54 2.54 0 0 1 1.905 1.36c.385.743.389 1.596.012 2.342l-5.061 10.007 7.263-3.248c.245-.129.444-.334.575-.593l5.161-10.204a1.98 1.98 0 0 0-.008-1.822 1.98 1.98 0 0 0-1.484-1.06l-10.428-1.551a1.32 1.32 0 0 0-.813.132z'
      />
    </g>
    <defs>
      <clipPath id='fbce1a1ea2fa45ccace18689af9936c7__a'>
        <path fill='#fff' d='M5 14.125h110v123.75H5z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightSpreadRiskIcon);
export default ForwardRef;
