import React from "react";
import "./style.css";
import iphone from "../../../assets/iphone2.png";
import { motion } from "framer-motion";
import Button from "../../Button";
import OutLineButton from "../../OutLineButtton";
import { RWebShare } from "react-web-share";
function LandingComponent() {
  return (
    <div className="flex-wrapper">
      <div className="flex">
        <motion.h1
          className="big-heading"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="strock">Crypto Tracker</span>
          <br />
          <span className="big-heading-blue">Real Time.</span>
        </motion.h1>
        <p className="para">
          Track crypro through a public api in real time. Visit the dashboard to
          do so!
        </p>
        <div className="button-div">
          <a href="/dashboard" style={{ textDecoration: "none" }}>
            <Button text={"Dashboard"} />
          </a>
          <RWebShare
            data={{
              text: "Crypto-Tracker is made in React",
              url: "",
              title: "Crypto-Tracker",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <OutLineButton text={"Share"} />
          </RWebShare>
        </div>
      </div>
      <div className="img-box">
        <motion.img
          src={iphone}
          alt="IPhone"
          className="phone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 1,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

export default LandingComponent;
