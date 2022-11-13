import type { Dispatch, SetStateAction } from 'react'

interface Props {
  setPage: Dispatch<SetStateAction<number>>
  page: number | string
}

export const Pagination: React.FC<Props> = ({ page, setPage }) => {
  return (
    <div className="fixed bottom-px	flex h-10 w-full justify-center gap-40 bg-white">
      <button
        onClick={() => {
          if (page === 1) return
          return setPage((prev) => prev - 1)
        }}
      >
        Previous page
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next page</button>
    </div>
  )
}
