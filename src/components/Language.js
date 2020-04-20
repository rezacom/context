import React, {Component} from "react";
import { Divider } from "@material-ui/core";
import UserContext from '../contexts/index'


 class LanguageProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: "Persian",
            words: {
               home: "خانه",
               events: "رویداد ها",
               aboutUs: "درباره ما",
               contactUs: "تماس با ما",
               language: "زبان"
            }
        }
    }

    render() {
       
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    } 
  
} 

//LanguageProvider.contextType = UserContext;

export default LanguageProvider;

