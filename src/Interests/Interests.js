import React, { Component } from 'react';
import ContextProvider from '../Context'

export default class Interests extends Component {

    static contextType = ContextProvider

    handleCheck = (e) => {
        let value = e.target.id;
        let checked = e.target.checked;
        console.log('value:', value)
        console.log('checked:', checked)
        if (checked) {
            //add checked values to context.userInterests
            this.context.addUserInterests(value);
        } else {
            //remove them if they're unchecked
            this.context.removeUserInterests(value)
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('submitted')
        //what to we do here?
    }
    

    render() {
        return (
            <div>
                <header className="interests-header">
                    { /* have the heading display the users name */}
                    <h1>What does the user like to do when travelling?</h1>
                    <section>
                        <p>Help us get an idea of what you like to partake in when travelling! Check those that apply to you.</p>
                    </section>
                </header>
                <div>
                    <form className="interests-form" onSubmit={e=>this.handleSubmit(e)}>
                        <label htmlFor="camping">Camping</label>
                        <input id="camping" type="checkbox" onClick={e=>this.handleCheck(e)}></input>
                        <label htmlFor="hiking">Hiking</label>
                        <input id="hiking" type="checkbox" onClick={e=>this.handleCheck(e)}></input>
                        <label htmlFor="beaches">Beaches</label>
                        <input id="beaches" type="checkbox" onClick={e=>this.handleCheck(e)}></input>
                        <label htmlFor="breweries">Breweries/Wineries</label>
                        <input id="breweries" type="checkbox" onClick={e=>this.handleCheck(e)}></input>
                        <label htmlFor="museums">Museums</label>
                        <input id="museums" type="checkbox" onClick={e=>this.handleCheck(e)}></input>
                        <label htmlFor="novelty">Novelty</label>
                        <input id="novelty" type="checkbox" onClick={e=>this.handleCheck(e)}></input>
                        <label htmlFor="military">Military/Memorials/Battlefields</label>
                        <input id="military" type="checkbox" onClick={e=>this.handleCheck(e)}></input>
                        <label htmlFor="monuments">Monuments/Landmarks</label>
                        <input id="monuments" type="checkbox" onClick={e=>this.handleCheck(e)}></input>
                        <label htmlFor="parks">Parks</label>
                        <input id="parks" type="checkbox" onClick={e=>this.handleCheck(e)}></input>
                        <label htmlFor="zoos">Zoos</label>
                        <input id="zoo" type="checkbox" onClick={e=>this.handleCheck(e)}></input>
                        <label htmlFor="amusement">Amusement Parks</label>
                        <input id="amusement" type="checkbox" onClick={e=>this.handleCheck(e)}></input>                        
                        <label htmlFor="haunted">Haunted</label>
                        <input id="haunted" type="checkbox" onClick={e=>this.handleCheck(e)}></input>
                        <div>
                            <button 
                            //submit handler is called in form tag
                            onClick={() => this.props.history.push('/dashboard')}
                            >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
