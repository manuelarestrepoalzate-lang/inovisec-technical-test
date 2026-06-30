import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import { cases } from "../data/cases";

export default function MapView({
  onSelectCase,
}) {
  return (
    <MapContainer
      center={[4.5709, -74.2973]}
      zoom={5}
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {cases.map((item) => (
        <Marker
          key={item.id}
          position={[
            item.lat,
            item.lng,
          ]}
          eventHandlers={{
            click: () =>
              onSelectCase(item),
          }}
        >
          <Popup>
            {item.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}