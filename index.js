const Command = require('command')
const config = require('./config.json')

module.exports = function SlashCommands(dispatch) {
  const command = Command(dispatch)

  command.add(config.inspect, (name) => {
    dispatch.toServer('C_REQUEST_USER_PAPERDOLL_INFO', 1, {
      name: name
    })
  })

  command.add(config.invite, (name) => {
    dispatch.toServer('C_REQUEST_CONTRACT', 1, {
      type: 4,
      unk1: 0,
      unk2: 0,
      unk3: 0,
      unk4: 0,
      name: name,
      data: 0
    })
  })

  command.add(config.drop, () => {
    dispatch.toServer('C_LEAVE_PARTY', 1, {})
  })

  command.add(config.disband, () => {
    dispatch.toServer('C_DISMISS_PARTY', 1, {})
  })

  command.add(config.guildinvite, (name) => {
    dispatch.toServer('C_INVITE_USER_TO_GUILD', 1, {
      unk1: 0,
      unk2: 0,
      name: name
    })
  })

  command.add(config.guildquit, () => {
    dispatch.toServer('C_LEAVE_GUILD', 1, {})
  })

  command.add(config.guilddisband, () => {
    dispatch.toServer('C_DESTROY_GUILD', 1, {})
  })

  command.add(config.reset, () => {
    dispatch.toServer('C_RESET_ALL_DUNGEON', 1, {})
  })

  this.destructor = function() {
    command.remove(config.inspect)
    command.remove(config.invite)
    command.remove(config.drop)
    command.remove(config.guildinvite)
    command.remove(config.guildquit)
    command.remove(config.guilddisband)
    command.remove(config.reset)
  }
}
