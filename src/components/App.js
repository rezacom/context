import React, { useContext ,contextType} from 'react';
import Navbar from "./Navbar";
import UserContext from '../contexts/index'
import LanguageProvider from './Language'

export default function MyApp() {
    return (
        <div>
            <LanguageProvider >
                <App />      
            </LanguageProvider>
        </div>
    )
}

 class App extends React.Component {
    static contextType = UserContext;
    
    render(){
        return (
            <div>
                <Navbar lan={this.context}/>  
            </div>
        )
    }
  
}
