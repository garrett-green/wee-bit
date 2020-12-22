# Wee Bit (A URL Minifying Service)

Wee Bit is a small and simple app functioning similar to Bit.ly or TinyURL.

## Installation
1. `git clone https://github.com/garrett-green/wee-bit.git`
2. `cd wee-bit`
3. `yarn`

## Run The App Locally
*Note:* A [MongoDB Connection URI](https://docs.mongodb.com/manual/reference/connection-string/) is required (`process.env.DATABASE_URI`).
1. `yarn dev`
2. Navigate to [`http://localhost:3000/`](http://localhost:3000/)

### Additional Helpful Scripts
- `yarn lint`
  - `yarn lint --fix`
- `yarn clean`
  - Empty `dist/` folder
- `yarn dev-client`
  - Thanks to [parcel](https://parceljs.org/), we can quickly get the front-end up and running for local dev
- `yarn dev-server`
  - Similar to above but for server-side work independently
- `yarn test`

## Helpful && Relevant Documentation
- [PreactJS](https://preactjs.com/)
- [Parcel](https://parceljs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [MongoDB](https://docs.mongodb.com/)
- [ExpressJS](https://expressjs.com/)

## Usage/Requirements
Node 10+.

## License
[MIT](https://choosealicense.com/licenses/mit/)