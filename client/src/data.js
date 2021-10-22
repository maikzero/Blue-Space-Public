const data = {
    questions: [
        {
            _id: '1',
            text: "Which one of these songs is not by Bob Seger & The Silver Bullet Band?",
            option: ["Shame On The Moon", "Mainstreet", "Runnin' Down A Dream", "Feel Like A Number"],
            answer: 3,
            first: 0,
            second: 0,
            third: 0,
            fourth: 0
        },
        {
            _id: '2',
            text: "Which one of these songs is not by Tom Petty and the Heartbreakers?",
            option: ["Breakdown", "Night Moves", "Refugee", "American Girl"],
            answer: 2,
            first: 0,
            second: 0,
            third: 0,
            fourth: 0
        }
    ],
    quizzes: [
        {
            _id: '1',
            title: "Everyting about 80's Rock",
            description: "What do you know about rock music?",
            questionSet: [
                {
                    _id: '1',
                    text: "Which one of these songs is not by Bob Seger & The Silver Bullet Band?",
                    option: ["Shame On The Moon", "Mainstreet", "Runnin' Down A Dream", "Feel Like A Number"],
                    answer: 3,
                    first: 0,
                    second: 0,
                    third: 0,
                    fourth: 0
                },
                {
                    _id: '2',
                    text: "Which one of these songs is not by Tom Petty and the Heartbreakers?",
                    option: ["Breakdown", "Night Moves", "Refugee", "American Girl"],
                    answer: 2,
                    first: 0,
                    second: 0,
                    third: 0,
                    fourth: 0
                }
            ]
        },
        {
            _id: '2',
            title: "Your Favourite Quiz",
            description: "something about the beatles",
            questionSet: [
                {
                    _id: '1',
                    text: "What is Ringo Starr's last name?",
                    option: ["Stanley", "Starr", "Starling", "Starkey"],
                    answer: 4,
                    first: 0,
                    second: 0,
                    third: 0,
                    fourth: 0
                },
                {
                    _id: '2',
                    text: "What is George's Harrison's middle name?",
                    option: ["Harold", "Henry", "Hugh", "none"],
                    answer: 4,
                    first: 0,
                    second: 0,
                    third: 0,
                    fourth: 0
                }
            ]
        }
    ]
}

export default data