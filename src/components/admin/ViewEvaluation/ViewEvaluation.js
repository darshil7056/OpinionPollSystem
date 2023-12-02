import React from 'react';
import AdminNavigation from '../AdminNavigation/AdminNavigation';
import "./ViewEvaluation.css"
import ProfessorNavigation from '../AdminNavigation/ProfessorNavigation';

const ViewEvaluation = () => {
    const staticData = [
        {
          address: '0x123abc',
          teachingStyleAndMethods: 8,
          assignmentsAndAssessments: 7,
          feedbackAndGrading: 9,
          classroomManagement: 9,
          overallImpactOnLearning: 8,
          comments: 'Great work!',
          submitted: true,
        },
        {
          address: '0x456def',
          teachingStyleAndMethods: 7,
          assignmentsAndAssessments: 6,
          feedbackAndGrading: 8,
          classroomManagement: 8,
          overallImpactOnLearning: 7,
          comments: 'Good effort!',
          submitted: true,
        },
        {
          address: '0x789ghi',
          teachingStyleAndMethods: 9,
          assignmentsAndAssessments: 8,
          feedbackAndGrading: 9,
          classroomManagement: 9,
          overallImpactOnLearning: 9,
          comments: 'Excellent job!',
          submitted: false,
        },
      ];
    
  return (
    <>
        {/* <AdminNavigation /> */}
        <ProfessorNavigation />
      <h2>View Evaluation </h2>
      <div className="table-container">
      <table className="evaluation-table">
        <thead>
          <tr>
          <th>Address</th>
            <th>Teaching Style and Methods</th>
            <th>Assignments and Assessments</th>
            <th>Feedback and Grading</th>
            <th>Classroom Management</th>
            <th>Overall Impact on Learning</th>
            <th>Comments</th>
            <th>Submitted</th>
          </tr>
        </thead>
        <tbody>
        {staticData.map((item, index) => (
            <tr key={index}>
              <td>{item.address}</td>
              <td>{item.teachingStyleAndMethods}</td>
              <td>{item.assignmentsAndAssessments}</td>
              <td>{item.feedbackAndGrading}</td>
              <td>{item.classroomManagement}</td>
              <td>{item.overallImpactOnLearning}</td>
              <td>{item.comments}</td>
              <td>{item.submitted.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default ViewEvaluation;
