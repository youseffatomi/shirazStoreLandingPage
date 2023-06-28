/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ["./**/*.html"],

  theme:{
    
    extend:{
      colors:{
      main:'#F4F4F4',
      primary:'#42C3A7',
      seconday:'#182748B2',
      tertiary:'#D9F3ED',
      black:'#182748'
    },
  },
  container: {
    padding: { DEFAULT: "12px" },
      screens: {
        max: "1366px",
      },
    center: true,
  },
  }
} 

