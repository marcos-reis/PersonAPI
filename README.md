# PersonAPI
Open Source personas catalog.

## Technologies
- Express
- Typescript

## How to use
To clone and execute this API, you will need, from Git, Nodejs and Yarn installed in your machine. From your command line:

````
  # Clone this repository
  git clone https://github.com/marcos-reis/personapi

  # Go to repository cloned
  $ cd personapi

  # Install dependencies
  $ yarn install

  # Run API in development mode
  $ yarn dev:server

 ````
## Resources from API
````
# Resouce Main
GET /persons
Response 200 OK
Return [
        {
          name,
          birthDate,
          genre,
          description,
          age,
          email,
          city,
          state,
          academy,
          interest
        }
      ]

# Resource Filters
GET /persons?state
GET /persons?genre
GET /persons?academy
````
## License
This project is under the MIT license. See the [LICENSE](https://github.com/marcos-reis/personapi/blob/master/README.md) for more information.

Made by [Marcos Reis](https://www.linkedin.com/in/marcos-reis-santos/)
