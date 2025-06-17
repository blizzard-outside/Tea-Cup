import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const VarietyBar = observer(() => {
    const {product} = useContext(Context)

    return (
        <Row className="d-flex">
            {product.Varieties.map(variety =>
                <Card
                    style={{cursor:'pointer'}}
                    key={variety.id}
                    className="p-3"
                    onClick={() => product.setSelectedVariety(variety)}
                    border={Variety.id === product.selectedVariety.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default VarietyBar;
