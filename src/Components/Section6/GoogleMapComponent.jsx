import React, { useState, useCallback } from 'react';
import CnwLocations from "../JSONData/CnwData";
import SherriffLocations from "../JSONData/SherriffData";
import SamiosLocations from '../JSONData/SamiosData';
import SesLocations from '../JSONData/SesAustraliaData';
import BgwtData from '../JSONData/BgwtData';
import AirAdditionData from '../JSONData/AirAdditionData';
import AllBusinessLogos from '../Logos/AllBusinessLogos';
import CableMakersData from '../JSONData/CableMakersData';
import MMSData from '../JSONData/MMSData';
import ILAData from '../JSONData/ILAData';
import MapStyles from '../JSONData/MapStyles';
import RobertData from '../JSONData/RobertData';
import WEAData from '../JSONData/WEAData';

import { gsap } from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark 
} from '@fortawesome/free-solid-svg-icons';

import "./GoogleMapComponent.css";
import {
    GoogleMap,
    useLoadScript,
    MarkerF,
    InfoWindowF,
} from "@react-google-maps/api";


  const center = {
    lat: -28.44210,
    lng: 134.60103
  }

  const bgwLogo = "https://bgwgroup.com.au/Logos/bgwGroupLogoGGmap.png";
  const bgwGroupData = 
    {
      name: "BGW Head Office",
      address: "675 Macarcathur Ave",
      icon: bgwLogo,
      phone: "+61 7 3890 0927",
      email: "enquiries@bgwgroup.com.au",
      position: {
        lat: -27.43260,
        lng: 153.04473
      }
    }

  const libraries = ["places"]
  const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true,
  }

export const GoogleMapComponent = () => {
  const [bgwMarker, setBgwMarkers] = useState(true);
  const [selected, setSelected] = useState(null);
  const [selectCompany, setSelectCompany] = useState("all");
  const [individualBusiness, setIndividualBusiness] = useState(true)
  const pageWidth = window.innerWidth;
  const mapContainerStyle = {
    width: "100%",
    height: "inherit"
  }
  const onMapClick = useCallback(() => {
    setBgwMarkers(!bgwMarker)
  },[]);

  const showSideBar = () => {
    setIndividualBusiness(!individualBusiness);
    gsap.to(".google-map-sidebar-ctn", {
      display: "flex",
      ease: "Expo.out(0.9, 0.1)",
      width: "17%",
      duration: 1
    })
  }

  const closeSideBar = () => {
    setIndividualBusiness(!individualBusiness);
    gsap.to(".google-map-sidebar-ctn", {
      display: "none",
      ease: "Expo.out(0.9, 0.1)",
      width: "0",
      duration: 0.5
    })
  }

  const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries: libraries
    });
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  let zoomLevel = 3;
  (pageWidth > 678 && pageWidth < 1024) ? zoomLevel = 3.2 : zoomLevel;
  pageWidth > 1024 ? zoomLevel = 3.3 : zoomLevel;



  return (
    <div id="google-map-ctn">
        <div className="google-map-sidebar-ctn">
          {AllBusinessLogos.map((logo,i) => {
            return (
              <div className="google-map-sidebar-logos-ctn" key={i} onClick={() => setSelectCompany(i)}>
                <img src={logo} alt=""/>
              </div>
            )
          })}
              <div className="google-map-sidebar-logos-ctn sidebar-see-all" onClick={() => setSelectCompany('all')}>
                See all
              </div>
        </div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={zoomLevel}
          center={center}
          options={options}
          className="google-map"
        >
          <div className="select-company">
            {individualBusiness && <div className="select-individual-company" onClick={showSideBar}>
              Find business by Name
            </div>}
            {!individualBusiness && <div className="select-individual-company google-close-sidebar-btn" onClick={closeSideBar}>
              <FontAwesomeIcon icon={faXmark}  />
            </div>}
          </div>
          {/* BGW Group Center Location */}
          {selectCompany === "all" &&
            <MarkerF
              icon={{
                url: bgwGroupData.icon,
                scaledSize: new window.google.maps.Size(25,25),
                zIndex: 0
              }}
              position={bgwGroupData.position}
              onClick={onMapClick}
            >
              {!bgwMarker && 
                <InfoWindowF 
                  position={bgwGroupData.position}
                  onCloseClick={() => setBgwMarkers(!bgwMarker)}
                >
                  <div className='infowindow-ctn'>
                    <h1>{bgwGroupData.name}</h1>
                    <h2>{bgwGroupData.address}</h2>
                    <h2><span>Phone:</span> {bgwGroupData.phone}</h2>
                    <h2><span>Email:</span> {bgwGroupData.email}</h2>
                  </div>
                </InfoWindowF>}
            </MarkerF>
          }  
          {/* All Locations */}
          {selectCompany === "all" &&
            SamiosLocations.map((samios, index) => {
              return (
                <MarkerF
                  key={index}
                  icon={{
                    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                    fillColor: "#f6f6f9",
                    fillOpacity: 1,
                    scale: 3,
                    strokeColor: "#a80824",
                    strokeWeight: 1,
                  }}
                  onClick={() => setSelected(samios)}
                  position={samios.position}
                >
                </MarkerF>
              )
            })
          }

          
          {selectCompany === "all" &&
            CnwLocations.map((cnw, index) => {
              return (
                <MarkerF
                  key={index}
                  icon={{
                    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                    fillColor: "#1d1d1f",
                    fillOpacity: 1,
                    scale: 3,
                    strokeColor: "#d13939",
                    strokeWeight: 1,
                  }}
                  position={cnw.position}
                  onClick={() => setSelected(cnw)}
                >
                </MarkerF>
                )
              })
          }

          {selectCompany === "all" &&
            SherriffLocations?.map((sherriff, index) => {
              return (
                <MarkerF
                  key={index}
                  icon={{
                    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                    fillColor: "#1d1d1f",
                    fillOpacity: 1,
                    scale: 3,
                    strokeColor: "gold",
                    strokeWeight: 1,
                  }}
                  position={sherriff.position}
                  onClick={() => setSelected(sherriff)}
                >
                </MarkerF>
                )
              })
          }

          {selectCompany === "all" &&
            SesLocations?.map((ses, index) => {
              return (
                <MarkerF
                  key={index}
                  icon={{
                    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                    fillColor: "#9e2121",
                    fillOpacity: 0.8,
                    scale: 3,
                    strokeColor: "#3e53f7",
                    strokeWeight: 1.5,
                  }}
                  position={ses.position}
                  onClick={() => setSelected(ses)}
                >
                </MarkerF>
                )
            })
          }

          {selectCompany === 'all' && WEAData?.map((wea, index) => {
            return (
            <MarkerF
              key={index}
              icon={{
                path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                fillColor: "#f6f6f9",
                fillOpacity: 1,
                scale: 3,
                strokeColor: "#3730c7",
                strokeWeight: 1,
              }}
              position={wea.position}
              onClick={() => setSelected(wea)}
            >
            </MarkerF>
            )
          })}

          {selectCompany === "all" && BgwtData?.map((bgwt, index) => {
            return (
              <MarkerF
              key={index}
              icon={{
                path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                fillColor: "rgb(187,7,7)",
                fillOpacity: 1,
                scale: 3,
                strokeColor: "#030303",
                strokeWeight: 1,
              }}
              position={bgwt.position}
              onClick={() => setSelected(bgwt)}
            >
            </MarkerF>
            )
          })}

          {selectCompany === 'all' && AirAdditionData?.map((airAdd, index) => {
             return (
              <MarkerF
                key={index}
                icon={{
                  path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                  fillColor: "#3730c7",
                  fillOpacity: 0.8,
                  scale: 3,
                  strokeColor: "#f6f6f9",
                  strokeWeight: 1.5,
                }}
                position={airAdd.position}
                onClick={() => setSelected(airAdd)}
              >
              </MarkerF>
              )
          })}

          
          {selectCompany === 'all' && CableMakersData?.map((cable, index) => {
             return (
              <MarkerF
                key={index}
                icon={{
                  path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                  fillColor: "#9e2121",
                  fillOpacity: 1,
                  scale: 3,
                  strokeColor: "#3e53f7",
                  strokeWeight: 1.5,
                }}
                position={cable.position}
                onClick={() => setSelected(cable)}
              >
              </MarkerF>
              )
          })}

          {selectCompany === 'all' && MMSData?.map((mms, index) => {
            return (
              <MarkerF
                key={index}
                icon={{
                  path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                  fillColor: "#d13939",
                  fillOpacity: 1,
                  scale: 3,
                  strokeColor: "#f6f6f9",
                  strokeWeight: 1.5,
                }}
                position={mms.position}
                onClick={() => setSelected(mms)}
              >
              </MarkerF>
              )
          })}

          {selectCompany === "all" && ILAData?.map((ila, index) => {
             return (
              <MarkerF
                key={index}
                icon={{
                  path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                  fillColor: "#f6f6f9",
                  fillOpacity: 1,
                  scale: 3,
                  strokeColor: "gold",
                  strokeWeight: 1,
                  zIndex: 1
                }}
                position={ila.position}
                onClick={() => setSelected(ila)}
              >
              </MarkerF>
              )
          })}

          {selectCompany === "all" && RobertData?.map((robert, index) => {
            return (
              <MarkerF
                key={index}
                icon={{
                  path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                  fillColor: "#9e2121",
                  fillOpacity: 1,
                  scale: 3,
                  strokeColor: "gold",
                  strokeWeight: 1,
                }}
                position={robert.position}
                onClick={() => setSelected(robert)}
              >
              </MarkerF>
            )
          })}

          {/* End of All Locations */}

          {selectCompany == 0 && CnwLocations.map((cnw, index) => {
              return (
                <MarkerF
                  key={index}
                  icon={{
                    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                    fillColor: "#1d1d1f",
                    fillOpacity: 1,
                    scale: 3,
                    strokeColor: "#d13939",
                    strokeWeight: 1,
                  }}
                  position={cnw.position}
                  onClick={() => setSelected(cnw)}
                >
                </MarkerF>
                )
          })}

          {selectCompany == 1 && SamiosLocations.map((samios, index) => {
              return (
                <MarkerF
                  key={index}
                  icon={{
                    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                    fillColor: "#f6f6f9",
                    fillOpacity: 1,
                    scale: 3,
                    strokeColor: "#a80824",
                    strokeWeight: 1,
                  }}
                  onClick={() => setSelected(samios)}
                  position={samios.position}
                >
                </MarkerF>
              )
          })}
          
          {selectCompany == 2 && SherriffLocations?.map((sherriff, index) => {
            return (
            <MarkerF
              key={index}
              icon={{
                path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                fillColor: "#1d1d1f",
                fillOpacity: 1,
                scale: 3,
                strokeColor: "gold",
                strokeWeight: 1,
              }}
              position={sherriff.position}
              onClick={() => setSelected(sherriff)}
            >
            </MarkerF>
            )
          })}

          {selectCompany == 3 && WEAData?.map((wea, index) => {
            return (
            <MarkerF
              key={index}
              icon={{
                path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                fillColor: "#f6f6f9",
                fillOpacity: 1,
                scale: 3,
                strokeColor: "#3730c7",
                strokeWeight: 1,
              }}
              position={wea.position}
              onClick={() => setSelected(wea)}
            >
            </MarkerF>
            )
          })}

          {selectCompany == 4 && BgwtData?.map((bgwt, index) => {
            return (
            <MarkerF
              key={index}
              icon={{
                path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                fillColor: "rgb(187,7,7)",
                fillOpacity: 1,
                scale: 3,
                strokeColor: "#030303",
                strokeWeight: 1,
              }}
              position={bgwt.position}
              onClick={() => setSelected(bgwt)}
            >
            </MarkerF>
            )
          })}

          {selectCompany == 5 && AirAdditionData?.map((airAdd, index) => {
            return (
            <MarkerF
              key={index}
              icon={{
                path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                fillColor: "#3730c7",
                fillOpacity: 0.8,
                scale: 3,
                strokeColor: "#f6f6f9",
                strokeWeight: 1.5,
              }}
              position={airAdd.position}
              onClick={() => setSelected(airAdd)}
            >
            </MarkerF>
            )
          })}

          {selectCompany == 6 && SesLocations?.map((ses, index) => {
            return (
            <MarkerF
              key={index}
              icon={{
                path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                fillColor: "#9e2121",
                fillOpacity: 0.8,
                scale: 3,
                strokeColor: "#3e53f7",
                strokeWeight: 1.5,
              }}
              position={ses.position}
              onClick={() => setSelected(ses)}
            >
            </MarkerF>
            )
          })}

          {selectCompany == 7 && CableMakersData?.map((cable, index) => {
            return (
            <MarkerF
              key={index}
              icon={{
                path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                fillColor: "#9e2121",
                fillOpacity: 1,
                scale: 3,
                strokeColor: "#3e53f7",
                strokeWeight: 1.5,
              }}
              position={cable.position}
              onClick={() => setSelected(cable)}
            >
            </MarkerF>
            )
          })}

          {selectCompany == 8 && MMSData?.map((mms, index) => {
            return (
            <MarkerF
              key={index}
              icon={{
                path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                fillColor: "#d13939",
                fillOpacity: 1,
                scale: 3,
                strokeColor: "#f6f6f9",
                strokeWeight: 1.5,
              }}
              position={mms.position}
              onClick={() => setSelected(mms)}
            >
            </MarkerF>
            )
          })}

          {selectCompany == 9 && ILAData?.map((ila, index) => {
            return (
            <MarkerF
              key={index}
              icon={{
                path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                fillColor: "#f6f6f9",
                fillOpacity: 1,
                scale: 3,
                strokeColor: "gold",
                strokeWeight: 1,
                zIndex: 1
              }}
              position={ila.position}
              onClick={() => setSelected(ila)}
            >
            </MarkerF>
            )
          })}

          {selectCompany == 10 && RobertData?.map((robert, index) => {
            return (
            <MarkerF
              key={index}
              icon={{
                path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                fillColor: "#9e2121",
                fillOpacity: 1,
                scale: 3,
                strokeColor: "gold",
                strokeWeight: 1,
              }}
              position={robert.position}
              onClick={() => setSelected(robert)}
            >
            </MarkerF>
            )
          })}
          
          
            {selected ? 
              (<InfoWindowF
                position={selected.position}
                onCloseClick={() => setSelected(null)}
              >
                <div className='infowindow-ctn'>
                  <h1>{selected.name}</h1>
                  <h2>{selected.address}</h2>
                  <h2><span>Phone:</span> {selected.phone}</h2>
                  <h2><span>Email:</span> {selected.email}</h2>
                </div>
              </InfoWindowF>)
              : null}

        </GoogleMap>
    </div>
  )
}