export const Languages = [
     {
        id: "en",
        name: "English"
    },
    {
        id: "ar",
        name: "العربية"
    }
]




export const DisplayText = ( id ) => {
    switch (id) {
        case "en":
            return {
                id: 0,
                name: 'English',
                startButton: 'START',
                nextButton: 'NEXT',
                backButton: 'BACK',
                voteButton: 'VOTE',
                sendButton: 'SEND',
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
                FeedbackAndSuggestions: 'Feedback & Suggestions',
                Feedback: 'Feedback',
                YourName: 'Your name:'
            };
        case "ar":
            return {
                id: 1,
                name: 'العربية',
                startButton: 'بداية',
                nextButton: 'التالي',
                backButton: 'عودة',
                voteButton: 'تصويت',
                sendButton: 'إرسال',
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
                FeedbackAndSuggestions: 'ردود الفعل والاقتراحات',
                Feedback: 'الاقتراحات',
                YourName: ':الاسم'
            }
        default:
            return {}
    }
}
