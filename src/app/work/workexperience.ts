export interface WorkExperience {
  title: string;
  company: string;
  date: string;
  description: string[];
}

export const experiences: WorkExperience[] = [
  {
    title: "master of science: computer science",
    company: "depaul university",
    date: "2024 - present",
    description: [
      "after many years of wanting to break into tech and fear of leaving the industry, i've finally taken a chance on hybridly switching my career. i mean, number one, i really didn't enjoy that career in sales.",
      "while i don't necessarily want to leave trading, coding after work made me realize that my passion lies here. to fool around a bit, i've created acegpt, a next.js website utilizing chatgpt api to generate college-level tests based on varying difficulty and content given the user's study guide and practice test materials.",
      "currently assisting in creating models for locomotion devices at the ral lab under professor muhammad umer huzaifa. i spend long nights immersing myself in new ai applications, especially those geared towards network and energy use cases, recognizing the nation's growing need for energy efficiency for mass ai and app development adoption.",
    ],
  },
  {
    title: "saas development specialist",
    company: "ycharts",
    date: "june 2023 - november 2023",
    description: [
      "this role was just a teaser. after 9 years in the financial markets, i felt the need for a change and, in a moment of spontaneity, decided to try out sales. it never hurts to get better at public speaking and engaging with people, especially in selling products.",
      "although the long, grueling phone calls weren't my specialty, this role served as a transitional phase after a successful career in finance. andrew (dude's a great man) taught me a great deal about compassion even when capitalism is on the line. he's someone i highly recommend. he significantly contributed to my growth in this field in a short amount of time and despite this valuable experience, my passion for building in the digital realm eventually led me to depaul. it's local and close.",
      "i learned a lot though. leveraged hubspot's advanced features to restructure the client database, improving engagement precision and data integrity. achieved an outstanding 50% email response rate through data-driven analysis and persuasive communication. identified over 5,000 high-potential prospects in the wealth management sector within a short time, while maintaining a 15% connect rate. utilized data analytics to align specialized solutions with specific client needs.",
    ],
  },
  {
    title: "founder / coo",
    company: "efo edge, llc",
    date: "may 2020 - june 2023",
    description: [
      "people really struggled, and i had already built a twitter following right after graduation in 2018. since i was trading independently, i thought, why not post free trades for people to see and grow my reputation. under the handle ironmanoptions (yes, i know, it's quite a name, but the marvel hype was real and who doesn't love tony stark), i experienced a wild ride.",
      "i grew thousands of followers and eventually converted them into a group chat with about 2000 members, co-managed with a partner. eventually, two group chats merged, reaching over 5000 members, right as the pandemic hit. within 2 weeks, my partner, three team members, and i went from scratch and delivered a service that astonished us.",
      "we had over 200 members within the first 2-3 weeks, and the rate just grew as our clients reaped the benefits of the bear market. over time, numerous members became official moderators, fostering a great community across fintwit and discord. despite never meeting my co-partner in person, we managed to create a six-figure business annually. it's the new age of business!",
      "overall i led strategic vision and product development, resulting in a 55% increase in new member leads and organic growth of 20,000+ twitter followers. developed a python-driven backend for the efo edge website, integrating apis for efficient member management and data analysis. implemented data-driven decision-making processes by extracting and analyzing backend analytics, optimizing user experiences and informing strategic initiatives. built and maintained a thriving community of 750+ organic members with a 45% retention rate.",
    ],
  },
  {
    title: "leave of absence",
    company: "",
    date: "january 2020",
    description: [
      "i took some time off due to a motorcycle injury on my left leg and calcification on my left shoulder. those were some of the worst times of my life, and i genuinely empathize with people suffering from chronic pain.",
      "after enduring serious pain for over 3 months, i decided to go straight to korea for treatment, as the us medical system takes forever with scheduling. it's no joke—people may have died due to the waiting time in our system. medical devices are outdated, and mri scans only available on mondays? what the f?",
      "anyway, i received electro shockwave therapy treatment on my shoulder for about a month straight thanks to my uncle and was eventually able to get everything diagnosed and fixed within a month. and guess what. the flight and fixup was still cheaper than america...",
      "i got home on january 28, 2020, just a few days before the trump travel ban. people thought i was crazy when i started heavily shorting the bullish markets. sometimes, you just have to see it to believe it.",
    ],
  },
  {
    title: "equity derivatives trader",
    company: "self-employed",
    date: "june 2018 - may 2020",
    description: [
      "i decided to take a break from the corporate world as i already had a profitable strategy in place. times were tough due to disagreements on the direction of the fund we were running, but it was a risk i was willing to take when i decided to leave. for 2 years, i grinded like no other in my private office, foregoing an apartment, and managed to work day and night, even on weekends. having the freedom to be self-employed was a great motivator, pushing me to work tirelessly and achieve my goals.",
      "and thank god it worked. was able to afford everything i wanted and finally got to marry the girl of my dreams at 25 years old. young and grateful.",
      "i started to learn some python so i developed some web scraping and etl processes, creating a comprehensive financial metrics database from 10-q and 10-k reports. helped me achieve a 69%+ year-over-year roi and i'm being fair. billion dollar funds doing 30% is insane. not for smaller accounts if you put in the work.",
    ],
  },
  {
    title: "equity researcher/trader",
    company: "armitage capital",
    date: "may 2017 - april 2018",
    description: [
      "i started this fund with a group of friends from northwestern. we had the privilege of working with some of the brightest minds during our time there, and fortunately, we met great people who delivered alpha at the time.",
      "quickly promoted to lead biotech investments, i achieved a 65% success rate in fda phase approval analysis and made smart moves during apple’s share buyback program.",
      "my focus was conducting top-down fundamental research using bloomberg terminal to identify mispriced assets and derivatives.",
      "most of my time was analyzing institutional inflow/outflow, trend analysis, and risk utilizing tpo and dom strats. took first steps into data and learned to utilize sql financial databases.",
    ],
  },
  {
    title: "risk management analyst",
    company: "cigna global",
    date: "june 2016 - august 2016",
    description: [
      "my first time working abroad was a truly exciting experience. i collaborated with korea’s three biggest tech companies on a project that integrated iot wearable devices into life insurance contracts. i analyzed trends across 75 types of habits and routines of the south korean population to create models assessing premium structuring.",
      "had the privilege of later working next to the ceo as i simplified his agenda and phoned in international conferences by providing english to korean translation services. this was perhaps my first step into the big world of business.",
      "lots and lots of food thanks to the company. i appreciate you guys - rm team.",
    ],
  },
  {
    title: "team manager",
    company: "venu",
    date: "february 2016 - june 2016",
    description: [
      "starting venu with a group of friends was an exhilarating journey. the class was about running a real startup, so we decided to go all in and create a startup.",
      "we developed a platform that engaged over 70 venues in the chicago metropolitan area, delighting customers by creating opportunities to list, discover, and book unique venues that met their thematic and financial needs. leading a team of 8 web developers, we created a user-friendly website that acted as an ‘airbnb’ for venues for northwestern.",
      "received fantastic feedback from thousands of students, organizing events ranging from formals and sorority/fraternity parties to mixers and gatherings but not to mention that we had a ton of fun as well ;)",
    ],
  },
  {
    title: "research assistant",
    company: "kellogg school of management",
    date: "2015 - 2016",
    description: [
      "cooperated with prof. maryam kouchaki in over 6 behavioral economic studies between multiple industries and corporations on corporate ethical behavior.",
      "worked overtime first year into college... :(",
    ],
  },
  {
    title: "undergraduate",
    company: "northwestern university - weinberg college of arts and sciences",
    date: "2014 - 2018",
    description: ["graduated with a degree in philosophy - logics from weinberg. go cats."],
  },
  {
    title: "from cradle to pre-college",
    company: "chicago",
    date: "1995 - 2014",
    description: [
      "fun fact, a fortune teller preplanned my birthday. south koreans have a way of going about things. 4:30pm sunday on a full moon for good luck",
    ],
  },
];
