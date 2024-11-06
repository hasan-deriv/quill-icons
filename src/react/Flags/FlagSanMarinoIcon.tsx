import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagSanMarinoIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#fff'
      d='M22 0H2a2 2 0 0 0-2 2v6h8.658c-.11-.19-.19-.358-.19-.358s.178.204.415.258c.048.011.1.048.154.1h.104l-.033-.041c-.168-.205-.113-1.072-.113-1.072s.029.138.114.275c.08-.295.218-.61.218-.61s-.037.269.077.483q.021.046.025.096c.01-.066.024-.157.05-.27.058-.258.775-.748.775-.748s-.134.16-.177.363c.164-.13.307-.23.307-.23s-.145.174-.182.39q.18-.247.405-.453V5.79l-.035-.083a4 4 0 0 1-.172-.52c-.057-.263.395-.443.741-.39.168.027.388-.004.618-.084a.3.3 0 0 1-.018-.101c0-.132.09-.241.212-.264v-.164h-.101v-.09h.1V4h.09v.096h.11v.09h-.11v.162a.266.266 0 0 1 .218.265q0 .046-.014.088c.23.08.473.124.641.098.346-.054.798.126.741.39a3.8 3.8 0 0 1-.278.752v.223c.097.087.199.182.294.283q-.055-.09-.099-.153c-.097-.145-.133-.198.008-.198h.384c.071 0 .156-.021.235-.04.147-.037.278-.069.278.04v.353c0 .262.192.262.192.262s.105-.525.237-.262c.07.138.077.322.083.465.006.128.01.224.055.224.036 0 .048-.062.059-.12.018-.1.036-.196.168.016.153.245.084.433.035.567a.4.4 0 0 0-.035.13c0 .064-.055.174-.111.269h.333c.072-.048.123-.061.132 0H24V2a2 2 0 0 0-2-2'
    />
    <path
      fill='#fff'
      d='M9.578 8a.3.3 0 0 1 .074-.108.6.6 0 0 0 .083-.08 2.3 2.3 0 0 1 .214-.754c-.16.158-.348.3-.392.332a.1.1 0 0 1 .019.064.11.11 0 0 1-.119.111.1.1 0 0 1-.08-.05l-.027.098q.01.06.018.122a2 2 0 0 1 .014-.17h.075q-.054.195-.073.38v.02A.107.107 0 0 1 9.57 8zM14.02 6.968c.084.16.158.342.207.543.142.054.223.22.223.22s.084.143.141.145a2 2 0 0 0-.064-.31h.07c-.037-.056-.097-.09-.162-.129l-.029-.016a.105.105 0 0 1-.124-.023.11.11 0 0 1-.03-.092.6.6 0 0 1-.114-.169c-.056-.126-.09-.16-.118-.17M14.602 7.572c.004.026.016.13.016.29.015-.018.024-.059.024-.132a.3.3 0 0 0-.04-.158M11.826 5.105a6 6 0 0 1-.001-.294.27.27 0 0 0 .175.07c.08 0 .152-.037.2-.096l.001.101q.004.105.002.205a1 1 0 0 0-.075-.006c-.035 0-.062.034-.081.088-.02-.054-.046-.088-.082-.088a.5.5 0 0 0-.14.02'
    />
    <path
      fill='#fff'
      d='M9.412 7.358a.1.1 0 0 1 .056-.016.1.1 0 0 1 .077.034l.003.003a2 2 0 0 1 .031-.241q-.075.06-.152.119a1 1 0 0 1-.015.101M10.527 5.16c-.028-.13.325-.27.595-.229a1.3 1.3 0 0 0 .57-.058q0 .153.006.29-.066.043-.126.092l-.008.007c-.066.052-.111.04-.181.024a.8.8 0 0 0-.185-.024c-.115 0-.126.053-.136.099v.001c-.008.036-.015.068-.07.068-.093 0-.264.075-.345.113a4 4 0 0 1-.12-.383M12.906 4.931c.27-.041.623.1.595.23-.017.079-.06.216-.111.355a.9.9 0 0 0-.289-.087c-.055 0-.062-.032-.07-.068-.01-.046-.02-.099-.135-.099-.081 0-.14.014-.185.024-.07.017-.116.027-.181-.024l-.01-.007a1 1 0 0 0-.188-.126q.004-.123.004-.256.318.097.57.058'
    />
    <path
      fill='#5EB6E4'
      d='M9.141 8h-.104c.137.133.28.366.364.513a2 2 0 0 1-.028-.27A2 2 0 0 1 9.141 8'
    />
    <path
      fill='#5EB6E4'
      fillRule='evenodd'
      d='M8.658 8H0v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8h-8.402l.002.023c0 .053.04.094.08.134.079.078.156.155-.08.32-.193.135-.215.27-.23.365-.013.08-.022.133-.126.133-.134 0-.283.094-.404.17-.083.053-.154.097-.198.097-.025 0-.069.036-.116.076-.033.028-.069.058-.102.078a.11.11 0 0 1-.12.092c-.037.039-.038.068.03.068.085 0 .17-.09.251-.174.111-.116.214-.224.294-.078.076.14.11.112.144.085.028-.023.056-.045.107.02.114.147.229.94.114.621-.114-.318-.293-.318-.602-.318a4 4 0 0 0-.58.036q-.048.075-.1.15c.098.056.202.014.29-.021.086-.035.158-.064.198.006.025.044.04.087.054.123.03.086.046.128.138.024.09-.1.179-.064.261-.03.04.015.078.03.114.03.05 0 .034.033.01.08-.03.061-.073.148-.01.228q.04.05.09.1c.11.118.217.23.023.23a.7.7 0 0 1-.242-.054c-.105-.04-.18-.068-.246.055-.03.056-.051.122-.071.184l-.016.047.129.016.013.002c.105.014.191.026.241.026.128 0 .184.136.092.215s-.314.298-.092.298c.159 0 .163-.011.182-.069a.5.5 0 0 1 .04-.09c.076-.134.625-.14.664-.14a.1.1 0 0 1-.014-.054.11.11 0 0 1 .108-.112c.06 0 .109.05.109.112a.11.11 0 0 1-.109.112.11.11 0 0 1-.093-.055l-.14.188.146.182a.11.11 0 0 1 .087-.047c.06 0 .109.05.109.112a.11.11 0 0 1-.109.112.1.1 0 0 1-.077-.034.11.11 0 0 1-.025-.114c-.083-.04-.226-.103-.319-.103h-.258c.065 0 .423.236.315.338l-.019.018-.001.002c-.106.1-.244.23-.375.159a.8.8 0 0 1-.221-.178l-.109-.339s-.64-.165-.64-.05c0 .114 0 .17-.228.17-.126 0-.247-.021-.355-.04h-.002a1.3 1.3 0 0 0-.223-.03c-.088 0-.224.028-.325.048a1 1 0 0 1-.125.022c-.049 0-.308-.012-.13-.12.177-.107.218-.22.218-.22s-.422.063-.744.095l-.082.058c.385.27.719.524.719.57 0 .091-.453 0-.453 0s-.028-.09-.467-.422c-.44.331-.468.421-.468.421s-.453.092-.453 0c0-.045.334-.298.719-.57l-.091-.064c-.298-.033-.645-.087-.645-.087s.041.111.219.22c.177.107-.082.119-.13.119a1 1 0 0 1-.125-.022h-.002c-.1-.02-.236-.047-.324-.047-.062 0-.137.013-.222.028h-.003c-.108.02-.23.04-.355.04-.226 0-.228-.055-.228-.17 0-.114-.64.051-.64.051l-.108.338s-.083.103-.222.179c-.13.072-.27-.06-.376-.161l-.018-.018c-.108-.101.25-.338.315-.338h-.259c-.137 0-.384.136-.384.136l.197-.244-.142-.19s.588 0 .667.138a.5.5 0 0 1 .04.091c.019.057.023.07.182.07.222 0 0-.22-.092-.3-.093-.077-.036-.214.092-.214.049 0 .135-.012.241-.025.087-.012.187-.025.29-.035a.3.3 0 0 1-.049-.033c-.292-.247-.715-.271-.862-.259-.146.012.405-.203.405-.203l-.495-.22s1.111-.145 1.412 0c.179.086.309.19.385.26l.007-.009a4 4 0 0 1-.414-.478 4 4 0 0 1-.2-.21.46.46 0 0 1-.087-.246 4 4 0 0 1-.146-.311q.065.124.14.24c-.014-.245.032-.55.065-.725a3 3 0 0 1-.05-.194.3.3 0 0 1-.034.048 3 3 0 0 1-.25.245q.028.1.063.204a.11.11 0 0 1 .126-.031.11.11 0 0 1 .066.103.11.11 0 0 1-.126.11.11.11 0 0 1-.09-.11.1.1 0 0 1 .013-.055 2 2 0 0 1-.074-.203l-.022.017s0-.03.003-.08l-.027-.106a3 3 0 0 1-.339-.113c-.132-.052-.301-.304-.429-.525m.93 1.202s-.417-.664-.688-.663a.8.8 0 0 1-.477-.174s.44.756.721.801c.283.045.444.036.444.036m.318.656s-.502.187-.66 0c-.157-.187-.4-.397-.618-.397s.592-.23.99.133c.399.364.288.264.288.264m-1.782 1.349a.1.1 0 0 1-.042.009.11.11 0 0 1-.109-.112.11.11 0 0 1 .109-.112.11.11 0 0 1 .108.112.11.11 0 0 1-.066.103m0 .492a.1.1 0 0 1-.042.009.11.11 0 0 1-.109-.112.11.11 0 0 1 .109-.112.1.1 0 0 1 .077.034.1.1 0 0 1 .03.078.11.11 0 0 1-.065.103'
      clipRule='evenodd'
    />
    <path
      fill='#5EB6E4'
      d='M15.466 8h-.333c-.057.098-.116.18-.116.18s.045.156.227 0l.024-.021c.072-.062.142-.121.198-.159M9.57 8h.008l-.005.01zM13.485 10.449q-.171.164-.377.32h.075c.198 0 .656.147.55.269-.104.121.318.12.318.12s-.27-.29.057-.29q.08 0 .163.005c-.105-.094-.232-.11-.33-.124-.089-.012-.153-.02-.153-.08q.002-.052.009-.085c.011-.064.014-.077-.146-.077-.084 0-.135-.026-.166-.058M13.9 9.84c-.011-.026.011-.048.056-.065zM13.363 10.169q.016.046.031.082a.1.1 0 0 0-.063.033.1.1 0 0 0-.031.078q0 .023.008.042a4.4 4.4 0 0 1-.536.377 6 6 0 0 0 .59-.612M14.285 8.81c-.032.047-.08.12-.156.056q.058-.162.1-.332.033-.143.048-.278c.032.044.058.108.058.221v.567c0-.308-.013-.29-.05-.233M10.47 10.573a1.9 1.9 0 0 1-.47.295c.273.02.022.29.022.29s.423 0 .318-.12c-.102-.119.329-.262.534-.27a4 4 0 0 1-.243-.198.1.1 0 0 1-.082.038.1.1 0 0 1-.077-.033zM9.458 8.65v-.005h-.001zM9.445 8.593l.015.028c.01-.146.032-.342.075-.498a.106.106 0 0 1-.145-.01l-.002-.002-.001.128q.017.164.058.354M10.236 9.99a4 4 0 0 0 .034-.346 5.3 5.3 0 0 0 .882 1.057 4.4 4.4 0 0 1-.595-.419.1.1 0 0 0 .05-.057.1.1 0 0 0 .008-.042.11.11 0 0 0-.066-.103.1.1 0 0 0-.042-.009.1.1 0 0 0-.078.034.1.1 0 0 0-.026.044 4 4 0 0 1-.167-.158'
    />
    <path
      fill='#006923'
      fillRule='evenodd'
      d='M9.43 7.13a.3.3 0 0 0-.026-.095c-.114-.214-.077-.482-.077-.482s-.138.314-.218.61c-.085-.138-.114-.276-.114-.276s-.055.867.113 1.072c.167.206.278.295.278.295s.013-.36-.035-.64c.034-.118.065-.247.076-.357q.077-.059.152-.12a2 2 0 0 0-.032.26s.631-.458.647-.7a.9.9 0 0 1 .19-.45s-.143.098-.307.23c.043-.204.177-.364.177-.364s-.717.49-.776.749q-.036.169-.049.269m.03 1.49c-.069-.129-.368-.673-.577-.72-.237-.054-.414-.258-.414-.258s.372.785.618.883c.198.08.327.111.371.12a4 4 0 0 0-.008.18s.116-.085.294-.281c.178-.197.169-1.065.169-1.065s-.07.261-.26.413c-.128.102-.175.487-.193.729m-.56-.08c.271-.002.688.662.688.662s-.161.009-.444-.036c-.282-.045-.721-.8-.721-.8s.206.175.477.173m1.32 1.546s.161-.846-.08-1.043a.86.86 0 0 1-.284-.492s-.215.939 0 1.181c.214.243.364.354.364.354m-.973-.228c.157.187.66 0 .66 0l-.289-.264c-.398-.363-1.207-.133-.99-.133s.461.21.619.397m.371.993c.293.248.924-.34.924-.34s-.162-.197-.464-.342c-.3-.145-1.412 0-1.412 0l.495.22s-.55.215-.405.203c.147-.012.57.012.862.26'
      clipRule='evenodd'
    />
    <path
      fill='#C51918'
      fillRule='evenodd'
      d='M14.468 7.32a.11.11 0 0 1-.062.1.105.105 0 0 1-.124-.022.11.11 0 0 1-.03-.092.11.11 0 0 1 .108-.098c.06 0 .108.05.108.112m-5 .246a.11.11 0 0 0 .108-.112.11.11 0 0 0-.108-.112.11.11 0 0 0-.109.112.11.11 0 0 0 .109.112m.173 1.61a.11.11 0 0 0 .108-.111.11.11 0 0 0-.108-.112.11.11 0 0 0-.108.112.11.11 0 0 0 .108.111'
      clipRule='evenodd'
    />
    <path
      fill='#FECA00'
      d='M14.601 7.566h-.075a2.3 2.3 0 0 1 .084.526q.009-.128.008-.23c0-.16-.012-.264-.016-.29zM9.457 7.565h-.075s-.025.164-.014.428q.001.047.005.097.002-.06.008-.122.02-.195.076-.403M14.348 9.199a2.3 2.3 0 0 0 .25-.806q.017-.147.012-.301a3.5 3.5 0 0 1-.262 1.107'
    />
    <path
      fill='#FFD018'
      fillRule='evenodd'
      d='M11.953 4h.09v.096h.11v.09h-.11v.162a.266.266 0 0 1 .217.265.27.27 0 0 1-.06.17.26.26 0 0 1-.2.098.264.264 0 0 1-.26-.268c0-.132.092-.241.213-.264v-.164h-.101v-.09h.1z'
      clipRule='evenodd'
    />
    <path
      fill='#E31D1C'
      d='M12.128 5.085c-.035 0-.062.034-.081.088-.02-.054-.046-.088-.082-.088a.5.5 0 0 0-.14.02q.017.503.11.823l.01.033-.012.016.081-.003h.08l-.01-.013.01-.033q.094-.326.109-.837a1 1 0 0 0-.075-.006'
    />
    <path
      fill='#E8AA00'
      d='M11.055 6.52H10.9q-.242.222-.42.5c-.22.347-.396.829-.261 1.404-.001-.323.043-.78.146-1.085q.063-.19.173-.357a.63.63 0 0 1 .482-.297c.087-.005.153.026.181.039h.001l.031.002a.4.4 0 0 0 .167-.047l.066-.036.176-.124.133.138v-.584a1.7 1.7 0 0 1-.42.039q-.14 0-.301-.007zM12.37 6.519l.157.112.003.002a1 1 0 0 0 .083.046.4.4 0 0 0 .167.047h.025l.006-.001.009-.005a.33.33 0 0 1 .173-.035.628.628 0 0 1 .483.297q.108.167.172.357c.103.306.146.768.145 1.09.138-.577-.04-1.06-.26-1.41a2.5 2.5 0 0 0-.427-.504l-.204-.018v-.39a5 5 0 0 1-.23.005q-.285.001-.435-.043v.289l.001.296z'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='m8.389 11.35-.142-.191s.588 0 .667.138a.5.5 0 0 1 .04.091c.019.057.023.07.182.07.222 0 0-.22-.092-.3-.093-.077-.036-.214.092-.214.049 0 .135-.012.241-.025.169-.023.388-.052.59-.052.326 0 .055.292.055.292s.423 0 .318-.121c-.102-.119.329-.262.534-.27-.005 0 .005 0 0 0 .06 0 .208.005.36.011l.729.034.053.002.05-.002.133-.006a102 102 0 0 1 .909-.037l.075-.002c.198 0 .656.148.55.27-.104.121.318.12.318.12s-.27-.29.057-.29q.08 0 .163.005.147.01.284.027l.142.018c.105.014.191.026.241.026.128 0 .184.136.092.215s-.314.298-.092.298c.159 0 .163-.011.182-.069a.5.5 0 0 1 .04-.09c.076-.134.625-.14.664-.14a.1.1 0 0 1-.014-.054.11.11 0 0 1 .108-.112c.06 0 .109.05.109.112a.11.11 0 0 1-.109.112.11.11 0 0 1-.093-.055l-.14.188.146.182a.11.11 0 0 1 .087-.047c.06 0 .109.05.109.112a.11.11 0 0 1-.109.112.1.1 0 0 1-.077-.034.11.11 0 0 1-.025-.114c-.083-.04-.226-.103-.319-.103h-.258c.065 0 .423.236.315.338l-.019.018c-.106.101-.245.233-.376.161a.8.8 0 0 1-.221-.178l-.109-.339s-.64-.165-.64-.05c0 .114 0 .17-.228.17-.127 0-.25-.022-.357-.04a1.3 1.3 0 0 0-.223-.03c-.088 0-.224.028-.325.048a1 1 0 0 1-.125.022c-.049 0-.308-.012-.13-.12.177-.107.218-.22.218-.22s-.422.063-.744.095c-.096.009-.183.015-.247.017h-.025a4 4 0 0 1-.304-.024c-.298-.033-.645-.087-.645-.087s.041.111.219.22c.177.107-.082.119-.13.119a1 1 0 0 1-.125-.022c-.1-.02-.237-.047-.326-.047-.062 0-.137.013-.222.028-.108.02-.231.04-.358.04-.226 0-.228-.055-.228-.17 0-.114-.64.051-.64.051l-.108.338s-.083.103-.222.179c-.13.072-.27-.06-.376-.161l-.018-.018c-.108-.101.25-.338.315-.338h-.259c-.137 0-.384.136-.384.136zm-.307-.134a.11.11 0 0 0 .077-.034.1.1 0 0 0 .03-.078.11.11 0 0 0-.107-.112.11.11 0 0 0-.109.112.11.11 0 0 0 .109.112m0 .492a.1.1 0 0 0 .077-.034.1.1 0 0 0 .03-.078.11.11 0 0 0-.107-.112.1.1 0 0 0-.078.034.1.1 0 0 0-.03.078.11.11 0 0 0 .108.112'
      clipRule='evenodd'
    />
    <path
      fill='#000'
      d='M10.996 11.178v-.32h.053v.27h.15v.05zm.247.015v-.32h.057v.32zm.248.024h-.098v-.314l.095-.005q.051 0 .075.02.03.024.03.063 0 .036-.04.06.06.021.06.086 0 .045-.035.069a.13.13 0 0 1-.084.024zm-.039-.272v.075h.03q.05 0 .05-.042 0-.033-.05-.033zm0 .12v.104h.03q.035 0 .05-.012.022-.009.022-.039t-.015-.039q-.015-.014-.057-.014zm.296-.102v.08h.101v.052h-.101v.092h.149v.05h-.206v-.319h.2v.051zm.406.28-.084-.134h-.042v.135h-.053v-.32h.035l.048-.006q.126 0 .126.096 0 .03-.015.05a.1.1 0 0 1-.045.033l.098.147zm-.126-.184h.027l.048-.006q.02-.01.02-.04 0-.023-.014-.035a.2.2 0 0 0-.06-.009h-.02zm.355-.096v.269h-.06v-.269h-.1v-.048h.265v.048zm.323.224-.024-.063h-.11l-.021.063h-.063l.128-.322h.024l.132.322zm-.08-.224-.034.12h.075zm.19.2.018-.05q.036.02.066.02.05 0 .05-.036l-.011-.03-.048-.032-.05-.03-.022-.03-.003-.036q0-.039.024-.065a.13.13 0 0 1 .069-.018.2.2 0 0 1 .086.018l-.02.05a.1.1 0 0 0-.066-.024.05.05 0 0 0-.03.01q-.009.008-.009.03 0 .023.06.053.035.015.05.03l.018.03.006.041q0 .039-.03.063a.14.14 0 0 1-.08.027.11.11 0 0 1-.078-.027z'
    />
    <path
      fill='#000'
      fillRule='evenodd'
      d='m13.09 9.017-.046.089zM13.09 9.017l-.046.089z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M11.191 7.537s.27-.215.135-.215a1 1 0 0 1-.092-.01c-.089-.012-.194-.027-.261.028-.041.033-.068.093-.068.197v.467h-.04a.05.05 0 0 0-.032.012.04.04 0 0 0-.013.028q0 .017.013.029.013.011.032.012h.035l-.027.453-.051.004a.05.05 0 0 0-.032.016.04.04 0 0 0-.012.032l.003.033c.003.025.026.042.053.04l.032-.003-.013.217.078.155.02-.303h.24v.316a.3.3 0 0 1 .064.059l-.027-.472.027-.002a.05.05 0 0 0 .033-.016.04.04 0 0 0 .011-.031l-.003-.035a.04.04 0 0 0-.018-.029.05.05 0 0 0-.034-.01l-.023.002-.022-.426h.053a.05.05 0 0 0 .031-.012.04.04 0 0 0 .013-.029l-.003-.015-.01-.013-.014-.009-.017-.003h-.057v-.022l-.004-.106zm-.053.588h-.145v.173h.145z'
      clipRule='evenodd'
    />
    <path
      fill='#000'
      d='M13.032 8.729h-.24v.374c.075.006.176.005.24.003zM12.835 8.125h.144v.173h-.144zM12.132 8.729h-.24l-.001.374c.076.006.176.005.24.003zM11.19 8.729h-.24l-.019.303a.24.24 0 0 1 .26.013z'
    />
    <path
      fill='#FECA00'
      fillRule='evenodd'
      d='M11.152 10.7a4.4 4.4 0 0 1-.749-.55 3.6 3.6 0 0 1-.78-.975 3.8 3.8 0 0 0 1.008 1.395q.114.101.243.199c-.005 0 .005 0 0 0 .06 0 .208.004.36.01l.729.034.053.002.05-.002.133-.006c.154-.008.376-.018.573-.026a6 6 0 0 0 .59-.612c.341-.413.71-.98.867-1.636q.033-.142.048-.277a2.1 2.1 0 0 0-.05-.745 2.4 2.4 0 0 0-.583-1.064 5 5 0 0 0-.294-.283v-.223a3.803 3.803 0 0 0 .278-.753c.057-.263-.395-.443-.74-.39-.169.027-.413-.017-.642-.097a.3.3 0 0 1-.045.083l-.002.001.002.101q.004.105.002.205-.015.512-.11.837l-.01.033.01.013.01.014a.25.25 0 0 0 .134.081q.15.043.435.043.109 0 .23-.004v.39l.204.017q.247.224.427.505c.22.348.398.832.26 1.41.001-.323-.042-.785-.145-1.091a1.6 1.6 0 0 0-.172-.357.63.63 0 0 0-.483-.297.33.33 0 0 0-.173.035l-.01.005h-.005l-.025.001a.4.4 0 0 1-.167-.047 1 1 0 0 1-.083-.046l-.003-.002-.157-.112-.132.135V6.07a.25.25 0 0 1-.135-.081l-.01-.014h-.079l-.081.003-.009.01q-.042.059-.148.086v.584l-.133-.138-.176.124-.066.036a.4.4 0 0 1-.167.047l-.03-.002h-.002c-.027-.013-.094-.044-.18-.039a.63.63 0 0 0-.482.297 1.6 1.6 0 0 0-.174.357c-.102.306-.147.762-.146 1.085-.135-.575.04-1.057.261-1.405q.178-.277.42-.498h.154v-.416c.109.005.207.008.302.007q.27.002.42-.039.105-.028.147-.085l.009-.011.011-.016-.009-.033a3.4 3.4 0 0 1-.11-.823 6 6 0 0 1 0-.294l-.01-.01a.3.3 0 0 1-.056-.087c-.23.08-.45.11-.618.085-.346-.054-.798.126-.74.39a4 4 0 0 0 .206.602v.392a3 3 0 0 0-.503.597c-.263.414-.493 1.022-.318 1.753.168.704.58 1.306.94 1.725.13.15.282.306.426.443m1.068-.302-.068.092h-.29a20 20 0 0 1-.645-.955 6.911 6.911 0 0 1-.394-.72c-.109-.238-.163-.42-.163-.528 0-.297.052-.583.128-.8q.045-.134.12-.253a.3.3 0 0 1 .07-.076l.054-.02q.03.011.061.02.062.015.141.015c.144 0 .275-.05.36-.09.057.04.146.09.28.09q.069 0 .133-.025a.4.4 0 0 0 .133.025.47.47 0 0 0 .28-.09c.085.04.216.09.36.09a.6.6 0 0 0 .202-.035q.019.005.054.02c.003.002.03.017.07.076a1 1 0 0 1 .08.152q.02.046.04.101c.076.217.128.503.128.8 0 .108-.054.29-.164.529a9 9 0 0 1-.146.29 8 8 0 0 1-.248.429q-.271.443-.576.863M10.527 5.16c-.028-.13.325-.27.595-.229a1.3 1.3 0 0 0 .57-.058q0 .153.006.29.018.452.1.76c-.061.033-.223.054-.442.055q-.168 0-.336-.01l-.172-.008a1 1 0 0 1-.047-.07 3.568 3.568 0 0 1-.274-.73m2.379-.229c.27-.041.623.1.595.23-.017.079-.06.216-.111.355l-.054.14a2 2 0 0 1-.109.234 1 1 0 0 1-.042.064l-.177.015a5 5 0 0 1-.336.009c-.219 0-.38-.022-.443-.054q.087-.321.103-.795.004-.123.004-.256.318.097.57.058'
      clipRule='evenodd'
    />
    <path
      fill='#FECA00'
      d='M12.459 11.96s.453.091.453 0c0-.046-.334-.3-.719-.57q.04-.03.082-.059c-.096.01-.183.017-.247.018h-.025a4 4 0 0 1-.304-.024l.09.065c-.384.27-.718.524-.718.57 0 .091.453 0 .453 0s.029-.09.468-.422c.438.331.467.421.467.421'
    />
    <path
      fill='#8FC753'
      d='m12.152 10.49.068-.092q.304-.42.576-.863c.083-.132.175-.292.248-.43l-.012.001a2 2 0 0 1-.24-.003c-.051-.004-.091-.011-.104-.024l-.131.26c-.05.09-.103.159-.17.159a.1.1 0 0 1-.064-.025c-.037-.036-.052-.106-.069-.181-.014-.064-.029-.133-.058-.188a3 3 0 0 1-.305 0 .4.4 0 0 1-.088-.016q-.019-.007-.019-.018l-.062.188-.007.02c-.041.115-.079.22-.182.22-.117 0-.147-.09-.182-.195a.6.6 0 0 0-.096-.2.3.3 0 0 0-.094-.076.24.24 0 0 0-.23.005c.074.137.204.371.287.503.167.273.458.695.644.955z'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M13.075 7.313c-.143-.021-.33-.048-.33.224v.467h-.04a.05.05 0 0 0-.031.012.04.04 0 0 0-.013.028q0 .017.013.029.013.011.032.012h.035l-.027.453-.051.004a.05.05 0 0 0-.033.016.04.04 0 0 0-.011.032l.003.033c.003.025.026.042.052.04l.033-.003c-.012.207-.019.397-.019.419.012.013.053.02.103.024V8.73h.24v.377h.013l.046-.089-.021-.385.027-.002.018-.005.015-.01.01-.015q.002-.01.001-.017l-.004-.035a.04.04 0 0 0-.017-.028.05.05 0 0 0-.034-.01l-.023.001-.022-.426h.053a.05.05 0 0 0 .031-.012.04.04 0 0 0 .013-.029q0-.015-.013-.028a.05.05 0 0 0-.031-.012h-.057l-.004-.128v-.34s.11-.087.155-.15l-.03-.065zm-.096.812h-.144v.173h.144zM12.133 7.537s.27-.215.134-.215a1 1 0 0 1-.092-.01c-.143-.02-.33-.047-.33.225v.467h-.04a.05.05 0 0 0-.03.012l-.01.013a.04.04 0 0 0 0 .03.04.04 0 0 0 .024.023l.017.003h.035l-.027.453-.051.004a.05.05 0 0 0-.033.016.04.04 0 0 0-.01.032l.002.033c.003.025.026.042.053.04l.032-.003c-.012.207-.023.388-.023.41q0 .01.02.018c.018.007.05.012.087.015V8.73h.24v.377c.038 0 .063-.002.065-.002l-.027-.472.027-.002a.05.05 0 0 0 .033-.015l.009-.015q.003-.01.002-.017l-.003-.035a.04.04 0 0 0-.018-.029.05.05 0 0 0-.035-.01l-.022.002-.006-.122-.016-.304h.053a.05.05 0 0 0 .032-.012.04.04 0 0 0 .013-.029q0-.015-.013-.028a.05.05 0 0 0-.032-.012h-.056l-.005-.128zm-.054.588h-.145v.173h.145z'
      clipRule='evenodd'
    />
    <path fill='#000' d='M11.934 8.125h.145v.173h-.145z' />
    <path
      fill='#56C6F5'
      d='M11.326 7.322c.135 0-.135.215-.135.215v.339l.003.106.001.022h.057a.05.05 0 0 1 .031.012.04.04 0 0 1 .013.028q0 .008-.003.016l-.01.013-.014.008-.017.004h-.053l.022.426.023-.002q.02 0 .034.01.015.012.018.03l.003.034a.04.04 0 0 1-.011.031.05.05 0 0 1-.033.016l-.027.002.027.472c.05.06.074.132.096.199.035.105.064.195.182.195.103 0 .141-.105.182-.22l.007-.02.063-.188c0-.022.01-.203.022-.41l-.032.003c-.027.002-.05-.015-.053-.04l-.003-.033q0-.018.011-.032a.05.05 0 0 1 .033-.016l.051-.004.027-.453h-.035a.05.05 0 0 1-.032-.012l-.01-.013a.04.04 0 0 1 0-.031.04.04 0 0 1 .025-.022l.017-.003h.04v-.467c0-.272.186-.245.329-.224q.052.008.092.009c.135 0-.134.215-.134.215v.339q-.001.036.004.128h.056q.018 0 .032.012a.04.04 0 0 1 .013.028q0 .017-.013.029a.05.05 0 0 1-.032.012h-.053l.016.304.006.122.022-.002q.02 0 .035.01.015.012.018.03l.003.034q0 .008-.002.017l-.009.015-.015.01-.018.005-.027.002.027.472c.03.055.044.124.058.188.017.075.032.145.069.18a.1.1 0 0 0 .063.026c.068 0 .121-.068.17-.158l.132-.261c0-.022.007-.212.019-.419l-.033.003c-.026.002-.05-.015-.052-.04l-.003-.033q-.001-.018.011-.032a.05.05 0 0 1 .033-.016l.051-.004.027-.453h-.035a.05.05 0 0 1-.032-.012.04.04 0 0 1-.013-.029q0-.015.013-.028a.05.05 0 0 1 .032-.012h.04v-.467c0-.272.186-.245.329-.224l.082.008a1 1 0 0 0-.052-.087c-.04-.059-.066-.074-.069-.076l-.054-.02a.563.563 0 0 1-.201.036.9.9 0 0 1-.36-.091.47.47 0 0 1-.281.09.4.4 0 0 1-.133-.025.3.3 0 0 1-.133.025.47.47 0 0 1-.28-.09.85.85 0 0 1-.36.09.6.6 0 0 1-.202-.035l-.054.02a.3.3 0 0 0-.07.076 1.1 1.1 0 0 0-.12.253 2.5 2.5 0 0 0-.128.8c0 .108.054.29.164.529l.03.061.012-.217-.032.003c-.027.002-.05-.015-.053-.04l-.003-.033q0-.018.011-.032a.05.05 0 0 1 .033-.016l.051-.004.027-.453h-.035a.05.05 0 0 1-.032-.012.04.04 0 0 1-.013-.029q0-.015.013-.028a.05.05 0 0 1 .032-.012h.04v-.467c0-.104.027-.164.068-.197.067-.055.172-.04.26-.027z'
    />
    <path
      fill='#56C6F5'
      d='m13.096 8.63-.027.002.021.385c.031-.06.07-.14.1-.201.11-.239.164-.42.164-.529 0-.297-.052-.583-.128-.8l-.04-.101c-.044.063-.154.15-.154.15v.34l.004.128h.057q.018 0 .031.012a.04.04 0 0 1 .013.028q0 .017-.013.029a.05.05 0 0 1-.031.012h-.053l.022.426.023-.002q.018 0 .034.01.015.012.018.03l.003.034q0 .008-.002.017l-.009.015-.015.01z'
    />
    <path
      fill='#FECA00'
      d='M13.108 10.77q.206-.157.377-.321a3.8 3.8 0 0 0 .577-.701 3.6 3.6 0 0 0 .286-.55 3 3 0 0 1-.13.224 3.5 3.5 0 0 1-.319.419 5 5 0 0 1-.591.563 4.4 4.4 0 0 1-.536.377c.133-.005.253-.01.336-.011'
    />
    <path
      fill='#C51918'
      d='m9.367 8.078.006.012-.005-.097a.12.12 0 0 0 0 .085M9.468 8.147a.11.11 0 0 0 .108-.111.11.11 0 0 0-.108-.112.1.1 0 0 0-.087.044l-.008.122a.1.1 0 0 0 .053.048.1.1 0 0 0 .042.01'
    />
    <path fill='#FECA00' d='M9.557 8.993a3.6 3.6 0 0 1-.184-.9c-.011.333.057.64.173.917z' />
    <path
      fill='#C51918'
      d='M10.584 10.261a.11.11 0 0 0 .023-.12.11.11 0 0 0-.058-.06.1.1 0 0 0-.042-.01.1.1 0 0 0-.078.034.1.1 0 0 0-.026.044q.078.07.153.133a.1.1 0 0 0 .028-.02M10.508 10.599a.1.1 0 0 0 .042.01.1.1 0 0 0 .081-.039q-.084-.075-.16-.15a.11.11 0 0 0-.03.076.11.11 0 0 0 .066.103M13.45 10.26a.1.1 0 0 0-.056-.009.1.1 0 0 0-.063.033.1.1 0 0 0-.031.078q0 .023.008.042.078-.063.16-.135zM14.312 9.266a.11.11 0 0 0-.103.112q0 .023.009.044.05-.076.094-.156M14.317 9.49a.11.11 0 0 0 .108-.112.11.11 0 0 0-.106-.112 4 4 0 0 1-.086.182l.007.008a.1.1 0 0 0 .077.034M14.563 8.44a.1.1 0 0 0-.007.06l.014-.074zM14.663 8.595a.11.11 0 0 0 .109-.112.11.11 0 0 0-.067-.103.1.1 0 0 0-.042-.009.1.1 0 0 0-.064.022 2 2 0 0 1-.023.156q.032.044.087.046'
    />
    <path
      fill='#000'
      fillRule='evenodd'
      d='M12.132 9.106a2 2 0 0 1-.241-.003V8.73h.24zm.9 0a2 2 0 0 1-.24-.003V8.73h.24zm.058-.089-.046.089zm-.111-.892h-.144v.173h.144zm-1.841 0h-.145v.173h.145z'
      clipRule='evenodd'
    />
    <path
      fill='#E31D1C'
      d='m11.571 5.255-.007.007c-.066.052-.111.04-.181.024a.8.8 0 0 0-.185-.024c-.115 0-.126.053-.136.099v.001c-.008.036-.015.068-.07.068-.093 0-.264.075-.345.113a4 4 0 0 0 .154.347c.012.023.031.05.047.07l.172.009q.168.009.336.009c.219 0 .38-.022.443-.054a3.6 3.6 0 0 1-.101-.76c-.045.027-.085.06-.126.09zM13.102 5.43c-.056 0-.063-.033-.07-.069-.01-.046-.022-.099-.136-.099-.081 0-.14.014-.185.024-.07.017-.116.027-.181-.024l-.01-.007a1 1 0 0 0-.188-.126q-.016.473-.103.795c.062.032.224.053.443.054.104 0 .212-.003.336-.01l.177-.014a1 1 0 0 0 .042-.064c.032-.057.07-.138.109-.234q.028-.069.054-.14a.9.9 0 0 0-.289-.087'
    />
    <path
      fill='#093'
      d='M14.335 9.044c0-.563-.04-.036-.206-.178a4.5 4.5 0 0 1-.766 1.303q.016.046.031.082a.1.1 0 0 1 .074.018c.143-.125.29-.269.431-.428-.01-.027.013-.049.057-.066q.14-.166.262-.353a.1.1 0 0 1-.009-.044.11.11 0 0 1 .103-.112l.036-.067a3.6 3.6 0 0 0 .208-.698.12.12 0 0 1 .014-.075q.03-.183.04-.334a2 2 0 0 0-.019-.216c-.057-.002-.141-.146-.141-.146s-.081-.165-.223-.219c.056.226.08.476.05.745.032.044.058.108.058.221zM14.642 10.03c-.132.148-.107 0-.192-.147-.082-.142-.294.125-.489.015q-.195.28-.476.55c.03.033.082.06.166.06.214 0 .137.022.137.16 0 .127.283.026.483.205q.147.01.284.027c.025-.073.05-.161.087-.231.108-.2.237 0 .488 0 .25 0 0-.189-.113-.331-.112-.142.113-.307 0-.307-.112 0-.242-.148-.375 0'
    />
    <path
      fill='#093'
      d='M14.879 9.304c-.139-.252-.344.252-.544.252-.069 0-.068-.03-.032-.068a.1.1 0 0 1-.07-.04q-.075.15-.17.3a4 4 0 0 1 .58-.036c.308 0 .487 0 .601.319.115.318 0-.475-.114-.621-.115-.147-.113.146-.251-.106'
    />
    <path
      fill='#093'
      d='M14.602 7.572c.025.04.04.09.04.158 0 .073-.01.114-.024.133q0 .101-.008.229.006.154-.011.301a.1.1 0 0 1 .064-.022.11.11 0 0 1 .109.112.11.11 0 0 1-.11.112.1.1 0 0 1-.086-.046c-.043.233-.124.45-.228.65l-.029.067a.11.11 0 0 1 .105.13c.081-.05.174-.154.218-.154.108 0 .375-.267.602-.267s0-.25.356-.498c.356-.25 0-.297 0-.454 0-.155-.173 0-.356.157-.182.156-.227 0-.227 0s.227-.32.227-.45.21-.358 0-.696-.13.104-.227.104c-.096 0-.006-.427-.138-.69s-.237.263-.237.263-.192 0-.192-.262v-.353c0-.168-.311 0-.513 0h-.384c-.183 0-.068.09.091.351.1.105.194.218.267.333q.056.088.109.188c.029.01.062.043.118.17a.6.6 0 0 0 .114.168.11.11 0 0 1 .108-.098c.06 0 .108.05.108.112a.11.11 0 0 1-.062.1c.077.046.148.082.192.146h.003z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagSanMarinoIcon);
export default ForwardRef;
