import "./sidebar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBullseye,
//   faCalendar,
//   faEnvelopeSquare,
//   faUserCircle,
//   faUserGear,
// } from "@fortawesome/free-solid-svg-icons";
import Picture from "../picture/Picture";
import {picList} from "../DataPic"

const Sidebar = () => {
  
  return (
    <div className="sidebar">
      <div className="sidearContainer">
        <h4 className="sideTitle">Tools</h4>
        <div className="sidebarItem">
          {picList.map((picture)=>{
            return <Picture url={picture.url} id={picture.id} key={picture.id} />
          })}
          {/* <FontAwesomeIcon
            icon={faEnvelopeSquare}
            className="envIcon"
            ref={drag}
            style={{ border: isDragging ? "3px solid green" : "0px" }}
          />
          <FontAwesomeIcon icon={faCalendar} className="clIcon" />
          <FontAwesomeIcon icon={faBullseye} className="blIcon" />
          <FontAwesomeIcon icon={faUserCircle} className="blIcon" />
          <FontAwesomeIcon icon={faUserGear} className="userIcon" /> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
