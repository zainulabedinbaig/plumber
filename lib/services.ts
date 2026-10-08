import type { ImageKey } from "@/lib/images";

export type ServiceSlug =
  | "emergency-plumbing" | "burst-pipes" | "leak-detection"
  | "blocked-drains" | "boiler-heating" | "bathroom-plumbing";

export type Service = {
  slug: ServiceSlug;
  name: string;
  /** Short label for nav and tags */
  short: string;
  group: "Emergency" | "Heating" | "Around the home";
  blurb: string;
  image: ImageKey | null;
  /** Controls hero and symptom presentation so pages don't share one template */
  variant: "urgent" | "editorial" | "technical";
  metaTitle: string;
  metaDescription: string;
  h1: [string, string];
  lead: string;
  intro: { heading: string; body: string[] };
  helps: { title: string; text: string }[];
  symptomsHeading: string;
  symptoms: string[];
  doNow?: { heading: string; steps: { title: string; text: string }[]; warning?: string };
  onCall: { title: string; text: string }[];
  whyPro: { heading: string; body: string[] };
  processHeading: string;
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  related: ServiceSlug[];
};

export const SERVICES: Service[] = [
  {
    slug: "emergency-plumbing",
    name: "Emergency Plumbing",
    short: "Emergency",
    group: "Emergency",
    blurb: "Water you can't stop, a toilet that won't stop overflowing, or no water at all. Call, and we'll tell you what to do while help is on the way.",
    image: null,
    variant: "urgent",
    metaTitle: "Emergency Plumber in Manchester",
    metaDescription: "Burst pipe, flooding or an overflowing toilet in Manchester or Greater Manchester? Call a local emergency plumber and find out what to do right now.",
    h1: ["Water where", "it shouldn’t be?"],
    lead: "Call now. We’ll ask a few quick questions, tell you what to shut off, and get a plumber to you as soon as we can.",
    intro: {
      heading: "What counts as a plumbing emergency",
      body: [
        "If water is escaping and you can’t stop it, that’s an emergency. So is a toilet that’s overflowing, sewage coming back up a drain, or no water at all in a home with young children, elderly or vulnerable people.",
        "A dripping tap, a slow drain or a radiator that needs bleeding can wait for a booked appointment. If you’re not sure which side of the line you’re on, call and ask. It costs nothing to find out.",
      ],
    },
    helps: [
      { title: "Burst and leaking pipes", text: "Isolating the water, stopping the leak and repairing or replacing the damaged section." },
      { title: "Flooding from appliances", text: "Washing machine and dishwasher hoses, and failed under-sink connections." },
      { title: "Overflowing toilets", text: "Clearing the blockage and finding out why it happened." },
      { title: "Sewage backing up", text: "Identifying whether the problem is in your pipes or the shared drain." },
      { title: "No water", text: "Working out whether it’s a stopcock, a frozen pipe or a supply fault." },
      { title: "Failed heating and hot water", text: "Leaking cylinders, tanks and heating pipework. Gas faults are covered on our boiler page." },
    ],
    symptomsHeading: "Signs it can’t wait",
    symptoms: [
      "Water running or dripping through a ceiling",
      "A pipe visibly spraying or pouring water",
      "A toilet overflowing, or sewage rising in a bath or shower",
      "Water coming up through the floor",
      "No water at any tap",
      "A loft tank overflowing",
    ],
    doNow: {
      heading: "Do these three things first",
      steps: [
        { title: "Turn off the stopcock", text: "Usually under the kitchen sink, or where the pipe enters the house. Turn it clockwise until it stops." },
        { title: "Keep away from electrics", text: "If water is near sockets, light fittings or the fuse box, don’t touch them. Switch off at the consumer unit only if you can reach it dry." },
        { title: "Open the cold taps", text: "This drains the pipes and takes pressure off the leak. Turn off the heating and immersion heater too." },
      ],
      warning: "Smell gas? Leave the property, open doors and windows, and call the National Gas Emergency Service on 0800 111 999. Don’t switch anything on or off.",
    },
    onCall: [
      { title: "You describe what’s happening", text: "Where the water is, how much, and whether you’ve found the stopcock." },
      { title: "We tell you what to do next", text: "Plain instructions to limit damage while we get to you." },
      { title: "We confirm availability and arrival", text: "[CONFIRM TYPICAL EMERGENCY RESPONSE TIME AND HOURS]" },
      { title: "We fix it, then explain it", text: "The cause, what we did, and anything you should watch for afterwards." },
    ],
    whyPro: {
      heading: "Why not wait until Monday?",
      body: [
        "Water damage spreads. A leak that’s a mop-and-bucket job at 9pm can be a ceiling down by morning, and plaster, flooring and electrics are far more expensive than a call-out.",
        "A fast, correct repair also gives you something to show your insurer. Photograph the damage before you clear up, and keep receipts.",
      ],
    },
    processHeading: "From your call to a fixed problem",
    process: [
      { title: "Make it safe", text: "Isolate the water and, where needed, the electrics. Nothing else matters until this is done." },
      { title: "Find the cause", text: "We trace where the water is coming from, not just where it’s showing up." },
      { title: "Fix or make safe", text: "A permanent repair where we can do it there and then, a safe temporary one where parts are needed." },
      { title: "Test and explain", text: "Pressure-test the repair, check for further damage, and tell you what happens next." },
    ],
    faqs: [
      { q: "How quickly can you get to me?", a: "It depends on where you are, the time and what else is on. We’ll give you an honest arrival estimate on the phone. [CONFIRM TYPICAL RESPONSE TIME]" },
      { q: "Do you work nights and weekends?", a: "[CONFIRM EMERGENCY HOURS]" },
      { q: "Will I be charged more for an emergency call-out?", a: "[CONFIRM EMERGENCY CHARGING POLICY]. Whatever it is, we’ll tell you before you agree to anything." },
      { q: "What if I can’t find my stopcock?", a: "Tell us on the phone. We’ll talk you through where to look. Common places are under the kitchen sink, in a downstairs cupboard, under the stairs or in the cellar." },
      { q: "Should I call my insurer?", a: "If water has damaged your home, yes. Many home policies cover escape of water, but terms vary. Take photos before you clear anything up and keep your receipts." },
    ],
    related: ["burst-pipes", "blocked-drains", "leak-detection"],
  },

  {
    slug: "burst-pipes",
    name: "Burst Pipes",
    short: "Burst pipes",
    group: "Emergency",
    blurb: "From frozen pipes in January to a joint that gives way on a quiet Tuesday: stopped, repaired and tested.",
    image: "frozen",
    variant: "editorial",
    metaTitle: "Burst Pipe Repair in Manchester",
    metaDescription: "Burst or frozen pipe in Manchester? What to do in the first ten minutes, and how a local plumber stops, repairs and tests the damage.",
    h1: ["A burst pipe,", "stopped properly."],
    lead: "Isolate the water, limit the damage, then a repair that lasts. Here’s what to do now, and what we’ll do when we get there.",
    intro: {
      heading: "Why pipes burst",
      body: [
        "Cold weather is the classic cause: water expands as it freezes and splits the pipe, but the leak often only shows when it thaws. Older pipework corrodes from the inside, joints fail with age, and a nail or screw through a pipe can lie unnoticed for years.",
        "Whatever the cause, the first job is the same: get the water off, then work out how far it has travelled.",
      ],
    },
    helps: [
      { title: "Frozen and split pipes", text: "Thawing safely where possible, and replacing the split section." },
      { title: "Failed joints and fittings", text: "Compression, push-fit and soldered joints that have let go." },
      { title: "Corroded pipework", text: "Pinhole leaks in older copper, steel or lead-adjacent runs." },
      { title: "Pipes damaged by building work", text: "Nails, screws and drill strikes behind walls and under floors." },
      { title: "Loft and tank pipework", text: "Overflows, split tank connections and frozen loft pipes." },
    ],
    symptomsHeading: "How a burst pipe shows itself",
    symptoms: [
      "Damp patches or brown stains spreading on a ceiling or wall",
      "A sudden drop in water pressure",
      "The sound of running water when everything is off",
      "A water meter that keeps moving with all taps closed",
      "Bubbling paint or wallpaper, or a warped floor",
      "Water that’s discoloured when it does come out",
    ],
    doNow: {
      heading: "In the first ten minutes",
      steps: [
        { title: "Stop the water", text: "Turn off the stopcock, then open the cold taps to drain the system." },
        { title: "Switch off heating and the immersion heater", text: "Particularly if the leak is from a tank or cylinder." },
        { title: "Contain it", text: "Buckets under drips, towels at the edges, and move belongings out of the way." },
        { title: "Photograph the damage", text: "Before you clear up. Your insurer will want to see it." },
      ],
      warning: "Never use a naked flame to thaw a frozen pipe. A hairdryer on a low setting, working from the tap end back, is safer. Stop if you can see water.",
    },
    onCall: [
      { title: "Tell us what you can see", text: "Where it started, what’s wet, and whether the stopcock is off." },
      { title: "We talk you through making it safe", text: "Straightforward steps while we’re on the way." },
      { title: "We arrange a visit", text: "[CONFIRM RESPONSE TIME]" },
    ],
    whyPro: {
      heading: "A patch isn’t always a repair",
      body: [
        "A burst section is often a sign of what’s happening along the rest of the pipe. A proper repair means cutting back to sound pipework, using the right fittings, and pressure-testing before anything is covered up again.",
        "We’ll tell you plainly if we think more of the run needs replacing, and why.",
      ],
    },
    processHeading: "How we repair a burst pipe",
    process: [
      { title: "Isolate and drain", text: "Water off at the right valve, the affected section drained." },
      { title: "Trace the damage", text: "Check how far the water has travelled, and whether anything electrical is at risk." },
      { title: "Cut out and repair", text: "Remove the damaged section and replace it with sound pipe and correct fittings." },
      { title: "Pressure-test", text: "Water back on slowly, joints checked, and the repair watched before we leave." },
    ],
    faqs: [
      { q: "Is a burst pipe covered by home insurance?", a: "Many policies cover escape of water, but terms and excesses vary. Check your policy, and keep photos and receipts for the repair." },
      { q: "Can you repair a frozen pipe before it bursts?", a: "Often, yes. If a pipe is frozen but hasn’t split, thawing it gently and insulating it can save a repair. Don’t use a naked flame." },
      { q: "How do I find my stopcock?", a: "Usually under the kitchen sink, or near where the supply enters the house. Turn it clockwise to close. Test it now, before you need it." },
      { q: "How long will the repair take?", a: "A single accessible burst can be a short job. Pipes behind plaster or under floors take longer. We’ll give you an honest estimate once we’ve seen it." },
    ],
    related: ["emergency-plumbing", "leak-detection", "bathroom-plumbing"],
  },

  {
    slug: "leak-detection",
    name: "Leak Detection",
    short: "Leak detection",
    group: "Emergency",
    blurb: "A damp patch is where water shows up, not always where it starts. We trace the source before anyone starts pulling up floors.",
    image: "leak",
    variant: "technical",
    metaTitle: "Leak Detection in Manchester",
    metaDescription: "Unexplained damp, high water bills or low boiler pressure? How to check for a hidden leak yourself, and how a Manchester plumber finds the source.",
    h1: ["Find the leak.", "Then fix it."],
    lead: "Hidden leaks cost money and cause damp long before anyone sees water. Here’s how to spot one, and how we trace it without tearing the house apart.",
    intro: {
      heading: "The water you can see is rarely where it starts",
      body: [
        "Water follows gravity and the path of least resistance. A stain on a ceiling can come from a pipe metres away, and a leak under a floor can show up as damp on a wall in the next room.",
        "That’s why guessing costs time and plaster. Tracing the source first means opening up one spot, not five.",
      ],
    },
    helps: [
      { title: "Leaks inside walls and under floors", text: "Supply pipes, heating pipes and waste pipes that can’t be seen." },
      { title: "Leaking showers and baths", text: "Failed seals, trays and waste connections." },
      { title: "Underground supply pipe leaks", text: "Between the boundary stopcock and the house." },
      { title: "Heating system leaks", text: "Falling boiler pressure with no visible drip." },
      { title: "Leaks behind kitchen units", text: "Slow drips from taps, valves and appliance connections." },
    ],
    symptomsHeading: "Signs of a hidden leak",
    symptoms: [
      "A water bill higher than it should be",
      "Damp, mould or musty smells with no obvious cause",
      "Stained or bubbling plaster and paint",
      "Boiler pressure that keeps dropping",
      "A wet patch on the lawn or driveway above the supply pipe",
      "A hissing or trickling sound when everything is off",
    ],
    doNow: {
      heading: "Check your meter first",
      steps: [
        { title: "Turn everything off", text: "Every tap, appliance and anything else that uses water. Check nothing is filling, such as a cistern." },
        { title: "Read the meter", text: "Note the numbers, or take a photo. If you have a dial, watch for the small leak-indicator wheel." },
        { title: "Wait an hour or two, then read it again", text: "If the number has moved and nothing was running, water is going somewhere it shouldn’t." },
      ],
      warning: "No meter? Ask your water company. United Utilities supplies Greater Manchester, and can often help with checks and with leaks on their side of the boundary.",
    },
    onCall: [
      { title: "Tell us what you’ve noticed", text: "What, where, and how long. A rough timeline helps." },
      { title: "We suggest what to check", text: "The meter test, and anything else that narrows it down." },
      { title: "We arrange an inspection", text: "[CONFIRM APPOINTMENT AVAILABILITY]" },
    ],
    whyPro: {
      heading: "Who’s responsible for which pipe?",
      body: [
        "Water companies are generally responsible for the supply pipe up to your property boundary. From there to your home, it’s normally the homeowner’s. That makes it worth knowing which side a leak is on before you pay for repairs.",
        "We’ll tell you what we find and what it means, so you can speak to the right people.",
      ],
    },
    processHeading: "How we trace a hidden leak",
    process: [
      { title: "Listen to the history", text: "Where it’s damp, what’s changed, and what the meter has been doing." },
      { title: "Narrow it down", text: "Isolate sections of the system to rule parts in or out. [CONFIRM DETECTION EQUIPMENT USED]" },
      { title: "Confirm the source", text: "Before anything is opened up, so the damage to your home is as small as possible." },
      { title: "Repair and recheck", text: "Fix the leak, then check the meter again to be sure it’s gone." },
    ],
    faqs: [
      { q: "How do I know if I have a leak?", a: "The meter test above is the quickest check. Unexplained damp, high bills and dropping boiler pressure are other clues." },
      { q: "Do you need to pull up floors?", a: "Not to find a leak. We aim to confirm the source first and open up as little as possible to repair it." },
      { q: "Will my water company fix it?", a: "If the leak is on their side of the boundary, yes. If it’s on the pipe from the boundary to your home, it’s normally yours. Your water company can confirm." },
      { q: "Can a leak affect my boiler?", a: "Yes. A heating system leak causes the boiler pressure to drop, often with no visible drip. Topping up repeatedly without finding the cause isn’t a fix." },
    ],
    related: ["burst-pipes", "boiler-heating", "bathroom-plumbing"],
  },

  {
    slug: "blocked-drains",
    name: "Blocked Drains",
    short: "Blocked drains",
    group: "Around the home",
    blurb: "Slow sinks, gurgling toilets and drains that back up. Cleared, and the cause tracked down so it doesn’t come back.",
    image: "drain",
    variant: "technical",
    metaTitle: "Blocked Drains and Toilets in Manchester",
    metaDescription: "Blocked sink, toilet or drain in Manchester? Common causes, what to try first, and when to call a plumber. Local, clear advice.",
    h1: ["Blocked drain?", "Let’s clear it."],
    lead: "Blocked sinks, toilets and outside drains cleared properly, with the cause found so you’re not calling again next month.",
    intro: {
      heading: "A blockage is a symptom",
      body: [
        "Most blocked drains are a build-up of fat, hair, wipes or paper, but a drain that keeps blocking usually has something else going on: a dip in the pipe, roots, or a joint that has slipped.",
        "Clearing it is the first job. Finding out why it blocked is what saves you the second call-out.",
      ],
    },
    helps: [
      { title: "Blocked sinks and basins", text: "Kitchen sinks clogged with grease, and bathroom basins full of hair and soap." },
      { title: "Blocked toilets", text: "From a stubborn blockage to a toilet that fills slowly and gurgles." },
      { title: "Baths and showers", text: "Slow-draining waste with hair and soap scum." },
      { title: "Outside drains and gullies", text: "Leaves, silt and debris, and backed-up yard drains." },
      { title: "Recurring blockages", text: "Investigating why the same drain keeps backing up. [CONFIRM CCTV SURVEY OFFER]" },
    ],
    symptomsHeading: "What a blocked drain looks and sounds like",
    symptoms: [
      "Water draining slowly, or not at all",
      "Gurgling from pipes after the toilet is flushed",
      "Smells coming from a plughole or outside drain",
      "More than one fixture affected at the same time",
      "Water backing up in a shower when the washing machine runs",
      "Pooling water around an outside gully",
    ],
    doNow: {
      heading: "Before you call",
      steps: [
        { title: "Stop using the water", text: "Every flush or run of the tap adds to the problem." },
        { title: "Try a plunger", text: "For a sink or toilet, a few firm pushes can shift a simple blockage." },
        { title: "Skip the strong chemicals", text: "Drain cleaners can fail and then leave a plumber working with caustic water." },
      ],
      warning: "Wet wipes labelled ‘flushable’ still block pipes. Only toilet paper should go down a toilet, and fat and grease should never go down a sink.",
    },
    onCall: [
      { title: "Tell us which fixtures are affected", text: "One sink, or several? That tells us where the blockage sits." },
      { title: "We say what’s likely", text: "And whether a plunger or simple fix is worth trying first." },
      { title: "We arrange a visit", text: "[CONFIRM AVAILABILITY]" },
    ],
    whyPro: {
      heading: "Whose drain is it?",
      body: [
        "Pipes inside your property and within your boundary are normally yours. Since 2011, many shared drains and sewers outside the boundary have been the water company’s responsibility.",
        "If a blockage is outside your property, it may not be a bill for you. We’ll tell you what we find.",
      ],
    },
    processHeading: "How we clear a drain",
    process: [
      { title: "Locate the blockage", text: "Which fixtures are affected points us to where in the system it sits." },
      { title: "Clear it", text: "The simplest method that works, from rods through to jetting. [CONFIRM EQUIPMENT]" },
      { title: "Flow-test", text: "Run water through the system to check it drains properly." },
      { title: "Tell you why", text: "What caused it and what to avoid, so it doesn’t happen again." },
    ],
    faqs: [
      { q: "Can you help with blocked drains outside my house?", a: "Yes, within your boundary. If the problem is a shared or public sewer, the water company may be responsible, and we’ll say so." },
      { q: "Why does my sink keep blocking?", a: "Usually a build-up of fat or grease further down the pipe. A deeper clear, or a look inside the pipe, finds the cause." },
      { q: "My toilet won’t flush. Is that an emergency?", a: "If it’s your only toilet, or it’s overflowing, treat it as one. Stop using it and call." },
      { q: "Are drain chemicals a good idea?", a: "Rarely. They can fail on a solid blockage and make the job unpleasant and more hazardous for whoever clears it." },
    ],
    related: ["emergency-plumbing", "bathroom-plumbing", "leak-detection"],
  },

  {
    slug: "boiler-heating",
    name: "Boiler & Heating",
    short: "Boiler & heating",
    group: "Heating",
    blurb: "No heat, no hot water, cold radiators or a boiler that keeps losing pressure. Diagnosed and put right.",
    image: "radiator",
    variant: "editorial",
    metaTitle: "Boiler and Heating Repairs in Manchester",
    metaDescription: "No heating or hot water in Manchester? Boiler and radiator faults, what you can check safely yourself, and when you need a Gas Safe engineer.",
    h1: ["Heating off?", "Let’s get it back."],
    lead: "Boiler faults, cold radiators and hot water problems, diagnosed properly. Here’s what you can safely check yourself, and when to call.",
    intro: {
      heading: "Most heating faults have a simple cause",
      body: [
        "Low pressure, a stuck valve, a thermostat setting, trapped air or sludge in the system: plenty of heating problems are quick to fix once you know what you’re looking at.",
        "The rest need the right qualifications. Anyone working on a gas appliance must be on the Gas Safe Register, and you should always ask to see their ID.",
      ],
    },
    helps: [
      { title: "Boiler faults and breakdowns", text: "No heating, no hot water, error codes, pressure loss and noises." },
      { title: "Radiator problems", text: "Cold spots, leaks, bleeding, balancing and replacement." },
      { title: "Hot water cylinders", text: "Slow reheating, leaks and failed immersion heaters." },
      { title: "Thermostats and controls", text: "Programmers, room stats and thermostatic radiator valves." },
      { title: "Heating pipework", text: "Leaks and repairs on the pipes that connect it all." },
    ],
    symptomsHeading: "Common heating problems",
    symptoms: [
      "No heating or hot water",
      "Radiators warm at the bottom and cold at the top, or the reverse",
      "Boiler pressure dropping below about 1 bar when cold",
      "Banging, kettling or whistling from the boiler or pipes",
      "A boiler that locks out or shows a fault code",
      "Water on the floor around the boiler",
    ],
    doNow: {
      heading: "Safe checks before you call",
      steps: [
        { title: "Check the basics", text: "Is the boiler on, the thermostat calling for heat, the programmer set, and the gas supply on?" },
        { title: "Look at the pressure gauge", text: "Most boilers want roughly 1 to 1.5 bar when cold. If it’s well below, check your manual for the filling loop procedure." },
        { title: "Bleed cold-at-the-top radiators", text: "With the heating off and cool, use a radiator key to release trapped air until water appears." },
      ],
      warning: "Smell gas, or suspect carbon monoxide (headaches, dizziness, a boiler flame that’s yellow or orange)? Turn the appliance off, open doors and windows, leave, and call the National Gas Emergency Service on 0800 111 999.",
    },
    onCall: [
      { title: "Make, model and symptoms", text: "Boiler make and model if you have it, and what it’s doing." },
      { title: "Any fault codes", text: "The display often points straight to the problem." },
      { title: "We confirm what we can help with", text: "[INSERT VERIFIED GAS SAFE INFORMATION]" },
    ],
    whyPro: {
      heading: "Gas work is regulated for a reason",
      body: [
        "Faulty gas appliances can leak gas or carbon monoxide, which you can’t see or smell. That is why the law requires anyone working on them to be Gas Safe registered, and why you should check their card.",
        "You can check any engineer at gassaferegister.co.uk. Radiators, pipework and controls don’t need a gas engineer, but we’ll always tell you which is which.",
      ],
    },
    processHeading: "How we diagnose a heating fault",
    process: [
      { title: "Ask and observe", text: "What it’s doing, when it started, and what changed." },
      { title: "Check the system", text: "Pressure, controls, flow and return, radiators and valves." },
      { title: "Fix or recommend", text: "Repair what can be repaired, and tell you plainly if something’s past it." },
      { title: "Test and leave it working", text: "Heating and hot water confirmed, and advice on what to watch for." },
    ],
    faqs: [
      { q: "Do you repair boilers?", a: "[INSERT VERIFIED GAS SAFE INFORMATION AND CONFIRM BOILER WORK OFFERED]" },
      { q: "Why do my radiators have cold spots?", a: "Cold at the top usually means trapped air, which bleeding fixes. Cold at the bottom or in the middle often points to sludge in the system." },
      { q: "Why does my boiler keep losing pressure?", a: "A leak somewhere in the heating system, a faulty expansion vessel or a failing pressure relief valve. Topping up over and over isn’t a fix." },
      { q: "How do I check a Gas Safe engineer?", a: "Ask to see their ID card, and check the number at gassaferegister.co.uk." },
    ],
    related: ["leak-detection", "emergency-plumbing", "bathroom-plumbing"],
  },

  {
    slug: "bathroom-plumbing",
    name: "Bathroom Plumbing",
    short: "Bathrooms",
    group: "Around the home",
    blurb: "New bathrooms, changed layouts, showers, toilets and taps. The pipework behind it all, done properly.",
    image: "basin",
    variant: "editorial",
    metaTitle: "Bathroom Plumbing in Manchester",
    metaDescription: "Bathroom installations, shower fitting, toilets, taps and pipework in Manchester and Greater Manchester. What’s involved and how to plan it.",
    h1: ["The pipework", "behind a good bathroom."],
    lead: "Whether it’s a full refit or a new shower, the plumbing is what you don’t see and what has to be right. Here’s how we approach it.",
    intro: {
      heading: "Plumbing decides how a bathroom works",
      body: [
        "The finish is what you’ll see and enjoy, but the pipework decides water pressure, drainage, where things can go and how easily it can be repaired in future.",
        "A good bathroom starts with a plan for the pipes, not the tiles.",
      ],
    },
    helps: [
      { title: "Full bathroom installations", text: "Plumbing for new suites, from first-fix pipework to final connections." },
      { title: "Showers", text: "Mixer, electric and pumped showers, and replacing tired ones." },
      { title: "Toilets, basins and baths", text: "Fitting, replacing and moving them." },
      { title: "Taps and fixtures", text: "Dripping, stiff or being upgraded." },
      { title: "Moving pipework", text: "Layout changes that need supply and waste moved. [CONFIRM IF TILING AND JOINERY ARE OFFERED]" },
    ],
    symptomsHeading: "Signs the plumbing needs attention",
    symptoms: [
      "Dripping taps or a shower that’s lost its pressure",
      "Water pooling around the base of a toilet",
      "Slow-draining baths, basins or showers",
      "Sealant that keeps failing, or tiles loosening around a bath",
      "A toilet that runs on, or keeps refilling",
      "Damp patches on the ceiling below the bathroom",
    ],
    onCall: [
      { title: "Tell us what you’re planning", text: "A refit, a new shower, or a fix. A few photos help." },
      { title: "We discuss the practicalities", text: "Where water and waste can run, and what affects cost and time." },
      { title: "We arrange a visit and quote", text: "[CONFIRM SURVEY AND QUOTING PROCESS]" },
    ],
    whyPro: {
      heading: "Get the order of work right",
      body: [
        "Bathrooms go in stages: strip-out, first-fix plumbing, boarding and tiling, then second-fix fittings. Plumbing done in the wrong order, or without testing before the walls are closed, is where the expensive problems start.",
        "We’ll fit our work around the other trades on your project, and pressure-test before anything is covered.",
      ],
    },
    processHeading: "How a bathroom plumbing job runs",
    process: [
      { title: "Survey and plan", text: "Measure up, check existing pipework, and agree where everything goes." },
      { title: "First fix", text: "Supply and waste pipework installed before walls and floors are closed in." },
      { title: "Pressure-test", text: "Everything tested while it’s still accessible." },
      { title: "Second fix", text: "Suite, taps and shower connected once the walls are finished, then tested again." },
    ],
    faqs: [
      { q: "Do you fit complete bathrooms?", a: "[CONFIRM SCOPE: PLUMBING ONLY, OR FULL BATHROOM FITTING]" },
      { q: "Can you move my toilet?", a: "Often, yes, within limits set by where the soil pipe runs. We’ll tell you what’s straightforward and what isn’t." },
      { q: "Do I buy the fittings or do you?", a: "[CONFIRM SUPPLY POLICY]" },
      { q: "How long does a bathroom take?", a: "It depends on the scope. A like-for-like replacement is far quicker than a re-plumbed layout. We’ll give you an honest idea once we’ve seen the room." },
    ],
    related: ["leak-detection", "blocked-drains", "boiler-heating"],
  },
];

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const relatedServices = (s: Service) => s.related.map((r) => SERVICES.find((x) => x.slug === r)!).filter(Boolean);
