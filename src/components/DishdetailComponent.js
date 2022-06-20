import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function RenderComments({ comment }) {
  return (
    <div key={comment.id}>
      <p>{comment.comment}</p>
      <p>
        {comment.author} {comment.date}
      </p>
    </div>
  );
}

const DishDetail = (props) => {
  const { dish } = props;
  const { comments, id } = props.dish;

  const dishDetail = (
    <div key={id} className="col-12 col-sm-5 ml-1">
      <RenderDish dish={dish} />
    </div>
  );

  const commentDetail = (
    <div className="col-12 col-sm-5">
      <h2>Comments</h2>
      {comments.map((comment) => (
        <>
          <RenderComments comment={comment} />
        </>
      ))}
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        {dishDetail}
        {commentDetail}
      </div>
    </div>
  );
};

export default DishDetail;
