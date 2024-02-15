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
        className={isOpen ? "rotate-image rotate-90" : "rotate-image"}
        src="/vectorCat.svg"
        width={24}
        height={24}
        alt="arrow"
      ></Image>
    </button>
  );
};

export default ButtonDrop;
