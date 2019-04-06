// @flow
import React, { useEffect } from 'react'

// exported from https://icomoon.io and adapted for React

type Props = {
  id: string,
  size: number,
  fill: string,
}

export default function Icon({ id, size, fill, ...props }: Props) {
  useEffect(() => {
    if (document.querySelector(`symbol#icon-${id}`) == null) {
      throw new Error(
        `Invalid prop \`id\` of value \`${id}\` provided to \`Icon\`, expected SVG symbol with id \`#icon-${id}\` to exist in the DOM.`,
      )
    }
  }, [id])
  return (
    <svg width={size} height={size} fill={fill} {...props}>
      <use xlinkHref={`#icon-${id}`} />
    </svg>
  )
}

Icon.defaultProps = {
  size: 25,
  fill: 'currentColor',
}

export function SvgDefs() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: 0,
        height: 0,
        overflow: 'hidden',
      }}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <symbol id="icon-arrow-left" viewBox="0 0 16 16">
          <title>leftwards arrow</title>
          <path d="M6.293 13.707l-5-5c-0.391-0.39-0.391-1.024 0-1.414l5-5c0.391-0.391 1.024-0.391 1.414 0s0.391 1.024 0 1.414l-3.293 3.293h9.586c0.552 0 1 0.448 1 1s-0.448 1-1 1h-9.586l3.293 3.293c0.195 0.195 0.293 0.451 0.293 0.707s-0.098 0.512-0.293 0.707c-0.391 0.391-1.024 0.391-1.414 0z" />
        </symbol>
        <symbol id="icon-calendar" viewBox="0 0 20 20">
          <title>calendar</title>
          <path d="M17 3h-1v2h-3v-2h-6v2h-3v-2h-1c-1.101 0-2 0.9-2 2v12c0 1.1 0.899 2 2 2h14c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2zM17 17h-14v-8h14v8zM6.5 1h-2v3.5h2v-3.5zM15.5 1h-2v3.5h2v-3.5z" />
        </symbol>
        <symbol id="icon-camera" viewBox="0 0 32 32">
          <title>camera</title>
          <path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z" />
        </symbol>
        <symbol id="icon-code" viewBox="0 0 20 20">
          <title>code</title>
          <path d="M5.719 14.75c-0.236 0-0.474-0.083-0.664-0.252l-5.060-4.498 5.341-4.748c0.412-0.365 1.044-0.33 1.411 0.083s0.33 1.045-0.083 1.412l-3.659 3.253 3.378 3.002c0.413 0.367 0.45 0.999 0.083 1.412-0.197 0.223-0.472 0.336-0.747 0.336zM14.664 14.748l5.341-4.748-5.060-4.498c-0.413-0.367-1.045-0.33-1.411 0.083s-0.33 1.045 0.083 1.412l3.378 3.003-3.659 3.252c-0.413 0.367-0.45 0.999-0.083 1.412 0.197 0.223 0.472 0.336 0.747 0.336 0.236 0 0.474-0.083 0.664-0.252zM9.986 16.165l2-12c0.091-0.545-0.277-1.060-0.822-1.151-0.547-0.092-1.061 0.277-1.15 0.822l-2 12c-0.091 0.545 0.277 1.060 0.822 1.151 0.056 0.009 0.11 0.013 0.165 0.013 0.48 0 0.904-0.347 0.985-0.835z" />
        </symbol>
        <symbol id="icon-cross" viewBox="0 0 20 20">
          <title>cross</title>
          <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" />
        </symbol>
        <symbol id="icon-github" viewBox="0 0 20 20">
          <title>GitHub</title>
          <path d="M13.18 11.309c-0.718 0-1.3 0.807-1.3 1.799 0 0.994 0.582 1.801 1.3 1.801s1.3-0.807 1.3-1.801c-0.001-0.992-0.582-1.799-1.3-1.799zM17.706 6.626c0.149-0.365 0.155-2.439-0.635-4.426 0 0-1.811 0.199-4.551 2.080-0.575-0.16-1.548-0.238-2.519-0.238-0.973 0-1.945 0.078-2.52 0.238-2.741-1.881-4.552-2.080-4.552-2.080-0.789 1.987-0.781 4.061-0.634 4.426-0.928 1.008-1.495 2.219-1.495 3.871 0 7.186 5.963 7.301 7.467 7.301 0.342 0 1.018 0.002 1.734 0.002s1.392-0.002 1.732-0.002c1.506 0 7.467-0.115 7.467-7.301 0-1.652-0.566-2.863-1.494-3.871zM10.028 16.915h-0.056c-3.771 0-6.709-0.449-6.709-4.115 0-0.879 0.31-1.693 1.047-2.369 1.227-1.127 3.305-0.531 5.662-0.531 0.010 0 0.020 0 0.029 0s0.018 0 0.027 0c2.357 0 4.436-0.596 5.664 0.531 0.735 0.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zM6.821 11.309c-0.718 0-1.3 0.807-1.3 1.799 0 0.994 0.582 1.801 1.3 1.801s1.301-0.807 1.301-1.801c0-0.992-0.582-1.799-1.301-1.799z" />
        </symbol>
        <symbol id="icon-globe" viewBox="0 0 20 20">
          <title>globe</title>
          <path d="M10 0.4c-5.295 0-9.601 4.307-9.601 9.6s4.306 9.6 9.601 9.6c5.293 0 9.6-4.307 9.6-9.6s-4.307-9.6-9.6-9.6zM18.188 10c0 1.873-0.636 3.6-1.696 4.98-0.3-0.234-0.619-0.867-0.319-1.523 0.303-0.66 0.382-2.188 0.312-2.783-0.066-0.594-0.375-2.025-1.214-2.039-0.838-0.012-1.413-0.289-1.911-1.283-1.033-2.068 1.939-2.465 0.906-3.609-0.289-0.322-1.783 1.322-2.002-0.869-0.014-0.157 0.135-0.392 0.336-0.636 3.244 1.090 5.588 4.157 5.588 7.762zM8.875 1.893c-0.196 0.382-0.713 0.537-1.027 0.824-0.684 0.619-0.978 0.533-1.346 1.127-0.371 0.594-1.567 1.449-1.567 1.879s0.604 0.936 0.906 0.838c0.302-0.1 1.099-0.094 1.567 0.070 0.469 0.166 3.914 0.332 2.816 3.244-0.348 0.926-1.873 0.77-2.279 2.303-0.061 0.225-0.272 1.186-0.285 1.5-0.025 0.486 0.344 2.318-0.125 2.318-0.471 0-1.738-1.639-1.738-1.936s-0.328-1.338-0.328-2.23c0-0.891-1.518-0.877-1.518-2.062 0-1.068 0.823-1.6 0.638-2.113-0.181-0.51-1.627-0.527-2.23-0.59 1.053-2.731 3.53-4.758 6.516-5.172zM7.424 17.77c0.492-0.26 0.542-0.596 0.988-0.613 0.51-0.023 0.925-0.199 1.5-0.326 0.51-0.111 1.423-0.629 2.226-0.695 0.678-0.055 2.015 0.035 2.375 0.689-1.295 0.861-2.848 1.363-4.514 1.363-0.899 0-1.765-0.149-2.575-0.418z" />
        </symbol>
        <symbol id="icon-linkedin" viewBox="0 0 24 28">
          <title>LinkedIn</title>
          <path d="M3.703 22.094h3.609v-10.844h-3.609v10.844zM7.547 7.906c-0.016-1.062-0.781-1.875-2.016-1.875s-2.047 0.812-2.047 1.875c0 1.031 0.781 1.875 2 1.875h0.016c1.266 0 2.047-0.844 2.047-1.875zM16.688 22.094h3.609v-6.219c0-3.328-1.781-4.875-4.156-4.875-1.937 0-2.797 1.078-3.266 1.828h0.031v-1.578h-3.609s0.047 1.016 0 10.844v0h3.609v-6.062c0-0.313 0.016-0.641 0.109-0.875 0.266-0.641 0.859-1.313 1.859-1.313 1.297 0 1.813 0.984 1.813 2.453v5.797zM24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-15c-2.484 0-4.5-2.016-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15c2.484 0 4.5 2.016 4.5 4.5z" />
        </symbol>
        <symbol id="icon-exclamation-mark" viewBox="0 0 16 16">
          <title>exclamation mark</title>
          <path d="M8 1.5c-1.736 0-3.369 0.676-4.596 1.904s-1.904 2.86-1.904 4.596c0 1.736 0.676 3.369 1.904 4.596s2.86 1.904 4.596 1.904c1.736 0 3.369-0.676 4.596-1.904s1.904-2.86 1.904-4.596c0-1.736-0.676-3.369-1.904-4.596s-2.86-1.904-4.596-1.904zM8 0v0c4.418 0 8 3.582 8 8s-3.582 8-8 8c-4.418 0-8-3.582-8-8s3.582-8 8-8zM7 11h2v2h-2zM7 3h2v6h-2z" />
        </symbol>
        <symbol id="icon-search" viewBox="0 0 20 20">
          <title>magnifying glass</title>
          <path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z" />
        </symbol>
        <symbol id="icon-twitter" viewBox="0 0 20 20">
          <title>Twitter</title>
          <path d="M17.316 6.246c0.008 0.162 0.011 0.326 0.011 0.488 0 4.99-3.797 10.742-10.74 10.742-2.133 0-4.116-0.625-5.787-1.697 0.296 0.035 0.596 0.053 0.9 0.053 1.77 0 3.397-0.604 4.688-1.615-1.651-0.031-3.046-1.121-3.526-2.621 0.23 0.043 0.467 0.066 0.71 0.066 0.345 0 0.679-0.045 0.995-0.131-1.727-0.348-3.028-1.873-3.028-3.703 0-0.016 0-0.031 0-0.047 0.509 0.283 1.092 0.453 1.71 0.473-1.013-0.678-1.68-1.832-1.68-3.143 0-0.691 0.186-1.34 0.512-1.898 1.861 2.285 4.644 3.787 7.781 3.945-0.064-0.277-0.097-0.564-0.097-0.861 0-2.084 1.689-3.773 3.774-3.773 1.086 0 2.067 0.457 2.756 1.191 0.859-0.17 1.667-0.484 2.397-0.916-0.282 0.881-0.881 1.621-1.66 2.088 0.764-0.092 1.49-0.293 2.168-0.594-0.506 0.758-1.146 1.422-1.884 1.953z" />
        </symbol>
        <symbol id="icon-user" viewBox="0 0 20 20">
          <title>user</title>
          <path d="M7.725 2.146c-1.016 0.756-1.289 1.953-1.239 2.59 0.064 0.779 0.222 1.793 0.222 1.793s-0.313 0.17-0.313 0.854c0.109 1.717 0.683 0.976 0.801 1.729 0.284 1.814 0.933 1.491 0.933 2.481 0 1.649-0.68 2.42-2.803 3.334-2.13 0.918-4.326 2.073-4.326 4.073v1h18v-1c0-2-2.197-3.155-4.328-4.072-2.123-0.914-2.801-1.684-2.801-3.334 0-0.99 0.647-0.667 0.932-2.481 0.119-0.753 0.692-0.012 0.803-1.729 0-0.684-0.314-0.854-0.314-0.854s0.158-1.014 0.221-1.793c0.065-0.817-0.398-2.561-2.3-3.096-0.333-0.34-0.558-0.881 0.466-1.424-2.24-0.105-2.761 1.067-3.954 1.929z" />
        </symbol>
      </defs>
    </svg>
  )
}
