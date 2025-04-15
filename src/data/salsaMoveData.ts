// src/data/danceTreeData.ts

export interface DanceNode {
    title: string;
    description: string;
    video?: string;
    children?: DanceNode[];
  }
  
  export const danceTreeData: DanceNode = {
    title: "Dance Styles",
    description: "Explore Salsa and Bachata moves categorized by difficulty.",
    children: [
      {
        title: "Salsa",
        description: "A vibrant dance style with roots in Latin America.",
        children: [
          {
            title: "Basics",
            description: "Moves based on the Cross Body Lead concept.",
            children: [
              {
                title: "Basic Steps",
                description: "Fundamental steps to get you started.",
                video: "https://www.youtube.com/watch?v=wV8cDpJa2f4",
              },
              {
                title: "Easy Moves",
                description: "Simple moves for beginners.",
                video: "https://www.youtube.com/watch?v=e_EcZZS7Psk",
              },
            ],
          },

          {
            title: "CrossBody",
            description: "Moves based on the Cross Body Lead concept.",
            children: [
              {
                title: "Cross Body Lead",
                description: "Basic cross body move.",
                video: "https://youtu.be/S6GA3rrcCd0?t=370&owner=danielrosas.official&moveid=27",
              },
              {
                title: "Cross Body with Inside Turn",
                description: "Add flair with an right turn.",
                video: "https://youtu.be/S6GA3rrcCd0?t=1050&owner=danielrosas.official&moveid=32",
              },
              {
                title: "Cross Body with Pretzel ",
                description: "A slightly more advanced variation.",
                video: "https://youtu.be/S6GA3rrcCd0?t=908&owner=danielrosas.official&moveid=31",
              },
            ],
          },
          {
            title: "Enchufla",
            description: "A fun way to swap sides.",
            children: [
              {
                title: "Enchufla Basic",
                description: "Easy to do, great way to switch sides when the bridge starts or when it feels right",
                video: "https://youtu.be/e_EcZZS7Psk?t=170&owner=thedancedojo&moveid=14",
              },
              {
                title: "Enchufla Doble",
                description: "Double variation of Enchufla.",
                video: "https://youtu.be/7VA03NNXPVQ?t=459&owner=MariusElenaBachata&moveid=19",
              },
              {
                title: "Enchufla + Planeo/Sweep",
                description: "Adds a sweaping flair to the Enchufla.",
                video: "https://youtu.be/7VA03NNXPVQ?t=542&owner=MariusElenaBachata&moveid=20",
              },
            ],
          },
          {
            title: "Hammerlock",
            description: "Hand-twisting turn patterns using the hammerlock position",
            children: [
              {
                title: "Hammerlock Turn",
                description: "Entering the hammerlock position (setup move).",
                video: "https://youtu.be/7VA03NNXPVQ?t=671&owner=MariusElenaBachata&moveid=21",
              },
              {
                title: "Change the Locks",
                description: "HammerlockW + HairbrushM + ArmBreak + ArmDropW into HammerlockW + TurnOutW + CariciaM + CrossBodyLead",
                video: "https://www.youtube.com/watch?v=5LFIZXbi_A4&owner=thedancedojo&moveid=49",
              },
            ],
          },
          {
            title: "Shines",
            description: "Footwork patterns done solo, emphasizing rhythm and style, (fun for solos in the song).",
            children: [
              {
                title: "Lead SHines",
                description: "Introductory solo footwork.",
                video: "https://www.youtube.com/watch?v=rHndZ5OFEq4&t=87s",
              },
              {
                title: "Follow Shines",
                description: "Introductory solo footwork.",
                video: "https://www.youtube.com/watch?v=dwV7xdcybV8",
              },
            ],
          },
          {
            title: "Spectacular",
            description: "Flashy moves for performance and social dance wow-factor (may be tough to pull off in a social dancing setting).",
            children: [
              {
                title: "Bouncy Hands",
                description: "A Flashy Combo to look cool",
                video: "https://www.youtube.com/watch?v=kIF7ty8rRGc&owner=thedancedojo&moveid=76",
              },
              {
                title: "Inside Out",
                description: "Creates visual flair with arm movements.",
                video: "https://www.youtube.com/watch?v=8rMDJiyZ7Jk&owner=thedancedojo&moveid=67",
              },
            ],
          },
          {
            title: "Most Important Moves",
            description: "Core moves every Salsa dancer should master.",
            children: [
              {
                title: "Basic Step",
                description: "The essential Salsa foundation step.",
                video: "https://www.youtube.com/watch?v=8eKL_2O2RZM",
              },
              {
                title: "Right Turn",
                description: "Fundamental solo and partner turn.",
                video: "https://www.youtube.com/watch?v=_sWRIWiO3pQ",
              },
              {
                title: "Cross Body Lead",
                description: "Essential for partner transitions.",
                video: "https://www.youtube.com/watch?v=0wlVPYOYzNw",
              },
            ],
          },
        ],
      },
      {
        title: "Bachata",
        description: "A romantic dance style from the Dominican Republic.",
        children: [
          {
            title: "Basic Steps",
            description: "Essential steps to begin your Bachata journey.",
            video: "https://www.youtube.com/watch?v=xhrdh-uFkog",
          },
          {
            title: "Easy Moves",
            description: "Simple moves to build your confidence.",
            video: "https://www.youtube.com/watch?v=uYogZ8wGrv0",
          },
          {
            title: "Medium Moves",
            description: "Intermediate moves to expand your repertoire.",
            video: "https://www.youtube.com/watch?v=K9YCJs6BqVE",
          },
          {
            title: "Hard Moves",
            description: "Challenging moves for advanced dancers.",
            video: "https://www.youtube.com/watch?v=fSvr8GThrnU",
          },
        ],
      },
    ],
  };
  