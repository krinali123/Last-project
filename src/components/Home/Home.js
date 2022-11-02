import React from 'react';
import '../Home/Home.css'
function Home(props) {
    return (
        <>
            <section>
                <div class="background">
                    <div class="content">
                        <h4 className='textcolor'>Welcome to My Product</h4>
                    <img src="https://img.freepik.com/free-photo/smiley-woman-holding-transparent-umbrella-leaves_23-2148647662.jpg?w=900&t=st=1666152693~exp=1666153293~hmac=b8d527b3a0d576ef330d4cdd336fd62007eb50d80ff56f78133c83a5b6787226" alt="img" />
                        <h1>Creative & Strategic Digital Marketing Agency</h1>
                        <button class="btn">GET STARTED</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;