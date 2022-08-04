import React, { useState } from "react";
import "./index.css";
import KeyBoardListner from "./KeyboardListener";
import Button from "../components/Button/Button";

//Functional Component to Display Box 
const BoxComponent = () => {
  
  const [isOff, setIsOff] = useState(true);

  //Initial boxState  and setBoxState to update it
  const [boxState, setboxState] = useState({
    activeBox: {},
    objects: [
      { id: 1, top: 1 , zindex: 10, display: "block", left:1 },
    ],
  });

  //Increase the no. of box and their respective zindex
  const increaseObjects = (index) => {
    setboxState({
      ...boxState,
      objects: boxState.objects.concat({ id: index, top: 1, zindex: index+20, left:1 }),
    });
  };

  //Select a box
  const toggleActive = (index) => {
    setboxState({ ...boxState, activeBox: boxState.objects[index] });
  };

  //Change styling of selected box
  const toggleActiveStyles = (index) => {
    if (boxState.objects[index].id === boxState.activeBox.id) {
      return "box active";
    } else {
      return "box inactive";
    }
  };

 //Move the box a/c to keys by changing different css styling 
 const handleGo = (topDifference, sideDifference, displayDelete) => {
  const {objects, activeBox} = boxState
  const boxIndex = objects.findIndex((i) => i.id === activeBox.id);
  console.log("handleGoDown -> boxIndex", activeBox);
  let newBoxData = boxState;
  newBoxData.objects[boxIndex] = {
    ...newBoxData.objects[boxIndex],
    top: newBoxData.objects[boxIndex].top-topDifference,
    left: newBoxData.objects[boxIndex].left-sideDifference,
    display: displayDelete
  };
  setboxState({ ...newBoxData });
};


  return (
      <>
        <KeyBoardListner  handleGo={handleGo}>
          <Button
          type="button"
          bsClass="btn btn-outline-primary"
          onClick={() => increaseObjects(boxState.objects.length + 1)}
          >
            ADD MORE BOXES
          </Button>
          <Button type="button" bsClass="btn-toggle btn-outline-primary"  onClick={() => {setIsOff(!isOff)}}>{ isOff ? 'Toggle ON' : 'Toggle OFF'}</Button>
          <div className="constBox">
            {boxState.objects.map((elements, index) => {
              const {top, left, zindex, display} = elements
              return(
              <div
                key={index}
                className={toggleActiveStyles(index)}
                style={{ display: display, top: `${top}px`, zIndex: zindex,left:`${left}px`, position: "relative"}}
                onClick={() => toggleActive(index)}
              >
                {index+1} Box
              </div>)}
            )}
          </div>
        </KeyBoardListner>
      </>
  );
};

export default BoxComponent;