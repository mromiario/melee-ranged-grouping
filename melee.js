function meleeRangedGrouping (str) {
    var splitStr = str.split(','),
        ranged = [],
        melee = [];
    for (var i = 0; i<splitStr.length; i++){
        splitStr[i] = splitStr[i].split('-')
    }

    for (var j =0; j<splitStr.length; j++){
        if(splitStr[j][1] === 'Ranged'){
            ranged.push(splitStr[j][0])
        } else if(splitStr[j][1] === 'Melee'){
            melee.push(splitStr[j][0]);
        }
    }
    if(ranged.length !=0 || melee.length !=0){
        return [ranged, melee];
    } else{
        return [];
    }
    
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []