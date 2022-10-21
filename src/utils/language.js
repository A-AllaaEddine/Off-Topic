export const Languages = [
     {
        id: 0,
        name: "English"
    },
    {
        id: 1,
        name: "العربية"
    }
]




export const DisplayText = ( id ) => {
    switch (id) {
        case 0:
            return {
                id: 0,
                name: 'English',
                startButton: 'START',
                nextButton: 'NEXT',
                backButton: 'BACK',
                voteButton: 'VOTE',
                newGameButton: 'NEW GAME',
                add4players: 'Add 4 Players at least then press Next',
                youCanAddMorePlayers: 'You can add more players or start the game',
                selectTopic: 'Select a topic from below',
                topics: {},
                giveThePhoneToPlayer: (playerName) => {
                    return{
                        giveThePhoneTo: `Give the phone to ${playerName}`
                    }},
                pressNextToCheck: 'Press next to check if you are in or off topic.',
                dontLetAnyoneSee: "Don't let anyone else see the screen.",
                youAreOffTopic: 'You are off the topic',
                tryTofindTopic: 'Try to find out what the topic is',
                voteForWrongImposter: 'and make the others vote for the wrong IMPOSTER!',
                giveHint: (topicType) => {
                    return {
                        Hint: `HINT: the topic is about: ${topicType}`,
                    }
                },
                inTopic : (topic) => {
                    return {
                        youAreInTopic: `You are in the topic, which is ${topic}`
                    }
                },
                yourGoalIs: 'Your goal is to find the imposter who does not know the topic',
                pressNext: 'Press NEXT',
                questionTime: 'Questions Time',
                everyPlayerWillAsk: 'Every player will get to ask another player a question about the topic.',
                pressNextForFirstQuestion: 'Pres NEXT for first question',
                player1AsksPlayer2: (player1, player2) => {
                    return {
                        playersAsk: `${player1},  you can ask ${player2}`
                    }
                },
                beCarefull: "Choose your question carefully, so that the imposter does not find what the topic is.",
                ifYouHaveMoreQuestions: "If you have more questions, it's the time to ask them.",
                pressVote: 'Otherwise press VOTE to vote for the imposter.',
                voteForPlayer: 'vote for the player you think is OFF-TOPIC',
                whichOneIsTopic: 'Which one of these do you think  is the Topic :',
                offTopicPlayerIs: 'The off-topic player is ...',
                results: 'RESULTS',
                pleaseAdMoreplayers: (num) => {
                    return {
                        addMorePlayers: `Please add ${num} more players to start the game`
                    }
                },
                maxPlayersReached: 'You have reached the maximum allowed players',
            };
        case 1:
            return {
                id: 1,
                name: 'العربية',
                startButton: 'بداية',
                nextButton: 'التالي',
                backButton: 'عودة',
                voteButton: 'تصويت',
                newGameButton: 'لعبة جديدة',
                add4players: 'أضف 4 لاعبين على الأقل ثم اضغط على التالي',
                youCanAddMorePlayers: 'يمكنك إضافة المزيد من اللاعبين أو بدء اللعبة',
                selectTopic: 'حدد موضوعا من الاسفل',
                topics: {},
                giveThePhoneToPlayer: (playerName) => {
                    return{
                        giveThePhoneTo: ` أعط الهاتف ل ${playerName}`
                    }},
                pressNextToCheck: 'اضغط على التالي للتحقق مما إذا كنت داخل أو خارج الموضوع.',
                dontLetAnyoneSee: "لا تدع أي شخص آخر يرى الشاشة.",
                youAreOffTopic: 'أنت خارج الموضوع',
                tryTofindTopic: 'حاول أن تعرف ما هو الموضوع',
                voteForWrongImposter: 'واجعل الآخرين يصوتون لصالح المحتال الخطأ!',
                giveHint: (topicType) => {
                    return {
                        Hint: ` تلميح: الموضوع يدور حول: ${topicType}`,
                    }
                },
                inTopic : (topic) => {
                    return {
                        youAreInTopic: ` أنت في الموضوع ، وهو ${topic}` 
                    }
                },
                yourGoalIs: 'هدفك هو العثور على المحتال الذي لا يعرف الموضوع',
                pressNext: 'اضغط على التالي',
                questionTime: 'وقت الأسئلة',
                everyPlayerWillAsk: 'يجب على كل لاعب أن يسأل لاعبًا آخر سؤالًا حول الموضوع.',
                pressNextForFirstQuestion: 'اضغط على التالي للسؤال الأول',
                player1AsksPlayer2: (player1, player2) => {
                    return {
                        playersAsk: `${player1},  تستطيع أن تسأل ${player2}`
                    }
                },
                beCarefull: "اختر سؤالك بعناية حتى لا يجد المحتال ماهية الموضوع.",
                ifYouHaveMoreQuestions: "إذا كان لديك المزيد من الأسئلة ، فقد حان الوقت لطرحها.",
                pressVote: 'خلاف ذلك اضغط تصويت للتصويت على المحتال.',
                voteForPlayer: 'صوت للاعب الذي تعتقد أنه خارج الموضوع',
                whichOneIsTopic: 'أي واحد من هؤلاء هو الموضوع برأيك:',
                offTopicPlayerIs: 'اللاعب خارج الموضوع هو ...',
                results: 'النتائج',
                pleaseAdMoreplayers: (num) => {
                    return {
                        addMorePlayers: `الرجاء إضافة ${num} لاعبين آخرين لبدء اللعبة`
                    }
                },
                maxPlayersReached: 'لقد وصلت إلى الحد الأقصى المسموح به من اللاعبين',
            }
        default:
            return {}
    }
}

export const TopicText = ( id ) => {
    switch (id) {
        case 0:
            return [
                {
                    id: 0,
                    name: 'animals',
                    imageUrl: 'https://i.ibb.co/FVRQLKr/Animals.png',
                    topics: [
                        {
                            id: 1,
                            name: 'Lion'
                        },
                        {
                            id: 2,
                            name: 'Bear'
                        },
                        {
                            id: 3,
                            name: 'Bird'
                        },
                        {
                            id: 4,
                            name: 'Wolf'
                        },
                        {
                            id: 5,
                            name: 'Cat'
                        },
                        {
                            id: 6,
                            name: 'Mouse'
                        },
                        {
                            id: 7,
                            name: 'Dog'
                        }
                    ]
            
                },{
                    id: 1,
                    name: 'clothes',
                    imageUrl: 'https://i.ibb.co/RbF6BrW/Clothes.png',
                    topics: [
                        {
                            id: 1,
                            name: 'Jeans'
                        },
                        {
                            id: 2,
                            name: 'Socks'
                        },
                        {
                            id: 3,
                            name: 'Shorts'
                        },
                        {
                            id: 4,
                            name: 'Jacket'
                        },
                        {
                            id: 5,
                            name: 'Ring'
                        },
                        {
                            id: 6,
                            name: 'Heels'
                        },
                        {
                            id: 7,
                            name: 'Skirt'
                        },
                        {
                            id: 9,
                            name: 'Watch'
                        },
                        {
                            id: 10,
                            name: 'Hat'
                        },
                        {
                            id: 11,
                            name: 'Glasses'
                        }
                    ]
                },{
                    id: 2,
                    name: 'fruits',
                    imageUrl: 'https://i.ibb.co/p13nWmg/Fruits.png',
                    topics: [
                        {
                            id: 1,
                            name: 'Apple'
                        },
                        {
                            id: 2,
                            name: 'Banana'
                        },
                        {
                            id: 3,
                            name: 'Orange'
                        },
                        {
                            id: 4,
                            name: 'Lemon'
                        },
                        {
                            id: 5,
                            name: 'Watermelon'
                        },
                        {
                            id: 6,
                            name: 'Mango'
                        },
                        {
                            id: 7,
                            name: 'Grapes'
                        },
                        {
                            id: 8,
                            name: 'Strawberries'
                        },
                        {
                            id: 9,
                            name: 'Pineapple'
                        },
                        {
                            id: 10,
                            name: 'Kiwi'
                        },
                        {
                            id: 11,
                            name: 'Pear'
                        },
                        {
                            id: 12,
                            name: 'Avocado'
                        }
                    ]
                },{
                    id: 3,
                    name: 'vegetables',
                    imageUrl: 'https://i.ibb.co/k49b0Zd/Vegetables.png',
                    topics: [
                        {
                            id: 1,
                            name: 'Tomato'
                        },
                        {
                            id: 2,
                            name: 'Potato'
                        },
                        {
                            id: 3,
                            name: 'Cucumber'
                        },
                        {
                            id: 4,
                            name: 'Onion'
                        },
                        {
                            id: 5,
                            name: 'Carrot'
                        },
                        {
                            id: 6,
                            name: 'Corn'
                        },
                        {
                            id: 7,
                            name: 'Eggplant'
                        },
                        {
                            id: 8,
                            name: 'Pepper'
                        },
                        {
                            id: 9,
                            name: 'Radish'
                        },
                        {
                            id: 10,
                            name: 'Spinach'
                        },
                        {
                            id: 11,
                            name: 'Peas'
                        },
                        {
                            id: 12,
                            name: 'Mushroom'
                        }
                    ]
                },
            ]
        case 1:
            return [
                {
                    id: 0,
                    name: 'الحيوانات',
                    imageUrl: 'https://i.ibb.co/FVRQLKr/Animals.png',
                    topics: [
                        {
                            id: 1,
                            name: 'أسد'
                        },
                        {
                            id: 2,
                            name: 'دب'
                        },
                        {
                            id: 3,
                            name: 'عصفور'
                        },
                        {
                            id: 4,
                            name: 'Wolf'
                        },
                        {
                            id: 5,
                            name: 'ذئب'
                        },
                        {
                            id: 6,
                            name: 'فأر'
                        },
                        {
                            id: 7,
                            name: 'كلب'
                        }
                    ]
            
                },{
                    id: 1,
                    name: 'ملابس',
                    imageUrl: 'https://i.ibb.co/RbF6BrW/Clothes.png',
                    topics: [
                        {
                            id: 1,
                            name: 'جينز'
                        },
                        {
                            id: 2,
                            name: 'جوارب'
                        },
                        {
                            id: 3,
                            name: 'السراويل القصيرة'
                        },
                        {
                            id: 4,
                            name: 'السترة'
                        },
                        {
                            id: 5,
                            name: 'خاتم'
                        },
                        {
                            id: 6,
                            name: 'كعب'
                        },
                        {
                            id: 7,
                            name: 'تنورة'
                        },
                        {
                            id: 9,
                            name: 'ساعة'
                        },
                        {
                            id: 10,
                            name: 'قبعة'
                        },
                        {
                            id: 11,
                            name: 'نظارات'
                        }
                    ]
                },{
                    id: 2,
                    name: 'فواكه',
                    imageUrl: 'https://i.ibb.co/p13nWmg/Fruits.png',
                    topics: [
                        {
                            id: 1,
                            name: 'تفاحة'
                        },
                        {
                            id: 2,
                            name: 'موز'
                        },
                        {
                            id: 3,
                            name: 'برتقال'
                        },
                        {
                            id: 4,
                            name: 'ليمون'
                        },
                        {
                            id: 5,
                            name: 'بطيخ'
                        },
                        {
                            id: 6,
                            name: 'مانجو'
                        },
                        {
                            id: 7,
                            name: 'العنب'
                        },
                        {
                            id: 8,
                            name: 'فراولة'
                        },
                        {
                            id: 9,
                            name: 'أناناس'
                        },
                        {
                            id: 10,
                            name: 'كيوي'
                        },
                        {
                            id: 11,
                            name: 'إجاص'
                        },
                        {
                            id: 12,
                            name: 'أفوكادو'
                        }
                    ]
                },{
                    id: 3,
                    name: 'خضروات',
                    imageUrl: 'https://i.ibb.co/k49b0Zd/Vegetables.png',
                    topics: [
                        {
                            id: 1,
                            name: 'طماطم'
                        },
                        {
                            id: 2,
                            name: 'بطاطا'
                        },
                        {
                            id: 3,
                            name: 'خيار'
                        },
                        {
                            id: 4,
                            name: 'بصل'
                        },
                        {
                            id: 5,
                            name: 'جزر'
                        },
                        {
                            id: 6,
                            name: 'باذنجان'
                        },
                        {
                            id: 7,
                            name: 'فلفل'
                        },
                        {
                            id: 8,
                            name: 'الفجل'
                        },
                        {
                            id: 9,
                            name: 'سبانخ'
                        },
                        {
                            id: 10,
                            name: 'بازيلاء'
                        },
                        {
                            id: 11,
                            name: 'فطر'
                        }
                    ]
                },
            ]
        default:
            return {}
    }
}