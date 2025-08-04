const { Tournament, Member, MemberTournament } = require('../models');

// Create a new tournament
exports.createTournament = async (req, res) => {
  try {
    const tournament = await Tournament.create(req.body);
    res.status(201).json(tournament);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all tournaments
exports.getAllTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.findAll();
    res.json(tournaments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Search tournaments (dummy for now)
exports.searchTournaments = (req, res) => {
  res.send('Tournament search coming soon!');
};

// Get all members in a tournament (dummy for now)
exports.getMembersInTournament = (req, res) => {
  res.send('List of members for a tournament coming soon!');
};
