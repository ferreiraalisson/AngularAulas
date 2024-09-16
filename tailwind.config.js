/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./node/module_modules/flowbite/**/*.js"], // lista de caminhos de arquivos onde o Tailwind deve procurar por classes CSS
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')], // importando o plugin flowbite
}

