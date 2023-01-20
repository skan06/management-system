import "./picture.css";
import { useDrag } from "react-dnd";

const Picture = ({ url, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div>
      <img
        src={url}
        alt=""
        className="pic"
        ref={drag}
        style={{ border: isDragging ? "3px solid green" : "0px" }}
      />
    </div>
  );
};

export default Picture;
