# Design Document for the Lord of The Rings API SDK

This document outlines the design of the Lord of The Rings API SDK, which is a library for accessing the data provided by the-one-api.dev/v2/. The SDK has been designed to be easy to use, efficient, and extensible. The SDK is written in TypeScript and uses the fetch API for making HTTP requests.

## Overview

The Lord of The Rings API SDK is built on top of the Fetch API and provides a simple interface for accessing data from the API. The SDK is designed to be used with TypeScript and supports type checking for all the methods and responses.

## Architecture

The SDK consists of three files: `base.ts`, `movie/index.ts`, and `utils.ts`.

The base.ts file contains the Config interface which defines the properties required to configure the SDK. It also exports an abstract Base class that implements an invoke method that is used to make API calls. This class takes care of constructing the URL and headers required to make the call.

The movie/index.ts file exports the Movie class which extends the Base class and provides methods to make API calls related to movies. The Movie class uses the invoke method of the Base class to make the API calls and returns the response.

The `utils.ts` file exports a `applyMixins` function that is used to mix in the Movie class with the LordOfTheRingsAPI class using the interface declaration merging technique.

The LordOfTheRingsAPI class is the main class of the SDK which is exported as a default export. This class extends the Base class and mixes in the methods from the Movie class using the applyMixins function.

The overall architecture of the SDK is based on the abstract factory design pattern, where the Base class is the abstract factory and the Movie class is the concrete factory. The LordOfTheRingsAPI class is the client of the factory and uses the Base class to construct the API call and the Movie class to provide the concrete implementation for the movie-related API calls.

### Config

- The SDK takes a Config object as a parameter, which contains the `apiKey` and the optional `baseUrl`. The baseUrl defaults to https://the-one-api.dev/v2/ if not provided.

### Base Class

- The `Base class` provides the core functionality of the SDK. It takes the Config object as a parameter and initializes the apiKey and the baseUrl properties. The invoke method is used to make API calls and returns a Promise.

### Movie Class

- The `Movie class` extends the Base class and provides methods for accessing data related to movies. The `getMovieById`, `getMovieQuote`, and `getMovies` methods make API calls to the `/movie/:id`, `/movie/:id/quote`, and `/movie` endpoints respectively.

### Movie Types

- The SDK exports several types to facilitate type checking:
- `IMovie`: This type refers to the movie object that the API returns.
- `Movies`: This type refers to an array of movie objects that the API returns.
- `Quotes`: This type refers to an array of movie quotes that the API returns.
- `Options`: This type is used for the options that you can pass to the getMovieQuote method of the Movie class.

## Authentication and Authorization

To use the SDK, you need to obtain an access token from https://the-one-api.dev/sign-up. The access token is required for the apiKey property.

## Usage

To use the SDK, create an instance of LordOfTheRingsAPI with the required Config object, then call the desired methods on the instance.

```ts
import LordOfTheRingsAPI from "@hassandiv/lord-of-the-rings-sdk";
```

The LordOfTheRings constructor accepts a configuration object with the following properties:

- The `apiKey` property is required. To utilize the SDK, you are required to obtain an access token from https://the-one-api.dev/sign-up.
- The `baseUrl` is optional and has a default value of https://the-one-api.dev/v2/. It is only necessary to include the baseUrl property if a fresh version of the API is published.

```ts
const client = new LordOfTheRingsAPI({
  apiKey: "token", // An access token is required.
});
```

## Methods

The SDK provides a number of methods for accessing various endpoints of the API. All methods return a Promise that resolves with the API response.

The `getMovies()` method retrieves all the Lord of the Rings movies available in the API.

```ts
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

```ts
const id1 = "5cd95395de30eff6ebccde5c"; //The Fellowship of the Ring
const id2 = "5cd95395de30eff6ebccde5b"; //The Two Towers
const id3 = "5cd95395de30eff6ebccde5d"; //The Return of the King

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

```ts
client
  .getMovieQuote(id1, { limit: 10, offset: 0 })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log("Error", error.message);
  });
```

## Error Handling

The SDK uses the fetch function to communicate with the API and it handles errors using the throw statement. When the API response indicates an error, such as a status outside the 200-299 range, the fetch function throws an Error object with the status text as its message. This error is then caught by the SDK and is re-thrown with a more informative error message.

For instance, if the apiKey is invalid or there is a network problem, the fetch function throws an Error object with the appropriate error message. The SDK captures this error and throws a new Error object with a message that offers more context to the user.

The SDK also handles errors related to missing or invalid parameters. For example, if the user fails to provide a required parameter or provides an invalid value, the SDK will throw a TypeError with a message indicating which parameter is missing or invalid.

In general, the SDK aims to provide user-friendly error messages that help users to identify and resolve issues.
