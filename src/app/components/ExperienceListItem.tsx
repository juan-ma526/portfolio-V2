interface Props {
  title: string;
  desc: string;
  date: string;
  place?: string;
  direccion: string;
}

export const ExperienceListItem = ({ title, desc, date, place, direccion }: Props) => {
  return (
    <div className="flex justify-between h-48">
      {/* lado izq */}
      {direccion === "left" ? (
        <div className="w-1/3 ">
          {/* estudio titulo*/}
          <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">{title}</div>
          {/* estudio desc */}
          <div className="p-3 text-sm italic">{desc}</div>
          {/* fecha estudio */}
          <div className="p-3 text-flush-orange-600 text-sm font-extrabold">{date}</div>
          {/*compania/lugar */}
          <div className="p-1 text-flush-orange-500  border-2 border-flush-orange-600 bg-white rounded text-sm font-semibold w-fit">
            {place}
          </div>
        </div>
      ) : (
        <div className="w-1/3 "></div>
      )}

      {/* lado centro */}
      <div className="w-1/6 flex justify-center">
        {/* Linea */}
        <div className="w-1 h-full bg-white rounded relative">
          {/* Circulo */}
          <div className="absolute w-5 h-5 rounded-full ring-4 ring-flush-orange-600 bg-white -left-2"></div>
        </div>
      </div>
      {/*lado derecho */}
      {direccion === "right" ? (
        <div className="w-1/3 ">
          {/* estudio titulo*/}
          <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">{title}</div>
          {/* estudio desc */}
          <div className="p-3 text-sm italic">{desc}</div>
          {/* fecha estudio */}
          <div className="p-3 text-flush-orange-600 text-sm font-extrabold">{date}</div>
          {/* fecha compani */}
          <div className="p-1 text-flush-orange-500  border-2 border-flush-orange-600 bg-white rounded text-sm font-semibold w-fit">
            {place}
          </div>
        </div>
      ) : (
        <div className="w-1/3 "></div>
      )}
    </div>
  );
};
