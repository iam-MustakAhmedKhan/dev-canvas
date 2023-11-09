"use client"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import useStore from "@/state/store";
const SelectInput = ({allData}) => {
    const setFilterValue = useStore((state) => state.setFilterValue)
    const handleSelect = (value) => {
        setFilterValue(value)
    }
    
  return (
      <Select onValueChange={(value) => handleSelect(value)} >
          <SelectTrigger aria-label="Select" className="w-[180px] focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
              <SelectGroup>
                  <SelectItem value="All">All</SelectItem>
                  {
                      allData.map((data,i) => (
                          <SelectItem key={i} value={data.title}>{data.title}</SelectItem>
                      ))
                  }
              </SelectGroup>
          </SelectContent>
      </Select>
  )
}

export { SelectInput }