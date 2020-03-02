module.exports = function createDreamTeam(members) {
  return  !(members instanceof Array) ? false : members.filter(i => typeof i === 'string').map(i => i.replace(/ /gi, '')[0].toUpperCase()).sort().join('');
};