import React from "react";
import classes from "./Home.module.css";
import Button from "@mui/material/Button";

function Home() {
  return (
    <div className="container">
      <header className={classes.header}>
        <h1>Track Your Household Expenses with Ease</h1>
        <p className="subheading">
          Simplify your finances with our expense tracker web app
        </p>
        <a href="/signup">
          <Button className="btn-primary">Get Started for Free</Button>
        </a>
      </header>

      <section className={classes.features}>
        <h2>Features</h2>
        <ul>
          <li>Track all your expenses in one place</li>
          <li>
            Set budgets and receive alerts when you're close to exceeding them
          </li>
          <li>Categorize expenses by type and date</li>
          <li>Generate detailed reports and visualizations of your spending</li>
          <li>Sync across all your devices</li>
        </ul>
      </section>

      <section className={classes.how_it_works}>
        <h2>How it works</h2>
        <ol>
          <li>Sign up for free and create an account</li>
          <li>Add your income and expenses to the app</li>
          <li>
            Track your spending and receive alerts when you're close to
            exceeding your budget
          </li>
        </ol>
        <a href="/signup">
          <Button className="btn-primary">Sign up for free</Button>
        </a>
      </section>

      <section className={classes.testimonials}>
        <h2>What our customers are saying</h2>
        <div className="quote">
          <p>
            "I've been using this app for a few months now and it's made such a
            difference in how I manage my household finances. It's so easy to
            use and has helped me save money!"
          </p>
          <p>- John Doe</p>
        </div>
        <div className="quote">
          <p>
            "This app is a game-changer! I used to dread tracking my expenses,
            but now it's so simple and I can see exactly where my money is
            going."
          </p>
          <p>- Jane Smith</p>
        </div>
        <div className="quote">
          <p>
            "I love the budgeting feature - it's helped me stay on track and
            avoid overspending."
          </p>
          <p>- Bob Johnson</p>
        </div>
        <a href="/signup">
          <Button className="btn-primary">Sign up for free</Button>
        </a>
      </section>
    </div>
  );
}

export default Home;
