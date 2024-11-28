const adjectives = ['Brilliant', 'Courageous', 'Resilient', 'Inspiring', 'Ambitious'];
const nouns = ['leader', 'thinker', 'dreamer', 'innovator', 'explorer'];
const actions = ['will achieve greatness.', 'is unstoppable.', 'can conquer any challenge.', 'is destined for success.', 'will inspire others.'];


const adjIndex = Math.floor(Math.random()*adjectives.length)
const nounIndex = Math.floor(Math.random()*nouns.length)
const actionIndex = Math.floor(Math.random()*actions.length)

function generateMessage(adjIndex, nounIndex, actionIndex) {
    return `${adjectives[adjIndex]} ${nouns[nounIndex]} ${actions[actionIndex]}`;
}

const message = generateMessage(adjIndex, nounIndex, actionIndex);
console.log(message);