import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

 class Connexion extends Component {
     state = {
         pseudo: '',
         isClicked: false
     }

     handleChange = (event) => {
         const pseudo = event.target.value
         this.setState({ pseudo })
     }

     handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ isClicked: true })
     }

    render() {

        if(this.state.isClicked){
            return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
        }

        return (
            <div className='connexionBox'>
                <form className='connexion' onSubmit={this.handleSubmit}>
                    <input
                    value={this.state.pseudo}
                    onChange={this.handleChange}
                    placeholder='pseudo'
                    type='text'
                    required />
                    <button type='submit'>GO</button>
                </form>
            </div>
        )
    }
}

export default Connexion