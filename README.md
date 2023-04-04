# The Lord Of The Rings SDK

> The Lord of the Rings SDK, built with Node &amp; TypeScript.

## Table of Contents

- [General Information](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Acknowledgements](#acknowledgements)
- [MIT License](#mit-License)
- [Contact](#contact)

## General Information

@hassandiv/lord-of-the-rings-sdk allows developers to incorporate Lord of the Rings features into their applications, such as getting information on the lord of the rings movies, and quotes from the series. The SDK was created to simplify and streamline the process of integrating these functionalities into applications.

## Technologies Used

- Node.js - version 18.14.0
- TypeScript - version 5.0.3

## Features

- Retrieve information on movies, and quotes from the Lord of the Rings series.
- Access to various methods to retrieve detailed information.
- Simple and intuitive interface for easy integration.

## Installation

To install the SDK, simply run the following command on your project:

```
npm install @hassandiv/lord-of-the-rings-sdk
OR
yarn add @hassandiv/lord-of-the-rings-sdk
```

## Usage

To use the SDK, simply import it into your project and create a new instance of the LordOfTheRingsAPI class:

```
import LordOfTheRingsAPI from "@hassandiv/lord-of-the-rings-sdk";;
```

The LordOfTheRings constructor accepts a configuration object with the following properties:

- The `apiKey` property is required. To utilize the SDK, you are required to obtain an access token from https://the-one-api.dev/sign-up.
- The `baseUrl` is optional and has a default value of https://the-one-api.dev/v2/. It is only necessary to include the baseUrl property if a fresh version of the API is published.

```
const client = new LordOfTheRingsAPI({
  apiKey: "token", // An access token is required.
});
```

## Methods

The SDK provides a number of methods for accessing various endpoints of the API. All methods return a Promise that resolves with the API response.

The `getMovies()` method retrieves all the Lord of the Rings movies available in the API.

```
client
  .getMovies()
  .then((res) => {
    console.log("The lord of the rings movies:", res);
  })
  .catch((error) => {
    console.log("Error", error.message);
  });
```

The `getMovieById(id)` method retrieves a single Lord of the Rings movie using its unique ID. The ID should be provided as a string, and the following are the IDs for all the Lord of the Rings movies:

```
const id1 = "5cd95395de30eff6ebccde5c";
const id2 = "5cd95395de30eff6ebccde5b";
const id3 = "5cd95395de30eff6ebccde5d";

client
  .getMovieById(id1)
  .then((movie) => {
    console.log("The lord of the rings:", movie);
  })
  .catch((error) => {
    console.log("Error", error.message);
  });
```

The `getMovieQuote(id, options)` method retrieves a quotes from a specific Lord of the Rings movie. The method takes in two parameters, the movie ID as a string and an options object that specifies the limit and offset for the quotes to be retrieved.

```
client
  .getMovieQuote(id1, { limit: 10, offset: 0 })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log("Error", error.message);
  });
```

## Acknowledgements

- This project was inspired by the Lord of the Rings series by J.R.R. Tolkien.
- Many thanks to the creators of the following resources that were used in the development of this project:
- The Lord of the Rings API: https://the-one-api.dev/
- microbundle: https://www.npmjs.com/package/microbundle

## MIT License

Copyright (c) [2023] [Elhassan Abdelhafez]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.

## Contact

- Created by https://github.com/hassandiv - feel free to contact me!
