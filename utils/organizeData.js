const organizeData = (data = []) => {
  const organized = data.reduce((acc, curr) => {
    const firstLetter = curr.name[0].toUpperCase()

    if (firstLetter in acc) {
      acc[firstLetter].push(curr)
    } else {
      acc[firstLetter] = [curr]
    }

    return acc
  }, {})

  return organized
}

export { organizeData }
