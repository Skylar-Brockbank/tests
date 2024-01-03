Class PartyObject ={
    constructor(size,minHP,maxDMG,minAC,minHitMod,duration,mobDextarity) = {
          //number of party members
        size:0,
          //Lowest HP value for your party
        minHP:0,
          //Maximum Damage value of one player in one round for your party
        maxDMG:0,
          //lowest AC value for your party
        minAC:0,
          //Lowest modifier for landing a hit in your party
        minHitMod:0,
          //the number of rounds this combat should last
        duration:0,
          //the probability that enemies will dodge attacks (0.0-1.0)
        mobDextarity:0
    }
}


const calculateEncounterParameters = (party)=>{
    const partyAverageDamage=(party.maxDMG/2)*party.size;
    const dextarity = party.mobDextarity;
    const DC = Math.round((party.minHitMod+20)*dextarity);
    const hpPool = Math.round(((1-dextarity)*partyAverageDamage)*party.duration);
    const d4Dice=Math.floor(party.minHP/4)+"d4";
    const d6Dice=Math.floor(party.minHP/6)+"d6";
    const d8Dice=Math.floor(party.minHP/8)+"d8";
    const d10Dice=Math.floor(party.minHP/10)+"d10";

    console.log("Average DC: "+DC);
    console.log("HP Pool: "+hpPool+" even split ("+Math.round(hpPool/party.size)+"x"+party.size+")");
    console.log('=====================');
    console.log('Damage Dice Options');
    console.log('=====================');
    console.log(d4Dice+" per round");
    console.log(d6Dice+" per round");
    console.log(d8Dice+" per round");
    console.log(d10Dice+" per round");
}
