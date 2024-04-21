/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      xsm :'230px',
      sm :'520px',
      md : '774px',
      mmd: '870px',
      lg : '1030px',
      xl : '1140px',
      xxl : '1320px'
    },
    center: true,

    extend: {

      fontFamily: {
        ibmplex: ['ibm-plex']
      },
      fontFamily: {
        fairplay: ['fairplay']
      },
      
      width: {
        '128': '32rem',
      }

    },
  },
  plugins: [],
}

