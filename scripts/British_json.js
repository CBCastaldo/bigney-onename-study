let BritishBigneyList = [];

const url = '../JSON/British_Bigney.json';
let results = null;

async function getPeople(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        output(data);
    // } else (!response.ok); {
	// 	throw new Error(`HTTP error! status: ${response.status}`);
    }
};

getPeople(url);

const output = (people) => {
    people.forEach(
        person => {
            let article = document.createElement('article');

            let personName = document.createElement('h3');
            personName.textContent = person.personName;

            let birthDate = document.createElement('h4');
            birthDate.textContent = person.birthDate;

            let birthPlace = document.createElement('h4');
            birthPlace.textContent = person.birthPlace;

            let deathDate = document.createElement('h4');
            deathDate.textContent = person.deathDate;

            let deathPlace = document.createElement('h4');
            deathPlace.textContent = person.deathPlace;

            // let img = document.createElement('img');
            // img.setAttribute('src', person.imageUrl);
            // img.setAttribute('alt', person.personName);

            linebreak = document.createElement("br");

            article.appendChild(personName);
            article.appendChild(birthDate);
            article.appendChild(birthPlace);
            article.appendChild(deathDate);
            article.appendChild(deathPlace);
            article.appendChild(img);
            article.appendChild(linebreak);

            document.querySelector('#people').appendChild(article);
        }
    );
}

const reset = () => {
    document.querySelector('#people').innerHTML = '';
}

const sortBy = () => {
    reset();

    let filter = document.querySelector('#sortBy').value;

    switch (filter) {
        case 'NameAscending':
            output(BritishBigneyList).sort(
                (person1, person2) => {
                    let personName1 = person1.personName.toLowerCase();
                    let personName2 = person2.personName.toLowerCase();
                    if (personName1 < personName2) return -1;
                    else if (personName1 > personName2) return 1;
                    else return 0;
                });
            break;
        case 'NameDescending':
            output(BritishBigneyList).sort(
                (person1, person2) => {
                    let personName1 = person1.personName.toLowerCase();
                    let personName2 = person2.personName.toLowerCase();
                    if (personName1 > personName2) return -1;
                    else if (personName1 < personName2) return 1;
                    else return 0;
                });
            break;
            case 'BirthDateAscending':
            output(BritishBigneyList).sort(
                (person1, person2) => {
                    let personbirthDate1 = person1.personbirthDate;
                    let personbirthDate2 = person2.personbirthDate;
                    if (personbirthDate1 < personbirthDate2) return -1;
                    else if (personbirthDate1 > personbirthDate2) return 1;
                    else return 0;
                });
            break;
        case 'BirthDateDescending':
            output(BritishBigneyList).sort(
                (person1, person2) => {
                    let personbirthDate1 = person1.personbirthDate;
                    let personbirthDate2 = person2.personbirthDate;
                    if (personbirthDate1 > personbirthDate2) return -1;
                    else if (personbirthDate1 < personbirthDate2) return 1;
                    else return 0;
                });
            break;
            case 'DeathDateAscending':
            output(BritishBigneyList).sort(
                (person1, person2) => {
                    let persondeathDate1 = person1.persondeathDate;
                    let persondeathDate2 = person2.persondeathDate;
                    if (persondeathDate1 < persondeathDate2) return -1;
                    else if (persondeathDate1 > persondeathDate2) return 1;
                    else return 0;
                });
            break;
        case 'DeathDateDescending':
            output(BritishBigneyList).sort(
                (person1, person2) => {
                    let persondeathDate1 = person1.persondeathDate;
                    let persondeathDate2 = person2.persondeathDate;
                    if (persondeathDate1 > persondeathDate2) return -1;
                    else if (persondeathDate1 < persondeathDate2) return 1;
                    else return 0;
                });
            break;
        default:
            // using ternary operators
            output(BritishBigneyList).sort(
                (person1, person2) => 
                person1.personName.toLowerCase() > person2.personName.toLowerCase() ? 1 : 
                    person2.personName.toLowerCase() > person1.personName.toLowerCase() ? -1 : 0);
            break;
    }
}
// getPeople(url);
document.querySelector('#sortBy').addEventListener('change', sortBy);
