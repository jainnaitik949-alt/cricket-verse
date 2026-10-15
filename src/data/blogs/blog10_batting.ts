import { BlogArticle } from '../../types';

export const blog10Batting: BlogArticle = {
  id: 'blog-10',
  slug: 'batting-techniques',
  title: 'How to Become a Better Batter — Technique, Footwork, and Shot Selection',
  subtitle: 'A coach’s masterclass on grip, stance, decisive footwork, timing, and mastering match awareness',
  excerpt: 'A practical, structured guide for aspiring batters: from choosing the right bat pick-up and mastering the V-grip to playing the forward defense, commanding the pull shot, and executing a weekly training routine.',
  category: 'Cricket Training and Skills',
  tags: ['Batting Tips', 'Cricket Coaching', 'Footwork', 'Cover Drive', 'Batting Drills', 'Shot Selection'],
  author: {
    name: 'Coach Rajesh Varma',
    role: 'Former First-Class Batter & High-Performance Coach',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=75',
  },
  publishedDate: '2025-03-15',
  lastVerifiedDate: '2025-11-20',
  readTimeMinutes: 10,
  coverImage: 'https://images.unsplash.com/photo-1531415074868-036b107e7752?auto=format&fit=crop&w=800&q=75',
  coverImageAlt: 'Cricket batter in full concentration waiting for bowler delivery',
  coverImageCaption: 'Foundations of batting: Balance, still head position, and decisive footwork separate good players from great ones.',
  introduction: 'Batting in cricket is often described as the supreme test of hand-eye coordination, balance, and spatial judgment. Facing a bowler delivering a hard leather sphere at 130 to 150 km/h leaves a batter with less than 0.4 seconds to judge line, length, bounce, and movement before deciding on and executing a stroke. Success is not achieved through desperate swings or raw muscle, but through repeatable biomechanical fundamentals and mental composure.',
  sections: [
    {
      id: 'how-to-choose-bat',
      title: 'How Do You Choose the Right Cricket Bat Weight, Balance, and Sweet Spot?',
      content: 'Choose a bat based on balance and pick-up feel rather than dead weight, ensuring you can hold it horizontally with one hand without wrist strain.\n\nA common mistake among young cricketers is selecting a bat that is too heavy, believing heavier wood yields bigger boundaries. In reality, "pick-up" and balance are far more critical than dead weight on a scale.\n\n• Bat Size: Junior players must use age-appropriate sizes (Sizes 1–6, Harrow) to avoid developing poor wrist habits. Adults generally use Short Handle (SH).\n• Sweet Spot Profile: Players who bat primarily on bouncy pitches or love front-foot drives should choose a mid-to-high sweet spot. Those playing on lower, slower subcontinental pitches often benefit from a lower sweet spot.\n• Pick-up Test: Hold the bat horizontally with only your top hand for 10 seconds. If your wrist shakes or collapses, the bat is too heavy for you.',
    },
    {
      id: 'what-are-grip-and-stance-fundamentals',
      title: 'What Are the Fundamentals of a Correct V-Grip and Balanced Batting Stance?',
      content: 'A proper grip aligns the "V" between thumb and forefinger down the blade spine, paired with shoulder-width feet and level horizontal eyes.\n\nEverything in batting originates from how you hold the willow and stand at the crease:\n\n• The "V" Grip: Form a "V" with the thumb and forefinger of both hands. For a right-hander, the "V" of the top (left) hand should run down the back ridge or outside edge of the bat handle; the "V" of the bottom (right) hand runs down between the spine and the outside edge. The top hand directs the blade and provides control, while the bottom hand provides guidance without squeezing tightly.\n\n• The Stance: Feet should be shoulder-width apart, parallel to the crease line, with knees slightly flexed. Distribute your weight 50/50 across the balls of both feet. Your head must remain level, with both eyes horizontal and focused on the bowler’s release hand.',
    },
    {
      id: 'how-does-head-position-control-footwork',
      title: 'How Does Head Position Dictate Decisive Footwork Against Pace and Spin?',
      content: 'The head must lead directly toward the pitch of the ball, allowing feet to commit decisively forward or back without hesitating in between.\n\nThe golden law of cricket coaching is simple: "Where the head goes, the body and bat will follow." If your head falls over toward the off side, your front pad will plant across your stumps, leaving you vulnerable to LBW and bowled dismissals.\n\n• Against Pace: Move either decisively forward onto the front foot (driving into full-length balls) or decisively back and across onto the back foot (cutting or pulling short-pitched balls). Avoid getting caught in "no-man’s land" with your weight stuck halfway.\n• Against Spin: Read the flight and revs of the ball in the air. Either commit fully forward to smother the spin before it grips the pitch, or step deep into the crease to play off the back foot with soft hands.',
    },
    {
      id: 'how-do-you-master-core-strokes',
      title: 'How Do You Master the Forward Defense, Cover Drive, Cut, and Pull Shot?',
      content: 'Mastery requires presenting a vertical straight bat for the forward defense and drive, and rotating horizontally with rolled wrists on cuts and pulls.\n\nEvery accomplished batter builds their repertoire around four foundational shots:\n\n1. The Forward Defense: The bedrock of survival. Step forward with a bent front knee, head over the ball, and present a straight vertical bat with the top hand dominant, letting the ball drop dead at your feet.\n2. The Cover Drive: Transfer weight onto the front foot, lean your head toward the pitch of a full delivery outside off-stump, and stroke smoothly through the covers with a high elbow.\n3. The Square Cut: For short, wide deliveries outside off-stump. Rock back onto the back foot, extend the arms horizontally, and snap the wrists down to roll the ball along the grass.\n4. The Pull Shot: For short deliveries on middle-and-leg stump. Transfer weight to the back foot, swivel on the front heel, and strike the ball in front of your eyes with horizontal bat rotation, keeping the stroke grounded.',
    },
    {
      id: 'what-is-recommended-weekly-batting-plan',
      title: 'What Is a Recommended Weekly Practice Schedule for Developing Batters?',
      content: 'A structured 5-day training schedule balances defensive drills, front-foot drives, short-ball throwdowns, and match simulation nets:\n',
      table: {
        caption: 'Sample 5-Day Batter Development Plan',
        headers: ['Day', 'Focus Area', 'Recommended Drills', 'Target Objective'],
        rows: [
          ['Monday', 'Defense & Head Stillness', 'Stationary drop-ball drills + shadow batting (100 reps)', 'Muscle memory for high elbow and still head'],
          ['Tuesday', 'Front-Foot Driving', 'Underarm throwdowns through narrow cone gates', 'Precision in placement through covers and mid-off'],
          ['Wednesday', 'Rest & Core Conditioning', 'Core stability, sprint intervals, agility ladder', 'Rotational core power and foot speed'],
          ['Thursday', 'Back-Foot Play (Cut & Pull)', 'Sidearm throwdowns from 16 yards with tennis/incrediball', 'Quick weight transfer and handling bounce'],
          ['Friday', 'Match Simulation Nets', 'Open nets facing pace and spin with field placements', 'Shot selection and strike rotation under pressure'],
        ],
      },
    },
    {
      id: 'what-are-common-batting-mistakes',
      title: 'What Are Common Batting Technical Flaws and Essential Safety Equipment?',
      content: 'Common flaws include tight bottom-hand gripping and playing away from the body; certified helmets, pads, and boxes are mandatory safety gear.\n\nBe vigilant against these habitual flaws:\n\n• Bottom-Hand Domination: Gripping too tightly with the bottom hand closes the bat face prematurely, causing leading edges to point and cover.\n• Playing Away from the Body: Pushing your hands far outside your eyeline invites outside edges to the slips and wicketkeeper.\n• Blind Slogging: Attempting to muscle the ball with sheer arm force rather than relying on body weight transfer and sweet-spot timing.\n\nSafety First: Always wear an ICC-approved helmet with a properly adjusted titanium or steel grill, high-density foam batting pads, thigh guards, an abdominal box, and padded leather batting gloves. Never face leather-ball bowling without full protective equipment.',
    },
  ],
  keyTakeaways: [
    'Choose a bat based on balance and pick-up rather than sheer blade weight.',
    'Maintain a relaxed V-grip with a dominant top hand and flexible bottom hand.',
    'Keep your head completely still with both eyes horizontal throughout the bowler’s delivery stride.',
    'Decisive footwork means committing fully forward or fully back—never getting trapped in between.',
    'Timing and body weight transfer generate more boundary power than arm-muscle swinging.',
    'Always prioritize protective equipment: certified helmet, pads, box, and gloves.',
  ],
  conclusion: 'Becoming a dependable batter is a journey of patience and disciplined repetition. By mastering defensive security, refining your head position, and respecting match conditions, you will build the technical bedrock required to dominate bowling attacks with authority and poise.',
  sources: [
    { title: 'MCC Cricket Coaching Manual — Technical Foundations of Batting', url: 'https://www.lords.org/mcc' },
    { title: 'Cricket Australia High Performance Coaching Guidelines', url: 'https://www.cricketaustralia.com.au' },
  ],
  relatedBlogSlugs: ['cricket-rules-guide', 'fast-vs-spin-bowling', 'sachin-tendulkar'],
};
