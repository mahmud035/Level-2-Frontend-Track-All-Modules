import { useState } from 'react';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import Header from '../shared/Header';

const Home = () => {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  return (
    <div>
      <h1 className="py-10">Home Page</h1>
      <Header />

      <div className="flex items-center justify-center w-full h-screen gap-4">
        {/* 
        <Button variant="solid">Solid Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button>Default Button</Button>
       */}

        <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <h1>This is a Modal</h1>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
