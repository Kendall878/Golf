const { Member, Tournament, MemberTournament } = require('../models');
const { Op } = require('sequelize');

// Create a new member
exports.createMember = async (req, res) => {
  try {
    const member = await Member.create(req.body);
    res.status(201).json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all members
exports.getAllMembers = async (req, res) => {
  try {
    const members = await Member.findAll();
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// earch members with filters
exports.searchMembers = async (req, res) => {
  try {
    const { name, type, phone, tournamentStartDate } = req.query;
    const where = {};

    // Flexible filters
    if (name) {
      where[Op.or] = [
        { firstName: { [Op.iLike]: `%${name}%` } },
        { lastName: { [Op.iLike]: `%${name}%` } },
      ];
    }

    if (type) {
      where.membershipType = type;
    }

    if (phone) {
      where.phoneNumber = { [Op.iLike]: `%${phone}%` };
    }

    // Base query
    let members = await Member.findAll({ where });

    // Filter by tournament date (requires join)
    if (tournamentStartDate) {
      members = await Member.findAll({
        include: {
          model: Tournament,
          where: { startDate: tournamentStartDate },
          through: { attributes: [] },
        },
      });
    }

    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const { Member, Tournament } = require('../models');

exports.addMemberToTournament = async (req, res) => {
  try {
    const { memberId, tournamentId } = req.params;

    // Find both entities
    const member = await Member.findByPk(memberId);
    const tournament = await Tournament.findByPk(tournamentId);

    if (!member || !tournament) {
      return res.status(404).json({ error: 'Member or Tournament not found' });
    }

    // Add the member to the tournament (many-to-many)
    await member.addTournament(tournament);

    res.status(200).json({
      message: `Member ${member.firstName} added to tournament ${tournament.name}`,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

