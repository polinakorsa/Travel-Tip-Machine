const quotes = [
    "Try the local street food in Osaka, like takoyaki and okonomiyaki.",
    "Visit Kyoto’s temples early in the morning to avoid crowds.",
    "Use a Japan Rail Pass for convenient and cost-effective travel.",
    "Respect local customs, like bowing and removing shoes indoors.",
    "Experience a traditional tea ceremony in Kyoto or Tokyo.",
    "Stay in a ryokan for an authentic Japanese experience.",
    "Visit the cherry blossoms in spring for stunning scenery.",
    "Try onsen (hot springs) in Hakone or Beppu for relaxation.",
    "Learn basic Japanese phrases to help communicate with locals.",
    "Check out the night view from Tokyo Skytree or Roppongi Hills.",
    "Take a day trip to Nara to see the famous deer park.",
    "Explore hidden neighborhoods like Golden Gai in Tokyo.",
    "Try sushi at a conveyor belt restaurant for a fun experience.",
    "Shop for unique souvenirs at local markets and specialty shops.",
    "Visit Hiroshima Peace Memorial Park to learn history."
];

const btn = document.getElementById('btn');
const paragraph = document.getElementById('quote');

const clickRandom = () => {
        paragraph.innerText = quotes[Math.floor(Math.random() * quotes.length)];
    }

clickRandom();

btn.addEventListener('click', clickRandom)








