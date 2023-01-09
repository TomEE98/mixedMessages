const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num)
}

const storyTeller = {
    person: ['Jordan', 'Eszter', 'The Rock', 'Tom Elise', 'Keanu Reeves'],
    location: ['Budapest', 'London', 'Mars', 'United States', 'New York', 'Rome', 'home'],
    activities: ['coding', 'Terraforming Mars', 'Catan', 'cooking']
}

let newStory = []

for(let i in storyTeller) {
    let story = generateRandomNumber(storyTeller[i].length)

    switch(i) {
        case 'person':
            newStory.push(`You are going to meet ${storyTeller[i][story]}.`)
            break
        case 'location':
            newStory.push(`You will visit ${storyTeller[i][story]}.`)
            break
        case 'activities':
            newStory.push(`You will learn ${storyTeller[i][story]}.`)
            break
        default:
            newStory.push('Error')
    }
}

function newObj (future) {
    const Obj = newStory.join('\n')
    console.log(Obj)
}

newObj(newStory);