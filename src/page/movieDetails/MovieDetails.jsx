import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./movieDetails.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "boxicons";
import { useNavigate } from "react-router-dom";

export default function MovieDetails() {
  // useState hook ===============================
  const [active, setActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  // hook call =========================================
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    user && setName(user.name);
    user && setEmail(user.email);
    user && setAddress(user.address);
  }, []);
  const movieInfo = useSelector((i) => {
    return i.movie;
  });

  // handeler=======================================
  const fromBookHandeler = (e) => {
    e.preventDefault();
    const details = {
      name,
      email,
      address,
    };
    localStorage.setItem("user", JSON.stringify(details));
    localStorage.setItem("movie", JSON.stringify(movieInfo));
    alert("your booking has been confirmed");
    navigate("/");
  };
  return (
    <>
      <div className="infoContainer">
        <img
          className="infoImg"
          src={
            movieInfo.show.image ? movieInfo.show.image.original : "/img/no.png"
          }
        />
        <div className="infoDetils">
          <h1>{movieInfo.show.name}</h1>
          <p>
            <strong>language:</strong> {movieInfo.show.language}
          </p>
          <p>
            <strong>Type:</strong> {movieInfo.show.type}
          </p>
          <p>
            <strong>Rating:</strong>{" "}
            {movieInfo.show.rating.average || "not available"}
          </p>
          <p>
            <strong>Score:</strong> {Math.floor(movieInfo.score * 10)}/10
          </p>
          <p>
            <strong>Genres:</strong>
            {movieInfo.show.genres.map((i, a) => (
              <span key={a}>{i}, </span>
            ))}
          </p>
          <p>
            <strong>Summary:</strong> {movieInfo.show.summary}
          </p>
          <button className="btn btn-warning" onClick={() => setActive(true)}>
            Book Movie Ticket
          </button>
        </div>
      </div>

      {/* user from ============================================== */}
      {active && (
        <div className="fromContainer">
          <Form className="fromSubCon">
            <div className="boxClose" onClick={() => setActive(false)}>
              <box-icon type="solid" name="x-circle" color="#444"></box-icon>
            </div>
            <h5>Movie Name: {movieInfo.show.name} </h5>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </Form.Group>

            <Button
              variant="success"
              className="w-100 mt-2"
              type="submit"
              onClick={(e) => fromBookHandeler(e)}
            >
              Book Movie Ticket
            </Button>
          </Form>
        </div>
      )}
    </>
  );
}
