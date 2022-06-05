import React from "react";
import '../../../style/style.css'
import TableHeader from "./TableHeader";
import TableItems from "./TableItems";

function PropsTutorial() {
    return (
        <div className="app w-50 mx-auto">
            <table className="table table-striped">
                <TableHeader />
                <tbody>
                <TableItems num='1' progLang='TypeScript' course='MERN stack'/>
                <TableItems num='2' progLang='JavaScript' course='Javascript from zero to hero'/>
                <TableItems num='3' progLang='Python' course='Python course'/>
                </tbody>
            </table>
        </div>
    )
}

export default PropsTutorial