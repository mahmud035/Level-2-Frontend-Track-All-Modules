import macBook from '@/assets/images/mac-book.jpg';
import Container from '@/components/Container';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-64px)] place-content-center ">
      <div className="-ml-2">
        <h1 className="text-5xl font-bold lg:text-8xl text-nowrap">
          <span className="text-gray">Don't worry.</span>
          <br />
          <span>We'll fix it.</span>
        </h1>
        <p className="mt-10 max-w-[50ch] mb-5 text-lg text-dark-gray">
          Welcome to{' '}
          <span className="font-semibold text-primary-foreground">
            iRepair,{' '}
          </span>
          your one-stop place for all kinds of
          <span className="font-semibold text-primary-foreground">
            {' '}
            Macbook repairs{' '}
          </span>
          and diagnostics.
        </p>
        <Button>Book a service</Button>
      </div>
      <div className="w-3/4 mx-auto mt-10 lg:-mr-2 lg:w-full">
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
