# ElMazad - Online Auction Platform

ElMazad is an online auction platform where users can list items, place bids, and participate in auctions. This repository contains the front-end of the application built using React.

## Features

### Comprehensive User Management

- **User Registration and Login**: Secure password hashing for user credentials.
- **User Profiles**: Profiles include user information and profile picture.
- **User Dashboards**: Manage listings, bids, won auctions, and settings.

### Item Listing

- **Create Listings**: Detailed item listings with descriptions, categories, and high-quality images.
- **Pricing Options**: Set starting prices, reserve prices (minimum acceptable bid), and buy now options.

### Auction Creation and Management

- **Create Auctions**: Auctions can be set for specific durations ranging from 2 to 10 days.
- **Bidding System**: Real-time bid updates and highest bid tracking.
- **Notifications**: Real-time and email notifications for outbidding and winning auctions.

### Secure Payment Processing

- **Payment Gateway Integration**: Secure transactions post-auction (details to be configured).

### Admin Panel

- **Administrative Tools**: Manage users, auctions, and website settings.
- **User Account Management**: Oversee user accounts and auction activities.
- **Website Configuration**: Adjust website parameters and settings.

## Technologies

- **Front-end**: React, Next.js
- **Back-end**: Node.js, Express (separate repository)
- **Database**: PostgreSQL (separate repository)

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development environment:

- Node.js
- npm (or yarn)

### Installation

1. Clone the repository:

```bash
   git clone https://github.com/your-username/elmazad-frontend.git
```

2. Navigate to the project directory:

```bash
   cd elmazad-frontend
```

3. Install dependencies:

```bash
    npm install
```

or

```bash
    yarn install
```

### Running The Application

To start the development server, run:

```bash
    npm run dev
```

or

```bash
    yarn run dev
```

This will run the app in development mode and open http://localhost:3000 to view it in the browser.

### Building for Production

To build the app for production, run:

```bash
    npm run build
```

or

```bash
    yarn build
```

This will create an optimized build in the `build` folder.

### Deployment

For deployment, follow the hosting service's instructions to serve the contents of the `build` folder.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
