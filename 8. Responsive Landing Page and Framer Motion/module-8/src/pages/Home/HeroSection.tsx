import macBook from '@/assets/images/mac-book.jpg';
import Container from '@/components/Container';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-64px)] place-content-center ">
      <div className="-ml-2">
        <h1 className="font-bold text-8xl">
          <span className="text-gray">Don't worry.</span>
          <br />
          <span className="text-dark-gray">We'll fix it.</span>
        </h1>
        <p>
          Welcome to <span>iRepair</span>, your one-stop place for all kinds of
          <span>Macbook repairs</span> and diagnostics.
        </p>
        <Button>Book a service</Button>
      </div>
      <div className="-mr-2">
        <img
          src={macBook}
          alt=""
          className="-rotate-[35deg] object-contain h-[90%]"
        />
      </div>
    </Container>
  );
};

export default HeroSection;
