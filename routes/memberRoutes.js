const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');

// Create a new member
router.post('/', memberController.createMember);

// Get all members
router.get('/', memberController.getAllMembers);

// Search members by name, membership type, phone number, or tournament start date
router.get('/search', memberController.searchMembers);

// Add a member to a tournament (joins the many-to-many table)
router.post('/:memberId/tournaments/:tournamentId', memberController.addMemberToTournament);

module.exports = router;
