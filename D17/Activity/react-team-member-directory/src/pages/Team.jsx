import React from "react";
import { useLocation } from "react-router-dom";
import TeamCard from "./TeamCard";
import { Container, Row } from "react-bootstrap";
import { team } from "../team-data/teamData";
import { Outlet } from "react-router-dom";

const Team = () => {
  const location = useLocation();
  const isDetailPage = location.pathname !== "/teams";

  return (
    <div className="mt-5">
      <h1 className="text-center fw-bold text-uppercase">
        {isDetailPage ? "Specific Team" : "Team Members"}
      </h1>
      <Container>
        {location.pathname === "/teams" ? (
          <Row className="g-4">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </Row>
        ) : (
          <Outlet />
        )}
      </Container>
    </div>
  );
};

export default Team;
