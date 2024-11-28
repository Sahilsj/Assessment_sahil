import React, { useState, useEffect } from 'react';
import './App.css';
import MapComponent from './MapComponent'; // Import the MapComponent

function App() {
    const [pointData, setPointData] = useState([]); // State for point markers
    const [polygonData, setPolygonData] = useState([]); // State for polygons

    // Simulate fetching spatial data (mock data)
    useEffect(() => {
      const points = [
        { lat: 51.5, lng: -0.09, name: 'Sterry Street' },
        { lat: 51.51, lng: -0.1, name: 'Millennium Bridge' },
        { lat: 51.52, lng: -0.12, name: 'MediaCom' },
        { lat: 51.53, lng: -0.08, name: 'New city College Hackney Campus' },
        { lat: 51.54, lng: -0.13, name: 'Freight Lane' },  // New point
        { lat: 51.56, lng: -0.1, name: 'Gillespie Road' },  // New point
        { lat: 51.57, lng: -0.14, name: 'Hornset Lane Reservior' },  // New point
    ];

         // Adding multiple polygons: triangle, square, pentagon
         const polygons = [
          {
              coordinates: [
                  [51.49, -0.08],
                  [51.5, -0.06],
                  [51.51, -0.08],
              ],
              name: 'Polygon A (Triangle)',
          },
          {
              coordinates: [
                  [51.52, -0.1],
                  [51.53, -0.1],
                  [51.53, -0.09],
                  [51.52, -0.09],
              ],
              name: 'Polygon B (Square)',
          },
          {
              coordinates: [
                  [51.55, -0.1],
                  [51.56, -0.11],
                  [51.57, -0.1],
                  [51.56, -0.09],
                  [51.55, -0.09],
              ],
              name: 'Polygon C (Pentagon)',
          },
      ];

        setPointData(points);
        setPolygonData(polygons);
    }, []);

    const handleFeatureClick = (feature) => {
        alert(`You clicked on: ${feature.name}`);
    }; 

    return (
        <div className="App">
            <h1>Spatial Map Viewer</h1>
            <MapComponent
                pointData={pointData}
                polygonData={polygonData}
                onFeatureClick={handleFeatureClick}
            />
        </div>
    );
}

export default App;
