import axios from "axios";
import L from "leaflet";
import {Component} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

import {currency} from "constants/currency";

import {Bank, MapState} from "./types";

import "leaflet/dist/leaflet.css";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

class Map extends Component<{}, MapState> {
  state: MapState = {
    bankList: [],
    isLoading: true,
    error: false,
  };

  fetchBankList = async () => {
    try {
      const res = await axios.get("https://api.foursquare.com/v3/places/search", {
        headers: {Authorization: "fsq3diKK2zilL3ubXZU3OORI3zBxVU6G/sSCC8wvlNxaxw4="},
        params: {
          ll: "53.90,27.57",
          categories: 11045,
          fields: "fsq_id,name,geocodes",
          open_now: true,
          limit: 50,
        },
      });

      const bankList = res.data.results;

      bankList.map((bank: Bank, i: number) => {
        bank.currency = currency.slice(-i % currency.length);
      });

      console.log(bankList);

      this.setState({bankList: res.data.results});
    } catch {
      this.setState({error: true});
    } finally {
      this.setState({isLoading: false});
    }
  };

  componentDidMount() {
    this.fetchBankList();
  }

  render() {
    return (
      <MapContainer
        center={[53.9, 27.5667]}
        scrollWheelZoom={false}
        style={{height: "100vh", width: "100%"}}
        zoom={13}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {this.state.bankList.map(({fsq_id, geocodes, name}) => (
          <Marker key={fsq_id} position={[geocodes.main.latitude, geocodes.main.longitude]}>
            <Popup>{name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }
}

export default Map;
