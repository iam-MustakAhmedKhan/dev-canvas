import Content from "./Content"

const Contents = ({ allData }) => {
  return (
    <div className="grid grid-cols-2 items-center gap-10 py-12">
      {allData.length > 0 &&
        allData.map((data) => <Content key={data.id} data={data} />)}
    </div>
  )
}

export { Contents }
