import { useState } from "react";
import Picture from "../picture/Picture";
import { useDrop } from "react-dnd";
import "./workSpace.css";
import { picList } from "../DataPic";

const WorkSspace = () => {
  const [workSpace, setWorkSpace] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImage(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));
  const addImage = (id) => {
    const picList = picList.filter((picture) => id === picture.id);
    setWorkSpace((workSpace) => [...workSpace, picList[0]]);
  };
  return (
    <div className="ws">
      {workSpace.map((picture) => {
        return <Picture url={picture.url} id={picture.id} key={picture.id} ref={drop}
        style={{ backgroundColor: isOver ? 'blue' : 'white' }} />;
      })}
    </div>
  );
};

export default WorkSspace;
