const config = require('./config.json');

module.exports = function SlashCommands(mod) {
  mod.command.add(config.inspect, name => {
    mod.send('C_REQUEST_USER_PAPERDOLL_INFO', 1, {
      name: name
    });
  });

  mod.command.add(config.invite, name => {
    mod.send('C_REQUEST_CONTRACT', 1, {
      type: 4,
      unk1: 0,
      unk2: 0,
      unk3: 0,
      unk4: 0,
      name: name,
      data: 0
    });
  });

  mod.command.add(config.drop, () => {
    mod.send('C_LEAVE_PARTY', 1, {});
  });

  mod.command.add(config.disband, () => {
    mod.send('C_DISMISS_PARTY', 1, {});
  });

  mod.command.add(config.guildinvite, name => {
    mod.send('C_INVITE_USER_TO_GUILD', 1, {
      unk1: 0,
      unk2: 0,
      name: name
    });
  });

  mod.command.add(config.guildquit, () => {
    mod.send('C_LEAVE_GUILD', 1, {});
  });

  mod.command.add(config.guilddisband, () => {
    mod.send('C_DESTROY_GUILD', 1, {});
  });

  mod.command.add(config.reset, () => {
    mod.send('C_RESET_ALL_DUNGEON', 1, {});
  });

  this.destructor = function() {
    mod.command.remove(config.inspect);
    mod.command.remove(config.invite);
    mod.command.remove(config.drop);
    mod.command.remove(config.guildinvite);
    mod.command.remove(config.guildquit);
    mod.command.remove(config.guilddisband);
    mod.command.remove(config.reset);
  };
};
