# Akshay OS

Personal AI orchestration platform and ambient dashboard for a Raspberry Pi home edge node.

## Backend API

The first backend service runs in Docker and exposes:

- `GET /health` - returns basic API health metadata

Run the API:

```sh
docker compose up --build api
```

Validate the endpoint:

```sh
curl http://localhost:4000/health
```

Or open `http://localhost:4000/health` in a browser/Postman.

## Dashboard

Run the API and dashboard:

```sh
docker compose up --build
```

Open:

```txt
http://localhost:3000
```

The dashboard calls the API through `/api/health`.
