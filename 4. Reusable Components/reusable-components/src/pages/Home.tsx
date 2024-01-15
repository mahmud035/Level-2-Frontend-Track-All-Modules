import Button from '../components/ui/Button';
import Header from '../shared/Header';

const Home = () => {
  return (
    <div>
      <h1 className="py-10">Home Page</h1>
      <Header />

      <div className="flex items-center justify-center w-full h-screen gap-4">
        <Button variant="solid">Click</Button>
        <Button variant="outline">Click</Button>
        <Button variant="ghost">Click</Button>
      </div>
    </div>
  );
};

export default Home;
