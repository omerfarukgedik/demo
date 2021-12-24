interface Image {
  itemType: string,
  itemId: string,
  imageSize: string,
  base64: string,
  storeId: string
}

interface Location {
  type: string,
  coordinates: number[]
}

interface GeoLocationObject {
  approve?: boolean,
  latitude: number,
  longitude: number
}

interface WorkingHours {
  day: number,
  open: string,
  close: string,
  closed: boolean
}

interface StoreInfo {
  id: string,
  geoLocation: GeoLocationObject,
  userPoint: number,
  workingHours: WorkingHours,
  status: string,
  rate: number,
  minOrderPrice: number
}

interface Feed {
  id: string,
  title: string,
  text: string,
  type: string,
  images: Image[],
  location: Location,
  isDinner: boolean,
  isDelivery: boolean,
  storeInfo: StoreInfo,
  categoryId: string
}

export type { Feed, GeoLocationObject }