# slash-commands
A `tera-proxy` module to use in game commands via proxy. This module helps make things simpler on regions without an english client. Lets you use `/8 command` instead of `/command`, e.g.: `/8 reset` or `/8 invite <name>`

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

## Credits
- Thanks to [seraph](https://github.com/seraphinush-gaming/) for the [idea](https://github.com/seraphinush-gaming/cmd-slash-kr)
