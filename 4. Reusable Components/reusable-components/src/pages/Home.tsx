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
        {/* Button Component */}

        {/* 
        <Button variant="solid">Solid Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button>Default Button</Button>
       */}

        {/* Modal */}
        <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <h3>This is Modal Title</h3>
            <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>
          <p>This is a content</p>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
