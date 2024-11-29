import React from "react";
import { Card, Col } from "react-bootstrap";

const TeamCard = ({ member }) => {
  return (
    <Col xs={12} sm={6} md={3} lg={4} className="mt-5">
      <Card className="card">
        <Card.Body>
          <Card.Title className="fw-bold">{member.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {member.role}
          </Card.Subtitle>
          <Card.Text>{member.description}</Card.Text>
          <Card.Link href={`/teams/${member.id}`}>View Details</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TeamCard;
