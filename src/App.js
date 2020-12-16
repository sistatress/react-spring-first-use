import React, { useState } from "react";
import "./styles.css";
import { useTransition, config, animated } from "react-spring";
import { Transition } from "react-spring/renderprops";
import Component1 from "./Component1";

const Component2 = ({ style }) => (
  <animated.div style={style}>component2</animated.div>
);

export default function App() {
  const [show, set] = useState(false);

  const transitions = useTransition(show, null, {
    config: config.gentle,
    from: { opacity: 0, transform: "translate3d(0px, -25%, 0px)" },
    enter: { opacity: 1, transform: "translate3d(0%, 0px, 0px)" },
    leave: { opacity: 0, height: 0, transform: "translate3d(0px, 25%, 0px)" }
  });

  return (
    <div>
      {/* {transitions.map(
        ({ item, key, props }) =>
          item && (
            // <animated.div key={key} style={props}>
            //   <Component1 />
            //   <Component2 />
            // </animated.div>
            <Component2 key={key} style={props}/>
          )
      )} */}
      <button
        onClick={() => {
          set(!show);
        }}
      >
        click
      </button>
      <Transition
        native
        items={show}
        from={{ position: "absolute", overflow: "hidden", height: 0 }}
        enter={[{ height: "auto" }]}
        leave={{ height: 0 }}
      >
        {(show) =>
          show && ((props) => <animated.div style={props}>hello</animated.div>)
        }
      </Transition>
    </div>
  );
}
