
let neighbourhoodNames ={};
let outcome = {};
let btn = document.querySelector('BUTTON')
const select = document.querySelector('#neighbourhood-select')
// axios.get('http://127.0.0.1:5500/COVID19%20cases.json')
// .then (res=>{
//     console.log(res.data);
//     let femaleTotal = 0;
//     let maleTotal = 0;
//     let fatal = 0;
//     res.data.forEach(el => {
//         if(el['Client Gender'] === 'FEMALE'){
//             femaleTotal += 1;
//         } 
//         if(el['Client Gender'] === 'MALE'){
//             maleTotal += 1;
//         } 
//         if(el['Outcome'] === 'FATAL'){
//             fatal += 1;
//         }
//         let name = el['Neighbourhood Name'];
//         neighbourhoodNames[name] = true;

//         // console.log(outcome);
//         let result = el['Outcome'];
//         if (outcome[result] === undefined){
//             // console.log(`first time defining this key ${result}`);
//             outcome[result] = 0;
//             outcome[result] += 1;
//         } else {
//             outcome[result] += 1;
//         }
//         // outcome[result] = true;
        
//     }); 
    
//     console.log(`Male total is ${maleTotal} and Female total is ${femaleTotal} `)
//     console.log(neighbourhoodNames)
//     console.log(outcome)
//     // console.log(fatal)
    
// })




 const neighbourhood = [
    "Willowdale East",
    "Parkwoods-Donalda",
    "Church-Yonge Corridor",
    "Newtonbrook West",
    "Milliken",
    "Willowdale West",
    "Henry Farm",
    "Don Valley Village",
    "Lawrence Park South",
    "Bridle Path-Sunnybrook-York Mills",
    "Moss Park",
    "Annex",
    "Leaside-Bennington",
    "St.Andrew-Windfields",
    "Malvern",
    "High Park North",
    "Waterfront Communities-The Island",
    "null",
    "Mimico (includes Humber Bay Shores)",
    "Danforth-East York",
    "Princess-Rosethorn",
    "Long Branch",
    "Dovercourt-Wallace Emerson-Junction",
    "Mount Pleasant West",
    "Oakwood Village",
    "South Parkdale",
    "Mount Pleasant East",
    "North Riverdale",
    "Eringate-Centennial-West Deane",
    "Palmerston-Little Italy",
    "Bedford Park-Nortown",
    "Stonegate-Queensway",
    "Rouge",
    "Agincourt South-Malvern West",
    "Englemount-Lawrence",
    "Roncesvalles",
    "Forest Hill North",
    "New Toronto",
    "West Humber-Clairville",
    "Casa Loma",
    "Niagara",
    "High Park-Swansea",
    "Downsview-Roding-CFB",
    "Kensington-Chinatown",
    "Trinity-Bellwoods",
    "Kennedy Park",
    "Victoria Village",
    "The Beaches",
    "Woodbine-Lumsden",
    "Newtonbrook East",
    "L'Amoreaux",
    "Banbury-Don Mills",
    "Caledonia-Fairbank",
    "Willowridge-Martingrove-Richview",
    "Yonge-St.Clair",
    "Bayview Woods-Steeles",
    "O'Connor-Parkview",
    "Clairlea-Birchmount",
    "Bay Street Corridor",
    "Forest Hill South",
    "Flemingdon Park",
    "Yonge-Eglinton",
    "Little Portugal",
    "Greenwood-Coxwell",
    "Rosedale-Moore Park",
    "Guildwood",
    "Junction Area",
    "Dorset Park",
    "Edenbridge-Humber Valley",
    "Bendale",
    "East End-Danforth",
    "Playter Estates-Danforth",
    "University",
    "Wychwood",
    "Cliffcrest",
    "Danforth",
    "Lansing-Westgate",
    "Clanton Park",
    "Eglinton East",
    "Glenfield-Jane Heights",
    "Lawrence Park North",
    "Cabbagetown-South St. James Town",
    "Highland Creek",
    "Woburn",
    "Morningside",
    "West Hill",
    "Humewood-Cedarvale",
    "Etobicoke West Mall",
    "South Riverdale",
    "Agincourt North",
    "Markland Wood",
    "Runnymede-Bloor West Village",
    "Taylor-Massey",
    "Steeles",
    "Blake-Jones",
    "Black Creek",
    "Woodbine Corridor",
    "Thistletown-Beaumond Heights",
    "Islington-City Centre West",
    "Wexford/Maryvale",
    "Elms-Old Rexdale",
    "North St. James Town",
    "Dufferin Grove",
    "Humber Summit",
    "Birchcliffe-Cliffside",
    "Kingsway South",
    "Bathurst Manor",
    "Tam O'Shanter-Sullivan",
    "Briar Hill - Belgravia",
    "Mount Olive-Silverstone-Jamestown",
    "Rockcliffe-Smythe",
    "Scarborough Village",
    "Keelesdale-Eglinton West",
    "Centennial Scarborough",
    "Weston-Pellam Park",
    "York University Heights",
    "Broadview North",
    "Maple Leaf",
    "Yorkdale-Glen Park",
    "Humbermede",
    "Mount Dennis",
    "Thorncliffe Park",
    "Bayview Village",
    "Weston",
    "Pelmo Park-Humberlea",
    "Pleasant View",
    "Westminster-Branson",
    "Brookhaven-Amesbury",
    "Ionview",
    "Corso Italia-Davenport",
    "Kingsview Village-The Westway",
    "Beechborough-Greenbrook",
    "Rexdale-Kipling",
    "Regent Park",
    "Oakridge",
    "Lambton Baby Point",
    "Humber Heights-Westmount",
    "Rustic",
    "Hillcrest Village",
    "Alderwood",
    "Old East York"
 ];
//  let outcome = {} 
//  let name = el['Neighbourhood Name'];
//         neighbourhoodNames[name] = true;

//         // console.log(outcome);
//         let result = el['Outcome'];
//         if (outcome[result] === undefined){
//             // console.log(`first time defining this key ${result}`);
//             outcome[result] = 0;
//             outcome[result] += 1;
//         } else {
//             outcome[result] += 1;
//         }
//         // outcome[result] = true;
 select.innerHTML = neighbourhood.map(el => {
    return `<option value="${el}">${el}</option>`
}).join(' ');

btn.addEventListener('click', () =>{ 
    let chosenHood = select.value;
    let h2Totalcases = document.querySelector('#h2-totalcases')
    axios.get('http://127.0.0.1:5500/COVID19%20cases.json')
    .then (res=>{
        console.log(res.data);
        let caseCount = 0;
        let fatal = 0;
        res.data.forEach(el => {
           if(el['Neighbourhood Name'] === chosenHood) {
               caseCount += 1
               if (el['Outcome'] === 'FATAL'){
                fatal += 1;
            }

           }
        
            
        
        
        }); 
        console.log(fatal)
        h2Totalcases.innerHTML = caseCount;

        // alert(caseCount)

        // console.log(`Male total is ${maleTotal} and Female total is ${femaleTotal} `)
        // console.log(neighbourhoodNames)
        // console.log(outcome)
        // console.log(fatal)
        
    })
    
})


