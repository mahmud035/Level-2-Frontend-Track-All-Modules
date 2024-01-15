import Button from '../components/ui/Button';
import Header from '../shared/Header';

const Home = () => {
  return (
    <div>
      <h1 className="py-10">Home Page</h1>
      <Header />

      <div className="flex items-center justify-center w-full h-screen gap-4">
        <Button variant="solid">Solid Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button>Default Button</Button>
      </div>
    </div>
  );
};

export default Home;
