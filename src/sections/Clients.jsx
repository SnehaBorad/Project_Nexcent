import Container from "react-bootstrap/Container";
import { clientImage } from "../constants";

const Clients = () => {
  return (
    <Container>
      <section className="text-center py-5">
        <article data-aos="fade-down">
          <h1 className="fw-bold">Our Clients</h1>
          <p>We have been working with some Fortune 500+ clients</p>
        </article>
        <div
          data-aos="zoom-in"
          className="mt-4 d-flex justify-content-between align-items-center flex-wrap "
        >
          {clientImage.map((item) => (
            <img
              key={item}
              src={item}
              alt="img"
              height={48}
              width={48}
              className="object-fit-contain"
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Clients;
