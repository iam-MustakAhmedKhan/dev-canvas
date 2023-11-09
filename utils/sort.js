export const sort = (data) => {
  const sorted = data.sort((a, b) => {
    if (a.name > b.name) {
      return 1
    } else if (a.name < b.name) {
      return -1
    }
    return true
  })

  return sorted
}
