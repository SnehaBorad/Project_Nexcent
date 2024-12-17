import { Container } from "react-bootstrap";
import { clientCard } from "../Constants";
import ManageCard from "../Components/ManageCard";

const Manage = () => {
  return (
    <Container className="py-5">
    <article data-aos="fade-down" className="fw-bold text-dark-emphasis text-center">
      <h1>Manage your entire community</h1>
      <h1> in a single system</h1>
      <p className="text-center mt-3">Who is Nextcent suitable for?</p>
    </article>
    <div data-aos="fade-right" className="d-flex justify-content-betwwen align-items-center mt-4 flex-sm-row flex-column">
      {clientCard.map((item) => (
        <ManageCard {...item} key={item.title} />
      ))}
    </div>
  </Container>
  )
}

export default Manage
