import Image from "next/image";

interface dropProps {
  isOpen: boolean;
  handleToggle: () => void;
  btnName: string
}

const ButtonDrop: React.FC<dropProps> = ({ isOpen, handleToggle, btnName }) => {
  return (
    <button className="btn-dropmenu" onClick={handleToggle}>
      <span>{btnName}</span>
      <Image
        alt="arrow"
        width="24"
        height="24"
        className={isOpen ? "rotate-image rotate-90" : "rotate-image"}
        priority
        src="/vectorCat.svg"
      />
    </button>
  );
};

export default ButtonDrop;
