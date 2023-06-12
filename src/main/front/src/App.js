import axios from 'axios';
import { useEffect, useState } from "react";
import img1 from './1.jpg';
import './App.css';

function App() {
    const [message, setMessage] = useState([]);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        console.log("useEffect");
        fetch("/hello")
            .then((response) => {
                console.log("hello");
                return response.json();
            })
            .then(function (data) {
                setMessage(data);
            });

        axios.get("/list")
             .then(res=>{
                console.log("list");
                setData(res.data);
                console.log(res.data.length);
              })
    }, []);

    return (
        <div className="App">
            <header>  
                <img src={ img1 } style={{ width: '200px' }}/>   
                <h1>Test-10</h1>          
                <ul style={{ listStyle: 'none' }}>
                  {
                    message.map((text, index) => <li key={ index }>
                        { text }
                      </li>)
                  }
                </ul>
            </header>
            <hr/>
            <section>
                <h2>SpringBoot /list 로부터 받은 데이타 출력</h2>
                {
                  data.map((obj, index) => <li key={ index }>
                    { obj.name } : { obj.addr } 거주({ obj.age }세)
                  </li>)
                }
            </section>
        </div>
    );
}

export default App;
