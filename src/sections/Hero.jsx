import { Button, Container } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="bg-body-tertiary py-5">
      <Container>
        <div className="d-flex justify-content-between align-items-center flex-lg-row flex-column">
          <article data-aos="fade-right">
            <h1 className="fw-bold">
              <p>Lessons and insights</p>
              <span className="text-success">from 8 years</span>
            </h1>
            <p className="fs-6">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <Button type="button" className="btn btn-success btn-lg mt-4">
              Register
            </Button>
          </article>
          <img src="/HeroImg.svg" className="object-fit-contain" alt="Hero" data-aos="fade-left" />
        </div>
      </Container>
    </section>
  )
}

export default Hero