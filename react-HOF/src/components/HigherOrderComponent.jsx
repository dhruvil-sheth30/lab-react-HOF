import { Component } from "react";

export default class HigherOrderComponent extends Component {

    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ],
            filteredData:[],
            filteredWithName:[],
            filteredWithAge:[],
            total : 0
        }
        var filteredData = this.state.userData.filter((el) => el.user_type === "Designer")
        var filteredWithName = this.state.userData.filter((el) => el.name[0] == "J")
        var filteredWithAge = this.state.userData.filter((el) => el.age > 28 && el.age <= 50)
        var sum = this.state.userData.reduce((accumulator,el) => {
            if(el.user_type == "Designer"){
                accumulator += el.years;
            }
            return accumulator
        }, 0);

        this.state.filteredWithName = filteredWithName;
        this.state.total = sum;
        this.state.filteredData = filteredData;
        this.state.filteredWithAge = filteredWithAge;
        
        
    }

    render(){
        return(
            <div style={{width: "80%", textAlign : "initial"}}>
                <h1>Display All Items</h1>
                {this.state.userData.map((el) => (
                    <div key={el.id} style={{width: "70%"}}>
                        <ul>
                            <li>ID :{el.id} Name :{el.name} Type: {el.user_type}</li>
                        </ul>
                    </div>
                ))}

                <h1>Display all data based on UserTyper</h1>
                {this.state.filteredData.map((el) => (
                    <div key={el.id} style={{width: "70%"}}>
                        <ul>
                            <li>ID :{el.id} Name :{el.name} Type: {el.user_type}</li>
                        </ul>
                    </div>
                ))}

                <h1>Filtered all the data based on greated than  28 and less than 50</h1>
                {this.state.filteredData.map((el) => (
                    <div key={el.id} style={{width: "70%"}}>
                        <ul>
                            <li>ID :{el.id} Name :{el.name} Type: {el.user_type}</li>
                        </ul>
                    </div>
                ))}

                <h1>Display all the data starting with letter J</h1>
                {this.state.filteredData.map((el) => (
                    <div key={el.id} style={{width: "70%"}}>
                        <ul>
                            <li>ID :{el.id} Name :{el.name} Type: {el.user_type}</li>
                        </ul>
                    </div>
                ))}

                <h1>Find the total years of Designers</h1>
                <h2>{this.state.total}</h2>
            </div>
        )
    }
}