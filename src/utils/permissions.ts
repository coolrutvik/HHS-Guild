export const GUILD_ROLES = {
  LEADER: 'Leader',
  VICE_LEADER: 'Vice-Leader',
  OFFICER: 'Officer',
  MEMBER: 'Member',
} as const;

export const canAccessAdminPanel = (role?: string) => {
  return (
    role === GUILD_ROLES.LEADER ||
    role === GUILD_ROLES.VICE_LEADER ||
    role === GUILD_ROLES.OFFICER
  );
};

export const isLeader = (role?: string) => {
  return role === GUILD_ROLES.LEADER;
};