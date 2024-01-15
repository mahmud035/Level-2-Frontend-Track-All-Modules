import { MouseEvent, useRef } from 'react';
import { createPortal } from 'react-dom';
import cn from '../../utils/cn';

const Modal = ({ isOpen, onClose, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClose = (e: MouseEvent) => {
    // console.log('Clicked element =>', e.target);
    // console.log('containerRef =>', containerRef.current);
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={cn(
        'flex justify-center items-center fixed inset-0 bg-gray-500/70 invisible z-[999]',
        {
          visible: isOpen,
        }
      )}
      onClick={handleOutsideClose}
    >
      <div ref={containerRef} className="w-full max-w-sm bg-white rounded-md">
        {children}
        <Modal.CloseButton />
      </div>
    </div>,
    document.getElementById('portal') as Element
  );
};

const CloseButton = () => {
  return <button>Close Button</button>;
};

Modal.CloseButton = CloseButton;

export default Modal;
