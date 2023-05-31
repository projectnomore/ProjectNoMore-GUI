var htmlContent = `
<html lang="en-us">
  <head>
    <link rel="stylesheet" href="https://ujosd1.csb.app/styles.css" />
    <title>project no more</title>
  </head>
  <body>
    <div class="overlay"></div>
    <div class="stars" aria-hidden="true"></div>
    <div class="starts2" aria-hidden="true"></div>
    <div class="stars3" aria-hidden="true"></div>
    <main class="main">
      <section class="contact">
        <h1 class="title">
          project no more
        </h1>
        <p>
          project no more is a website to find all of the best hacks for the
          most popular school websites.<br />
          <a href="/index.html">home</a> -
          <a href="/howtouse.html">how to use</a> -
          <a href="https://discord.gg/wcaRv5SaGN">discord</a>
          <div class="hack" />
        </p>
        <hr />
        <br><p><a href="/blog/1.html">new blog post!</a></p>
        <br />
        <hr />
        <h2>new directories</h2>
        <a href="howtouse.html">how to use the hacks</a><br>
        <a href="hacks/blooket.html">blooket</a><br>
        <a href="hacks/delta-math.html">delta math</a><br>
        <a href="hacks/edpuzzle.html">edpuzzle</a><br>
        <a href="https://discord.gg/wcaRv5SaGN">join our discord</a>
      </section>
    </main>
  </body>
</html>`;

var embeddedWindow = window.open("", "_blank", "width=800,height=600");
embeddedWindow.document.write(htmlContent);
