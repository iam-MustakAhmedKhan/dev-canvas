export const getSingleData = (filename) => {
  const filePath = require(`../data/${filename}`)
  return filePath
}
