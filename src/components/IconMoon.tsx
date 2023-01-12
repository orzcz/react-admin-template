import { theme } from "antd"

export default function IconMoon(props: any) {
  const {
    token: { colorIcon },
  } = theme.useToken()
  return (
    <svg
      viewBox="0 0 1024 1024"
      width="1em"
      height="1em"
      fill="currentColor"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3679">
      <path
        d="M512 85.333333l10.709333 0.213334a12.288 12.288 0 0 1 9.429334 19.370666c-22.656 31.914667-36.48 53.76-41.514667 65.621334a277.333333 277.333333 0 0 0 350.250667 367.701333l11.776-4.522667c15.701333-6.528 35.370667-18.346667 59.008-35.498666A17.024 17.024 0 0 1 938.666667 512c0 9.6-0.298667 19.157333-0.938667 28.586667l-1.152 14.08-0.853333 7.68-1.706667 12.885333C903.466667 780.885333 726.144 938.666667 512 938.666667 276.352 938.666667 85.333333 747.648 85.333333 512c0-210.218667 152.064-384.938667 352.170667-420.181333l14.378667-2.261334 10.112-1.322666 7.338666-0.810667c14.037333-1.365333 28.245333-2.090667 42.666667-2.090667zM394.24 191.530667l-7.125333 2.688A341.461333 341.461333 0 0 0 512 853.333333a341.461333 341.461333 0 0 0 320.469333-223.616A362.666667 362.666667 0 0 1 394.24 191.530667z"
        fill={props.color || colorIcon}
        p-id="3823"></path>
    </svg>
  )
}