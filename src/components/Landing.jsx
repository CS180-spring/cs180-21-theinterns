import React from "react";
import { StyledLanding } from "./Styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <StyledLanding>
        <div className="heading">
          <h2>Welcome to </h2>
          <h1 className="yyb">YumYumBook</h1>
        </div>
        <div className="body">
          <p>
            This website is designed for anyone to use. No matter your dietary
            needs, we have recipes to satisfy your desire for flavor. Each
            recipe has a description, the type of cuisine the recipe is taken
            from, and caloric information to help you find what meals would be
            best for you.
          </p>
          <p>
            The FAQ also tells you a little more about us and how the recipe
            book works.
          </p>
          <p>
            Come over, share with your friends, and have fun cooking to your
            heart's content with these fabulous recipes.
          </p>
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
      </StyledLanding>
    </motion.div>
  );
}
export default Landing;
