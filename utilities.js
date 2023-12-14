const coordinateDistance=(pointPos, targetPos)=>{
	const diffSq=(x1,x2)=>{
		return Math.pow(x1-x2,2);
	}
	const x = diffSq(pointPos.x,targetPos.x);
	const y = diffSq(pointPos.y,targetPos.y)
	return Math.pow(x+y,0.5);
}

const distributePoints =(seed,length,density)=>{
	const irSeed=seed*1.618;
	let sequence=[];
	for(let i=1;i<=length;i++){
		sequence.push(Math.floor(Math.pow(irSeed,i)%10)<density);
	}
	return sequence;
}

const pseudoRandom=(sd, lg)=>{
		const phi = 1.618;
		let output=[];
		for(let inst=0;inst<lg;inst++){
			if(output.length<1){
				output.push(sd*phi);
			}else{
				output.push(output[output.length-1]*phi);
				}
			}
			return output;
		}

const betterDistribute = (seed,length,density)=>{
	
	let sequenceb=[];
	const track=pseudoRandom(seed,length);
	let counter=1;
	while(sequenceb.length<length){
		const dist = (track[counter-1]%density)+1;
		for(let ix=0;ix<dist-1;ix++){
			sequenceb.push("0");
		}
		sequenceb.push("1");
		counter+=1;
	}
	return (sequenceb.slice(0,length));
}


const gridify=(input, rowLength)=>{
	const rows=Math.floor(input.length/rowLength)+1;
	let output=[];
	for(let iy=0; iy<rows;iy++){
		let tempRow=[];
		for(let ix=0; ix<rowLength; ix++){
   if(iy*rowLength+ix<input.length){
  	tempRow=tempRow+""+input[iy*rowLength+ix];   }
  }
  if(tempRow.length>0){
   output.push(tempRow);
  }
 }
 return output;
}


const hexGridify=(input, rowLength)=>{
	const rows=Math.floor(input.length/rowLength);
	let output=[];
	let count=0;
	for(let iy=0; iy<rows;iy++){
		let tempRow="";
		let modifier=0;
		inverseMod=1;
		if(iy%2===1){
		 	modifier=1;
				inverseMod=0;
				tempRow=tempRow+"-";
			}else{
				modifier=0;
				inverseMod=1;
				tempRow=tempRow+"--";
			}
		for(let ix=0; ix<rowLength+modifier; ix++){
   if(count<input.length){
  	tempRow=tempRow+input[count]+" ";   }
  	count=count+1;
  }
  if(tempRow.length>0&&tempRow!="--"&&tempRow!="-"){
   output.push(tempRow);
  }
 }
 return output;
}


console.log(coordinateDistance({x:10,y:10},{x:9,y:3}));
//console.log(distributePoints(5,100,5));
console.log("=============");
const data = betterDistribute(971,170,16);
console.log(hexGridify(data, 15));

