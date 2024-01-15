import Header from '../shared/Header';

const Home = () => {
  return (
    <div>
      <h1 className="py-10">Home Page</h1>
      <Header />

      <div className="flex items-center justify-center w-full h-screen gap-4">
        <button className="btn btn-primary">This is a button</button>
        <button className="btn btn-danger">This is a button</button>
      </div>
    </div>
  );
};

export default Home;
