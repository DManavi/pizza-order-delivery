
# Pizza delivery

## Environment variables

Note that the environment variables can be set both on `.vscode/launch.json` and `.env` file. The `.vscode/launch.json` has higher priority and the keys that exists there will NOT be overwritten.

### General

- `NODE_ENV` Node environment (check NodeJS documents)
- `PORT` The port that server listens on

### Database

Database-related environment variables list.

- `DATABASE_HOST` Hostname or IP address
- `DATABASE_PORT` PostgreSQL port number (default: 5432)
- `DATABASE_NAME` Database name
- `DATABASE_USER` Username
- `DATABASE_PASS` Password
- `DATABASE_TIMEOUT` How long a client is allowed to remain idle before being closed
- `DATABASE_MAX_CLIENTS` Maximum number of clients in the pool (`ms` compatible value, e.g. 3s)
