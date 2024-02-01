import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch } from "react-redux";
import { addMovie } from "../../redux/movieSlice";
import { Navigate, useNavigate } from "react-router-dom";

export default function CardComp({ movie }) {
  // hook ==============================================
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  // handeler ==========================================
  const detailsHandeler = (i) => {
    dispatch(addMovie(movie));
    Navigate("/movie");
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        style={{ height: "330px" }}
        variant="top"
        src={movie.show.image ? movie.show.image.medium : "/img/no.png"}
      />
      <Card.Body>
        <Card.Title>{movie.show.name}</Card.Title>
        <Card.Text>Type: {movie.show.type}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>language: {movie.show.language}</ListGroup.Item>
        <ListGroup.Item>
          Rating: {movie.show.rating.average || "not available"}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <button className="btn btn-primary w-100" onClick={detailsHandeler}>
          Show details
        </button>
      </Card.Body>
    </Card>
  );
}
