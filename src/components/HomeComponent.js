import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl'; 
import { FadeTransform } from "react-animation-components";

function RenderCard({ item, isLoading, error }) {
    if(isLoading){
        return(
            <Loading />
        );
    } else if (error) {
        return(
            <h4>{error}</h4>
        );
    } else {
        return(
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
    }
}

function Home(props) {

    document.title = 'Con Fusion';

    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} 
                    isLoading={props.dishesLoading}
                    error={props.dishesError} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promo}
                    isLoading={props.promosLoading}
                    error={props.promosError} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}
                    isLoading={props.leadersLoading}
                    error={props.leadersError} />
                </div>
            </div>
        </div>
    );
}

export default Home;