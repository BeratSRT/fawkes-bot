module.exports = {
name:"banlist",
code:`
$title[Ohayoo]
$description[**Toplam \`$banCount\` Banlı Üye Var**

$joinSplitText[
]
$textSplit[$usersBanned;, ]
]
$color[$[0;99999]]
$footer[İŞTE BANLANANLAR]
$onlyIf[$getGlobalUserVar[karaliste;$authorID]!=evet;Hop Karalistedesin Dostum.
  Karaliste Sebebin \`\`$getGlobalUserVar[ksebep;$authorID]\`\`]
`
}