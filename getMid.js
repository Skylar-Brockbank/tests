const getMid=(collection,p)=>{
	const sorted=collection.toSorted((a,b)=>{
		return a[p]-b[p]});
		const min=sorted[0][p];
		const max=sorted[sorted.length-1][p];
		const mid=max-Math.floor((max-min)/2);
		return {"max":max,"min":min, "mid":mid};
	}
	
	//pair this script with the list style selector of a breadth first search or a filter though a breath first will help grab only contiguous tiles
	
	const testData = [
	{x: 1,y:2 },
	{x: 1,y:3 },
	{x: 1,y:4 },
	{x: 1,y:5 },
	{x: 1,y:6 },
	{x: 2,y:1 },
	{x: 2,y:2 },
	{x: 3,y:2 },
	{x: 3,y:3 },
	{x: 3,y:4 },
	{x: 4,y:3 },
	{x: 4,y:4 }
	];
	
	console.log(getMid(testData,"y"));
	console.log(getMid(testData,"x"));