import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>New Jersey</h2>
        <p>
        Maria and Luca, childhood friends with a passion for fresh, vibrant food, 
        founded Little Lemon, a cozy restaurant in the heart of a bustling city. 
        Maria, a talented chef, and Luca, a savvy entrepreneur, combined their 
        skills to create a local favorite known for its mouthwatering dishes and 
        warm atmosphere. As the restaurant's reputation grew, they decided to create 
        the Little Lemon website to reach more people. The site featured stunning photos, 
        an easy-to-navigate menu, and a seamless reservation system. It also became a hub 
        for food lovers to connect, share recipes, and learn about the stories behind each dish. 
        Maria and Luca regularly updated the site with blog posts, cooking tips, and virtual 
        cooking classes. The Little Lemon website became a testament to their passion, friendship, 
        and the joy of sharing good food, attracting food enthusiasts from around the world.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
        <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
