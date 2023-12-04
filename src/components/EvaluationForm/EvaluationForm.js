import React, { useState } from 'react';
import './EvaluationForm.css';
import StarRatings from 'react-star-ratings';
import { useNavigate } from 'react-router-dom';

function EvaluationForm() {
  const navigate = useNavigate();
  const [professor, setProfessor] = useState("Mr Harsh");
  const [teachingRating, setTeachingRating] = useState(0);
  const [assignmentsRating, setAssignmentsRating] = useState(0);
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [managementRating, setManagementRating] = useState(0);
  const [impactRating, setImpactRating] = useState(0);
  //let { enrollmentNo } = useParams();
  //console.log(enrollmentNo)
    // Decrypt the enrollment number
    // const decryptedEnrollmentNo = CryptoJS.AES.decrypt(enrollmentNo, 'secretKey').toString(CryptoJS.enc.Utf8);
    // console.log(decryptedEnrollmentNo)


  const handleSubmit = (event) => {
    event.preventDefault();
    const comments = event.target.comments.value;

    // You can add logic to handle the submission here

    // For demonstration purposes, let's log the values to the console  
    console.log('Professor Name:', professor);
    console.log('Teaching Rating:', teachingRating);
    console.log('Assignments Rating:', assignmentsRating);
    console.log('Feedback Rating:', feedbackRating);
    console.log('Management Rating:', managementRating);
    console.log('Impact Rating:', impactRating);
    console.log('Comments:', comments);
    window.alert("Evaluation Submitted")
    navigate("/")
  };

  return (
    <div className="form-container">
      <header>
        <h1>Evaluate Professor</h1>
        <form onSubmit={handleSubmit} id="evaluationForm">
          <label htmlFor="professor">Professor Name:</label>
          <select id="professor" name="professor" className="input-field"   value={professor}
            onChange={(e) => setProfessor(e.target.value)} required>
            <option value="professor1">Mr Harsh</option>
            <option value="professor2">Dr Sam</option>
            <option value="professor3">Dr Rudani</option>
          </select> 

          <label htmlFor="teachingRating">Teaching Style and Methods:</label>
          <StarRatings
            rating={teachingRating}
            starRatedColor="blue"
            changeRating={(newRating) => setTeachingRating(newRating)}
            numberOfStars={5}
            name='teachingRating'
          />

          <label htmlFor="assignmentsRating">Assignments and Assessments:</label>
          <StarRatings
            rating={assignmentsRating}
            starRatedColor="blue"
            changeRating={(newRating) => setAssignmentsRating(newRating)}
            numberOfStars={5}
            name='assignmentsRating'
          />

          <label htmlFor="feedbackRating">Feedback and Grading:</label>
          <StarRatings
            rating={feedbackRating}
            starRatedColor="blue"
            changeRating={(newRating) => setFeedbackRating(newRating)}
            numberOfStars={5}
            name='feedbackRating'
          />

          <label htmlFor="managementRating">Classroom Management:</label>
          <StarRatings
            rating={managementRating}
            starRatedColor="blue"
            changeRating={(newRating) => setManagementRating(newRating)}
            numberOfStars={5}
            name='managementRating'
          />

          <label htmlFor="impactRating">Overall Impact on Learning:</label>
          <StarRatings
            rating={impactRating}
            starRatedColor="blue"
            changeRating={(newRating) => setImpactRating(newRating)}
            numberOfStars={5}
            name='impactRating'
          />

          <label htmlFor="comments">Comments:</label>
          <textarea id="comments" name="comments" rows="4" className="textarea-field"></textarea>

          <input type="submit" value="Submit Evaluation" className="submit-btn" />
        </form>
      </header>
    </div>
  );
}

export default EvaluationForm;
