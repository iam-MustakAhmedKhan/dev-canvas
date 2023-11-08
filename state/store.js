import { create } from "zustand";

const useStore = create((set) => ({
  isActive: false,
  searchValue: '',
  filterValue: 'All',
  contentFilter:'All',
  setActive: (isActive) => set(() => ({
    isActive: isActive
  })),
  setSearchValue: (value) => set(() => ({
    searchValue:value
  })),
  setFilterValue: (value) => set(() => ({
    filterValue:value
  })),
  setContentFilter: (value) => set(() => ({
    contentFilter:value
  }))
}));

export default useStore;