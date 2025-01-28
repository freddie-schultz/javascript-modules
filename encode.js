export function encode(plaintext) {
  let codedText = ''

  for (let i in plaintext) {
    let cc = plaintext.charCodeAt(i) + 9
    codedText += String.fromCharCode(cc)
    // console.log(cc + ' ' + codedText)
  }

  return codedText
}
