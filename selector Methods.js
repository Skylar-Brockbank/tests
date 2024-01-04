const testList=[
{AC:15,HP:5},
{AC:14,HP:15},
{AC:13,HP:25},
{AC:12,HP:35},
{AC:11,HP:45},
{AC:30,HP:5}
]


const obFilter=(key,ceiling,list)=>{
	let output = [];
	list.forEach(e=>{
		if(e[key]<=ceiling){
			output.push(e);
		}
	});
	return output;
};

const minimalVariance=(key,target,list)=>{
	list.sort((a,b)=>{return Math.abs(a[key]-target)-Math.abs(b[key]-target)});
	return list[0]
	}
console.log("filtered list");
console.log("==================");
console.log(obFilter("HP",35,obFilter("AC",14,testList)));
console.log("sorted list");
console.log("==================");
console.log(minimalVariance("HP",21,obFilter("HP",35,obFilter("AC",14,testList))));
