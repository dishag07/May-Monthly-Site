const teamMembers = [
    {
        name: 'Amber the Orange Fairy',
        imageURL: 'amber.jpg',
        activelyPlaying: true,
        type: 'Color Fairy',
        skills: ['Using magic', 'Being joyful', 'Playing with Rachel & Kristy'],
        strengths: 'Creating the color Orange',
        weaknesses: 'Jack Frost & his Goblins',
        biography: 'Amber is a cheerful fairy who loves to spread joy and color.'
    },
    {
        name: 'Katie the Kitten Fairy',
        imageURL: 'katie.jpg', // Added the imageURL for Katie
        type: 'Animal Fairy',
        skills: ['Communicating with animals', 'Cat whispering', 'Playing with Rachel & Kristy'],
        strengths: 'Animals',
        weaknesses: 'Jack Frost & his Goblins',
        biography: 'Katie is a fairy who loves kittens and has a special bond with them.'
    },
    {
        name: 'Ruby the Red Fairy',
        imageURL: 'ruby.jpg', // Added the imageURL for Katie
        type: 'Color Fairy',
        skills: ['Spreading happiness', 'Coloring the world red', 'Playing with Rachel & Kristy'],
  strengths: 'Bringing joy and color',
  weaknesses: 'Jack Frost & his Goblins',
  biography: 'Ruby is a fairy who loves the color red and has the magical ability to spread happiness wherever she goes.'
},
    {
        name: 'Pippa the Poppy Fairy',
        imageURL: 'pippa.jpg', // Added the imageURL for Katie
        type: 'Flower Fairy',
        skills: ['Tending to poppies', 'Bringing color to gardens', 'Playing with Rachel & Kristy'],
        strengths: 'Flowers and gardening',
        weaknesses: 'Jack Frost & his Goblins',
        biography: 'Pippa is a fairy who loves poppies and has a special bond with them, bringing vibrant color to every garden she visits.'
      },
    {
        name: 'Roxie the Baking Fairy',
        imageURL: 'roxie.webp', // Added the imageURL for Katie
        type: 'Talent Fairy',
        skills: ['Baking delicious treats', 'Decorating cakes', 'Playing with Rachel & Kristy'],
        strengths: 'Baking and confectionery',
        weaknesses: 'Jack Frost & his Goblins',
        biography: 'Roxie is a fairy who loves baking and has a special talent for creating the most delightful treats, spreading joy with her delicious creations.'
      },
    {
        name: 'Ellie the Guitar Fairy',
        imageURL: 'ellie.webp', // Added the imageURL for Katie
        type: 'Music Fairy',
        skills: ['Playing the guitar', 'Composing music', 'Playing with Rachel & Kristy'],
        strengths: 'Music and creativity',
        weaknesses: 'Jack Frost & his Goblins',
        biography: 'Ellie is a fairy who loves playing the guitar and has a special talent for composing beautiful music, bringing harmony and joy wherever she goes.'
      }
];

function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards');

    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('col-md-4');

        // Styling card based on position:
        let backgroundColor;

        switch (member.type.toLowerCase()) {
            case 'color fairy':
                backgroundColor = '#ffc107'; // Yellow for color fairy
                break;
            case 'animal fairy':
                backgroundColor = '#28a745'; // Green for animal fairy
                break;
            case 'flower fairy':
                backgroundColor = '#007bff'; // Blue for flower
                break;
            case 'talent fairy':
                backgroundColor = '#dc3545'; // Red for talent
                break;
            default:
                backgroundColor = '#800080'; // purple for other positions
        }
        card.style.backgroundColor = backgroundColor;

        // Create a list of Skills with <li> tags
        const skillsList = member.skills
            .map(skill => `<li>${skill}</li>`).join('');

        card.innerHTML = `
            <div class="card">
                <img src="${member.imageURL}" class="img-fluid team-member-image" alt="${member.name}">
                <div class="card-header">${member.name}</div>
                <div class="card-body">
                    <p><strong>Type:</strong> ${member.type}</p>
                    <p><strong>Skills:</strong> 
                        <ul>
                            ${skillsList}
                        </ul>
                    </p>
                    <p><strong>Strengths:</strong> ${member.strengths}</p>
                    <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                    <p><strong>Biography:</strong> ${member.biography}</p>
                </div>
            </div>
        `;

        teamCardsContainer.appendChild(card);
    });
}

window.onload = generateTeamCards;
