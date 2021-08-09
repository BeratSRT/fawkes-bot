module.exports = {
name:"yetkili-rol",
code:`
$if[$message[1]==aç]
✅ Bot yetkilisi rolü **$roleName[$mentionedRoles[1]]** olarak ayarlandı
$setServerVar[yrol;$mentionedRoles[1]]
$onlyIf[$mentionedRoles[1]!=;⚠️ Bir rol etiketle]
$onlyIf[$getServerVar[yrol]==;⚠️ Bot yetkilisi rolü zaten ayarlanmış]
$endif
$if[$message[1]==kapat]
✅ Bot yetkilisi rolü kapatıldı
$setServerVar[yrol;]
$onlyIf[$getServerVar[yrol]!=;⚠️ Bot yetkilisi rolü zaten ayarlanmamış]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;**aç** veya **kapat** argumanlarını kullanın]
$onlyPerms[admin;⚠️ Bunun için yetkin yok]
`
}
