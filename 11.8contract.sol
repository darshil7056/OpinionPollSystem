// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentRegistry {
    struct Student {
        string name;
        bool exists;
        address walletAddress;
    }

 struct Professor {
    string name;
    bool exists;
    address walletAddress; // Add this field
}


struct Evaluation {
    uint8 rating;
    string comments;
    bool submitted;
    uint256 professorID; // Add a professorID field
}


    mapping(uint256 => Student) public students;
    mapping(uint256 => Professor) public professors;
    mapping(address => Evaluation) public evaluations;  // Mapping of addresses to evaluations
    mapping(address => bool) public participants;  // Mapping to keep track of participants
    address public admin;

    uint256[] public verifiedStudentIDs;
    uint256[] public verifiedProfessorIDs;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier hasRegistered(uint256 _id) {
        require(students[_id].walletAddress == msg.sender, "Participant wallet address does not match");
        _;
    }

    modifier hasNotVoted() {
        require(!participants[msg.sender], "Participant has already voted");
        _;
    }

    event EvaluationSubmitted(address indexed participant, uint8 rating, string comments, uint256 studentID, uint256 professorID);

    constructor() {
        admin = msg.sender;
    }

    function addStudents(uint256[] memory _ids, string[] memory _names) public onlyAdmin {
        require(_ids.length == _names.length, "IDs and names length mismatch");

        for (uint256 i = 0; i < _ids.length; i++) {
            students[_ids[i]] = Student(_names[i], true, address(0)); // Initialize walletAddress as address(0)
        }
    }

    function addProfessor(uint256 _id, string memory _name, address _professorAddress) public onlyAdmin {
    require(!professors[_id].exists, "Professor with this ID already exists");  
    professors[_id] = Professor(_name, true, _professorAddress);
    verifiedProfessorIDs.push(_id);
}


    function verifyStudent(uint256 _id) public {
        require(students[_id].exists, "Student does not exist");
        require(students[_id].walletAddress == address(0), "Student already verified");

        students[_id].walletAddress = msg.sender;
        verifiedStudentIDs.push(_id);
    }

    function getStudentWalletAddress(uint256 _id) public view returns (address) {
        return students[_id].walletAddress;
    }

    function isStudentVerified(uint256 _id) public view returns (bool) {
        return students[_id].walletAddress != address(0);
    }

    function getVerifiedStudents() public view returns (uint256[] memory, address[] memory) {
        uint256[] memory ids = new uint256[](verifiedStudentIDs.length);
        address[] memory addresses = new address[](verifiedStudentIDs.length);

        for (uint i = 0; i < verifiedStudentIDs.length; i++) {
            ids[i] = verifiedStudentIDs[i];
            addresses[i] = students[verifiedStudentIDs[i]].walletAddress;
        }

        return (ids, addresses);
    }

    function getProfessors() public view returns (uint256[] memory, string[] memory) {
        uint256[] memory ids = new uint256[](verifiedProfessorIDs.length);
        string[] memory names = new string[](verifiedProfessorIDs.length);

        for (uint i = 0; i < verifiedProfessorIDs.length; i++) {
            ids[i] = verifiedProfessorIDs[i];
            names[i] = professors[verifiedProfessorIDs[i]].name;
        }

        return (ids, names);
    }

function submitEvaluation(uint8 _rating, string memory _comments, uint256 _studentID, uint256 _professorID) public hasRegistered(_studentID) {
    require(_rating >= 0 && _rating <= 10, "Rating must be between 0 and 10.");
    require(professors[_professorID].exists, "Professor does not exist");

    Evaluation memory evaluation = Evaluation({
        rating: _rating,
        comments: _comments,
        submitted: true,
        professorID: _professorID
    });

    evaluations[students[_studentID].walletAddress] = evaluation;

    emit EvaluationSubmitted(students[_studentID].walletAddress, _rating, _comments, _studentID, _professorID);
}



function getEvaluationsByProfessorID(uint256 _professorID) public view returns (
    address[] memory addresses,
    uint8[] memory ratings,
    string[] memory comments,
    bool[] memory submitted,
    uint256[] memory studentIDs,
    string[] memory professorNames
) {
    require(professors[_professorID].exists, "Professor does not exist");
    require(professors[_professorID].walletAddress == msg.sender, "Access denied");
    
    uint256 numEvaluations = verifiedStudentIDs.length;
    addresses = new address[](numEvaluations);
    ratings = new uint8[](numEvaluations);
    comments = new string[](numEvaluations);
    submitted = new bool[](numEvaluations);
    studentIDs = new uint256[](numEvaluations);
    professorNames = new string[](numEvaluations);

    uint validCount = 0; // Initialize a counter to keep track of valid evaluations

    for (uint i = 0; i < numEvaluations; i++) {
        uint256 id = verifiedStudentIDs[i];
        Evaluation memory evaluation = evaluations[students[id].walletAddress];

        if (evaluation.professorID == _professorID) {
            // Include evaluations associated with the specified professor
            addresses[validCount] = students[id].walletAddress;
            ratings[validCount] = evaluation.rating;
            comments[validCount] = evaluation.comments;
            submitted[validCount] = evaluation.submitted;
            studentIDs[validCount] = id;
            professorNames[validCount] = professors[_professorID].name;
            validCount++;
        }
    }

    // Resize arrays to match the number of valid evaluations
    assembly {
        mstore(addresses, validCount)
        mstore(ratings, validCount)
        mstore(comments, validCount)
        mstore(submitted, validCount)
        mstore(studentIDs, validCount)
        mstore(professorNames, validCount)
    }

    return (addresses, ratings, comments, submitted, studentIDs, professorNames);
}


}
