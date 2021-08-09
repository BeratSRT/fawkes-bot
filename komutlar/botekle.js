module.exports = {
name:"bot-ekle",
aliases:"add-bot",
code:`
$channelSendMessage[$channelID;{author:$userTag:$authorAvatar}{description:**$userTag[$message[1]]** adlı botun sıraya eklendi}{color:GREEN}{thumbnail:$authorAvatar}{delete:5s}]

$channelSendMessage[$getServerVar[blog];<@$authorID>,<@&$getServerVar[yrol]>{author:Yeni bir bot sıraya eklendi:$authorAvatar}{description:<@$authorID> Yeni bir bot ekledi

__*Bot bilgileri*__

Adı: $userTag[$message[1]]
Prefix: $message[2]
Dbl onay durumu: $message[3]
[0 perm davet linki](https://discord.com/oauth2/authorize?client_id=$message[1]&scope=bot&permissions=0 ) | [8 perm davet linki](https://discord.com/oauth2/authorize?client_id=$message[1]&scope=bot&permissions=8)}{footer:Botu onaylamak için f!onay <@$authorID> $message[1] yazın}{color:RANDOM}{thumbnail:$authorAvatar}]

$onlyIf[$message[3]!=;⚠️ DBL onay durumunu belirtin {delete:5s}]
$onlyIf[$isBot[$message[1]]==true;⚠️ Bu bir bot id'sine benzemiyor {delete:5s}]
$onlyIf[$isNumber[$message[1]]==true;⚠️ Bur bir id'ye benzemiyor {delete:5s}]
$onlyIf[$message[2]!=;⚠️ Prefixini belirtin {delete:5s}]
$onlyIf[$message[1]!=;⚠️ Botunuzun id'sini girin {delete:5s}]
$deletecommand

$onlyIf[$getServerVar[drol]!=;⚠️ Bot list sistemi tamamen ayarlanmamışa benziyor]
$onlyIf[$getServerVar[yrol]!=;⚠️ Bot list sistemi tamamen ayarlanmamışa benziyor]
$onlyIf[$getServerVar[blog]!=;⚠️ Bot list sistemi tamamen ayarlanmamışa benziyor]
$onlyIf[$getServerVar[bkanal]!=;⚠️ Bot list sistemi tamamen ayarlanmamışa benziyor]
$onlyIf[$getServerVar[brol]!=;⚠️ Bot list sistemi tamamen ayarlanmamışa benziyor]
`
}
