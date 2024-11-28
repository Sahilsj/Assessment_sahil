import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = ({ pointData, polygonData, onFeatureClick }) => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* Render point markers */}
            {pointData.map((point, index) => (
                <Marker
                    key={index}
                    position={[point.lat, point.lng]}
                    eventHandlers={{
                        click: () => onFeatureClick(point),
                    }}
                >
                    <Popup>{point.name}</Popup>
                </Marker>
            ))}

            {/* Render polygons */}
            {polygonData.map((polygon, index) => (
                <Polygon
                    key={index}
                    positions={polygon.coordinates}
                    eventHandlers={{
                        click: () => onFeatureClick(polygon),
                    }}
                />
            ))}
        </MapContainer>
    );
};

export default MapComponent;
