const sendNotFound = (baseRouteName, useReqUrl = false) => {
  return (req, res) => {
    console.log("  express:router GET /profile/:userid")
    const html_doc = `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="utf-8">
  <title>Error</title>
  </head>
  <body>
  <pre>Cannot GET ${baseRouteName}${useReqUrl ? req.url : null}</pre>
  </body>
  </html>
  `
    res.status(404).send(html_doc)
    return
  }
}


module.exports = {
  sendNotFound
}