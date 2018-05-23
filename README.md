# slash-commands
A `tera-proxy` module to use in game commands via proxy. I created this to make life easier on KTERA. Lets you use `/8 command` instead of korean equivalent of `/command`, e.g.: `/8 reset` or `/8 invite <name>`

## Supported commands
- `/inspect`
- `/invite`
- `/drop` 
- `/disband`
- `/guildinvite`
- `/guildquit`
- `/guilddisband`
- `/reset`

## Config
I intentionally changed some aliases, to avoid conflicting with other common modules, like `drop` and `Inspector`. You can assign your own aliases for each command in `config.json`.
