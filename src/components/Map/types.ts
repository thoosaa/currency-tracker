export type Bank = {
  fsq_id: string;
  geocodes: {
    main: {
      latitude: number;
      longitude: number;
    };
  };
  name: string;
  currency?: string[];
};

export type MapState = {
  bankList: Bank[];
  isLoading: boolean;
  error: boolean;
};
