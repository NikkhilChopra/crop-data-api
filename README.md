
# Crop-data API

This project builds an API which can be hosted on cloud platforms like digital ocean (Right now works on http://localhost:8080/data). This API provides data on crops like name, sowing_months, harvesting_months, selling_price for farmers to compare them before buying seeds for their farm.
A website using this API is also developed which can show all the details by entering the crop name.


## API Reference

#### Get all items

```http
  GET /data
```

#### Get item

```http
  GET /data/{name}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of item to fetch |




## Deployment

To deploy this project run

```bash
   nodemon index.js
```


## Screenshots

![App Screenshot](https://github.com/NikkhilChopra/crop-data-api/blob/main/Screenshot%20(1723).png)

![App Screenshot](https://github.com/NikkhilChopra/crop-data-api/blob/main/Screenshot%20(1726).png)

# crop-data-api
