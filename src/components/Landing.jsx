import React from "react";
import { StyledLanding } from "./Styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import book from "./styling_images/book.jpg";
function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <StyledLanding>
        <div style = {{
            backgroundImage: `url(${book})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            paddingTop: '5%',
            paddingBottom: '8%',
          }}>  
          <div className="heading">
            <h2>Welcome to </h2>
            <h1 className="yyb">YumYumBook</h1>
          </div>
          <div className="row">
            <div className="body">
              <p>
                This website is designed for anyone to use. No matter your dietary
                needs, we have recipes to satisfy your desire for flavor. Each
                recipe has a description, the type of cuisine the recipe is taken
                from, and caloric information to help you find what meals would be
                best for you.
              </p>
              <p>
                Come over, share with your friends, and have fun cooking to your
                heart's content with these fabulous recipes.
              </p>
              <p>
                Click on the FAQ button below for more details and some fun facts about us.
              </p>
            </div>

            <div className="body">
              <p>
                When you get to the Recipe Lookup, you can go through all of our recipes by just pressing enter on the search bar.
              </p>
              <p>
                From there, you can search by the name of the dish, where the dish is from, the number of calories the dish has, or by one of the ingredients the recipe uses.
              </p>
              <p>
                Click on the button below to try it out for yourself!
              </p>
            </div>
          </div>
          <div className="buttons">
            <motion.div
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <Link to="/Pricing">
                <button>Frequently asked questions</button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <Link to="/Lookup">
                <button>Search for recipes</button>
              </Link>
            </motion.div>
          </div>

          <div className="row">
            <div className="body">
            <p>
              If you want more features, you can register using the button below!
            </p>
            <p>
              If you are already a member, then welcome back! you can login with the button below!
            </p>
            </div>
            <div className="body"></div>
          </div>
          <div className="buttons">
            <motion.div
              initial={{ opacity: 0, x:500 }}
              animate={{ opacity: 1, x:0 }}
              transition={{ duration: 1.5 }}
              >
              <Link to="/Login" >
                <button>Login/Register</button>
              </Link>
            </motion.div>
          </div>
        </div>
      </StyledLanding>
    </motion.div>
  );
}
export default Landing;
