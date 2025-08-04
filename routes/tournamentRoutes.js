const express = require('express');
const router = express.Router();
const tournamentController = require('../controllers/tournamentController');

// Basic CRUD
router.post('/', tournamentController.createTournament);       // Add new tournament
router.get('/', tournamentController.getAllTournaments);       // Get all tournaments

// Search
router.get('/search', tournamentController.searchTournaments); // Search by date, location, etc.

// Get all members in a tournament
router.get('/:tournamentId/members', tournamentController.getMembersInTournament);

// Create new tournament
router.post('/', tournamentController.createTournament);

// Get all tournaments
router.get('/', tournamentController.getAllTournaments);

// Search tournaments by date or location
router.get('/search', tournamentController.searchTournaments);

// Get all members in a specific tournament
router.get('/:tournamentId/members', tournamentController.getTournamentMembers);

module.exports = router;
