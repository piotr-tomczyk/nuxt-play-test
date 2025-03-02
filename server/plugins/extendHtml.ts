export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html, { event }) => {
      // This will be an object representation of the html template.
      html.head.push(`<meta name="serverData" content="This data was set on server" />`)
    })
    // You can also intercept the response here.
    nitroApp.hooks.hook('render:response', (response, { event }) => { console.log(response) })
  })