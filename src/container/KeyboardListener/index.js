import  {Component} from "react";
import {KeyCodes} from "./keyCodes";
import PropTypes from "prop-types";

class KeyBoardListner extends Component{
  
    //addevent listner of keydown for every re-render
    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    onKeyDown = (keyCode) => {
        const {handleGo}=this.props  //getting the handleGo function from BoxComponent
        // eslint-disable-next-line default-case
        switch (keyCode) {
            case KeyCodes.ARROW_UP:     //for moving up the box by 30px
                handleGo(30, 0);
                break;
            case KeyCodes.W_UP:         //for moving up the box by 30px
                handleGo(30, 0);
                break;
            case KeyCodes.ARROW_DOWN:   //for moving down the box by 30px
                handleGo(-30, 0);
                break;
            case KeyCodes.S_DOWN:       //for moving down the box by 30px
                handleGo(-30, 0);
                break;
            case KeyCodes.ARROW_LEFT:   //for moving left the box by 30px
                handleGo(0, 30);
                break;
            case KeyCodes.A_LEFT:       //for moving left the box by 30px
                handleGo(0, 30);
                break;
            case KeyCodes.ARROW_RIGHT: //for moving right the box by 30px
                handleGo(0, -30);
                break;
            case KeyCodes.D_RIGHT:     //for moving right the box by 30px
                handleGo(0, -30);
                break;
            case KeyCodes.DELETE:      //for deleting the component
                handleGo(0,0,"none")
      }
    };

    //function for checking the keyCodes and then executing the keyDown func
    handleKeyDown = event => {
        event.preventDefault();
        const {keyCode} = event;
        const allowedKeyCodes = Object.values(KeyCodes)
        if(allowedKeyCodes.includes(keyCode)){
            this.onKeyDown(keyCode)
        }
        return;
    }
    
    render(){
        return this.props.children
    }
}

KeyBoardListner.propTypes = {
    onKeyDown: PropTypes.func.isRequired
};


export default  KeyBoardListner ;

