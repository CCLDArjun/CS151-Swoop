import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid white;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid #228b22;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 15px;
  font-weight: 600;
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
      <LinkItem>
            <Link href="/rider/ourMission">Our Mission</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/rider/setCarbonGoals">View Planned Trips</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/rider/viewImpact">View Carpool Requests</Link>
          </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}