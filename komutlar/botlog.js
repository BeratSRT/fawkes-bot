module.exports = {
name:"bot-log",
code:`
$if[$message[1]==aç]
✅ Bot logu <#$mentionedChannels[1]> olarak ayarlandı artık bot eklendiğinde o kanala mesaj atılıcak
$setServerVar[blog;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=;⚠️ Bir kanal etiketle]
$onlyIf[$getServerVar[blog]==;⚠️ Bot kanalı zaten ayarlanmış]
$endif
$if[$message[1]==kapat]
✅ Bot logu kapatıldı 
$setServerVar[blog;]
$onlyIf[$getServerVar[blog]!=;⚠️ Bot kanalı zaten ayarlanmamış]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;**aç** veya **kapat** argumanlarını kullanın]
$onlyPerms[admin;⚠️ Bunun için iznin yok]
`
}