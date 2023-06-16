import { ArrowUp } from "./element";
import Data from "./data";
import "./style";
import "./styles.css";
import {
  StyledStoreInfo,
  StyledInfoStoreName,
  StyledStoreTag,
  StyledListBlock,
  StyledInformation
} from "./style";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="col storeInfo">
      <StyledInformation>
        <h2 className="height4rem">店舖資訊</h2>
      </StyledInformation>
      <div className="siteNav siteNavTop">
        {Data.map((field, site) => {
          console.log(field.id);
          const isHref = "#" + field.id;
          return (
            <div>
              <a href={`${isHref}`} className="siteNavBtn">
                {field.area}
              </a>
              <div className="retangle"></div>
            </div>
          );
        })}
        <div>
          <a href="#storeMap" className="siteNavBtn">
            商店地圖
          </a>
          <div className="retangle"></div>
        </div>
      </div>
      <div>
        {Data.map((field, key) => {
          return (
            <div>
              <div id={field.id} className="siteNav siteNavSub">
                {field.area}
                <ArrowUp />
              </div>
              <StyledStoreInfo>
                {field.children.map((store, idx) => {
                  // console.log("store", store);
                  return (
                    <StyledListBlock>
                      <Link to={`/${store.id}`}>
                        <StyledInfoStoreName>
                          {store.storeName}
                        </StyledInfoStoreName>
                        <StyledStoreTag>{store.storetag}</StyledStoreTag>
                      </Link>
                      <div>
                        電話：{store.tel}
                        <br />
                        地址：{store.address}
                        <br />
                        販售系列：{store.series}
                        <br />
                        營業時間：{store.openTime}
                      </div>
                    </StyledListBlock>
                  );
                })}
              </StyledStoreInfo>
            </div>
          );
        })}
      </div>
      <div id="storeMap" className="siteNav siteNavSub">
        商店地圖
        <ArrowUp />
      </div>
    </div>
  );
};

export default Main;
