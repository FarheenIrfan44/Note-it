import React from "react"
import { FaMagnifyingGlass } from "react-icons/fa6"
import { IoMdClose } from "react-icons/io"

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="w-60 sm:w-60 md:w-80 flex items-center px-2 bg-slate-100 rounded-full">
      <input
        type="text"
        placeholder="Search Notes..."
        className="w-full text-xs bg-transparent py-[12px] px-2 outline-none"
        value={value}
        onChange={onChange}
      />

      {value && (
        <IoMdClose
          className="text-[#12296c] text-xl cursor-pointer hover:text-black mr-2"
          onClick={onClearSearch}
        />
      )}

      <FaMagnifyingGlass
        className="text-[#12296c] text-xl cursor-pointer hover:text-black mr-2"
        onClick={handleSearch}
      />
    </div>
  )
}

export default SearchBar
