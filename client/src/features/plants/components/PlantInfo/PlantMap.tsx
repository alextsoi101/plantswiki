import { FC, useState, useEffect } from 'react';
import { GeoJSON } from 'react-leaflet';
import CustomMapContainer from '../../../../lib/leaflet/CustomMapContainer';

const PlantMap: FC = () => {
  const [countriesGeoJSON, setCountriesGeoJSON] = useState(null);
  const countriesToHighlight = ["California", "Texas", 'La Rioja', 'Tibet'];

  useEffect(() => {
    fetch('../../../../../public/data/countries.geojson')
      .then(response => response.json())
      .then(data => {
        setCountriesGeoJSON(data);
      })
      .catch(error => console.error('Error fetching GeoJSON:', error));
  }, []);

  const countryStyle = (feature: any) => {
    if (countriesToHighlight.includes(feature.properties.Level_4_Na)) {
      return {
        fillColor: "#72994c",
        weight: 1,
        color: "#b1c69b",
        fillOpacity: 1,
      };
    } else {
      return {
        fillColor: "white",
        weight: 1,
        color: "white",
        fillOpacity: 1,
      };
    }
  };

  return (
    <CustomMapContainer>
      {countriesGeoJSON && <GeoJSON data={countriesGeoJSON} style={countryStyle} />}
    </CustomMapContainer>
  );
};

export default PlantMap;

