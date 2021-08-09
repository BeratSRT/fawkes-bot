module.exports = {
name:"bot",
code:`
$if[$message[1]==red]
$channelSendMessage[$getServerVar[blog];<@$mentioned[1]>{author:Reddedildi:$serverIcon}{description:Botunuz **$userTag[$message[2]]** \`$message[3] $message[4] $message[5] $message[6] $message[7] $message[8] $message[9] $message[10]\` sebebinden reddedildi}{color:RED}{thumbnail:$serverIcon}]
$onlyIf[$message[3]!=;⚠️ Bir sebep gir]
$onlyIf[$mentioned[1]!=;⚠️ Başvuran kullanıcıyı etiketle]
$onlyIf[$isBot[$message[2]]==true;⚠️ Kullanıcının başvurduğu botun id'sini gir]
$onlyIf[$isNumber[$message[2]]==true;⚠️ Kullanıcının başvurduğu botun id'sini gir]
$onlyIf[$message[2]!=;⚠️ Kullanıcının başvurduğu botun id'sini gir]
$onlyIf[$hasRole[$authorID;
$endif
$if[$message[1]==onayla]
$channelSendMessage[$getServerVar[blog];{author:Onaylandı:$serverIcon}{description:**$userTag[$message[2]]** adlı botunuz onaylandı}{color:GREEN}{thumbnail:$serverIcon}]

$giveRoles[$mentioned[1];$getServerVar[drol]]
$onlyIf[$mentioned[1]!=;⚠️ Başvuran kullanıcıyı etiketle]
$onlyIf[$isBot[$message[2]]==true;⚠️ Kullanıcının başvurduğu botun id'sini gir]
$onlyIf[$isNumber[$message[2]]==true;⚠️ Kullanıcının başvurduğu botun id'sini gir]
$onlyIf[$message[2]!=;⚠️ Kullanıcının başvurduğu botun id'sini gir]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];red;onayla]==true;**onayla** veya **red** argumanlarını kullan]
$onlyIf[$hasRole[$authorID;$getServerVar[yrol]]==true;⚠️ Bunun için yetkin yok]
`
}
