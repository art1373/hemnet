interface Props {
  poster: string
  onClick: () => void
}

export const MovieCard: React.FC<Props> = ({ onClick, poster }) => {
  return (
    <section className="h-85 sm: m-10 w-40 flex-col rounded-lg  bg-white md:w-full">
      <div className="flex-col ">
        <img
          className="rounded-t md:w-full lg:h-full"
          src={poster}
          alt="movie-poster"
        />

        <div
          className="align-center flex h-10 w-full	cursor-pointer justify-center rounded-br-lg
          bg-rose-600"
          onClick={onClick}
        >
          <p className="mt-1">Details</p>
        </div>
      </div>
    </section>
  )
}
