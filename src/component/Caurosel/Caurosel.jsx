import { carouselData } from "../../Data/Data_Caurosel";

const Carousel = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {carouselData.map((item) => (
          <div
            key={item.id}
            className={`carousel-item ${item.id === 1 ? "active" : ""}`}
          >
            <img src={item.image} className=" w-100" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
