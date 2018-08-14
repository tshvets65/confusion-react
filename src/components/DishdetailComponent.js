import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderComments(arr) {
        if(arr.length===0)
            return <div></div>;

        const comments = arr.map((c) => {
            //var d = new Date(c.date).toDateString().slice(4);
            var d = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)));
            return (
                <li key={c.id}>
                    <p>{c.comment}</p>
                    <p>--{c.author}, {d} </p>
                </li>
            );
        });

        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                     {comments}
                </ul>
            </div>      
        );
    }

    renderDish(dish) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card> 
                </div>    
            );
    }

    render() {
        if(this.props.dish==null) {
            return (
                <div></div>
            );
        } else {
            var renderedDish = this.renderDish(this.props.dish);
            var renderedComments = this.renderComments(this.props.dish.comments);
            return (
                <div className="container">
                    <div className="row">
                        {renderedDish}{renderedComments}
                    </div>
                </div>
            );
        }
	}
}

export default DishDetail;