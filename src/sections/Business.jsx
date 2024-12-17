import Container from "react-bootstrap/Container";
import BusinessCard from "../components/BusinessCard";
import { business } from "../constants";

const Business = () => {
  return (
    <section className="bg-silver py-3">
      <Container>
        <div
          className="row row-cols-sm-2 align-items-center "
          data-aos="fade-right"
        >
          <article className="ps-5">
            <h1 className="fs-1 fw-bold text-dark-emphasis">
              Helping a local
              <p className="text-success mb-0"> business reinvent itself </p>
            </h1>
            <p className="t-light fs-6 ">
              We reached here with our hardwork and dedication.
            </p>
          </article>
          <div
            className=" row row-cols-sm-2  align-items-center"
            data-aos="zoom-in"
          >
            {business.map((status) => (
              <BusinessCard
                {...status}
                key={status.img}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Business
