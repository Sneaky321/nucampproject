document.addEventListener('DOMContentLoaded', function() {
    const dynamicSection = document.getElementById('dynamic-section');

    if (!dynamicSection) {
        console.error('Element with id "dynamic-section" not found.');
        return;
    }

   
    const sections = [
        {
            id: 1,
            title: "See when we next deliver to you:",
            description: "Flexible delivery options to your door. No contracts or subscriptions. Money back guarantee.",
            buttonText: "Enter Your Postcode",
            imgSrc: "./Images/image2.jpg",
            altText: "Food Image 1",
            action: showPostcodeForm
        },
        {
            id: 2,
            title: "Select your pack & meals",
            description: "Choose from over 235 meals from our seasonal menu.",
            buttonText: "",
            imgSrc: "./Images/image1.jpg",
            altText: "Food Image 2"
        },
        {
            id: 3,
            title: "Prepare & enjoy",
            description: "Delicious food from fridge to plate in just 2 minutes.",
            buttonText: "",
            imgSrc: "./Images/image2.jpg",
            altText: "Food Image 3"
        }
        
    ];

    function showPostcodeForm() {
        const postcode = prompt('Please enter your postcode:');
        if (postcode) {
            console.log('Postcode entered:', postcode);
            alert(`Postcode ${postcode} has been entered. We will check delivery availability.`);
        }
    }

    function createDynamicSection(sections) {
        sections.forEach(section => {
           
            const colDiv = document.createElement('div');
            colDiv.className = 'col-md-4';

            const cardDiv = document.createElement('div');
            cardDiv.className = 'card mb-4 shadow-sm';

           
            const img = document.createElement('img');
            img.className = 'card-img-bottom';
            img.src = section.imgSrc;
            img.alt = section.altText;

       
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            
            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.innerText = section.title;

       
            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerText = section.description;

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);

       
            if (section.buttonText) {
                const button = document.createElement('button');
                button.className = 'btn btn-primary';
                button.innerText = section.buttonText;
                button.addEventListener('click', section.action);
                cardBody.appendChild(button);
            }

            cardDiv.appendChild(img);
            cardDiv.appendChild(cardBody);

            colDiv.appendChild(cardDiv);

            
            dynamicSection.appendChild(colDiv);
        });
    }

  
    createDynamicSection(sections);

  
    const style = document.createElement('style');
    style.textContent = `
        #dynamic-section {
            padding: 20px;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }

        .col-md-4 {
            flex: 1 1 calc(33.333% - 20px); /* Adjust width to account for gap */
            box-sizing: border-box;
        }

        .card {
            border: none;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
            display: flex;
            flex-direction: column;
            height: 100%;
            position: relative;
        }

        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .card-body {
            padding: 20px;
            flex: 1;
        }

        .card-title {
            font-size: 1.25rem;
            margin-bottom: 10px;
            color: #333;
        }

        .card-text {
            font-size: 1rem;
            color: #666;
            margin-bottom: 20px; /* Add spacing below text */
        }

        .btn-primary {
            background-color: #007bff;
            border: none;
            color: #fff;
            padding: 10px 20px;
            font-size: 1rem;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
        }

        .btn-primary:hover {
            background-color: #0056b3;
            transform: scale(1.05);
        }

        .card-img-bottom {
            width: 100%;
            height: 200px; /* Fixed height for uniformity */
            object-fit: cover; /* Ensures images cover the area without distortion */
            transition: transform 0.3s, opacity 0.3s;
        }

        .card-img-bottom:hover {
            transform: scale(1.1); /* Zoom effect */
            opacity: 0.9; /* Slight darkening effect */
        }
    `;
    document.head.appendChild(style);
});
