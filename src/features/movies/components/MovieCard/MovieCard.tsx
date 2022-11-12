interface Props {
  title: string
  poster: string
  year: string
  onClick: () => void
  id: string
}

export const MovieCard: React.FC<Props> = ({
  onClick,
  poster,
  title,
  year,
  id,
}) => {
  return (
    <section
      className="h-85 sm: m-10 w-40 flex-col rounded-lg bg-white md:w-full"
      key={id}
    >
      <div className="flex-col justify-between">
        <img
          className="rounded-lg md:w-full lg:h-full"
          src={poster}
          alt="movie-poster"
        />
        <div className="mt-5 ml-10 decoration-double">
          <p className="text-sm font-bold text-amber-700">{title}</p>
          <p className="font-20 text-md font-bold text-sky-500">{year}</p>
        </div>
        <div
          className="align-center mt-20 flex h-10 w-full	cursor-pointer justify-center rounded-br-lg
          bg-rose-600"
          onClick={onClick}
        >
          <p className="mt-1">Details</p>
        </div>
      </div>
    </section>
  )
}
