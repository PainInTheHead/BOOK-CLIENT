import Card from "@/components/Card/Card";
import { dataAboutBooks } from "../utils/Data";

const CardHolder = () => {
  return (
    <div className="catalog-content">
      {dataAboutBooks.map((book) => {
        return <Card key={book.id} {...book} />;
      })}
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
    </div>
  );
};

export default CardHolder;
