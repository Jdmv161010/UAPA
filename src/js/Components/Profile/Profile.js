import React from "react";
import { ProfessorProfile } from "../forProfessor/Profile/Profile";
import { StudentProfile } from "../forStudent/Profile/Profile";
import { MainContainer } from "../Home/HomeStyled";

export const Profile = ({role}) => {
  return (
    <MainContainer>
      {role === "student" && <StudentProfile />}
      {role === "professor" && <ProfessorProfile />}
    </MainContainer>
  );
};
