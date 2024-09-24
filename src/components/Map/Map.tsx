import axios from "axios";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import {Component} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

import {Layout} from "components/Layout/Layout";
import {currency} from "constants/currency";
import {LATITUDE, LONGTITUDE, MAP_LINK} from "constants/map";

import {params} from "./params";
import {Bank, MapProps, MapState} from "./types";

import "leaflet/dist/leaflet.css";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});

class Map extends Component<MapProps, MapState> {
  constructor(props: MapProps) {
    super(props);
    this.state = {
      bankList: [],
      paramBankList: [],
      isLoading: true,
      error: false,
    };
  }

  fetchBankList = async () => {
    try {
      const res = await axios.get("https://api.foursquare.com/v3/places/search", {
        headers: {Authorization: "fsq3diKK2zilL3ubXZU3OORI3zBxVU6G/sSCC8wvlNxaxw4="},
        params,
      });

      const bankList = res.data.results;

      bankList.map((bank: Bank, i: number) => {
        bank.currency = currency.slice(-i % currency.length);
      });

      this.setState({bankList: res.data.results, paramBankList: res.data.results});
    } catch {
      this.setState({error: true});
    } finally {
      this.setState({isLoading: false});
    }
  };

  componentDidMount() {
    this.fetchBankList();
  }

  componentDidUpdate(prevProps: Readonly<MapProps>) {
    if (prevProps.searchQuery !== this.props.searchQuery && this.props.searchQuery) {
      const newBankList = this.state.bankList.filter(
        (bank: Bank) => bank.currency?.indexOf(this.props.searchQuery) !== -1,
      );

      if (newBankList.length) {
        this.setState({
          paramBankList: newBankList,
        });
      } else {
        this.setState({paramBankList: this.state.bankList});
      }
    }
  }

  render() {
    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    }

    if (this.state.error) {
      return <h1>Oops... Something went wrong</h1>;
    }

    return (
      <Layout>
        <MapContainer
          center={[LATITUDE, LONGTITUDE]}
          scrollWheelZoom={false}
          style={{height: "80vh", width: "100%"}}
          zoom={13}
        >
          <TileLayer url={MAP_LINK} />

          {this.state.paramBankList.map(({fsq_id, geocodes, name, currency}) => (
            <Marker key={fsq_id} position={[geocodes.main.latitude, geocodes.main.longitude]}>
              <Popup>
                {name} <br /> {currency?.join(",")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Layout>
    );
  }
}

export default Map;
