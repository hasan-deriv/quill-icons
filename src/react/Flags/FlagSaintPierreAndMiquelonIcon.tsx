import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagSaintPierreAndMiquelonIcon = (
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
      fill='#D22F27'
      fillRule='evenodd'
      d='M2 16a2 2 0 0 1-2-2v-4h8v6zm3.768-4.167c-.188.072-.361.05-.592-.213a.5.5 0 0 0-.15-.115q.054.013.118.032c.084.024.175.05.256.058.238.021.476-.152.476-.152s-.108-.086-.397-.165c-.236-.066-.632-.017-.77.17a2 2 0 0 0-.209.025l-.096.014c-.15.018-.324-.05-.324-.05s-.029-.354-.433-.354c-.354 0-.36.325-.36.325s-.181.087-.181-.168c0-.241-.183-.24-.352-.24h-.049c-.158 0-.198 0-.198.22 0 .163.065.19.13.216a.3.3 0 0 1 .08.044c-.001 0 .078.404.554.346.022.04.029.137.029.137s-.086.024-.223-.007c-.205-.047-.354-.072-.354.209 0 .227.192.22.486.208q.106-.005.228-.006c.418 0 .44-.26.44-.26s.195-.057.426-.043c-.058.05-.025.173.028.231.088.095.233.085.367.077q.057-.005.11-.005c.158 0 .23-.123.194-.289.086.062.258.023.381-.004.094-.021.16-.036.138.005-.05.093.073.324.39.194.318-.13.044-.512-.143-.44m-.592 1.41c.231.263.404.285.592.213s.461.31.143.44c-.317.13-.44-.101-.39-.195.022-.04-.044-.026-.138-.005-.123.028-.295.066-.38.005.035.166-.037.289-.196.289q-.051 0-.109.005c-.134.008-.279.017-.367-.077-.053-.058-.086-.18-.028-.231-.231-.014-.426.043-.426.043s-.022.26-.44.26q-.12.001-.228.005c-.294.012-.486.02-.486-.207 0-.282.15-.256.354-.21.137.032.223.008.223.008s-.007-.098-.029-.137c-.476.057-.555-.347-.555-.347a.3.3 0 0 0-.078-.043c-.066-.027-.131-.053-.131-.216 0-.22.04-.22.198-.22h.049c.17-.001.352-.002.352.24 0 .254.18.167.18.167s.007-.324.36-.324a.4.4 0 0 1 .434.354s.174.068.324.05l.096-.014c.065-.01.136-.022.21-.026.138-.186.533-.235.769-.17.289.08.397.166.397.166s-.238.173-.476.151c-.082-.007-.174-.033-.26-.058l-.114-.032a.5.5 0 0 1 .15.115'
      clipRule='evenodd'
    />
    <path
      fill='#FFCC4D'
      fillRule='evenodd'
      d='M5.176 11.62c.231.263.404.285.592.213s.461.31.143.44c-.317.13-.44-.1-.39-.194.022-.041-.044-.026-.138-.005-.123.027-.295.066-.38.005.035.165-.037.288-.196.288q-.051 0-.109.005c-.134.008-.279.018-.367-.077-.053-.058-.086-.18-.028-.23-.231-.015-.426.043-.426.043s-.022.26-.44.26q-.12 0-.228.005c-.294.011-.486.019-.486-.208 0-.281.15-.256.354-.21.137.032.223.008.223.008s-.007-.098-.029-.137c-.476.058-.555-.346-.555-.346a.3.3 0 0 0-.078-.044c-.066-.026-.131-.053-.131-.216 0-.22.04-.22.198-.22h.049c.17 0 .352-.001.352.24 0 .255.18.168.18.168s.007-.325.36-.325a.4.4 0 0 1 .434.354s.174.068.324.05q.045-.005.096-.014.098-.017.21-.026c.137-.186.533-.234.769-.17.289.08.397.166.397.166s-.238.173-.476.152c-.081-.007-.172-.034-.256-.058q-.063-.019-.118-.032a.5.5 0 0 1 .15.115m-1.479.032c0 .076-.06.138-.133.138a.135.135 0 0 1-.134-.138c0-.075.06-.137.134-.137.073 0 .133.062.133.137m-.133-.256c0 .034-.047.062-.103.062-.057 0-.103-.028-.103-.062s.046-.061.103-.061.103.027.103.061m.236 0c0 .034-.046.062-.103.062s-.103-.028-.103-.062.046-.061.103-.061.103.027.103.061'
      clipRule='evenodd'
    />
    <path
      fill='#000'
      d='M3.564 11.79a.135.135 0 0 0 .133-.138.135.135 0 0 0-.133-.137.135.135 0 0 0-.134.137c0 .076.06.138.134.138M3.564 11.396c0 .034-.047.062-.103.062-.057 0-.103-.028-.103-.062s.046-.061.103-.061.103.027.103.061M3.697 11.458c.057 0 .103-.028.103-.062s-.046-.061-.103-.061-.103.027-.103.061.046.062.103.062'
    />
    <path
      fill='#FFCC4D'
      fillRule='evenodd'
      d='M5.176 13.242c.231.264.404.286.592.214s.461.31.143.44c-.317.13-.44-.101-.39-.195.022-.04-.044-.026-.138-.005-.123.028-.295.066-.38.005.035.166-.037.289-.196.289q-.051 0-.109.005c-.134.008-.279.017-.367-.077-.053-.058-.086-.18-.028-.231-.231-.014-.426.043-.426.043s-.022.26-.44.26q-.12.001-.228.005c-.294.012-.486.02-.486-.207 0-.282.15-.256.354-.21.137.032.223.008.223.008s-.007-.098-.029-.137c-.476.057-.555-.347-.555-.347a.3.3 0 0 0-.078-.043c-.066-.027-.131-.053-.131-.216 0-.22.04-.22.198-.22h.049c.17-.001.352-.002.352.24 0 .254.18.167.18.167s.007-.324.36-.324a.4.4 0 0 1 .434.354s.174.068.324.05l.096-.014c.065-.01.136-.022.21-.026.138-.186.533-.235.769-.17.289.08.397.166.397.166s-.238.173-.476.151c-.082-.007-.174-.033-.26-.058l-.114-.032a.5.5 0 0 1 .15.115m-1.612.17a.135.135 0 0 0 .133-.136.135.135 0 0 0-.133-.137.135.135 0 0 0-.134.137c0 .075.06.137.134.137m-.103-.331c.056 0 .103-.028.103-.062 0-.033-.046-.061-.103-.061s-.103.028-.103.061c0 .034.046.062.103.062m.236 0c.057 0 .103-.028.103-.062 0-.033-.046-.061-.103-.061s-.103.028-.103.061c0 .034.046.062.103.062'
      clipRule='evenodd'
    />
    <path
      fill='#000'
      d='M3.697 13.276c0 .075-.06.137-.133.137a.135.135 0 0 1-.134-.137c0-.076.06-.137.134-.137s.133.06.133.137m-.133-.257c0 .034-.047.062-.103.062-.057 0-.103-.028-.103-.062 0-.033.046-.061.103-.061s.103.028.103.061m.236 0c0 .034-.046.062-.103.062s-.103-.028-.103-.062c0-.033.046-.061.103-.061s.103.028.103.061'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M0 6h8v4h-.463l-.01-.015c-.006-.232-.042-.412-.085-.412s-.079.179-.086.41l-.01.017H5.376l-.01-.015c-.006-.232-.042-.412-.086-.412s-.078.18-.086.412l-.01.015H3.273l-.01-.015c-.007-.232-.042-.412-.086-.412s-.079.18-.086.412L3.08 10H1.243l-.011-.016c-.007-.232-.042-.411-.086-.411s-.079.179-.086.41L1.05 10H0zm2.386 2.546-.185-.28c-.008-.232-.042-.412-.086-.412s-.079.18-.086.411l-.186.281c-.041.063-.007.115.078.115h.127c.016.104.04.172.066.172s.05-.069.066-.172h.127c.086.001.12-.051.079-.115m-.183-.98c0 .146-.033.145-.076.144h-.024c-.043 0-.077.002-.077-.143 0-.158.04-.286.089-.286s.088.128.088.286m.13.32c-.145 0-.144-.033-.143-.076v-.024c-.001-.043-.002-.077.143-.077.157 0 .285.04.285.089 0 .05-.128.089-.285.089m-.436 0c.145 0 .144-.033.143-.076v-.024c.001-.043.002-.077-.143-.077-.157 0-.285.04-.285.089 0 .05.128.089.285.089m2.585.66-.185-.28c-.008-.232-.042-.412-.086-.412s-.079.18-.086.411l-.185.281c-.041.063-.007.115.077.115h.128c.016.104.039.172.066.172.026 0 .05-.069.066-.172h.127c.085.001.12-.051.078-.115m-.183-.98c0 .146-.033.145-.076.144h-.024c-.043 0-.077.002-.077-.143 0-.158.04-.286.089-.286s.088.128.088.286m.13.32c-.145 0-.144-.033-.143-.076v-.024c-.001-.043-.002-.077.143-.077.157 0 .285.04.285.089 0 .05-.128.089-.285.089m-.436 0c.145 0 .144-.033.143-.076v-.024c.001-.043.002-.077-.143-.077-.157 0-.285.04-.285.089 0 .05.128.089.285.089m2.634.66-.185-.28c-.007-.232-.042-.412-.086-.412s-.079.18-.086.411l-.185.281c-.042.063-.008.115.077.115h.127c.016.104.04.172.066.172s.05-.069.066-.172h.128c.086.001.12-.051.078-.115m-.182-.98c0 .146-.033.145-.076.144h-.024c-.043 0-.077.002-.077-.143 0-.158.04-.286.089-.286s.088.128.088.286m.129.32c-.145 0-.144-.033-.143-.076v-.024c-.001-.043-.002-.077.143-.077.157 0 .285.04.285.089.001.05-.127.089-.285.089m-.435 0c.145 0 .144-.033.143-.076v-.024c.001-.043.002-.077-.143-.077-.157 0-.285.04-.285.089 0 .05.128.089.285.089M4.99 6.8c-.041.063-.007.115.077.115h.128c.016.103.039.171.066.171.026 0 .05-.068.066-.171h.127c.085 0 .119-.052.077-.115l-.184-.281a2 2 0 0 0-.014-.185h-.144a2 2 0 0 0-.014.185zm-2.094 0c-.041.063-.007.115.077.115h.128c.016.103.039.171.066.171.026 0 .05-.068.066-.171h.127c.085 0 .119-.052.077-.115l-.185-.281a2 2 0 0 0-.013-.185h-.144a2 2 0 0 0-.014.185zM1.235 9.285c0 .145-.034.144-.077.143h-.024c-.043.001-.077.002-.077-.143 0-.157.04-.285.089-.285s.089.128.089.285m.128.32c-.145 0-.144-.033-.143-.076v-.024c0-.043-.002-.077.143-.077.158 0 .286.04.286.089s-.128.088-.286.088m-.217-2.519c.027 0 .05-.069.066-.171h.128c.085 0 .119-.052.077-.116l-.185-.28a2 2 0 0 0-.014-.186h-.144a2 2 0 0 0-.013.185L1 6.61v.305h.08c.017.102.04.171.066.171m-.075 2.43V9.51c0-.036.001-.064-.071-.075V9.6c.072-.011.072-.04.071-.076zm2.195-.23c0 .144-.034.143-.077.142h-.024c-.043.001-.076.002-.076-.143 0-.157.04-.285.088-.285.049 0 .089.128.089.285m.129.32c-.145 0-.144-.034-.143-.077v-.024c-.001-.043-.002-.077.143-.077.157 0 .285.04.285.089s-.127.088-.285.088m-.435 0c.145 0 .144-.034.143-.077v-.024c.001-.043.002-.077-.143-.077-.157 0-.285.04-.285.089s.128.088.285.088m2.41-.32c0 .144-.034.143-.077.142H5.27c-.043.001-.076.002-.076-.143 0-.157.04-.285.088-.285.05 0 .089.128.089.285m.13.32c-.146 0-.145-.034-.144-.077v-.024c0-.043-.002-.077.143-.077.158 0 .286.04.286.089s-.128.088-.286.088m-.436 0c.145 0 .144-.034.143-.077v-.024c.001-.043.002-.077-.143-.077-.157 0-.285.04-.285.089s.128.088.285.088m2.466-.32c0 .144-.034.143-.077.142H7.43c-.043.001-.076.002-.076-.143 0-.157.04-.285.089-.285.05 0 .088.128.088.285m-.394-2.487c-.041.063-.007.115.077.115h.128c.016.103.039.171.066.171.026 0 .05-.068.066-.171H7.6c.032 0 .05-.013.066-.026v-.105l-.174-.265a2 2 0 0 0-.013-.185h-.144a2 2 0 0 0-.014.185zm.38 2.718v.012c0 .043-.002.076.143.076h.008v-.176l-.008-.001c-.145 0-.144.033-.143.076zm-.292.088c.145 0 .144-.033.143-.076v-.024c.001-.043.002-.077-.143-.077-.157 0-.285.04-.285.089s.128.088.285.088'
      clipRule='evenodd'
    />
    <path
      fill='#292F33'
      d='m7.537 10-.01-.015c-.006-.232-.042-.412-.085-.412s-.079.179-.086.41l-.01.017zM5.377 10l-.01-.015c-.006-.232-.042-.412-.086-.412s-.078.18-.086.412l-.01.015zM3.273 10l-.01-.015c-.007-.232-.042-.412-.086-.412s-.079.18-.086.412L3.08 10zM1.243 10l-.011-.016c-.007-.232-.042-.411-.086-.411s-.079.179-.086.41L1.05 10zM2.2 8.265l.186.281c.041.064.007.116-.079.115H2.18c-.016.103-.04.172-.066.172s-.05-.068-.066-.172h-.127c-.085 0-.119-.052-.078-.115l.186-.28c.007-.233.042-.412.086-.412s.078.18.086.411M2.127 7.71c.043 0 .076.002.076-.143 0-.158-.039-.286-.088-.286s-.089.128-.089.286c0 .145.034.144.077.143h.024M2.19 7.81c-.001.043-.002.077.143.077.157 0 .285-.04.285-.089 0-.05-.128-.089-.285-.089-.145 0-.144.034-.143.077zM2.04 7.81c.001.043.002.077-.143.077-.157 0-.285-.04-.285-.089 0-.05.128-.089.285-.089.145 0 .144.034.143.077v.024M4.297 8.265l.185.281c.041.064.007.116-.078.115h-.127c-.016.103-.04.172-.066.172s-.05-.068-.066-.172h-.128c-.084 0-.118-.052-.077-.115l.185-.28c.007-.233.042-.412.086-.412s.078.18.086.411M4.223 7.71c.043 0 .076.002.076-.143 0-.158-.039-.286-.088-.286s-.089.128-.089.286c0 .145.034.144.077.143h.024M4.286 7.81c-.001.043-.002.077.143.077.157 0 .285-.04.285-.089 0-.05-.128-.089-.285-.089-.145 0-.144.034-.143.077v.024M4.136 7.81c.001.043.002.077-.143.077-.157 0-.285-.04-.285-.089 0-.05.128-.089.285-.089.145 0 .144.034.143.077v.024M6.442 8.265l.185.281c.042.064.008.116-.078.115H6.42c-.016.103-.039.172-.066.172-.026 0-.05-.068-.066-.172h-.127c-.085 0-.119-.052-.077-.115l.185-.28c.007-.233.042-.412.086-.412s.079.18.086.411M6.369 7.71c.043 0 .076.002.076-.143 0-.158-.04-.286-.088-.286-.049 0-.089.128-.089.286 0 .145.034.144.077.143h.024M6.431 7.81c-.001.043-.002.077.143.077.158 0 .286-.04.285-.089 0-.05-.128-.089-.285-.089-.145 0-.144.034-.143.077v.024M6.282 7.81c.001.043.002.077-.143.077-.157 0-.285-.04-.285-.089 0-.05.128-.089.285-.089.145 0 .144.034.143.077v.024M5.067 6.914c-.084 0-.118-.052-.077-.115l.185-.281a2 2 0 0 1 .014-.185h.144q.01.084.014.185l.184.28c.042.064.008.116-.077.116h-.127c-.016.103-.04.171-.066.171s-.05-.068-.066-.171zM2.973 6.914c-.084 0-.118-.052-.077-.115l.185-.281q.003-.101.014-.185h.144q.01.084.013.185l.185.28c.042.064.008.116-.077.116h-.127c-.016.103-.04.171-.066.171s-.05-.068-.066-.171zM1.158 9.428c.043.001.077.002.077-.143 0-.157-.04-.285-.089-.285s-.089.128-.089.285c0 .145.034.144.077.143zM1.22 9.529c0 .043-.002.076.143.076.158 0 .286-.039.286-.088 0-.05-.128-.089-.286-.089-.145 0-.144.034-.143.077zM1.212 6.915c-.016.102-.04.171-.066.171s-.05-.069-.066-.171H1V6.61l.06-.092q.004-.101.014-.185h.144q.01.083.014.186l.185.28c.042.064.008.116-.077.116zM1.071 9.509v.015c0 .036 0 .065-.071.076v-.166c.072.01.072.039.071.075M3.19 9.428c.042.001.076.002.076-.143 0-.157-.04-.285-.089-.285s-.088.128-.088.285c0 .145.033.144.076.143zM3.252 9.529c-.001.043-.002.076.143.076.158 0 .285-.039.285-.088 0-.05-.128-.089-.285-.089-.145 0-.144.034-.143.077zM3.103 9.529c.001.043.002.076-.143.076-.157 0-.285-.039-.285-.088 0-.05.128-.089.285-.089.145 0 .144.034.143.077zM5.293 9.428c.043.001.077.002.077-.143 0-.157-.04-.285-.089-.285s-.088.128-.088.285c0 .145.033.144.076.143zM5.356 9.529c0 .043-.002.076.143.076.158 0 .286-.039.286-.088 0-.05-.128-.089-.286-.089-.145 0-.144.034-.143.077zM5.207 9.529c.001.043.002.076-.143.076-.157 0-.285-.039-.285-.088 0-.05.128-.089.285-.089.145 0 .144.034.143.077v.024M7.453 9.428c.043.001.077.002.077-.143 0-.157-.039-.285-.088-.285-.05 0-.089.128-.089.285 0 .145.033.144.076.143zM7.213 6.914c-.084 0-.118-.052-.077-.115l.185-.281q.003-.101.014-.185h.144q.01.084.013.185l.175.265v.105a.1.1 0 0 1-.067.026h-.127c-.016.103-.04.171-.066.171s-.05-.068-.066-.171zM7.516 9.529v-.025c0-.043-.002-.075.143-.076h.008v.177h-.008c-.145 0-.144-.033-.143-.076M7.367 9.529c.001.043.002.076-.143.076-.157 0-.285-.039-.285-.088 0-.05.128-.089.285-.089.145 0 .144.034.143.077z'
    />
    <path
      fill='#D22F27'
      d='M0 2.75V2c0-.324.077-.63.214-.902L2.417 2.75zM0 4.25v.813l1.083-.813zM1.25 6h2V4.5zM4.75 6h2l-2-1.5zM8 5.063V4.25H6.917zM8 2.75V.938L5.583 2.75zM6.75 0h-2v1.5zM3.25 0H2q-.326.001-.62.098L3.25 1.5z'
    />
    <path
      fill='#009543'
      d='M8 .938V0H6.75l-2 1.5v1.25h.833zM8 5.063 6.917 4.25H4.75v.25l2 1.5H8zM1.25 6l2-1.5v-.25H1.083L0 5.063V6zM1.38.098c-.508.165-.927.53-1.166 1L2.417 2.75h.833V1.5z'
    />
    <path fill='#EEE' d='M3.25 0h1.5v2.75H8v1.5H4.75V6h-1.5V4.25H0v-1.5h3.25z' />
    <path
      fill='#fff'
      d='m8.3 11.518.001-.001c.31-.207.68-.452 1.376-.452.697 0 1.067.245 1.376.452h.002c.27.18.482.322.945.322s.675-.141.945-.321l.002-.001c.31-.207.679-.452 1.376-.452s1.066.245 1.376.452h.001c.27.18.482.322.945.322.464 0 .675-.141.945-.321l.002-.001c.31-.207.679-.452 1.376-.452s1.066.245 1.376.452h.001c.27.18.482.322.945.322.464 0 .675-.141.945-.321l.002-.001c.31-.207.679-.452 1.376-.452a.387.387 0 1 1 0 .774c-.464 0-.675.14-.945.32l-.002.002c-.31.206-.679.452-1.376.452s-1.066-.246-1.376-.452l-.001-.001c-.27-.18-.482-.321-.945-.321-.464 0-.675.14-.945.32l-.002.002c-.31.206-.679.452-1.376.452s-1.066-.246-1.376-.452l-.001-.001c-.27-.18-.482-.321-.945-.321-.464 0-.675.14-.946.32l-.001.002c-.31.206-.679.452-1.376.452s-1.066-.246-1.376-.452l-.002-.001c-.27-.18-.481-.321-.945-.321s-.674.14-.945.32l-.001.002c-.197.13-.418.278-.731.368V11.7c.103-.052.197-.115.3-.183'
    />
    <path
      fill='#61B2E4'
      fillRule='evenodd'
      d='M23.613 11.065c.212 0 .384.17.387.382V1.994A2.003 2.003 0 0 0 21.99 0H8v11.7c.103-.051.197-.114.3-.182l.001-.001c.31-.207.68-.452 1.376-.452.697 0 1.067.245 1.376.452h.002c.27.18.482.322.945.322q.149 0 .268-.019a.4.4 0 0 1-.17-.111L9 8.225a.387.387 0 0 1 .29-.644H12c.214 0 .387.173.387.387 0 .393.263.773.74 1.076.471.3 1.077.472 1.583.472.678 0 2.023-.139 3.297-.906l-1.069-.267a.39.39 0 0 1-.293-.375c0-2.032.814-3.718 2.108-4.58a.4.4 0 0 1 .215-.065h.387a.387.387 0 0 1 .346.56c-.367.734-.647 1.663-.787 2.503a6.4 6.4 0 0 0-.098 1.127q.007.29.046.466a5.8 5.8 0 0 0 1.308-1.733.39.39 0 0 1 .346-.214h.774c.214 0 .387.174.387.387 0 .85-.312 1.972-.76 2.966-.303.673-.688 1.334-1.117 1.828.218.087.389.2.544.304h.001c.27.18.482.322.945.322.464 0 .675-.141.945-.321l.002-.001c.31-.207.679-.452 1.376-.452m-7.957-7.677a.4.4 0 0 1 .215-.065h.387a.387.387 0 0 1 .346.56c-.367.734-.647 1.663-.787 2.503a6.4 6.4 0 0 0-.097 1.127c.005.333.052.553.11.669a.387.387 0 0 1-.44.548l-1.548-.387a.39.39 0 0 1-.294-.375c0-2.032.814-3.718 2.108-4.58m-2.882-.065c-.07 0-.14.02-.201.056a4.37 4.37 0 0 0-1.945 2.593.387.387 0 0 0 .28.477l1.324.33a.387.387 0 0 0 .476-.315c.14-.897.41-1.769.802-2.587a.387.387 0 0 0-.349-.554z'
      clipRule='evenodd'
    />
    <path
      fill='#61B2E4'
      d='M8 16h13.991c1.11 0 2.009-.895 2.009-1.994v-2.55a.387.387 0 0 1-.387.383c-.464 0-.675.14-.945.32l-.002.002c-.31.206-.679.452-1.376.452s-1.066-.246-1.376-.452l-.001-.001c-.27-.18-.482-.321-.945-.321-.464 0-.675.14-.945.32l-.002.002c-.31.206-.679.452-1.376.452s-1.066-.246-1.376-.452l-.001-.001c-.27-.18-.482-.321-.945-.321-.464 0-.675.14-.946.32l-.001.002c-.31.206-.679.452-1.376.452s-1.066-.246-1.376-.452l-.002-.001c-.27-.18-.481-.321-.945-.321s-.674.14-.945.32l-.001.002c-.197.13-.418.278-.731.368z'
    />
    <path
      fill='#F1B31C'
      d='M18.968 3.323a.4.4 0 0 0-.215.065c-1.294.862-2.108 2.548-2.108 4.58 0 .177.121.332.293.375l1.069.267c.291-.175.58-.383.855-.63a2.5 2.5 0 0 1-.046-.467 6.4 6.4 0 0 1 .098-1.127c.14-.84.42-1.77.787-2.503a.387.387 0 0 0-.346-.56z'
    />
    <path
      fill='#F1B31C'
      d='M20.516 6.032a.39.39 0 0 0-.346.214c-1.449 2.897-4.349 3.27-5.46 3.27a3.1 3.1 0 0 1-1.583-.472c-.477-.303-.74-.683-.74-1.076A.387.387 0 0 0 12 7.58H9.29a.387.387 0 0 0-.289.644l3.097 3.484q.07.079.17.111c.29-.044.465-.161.677-.302l.002-.001c.31-.207.679-.452 1.376-.452s1.066.245 1.376.452h.001c.27.18.482.322.945.322.464 0 .675-.141.945-.321l.002-.001c.31-.207.679-.452 1.376-.452.348 0 .614.06.832.148.43-.494.814-1.155 1.117-1.828.448-.994.76-2.115.76-2.966a.387.387 0 0 0-.387-.387z'
    />
    <path
      fill='#F1B31C'
      fillRule='evenodd'
      d='M15.656 3.388a.4.4 0 0 1 .215-.065h.387a.387.387 0 0 1 .346.56c-.367.734-.647 1.663-.787 2.503a6.4 6.4 0 0 0-.097 1.127c.005.333.052.553.11.669a.387.387 0 0 1-.44.548l-1.548-.387a.39.39 0 0 1-.294-.375c0-2.032.814-3.718 2.108-4.58M12.573 3.379a.4.4 0 0 1 .201-.056h.387a.387.387 0 0 1 .35.554 9.3 9.3 0 0 0-.803 2.587.387.387 0 0 1-.476.315l-1.324-.33a.387.387 0 0 1-.28-.477 4.37 4.37 0 0 1 1.945-2.593'
      clipRule='evenodd'
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
const ForwardRef = forwardRef(FlagSaintPierreAndMiquelonIcon);
export default ForwardRef;
