import {Component} from 'react';

class InfoUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            user : ''
        }
    }
}

buscarId = () => {
    console.log('chamando API');

    fetch('https://api.github.com/users/' + this.state.user)
}



export default InfoUser;
