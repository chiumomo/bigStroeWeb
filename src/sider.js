import { Arrow } from "./element";
import Data from "./data";
import "./style";
import "./styles.css";
import { Link } from "react-router-dom";

const Sider = () => {
  return (
    <div className="col sideNavgation">
      <div style={{ backgroundColor: "white", padding: 10 }}>
        <div>
          {Data.map((field, key) => {
            // console.log("field", field);
            return (
              <div>
                <div className="listOpenBtn">
                  {field.area}
                  <Arrow />
                </div>
                <div>
                  {field.children.map((store, idx) => {
                    // console.log("store", store);
                    return (
                      <Link to={`/${store.id}`} className="storeLink">
                        {store.storeName}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sider;
