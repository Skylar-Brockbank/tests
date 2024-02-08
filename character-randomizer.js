let setting = [
"sci-fi ",
"fantasy",
"historical",
"realistic"
];

let gender = [
"Boy",
"Girl"
];

let startingAge = [
"5-10",
"10-15",
"15-20",
"20-25",
"25-30"
];

let storyTrend = [
"comedy",
"tragedy"
];

let characterClasses =[
"Wizard",
"Bard",
"Druid",
"Warlock",
"Cleric",
"Fighter",
"Barbarian",
"Paladin",
"Ranger",
"Rogue"
]

let living=[
"alive",
"dead",
"prefer not to answer"
];

let plots=[

];

let choose=(list)=>{
    const choice = Math.floor(Math.random()*list.length);
    return list[choice];
}

console.log("a "+ choose(setting) + " " + choose(storyTrend));
console.log("About a "+choose(startingAge)+" year old "+choose(characterClasses)+" "+choose(gender));
console.log("===============");
console.log("Mom: "+choose(characterClasses)+", status: "+choose(living));
console.log("Dad: "+choose(characterClasses)+", status: "+choose(living));

if(choose([true,false])){
	console.log("===============");
	let qty=choose([1,2,3]);
	console.log(qty+" siblings")
	for(let i=0;i<qty;i++){
		 console.log(choose(gender)+", "+choose(startingAge)+" "+choose(characterClasses)+", status: "+choose(living));
	}
}
