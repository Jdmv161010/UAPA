import React from "react";
import {ProfessorProfile} from "../forProfessor/Profile/Profile";
import {StudentProfile} from "../forStudent/Profile/Profile";

export const Profile = ({role}) => {
    return (
        <main>
            {role === "student" && <StudentProfile/>}
            {role === "professor" && <ProfessorProfile/>}
        </main>
    );
};
