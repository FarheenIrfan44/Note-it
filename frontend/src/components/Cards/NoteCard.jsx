import React from "react"
import { FaTags } from "react-icons/fa6"
import { MdCreate, MdDelete, MdOutlinePushPin } from "react-icons/md"
import moment from "moment"

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onPinNote,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="border rounded-md p-4 bg-white hover:shadow-xl hover:-translate-y-2 transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          <div ><h6 className="text-[#12296c] text-lg  font-bold">{title}</h6></div>
          
          
        </div>

        <MdOutlinePushPin
          className={`icon-btn ${
            isPinned ? "text-black " : "text-slate-300"
          }`}
          onClick={onPinNote}
        />
      </div>

      <p className="text-sm text-slate-600 mt-4">{content?.slice(0, 50)}</p>

      <div className="flex items-center justify-between mt-4">
        <div className="text-xs text-slate-500">
          {tags.map((item) => `#${item} `)}
        </div>

        <div className="flex items-center gap-4 mt-4">
          <MdCreate
            className="icon-btn hover:text-black"
            onClick={onEdit}
          />

          <MdDelete
            className="icon-btn hover:text-red-500"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default NoteCard
