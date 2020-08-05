# Botsociety Integration NodeJS Boilerplate

A boilerplate project to kick off your <a href="https//botsociety.io/documentation/custom-integrations" target="_blank">Botsociety custom integration</a>.

## Testing your custom Integraton
First, you need to create a `.env` file. Check out the `.env-example` for an example of the values you need. If you don't know your API key, <a href="https://botsociety.io/documentation/api" target="_blank">check out the Botsociety documentation here</a>
Run

```bash
nodemon -e js,yml ./node_modules/.bin/serverless offline start
```

Then open another tab in your terminal and run
```bash
mocha
```