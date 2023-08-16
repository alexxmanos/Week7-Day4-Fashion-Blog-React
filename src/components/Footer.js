import React from "react";

function Footer() {
  return (
    <footer>
      <nav>
        <a href="index.html">Home</a>|<a href="#">Women's</a>|
        <a href="#">Men's</a>|<a href="#">On the Street</a>|
        <a href="#">The Catwalk</a>|<a href="#">AdWatch</a>|
        <a href="#">About</a>|<a href="#">Tips</a>
      </nav>
      <p>&copy; {new Date().getFullYear()} Valet Industries, Inc</p>
    </footer>
  );
}

export default Footer;
