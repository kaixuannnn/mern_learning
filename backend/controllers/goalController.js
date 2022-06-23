//@desc Get goals
//@route GET /api/goals
//@acess Private
const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get Goals' })
}
//@desc Set goal
//@route POST /api/goals
//@acess Private
const setGoal = (req, res) => {
  res.status(200).json({ message: 'Set goals' })
}
//@desc UPDATE goals
//@route PUT /api/goals
//@acess Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `put goals ${req.params.id}` })
}
//@desc Delete goals
//@route DELETE /api/goals
//@acess Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goals ${req.params.id}` })
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}
