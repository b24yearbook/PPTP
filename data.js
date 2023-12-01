var raw_questions = 
`[Have you…]
Gotten someone assassinated during Fair
Violated the school's dress code and got an NCR for it
Worn the wrong uniform
Not yet memorized the scholar's pledge
Intentionally missed a flagcem
Vandalized an armchair
Petted the cats
Loitered somewhere during class hours
Snuck out from official school events
Skipped class by going to the clinic
Lost a book from the library
Used a fake excuse to be absent/for a late requirement
Gone to school with COVID symptoms (cough, colds, sore throat, etc.)
Forged parents' signature for consent forms
Used another classmates' code for CS
Lost a phone/wallet and found it at the DO
Lost an aquaflask
Gotten jailed during Fair
Had a crush on an upper year
Gone overdue on a borrowed book from the library
Had an experience wherein at least 3 friends were sick at the same time
Sworn in front of a teacher
Loitered in a vacant classroom
Gotten shushed by someone in the library for being too noisy
Spilled something anywhere in Pisay
Broken a piece of glassware during a lab activity
Submitted a requirement less than 5 minutes before the deadline
Spilled tea about a certain person and got caught by that person
Charged your devices in the classroom (yes, this is not allowed)
Missed a class picture
Gotten victimized by the marriage booth
Gotten assassinated during fair
Worked collaboratively on an individual assessment
Copied your classmate's homework
Scored over 10% on plagiarism checks
Damaged school property and gotten away with it
Had a mental breakdown in Pisay
Had food delivered on a non-Wednesday
Paid someone to do your requirements
Bebe time > friends
Skipped ASA or Homeroom due to non-valid reasons
Had little to no contribution to a group
Gone to a specific area just to see your crush
Submitted a requirement 1 minute after the deadline
Neglected to return a Colai's/Imas plate
Sat at a table with other bags already on it
Forgotten your swim attire for P.E.
Gotten gadgets or any personal item confiscated
Been scolded by Ma'am Hati
Been scolded because of PDA
Gone to the DO for more than just an NCR
Registered for a club and never attended a single meeting
Violated haircut policies for more than a month
Snuck out of the campus during class hours
Directly edited a requirement template instead of making a copy
Browsed social media during class, not caught by the teacher
Played video games during class, not caught by the teacher
Listened to music during class, not caught by the teacher
Not actually sung in Paskorus
Not properly done a P.E. warmup exercise
Forgotten a dance move in a project and started just following the person in front of you
Used ChatGPT to partially write a requirement
Only started practicing one day before a class performance
Had parents make props for a class performance
Fallen into a dirty body of water on campus
Stayed on-campus past 8PM
Deleted someone else's requirement
Changed the background on the school library computers
Ranted about the state of Philippine politics in a non-Social Science essay
Gotten feces on your shoes on campus
Forgotten your go-bag for Health and borrowed someone else's
Had a crush on a teacher
Eaten the same cafeteria meal 3 days in a row
Left an item you needed in your locker
Hidden a requirement grade from your parents
Taken someone else's pen/pencil
Confessed to your crush IRL
Rejected/gotten rejected during a promposal
Not gotten an admission slip signed
Used Filipino in a strictly English requirement/recitation or vice versa
Submitted the wrong file for a requirement
Said you would go to the bathroom to actually go somewhere else
Done an all-nighter
Had less than 6 hours of sleep for 5 days straight
Forgotten to review for a major exam
Completely missed a requirement by not knowing it existed
Spent your stipend on... non-essential goods
Sneakily not paid when you bought from a concessionaire
Crammed an entire major requirement one hour before the deadline
"Kobe'd" a plastic bottle to a bin unsuccessfully
Had a crush on your friend's crush
Triple messaged someone after they'd not replied yet
Sent the wrong message/email to a teacher
Used notes/references during online exams
Sent an email saying "attached to this email" while actually forgetting the attachment
Had your phone ring in class
Forgotten to bring sci cal for a quiz or major exam
Seenzoned an important message from a teacher
Crammed college app requirements
Forgotten to press the submit button in KHub or Google Classroom for a requirement`;

var questions = raw_questions.split("\n");
questions.shift();

var raw_results = 
`{91-100} result1: You are a very model student. You probably got/get an uno in VALEd and are a teacher's pet; taga-lista ng noisy sa classroom and naglilinis kahit hindi cleaner of the day. You're probably one of the people who turned on their mics during online classes and reminded the teacher that there's homework due.
{81-90} result2: You're a good student, but wouldn't think twice about skipping the flag ceremony altogether just so you can avoid getting an NCR. Sinisita ng mga teachers and upper years (if lower year ka) kasi tumatakbo ka sa hallways or maingay ka. You probably don't have a lot of NCRs; if you do, it's probably because you're messy in the dorm, are violating the dress code, or always arrive late.
{71-80} result3: You're a troublemaker, but for some reason, no one really catches you. You probably are the type of person who submits requirements 6 hours late with the excuse of slow wifi or health problems. You also probably excuse yourself to go to the bathroom or clinic but in reality are just cutting classes. You probably have also copied someone else's code for CS and wears different-colored socks just because you can get away with it.
{61-70} result4: A walking red flag, you are hanging by a thread. You're the type that wears a zipped-up jacket to hide the fact that you're not wearing your ID - or that you're wearing an entirely different uniform underneath. You probably have used ChatGPT for your essays and have had a similarity index of above 20% in res. You probably have also never fully read the English/Fil readings and only used online summaries.
{0-60} result5: It's amazing how you haven't been kicked out yet. It's either you're really good at not getting caught, or you simply don't have enough Level 2's to warrant expulsion (JK). You probably collect NCRs like they're collectible trading cards and claim items from the DO that aren't yours. You probably DGAF about the rules and break them just to spite the admin. Linandi mo na siguro crush ng kaibigan mo tapos naging kayo tapos nagbreak rin LOL!`;

//result[n][0] = result string, [1] = [number 1, number 2]
function newElement(element) {
    newElem = {title: "placeholderTitle", description: "placeholder description", range: [-1, -1]};

    newElem.title = element.split("} ")[1].split(":")[0];
    newElem.description = element.split("} ")[1].split(":")[1];
    newElem.range = element.split("}")[0].split("{")[1].split("-");
    /* // For single number ranges, unnecessary for our purposes
    x = newElem.range.pop();

    x = x.split(")")[0];
    if (newElem.range.length == 0) {
        newElem.range = [parseInt(x), parseInt(x)];
    }
    else {*/
        newElem.range = [parseInt(newElem.range[0]), parseInt(newElem.range[1])];
    //}
    return newElem;
}

var results = raw_results.split("\n");
results = results.map(newElement);

grades = 
[["1.00", 96], 
["1.25", 90], 
["1.50", 84], 
["1.75", 78], 
["2.00", 72], 
["2.25", 66], 
["2.50", 60], 
["2.75", 55],
["3.00", 50], 
["4.00", 40], 
["5.00", 0]]
