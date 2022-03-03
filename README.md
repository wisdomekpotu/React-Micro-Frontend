# Implementing Micro Frontends in React Using Module Federation

## Article

[Link to detailed article about how this was developed]().

## Requirements

1. [Node.js](https://nodejs.org/)
2. [AWS Account](https://aws.amazon.com/)
3. [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

### 1. **Clone the application**

```sh
git clone https://github.com/wisdomekpotu/react-micro-frontend.git
```

### 2. **Install necessary dependencies for the application**

```sh
npm install
```

### 3. **Start the Host(Container) application**

Navigate to the host directory, we can run the following command to start our frontend application:

```sh
npm start
```

The above command will start the Host application on [http://localhost:8080](http://localhost:8080).

### 4. **Start the Product and Cart applications in isolation**

Navigate to their respective directory, we can run the following command to start both applications:

```sh
npm start
```

The above command will start the product application on [http://localhost:8081](http://localhost:8081).
The above command will start the cart application on [http://localhost:8082](http://localhost:8082).
