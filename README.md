# about


### Installing Dependencies

From within the root directory:

```sh
npm install
```
---

## API reference

This API is organized around REST

Status Code | Status | Description
---|---|---
200 | OK | Everything worked as expected.
400 | Bad Request	| The request was unacceptable, often due to missing a required parameter.
401 | Unauthorized | No valid API key provided.
402 | Request Failed | The parameters were valid but the request failed.
403 | Forbidden	| The API key doesn't have permissions to perform the request.
404 | Not Found	| The requested resource doesn't exist.
409 | Conflict | The request conflicts with another request (perhaps due to using the same idempotent key).
429 | Too Many Requests	| Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.
500, 502, 503, 504 | Server Errors | Something went wrong on our end

### Endpoints

__Stocks__
```
GET /api/stocks/
```
__Request for a specific stock according to 'symbol'__
```
GET /api/stocks/:symbol/about
```
The Stock response object
```json
{
        "_id": "5df9ce0f40f73860c134ec41",
        "id": 0,
        "symbol": "ATVI",
        "company": "Activision Blizzard",
        "description": "Incidunt quo dignissimos sed. Occaecati nesciunt tempore earum ullam illo tempora provident. Sit nostrum et expedita eos voluptas ducimus dolorem. Et distinctio facilis et et qui doloribus officia et minima. A natus sed. Magnam aliquam quo quam est vel explicabo enim tempora quibusdam.\n \rIpsam id eum et sequi in. Qui maiores rerum commodi voluptas quia perspiciatis provident quas et. Omnis quis suscipit esse vitae. Qui labore nisi sunt doloremque blanditiis.\n \rIpsum voluptatem quidem illo optio reprehenderit voluptate et est. Excepturi odit distinctio. Perspiciatis rerum dolores sit quod dolore. Et fugit voluptas voluptatem ut nemo architecto excepturi autem est. Totam quam quia quisquam sapiente fugit vel quod in. Expedita ea dicta inventore rem omnis nulla cupiditate.",
        "adjectives": "[\"Handcrafted\",\"Refined\",\"Licensed\",\"Awesome\",\"Handmade\"]",
        "CEO": "Kelli Jenkins",
        "MarketCap": "90.77M",
        "EmployeeCount": 40919,
        "Founded": 1924,
        "EarningsRatio": 84.7,
        "Headquarters": "Hahnberg, Massachusetts",
        "DividendYield": 4.38,
        "AvgVolume": "59.08M",
        "HighToday": "$347.99",
        "LowToday": "$63.86",
        "HighYear": "$347.99",
        "LowYear": "$63.86",
        "OpenPrice": "$347.99",
        "Volume": "5.66M",
        "__v": 0
    },
```
__Create a stock__
```
POST /api/stocks/:symbol/about
```
__Update information about a stock__
```
PUT /api/stocks/:symbol/about
```
__Remove a stock__
```
DELETE /api/stocks/:symbol/about
```

