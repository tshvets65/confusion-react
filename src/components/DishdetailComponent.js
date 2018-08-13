import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    renderComments(arr) {
        if(arr.length===0)
            return <div></div>;

        const comments = arr.map((c) => {
            var d = new Date(c.date).toDateString().slice(4);
            return (
                <li key={c.id}>
                    <p>{c.comment}</p>
                    <p>--{c.author}, {d} </p>
                </li>
            );
        });

        console.log("comments rendered")

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

        if (dish != null) {
            console.log("dish rendered");
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
        
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        if(this.props.selectedDish==null) {
            return (
                <div></div>
            );
        } else {
            const comments = this.props.selectedDish.comments.map((c) => {
                var d = new Date(c.date).toDateString().slice(4);
                return (
                    <li key={c.id}>
                        <p>{c.comment}</p>
                        <p>--{c.author}, {d} </p>
                    </li>
                );
            });
            return (
                //this.renderDish(this.props.selectedDish) && this.renderComments(this.props.selectedDish.comments)
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                            <CardBody>
                                <CardTitle>{this.props.selectedDish.name}</CardTitle>
                                <CardText>{this.props.selectedDish.description}</CardText>
                            </CardBody>
                        </Card> 
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {comments}
                        </ul>
                    </div>
                </div>
            );
        }
	}
}

export default DishDetail;