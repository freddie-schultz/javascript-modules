import { encode } from './encode.js'
import { decode } from './decode.js'

const input = document.getElementById('plainTextArea')
const output = document.getElementById('codedText')

input.addEventListener('change', () => {
  const plainText = input.value
  const codedText = encode(plainText)
  output.textContent = codedText
})
