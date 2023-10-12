import { Ship } from "../graphql/__generated__/graphql";

const Space = ({ ship }: { ship: Ship }) => {
  const { image, name, type } = ship!;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          {/* some image not found in the data that's why i put the optional chaining */}
          {image ? (
            <img src={image} alt="Ship" />
          ) : (
            <img
              src="https://img.freepik.com/free-photo/shipping-industry-delivering-cargo-large-container-ship-generative-ai_188544-9112.jpg?w=2000"
              alt="Fallback Ship"
            />
          )}
          {/* some image not found in the data that's why i put the optional chaining */}
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline"> Type Name: {type}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Space;
