import { encode } from './encode.js'
import { decode } from './decode.js'

const input = document.querySelector('#plainTextArea')
const output = document.querySelector('#codedText')
const decodeButton = document.querySelector('#decodeButton')
const decodedTextOutput = document.querySelector('#decodedText')

input.addEventListener('change', () => {
  const plainText = input.value
  const codedText = encode(plainText)
  output.textContent = codedText
})

decodeButton.addEventListener('click', () => {
  const codedText = output.textContent
  const decodedText = decode(codedText)
  decodedTextOutput.textContent = decodedText
})
