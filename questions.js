const questionBank = [

    { 
        q: "1. How do you prefer to travel to school?", 
        options: [
            { text: "I prefer to take the bus because it's convenient and I can chat with my friends. Do you walk?", score: 100, feedback: "Perfect interaction!" },
            { text: "Actually, I think that taking a bus is much more better and useful for me because have many different lines and the bus stop is very close to my house.", score: 0, feedback: "TRAP! 'More better' and 'because have' are incorrect." },
            { text: "I usually go by bike because it is faster than the bus.", score: 75, feedback: "Good, but try to ask a question back." },
            { text: "I like to walk to school with my friends.", score: 50, feedback: "Correct but basic." }
        ] 
    },
    { 
        q: "2. What do you like to do on the weekends?", 
        options: [
            { text: "I really enjoy going to the cinema because I love movies. ", score: 100, feedback: "Great use of 'really enjoy' and interaction." },
            { text: "In the weekend, I always like for stay at home because I am very busy in the week and I want for relax with my family and my dog.", score: 0, feedback: "TRAP! 'In the weekend' and 'want for relax' are incorrect." },
            { text: "I like playing football with my friends at the park.", score: 75, feedback: "Clear, but add a reason why." },
            { text: "I sleep a lot and watch television.", score: 50, feedback: "A bit short." }
        ] 
    },
    { 
        q: "3. Is it better to exercise in a gym or outside?", 
        options: [
            { text: "I prefer outside because the fresh air makes me feel energetic. ", score: 100, feedback: "Perfect comparison and follow-up." },
            { text: "I think that gym is more better because have many machines and you can do many different things for make your body very strong.", score: 0, feedback: "TRAP! 'More better' and 'because have' detected." },
            { text: "Exercising in a gym is good because it is never rainy there.", score: 75, feedback: "Good logic, just keep expanding!" },
            { text: "I like to run in the park near my house.", score: 50, feedback: "Solid, but basic." }
        ] 
    },
    { 
        q: "4. Do you think children should have cell phones?", 
        options: [
            { text: "I think it's okay for emergencies, but they shouldn't use them in class. Don't you agree", score: 100, feedback: "Balanced argument and interaction." },
            { text: "Yes, I think children must to have phones because they can play many games and call parents if they are have some problems.", score: 0, feedback: "TRAP! 'Must to have' and 'if they are have' are incorrect." },
            { text: "Yes, it is safe for them to have a phone.", score: 75, feedback: "Correct, but explain why it's safe." },
            { text: "No, they are too young for phones.", score: 50, feedback: "A bit too simple." }
        ] 
    },
    { 
        q: "5. What is your favorite season of the year?", 
        options: [
            { text: "I love autumn because the weather is cool and the colors are beautiful. ", score: 100, feedback: "Nice adjectives and follow-up." },
            { text: "My favorite season is the summer because I am very like go to the beach for swim in the ocean with my friends every days.", score: 0, feedback: "TRAP! 'I am very like' and 'every days' are wrong." },
            { text: "I like winter because I enjoy skiing in the mountains.", score: 75, feedback: "Good, but try to engage the listener." },
            { text: "I like spring because of the flowers.", score: 50, feedback: "Simple and correct." }
        ] 
    },
    { 
        q: "6. Do you prefer reading books or watching movies?", 
        options: [
            { text: "I prefer movies because they are exciting, but books have more detail. Do you read much?", score: 100, feedback: "Great contrast used." },
            { text: "I am prefer watch movies more than read books because movies is more interesting and books is very boring for me to reading.", score: 0, feedback: "TRAP! 'I am prefer' and 'movies is' are plural/verb errors." },
            { text: "I like books because I can use my imagination while reading.", score: 75, feedback: "Nice vocabulary ('imagination')." },
            { text: "I like watching movies on Netflix.", score: 50, feedback: "A bit too short." }
        ] 
    },
    { 
        q: "7. Is it a good idea to eat fast food?", 
        options: [
            { text: "It's fine occasionally, but eating it too often is unhealthy. How often do you eat it", score: 100, feedback: "Uses 'occasionally' and asks a question." },
            { text: "No, I think eat fast food is very bad for health because have too much oil and sugar and makes people to becoming very fat.", score: 0, feedback: "TRAP! 'I think eat' and 'makes people to becoming' are errors." },
            { text: "Fast food is delicious but contains a lot of calories.", score: 75, feedback: "Correct and factual." },
            { text: "I think it tastes good but is expensive.", score: 50, feedback: "Basic response." }
        ] 
    },
    { 
        q: "8. Would you rather live in a city or a small village?", 
        options: [
            { text: "I'd prefer the city because there's so much to do at night. ", score: 100, feedback: "Engaging and descriptive." },
            { text: "I want live in a city because have many shops and cinema and I can going to different places very easy with my friends.", score: 0, feedback: "TRAP! 'I want live', 'because have', and 'can going' are errors." },
            { text: "I like villages because they are quiet and the air is clean.", score: 75, feedback: "Good use of 'quiet' and 'clean air'." },
            { text: "Cities are too noisy for me.", score: 50, feedback: "Direct but short." }
        ] 
    },
    { 
        q: "9. Do you like to celebrate your birthday?", 
        options: [
            { text: "Yes, I love having a party with my friends and eating cake. When is your birthday?", score: 100, feedback: "Engages the partner immediately." },
            { text: "I am really like celebrate my birthday because I can getting many presents from my parents and my friends and we can eat big cake.", score: 0, feedback: "TRAP! 'I am really like' and 'can getting' are errors." },
            { text: "I enjoy birthdays because I get to see all my relatives.", score: 75, feedback: "Good detail about family." },
            { text: "I like getting presents on my birthday.", score: 50, feedback: "Simple." }
        ] 
    },
    { 
        q: "10. How important is music in your life?", 
        options: [
            { text: "It's very important! I listen to pop music while I study to help me focus. ", score: 100, feedback: "Explains 'why' and asks 'what'." },
            { text: "Music is very important for me because I am listen to music every time when I am walk to school or do my homeworks.", score: 0, feedback: "TRAP! 'I am listen' and 'homeworks' (uncountable) are errors." },
            { text: "I love music because it helps me relax after a long day.", score: 75, feedback: "Good emotional connection." },
            { text: "I like listening to rock music.", score: 50, feedback: "Basic." }
        ] 
    },
    { 
        q: "11. What is the best way to keep fit?", 
        options: [
            { text: "I think playing a team sport is best because it's fun and social. ", score: 100, feedback: "Excellent B1 reasoning." },
            { text: "The best way for keep fit is go to the gym every day and eat many vegetables because this is make you very healthy.", score: 0, feedback: "TRAP! 'way for keep' and 'this is make' are errors." },
            { text: "Running every morning is a great way to stay in shape.", score: 75, feedback: "Good idiomatic use of 'stay in shape'." },
            { text: "Eating healthy food is very important.", score: 50, feedback: "A bit too general." }
        ] 
    },
    { 
        q: "12. Do you think we should use less plastic?", 
        options: [
            { text: "Definitely. Plastic pollutes the oceans and harms animals. Do you use a reusable bottle", score: 100, feedback: "High-level vocab: 'pollutes', 'reusable'." },
            { text: "Yes, we must to use less plastic because plastic is very bad for the world and makes the animals to die in the sea.", score: 0, feedback: "TRAP! 'Must to use' and 'makes the animals to die' are errors." },
            { text: "Using less plastic is good for the environment.", score: 75, feedback: "Correct but could use more detail." },
            { text: "We should recycle our plastic bottles.", score: 50, feedback: "Simple advice." }
        ] 
    },
    { 
        q: "13. Do you prefer a busy holiday or a relaxing one?", 
        options: [
            { text: "I prefer a relaxing holiday on the beach because I work hard all year. ", score: 100, feedback: "Explains 'why' very well." },
            { text: "I am prefer a busy holiday because I like for see many different famous places and taking many photos for my social media.", score: 0, feedback: "TRAP! 'I am prefer', 'like for see', and 'taking' (parallelism) are errors." },
            { text: "I like busy holidays because I enjoy visiting museums and galleries.", score: 75, feedback: "Good specific examples." },
            { text: "I like to stay in a hotel and sleep.", score: 50, feedback: "A bit lazy, but correct." }
        ] 
    },
    { 
        q: "14. Is it better to study alone or with friends?", 
        options: [
            { text: "I prefer studying alone because I can concentrate better. Do you get distracted easily?", score: 100, feedback: "Great vocab ('concentrate', 'distracted')." },
            { text: "I like study with friends because we can helping each other when we are have some difficult questions in the homework.", score: 0, feedback: "TRAP! 'like study', 'can helping', and 'we are have' are errors." },
            { text: "Studying with friends is better because you can share ideas.", score: 75, feedback: "Good reasoning." },
            { text: "I like to study in the library.", score: 50, feedback: "Answered where, not how." }
        ] 
    },
    { 
        q: "15. What is your favorite subject at school?", 
        options: [
            { text: "I love History because learning about the past is fascinating. ", score: 100, feedback: "Uses a strong adjective ('fascinating')." },
            { text: "My favorite subject is English because I am want for speak with many different people from another countries in the future.", score: 0, feedback: "TRAP! 'I am want for' and 'another countries' are errors." },
            { text: "I like Math because I enjoy solving difficult problems.", score: 75, feedback: "Good, logical response." },
            { text: "I like PE because I like sports.", score: 50, feedback: "Repetitive." }
        ] 
    },
    { 
        q: "16. How do you feel about social media?", 
        options: [
            { text: "It's useful for staying in touch, but it can be a waste of time. ", score: 100, feedback: "Balanced view with interaction." },
            { text: "Social media is very good because I can see what my friends is doing and I can sharing my life with everyone very easy.", score: 0, feedback: "TRAP! 'friends is doing' and 'can sharing' are errors." },
            { text: "I think social media is fun but sometimes it's a bit annoying.", score: 75, feedback: "Good use of 'annoying'." },
            { text: "I use TikTok every day.", score: 50, feedback: "Not an opinion, just a fact." }
        ] 
    },
    { 
        q: "17. Do you like to go to the zoo?", 
        options: [
            { text: "I have mixed feelings. I like seeing the animals, but I don't like seeing them in cages. ", score: 100, feedback: "Sophisticated 'mixed feelings' response." },
            { text: "Yes, I am very like go to the zoo because I can see many different big animals like lions and elephants and I can taking photos.", score: 0, feedback: "TRAP! 'I am very like' and 'can taking' are errors." },
            { text: "I like the zoo because it's a great place to learn about nature.", score: 75, feedback: "Good educational angle." },
            { text: "I like the monkeys the most.", score: 50, feedback: "Simple." }
        ] 
    },
    { 
        q: "18. What is your favorite type of food?", 
        options: [
            { text: "I'm a big fan of Italian food, especially pizza and pasta. Do you like spicy food?", score: 100, feedback: "Uses 'big fan' and 'especially'." },
            { text: "My favorite food is Chinese food because have many different tastes and I am like for eat it with my family every week.", score: 0, feedback: "TRAP! 'because have' and 'I am like for eat' are errors." },
            { text: "I love sushi because it is very fresh and healthy.", score: 75, feedback: "Good adjectives." },
            { text: "I like burgers and fries.", score: 50, feedback: "Basic." }
        ] 
    },
    { 
        q: "19. Is it important to save money?", 
        options: [
            { text: "Yes, because you might need it for an emergency or something special. ", score: 100, feedback: "Uses 'might' and 'emergency'." },
            { text: "I think save money is very important because if you are have many money you can buying a big car or a big house in future.", score: 0, feedback: "TRAP! 'I think save', 'if you are have', and 'can buying' are errors." },
            { text: "Saving money is a good habit to have for the future.", score: 75, feedback: "Good use of 'habit'." },
            { text: "I save some money every month.", score: 50, feedback: "Simple statement." }
        ] 
    },
    { 
        q: "20. Do you like to go shopping for clothes?", 
        options: [
            { text: "Not really, I find it quite tiring. I prefer shopping online. ", score: 100, feedback: "Uses 'quite' and 'online' contrast." },
            { text: "Yes, I am love go shopping for clothes because I can trying many different things and see if they are look good for me.", score: 0, feedback: "TRAP! 'I am love', 'can trying', and 'look good for me' are errors." },
            { text: "I enjoy shopping with my friends because they give me good advice.", score: 75, feedback: "Good social reason." },
            { text: "I like buying new shoes.", score: 50, feedback: "Simple." }
        ] 
    },
    
    { 
        q: "21. Do you prefer watching sports or playing them?", 
        options: [
            { text: "I prefer playing them because it keeps me healthy and I enjoy the competition. ", score: 100, feedback: "Great use of 'keeps me healthy'." },
            { text: "I am prefer watch sports on the TV because I am very lazy and I like for see the famous players play very good.", score: 0, feedback: "TRAP! 'I am prefer' and 'like for see' are errors." },
            { text: "I like playing basketball because I'm quite tall and it's fun.", score: 75, feedback: "Good personal detail." },
            { text: "I like to watch football on Sundays.", score: 50, feedback: "Simple but correct." }
        ] 
    },
    { 
        q: "22. Is it important to eat breakfast every day?", 
        options: [
            { text: "Yes, it gives you energy for the morning. I usually have eggs. ", score: 100, feedback: "Good follow-up question." },
            { text: "Yes, I think breakfast is the most important meal because if you are not eat it you will becoming very tired.", score: 0, feedback: "TRAP! 'if you are not eat' and 'will becoming' are errors." },
            { text: "Breakfast is essential because it helps you concentrate at school.", score: 75, feedback: "Great vocab: 'essential' and 'concentrate'." },
            { text: "I always eat cereal for breakfast.", score: 50, feedback: "Basic fact." }
        ] 
    },
    { 
        q: "23. Do you like to travel by plane?", 
        options: [
            { text: "I love it because it's fast and you get a great view. Have you ever flown?", score: 100, feedback: "Uses the Present Perfect correctly." },
            { text: "I am like travel by plane because is very fast and I can see the clouds when I am look out from the window.", score: 0, feedback: "TRAP! 'I am like' and 'because is' are errors." },
            { text: "I don't like planes because I am afraid of heights.", score: 75, feedback: "Good use of 'afraid of'." },
            { text: "I like the food on planes.", score: 50, feedback: "Simple." }
        ] 
    },
    { 
        q: "24. Is it better to be an only child or have siblings?", 
        options: [
            { text: "I think having siblings is better because you're never lonely. ", score: 100, feedback: "Perfect use of 'never lonely'." },
            { text: "I think have siblings is more better because you can play with they every day and you are never feel alone at home.", score: 0, feedback: "TRAP! 'more better' and 'play with they' are errors." },
            { text: "Being an only child is okay because you don't have to share your toys.", score: 75, feedback: "Good reasoning." },
            { text: "I have one brother and two sisters.", score: 50, feedback: "Just a fact, not an opinion." }
        ] 
    },
    { 
        q: "25. Do you enjoy cooking?", 
        options: [
            { text: "Yes, I find it relaxing and I love trying new recipes. ", score: 100, feedback: "Interactive and uses 'trying new recipes'." },
            { text: "I am like for cook because I like eat very much and I can making many different delicious foods for my family.", score: 0, feedback: "TRAP! 'I am like for' and 'can making' are errors." },
            { text: "I don't like cooking because I'm not very good at it.", score: 75, feedback: "Honest and correct." },
            { text: "My mother does all the cooking.", score: 50, feedback: "Simple." }
        ] 
    },
    { 
        q: "26. What do you do if it rains on your day off?", 
        options: [
            { text: "I usually stay inside and watch a movie or read. ", score: 100, feedback: "Good use of 'usually' and interaction." },
            { text: "When it is rain, I am like for stay in my bed and play games on my phone because have nothing for do outside.", score: 0, feedback: "TRAP! 'When it is rain' and 'because have nothing for do'." },
            { text: "I go to the shopping mall because it's dry there.", score: 75, feedback: "Practical answer." },
            { text: "I sleep until lunchtime.", score: 50, feedback: "A bit short." }
        ] 
    },
    { 
        q: "27. Is it a good idea to have a part-time job?", 
        options: [
            { text: "Yes, it helps you earn money and learn responsibility. ", score: 100, feedback: "Uses 'responsibility'—great B1 word." },
            { text: "Yes, I think part-time job is very good because you can getting some money for buying clothes or play video games.", score: 0, feedback: "TRAP! 'can getting' and 'for buying'." },
            { text: "It's a good idea, but you must still have time for your homework.", score: 75, feedback: "Good cautionary advice." },
            { text: "I want to work in a cafe.", score: 50, feedback: "Simple." }
        ] 
    },
    { 
        q: "28. Do you like to go to museums?", 
        options: [
            { text: "I love art museums because they are very peaceful. Are you interested in art?", score: 100, feedback: "Uses 'peaceful' and 'interested in'." },
            { text: "I am not like museums because is very boring and have too many old things that I am not understand.", score: 0, feedback: "TRAP! 'I am not like' and 'because is'." },
            { text: "I like science museums because the exhibitions are interactive.", score: 75, feedback: "Great vocab: 'exhibitions', 'interactive'." },
            { text: "I go to museums with my school.", score: 50, feedback: "Simple." }
        ] 
    },
    { 
        q: "29. What is the most beautiful place in your country?", 
        options: [
            { text: "In my opinion, the mountains are the most beautiful, especially in winter. ", score: 100, feedback: "Superlative 'most beautiful' and interaction." },
            { text: "I think the beach is the more beautiful place because have many blue water and the sun is very hot and nice.", score: 0, feedback: "TRAP! 'the more beautiful' (should be most) and 'have many water'." },
            { text: "The capital city is beautiful because of the old buildings.", score: 75, feedback: "Good reasoning." },
            { text: "I think the park near my house is nice.", score: 50, feedback: "A bit limited." }
        ] 
    },
    { 
        q: "30. Do you prefer to study in the morning or at night?", 
        options: [
            { text: "I prefer the morning because my brain is fresh and I can focus better. ", score: 100, feedback: "Metaphorical 'brain is fresh'—very B1!" },
            { text: "I am prefer study at night because is very quiet and I am not have many distractions from my family.", score: 0, feedback: "TRAP! 'I am prefer' and 'I am not have'." },
            { text: "I study in the morning because I want to have the evening free.", score: 75, feedback: "Good logical choice." },
            { text: "I study after I eat dinner.", score: 50, feedback: "Simple fact." }
        ] 
    },
    { 
        q: "31. Is it better to watch a movie at home or in the cinema?", 
        options: [
            { text: "The cinema is better because the screen is huge, but home is more comfortable. ", score: 100, feedback: "Good contrast using 'but'." },
            { text: "I think cinema is more better because have big screen and the sound is very loud and makes me for feeling excited.", score: 0, feedback: "TRAP! 'more better' and 'makes me for feeling'." },
            { text: "I prefer home because I can stop the movie whenever I want.", score: 75, feedback: "Good use of 'whenever'." },
            { text: "I like to eat popcorn at the cinema.", score: 50, feedback: "A bit off-topic." }
        ] 
    },
    { 
        q: "32. Do you like learning about history?", 
        options: [
            { text: "Yes, it’s interesting to see how the world has changed. Do you like historical movies?", score: 100, feedback: "Abstract reasoning and interaction." },
            { text: "I am not like history because is very difficult for remember all the dates and the names of the people from past.", score: 0, feedback: "TRAP! 'I am not like' and 'people from past'." },
            { text: "I like history because it helps me understand my own country.", score: 75, feedback: "Deep and accurate." },
            { text: "History is my favorite subject at school.", score: 50, feedback: "Simple." }
        ] 
    },
    { 
        q: "33. What is the most important invention in history?", 
        options: [
            { text: "I think the internet is the most important because it connects the whole world. ", score: 100, feedback: "Strong argument and check for agreement." },
            { text: "I think the car is more important invention because have many people who can travel to different places very fast now.", score: 0, feedback: "TRAP! 'more important' (should be most) and 'because have'." },
            { text: "The lightbulb was important because it changed how we live at night.", score: 75, feedback: "Clear and historical." },
            { text: "I think the telephone is very useful.", score: 50, feedback: "Basic." }
        ] 
    },
    { 
        q: "34. Do you enjoy going to parties?", 
        options: [
            { text: "Yes, I love dancing and meeting new people. Do you usually dance at parties?", score: 100, feedback: "Enthusiastic and interactive." },
            { text: "I am really like go to parties because I can eat many different foods and play many games with my friends.", score: 0, feedback: "TRAP! 'I am really like' and 'go to parties' (missing to)." },
            { text: "I prefer small gatherings with just a few close friends.", score: 75, feedback: "Advanced vocab: 'gatherings'." },
            { text: "I like parties when there is a lot of cake.", score: 50, feedback: "Simple." }
        ] 
    },
    { 
        q: "35. Is it better to read the news online or in a newspaper?", 
        options: [
            { text: "Online is better because it's updated every minute. ", score: 100, feedback: "Uses Passive voice ('updated') correctly." },
            { text: "I think online is more better because is free and you can see the news on your phone when you are be on the bus.", score: 0, feedback: "TRAP! 'more better' and 'when you are be'." },
            { text: "Newspapers are better because they are more traditional and reliable.", score: 75, feedback: "Good vocab: 'traditional', 'reliable'." },
            { text: "I read the news on my Instagram feed.", score: 50, feedback: "Modern fact." }
        ] 
    },
    { 
        q: "36. Do you think teenagers should learn to cook?", 
        options: [
            { text: "Yes, it’s an essential skill for when they live alone. ", score: 100, feedback: "Uses 'essential skill' and 'when they live alone'." },
            { text: "Yes, I think they must to learn for cook because if they are not learn they will be very hungry in the future.", score: 0, feedback: "TRAP! 'must to learn' and 'if they are not learn'." },
            { text: "It's important because home-cooked food is healthier than fast food.", score: 75, feedback: "Strong comparison." },
            { text: "I can make pasta and toast.", score: 50, feedback: "Specific but basic." }
        ] 
    },
    { 
        q: "37. What is your favorite way to spend a rainy afternoon?", 
        options: [
            { text: "I like to bake something delicious or watch a series. ", score: 100, feedback: "Interactive and creative." },
            { text: "I am like for stay inside and watch many movies because is very comfortable for being at home when the weather is bad.", score: 0, feedback: "TRAP! 'I am like for' and 'comfortable for being'." },
            { text: "I enjoy playing board games with my family when it's raining.", score: 75, feedback: "Good use of 'board games'." },
            { text: "I like to sleep when it is raining.", score: 50, feedback: "Simple." }
        ] 
    },
    { 
        q: "38. Is it important to be on time for appointments?", 
        options: [
            { text: "Yes, it shows that you respect other people's time. ", score: 100, feedback: "Uses 'respect' and asks a question." },
            { text: "Yes, I think is very important because if you are be late the other people will be very angry with you.", score: 0, feedback: "TRAP! 'I think is' (missing it) and 'if you are be late'." },
            { text: "Being punctual is important for your professional reputation.", score: 75, feedback: "Very high level: 'punctual', 'reputation'." },
            { text: "I am always five minutes early.", score: 50, feedback: "Simple fact." }
        ] 
    },
    { 
        q: "39. Do you like to go to the beach in the summer?", 
        options: [
            { text: "I love it, but only if it's not too crowded. ", score: 100, feedback: "Condition 'only if' used well." },
            { text: "I am love go to the beach because have many sand and I can swimming in the ocean with my friends all day.", score: 0, feedback: "TRAP! 'I am love' and 'can swimming'." },
            { text: "I prefer the beach in the evening when it's cooler.", score: 75, feedback: "Good specific preference." },
            { text: "I like to sunbathe on the beach.", score: 50, feedback: "Simple." }
        ] 
    },
    { 
        q: "40. Is it a good idea to have a lot of homework?", 
        options: [
            { text: "A little is good for practice, but too much is stressful. ", score: 100, feedback: "Balanced view: 'practice' vs 'stressful'." },
            { text: "No, I think have much homework is very bad because makes the students to becoming very tired and they are not have time for play.", score: 0, feedback: "TRAP! 'I think have' and 'makes to becoming'." },
            { text: "Homework is important to remember what we learned in class.", score: 75, feedback: "Good academic reasoning." },
            { text: "I hate doing homework on the weekends.", score: 50, feedback: "Personal feeling." }
        ] 
    },
    { 
        q: "41. What is your favorite holiday of the year?", 
        options: [
            { text: "I love Christmas because the whole family gets together. ", score: 100, feedback: "Phrasal verb: 'gets together'." },
            { text: "My favorite holiday is the summer holiday because have many weeks for relax and I can go to many different countries.", score: 0, feedback: "TRAP! 'because have' and 'weeks for relax'." },
            { text: "I enjoy Halloween because I like dressing up in costumes.", score: 75, feedback: "Specific and clear." },
            { text: "I like New Year's Eve because of the fireworks.", score: 50, feedback: "Simple." }
        ] 
    },
    { 
        q: "42. Do you prefer to spend time with one friend or a group?", 
        options: [
            { text: "I prefer a small group because the conversation is more interesting. ", score: 100, feedback: "Good reasoning and follow-up." },
            { text: "I am prefer spend time with one friend because is more quiet and we can talking about many private things very easy.", score: 0, feedback: "TRAP! 'I am prefer' and 'we can talking'." },
            { text: "I like a big group because we can play team games together.", score: 75, feedback: "Good social reasoning." },
            { text: "I like being with my best friend.", score: 50, feedback: "Simple." }
        ] 
    },
    { 
        q: "43. Is it important to learn how to swim?", 
        options: [
            { text: "Yes, it’s a vital safety skill and it's also great exercise. ", score: 100, feedback: "Uses 'vital' and 'safety skill'." },
            { text: "Yes, I think is very important because if you are fall into the water you must to know how for swim for save your life.", score: 0, feedback: "TRAP! 'if you are fall' and 'how for swim'." },
            { text: "Learning to swim is fun and it's a good way to stay cool in summer.", score: 75, feedback: "Practical and correct." },
            { text: "I learned to swim when I was six.", score: 50, feedback: "Simple fact." }
        ] 
    },
    { 
        q: "44. Do you think people should use cars less?", 
        options: [
            { text: "Yes, public transport is better for the environment. ", score: 100, feedback: "Uses 'environment' and interaction." },
            { text: "Yes, I think people must to use cars less because cars is make many pollution and the air is becoming very dirty.", score: 0, feedback: "TRAP! 'must to use' and 'cars is make'." },
            { text: "We should use bicycles more because it's healthier and cheaper.", score: 75, feedback: "Strong argument." },
            { text: "I walk to school every day.", score: 50, feedback: "Personal fact." }
        ] 
    },
    { 
        q: "45. What kind of movies do you dislike?", 
        options: [
            { text: "I'm not a fan of horror movies because they are too scary for me. ", score: 100, feedback: "Uses 'not a fan' and interaction." },
            { text: "I am not like horror movies because makes me for have bad dreams and I am feel very afraid when I am be in the dark.", score: 0, feedback: "TRAP! 'I am not like' and 'makes me for have'." },
            { text: "I dislike romantic movies because I find them a bit boring.", score: 75, feedback: "Clear and correct." },
            { text: "I don't like movies that are very long.", score: 50, feedback: "Simple." }
        ] 
    },
    { 
        q: "46. Is it better to live in a house with a garden?", 
        options: [
            { text: "Definitely, because you can enjoy the fresh air and grow flowers. ", score: 100, feedback: "Uses 'fresh air' and interaction." },
            { text: "Yes, I think house with garden is more better because have many space for play with your dogs and the children can running.", score: 0, feedback: "TRAP! 'more better' and 'can running'." },
            { text: "I like gardens because I find gardening very relaxing.", score: 75, feedback: "Good vocabulary: 'gardening'." },
            { text: "My garden has many trees.", score: 50, feedback: "Simple." }
        ] 
    },
    { 
        q: "47. Do you like to go to the theater?", 
        options: [
            { text: "Yes, I love seeing live performances; it feels more real than a movie. ", score: 100, feedback: "Uses 'live performances'—great B1 vocab." },
            { text: "I am like go to the theater because is very interesting for see the famous people on the stage in front of me.", score: 0, feedback: "TRAP! 'I am like go' and 'because is'." },
            { text: "I like musicals because the songs and costumes are amazing.", score: 75, feedback: "Clear and descriptive." },
            { text: "I went to the theater with my family last year.", score: 50, feedback: "Simple fact." }
        ] 
    },
    { 
        q: "48. Is it important to learn to drive?", 
        options: [
            { text: "Yes, it gives you more freedom to travel whenever you want. ", score: 100, feedback: "Uses 'freedom' and 'whenever'." },
            { text: "Yes, I think learn for drive is very useful because if you are have a car you can go to everywhere very easy.", score: 0, feedback: "TRAP! 'learn for drive' and 'if you are have'." },
            { text: "Driving is important for many jobs and for doing the shopping.", score: 75, feedback: "Good practical reasoning." },
            { text: "I want to get my license next year.", score: 50, feedback: "Simple." }
        ] 
    },
    { 
        q: "49. Do you prefer tea or coffee?", 
        options: [
            { text: "I prefer tea because it's more relaxing and there are so many flavors. ", score: 100, feedback: "Good contrast and interaction." },
            { text: "I am prefer coffee because makes me for feel very energetic in the morning when I am have to go to school.", score: 0, feedback: "TRAP! 'I am prefer' and 'makes me for feel'." },
            { text: "I like iced tea in the summer because it's very refreshing.", score: 75, feedback: "Good use of 'refreshing'." },
            { text: "I don't like the taste of coffee.", score: 50, feedback: "Simple." }
        ] 
    },
    { 
        q: "50. Is it a good idea to travel alone?", 
        options: [
            { text: "It's good for independence, but traveling with friends is safer and more fun. ", score: 100, feedback: "Uses 'independence' and interaction." },
            { text: "No, I think travel alone is more better because you can doing what you want every time and you are not have to wait for other people.", score: 0, feedback: "TRAP! 'more better' and 'can doing'." },
            { text: "Traveling with friends is better because you can share the memories.", score: 75, feedback: "Good use of 'share memories'." },
            { text: "I always travel with my parents.", score: 50, feedback: "Simple fact." }
        ] 
    }
];
