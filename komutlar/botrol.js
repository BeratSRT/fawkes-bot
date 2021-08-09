module.exports = {
name:"bot-rol",
code:`
$if[$message[1]==aç]
✅ Bot rolü **$roleName[$mentionedRoles[1]]** olarak ayarlandı sunucuya giren botlara bu rol verilicek
$setServerVar[brol;$mentionedRoles[1]]
$onlyIf[$mentionedRoles[1]!=;⚠️ Bir rol etiketle]
$onlyIf[$getServerVar[brol]==;⚠️ Bot rolü zaten ayarlanmış]
$endif
$if[$message[1]==kapat]
✅ Bot yetkilisi rolü kapatıldı
$setServerVar[brol;]
$onlyIf[$getServerVar[brol]!=;⚠️ Bot yetkilisi rolü zaten ayarlanmamış]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;**aç** veya **kapat** argumanlarını kullanın]
$onlyPerms[admin;⚠️ Bunun için yetkin yok]
`
}
