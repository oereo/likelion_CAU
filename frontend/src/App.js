import React from 'react';
import './App.css';
import api from './api';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
        }
    }

    handlingChange = (event) => {
        this.setState({ [event.target.title]: event.target.value })
    }

    handlingSubmit = () => {
        let result = api.createPost({ title: this.state.title, content: this.state.content })
        console.log("완료!", result)
    }

    render() {
        return (
            <div className="App">
                <div className="Posting">
                    <h2>test posting</h2>
                    <form onSubmit={this.handlingSubmit}>
                        <input
                            name="title"
                            value={this.state.title}
                            onChange={this.handlingChange}
                        />
                        <textarea
                            name="content"
                            value={this.state.content}
                            onChange={this.handlingChange}
                        />
                    </form>
                </div>
                <div className="Viewing">

                </div>
            </div>
        );
    }
}


export default App;



// import React, { Component } from 'react';

// class App extends Component {
//     state = {
//         posts: []
//     };

//     async componentDidMount() {
//         try {
//             const res = await fetch('http://127.0.0.1:8000/blogcontent/2');
//             const posts = await res.json();
//             this.setState({
//                 posts
//             });
//         } catch (e) {
//             console.log(e);
//         }
//     }

//     render() {
//         return (

//             <div>
//                 df
//                 {this.state.posts.map(item => (
//                     <div key={item.author_name}>
//                         <h1>{item.title}</h1>
//                         <span>{item.content}</span>
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }

// export default App;
