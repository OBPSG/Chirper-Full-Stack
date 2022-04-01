import React, { useEffect, useState } from "react";
import ChirpCard from "./ChirpCard.jsx";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const Home = () => {
    //Retrieve all posts
    useEffect(() => {
        fetch("/api/chirps")
            .then((res) => { return res.json() })
            .then((posts) => {
                let chirps = [];
                posts.forEach(post => {
                    chirps.push({
                        id: post.id,
                        username: post.name,
                        message: post.content,
                        created: post._created
                    })
                });

                setChirps(chirps)
            })
            .catch((error) => { console.log(error) });
    }, [chirps])

    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [chirps, setChirps] = useState([]);

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);
    const handleChirpSubmit = (e) => {
        e.preventDefault();

        const newChirp = {
            username: username,
            message: message,
            created: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
            location: "Online"
        };

        //Call back-end API method to post new chirp
        fetch("/api/chirps", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newChirp)
        })
            .then((response) => {
                setChirps([...chirps, newChirp]);
            })
            .catch((error) => {
                alert("Something went wrong with creating the post!");
                console.log(error);
            })
    };

    return (
        <>
            <div className="container text-body text-center">
                <div className="row">
                    <div className="col-12 p-0">
                        <nav>
                            <img
                                className="banner"
                                src="./assets/banner.jpg"
                                alt="logo for awesome site yay"
                            />
                            <h1>Ghibli Chirpr</h1>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <form action="">
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control mb-1"
                                placeholder="Username"
                                aria-label="Username"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                            <textarea
                                className="form-control mb-2"
                                aria-label="With textarea"
                                placeholder="(500 characters max)"
                                value={message}
                                onChange={handleMessageChange}
                                cols="30"
                                rows="10"
                            ></textarea>
                            <button className="btn btn-dark" onClick={handleChirpSubmit}>
                                Chirp It!
                            </button>
                        </div>
                    </form>
                    <div className=" chirps mb-4">
                        {chirps.map((chirp) => (
                            <ChirpCard
                                id={chirp.id}
                                key={chirp.id}
                                username={chirp.username}
                                message={chirp.message}
                                created={chirp.created}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;

