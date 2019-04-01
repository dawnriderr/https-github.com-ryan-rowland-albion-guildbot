/**
 * Discord Bot settings. These are mandatory and will affect what the bot
 *   posts about, and where it posts to.
 */

module.exports = {
  discord: {
    // The Discord token of the Bot to post through.
    token: process.env.NTYyMjEyNzgzOTE2MzE4NzM5.XKJKCg.6b51gJCZI1T4qzCf5z78BntEIig,
    // The ID of the discord channel to post battleboard infos to.
    feedChannelId: process.env.562214608643817483,
    // The ID of the discord channel to post albion status infos to.
    statusChannelId: process.env.461409185440202754
  },
  guild: {
    // The name of your guild (or guilds, if the guild is large).
    guilds: process.env.ALBION_GUILDS
    ? process.env.Gaudia Certaminis.split(',') : [],
    // The alliance your guild belongs to
    alliance: process.env.BAM
  },
  battle: {
    // Min players to report as battle
    minPlayers: 10,
    // Min guild players to report as battle
    minRelevantPlayers: 3
  },
  kill: {
    // Min killfame to report kill
    minFame: 1000
  }
};
