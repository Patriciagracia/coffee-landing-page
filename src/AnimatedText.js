import React from "react";
import Typewriter from "typewriter-effect";
import "./styles/AnimatedText.css";

export default function AnimatedText() {
  return (
    <div className="container">
      <p className="AnimatedTextParagraph">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 50,
            strings: [
              "sip & click: coffee delivered quick!",
              "fresh beans, fast delivery!",
              "coffee: because adulting is hard",
              "bean there, done that: shop here!",
              "life's brew-tiful: get caffeinated.",
            ],
          }}
        />
      </p>
    </div>
  );
}
