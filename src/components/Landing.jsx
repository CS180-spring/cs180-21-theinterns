import React, { useState, useEffect } from "react";
import { StyledLanding } from "./Styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import book from "./styling_images/book.jpg";
import adminOnly from "./styling_images/adminOnly.jpg";

function Landing() {
  //Need login info for landing page displays
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isData, setIsData] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const user_validation = () => {
    if (isData !== "") {
      setIsLoggedIn(true);
    }
  }

  function handleLoginInfo() {
    fetch("http://localhost:4000/users/current")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setIsData(data);
          user_validation();
        }
        else {
          console.log("Error", data);
        }
        if (data === "admin") {
          setIsAdmin(true);
        }
        else {
          setIsAdmin(false);
        }
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    handleLoginInfo();
  }, [isData]);

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
            
            {!isLoggedIn ? (
              <div className="body">
                <p>
                If you want more features, you can register using the button below!
                </p>
                <p>
                If you are already a member, then welcome back! you can login with the button below!
                </p>
              </div>
            ) : (
              <div className="body">
                <p>
                  Click below to logout of your account. 
                </p>
                <p>
                  We welcome you to return whenever you want loyal customer.
                </p>
              </div>
            )}
            
            {isAdmin ? (
              <div className="body">
                <p>
                  Hello our lovely Admin! 
                </p>
                <p>
                  Please click the button below to access the Database and make any necessary changes.
                </p>
              </div>
            ) : (
              <div className="body">
                <p>
                  Sorry, only the author of our book may access this section.
                </p>
              </div>
            )}

          </div>
          <div className="buttons">
            <motion.div
              initial={{ opacity: 0, x:500 }}
              animate={{ opacity: 1, x:0 }}
              transition={{ duration: 1.5 }}
            >
              {!isLoggedIn ? (
                <Link to="/Login" >
                  <button>Login/Register</button>
                </Link>
              ) : (
                <Link to="/Logout">
                  <button>Logout</button>
                </Link>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x:-500 }}
              animate={{ opacity: 1, x:0 }}
              transition={{ duration: 1.5 }}
            >
              {isAdmin ? (
                <Link to="/DatabaseSimulation">
                  <button>Database</button>
                </Link>
              ) : (
                <img src={adminOnly}/>
              )}
            </motion.div>
          </div>
        </div>
      </StyledLanding>
    </motion.div>
  );
}
export default Landing;
