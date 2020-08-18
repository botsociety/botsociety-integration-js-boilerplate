const { prop } = require('ramda/src')

const triggerExport = async (event) => {
  const headers = prop('headers', event)
  const accessToken = prop('Access-Token', headers)
  const { user_id, api_key_public } = headers
  const body = prop('body', event)
  /*
    Example of the data passed in the body of the POST
    body: {
      domain,
      deviceToExport,
      welcomePathId,
      designId,
      callbackUrl,
    }
    
    The callbackUrl is a URL you can call in async if your integration needs to run for some seconds.
    It will notify the Botsociety user that the export is complete and available.
    More info at Check out https://botsociety.io/documentation/custom-integrations/#developing-your-custom-integration 
  */

  /* Here you can do your elaborations, for example calling the Botsociety API with the user_id and api_key_public */

  /* If you need to call a third party API, or to create a file, you can use a promise here */
  const main = new Promise(function (resolve, reject) {
    var statusCode = 200;
    var info = { message: "The export succeded" };
    resolve({
      statusCode,
      body: JSON.stringify({
        info,
      }),
    })
  })
  return main;
}

module.exports = {
  triggerExport
}