export const getSubcategory = (contents) => {
  const data = contents.reduce((acc, curr) => {
    const sub = curr.subCategory

    if (!acc[sub]) {
      acc[sub] = {
        count: 1,
        ...curr,
      }
    } else {
      acc[sub].count++
    }
    return acc
  }, {})

  return data
}
