import styled from "styled-components";
import { BsArrowRightSquareFill } from "react-icons/bs";
import book from "./styling_images/book.jpg";

//App
export const StyledApp = styled.div`
  background-color: hsla(0, 100%, 50%, 1);
  background-image: radial-gradient(
      at 40% 20%,
      hsla(28, 100%, 74%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 82% 38%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
    radial-gradient(at 31% 64%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
    radial-gradient(at 85% 81%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);
`;

//Nav Bar
export const StyledNav = styled.nav`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: auto;
  background-color: #030F69;
  border: 2px solid black;
  height: 100px;
  a {
    text-decoration: none;
    color: #FFAF2F;
  }

  h1 {
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
      1px 1px 0 black;
    margin-right: auto;
    margin-left: 40px;
    font-size: 3.5rem;
    font-family: "Lobster", cursive;
  }

  li {
    font-family: "Open-sans", sans-serif;
    margin-right: 75px;
    margin-top: 15px;
    font-size: 2rem;
    font-weight: 750;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
      1px 1px 0 black;
  }

  .user {
    font-family: "Open-sans", sans-serif;
    margin: auto;
    padding: 12px;
    background-color: #ebfc04;
    h5 {
      font-family: "Lobster", cursive;
      text-align: center;
      font-size: 1rem;
    }
  }
`;

//landing page
export const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-top: 50px;
  margin-bottom: 50px;
  .heading {
    display: inline-block;
    margin-left: 150px;
  }

  a {
    text-decoration: none;
  }

  .row {
    display: flex
  }

  .body {
    flex: 50%;
    padding-left: 150px;
    padding-right: 150px;
    padding-bottom: 0px;
  }

  .buttons {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 20px;
    margin-right: auto;
    justify-items: center;
    align-items: center;
    text-align: center;
    grid-gap: 25px;
    button {
      font-family: "Open-sans", sans-serif;
      background-color: #e8e8e8;
      border: none;
      padding: 50px;
      border-radius: 10px;
      font-size: 25px;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s ease;
      text-decoration: none;
    }
    button:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    } 
  }

  h1 {
    display: inline-block;
    font-family: "Red Hat Display", sans-serif;
    font-size: 3rem;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
      1px 1px 0 black;
  }
  h2 {
    font-family: "Red Hat Display", sans-serif;
    font-size: 3rem;
    display: inline-block;
  }
  p {
    font-family: "Open-sans", sans-serif;
    font-size: 1.5rem;
  }
  .yyb {
    display: inline-block;
    font-size: 3.5rem;
    font-family: "Lobster", cursive;
    color: orange;
    margin-left: 10px;
  }

`;

//Recipe Lookup
export const LookupSearchBar = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  h1 {
    font-family: "Red Hat Display", sans-serif;
    text-align: center;
    font-size: 2.5rem;
  }
  .search-bar {
    margin-top: 10px;
    border: 2px solid black;
    width: 1000px;
    padding: 10px;
    font-size: 1.5rem;
    font-family: "Open-sans", sans-serif;
  }
`;
export const DisplaySearch = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;

  h4 {
    margin: 0;
    font-size: 1.5rem;
    font-family: "Open-sans", sans-serif;
  }

  h5 {
    font-family: "Open-sans", sans-serif;
    font-style: italic;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .image {
    width: 150px;
    height: 150px;
    border-radius: 75%;
    border: 2px solid black;
    object-fit: cover;
    margin-bottom: 20px;
    margin-right: auto;
    margin-left: auto;
  }

  .recipe-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 500px; // You can change this to fit your needs
    border: 2px solid #e6e6e6;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    overflow: auto; // This will add a scroll bar if there is overflow
  }

  .center-flag {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flag {
    align-items: center;
    width: 40px;
    height: 30px;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0.5, 0, 0, 0.5);
  }
`;

//FAQ
export const StyledFAQ = styled.div`
  .yyb {
    font-size: 2.5rem;
    font-family: "Lobster", cursive;
    color: orange;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
      1px 1px 0 black;
  }

  h2 {
    margin-left: 20px;
    font-size: 2.5rem;
    font-family: "Red Hat Display", sans-serif;
  }
`;

export const FAQItem = styled.div`
  p {
    font-family: "Open-sans", sans-serif;
    font-size: 1.5rem;
    display: inline;
  }
`;

export const StyledArrow = styled(BsArrowRightSquareFill)`
  margin-left: 20px;
  font-size: 1.5rem;
  margin-right: 10px;
`;

//Database Simulation
export const DatabaseDirectionsDiv = styled.div`
  margin-top: 50px;
  h1 {
    font-family: "Red Hat Display", sans-serif;
    text-align: center;
    font-size: 2.5rem;
  }
  h2 {
    font-family: "Open-sans", sans-serif;
    text-align: center;
    font-weight: normal;
    font-size: 1.2rem;
  }
`;

export const DatabaseSearchBarForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  .search-bar {
    border: 2px solid black;
    padding: 10px;
    width: 1000px;
    font-size: 1.5rem;
    font-family: "Open-sans", sans-serif;
  }
  @media screen and (max-width: 768px) {
    .search-bar {
      width: 100%;
    }
  }
`;

export const RenderTable = styled.table`
  margin: 0 auto;
  margin-top: 30px;
  border-collapse: collapse;
  font-family: "Open-sans", sans-serif;
  font-size: 1.2rem;
  th,
  td {
    text-align: center;
    border: 1px solid #ddd;
    padding: 10px;
  }
  th {
    background-color: #f2f2f2;
  }
  .recipe-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid black;
    object-fit: cover;
  }
`;

//Recipe Detail
export const RecipeDetailDiv = styled.div`
  font-family: "Open-sans", sans-serif;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;

  .recipe-card {
    display: flex;
    flex-direction: row;
    border: 2px solid #e6e6e6;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .first {
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .second {
    display: flex;
    flex-direction: column;
  }

  .third {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h3 {
      margin-bottom: -10px;
    }

    .ingredients {
      margin-top: 10px;
    }

    .instructions {
      margin-top: 10px;
    }
  }

  .image {
    width: 350px;
    height: 350px;
    border: 2px solid black;
    object-fit: cover;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 40px;
    margin-right: 30px;
  }

  .calories {
    margin-top: 10px;
  }

  .update {
    padding: 25px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 30px;
    font-family: "Open-sans", sans-serif;
    background-color: #e8e8e8;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    text-decoration: none;
    button:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }
  h2 {
    font-style: italic;
  }
`;
export const UpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  label {
    margin-top: 10px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  input[type="text"],
  textarea {
    width: 75%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  textarea {
    height: 120px;
  }

  button[type="submit"] {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
`;

//Login Page
export const PageDiv = styled.div`
  font-family: "Open-sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;
export const Login = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  h2 {
    text-align: center;
  }

  input {
    margin-bottom: 10px;
    padding: 10px;
    border: 2px solid #e6e6e6;
    border-radius: 4px;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #f9fd00;
    cursor: pointer;
  }

  button:hover {
    background-color: #e2150e;
  }

  .register {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h4 {
    font-size: 0.7rem;
    display: inline;
    margin-right: 5px;
    color: #34f0e1;
  }

  h3 {
    display: inline;
    font-size: 0.9rem;
    color: #00ffb3;
  }
`;
export const Register = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #97fdfa;
  h2 {
    text-align: center;
  }

  input {
    margin-bottom: 10px;
    padding: 10px;
    border: 2px solid #0a0000;
    border-radius: 4px;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #fd00fd;
    cursor: pointer;
  }

  button:hover {
    background-color: #e2150e;
  }
`;
export const LogoutPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fafafa;
`;

export const Title = styled.h3`
  color: #333;
  margin-bottom: 2rem;
`;

export const LogoutButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
