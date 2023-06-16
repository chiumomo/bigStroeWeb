import Data from "./data";
import "./styles.css";
import {
  StyledInformation,
  StyledThisStoreName,
  StyledThisStoreInfo,
  StyledThisStoreInfoForm,
  StyledThisStoreMap,
  StyledFormTitle,
  StyledFormContent
} from "./style";
import { useParams } from "react-router-dom";
import LogoMini from "../img/logo_uq_01.png";

export default function StoreDetails() {
  const { areaId, storeId } = useParams();
  console.log(areaId);
  console.log(storeId);

  const path = `${areaId}/${storeId}`;
  const thisArea = Data.find((prod) => prod.id === areaId);
  const thisStore = thisArea.children.find((store) => store.id === path);

  return (
    <div className="col storeInfo">
      <StyledInformation>
        <h2>店舖資訊</h2>
      </StyledInformation>
      <StyledThisStoreName>
        <p>{thisStore.storeName}</p>
        <img alt="uniqlo" src={LogoMini} className="logoMini" />
      </StyledThisStoreName>
      <StyledThisStoreInfo>
        {/* map */}
        <StyledThisStoreMap>googlemap</StyledThisStoreMap>
        {/* map */}
        <StyledThisStoreInfoForm>
          <div
            className="row"
            style={{ height: "4rem", padding: "0", margin: "0" }}
          >
            <StyledFormTitle className="col-3">電話</StyledFormTitle>
            <StyledFormContent className="col-9">
              {thisStore.tel}
            </StyledFormContent>
          </div>
          <div
            className="row"
            style={{ height: "4rem", padding: "0", margin: "0" }}
          >
            <StyledFormTitle className="col-3">地址</StyledFormTitle>
            <StyledFormContent className="col-9">
              {thisStore.address}
            </StyledFormContent>
          </div>
          <div
            className="row"
            style={{ height: "4rem", padding: "0", margin: "0" }}
          >
            <StyledFormTitle className="col-3">營業時間</StyledFormTitle>
            <StyledFormContent className="col-9">
              {thisStore.openTime}
            </StyledFormContent>
          </div>
          <div
            className="row"
            style={{ height: "4rem", padding: "0", margin: "0" }}
          >
            <StyledFormTitle className="col-3">販售系列</StyledFormTitle>
            <StyledFormContent className="col-9">
              {thisStore.series}
            </StyledFormContent>
          </div>
        </StyledThisStoreInfoForm>
      </StyledThisStoreInfo>
    </div>
  );
}
