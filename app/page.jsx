"use client"
import React, { useEffect, useState } from "react"
import { generateFakeUsers } from "@/utils/generateFakeUsers"
import Cards from "@/components/Cards"
import Pagination from "@/components/Pagination"

export default function Home() {
  const [data, setData] = useState([])
  const [postsPerPage, setPostsPerPage] = useState(9)

  useEffect( () =>
  {
    const dataArr = generateFakeUsers(30)
    setData(dataArr)
  }, [])

  const lastPostIndex = postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = data.slice(firstPostIndex, lastPostIndex)
  
  return (
    <main className="mx-6 my-12 min-h-screen max-w-3xl items-center justify-center text-left md:mx-auto md:max-w-5xl">
      <Cards data={currentPosts} />
      <Pagination
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        setPostsPerPage={setPostsPerPage}
      />
    </main>
  )
}
