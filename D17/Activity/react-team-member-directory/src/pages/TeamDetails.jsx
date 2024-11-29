import React from "react";
import { useParams } from "react-router-dom";
import { team } from "../team-data/teamData";
import { Card } from "react-bootstrap";

const TeamDetails = () => {
  const { id } = useParams();
  const member = team.find((member) => member.id === parseInt(id));

  if (!member) return <div>Team member not found</div>;

  console.log(member);

  return (
    <div className="mt-5 d-flex justify-content-center">
      <Card className="card-details">
        <Card.Body className="card-body">
          <Card.Title className="fw-bold">{member.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {member.role}
          </Card.Subtitle>
          <Card.Text>{member.description}</Card.Text>
          <Card.Link href={"/teams"}>Back</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TeamDetails;
