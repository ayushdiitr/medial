exports.Template = function (title, body, image) {
  var css = `
    html, body {
      height: 100%;
      width: 100%;
    }
    
    .title {
      font-family: 'DM Serif Display', serif;
      font-size: 55px;
    }
    
    .description {
      font-size: 25px;
      color: #808080
    }

    .container{
      background-image: url('https://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png');
            position: relative;
      width: 1200px;
      height: 630px;
      background-size: cover;
      color: white;
      text-align: center;
    }
    
    .image-text{
      width: 80%
    }
    
    .bg {
      background-repeat: no-repeat;
      display: block;
      width:100%;
      height:100%;
    }
    `
  return `
    <!DOCTYPE html>
     <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>OG Image</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    
    <body class="container">
      <div class="m-5 image-text">
        <div class="title">${title}</div>
        <p class="description mt-3">${body}</p>
      </div>
      <div class="bg"></div>
    </body>
    <style>${css}</style>
  </html>`

}
