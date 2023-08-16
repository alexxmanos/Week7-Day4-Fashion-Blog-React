import React from "react";
import "./styles.css"; // Import your CSS file
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div id="main">
        <Article
          date="11/12/20"
          title="On The Street in Brooklyn"
          imageSrc="blog-image-1.png"
          alt="fashion walk"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit euismod in pellentesque massa placerat. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Morbi tempus iaculis urna id volutpat. Mi bibendum neque egestas congue quisque egestas diam in. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Non arcu risus quis varius quam. In nibh mauris cursus mattis molestie a iaculis. Ultricies lacus sed turpis tincidunt id aliquet risus. Tortor pretium viverra suspendisse potenti nullam ac. Nam aliquam sem et tortor consequat id porta nibh. Quis lectus nulla at volutpat diam ut. Nisi est sit amet facilisis magna. Condimentum lacinia quis vel eros. Ridiculus mus mauris vitae ultricies. Fermentum dui faucibus in ornare quam."
        />
        <Article
          date="11/11/20"
          title="Vintage in Vogue"
          imageSrc="blog-image-2.png"
          alt="fashion heads"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor lacus luctus accumsan tortor. Id eu nisl nunc mi ipsum. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Egestas pretium aenean pharetra magna ac. Eu ultrices vitae auctor eu augue. Nunc mattis enim ut tellus. Tincidunt praesent semper feugiat nibh sed. Urna molestie at elementum eu facilisis sed. Sed cras ornare arcu dui vivamus arcu felis bibendum."
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
