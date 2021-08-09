module.exports = {
name:"bot-kanal",
code:`
$if[$message[1]==aç]
✅ Bot kanalı <#$mentionedChannels[1]> olarak ayarlandı artık sadece o kanalda bot eklenebilicek
$setServerVar[bkanal;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=;⚠️ Bir kanal etiketle]
$onlyIf[$getServerVar[bkanal]==;⚠️ Bot kanalı zaten ayarlanmış]
$endif
$if[$message[1]==kapat]
✅ Bot kanalı kapatıldı 
$setServerVar[bkanal;]
$onlyIf[$getServerVar[bkanal]!=;⚠️ Bot kanalı zaten ayarlanmamış]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;**aç** veya **kapat** argumanlarını kullanın]
$onlyPerms[admin;⚠️ Bunun için iznin yok]
`
}
