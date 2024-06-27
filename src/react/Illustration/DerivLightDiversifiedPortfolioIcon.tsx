import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightDiversifiedPortfolioIcon = (
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
    <g clipPath='url(#0eb9a396699f3cce5d70c2900cdcbb9f__a)'>
      <path
        fill='#FF7E88'
        d='M63.86 56.431c0 .977-.1 1.896-.289 2.75-.42 1.893-1.282 3.466-2.482 4.655l-1.13.94c-2.13 1.773-6.49 5.405-7.063 5.88q.113-.112.222-.229a10.6 10.6 0 0 0 2.776-5.47c.572-3.153-.179-6.603-1.762-9.819l-.1-.204c-1.646-3.259-4.141-6.266-6.975-8.464l-.11-.083c-1.674-1.284-3.463-2.285-5.262-2.888-3.614-1.27-7.144-1.351-10.193.538 0-.002 6.4-5.328 6.403-5.33 8.092-7.044 19.965 1.236 24.31 10.443 1.157 2.454 1.78 4.971 1.655 7.281'
      />
      <path
        fill='#000'
        d='M52.896 70.973a.315.315 0 0 1-.228-.537q.11-.11.214-.222a10.27 10.27 0 0 0 2.696-5.312c.53-2.916-.07-6.244-1.735-9.625l-.033-.068-.064-.13a25.15 25.15 0 0 0-6.985-8.435c-1.71-1.31-3.448-2.265-5.178-2.844-3.857-1.357-7.192-1.186-9.922.506a.32.32 0 0 1-.488-.269q0-.147.39-.471l2.925-2.437c2.45-2.04 3.042-2.53 3.2-2.657v-.004c2.706-2.357 6.062-3.203 9.704-2.447 5.855 1.216 12.066 6.558 15.101 12.993q.005.01.008.02c1.217 2.583 1.797 5.143 1.678 7.404 0 .983-.1 1.927-.297 2.81-.427 1.927-1.291 3.544-2.569 4.81l-.02.018-3.202 2.666-4.99 4.155a.32.32 0 0 1-.205.075zM36.752 42.26c1.572 0 3.255.313 5.039.94 1.792.601 3.594 1.588 5.35 2.935l.117.09c2.892 2.244 5.4 5.288 7.056 8.565q.036.07.07.143l.032.064c1.723 3.503 2.342 6.965 1.789 10.014a10.9 10.9 0 0 1-1.3 3.556l2.773-2.31 3.192-2.658c1.185-1.177 1.989-2.688 2.387-4.49.187-.839.28-1.742.28-2.68v-.018c.117-2.165-.444-4.63-1.626-7.13l-.008-.018c-2.96-6.26-8.981-11.45-14.646-12.627-3.44-.713-6.605.082-9.156 2.304q-.005.003-.008.008l-4.557 3.793a10.5 10.5 0 0 1 3.215-.484z'
      />
      <path fill='#fff' d='M61.089 63.836q-.524.521-1.131.94z' />
      <path
        fill='#000'
        d='M59.958 65.093a.315.315 0 0 1-.206-.558l1.13-.941a.32.32 0 0 1 .44.028.315.315 0 0 1-.007.437c-.36.359-.756.688-1.174.977a.33.33 0 0 1-.181.057z'
      />
      <path
        fill='#FF444F'
        d='M56.032 62.906q.023 1.054-.138 2.05c-.345 2.154-1.311 4.067-2.776 5.471-1.525 1.463-3.593 2.375-6.064 2.437a9.5 9.5 0 0 0-.15-1.916c-.276-1.536-.934-2.963-1.944-4.099l-.017-.019a7.4 7.4 0 0 0-3.26-2.125L29.33 60.51c-2.804-5.21-3.018-13.375 2.16-16.472 3.05-1.89 6.58-1.809 10.194-.538 1.858.67 3.633 1.662 5.262 2.887q.055.04.11.084c2.93 2.23 5.38 5.22 6.974 8.464q.051.102.1.204c1.21 2.522 1.901 5.19 1.901 7.768'
      />
      <path
        fill='#000'
        d='M47.054 73.18a.315.315 0 0 1-.319-.323 9 9 0 0 0-.145-1.852c-.271-1.512-.919-2.876-1.869-3.947l-.005-.006-.012-.013a7.1 7.1 0 0 0-3.122-2.035l-12.354-4.198a.32.32 0 0 1-.179-.15c-3.053-5.673-2.868-13.814 2.277-16.89 2.899-1.797 6.421-1.988 10.465-.565 1.848.667 3.646 1.654 5.347 2.933q.063.045.122.091c2.927 2.227 5.437 5.273 7.057 8.568q.034.066.068.14l.032.064c1.265 2.638 1.933 5.37 1.933 7.904.014.717-.034 1.425-.142 2.105-.359 2.239-1.35 4.193-2.87 5.648-1.659 1.59-3.829 2.463-6.278 2.525h-.008zm-1.85-6.536c1.027 1.156 1.724 2.624 2.014 4.247q.146.802.156 1.642c2.151-.123 4.055-.926 5.522-2.333 1.42-1.36 2.347-3.19 2.684-5.294.103-.643.148-1.314.134-1.995v-.007c0-2.44-.646-5.08-1.87-7.632l-.033-.064q-.03-.065-.063-.13c-1.58-3.216-4.025-6.182-6.885-8.358-.04-.033-.072-.055-.102-.077-1.659-1.246-3.4-2.203-5.186-2.846-3.849-1.354-7.186-1.183-9.916.509-2.273 1.36-3.665 3.916-3.925 7.2-.228 2.89.45 6.15 1.819 8.745l12.231 4.156a7.7 7.7 0 0 1 3.417 2.238z'
      />
      <path fill='#fff' d='M44.943 66.83a7.8 7.8 0 0 0-3.26-2.125 7.4 7.4 0 0 1 3.26 2.125' />
      <path
        fill='#000'
        d='M44.943 67.147a.32.32 0 0 1-.236-.105 7.55 7.55 0 0 0-3.129-2.038.316.316 0 1 1 .203-.599 7.7 7.7 0 0 1 3.4 2.215.313.313 0 0 1-.026.444.32.32 0 0 1-.212.081z'
      />
      <path
        fill='#fff'
        d='M47.054 72.864a5 5 0 0 1-.064-.795q0-.57-.084-1.121a9.5 9.5 0 0 1 .15 1.916z'
      />
      <path
        fill='#000'
        d='M47.054 73.18a.316.316 0 0 1-.314-.265 5 5 0 0 1-.069-.848c0-.357-.027-.72-.081-1.072a.32.32 0 0 1 .63-.104c.118.64.17 1.306.154 1.98a.317.317 0 0 1-.319.31z'
      />
      <path
        fill='#EBECEE'
        d='M110.085 70.252v40.619s.03 15.642-7.306 24.724c0 0-5.813 7.855-11.92 9.947 0 0-.99.357-2.156-.061l-.078-.028-.158-.066a3.7 3.7 0 0 1-1.117-.775l-.087-.087a3 3 0 0 1-.156-.172l-.06-.072a6 6 0 0 1-.246-.319 6 6 0 0 1-.365-.583l-.139-.264a9 9 0 0 1-.56-1.43l-.05-.166a14.704 14.704 0 0 1-.108-.405q0-.001-.003-.004l-.033-.138-.046-.201-.06-.276q-.003-.006-.002-.01a7 7 0 0 1-.063-.316 14 14 0 0 1-.07-.403q-.039-.23-.07-.475l-.032-.246a11 11 0 0 1-.057-.511q-.014-.127-.026-.258a24 24 0 0 1-.059-.811l-.014-.294-.02-.504a33 33 0 0 1-.017-1.072v-33.978a5.22 5.22 0 0 0-3.503-4.916L43.577 83.36q-.094-.034-.187-.07a5.086 5.086 0 0 1-1.465-.895l-.056-.052a3.732 3.732 0 0 1-.284-.278 4 4 0 0 1-.166-.187 5.136 5.136 0 0 1-1.006-1.904q-.016-.049-.027-.099a6 6 0 0 1-.168-1.603 7.7 7.7 0 0 0-.499-2.369 7.83 7.83 0 0 0-3.884-4.23q-.015-.01-.041-.023l-.027-.012-.011-.007-.055-.023-.124-.054q-.042-.017-.09-.035l-.103-.04-.067-.025-.12-.046-.186-.07-.206-.073-.205-.073c-.308-.11-.654-.231-1.02-.356q-.134-.047-.272-.093l-.418-.143q-.263-.09-.528-.178l-.315-.108q-.105-.034-.209-.07l-.408-.137q-.168-.058-.33-.11-.064-.023-.128-.043l-.35-.117-.32-.108q-.126-.045-.242-.082l-.137-.046-.552-.188q-.05-.018-.087-.032l-.035-.012-.611-.207-11.56-3.928c-1.936-.637-3.615-1.584-5.439-.158l6.345-6.21h.001c2.024-2.124 4.235-.701 6.46-.018.811.286 4.059 1.366 4.886 1.66l12.351 4.196a7.8 7.8 0 0 1 3.279 2.144c1.009 1.136 1.667 2.563 1.943 4.099q.084.551.085 1.12-.002.405.063.796a5 5 0 0 0 3.284 3.902l4.498 1.583.653.23.616.217 1.304.459.682.239.007.003 1.065.374.365.129.745.262 1.929.678.796.28 1.215.427.82.29 23.234 8.17a5.22 5.22 0 0 1 3.501 4.915l-.001 25.437c.043 1.206.137 2.251.275 3.148q.03.191.063.373a14 14 0 0 0 .225 1.05q.16.624.358 1.118.044.114.091.221c.238.541.509.957.809 1.268q.066.069.138.133h.002q.106.097.213.174v.001a2.5 2.5 0 0 0 .3.182q.076.038.153.068l.08.032q.184.066.373.095c.458.072.946 0 1.445-.187q.222-.082.446-.196.115-.056.227-.119a7.4 7.4 0 0 0 .826-.537l.213-.163q.157-.125.313-.258l.108-.091q.103-.09.204-.184.316-.287.622-.602.202-.207.399-.424.05-.056.102-.112.145-.166.288-.334.146-.171.289-.345.093-.114.183-.229c.278-.349.541-.707.79-1.062l.13-.188.112-.166c2.035-2.775 1.784-12.3 1.784-12.3-.013-2.402.032-25.173-.027-31.54l.022.013q-.001-.619-.038-1.178l-.001-.016a11 11 0 0 0-.012-.37l-.025-.063c-.282-2.903-1.3-4.499-2.157-5.345l.046-.038.044-.04.069-.056.04-.033q.085-.069.198-.165l.317-.264.22-.181.076-.065.11-.09q.033-.03.12-.102l.096-.079q.056-.048.126-.106l.092-.077.209-.17q.04-.038.086-.074.069-.06.142-.12l.116-.095q.002-.004.007-.006.061-.053.126-.104l.893-.743.111-.092.008-.008q.031-.024.059-.05l.058-.046.086-.072.044-.036.04-.033.069-.057.049-.043.032-.025.016-.014q.195-.129.354-.294c.002 0 .003-.005.003-.005h.002a3 3 0 0 0 .352-.462q.055-.091.099-.182c.587-1.227-.354-2.386-.963-3.646l1.944.685a5.22 5.22 0 0 1 3.5 4.914z'
      />
      <path
        fill='#000'
        d='M89.882 146c-.374 0-.817-.054-1.287-.221l-.08-.029a3.57 3.57 0 0 1-.741-.384c-.021-.014-.056-.036-.088-.06a4.16 4.16 0 0 1-.568-.474l-.087-.089a2 2 0 0 1-.125-.136l-.046-.052q-.032-.037-.062-.074l-.155-.195a6.303 6.303 0 0 1-.633-1.029 9.4 9.4 0 0 1-.523-1.295l-.059-.188-.032-.101-.017-.06-.007-.026v-.001a16 16 0 0 1-.102-.381l-.004-.018-.035-.142a11 11 0 0 1-.109-.487l-.001-.011a5 5 0 0 1-.064-.332l-.05-.282-.019-.115a12 12 0 0 1-.103-.737 8 8 0 0 1-.03-.251q-.015-.133-.028-.266l-.025-.258q-.024-.262-.04-.532l-.034-.587-.02-.508a33 33 0 0 1-.016-1.083v-33.978A4.91 4.91 0 0 0 81.4 97L43.473 83.66l-.195-.073-.197-.082a5.4 5.4 0 0 1-1.365-.871l-.015-.013-.041-.04q-.053-.047-.112-.102a4 4 0 0 1-.186-.188 4 4 0 0 1-.187-.21 5.436 5.436 0 0 1-1.097-2.13 6.4 6.4 0 0 1-.177-1.672 7.4 7.4 0 0 0-.47-2.245l-.008-.019a7.5 7.5 0 0 0-3.725-4.057q-.01-.004-.019-.011l-.016-.01-.016-.007-.019-.01-.017-.01-.02-.007-.16-.068q-.023-.009-.044-.018l-.113-.042-.056-.021-.178-.068-.133-.049-.075-.027q-.065-.023-.135-.049l-.201-.071a96 96 0 0 0-1.196-.417l-.09-.03-.417-.143-.526-.178-.316-.108-.164-.054-.046-.016-.407-.137-.062-.02-.265-.09-.13-.042-.348-.117-.322-.109a8 8 0 0 0-.243-.082c-.044-.014-.095-.03-.143-.048l-.596-.204-.053-.019-.018-.006-12.173-4.136c-.276-.092-.552-.19-.817-.285-1.554-.558-2.895-1.038-4.32.076a.32.32 0 0 1-.438-.04.316.316 0 0 1 .015-.434l6.344-6.21.013-.013c1.806-1.877 3.739-1.169 5.608-.484.38.139.775.283 1.159.401.397.14 1.322.451 2.3.781 1.064.36 2.164.73 2.6.884l12.346 4.195a8.2 8.2 0 0 1 3.393 2.212l.025.027c1.027 1.156 1.722 2.624 2.014 4.247q.09.59.09 1.176-.001.372.058.745a4.72 4.72 0 0 0 3.075 3.655l7.755 2.728.02.008 6.101 2.145q.408.145.821.29l23.233 8.17c2.221.782 3.714 2.877 3.714 5.212v25.437c.041 1.154.132 2.201.273 3.101q.03.188.06.363a14 14 0 0 0 .22 1.027q.156.607.346 1.081.04.105.08.196l.008.019c.214.485.464.881.745 1.172a2 2 0 0 0 .13.123 2 2 0 0 0 .188.15 2 2 0 0 0 .134.089q.052.031.107.058l.024.013q.057.028.115.05l.081.034c.09.031.195.058.3.074q.584.093 1.284-.169.208-.078.412-.182.113-.055.217-.114c.248-.137.514-.31.79-.514l.209-.159c.095-.078.199-.162.3-.249l.052-.044.06-.05c.058-.051.123-.108.187-.17q.312-.284.612-.593a21 21 0 0 0 .496-.529 29 29 0 0 0 .565-.663l.127-.159.054-.068c.254-.32.515-.672.779-1.047l.019-.027.11-.158.11-.163c1.956-2.669 1.734-12.023 1.731-12.118-.004-.782-.001-3.728 0-7.458.005-7.875.013-19.776-.027-24.088a.3.3 0 0 1 .023-.119 18 18 0 0 0-.037-1.012q-.004-.03-.003-.053-.005-.19-.008-.302l-.007-.015a.3.3 0 0 1-.02-.087c-.278-2.846-1.276-4.371-2.065-5.15a.316.316 0 0 1 .02-.467l.198-.166q.087-.07.196-.163l.707-.587.017-.016.123-.1.145-.12.078-.067.155-.128q.066-.056.14-.114a1 1 0 0 1 .091-.076q.04-.035.081-.07l.056-.047.112-.092q.006-.006.013-.01.064-.057.13-.11l.936-.778q.028-.02.053-.044.014-.013.029-.025l.023-.021.171-.14.043-.037q.022-.019.042-.035l.067-.055.038-.033a.1.1 0 0 1 .03-.024l.011-.01.005-.004c.014-.015.022-.02.04-.032a1.7 1.7 0 0 0 .319-.269q.074-.08.124-.145a2 2 0 0 0 .094-.127c.032-.042.054-.08.077-.118q.048-.08.086-.158c.402-.84-.048-1.665-.569-2.622-.133-.243-.27-.495-.394-.753a.31.31 0 0 1 .051-.347.32.32 0 0 1 .344-.087l1.944.684c2.219.781 3.712 2.876 3.712 5.212v40.619c0 .156-.054 15.857-7.376 24.921A43 43 0 0 1 99.34 140c-2.977 2.988-5.793 4.95-8.373 5.834-.025.01-.454.16-1.082.16zm-3.883-4.55.013.041q.014.05.03.096l.056.179c.143.443.306.849.486 1.208q.068.132.134.254.17.306.345.551.045.065.089.121.074.096.143.181l.055.064q.006.008.01.015c.007.006.02.02.025.027q.053.062.11.12l.081.082q.071.073.14.133.14.123.26.21l.015.011q.03.024.06.043c.037.025.064.044.09.06l.054.035.114.068a3.4 3.4 0 0 0 .434.207l.072.025c1.033.37 1.93.063 1.939.06 5.944-2.036 11.713-9.758 11.77-9.836 7.191-8.903 7.244-24.381 7.244-24.536V70.25a4.91 4.91 0 0 0-3.288-4.617l-1.181-.415.012.022c.552 1.015 1.124 2.065.584 3.194a2 2 0 0 1-.115.21 2 2 0 0 1-.104.16q-.047.07-.113.151a3 3 0 0 1-.174.203l-.009.01a2.3 2.3 0 0 1-.386.323l-.029.024-.016.013-.035.03-.017.014q-.028.021-.058.047-.009.009-.019.016l-.017.016q-.009.008-.018.014l-.027.022-.169.141-.035.03-.011.01-.074.06-.934.776-.115.095-.022.02q-.057.045-.112.092l-.059.05a2 2 0 0 0-.089.077q-.034.026-.064.053l-.017.016-.144.117-.153.128-.072.06-.25.21-.022.018-.723.6-.138.115c.811.906 1.733 2.51 2.007 5.243l.008.02a.3.3 0 0 1 .022.098q.007.12.012.372v.014c.025.411.038.802.038 1.199q0 .06-.021.114c.038 4.419.032 16.165.026 23.965-.002 3.728-.005 6.673 0 7.447.009.387.229 9.657-1.845 12.487l-.102.154q-.06.089-.118.169l-.018.025a23 23 0 0 1-.8 1.078l-.054.068q-.065.084-.133.166-.148.18-.293.35-.144.17-.292.337l-.102.112a16 16 0 0 1-1.046 1.051q-.1.093-.209.188l-.056.048-.06.051c-.1.085-.209.173-.314.259l-.224.171c-.3.221-.59.411-.862.561q-.12.066-.24.125-.233.12-.476.208c-.57.214-1.111.282-1.607.203a2.3 2.3 0 0 1-.432-.111l-.093-.036a2 2 0 0 1-.174-.078q-.007-.003-.014-.008c-.062-.03-.118-.063-.161-.088l-.016-.01a3 3 0 0 1-.15-.099l-.016-.013a3 3 0 0 1-.23-.185q-.005-.004-.007-.008a3 3 0 0 1-.147-.14c-.333-.348-.627-.805-.872-1.362l-.01-.024q-.044-.103-.088-.213a9.6 9.6 0 0 1-.438-1.436 16.229 16.229 0 0 1-.225-1.17 28 28 0 0 1-.279-3.182V95.027a4.91 4.91 0 0 0-3.29-4.617l-23.232-8.172q-.414-.144-.823-.289l-6.113-2.15-.021-.008-7.74-2.723a5.29 5.29 0 0 1-3.56-4.998c0-.357-.027-.72-.081-1.072-.27-1.502-.917-2.866-1.867-3.937l-.005-.005-.01-.009a7.55 7.55 0 0 0-3.128-2.038l-12.351-4.196c-.435-.155-1.532-.525-2.594-.883-.98-.33-1.909-.642-2.296-.78-.388-.118-.79-.265-1.179-.407-1.835-.672-3.42-1.252-4.942.345l-.03.027-5.05 4.944c1.082-.173 2.14.207 3.236.6.262.094.533.192.804.28l12.174 4.137.044.015.11.04.52.177q.066.024.128.043.127.04.255.087l.314.106c.11.034.228.076.35.117l.125.04.274.092.06.021.408.138.046.015q.077.027.155.052.166.055.323.111l.526.179.418.142.088.03q.096.031.188.065c.364.125.71.247 1.019.356l.207.073.128.045.078.029.14.052.167.065.08.03.097.036.063.024.16.068c.018.006.045.019.07.03q.003.002.007.003l.035.018q.026.012.045.023a8.13 8.13 0 0 1 4.03 4.393l.007.019c.302.796.475 1.622.515 2.453v.027c-.013.53.042 1.04.158 1.517l.024.088a4.8 4.8 0 0 0 .94 1.782 4 4 0 0 0 .168.19 3 3 0 0 0 .247.243l.016.015q.026.023.051.047a4.7 4.7 0 0 0 1.367.833l.177.067L81.6 96.412a5.54 5.54 0 0 1 3.715 5.214v33.978c0 .389.005.737.016 1.063l.02.499.034.576q.018.265.04.519.011.124.026.249a44.23 44.23 0 0 0 .088.748q.031.242.068.467l.019.115a11 11 0 0 0 .053.296q.001-.001-.004-.01.005.016.007.03.024.138.052.271.002.008.004.02l.057.264q.022.105.045.196l.03.125q.001.008.005.014a13 13 0 0 0 .111.412zm17.603-63.354v.001z'
      />
      <path fill='#EBECEE' d='m29.37 69.414-.086-.032q.035.014.086.032' />
      <path
        fill='#000'
        d='M29.371 69.73a.3.3 0 0 1-.1-.016q-.06-.02-.104-.037a.314.314 0 0 1-.178-.412.32.32 0 0 1 .414-.177l.085.03c.162.062.245.24.186.402a.32.32 0 0 1-.3.21z'
      />
      <path fill='#EBECEE' d='m30.621 69.838-.319-.108z' />
      <path
        fill='#000'
        d='M30.621 70.154a.3.3 0 0 1-.098-.016q-.171-.055-.324-.11a.313.313 0 0 1-.196-.4.32.32 0 0 1 .403-.197q.151.05.322.11a.316.316 0 0 1 .2.4.32.32 0 0 1-.303.214z'
      />
      <path fill='#EBECEE' d='m30.972 69.955-.35-.117q.169.055.35.117' />
      <path
        fill='#000'
        d='M30.972 70.27a.3.3 0 0 1-.099-.015q-.185-.06-.354-.118a.316.316 0 0 1 .201-.6q.172.057.356.119a.316.316 0 0 1 .2.4.32.32 0 0 1-.304.215'
      />
      <path
        fill='#EBECEE'
        d='M40.386 79.876a5.3 5.3 0 0 1-.168-1.598c-.012.54.04 1.081.168 1.598'
      />
      <path
        fill='#000'
        d='M40.386 80.193a.32.32 0 0 1-.308-.238 5.6 5.6 0 0 1-.177-1.693.315.315 0 0 1 .33-.302c.176.006.313.15.308.324-.013.53.041 1.039.158 1.516a.317.317 0 0 1-.31.392z'
      />
      <path fill='#EBECEE' d='M43.208 83.216a4.8 4.8 0 0 1-1.283-.82c.378.33.81.61 1.283.82' />
      <path
        fill='#000'
        d='M43.208 83.532a.3.3 0 0 1-.127-.027 5 5 0 0 1-1.37-.875.315.315 0 0 1-.024-.445.32.32 0 0 1 .448-.027c.36.314.766.572 1.202.768a.315.315 0 0 1-.13.604z'
      />
      <path
        fill='#EBECEE'
        d='M46.904 70.948c-.276-1.536-.934-2.963-1.944-4.099a7.73 7.73 0 0 1 1.944 4.099'
      />
      <path
        fill='#000'
        d='M46.904 71.264a.32.32 0 0 1-.314-.261c-.271-1.51-.917-2.875-1.869-3.945a.313.313 0 0 1 .027-.444.32.32 0 0 1 .45.023 8.03 8.03 0 0 1 2.023 4.266.315.315 0 0 1-.315.362z'
      />
      <path fill='#EBECEE' d='m102.21 71.392-.11.092z' />
      <path
        fill='#000'
        d='M102.1 71.8a.315.315 0 0 1-.204-.56l.014-.013q.045-.035.09-.074a.318.318 0 0 1 .527.239.32.32 0 0 1-.116.245l-.11.09a.32.32 0 0 1-.203.073z'
      />
      <path
        fill='#EBECEE'
        d='m103.323 79.298-.022-.013c-.005-.492-.012-.887-.016-1.165q.037.559.038 1.178'
      />
      <path
        fill='#000'
        d='M103.323 79.614a.33.33 0 0 1-.158-.041l-.022-.013a.32.32 0 0 1-.161-.272c-.005-.49-.011-.885-.016-1.162a.316.316 0 0 1 .306-.321.32.32 0 0 1 .332.296c.025.41.038.801.038 1.198a.316.316 0 0 1-.319.316z'
      />
      <path
        fill='#EBECEE'
        d='M105.149 68.948a2 2 0 0 1-.338.28l.036-.03.027-.023.02-.016.011-.01.027-.021q.014-.014.028-.024l.012-.008.012-.013.007-.006q.004-.002.009-.008l.027-.022.066-.054.04-.034q.01-.008.014-.011z'
      />
      <path
        fill='#000'
        d='M104.795 69.558a.32.32 0 0 1-.249-.119.31.31 0 0 1 .065-.457l.064-.053.014-.013.005-.005q.002-.001.007-.005l.02-.017.034-.028q.011-.009.02-.018h.004l.02-.02.026-.02c.017-.015.037-.033.054-.045l.027-.022q.02-.019.04-.035a.32.32 0 0 1 .459.057.31.31 0 0 1-.024.405 2.3 2.3 0 0 1-.409.34.3.3 0 0 1-.177.053zm.055-.764'
      />
      <path fill='#EBECEE' d='M105.313 68.758a3 3 0 0 1-.16.185h-.001q.086-.093.161-.185' />
      <path
        fill='#000'
        d='M105.153 69.259a.32.32 0 0 1-.293-.19.31.31 0 0 1 .057-.341q.079-.083.146-.168a.32.32 0 0 1 .446-.052.31.31 0 0 1 .056.441q-.075.094-.179.207a.32.32 0 0 1-.234.101zM71.375 62.24a.3.3 0 0 1-.107-.019l-4.664-1.64a.315.315 0 0 1-.195-.402.32.32 0 0 1 .407-.193l4.664 1.64a.315.315 0 0 1-.106.613z'
      />
      <path
        fill='#fff'
        d='m88.625 145.453-73.85-26.293s-4.456-1.753-4.456-10.27v-41.1a3.43 3.43 0 0 1 1.32-2.713c1.824-1.426 3.503-.48 5.439.158l11.56 3.927.61.207.035.013q.037.014.088.032l.931.316.32.108q.169.054.35.117l.128.042.33.11.408.139q.104.035.209.069l.316.108q.263.088.527.178l.418.142.273.094c.365.125.71.246 1.018.356l.206.072.206.075.186.07.12.045.067.025.104.04q.047.02.089.035l.124.053q.032.013.054.024l.012.006q.015.006.027.013l.041.022a7.83 7.83 0 0 1 3.89 4.242 7.7 7.7 0 0 1 .493 2.363 6 6 0 0 0 .168 1.598l.027.1c.15.563.392 1.095.738 1.562l.058.076q.098.137.21.265.08.096.166.187l.01.01a4 4 0 0 0 .274.268l.056.052a5.1 5.1 0 0 0 1.465.895q.093.037.186.07L81.504 96.7a5.22 5.22 0 0 1 3.503 4.915v33.979a33 33 0 0 0 .037 1.576l.014.294.02.288a24 24 0 0 0 .092 1.04q.014.128.03.252.014.125.032.246.031.244.07.475l.02.115a14 14 0 0 0 .112.604q0 .004.002.01.028.14.06.276a6 6 0 0 0 .082.343 15 15 0 0 0 .108.405l.051.166.056.179c.153.473.322.887.504 1.25q.07.137.139.264a6 6 0 0 0 .61.903 2 2 0 0 0 .096.111q.06.069.121.133l.087.087a3.6 3.6 0 0 0 .524.438q.045.032.088.06.036.024.072.046l.113.068a3.5 3.5 0 0 0 .478.229'
      />
      <path
        fill='#000'
        d='M88.625 145.769a.3.3 0 0 1-.108-.019l-73.85-26.292c-.2-.078-4.667-1.935-4.667-10.568v-41.1a3.75 3.75 0 0 1 1.44-2.961c1.706-1.333 3.273-.77 4.935-.174.261.093.532.191.803.28l12.174 4.136.045.016.11.04.52.176q.066.024.127.043.128.04.255.087l.314.106q.166.054.351.117l.456.153q.201.066.41.138l.046.016.155.052q.166.054.324.11l.526.18q.21.07.417.141l.088.03.188.065c.364.125.71.247 1.02.356l.206.073.128.046.078.028.123.046.187.071.08.03.127.05.041.015q.015.004.029.011l.123.052.038.018q.017.006.035.015l.037.018.046.023a8.14 8.14 0 0 1 4.03 4.391l.007.02c.302.796.475 1.621.515 2.453v.027c-.013.53.042 1.039.158 1.516l.024.089c.148.553.38 1.043.689 1.46l.017.025.03.039q.008.008.013.017.09.124.192.24.077.096.156.178l.013.013a3 3 0 0 0 .247.243l.016.014q.026.024.05.048a4.8 4.8 0 0 0 1.366.833l.177.066 37.926 13.34a5.54 5.54 0 0 1 3.715 5.215v33.978c0 .389.005.737.016 1.062l.02.5.034.576q.018.265.04.518l.025.25c.008.087.016.164.026.242v.017q.015.125.032.244.015.13.032.245.031.243.068.466l.02.116.052.295q0-.002-.003-.011l.008.034q.023.137.053.27l.003.019q.025.132.057.259l.046.201.03.125q.002.007.005.014a13 13 0 0 0 .112.411l.013.041q.014.05.03.097l.056.178c.143.443.306.849.486 1.208q.068.133.134.255c.113.202.228.389.344.55q.047.065.09.122.075.096.143.18.029.033.055.065.006.007.01.014c.007.005.02.021.025.027q.053.062.11.12.04.043.081.082.071.073.14.133.14.123.26.211l.014.011q.03.023.061.042l.02.015.05.034.02.013.054.035.114.068q.139.08.29.147.073.034.144.06a.315.315 0 0 1 .182.406.32.32 0 0 1-.298.206zm-74.92-81.117c-.623 0-1.237.18-1.868.673-.762.601-1.2 1.5-1.2 2.465v41.1c0 8.169 4.215 9.961 4.256 9.977l71.889 25.593a5 5 0 0 1-.244-.319 6.3 6.3 0 0 1-.528-.886 9.4 9.4 0 0 1-.523-1.295l-.059-.188-.032-.101-.017-.06-.007-.025v-.002a9 9 0 0 1-.102-.383l-.004-.017-.035-.142-.048-.207a6 6 0 0 1-.06-.279l-.004-.012q-.03-.138-.054-.277a14.383 14.383 0 0 1-.059-.337l-.02-.115a12 12 0 0 1-.071-.486l-.032-.251c-.011-.078-.02-.165-.03-.251v-.019a4 4 0 0 1-.027-.249l-.026-.257a26 26 0 0 1-.04-.533l-.033-.587-.021-.507a32 32 0 0 1-.016-1.083v-33.979a4.91 4.91 0 0 0-3.291-4.618l-37.928-13.34a7 7 0 0 1-.392-.155 5.4 5.4 0 0 1-1.365-.871q-.008-.006-.013-.013l-.041-.04-.112-.102a4 4 0 0 1-.186-.188 4 4 0 0 1-.187-.209 4 4 0 0 1-.263-.334l-.014-.02a4.9 4.9 0 0 1-.791-1.67 6.365 6.365 0 0 1-.206-1.779 7.4 7.4 0 0 0-.47-2.245l-.008-.019a7.5 7.5 0 0 0-3.725-4.057l-.019-.01-.016-.01-.016-.008-.019-.01q-.004 0-.011-.006l-.014-.006-.026-.012-.113-.049-.067-.025-.126-.049-.056-.02-.191-.073-.128-.047-.067-.024q-.066-.024-.135-.05l-.201-.07a95 95 0 0 0-1.196-.418l-.091-.03-.416-.142-.526-.179q-.16-.055-.316-.107l-.164-.054-.046-.016-.407-.138-.458-.153c-.123-.04-.236-.08-.347-.117l-.322-.109a7 7 0 0 0-.243-.082c-.044-.014-.095-.03-.143-.048l-.597-.204-.052-.019-.018-.006-12.174-4.136c-.275-.092-.551-.19-.816-.285-.866-.311-1.668-.597-2.452-.597zm22.216 6.71.004.001z'
      />
      <path
        fill='#EBECEE'
        d='m79.99 55.516-5.819 7.368c-.909-.31-1.778-.606-2.59-.886l-.046-.015-4.824-1.698-.066-.024.008.005-3.082-1.085c.19-.854.289-1.773.289-2.75.124-2.31-.498-4.827-1.655-7.28z'
      />
      <path
        fill='#000'
        d='M74.171 63.2a.3.3 0 0 1-.104-.017l-.389-.133c-.768-.262-1.506-.514-2.201-.753l-.061-.02-4.812-1.694-.03-.01q-.014-.003-.028-.009l-3.082-1.084a.316.316 0 0 1-.204-.367c.187-.84.28-1.74.28-2.682v-.017c.117-2.165-.444-4.63-1.626-7.13a.317.317 0 0 1 .397-.43l17.787 6.363a.315.315 0 0 1 .142.493l-5.82 7.368a.32.32 0 0 1-.25.122zm-7.452-3.248.041.013.057.02 4.85 1.707.017.005q1.047.36 2.202.752l.175.06 5.409-6.846-16.667-5.964c1.01 2.356 1.486 4.672 1.377 6.739 0 .882-.081 1.733-.239 2.536l2.78.979z'
      />
      <path
        fill='#000'
        d='M62.205 49.468a.324.324 0 0 1-.311-.408.313.313 0 0 1 .39-.215.33.33 0 0 1 .24.307.32.32 0 0 1-.32.316M74.036 63.178a.3.3 0 0 1-.107-.019l-2.454-.863a.317.317 0 0 1-.194-.403.32.32 0 0 1 .406-.193l2.454.863a.317.317 0 0 1 .194.403.32.32 0 0 1-.3.21z'
      />
      <path fill='#fff' d='m66.71 60.285-.057-.02-.008-.004z' />
      <path
        fill='#000'
        d='M66.71 60.6a.3.3 0 0 1-.1-.015l-.057-.019a.32.32 0 0 1-.19-.443.317.317 0 0 1 .397-.158l.057.02a.316.316 0 0 1-.106.616'
      />
      <path
        fill='#fff'
        d='M98.761 74.262c.61-.634.849-1.613.372-2.536l-.314-.61q.539.181.98.328s.592.193 1.289.882z'
      />
      <path
        fill='#000'
        d='M98.761 74.578a.316.316 0 0 1-.233-.535c.57-.592.695-1.445.32-2.174l-.315-.608a.31.31 0 0 1 .043-.351.32.32 0 0 1 .343-.093l.98.327c.026.008.67.224 1.412.958a.318.318 0 0 1-.021.466l-2.326 1.936a.32.32 0 0 1-.204.074zm.697-2.914c.217.459.288.95.222 1.421l.926-.771c-.509-.432-.902-.57-.907-.571l-.241-.08'
      />
      <path
        fill='#fff'
        d='m103.323 79.298-.022-.013c-.005-.492-.012-.887-.016-1.165q.037.559.038 1.178'
      />
      <path
        fill='#000'
        d='M103.323 79.614a.33.33 0 0 1-.158-.041l-.022-.013a.32.32 0 0 1-.161-.272c-.005-.49-.011-.885-.016-1.162a.316.316 0 0 1 .306-.321.32.32 0 0 1 .332.296c.025.41.038.801.038 1.198a.316.316 0 0 1-.319.316z'
      />
      <path
        fill='#fff'
        d='M105.149 68.948a2 2 0 0 1-.338.28l.036-.03.027-.023.02-.016.011-.01.027-.021q.014-.014.028-.024l.012-.008v-.003l.012-.01.007-.006q.004-.002.009-.008l.027-.022.066-.054.04-.034q.01-.008.014-.011z'
      />
      <path
        fill='#000'
        d='M104.795 69.558a.32.32 0 0 1-.249-.119.31.31 0 0 1 .065-.457l.064-.054s.01-.007.014-.012l.005-.005q.002-.001.007-.005l.02-.017.034-.029q.001-.001.005-.003l.023-.019.016-.014.026-.02.054-.045.027-.022.04-.035a.32.32 0 0 1 .459.057.31.31 0 0 1-.024.405 2.3 2.3 0 0 1-.409.34.32.32 0 0 1-.177.054m.055-.764'
      />
      <path
        fill='#FF444F'
        d='M98.761 74.262a2.21 2.21 0 0 1-2.332.57l-4.833-1.622-17.237-5.784c-1.457-.49-1.99-2.262-1.04-3.464l.133-.169.72-.91 5.819-7.367 4.362-5.521q.157-.198.343-.351h.002l.029-.024.047-.036.07-.051a3 3 0 0 1 .155-.096q.094-.055.192-.097.044-.02.087-.036a2 2 0 0 1 .362-.11 2 2 0 0 1 .185-.03q.043-.005.085-.007.177-.017.357-.004.138.011.277.037l.016.003a2.2 2.2 0 0 1 .424.131 2.2 2.2 0 0 1 .523.305l.004.002q.057.047.111.095a1.7 1.7 0 0 1 .225.239q.039.045.072.093.046.06.083.123.014.026.032.05.034.058.065.12l.945 1.832.147.285.233.452.164.317.17.328.446.865.282.547.194.376.198.383.1.196.307.593.103.2.316.612.107.206.54 1.048.33.639.222.43.557 1.078.446.865.223.432.222.43.222.428.11.214.218.424.325.629.214.414.206.397.11.215.207.402.304.59.198.383.29.562.189.364.023.045.51.989.166.322.316.612.22.425.64 1.237.314.608c.476.924.237 1.903-.372 2.537'
      />
      <path
        fill='#000'
        d='M97.156 75.269a2.6 2.6 0 0 1-.83-.136l-22.069-7.406a2.51 2.51 0 0 1-1.626-1.675 2.49 2.49 0 0 1 .435-2.284l.853-1.078L84.102 49.8q.17-.214.389-.398.01-.01.02-.016l.01-.008a1 1 0 0 1 .07-.054l.013-.01q.03-.023.062-.043.046-.031.097-.064a1.924 1.924 0 0 1 .29-.153q.048-.022.094-.04a2.7 2.7 0 0 1 .533-.15l.108-.014.1-.01a2.686 2.686 0 0 1 .713.038h.005q.013.001.028.007a2.4 2.4 0 0 1 .473.147q.07.028.152.066.169.087.302.177.067.046.128.094l.022.017c.047.04.085.07.123.104q.058.052.112.108.031.032.068.074.044.045.08.095.044.053.083.107.054.069.096.144l.027.045q.044.07.081.145L99.413 71.58c.5.97.335 2.108-.424 2.898a2.54 2.54 0 0 1-1.837.79zm-12.272-25.37q-.158.135-.28.29L73.568 64.157a1.86 1.86 0 0 0-.326 1.714c.18.597.625 1.056 1.22 1.255l22.068 7.406c.726.244 1.472.06 2-.489.57-.592.695-1.445.319-2.174L87.815 50.495a1 1 0 0 0-.053-.094l-.03-.05-.01-.017a1 1 0 0 0-.057-.085 1 1 0 0 0-.062-.081l-.013-.016q-.021-.028-.046-.054l-.02-.022q-.013-.017-.03-.033a1.78 1.78 0 0 0-.17-.155l-.013-.01q-.051-.04-.105-.077a2 2 0 0 0-.227-.133q-.048-.023-.11-.049a1.8 1.8 0 0 0-.39-.118 1.791 1.791 0 0 0-.534-.027l-.078.006a2.293 2.293 0 0 0-.156.025q-.04.008-.079.02a2 2 0 0 0-.231.074l-.016.006c-.016.007-.032.011-.046.02l-.016.005q-.085.038-.158.08c-.022.012-.034.017-.045.025l-.092.06-.038.027-.024.017-.035.026-.026.022-.017.014z'
      />
      <path fill='#FF444F' d='M86.7 49.226' />
      <path
        fill='#000'
        d='M86.985 49.64a.3.3 0 0 1-.126-.025 2 2 0 0 0-.244-.084.315.315 0 0 1-.222-.387.32.32 0 0 1 .389-.223c.123.032.231.07.335.116.16.07.233.256.16.416a.32.32 0 0 1-.29.19z'
      />
      <path fill='#FF444F' d='M87.055 49.353q.035.014.068.033z' />
      <path
        fill='#000'
        d='M87.123 49.702a.3.3 0 0 1-.139-.032 2 2 0 0 0-.12-.052.316.316 0 0 1-.181-.401.32.32 0 0 1 .4-.192q.056.02.109.043l.012.006q.04.018.075.038a.315.315 0 0 1-.156.592z'
      />
      <path fill='#FF444F' d='M87.385 49.54' />
      <path
        fill='#000'
        d='M87.385 49.856a.3.3 0 0 1-.179-.056 2 2 0 0 0-.23-.134.315.315 0 0 1-.138-.422.32.32 0 0 1 .422-.146q.158.074.31.182c.142.1.177.296.076.438a.32.32 0 0 1-.261.136z'
      />
      <path
        fill='#FF7E88'
        d='M87.385 15.104v17.773c0 .769-.386 1.422-.954 1.815l-6.204 5.174c.456-.4.751-.984.751-1.657V20.434c0-.931-.587-1.763-1.47-2.08-2.497-.904-16.03-5.786-18.212-6.573a2.23 2.23 0 0 0-2.165.357c.035-.027 6.325-5.262 6.354-5.287a2.24 2.24 0 0 1 2.22-.402l18.21 6.573a2.22 2.22 0 0 1 1.47 2.082'
      />
      <path
        fill='#000'
        d='M80.227 40.182a.314.314 0 0 1-.212-.552c.415-.363.644-.868.644-1.42V20.437c0-.796-.507-1.514-1.26-1.784l-11.178-4.035-7.034-2.538a1.9 1.9 0 0 0-1.855.307s-.005.005-.007.005a.32.32 0 0 1-.445-.056.313.313 0 0 1 .05-.44q.004-.005.01-.008c.192-.159 6.19-5.15 6.336-5.274a2.57 2.57 0 0 1 2.537-.458l18.21 6.573a2.54 2.54 0 0 1 1.68 2.38V32.88c0 .82-.401 1.592-1.077 2.066l-6.193 5.166a.32.32 0 0 1-.206.074zM60.601 11.33q.406.011.805.155l7.033 2.538c4.52 1.631 9.725 3.508 11.179 4.035a2.54 2.54 0 0 1 1.68 2.378V38.21q0 .188-.026.374l4.955-4.133.022-.017c.52-.36.818-.928.818-1.556V15.104c0-.795-.507-1.511-1.26-1.785L67.595 6.746a1.91 1.91 0 0 0-1.904.345c-.053.046-3.248 2.705-5.091 4.239'
      />
      <path
        fill='#FF444F'
        d='M80.978 20.434V38.21c0 .674-.295 1.257-.751 1.657a2.24 2.24 0 0 1-2.247.425L59.768 33.72a2.22 2.22 0 0 1-1.47-2.082V13.862c0-.685.306-1.278.775-1.676a2.23 2.23 0 0 1 2.223-.405l3.409 1.23 14.803 5.343a2.21 2.21 0 0 1 1.47 2.08'
      />
      <path
        fill='#000'
        d='M78.743 40.74c-.292 0-.587-.049-.871-.151L59.66 34.016a2.54 2.54 0 0 1-1.68-2.38V13.862c0-.739.323-1.438.886-1.917a2.54 2.54 0 0 1 2.538-.462l18.212 6.573a2.54 2.54 0 0 1 1.68 2.378V38.21c0 .735-.304 1.409-.857 1.894a2.57 2.57 0 0 1-1.696.637M60.526 11.961a1.9 1.9 0 0 0-1.244.465 1.88 1.88 0 0 0-.665 1.435v17.775c0 .796.507 1.512 1.261 1.786l18.212 6.572c.672.24 1.392.105 1.926-.365.415-.364.643-.868.643-1.42V20.434c0-.795-.507-1.513-1.26-1.783l-18.212-6.573a2 2 0 0 0-.661-.117'
      />
      <path
        fill='#fff'
        d='m101.544 123.124-.112.166q-.066.096-.131.189a21 21 0 0 1-1.55 1.97l-.102.112a21 21 0 0 1-.398.424 14 14 0 0 1-.826.785l-.108.092q-.157.133-.313.258l-.214.163a7.4 7.4 0 0 1-1.052.656 5 5 0 0 1-.446.196c-.5.187-.987.259-1.445.187a2 2 0 0 1-.373-.095l-.08-.032a2 2 0 0 1-.153-.068l-.001-.001q-.076-.038-.15-.083l-.002-.001a3 3 0 0 1-.147-.097v-.001a3 3 0 0 1-.213-.173h-.002a4 4 0 0 1-.139-.134c-.3-.312-.57-.727-.808-1.268a9.007 9.007 0 0 1-.45-1.339 13.901 13.901 0 0 1-.287-1.423 27 27 0 0 1-.276-3.148c.002-2.981.002-25.437.002-25.437a5.22 5.22 0 0 0-3.501-4.914l-23.233-8.172-.822-.289-1.215-.427-.795-.28-1.93-.678-.744-.263-.365-.128-1.065-.374-.007-.004-.682-.238-1.305-.459-.615-.216-.654-.231-4.498-1.583a5 5 0 0 1-3.283-3.902c2.472-.062 4.54-.974 6.064-2.437q-.109.117-.222.23l7.062-5.88q.608-.42 1.13-.941c1.201-1.19 2.064-2.762 2.483-4.655l3.082 1.085.058.019c1.11.409 2.79.999 4.825 1.698q.025.008.046.016c.812.28 1.68.575 2.59.885l-.72.909-.134.17c-.948 1.2-.416 2.973 1.042 3.463l17.236 5.784 4.833 1.622a2.21 2.21 0 0 0 2.332-.57l2.327-1.936h.001c.858.846 1.875 2.442 2.158 5.345a19 19 0 0 1 .038.448c.005.279.011.674.016 1.166.059 6.367.014 29.138.027 31.54 0 0 .25 9.525-1.784 12.299'
      />
      <path
        fill='#000'
        d='M95.204 128.665a2.6 2.6 0 0 1-.408-.032 2.2 2.2 0 0 1-.432-.111l-.093-.036a3 3 0 0 1-.196-.09q-.076-.04-.153-.085l-.016-.01a3 3 0 0 1-.15-.099l-.016-.013a3 3 0 0 1-.228-.185l-.008-.008a3 3 0 0 1-.146-.141c-.334-.348-.627-.805-.87-1.361l-.01-.024q-.046-.104-.088-.213a9.6 9.6 0 0 1-.439-1.436 17.154 17.154 0 0 1-.225-1.17 28 28 0 0 1-.278-3.183V95.02a4.91 4.91 0 0 0-3.29-4.617L57.99 79.793l-.02-.008-7.74-2.723a5.29 5.29 0 0 1-3.492-4.15.318.318 0 0 1 .314-.367c2.278-.057 4.302-.868 5.844-2.348a.3.3 0 0 1 .15-.081l4.635-3.86 2.07-1.725.023-.017a8 8 0 0 0 1.088-.904c1.19-1.18 1.996-2.693 2.398-4.5a.322.322 0 0 1 .418-.23l3.133 1.101c1.065.392 2.686.963 4.828 1.7l.027.01.016.004q1.047.36 2.202.753l.389.132c.097.034.172.111.202.21a.32.32 0 0 1-.054.285l-.853 1.079a1.86 1.86 0 0 0-.327 1.714c.18.597.625 1.056 1.22 1.255l22.07 7.406c.724.243 1.47.06 1.998-.489l.026-.023 2.326-1.936a.334.334 0 0 1 .432.018c.865.852 1.955 2.503 2.25 5.538q.022.216.037.44l.002.033c.004.278.011.675.015 1.169.04 4.315.032 16.217.028 24.094-.002 3.729-.005 6.674 0 7.447.009.386.229 9.647-1.842 12.482l-.107.158q-.06.089-.118.169l-.017.025c-.27.384-.539.748-.801 1.079l-.054.068-.132.166q-.148.179-.294.349-.143.17-.291.337l-.103.112a15 15 0 0 1-1.046 1.051l-.208.189-.056.047-.06.051c-.101.085-.21.174-.315.259l-.223.171a6.761 6.761 0 0 1-1.102.686 6 6 0 0 1-.474.209 3.5 3.5 0 0 1-1.202.235zm-.805-.813q.057.028.115.051l.081.033c.09.032.195.058.3.074.387.062.818.005 1.283-.169a5 5 0 0 0 .63-.294 7.5 7.5 0 0 0 .79-.514q.102-.077.208-.16c.096-.077.2-.161.3-.248l.053-.044.06-.051c.06-.052.126-.112.19-.17a14 14 0 0 0 1.001-1.008l.102-.112q.14-.157.28-.324.144-.168.285-.338l.127-.16.055-.068c.253-.319.515-.672.778-1.047l.019-.027.11-.158.11-.163.008-.012c1.948-2.658 1.725-12.012 1.723-12.105-.004-.783-.001-3.729 0-7.458.005-7.876.013-19.777-.027-24.089-.004-.479-.011-.865-.016-1.141l-.001-.027q-.015-.211-.035-.416c-.254-2.612-1.116-4.112-1.866-4.943l-2.084 1.733a2.54 2.54 0 0 1-2.653.64l-22.07-7.407a2.51 2.51 0 0 1-1.626-1.674 2.49 2.49 0 0 1 .436-2.285l.577-.729-2.167-.741-.06-.021a248 248 0 0 1-4.817-1.695l-.048-.016-2.752-.969c-.452 1.774-1.287 3.274-2.486 4.462-.356.354-.746.68-1.162.968l-2.06 1.715-4.991 4.155a.4.4 0 0 1-.085.05c-1.524 1.327-3.437 2.088-5.579 2.216a4.72 4.72 0 0 0 3.003 3.303l7.755 2.727.02.008L88.369 89.81c2.222.781 3.714 2.876 3.714 5.212v25.437a27 27 0 0 0 .273 3.1q.03.19.06.364a14 14 0 0 0 .22 1.026q.156.608.346 1.082l.08.196.008.019c.214.485.464.88.745 1.171q.059.06.12.116l.01.008q.083.075.182.145l.007.005a2 2 0 0 0 .266.158z'
      />
      <path
        fill='#FF7E88'
        d='M105.605 68.3a2 2 0 0 1-.188.319 2.6 2.6 0 0 1-.264.324h-.001q0 .001-.003.005l-.015.01q-.015.014-.04.035l-.065.054-.027.022q-.004.006-.01.008-.002.003-.006.007l-.013.009v.003l-.011.008q-.014.01-.029.024l-.027.022-.011.01-.019.015-.027.022-.053.045-.016.014q-.015.012-.032.025l-.049.043a2 2 0 0 0-.108.09l-.045.036-.086.072-.058.047q-.028.025-.059.049l-.007.008-.112.091-.893.744q-.064.052-.126.104-.004.002-.006.006l-.117.095q-.073.06-.142.12-.045.036-.086.073l-.209.17-.092.078-.126.106-.096.08q-.087.071-.119.099l-.11.092-.077.065-.22.181-.317.264q-.113.096-.198.165l-.04.033-.068.057-.045.04-.046.037h-.002l-2.326 1.936c.609-.634.848-1.613.371-2.537l-.314-.608-.64-1.237-.22-.425-.315-.612-.166-.322-.51-.989-.024-.045-.188-.364-.29-.561-.198-.385-.305-.59-.207-.401-.11-.215-.206-.397-.213-.414-.325-.63-.219-.423-.11-.214-.221-.428-.222-.43-.223-.432-.447-.865-.556-1.078-.222-.43-.33-.639-.54-1.048-.107-.206-.316-.612-.104-.2-.306-.593-.1-.196-.198-.383-.195-.376-.282-.547-.446-.865-.17-.328-.163-.317-.233-.453-.147-.284-.945-1.833a1.4 1.4 0 0 0-.098-.169 1 1 0 0 0-.083-.123 1 1 0 0 0-.071-.093 1 1 0 0 0-.072-.084 1.739 1.739 0 0 0-.153-.155q-.054-.048-.112-.095 0-.001-.003-.002a2.24 2.24 0 0 0-.947-.436l-.016-.003a2.4 2.4 0 0 0-.635-.033q-.041.001-.084.008-.047.005-.093.012a2 2 0 0 0-.185.04q-.136.032-.269.087-.044.015-.088.036a2 2 0 0 0-.255.134q-.045.029-.09.059-.037.024-.07.05l-.049.037 6.3-5.241c1.059-.95 2.795-.679 3.48.642l10.134 19.632h.001c.609 1.26 1.55 2.42.963 3.646z'
      />
      <path
        fill='#000'
        d='M98.761 74.578a.317.317 0 0 1-.233-.535c.57-.592.696-1.445.32-2.174L87.813 50.495a1 1 0 0 0-.053-.094l-.01-.018-.01-.016-.02-.033a1 1 0 0 0-.057-.085 1 1 0 0 0-.062-.08l-.013-.017-.046-.054-.02-.022-.03-.033a1.78 1.78 0 0 0-.17-.155l-.013-.01q-.052-.04-.106-.077a2 2 0 0 0-.226-.133q-.049-.023-.11-.049a1.8 1.8 0 0 0-.37-.115l-.02-.003a1.78 1.78 0 0 0-.534-.027c-.031.002-.045.002-.063.005q-.011 0-.022.003l-.074.01q-.041.006-.076.014-.035.005-.06.014l-.022.006a2 2 0 0 0-.221.071l-.023.008c-.015.007-.031.011-.046.02l-.016.005q-.085.038-.157.08c-.023.012-.034.017-.045.025l-.093.06q-.02.015-.038.027l-.024.017q-.022.017-.035.026a.32.32 0 0 1-.446-.046.313.313 0 0 1 .04-.441l6.3-5.242a2.54 2.54 0 0 1 2.155-.596c.785.142 1.446.63 1.811 1.336l10.122 19.608q.01.014.019.033c.118.243.251.488.38.724.551 1.015 1.124 2.065.583 3.194a2 2 0 0 1-.115.21q-.044.076-.103.16a3 3 0 0 1-.287.354l-.013.013-.011.01q-.01.01-.022.02l-.023.019-.038.033-.041.034-.026.021-.014.013q-.005.003-.008.006a.2.2 0 0 1-.035.029q-.006.004-.008.006l-.016.014-.023.017-.004.004-.02.015a.1.1 0 0 1-.023.02l-.04.034-.019.016q-.003.001-.005.005a.2.2 0 0 1-.035.028l-.016.013-.035.03s-.011.01-.018.014q-.028.021-.057.047l-.019.016-.018.016-.017.014-.028.022-.169.141-.036.03-.016.014-1.002.832-.114.095-.023.02q-.057.045-.111.092l-.059.05a2 2 0 0 0-.09.077q-.034.025-.063.054l-.018.015-.143.117-.153.128-.072.06-.251.21-.022.018-.722.6-.199.166-.2.167-.019.014-2.307 1.92a.32.32 0 0 1-.204.074zM88.31 50.072q.04.066.075.136L99.416 71.58c.25.48.334 1.004.262 1.504l1.204-1.001.021-.016.178-.152q.087-.069.196-.163l.708-.586.018-.016c.02-.017.064-.054.123-.101l.145-.12.078-.067.154-.128q.067-.055.141-.114a1 1 0 0 1 .091-.076q.039-.034.081-.07l.056-.047.111-.091.013-.011q.064-.054.131-.108l.992-.824.027-.023.024-.02.17-.141.043-.035.042-.035q.034-.03.067-.055l.038-.034a.2.2 0 0 1 .03-.023l.011-.01.005-.005a.2.2 0 0 1 .034-.026l.063-.054.015-.013.005-.005.006-.004.021-.018.033-.028q.001-.001.005-.003l.024-.02.016-.014.025-.02.055-.046.027-.022s.016-.016.025-.022l.005-.005q.074-.08.124-.145.055-.067.094-.127c.032-.043.055-.08.077-.119q.049-.079.086-.158c.402-.84-.048-1.665-.569-2.621-.128-.236-.26-.478-.381-.726l-.011-.019L94.22 45.164a1.9 1.9 0 0 0-1.358-1.002 1.9 1.9 0 0 0-1.624.45l-5.07 4.219q.06 0 .123.006c.099.007.2.02.312.041h.007q.012.001.027.007a2.447 2.447 0 0 1 .474.147q.07.028.15.066a3 3 0 0 1 .431.27l.024.018c.047.04.085.07.123.104a2 2 0 0 1 .18.182q.044.045.08.095.044.053.083.108.05.063.09.136a1 1 0 0 1 .039.06zm16.707 19.397-.003.004zm-.166-.675'
      />
      <path
        fill='#000'
        d='M105.153 69.259a.315.315 0 0 1-.194-.566l.014-.011a.32.32 0 0 1 .447.057.315.315 0 0 1-.058.442l-.014.011a.32.32 0 0 1-.195.067M80.189 40.216a.316.316 0 0 1-.21-.554l.038-.033a.32.32 0 0 1 .45.028.314.314 0 0 1-.03.446l-.038.033a.32.32 0 0 1-.21.08'
      />
    </g>
    <defs>
      <clipPath id='0eb9a396699f3cce5d70c2900cdcbb9f__a'>
        <path fill='#fff' d='M10 6h100.404v140H10z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightDiversifiedPortfolioIcon);
export default ForwardRef;
