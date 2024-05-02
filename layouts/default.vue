<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
:root {
  scroll-behavior: smooth;
}
@font-face {
  font-family: 'kufi';
  src: url('/fonts/Droid.Arabic.Kufi_DownloadSoftware.iR_.ttf');
  src: url('/fonts/Droid.Arabic.Kufi_DownloadSoftware.iR_.ttf?#iefix') format('embedded-opentype'),
     url('/fonts/Droid.Arabic.Kufi_DownloadSoftware.iR_.ttf') format('ttf'),
     url('/fonts/Droid.Arabic.Kufi_DownloadSoftware.iR_.ttf') format('truetype'),
     url('/fonts/Droid.Arabic.Kufi_DownloadSoftware.iR_.ttf#kufi') format('svg');
  font-style: normal;
  font-weight: normal;
}
html {
  font-family: 'kufi',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
