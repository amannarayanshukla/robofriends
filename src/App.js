import React,{Component} from 'react';

import Heading  from "./component/Heading/Heading";
import SearchBox from "./component/SearchBox/SearchBox";
import Scroll from "./component/Scroll/Scroll";
import CardList from "./component/CardList/CardList";
import './App.css';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots:[],
            searchfield :``,
        };
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((data) => data.json())
            .then((users)=>{
                this.setState({robots : users})
            }).catch((error) => {
                console.log(error)
            })
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    };

    render() {
        let {robots, searchfield} = this.state;
        robots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase().trim())
        });


        return (
            <div className="App">
                <Heading/>
                <SearchBox searchProps = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots={robots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;
