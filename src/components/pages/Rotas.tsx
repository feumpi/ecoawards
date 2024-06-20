import Header from "../layout/Header";

const Rotas = () => {
  const routes = [
    {
      name: "Parque Horto de Maruípe",
      distance: "5 km",
      difficulty: "Fácil",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/48/74/74/parque-municipal-horto.jpg?w=1100&h=-1&s=1",
    },
    {
      name: "Parque da Pedra da Cebola",
      distance: "10 km",
      difficulty: "Médio",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/d2/8f/da/lindo.jpg?w=1200&h=-1&s=1",
    },
    {
      name: "Parque Botânico da Vale",
      distance: "15 km",
      difficulty: "Difícil",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/ea/71/09/parque-botanico-vale.jpg?w=1100&h=-1&s=1",
    },
  ];

  return (
    <>
      <div className="flex flex-col">
        <Header
          title="Rotas"
          description="Que tal correr num lugar diferente? 🏃"
          back
        />

        {routes.map((route) => (
          <div key={route.name}>
            <RouteItem {...route} />
          </div>
        ))}
      </div>
    </>
  );
};

interface RouteItemProps {
  image: string;
  name: string;
  distance: string;
  difficulty: string;
}

const RouteItem = ({ name, distance, difficulty, image }: RouteItemProps) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md my-4">
      <img
        src={image}
        alt={name}
        className="rounded-t-lg h-48 w-full object-cover"
      />
      <div className="flex flex-col items-start gap-1 p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{distance}</p>
        <p className="text-sm text-white bg-primary rounded-lg p-1 px-2">
          {difficulty}
        </p>
      </div>
    </div>
  );
};

export default Rotas;
