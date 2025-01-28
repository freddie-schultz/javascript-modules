export function decode(codedText) {
  let plainText = ''

  for (let i in codedText) {
    let codedCharacter = codedText.charCodeAt(i)
    let plainCharacter = String.fromCharCode(codedCharacter - 9)
    plainText += plainCharacter
  }

  return plainText
}
