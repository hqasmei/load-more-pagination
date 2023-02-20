import React from "react"
import Card from "@/components/Card"

const Cards = ({ data }) => {
  return (
    <div className="m-4 grid grid-cols-1  gap-8 sm:grid-cols-2 md:grid-cols-3 ">
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            fullName={item.fullName}
            avatar={item.avatar}
            location={item.location}
          />
        )
      })}
    </div>
  )
}

export default Cards
