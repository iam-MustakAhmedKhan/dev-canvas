import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
const SelectInput = () => {
  return (
      <Select>
          <SelectTrigger className="w-[180px] focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
              <SelectGroup>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="banana">Web Development</SelectItem>
                  <SelectItem value="blueberry">Ui/UX</SelectItem>
                  <SelectItem value="grapes">Web Design</SelectItem>
              </SelectGroup>
          </SelectContent>
      </Select>
  )
}

export { SelectInput }