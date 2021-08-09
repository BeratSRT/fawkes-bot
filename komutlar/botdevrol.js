module.exports = {
name:"developer-rol",
code:`
$if[$message[1]==aç]
✅ Developer rolü **$roleName[$mentionedRoles[1]]** olarak ayarlandı
$setServerVar[drol;$mentionedRoles[1]]
$onlyIf[$mentionedRoles[1]!=;⚠️ Bir rol etiketle]
$onlyIf[$getServerVar[drol]==;⚠️ Developer rolü zaten ayarlanmış]
$endif
$if[$message[1]==kapat]
✅ Developer rolü kapatıldı
$setServerVar[drol;]
$onlyIf[$getServerVar[drol]!=;⚠️ Developer rolü zaten ayarlanmamış]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;**aç** veya **kapat** argumanlarını kullanın]
$onlyPerms[admin;⚠️ Bunun için yetkin yok]
`
}
