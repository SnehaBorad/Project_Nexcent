import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Pixelgrade = () => {
  return (
    <Container>
      <div className="d-flex flex-lg-row flex-column justify-content-lg-between align-items-center px-5 my-5">
        <img src="/pixelgrade.svg" alt="pixelgrade" data-aos="fade-right" className=" w-auto h-auto" />
        <article data-aos="fade-left" className="w-50">
          <h1 className="fw-bold text-dark-emphasis">
            <p className="mb-1">The unseen of spending three</p>
            years at
            <span className="text-success"> Pixelgrade</span>
          </h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            error similique architecto tempora, qui dignissimos eligendi
            incidunt molestiae laudantium fugiat animi repellat perspiciatis
            explicabo veritatis assumenda culpa necessitatibus totam quod?
          </p>
          <Button className="btn-success mt-4 btn-lg">Learn More</Button>
        </article>
      </div>
    </Container>
  );
};

export default Pixelgrade;
