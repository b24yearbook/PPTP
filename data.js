var raw_questions = 
`[Have you…]
Gotten someone assassinated during Fair
Violated the school's dress code and got an NCR for it
Wore the wrong uniform
Not yet memorized the scholar's pledge
Intentionally missed a flagcem
Vandalized an armchair
Petted the cats
Loitered somewhere during class hours
Snuck out from official school events
Skipped class by going to the clinic
Lost a book from the library
Used a fake excuse to be absent
Used a fake excuse for a late submission
Forged parents’ signature for consent forms
Used another classmates’ code for CS
Lost a phone/wallet and found it at the DO
Lost an aquaflask
Got jailed during Fair
Had a crush on an upper year
Went overdue for a borrowed book from the library
Had an experience wherein at least 3 friends were sick at the same time
Swore in front of a teacher
Loitered in a vacant classroom
Got shushed by someone in the library for being too noisy
Spilled something anywhere in Pisay
Broke a piece of glassware during a lab activity
Submitted a requirement less than 5 minutes before the deadline
Spilled tea about a certain person and got caught by that person
Charged your devices in the classroom (yes, this is not allowed)
Missed a class picture
Got victimized by the marriage booth
Got assassinated during fair
Worked collaboratively on an individual assessment
Copied your classmate's homework
Scored over 10% on plagiarism checks
Damaged school property and got away with it
Had a mental breakdown in Pisay
Had food delivered on a non-Wednesday
Paid someone to do your requirements
Bebe time > friends
Had a crush on a teacher
Had little to no contribution to a group
Submitted a requirement on KHub 1 minute before the deadline
Submitted a requirement 1 minute after the deadline
Neglected to return a Colai's/Imas plate
Sat at a table with other bags already on it
Forgotten swim attire for P.E.
Got gadgets or any personal item confiscated
Got scolded by Ma'am Hati
Got scolded by at least 5 other people for a group incident
Gone to the DO for more than just an NCR
Registered for a club, never attending a single meeting
Violated haircut policies for more than a month
Snuck out of the campus during class hours
Directly edited a requirement template instead of making a copy
Browsed social media during class, not caught by the teacher
Played video games during class, not caught by the teacher
Listened to music during class, not caught by the teacher
Didn't actually sing in Paskorus
Didn't properly do a P.E. warmup exercise
Forgot a dance move in a project and just started following the person in front of you
Used ChatGPT to partially write a requirement
Only practiced 1 day before a class performance
Had parents make props for a class performance
Fell into a dirty body of water on campus
Stayed on-campus past 8PM
Deleted someone else's requirement
Changed the background on the school library computers
Ranted about the state of Philippine politics in a non-Social Science essay
Gotten feces on your shoes on campus
Forgotten your go-bag for Health and borrowed someone else’s
Had a crush on a teacher
Eaten the same cafeteria meal 3 days in a row
Left an item you needed in your locker
Hid a requirement grade from your parents
Taken someone else's pen/pencil
Borrowed something worth >P100 without returning
Accidentally stepped on a cat
Purposefully passed by a teacher you know without greeting them
Used Filipino in a strictly English requirement/recitation or vice versa
Submitted the wrong file for a requirement
Said you would go to the bathroom but you actually went somewhere else
Done an all-nighter
Had less than 6 hours of sleep for 5 days straight
Forgotten to review for a major exam
Completely missed a requirement by not knowing it existed
Spent your stipend on… non-essential goods
Sneakily did not pay when you bought from a concessionaire
Crammed a major requirement entirely one hour before the deadline
“Kobe'd” a plastic bottle to a bin unsuccessfully
Had a crush on your friend’s crush
Triple messaged someone after they’ve not replied yet
Sent the wrong message/email to a teacher
Used notes/references during online exams
Sent an email saying “attached to this email” but actually forgot the attachment
Had their phone ring in class
Forgotten to bring sci cal for a quiz or major exam
Seenzoned an important message from a teacher
Crammed college app requirements
Forgot to press the submit button in KHub or Google Classroom for a requirement`;

var questions = raw_questions.split("\n");
questions.shift();

var raw_results = 
`result1: wowowowwowo (100)
result2: ehhehehehehe (90-99)
result3: isjakfjsdkfjwel (80-89)
result4: hihiihihihi (60-79)
result5: HAHAHAHAHAHAHH (40-59)
result6: ?????????? (20-39)
result7: :OOOOOOOO (10-19)
result8: mindblown (1-9)
result9: . (0)`;

//result[n][0] = result string, [1] = [number 1, number 2]
function newElement(element) {
    newElem = {title: "placeholderTitle", description: "placeholder description", range: [-1, -1]};

    newElem.title = element.split("(")[0].split(":")[0];
    newElem.description = element.split("(")[0].split(":")[1];
    newElem.range = element.split("(")[1].split("-");

    x = newElem.range.pop();

    x = x.split(")")[0];
    if (newElem.range.length == 0) {newElem.range = [parseInt(x), parseInt(x)];}
    else {newElem.range = [parseInt(newElem.range[0]), parseInt(x)];}
    return newElem;
}

var results = raw_results.split("\n");
results = results.map(newElement);
