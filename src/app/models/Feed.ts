interface Image {
  itemType: String,
  itemId: String,
  imageSize: String,
  base64: String,
  storeId: String
}

interface Location {
  type: String,
  coordinates: Number[]
}

interface GeoLocation {
  approve: Boolean,
  latitude: String,
  longitude: String
}

interface WorkingHours {
  day: Number,
  open: String,
  close: String,
  closed: Boolean
}

interface StoreInfo {
  id: String,
  geoLocation: GeoLocation,
  userPoint: Number,
  workingHours: WorkingHours,
  status: String,
  rate: Number,
  minOrderPrice: Number
}

interface Feed {
  id: String,
  title: String,
  text: String,
  type: String,
  images: Image[],
  location: Location,
  isDinner: Boolean,
  isDelivery: Boolean,
  storeInfo: StoreInfo,
  categoryId: String
}

export type { Feed }