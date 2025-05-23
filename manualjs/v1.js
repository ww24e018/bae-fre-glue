// datasrc: https://www.wien.gv.at/bezirke/ , optiontags + sed-ing
z = `
1., Innere Stadt
2., Leopoldstadt
3., Landstraße
4., Wieden
5., Margareten
6., Mariahilf
7., Neubau
8., Josefstadt
9., Alsergrund
10., Favoriten
11., Simmering
12., Meidling
13., Hietzing
14., Penzing
15., Rudolfsheim-Fünfhaus
16., Ottakring
17., Hernals
18., Währing
19., Döbling
20., Brigittenau
21., Floridsdorf
22., Donaustadt
23., Liesin
`;
x = z.split("\n");
x = x.filter(d => d.trim().length > 0)
y = x.map((e) => {
	esplit = e.split(",").map(e => e.trim())
	return { nname: esplit[0], lname: esplit[1]}
});
frage_richtung1 = y.map(e => { return {
	frage: `Wie lautet der Name des ${e.nname} Bezirk von Wien?`,
	antwort: `Der Name des ${e.nname} Bezirk von Wien ist: ${e.lname}`
}}) ;
frage_richtung2 = y.map(e => { return {
	frage: `Der wie-vielte Bezirk ist '${e.lname}'`,
	antwort: `${e.lname} ist der ${e.nname} Bezirk von Wien.`
}}) ;
frage_beiderichtungen = frage_richtung1.concat(frage_richtung2);
le_json = JSON.stringify(frage_beiderichtungen);
console.log(le_json);