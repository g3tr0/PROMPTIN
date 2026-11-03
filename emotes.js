/**
 * OmniGlyph - Database of Mobile Emojis & Japanese Kaomojis
 * 836+ Curated Emojis and Kaomojis
 */

const EMOTE_CATEGORIES = [
  {
    "id": "all",
    "name": "All Emotes & Emojis",
    "type": "all"
  },
  {
    "id": "smileys",
    "name": "😀 Smileys & Emotions",
    "type": "emoji"
  },
  {
    "id": "gestures",
    "name": "👍 Hands & Gestures",
    "type": "emoji"
  },
  {
    "id": "hearts",
    "name": "💖 Hearts & Romance",
    "type": "emoji"
  },
  {
    "id": "animals-emoji",
    "name": "🐶 Animals & Nature",
    "type": "emoji"
  },
  {
    "id": "food",
    "name": "🍕 Food & Drinks",
    "type": "emoji"
  },
  {
    "id": "gaming",
    "name": "🎮 Gaming & Fun",
    "type": "emoji"
  },
  {
    "id": "travel",
    "name": "🚀 Travel & Places",
    "type": "emoji"
  },
  {
    "id": "objects",
    "name": "💻 Tech & Objects",
    "type": "emoji"
  },
  {
    "id": "symbols",
    "name": "✨ Symbols & Badges",
    "type": "emoji"
  },
  {
    "id": "joy",
    "name": "Joy & Happy (Kaomoji)",
    "type": "kaomoji"
  },
  {
    "id": "love",
    "name": "Love & Affection (Kaomoji)",
    "type": "kaomoji"
  },
  {
    "id": "angry",
    "name": "Angry & Rage (Kaomoji)",
    "type": "kaomoji"
  },
  {
    "id": "sad",
    "name": "Sad & Crying (Kaomoji)",
    "type": "kaomoji"
  },
  {
    "id": "surprise",
    "name": "Surprise & Shock (Kaomoji)",
    "type": "kaomoji"
  },
  {
    "id": "shrug",
    "name": "Shrug & Helpless (Kaomoji)",
    "type": "kaomoji"
  },
  {
    "id": "animals",
    "name": "Animals & Pets (Kaomoji)",
    "type": "kaomoji"
  },
  {
    "id": "tableflip",
    "name": "Table Flip & Chaos (Kaomoji)",
    "type": "kaomoji"
  },
  {
    "id": "cool",
    "name": "Cool & Smug (Kaomoji)",
    "type": "kaomoji"
  },
  {
    "id": "combat",
    "name": "Action & Combat (Kaomoji)",
    "type": "kaomoji"
  },
  {
    "id": "thinking",
    "name": "Thinking & Confused (Kaomoji)",
    "type": "kaomoji"
  },
  {
    "id": "sleepy",
    "name": "Sleepy & Tired (Kaomoji)",
    "type": "kaomoji"
  },
  {
    "id": "greeting",
    "name": "Greeting & Waving (Kaomoji)",
    "type": "kaomoji"
  },
  {
    "id": "dancing",
    "name": "Music & Dancing (Kaomoji)",
    "type": "kaomoji"
  },
  {
    "id": "hiding",
    "name": "Hiding & Peeking (Kaomoji)",
    "type": "kaomoji"
  },
  {
    "id": "sparkles",
    "name": "Magic & Sparkles (Kaomoji)",
    "type": "kaomoji"
  }
];

const EMOTES_DATABASE = [
  {
    "emote": "😀",
    "name": "Grinning Face",
    "cat": "smileys",
    "tags": [
      "smile",
      "happy",
      "grin"
    ],
    "type": "emoji"
  },
  {
    "emote": "😃",
    "name": "Grinning Face with Big Eyes",
    "cat": "smileys",
    "tags": [
      "smile",
      "happy",
      "joy"
    ],
    "type": "emoji"
  },
  {
    "emote": "😄",
    "name": "Grinning Face with Smiling Eyes",
    "cat": "smileys",
    "tags": [
      "laugh",
      "happy",
      "smile"
    ],
    "type": "emoji"
  },
  {
    "emote": "😁",
    "name": "Beaming Face with Smiling Eyes",
    "cat": "smileys",
    "tags": [
      "beam",
      "grin",
      "teeth"
    ],
    "type": "emoji"
  },
  {
    "emote": "😆",
    "name": "Grinning Squinting Face",
    "cat": "smileys",
    "tags": [
      "laugh",
      "haha",
      "squint",
      "lol"
    ],
    "type": "emoji"
  },
  {
    "emote": "😅",
    "name": "Grinning Face with Sweat",
    "cat": "smileys",
    "tags": [
      "sweat",
      "nervous",
      "whew",
      "relief"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤣",
    "name": "Rolling on the Floor Laughing",
    "cat": "smileys",
    "tags": [
      "rofl",
      "lmao",
      "laughing",
      "hilarious"
    ],
    "type": "emoji"
  },
  {
    "emote": "😂",
    "name": "Face with Tears of Joy",
    "cat": "smileys",
    "tags": [
      "tears",
      "crying laugh",
      "funny",
      "lol"
    ],
    "type": "emoji"
  },
  {
    "emote": "🙂",
    "name": "Slightly Smiling Face",
    "cat": "smileys",
    "tags": [
      "smile",
      "fine",
      "okay"
    ],
    "type": "emoji"
  },
  {
    "emote": "🙃",
    "name": "Upside-Down Face",
    "cat": "smileys",
    "tags": [
      "silly",
      "sarcasm",
      "irony"
    ],
    "type": "emoji"
  },
  {
    "emote": "🫠",
    "name": "Melting Face",
    "cat": "smileys",
    "tags": [
      "melt",
      "hot",
      "awkward",
      "dissolve"
    ],
    "type": "emoji"
  },
  {
    "emote": "😉",
    "name": "Winking Face",
    "cat": "smileys",
    "tags": [
      "wink",
      "flirt",
      "joke"
    ],
    "type": "emoji"
  },
  {
    "emote": "😊",
    "name": "Smiling Face with Smiling Eyes",
    "cat": "smileys",
    "tags": [
      "blush",
      "warm",
      "gentle"
    ],
    "type": "emoji"
  },
  {
    "emote": "😇",
    "name": "Smiling Face with Halo",
    "cat": "smileys",
    "tags": [
      "angel",
      "innocent",
      "halo",
      "holy"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥰",
    "name": "Smiling Face with Hearts",
    "cat": "smileys",
    "tags": [
      "love",
      "crush",
      "hearts",
      "adore"
    ],
    "type": "emoji"
  },
  {
    "emote": "😍",
    "name": "Heart Eyes",
    "cat": "smileys",
    "tags": [
      "love",
      "heart eyes",
      "infatuated"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤩",
    "name": "Star-Struck",
    "cat": "smileys",
    "tags": [
      "star eyes",
      "amazed",
      "wow",
      "famous"
    ],
    "type": "emoji"
  },
  {
    "emote": "😘",
    "name": "Face Blowing a Kiss",
    "cat": "smileys",
    "tags": [
      "kiss",
      "love",
      "smooch"
    ],
    "type": "emoji"
  },
  {
    "emote": "😗",
    "name": "Kissing Face",
    "cat": "smileys",
    "tags": [
      "kiss",
      "whistle"
    ],
    "type": "emoji"
  },
  {
    "emote": "😚",
    "name": "Kissing Face with Closed Eyes",
    "cat": "smileys",
    "tags": [
      "kiss",
      "sweet",
      "blush"
    ],
    "type": "emoji"
  },
  {
    "emote": "😙",
    "name": "Kissing Face with Smiling Eyes",
    "cat": "smileys",
    "tags": [
      "kiss",
      "friendly"
    ],
    "type": "emoji"
  },
  {
    "emote": "😋",
    "name": "Face Savoring Food",
    "cat": "smileys",
    "tags": [
      "yum",
      "delicious",
      "tasty",
      "tongue"
    ],
    "type": "emoji"
  },
  {
    "emote": "😛",
    "name": "Face with Tongue",
    "cat": "smileys",
    "tags": [
      "tongue",
      "silly",
      "playful"
    ],
    "type": "emoji"
  },
  {
    "emote": "😜",
    "name": "Winking Face with Tongue",
    "cat": "smileys",
    "tags": [
      "wink",
      "crazy",
      "party",
      "joke"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤪",
    "name": "Zany Face",
    "cat": "smileys",
    "tags": [
      "crazy",
      "wild",
      "zany",
      "goofy"
    ],
    "type": "emoji"
  },
  {
    "emote": "😝",
    "name": "Squinting Face with Tongue",
    "cat": "smileys",
    "tags": [
      "squint",
      "prank",
      "lol"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤑",
    "name": "Money-Mouth Face",
    "cat": "smileys",
    "tags": [
      "money",
      "rich",
      "cash",
      "dollar"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤗",
    "name": "Smiling Face with Open Hands (Hug)",
    "cat": "smileys",
    "tags": [
      "hug",
      "hands",
      "warm",
      "welcome"
    ],
    "type": "emoji"
  },
  {
    "emote": "🫣",
    "name": "Face with Peeking Eye",
    "cat": "smileys",
    "tags": [
      "peek",
      "scared",
      "hide",
      "curious"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤭",
    "name": "Face with Hand Over Mouth",
    "cat": "smileys",
    "tags": [
      "giggle",
      "oops",
      "secret"
    ],
    "type": "emoji"
  },
  {
    "emote": "🫢",
    "name": "Face with Open Eyes & Hand Over Mouth",
    "cat": "smileys",
    "tags": [
      "gasp",
      "shock",
      "omg"
    ],
    "type": "emoji"
  },
  {
    "emote": "🫡",
    "name": "Saluting Face",
    "cat": "smileys",
    "tags": [
      "salute",
      "yes sir",
      "respect",
      "honor"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤫",
    "name": "Shushing Face",
    "cat": "smileys",
    "tags": [
      "shh",
      "quiet",
      "silence",
      "secret"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤔",
    "name": "Thinking Face",
    "cat": "smileys",
    "tags": [
      "think",
      "hmm",
      "ponder",
      "wonder"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤐",
    "name": "Zipper-Mouth Face",
    "cat": "smileys",
    "tags": [
      "zipper",
      "silent",
      "secret",
      "mute"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤨",
    "name": "Face with Raised Eyebrow",
    "cat": "smileys",
    "tags": [
      "eyebrow",
      "skeptical",
      "suspicious"
    ],
    "type": "emoji"
  },
  {
    "emote": "😐",
    "name": "Neutral Face",
    "cat": "smileys",
    "tags": [
      "neutral",
      "blank",
      "indifferent"
    ],
    "type": "emoji"
  },
  {
    "emote": "😑",
    "name": "Expressionless Face",
    "cat": "smileys",
    "tags": [
      "blank",
      "unimpressed",
      "meh"
    ],
    "type": "emoji"
  },
  {
    "emote": "😶",
    "name": "Face Without Mouth",
    "cat": "smileys",
    "tags": [
      "silent",
      "no words",
      "blank"
    ],
    "type": "emoji"
  },
  {
    "emote": "🫥",
    "name": "Dotted Line Face",
    "cat": "smileys",
    "tags": [
      "invisible",
      "disappear",
      "introvert"
    ],
    "type": "emoji"
  },
  {
    "emote": "😶‍🌫️",
    "name": "Face in Clouds",
    "cat": "smileys",
    "tags": [
      "fog",
      "clouds",
      "lost",
      "confused"
    ],
    "type": "emoji"
  },
  {
    "emote": "😏",
    "name": "Smirking Face",
    "cat": "smileys",
    "tags": [
      "smirk",
      "flirt",
      "sly",
      "suggestive"
    ],
    "type": "emoji"
  },
  {
    "emote": "😒",
    "name": "Unamused Face",
    "cat": "smileys",
    "tags": [
      "bored",
      "unamused",
      "annoyed"
    ],
    "type": "emoji"
  },
  {
    "emote": "🙄",
    "name": "Face with Rolling Eyes",
    "cat": "smileys",
    "tags": [
      "eye roll",
      "whatever",
      "sarcasm"
    ],
    "type": "emoji"
  },
  {
    "emote": "😬",
    "name": "Grimacing Face",
    "cat": "smileys",
    "tags": [
      "grimace",
      "awkward",
      "cringe",
      "yikes"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤥",
    "name": "Lying Face (Pinocchio)",
    "cat": "smileys",
    "tags": [
      "lie",
      "pinocchio",
      "long nose"
    ],
    "type": "emoji"
  },
  {
    "emote": "🫨",
    "name": "Shaking Face",
    "cat": "smileys",
    "tags": [
      "shake",
      "vibrate",
      "earthquake",
      "dizzy"
    ],
    "type": "emoji"
  },
  {
    "emote": "😌",
    "name": "Relieved Face",
    "cat": "smileys",
    "tags": [
      "relieved",
      "zen",
      "calm",
      "peace"
    ],
    "type": "emoji"
  },
  {
    "emote": "😔",
    "name": "Pensive Face",
    "cat": "smileys",
    "tags": [
      "sad",
      "pensive",
      "depressed",
      "gloomy"
    ],
    "type": "emoji"
  },
  {
    "emote": "😪",
    "name": "Sleepy Face",
    "cat": "smileys",
    "tags": [
      "sleepy",
      "tired",
      "snooze",
      "tear"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤤",
    "name": "Drooling Face",
    "cat": "smileys",
    "tags": [
      "drool",
      "craving",
      "hungry"
    ],
    "type": "emoji"
  },
  {
    "emote": "😴",
    "name": "Sleeping Face",
    "cat": "smileys",
    "tags": [
      "sleep",
      "zzz",
      "night",
      "tired"
    ],
    "type": "emoji"
  },
  {
    "emote": "😷",
    "name": "Face with Medical Mask",
    "cat": "smileys",
    "tags": [
      "mask",
      "sick",
      "virus",
      "covid"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤒",
    "name": "Face with Thermometer",
    "cat": "smileys",
    "tags": [
      "fever",
      "sick",
      "ill"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤕",
    "name": "Face with Head-Bandage",
    "cat": "smileys",
    "tags": [
      "bandage",
      "hurt",
      "injury",
      "ouch"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤢",
    "name": "Nauseated Face",
    "cat": "smileys",
    "tags": [
      "nausea",
      "green",
      "disgust",
      "sick"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤮",
    "name": "Face Vomiting",
    "cat": "smileys",
    "tags": [
      "vomit",
      "barf",
      "gross"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤧",
    "name": "Sneezing Face",
    "cat": "smileys",
    "tags": [
      "sneeze",
      "achoo",
      "cold",
      "flu"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥵",
    "name": "Hot Face",
    "cat": "smileys",
    "tags": [
      "hot",
      "sweating",
      "summer",
      "heat"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥶",
    "name": "Cold Face",
    "cat": "smileys",
    "tags": [
      "cold",
      "freezing",
      "ice",
      "winter"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥴",
    "name": "Woozy Face",
    "cat": "smileys",
    "tags": [
      "drunk",
      "woozy",
      "dizzy",
      "intoxicated"
    ],
    "type": "emoji"
  },
  {
    "emote": "😵",
    "name": "Face with Crossed-Out Eyes",
    "cat": "smileys",
    "tags": [
      "dizzy",
      "dead",
      "shock",
      "ko"
    ],
    "type": "emoji"
  },
  {
    "emote": "😵‍💫",
    "name": "Face with Spiral Eyes",
    "cat": "smileys",
    "tags": [
      "spiral",
      "hypnotized",
      "confused"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤯",
    "name": "Exploding Head",
    "cat": "smileys",
    "tags": [
      "mind blown",
      "shock",
      "boom",
      "explode"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤠",
    "name": "Cowboy Hat Face",
    "cat": "smileys",
    "tags": [
      "cowboy",
      "western",
      "sheriff"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥳",
    "name": "Partying Face",
    "cat": "smileys",
    "tags": [
      "party",
      "celebrate",
      "birthday",
      "horn"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥸",
    "name": "Disguised Face",
    "cat": "smileys",
    "tags": [
      "glasses",
      "mustache",
      "spy",
      "disguise"
    ],
    "type": "emoji"
  },
  {
    "emote": "😎",
    "name": "Smiling Face with Sunglasses",
    "cat": "smileys",
    "tags": [
      "cool",
      "sunglasses",
      "boss"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤓",
    "name": "Nerd Face",
    "cat": "smileys",
    "tags": [
      "nerd",
      "geek",
      "glasses",
      "smart"
    ],
    "type": "emoji"
  },
  {
    "emote": "🧐",
    "name": "Face with Monocle",
    "cat": "smileys",
    "tags": [
      "monocle",
      "curious",
      "inspect",
      "classy"
    ],
    "type": "emoji"
  },
  {
    "emote": "😕",
    "name": "Confused Face",
    "cat": "smileys",
    "tags": [
      "confused",
      "puzzled",
      "unsure"
    ],
    "type": "emoji"
  },
  {
    "emote": "🫤",
    "name": "Face with Diagonal Mouth",
    "cat": "smileys",
    "tags": [
      "meh",
      "skeptical",
      "unsure"
    ],
    "type": "emoji"
  },
  {
    "emote": "😟",
    "name": "Worried Face",
    "cat": "smileys",
    "tags": [
      "worried",
      "anxious",
      "concerned"
    ],
    "type": "emoji"
  },
  {
    "emote": "🙁",
    "name": "Slightly Frowning Face",
    "cat": "smileys",
    "tags": [
      "frown",
      "sad",
      "unhappy"
    ],
    "type": "emoji"
  },
  {
    "emote": "☹️",
    "name": "Frowning Face",
    "cat": "smileys",
    "tags": [
      "sad",
      "depressed",
      "gloom"
    ],
    "type": "emoji"
  },
  {
    "emote": "😮",
    "name": "Face with Open Mouth",
    "cat": "smileys",
    "tags": [
      "surprise",
      "gasp",
      "wow"
    ],
    "type": "emoji"
  },
  {
    "emote": "😯",
    "name": "Hushed Face",
    "cat": "smileys",
    "tags": [
      "hushed",
      "stunned",
      "silent"
    ],
    "type": "emoji"
  },
  {
    "emote": "😲",
    "name": "Astonished Face",
    "cat": "smileys",
    "tags": [
      "astonished",
      "shock",
      "omg"
    ],
    "type": "emoji"
  },
  {
    "emote": "😳",
    "name": "Flushed Face",
    "cat": "smileys",
    "tags": [
      "blush",
      "embarrassed",
      "wide eyes"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥺",
    "name": "Pleading Face",
    "cat": "smileys",
    "tags": [
      "puppy eyes",
      "plead",
      "beg",
      "please"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥹",
    "name": "Face Holding Back Tears",
    "cat": "smileys",
    "tags": [
      "proud",
      "touched",
      "tears",
      "gratitude"
    ],
    "type": "emoji"
  },
  {
    "emote": "😦",
    "name": "Frowning Face with Open Mouth",
    "cat": "smileys",
    "tags": [
      "shock",
      "sad",
      "frown"
    ],
    "type": "emoji"
  },
  {
    "emote": "😧",
    "name": "Anguished Face",
    "cat": "smileys",
    "tags": [
      "anguish",
      "pain",
      "scared"
    ],
    "type": "emoji"
  },
  {
    "emote": "😨",
    "name": "Fearful Face",
    "cat": "smileys",
    "tags": [
      "fear",
      "scared",
      "dread"
    ],
    "type": "emoji"
  },
  {
    "emote": "😰",
    "name": "Anxious Face with Sweat",
    "cat": "smileys",
    "tags": [
      "anxious",
      "nervous",
      "panic"
    ],
    "type": "emoji"
  },
  {
    "emote": "😥",
    "name": "Sad but Relieved Face",
    "cat": "smileys",
    "tags": [
      "sad",
      "phew",
      "relieved"
    ],
    "type": "emoji"
  },
  {
    "emote": "😢",
    "name": "Crying Face",
    "cat": "smileys",
    "tags": [
      "cry",
      "tear",
      "sad",
      "heartbroken"
    ],
    "type": "emoji"
  },
  {
    "emote": "😭",
    "name": "Loudly Crying Face",
    "cat": "smileys",
    "tags": [
      "bawling",
      "sobbing",
      "waterfall tears"
    ],
    "type": "emoji"
  },
  {
    "emote": "😱",
    "name": "Face Screaming in Fear",
    "cat": "smileys",
    "tags": [
      "scream",
      "scared",
      "munch",
      "horror"
    ],
    "type": "emoji"
  },
  {
    "emote": "😖",
    "name": "Confounded Face",
    "cat": "smileys",
    "tags": [
      "frustrated",
      "quiver"
    ],
    "type": "emoji"
  },
  {
    "emote": "😣",
    "name": "Persevering Face",
    "cat": "smileys",
    "tags": [
      "struggle",
      "endure"
    ],
    "type": "emoji"
  },
  {
    "emote": "😞",
    "name": "Disappointed Face",
    "cat": "smileys",
    "tags": [
      "disappointed",
      "regret",
      "downcast"
    ],
    "type": "emoji"
  },
  {
    "emote": "😓",
    "name": "Downcast Face with Sweat",
    "cat": "smileys",
    "tags": [
      "sweat",
      "exhausted",
      "stress"
    ],
    "type": "emoji"
  },
  {
    "emote": "😩",
    "name": "Weary Face",
    "cat": "smileys",
    "tags": [
      "tired",
      "weary",
      "whine"
    ],
    "type": "emoji"
  },
  {
    "emote": "😫",
    "name": "Tired Face",
    "cat": "smileys",
    "tags": [
      "exhausted",
      "done",
      "screaming"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥱",
    "name": "Yawning Face",
    "cat": "smileys",
    "tags": [
      "yawn",
      "sleepy",
      "bored"
    ],
    "type": "emoji"
  },
  {
    "emote": "😤",
    "name": "Face with Steam From Nose",
    "cat": "smileys",
    "tags": [
      "triumph",
      "pride",
      "huff",
      "angry"
    ],
    "type": "emoji"
  },
  {
    "emote": "😡",
    "name": "Enraged Face (Pouting)",
    "cat": "smileys",
    "tags": [
      "angry",
      "rage",
      "mad",
      "red"
    ],
    "type": "emoji"
  },
  {
    "emote": "😠",
    "name": "Angry Face",
    "cat": "smileys",
    "tags": [
      "mad",
      "grumpy",
      "furious"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤬",
    "name": "Face with Symbols on Mouth",
    "cat": "smileys",
    "tags": [
      "swearing",
      "curse",
      "rage",
      "profanity"
    ],
    "type": "emoji"
  },
  {
    "emote": "😈",
    "name": "Smiling Face with Horns",
    "cat": "smileys",
    "tags": [
      "devil",
      "mischief",
      "evil",
      "purple"
    ],
    "type": "emoji"
  },
  {
    "emote": "👿",
    "name": "Angry Face with Horns",
    "cat": "smileys",
    "tags": [
      "demon",
      "goblin",
      "rage"
    ],
    "type": "emoji"
  },
  {
    "emote": "💀",
    "name": "Skull",
    "cat": "smileys",
    "tags": [
      "dead",
      "skeleton",
      "i am dead",
      "lol"
    ],
    "type": "emoji"
  },
  {
    "emote": "☠️",
    "name": "Skull and Crossbones",
    "cat": "smileys",
    "tags": [
      "danger",
      "pirate",
      "poison"
    ],
    "type": "emoji"
  },
  {
    "emote": "💩",
    "name": "Pile of Poo",
    "cat": "smileys",
    "tags": [
      "poop",
      "poo",
      "funny"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤡",
    "name": "Clown Face",
    "cat": "smileys",
    "tags": [
      "clown",
      "circus",
      "fool",
      "joke"
    ],
    "type": "emoji"
  },
  {
    "emote": "👹",
    "name": "Ogre (Japanese Oni)",
    "cat": "smileys",
    "tags": [
      "oni",
      "monster",
      "red mask"
    ],
    "type": "emoji"
  },
  {
    "emote": "👺",
    "name": "Goblin (Tengu)",
    "cat": "smileys",
    "tags": [
      "tengu",
      "mask",
      "long nose"
    ],
    "type": "emoji"
  },
  {
    "emote": "👻",
    "name": "Ghost",
    "cat": "smileys",
    "tags": [
      "ghost",
      "spooky",
      "halloween",
      "boo"
    ],
    "type": "emoji"
  },
  {
    "emote": "👽",
    "name": "Alien",
    "cat": "smileys",
    "tags": [
      "ufo",
      "extraterrestrial",
      "space"
    ],
    "type": "emoji"
  },
  {
    "emote": "👾",
    "name": "Alien Monster",
    "cat": "smileys",
    "tags": [
      "arcade",
      "retro",
      "space invaders",
      "8bit"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤖",
    "name": "Robot",
    "cat": "smileys",
    "tags": [
      "bot",
      "ai",
      "android",
      "cyborg"
    ],
    "type": "emoji"
  },
  {
    "emote": "👋",
    "name": "Waving Hand",
    "cat": "gestures",
    "tags": [
      "wave",
      "hello",
      "bye",
      "hi"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤚",
    "name": "Raised Back of Hand",
    "cat": "gestures",
    "tags": [
      "backhand",
      "stop"
    ],
    "type": "emoji"
  },
  {
    "emote": "🖐️",
    "name": "Hand with Fingers Splayed",
    "cat": "gestures",
    "tags": [
      "five",
      "high five",
      "palm"
    ],
    "type": "emoji"
  },
  {
    "emote": "✋",
    "name": "Raised Hand",
    "cat": "gestures",
    "tags": [
      "stop",
      "high five",
      "halt"
    ],
    "type": "emoji"
  },
  {
    "emote": "🖖",
    "name": "Vulcan Salute",
    "cat": "gestures",
    "tags": [
      "spock",
      "star trek",
      "live long"
    ],
    "type": "emoji"
  },
  {
    "emote": "👌",
    "name": "OK Hand",
    "cat": "gestures",
    "tags": [
      "ok",
      "perfect",
      "fine",
      "good"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤌",
    "name": "Pinched Fingers (Italian Hand)",
    "cat": "gestures",
    "tags": [
      "italian",
      "what do you want",
      "chef"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤏",
    "name": "Pinching Hand",
    "cat": "gestures",
    "tags": [
      "tiny",
      "small amount",
      "little"
    ],
    "type": "emoji"
  },
  {
    "emote": "✌️",
    "name": "Victory Hand (Peace)",
    "cat": "gestures",
    "tags": [
      "peace",
      "victory",
      "two"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤞",
    "name": "Crossed Fingers",
    "cat": "gestures",
    "tags": [
      "luck",
      "hope",
      "wish"
    ],
    "type": "emoji"
  },
  {
    "emote": "🫰",
    "name": "Hand with Index Finger & Thumb Crossed (Korean Heart)",
    "cat": "gestures",
    "tags": [
      "finger heart",
      "kpop",
      "love"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤟",
    "name": "Love-You Gesture",
    "cat": "gestures",
    "tags": [
      "ily",
      "sign language",
      "love"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤘",
    "name": "Sign of the Horns (Rock On)",
    "cat": "gestures",
    "tags": [
      "rock",
      "metal",
      "horns"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤙",
    "name": "Call Me Hand (Shaka)",
    "cat": "gestures",
    "tags": [
      "hang loose",
      "shaka",
      "call me"
    ],
    "type": "emoji"
  },
  {
    "emote": "👈",
    "name": "Backhand Index Pointing Left",
    "cat": "gestures",
    "tags": [
      "left",
      "point"
    ],
    "type": "emoji"
  },
  {
    "emote": "👉",
    "name": "Backhand Index Pointing Right",
    "cat": "gestures",
    "tags": [
      "right",
      "point"
    ],
    "type": "emoji"
  },
  {
    "emote": "👆",
    "name": "Backhand Index Pointing Up",
    "cat": "gestures",
    "tags": [
      "up",
      "look up"
    ],
    "type": "emoji"
  },
  {
    "emote": "🖕",
    "name": "Middle Finger",
    "cat": "gestures",
    "tags": [
      "rude",
      "offensive",
      "flip off"
    ],
    "type": "emoji"
  },
  {
    "emote": "👇",
    "name": "Backhand Index Pointing Down",
    "cat": "gestures",
    "tags": [
      "down",
      "look down"
    ],
    "type": "emoji"
  },
  {
    "emote": "☝️",
    "name": "Index Pointing Up",
    "cat": "gestures",
    "tags": [
      "one",
      "attention",
      "first"
    ],
    "type": "emoji"
  },
  {
    "emote": "🫵",
    "name": "Index Pointing at the Viewer",
    "cat": "gestures",
    "tags": [
      "you",
      "uncle sam"
    ],
    "type": "emoji"
  },
  {
    "emote": "👍",
    "name": "Thumbs Up",
    "cat": "gestures",
    "tags": [
      "like",
      "approve",
      "yes",
      "good"
    ],
    "type": "emoji"
  },
  {
    "emote": "👎",
    "name": "Thumbs Down",
    "cat": "gestures",
    "tags": [
      "dislike",
      "bad",
      "no",
      "disapprove"
    ],
    "type": "emoji"
  },
  {
    "emote": "✊",
    "name": "Raised Fist",
    "cat": "gestures",
    "tags": [
      "power",
      "solidarity",
      "fist"
    ],
    "type": "emoji"
  },
  {
    "emote": "👊",
    "name": "Oncoming Fist (Fist Bump)",
    "cat": "gestures",
    "tags": [
      "punch",
      "fist bump",
      "bro"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤛",
    "name": "Left-Facing Fist",
    "cat": "gestures",
    "tags": [
      "fist bump left"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤜",
    "name": "Right-Facing Fist",
    "cat": "gestures",
    "tags": [
      "fist bump right"
    ],
    "type": "emoji"
  },
  {
    "emote": "👏",
    "name": "Clapping Hands",
    "cat": "gestures",
    "tags": [
      "applause",
      "bravo",
      "congrats"
    ],
    "type": "emoji"
  },
  {
    "emote": "🙌",
    "name": "Raising Hands",
    "cat": "gestures",
    "tags": [
      "celebrate",
      "praise",
      "hooray",
      "yay"
    ],
    "type": "emoji"
  },
  {
    "emote": "🫶",
    "name": "Heart Hands",
    "cat": "gestures",
    "tags": [
      "love",
      "heart",
      "care"
    ],
    "type": "emoji"
  },
  {
    "emote": "👐",
    "name": "Open Hands",
    "cat": "gestures",
    "tags": [
      "open",
      "hug",
      "generosity"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤲",
    "name": "Palms Up Together",
    "cat": "gestures",
    "tags": [
      "prayer",
      "dua",
      "request"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤝",
    "name": "Handshake",
    "cat": "gestures",
    "tags": [
      "deal",
      "agreement",
      "partner",
      "respect"
    ],
    "type": "emoji"
  },
  {
    "emote": "🙏",
    "name": "Folded Hands (Pray / Thanks)",
    "cat": "gestures",
    "tags": [
      "please",
      "thank you",
      "namaste",
      "pray"
    ],
    "type": "emoji"
  },
  {
    "emote": "✍️",
    "name": "Writing Hand",
    "cat": "gestures",
    "tags": [
      "write",
      "note",
      "pencil"
    ],
    "type": "emoji"
  },
  {
    "emote": "💅",
    "name": "Nail Polish",
    "cat": "gestures",
    "tags": [
      "sassy",
      "slay",
      "manicure",
      "unbothered"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤳",
    "name": "Selfie",
    "cat": "gestures",
    "tags": [
      "camera",
      "photo",
      "phone"
    ],
    "type": "emoji"
  },
  {
    "emote": "💪",
    "name": "Flexed Biceps",
    "cat": "gestures",
    "tags": [
      "strong",
      "muscle",
      "gym",
      "flex",
      "power"
    ],
    "type": "emoji"
  },
  {
    "emote": "👀",
    "name": "Eyes",
    "cat": "gestures",
    "tags": [
      "look",
      "see",
      "drama",
      "shifty"
    ],
    "type": "emoji"
  },
  {
    "emote": "🧠",
    "name": "Brain",
    "cat": "gestures",
    "tags": [
      "smart",
      "genius",
      "mind",
      "big brain"
    ],
    "type": "emoji"
  },
  {
    "emote": "💋",
    "name": "Kiss Mark",
    "cat": "gestures",
    "tags": [
      "lipstick",
      "smooch",
      "sexy",
      "kiss"
    ],
    "type": "emoji"
  },
  {
    "emote": "🫂",
    "name": "People Hugging",
    "cat": "gestures",
    "tags": [
      "hug",
      "comfort",
      "friends"
    ],
    "type": "emoji"
  },
  {
    "emote": "❤️",
    "name": "Red Heart",
    "cat": "hearts",
    "tags": [
      "love",
      "passion",
      "red heart"
    ],
    "type": "emoji"
  },
  {
    "emote": "🧡",
    "name": "Orange Heart",
    "cat": "hearts",
    "tags": [
      "orange",
      "friendship"
    ],
    "type": "emoji"
  },
  {
    "emote": "💛",
    "name": "Yellow Heart",
    "cat": "hearts",
    "tags": [
      "yellow",
      "sunshine",
      "best friends"
    ],
    "type": "emoji"
  },
  {
    "emote": "💚",
    "name": "Green Heart",
    "cat": "hearts",
    "tags": [
      "green",
      "nature",
      "envy"
    ],
    "type": "emoji"
  },
  {
    "emote": "💙",
    "name": "Blue Heart",
    "cat": "hearts",
    "tags": [
      "blue",
      "loyalty",
      "calm"
    ],
    "type": "emoji"
  },
  {
    "emote": "💜",
    "name": "Purple Heart",
    "cat": "hearts",
    "tags": [
      "purple",
      "bts",
      "glamour"
    ],
    "type": "emoji"
  },
  {
    "emote": "🖤",
    "name": "Black Heart",
    "cat": "hearts",
    "tags": [
      "black",
      "goth",
      "dark"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤍",
    "name": "White Heart",
    "cat": "hearts",
    "tags": [
      "white",
      "pure",
      "peace"
    ],
    "type": "emoji"
  },
  {
    "emote": "🤎",
    "name": "Brown Heart",
    "cat": "hearts",
    "tags": [
      "brown",
      "chocolate",
      "warmth"
    ],
    "type": "emoji"
  },
  {
    "emote": "💔",
    "name": "Broken Heart",
    "cat": "hearts",
    "tags": [
      "breakup",
      "heartbroken",
      "sad"
    ],
    "type": "emoji"
  },
  {
    "emote": "❤️‍🔥",
    "name": "Heart on Fire",
    "cat": "hearts",
    "tags": [
      "burning passion",
      "lust",
      "hot love"
    ],
    "type": "emoji"
  },
  {
    "emote": "❤️‍🩹",
    "name": "Mending Heart",
    "cat": "hearts",
    "tags": [
      "healing",
      "recovery",
      "better"
    ],
    "type": "emoji"
  },
  {
    "emote": "❣️",
    "name": "Heart Exclamation",
    "cat": "hearts",
    "tags": [
      "exclamation",
      "love mark"
    ],
    "type": "emoji"
  },
  {
    "emote": "💕",
    "name": "Two Hearts",
    "cat": "hearts",
    "tags": [
      "love in the air",
      "cute"
    ],
    "type": "emoji"
  },
  {
    "emote": "💞",
    "name": "Revolving Hearts",
    "cat": "hearts",
    "tags": [
      "revolving",
      "crush"
    ],
    "type": "emoji"
  },
  {
    "emote": "💓",
    "name": "Beating Heart",
    "cat": "hearts",
    "tags": [
      "heartbeat",
      "pulse",
      "thump"
    ],
    "type": "emoji"
  },
  {
    "emote": "💗",
    "name": "Growing Heart",
    "cat": "hearts",
    "tags": [
      "expanding",
      "warm"
    ],
    "type": "emoji"
  },
  {
    "emote": "💖",
    "name": "Sparkling Heart",
    "cat": "hearts",
    "tags": [
      "sparkle",
      "glitter",
      "magical love"
    ],
    "type": "emoji"
  },
  {
    "emote": "💘",
    "name": "Heart with Arrow (Cupid)",
    "cat": "hearts",
    "tags": [
      "cupid",
      "struck",
      "valentine"
    ],
    "type": "emoji"
  },
  {
    "emote": "💝",
    "name": "Heart with Ribbon (Gift)",
    "cat": "hearts",
    "tags": [
      "present",
      "gift",
      "wrapped"
    ],
    "type": "emoji"
  },
  {
    "emote": "💌",
    "name": "Love Letter",
    "cat": "hearts",
    "tags": [
      "mail",
      "letter",
      "envelope",
      "secret"
    ],
    "type": "emoji"
  },
  {
    "emote": "🌹",
    "name": "Rose",
    "cat": "hearts",
    "tags": [
      "flower",
      "romance",
      "red rose"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐶",
    "name": "Dog Face",
    "cat": "animals-emoji",
    "tags": [
      "dog",
      "puppy",
      "pet"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐱",
    "name": "Cat Face",
    "cat": "animals-emoji",
    "tags": [
      "cat",
      "kitty",
      "meow"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐭",
    "name": "Mouse Face",
    "cat": "animals-emoji",
    "tags": [
      "mouse",
      "rodent"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐹",
    "name": "Hamster Face",
    "cat": "animals-emoji",
    "tags": [
      "hamster",
      "cute",
      "cheeks"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐰",
    "name": "Rabbit Face",
    "cat": "animals-emoji",
    "tags": [
      "bunny",
      "rabbit",
      "easter"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦊",
    "name": "Fox Face",
    "cat": "animals-emoji",
    "tags": [
      "fox",
      "clever",
      "orange"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐻",
    "name": "Bear Face",
    "cat": "animals-emoji",
    "tags": [
      "bear",
      "teddy",
      "grizzly"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐼",
    "name": "Panda Face",
    "cat": "animals-emoji",
    "tags": [
      "panda",
      "bamboo"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐻‍❄️",
    "name": "Polar Bear",
    "cat": "animals-emoji",
    "tags": [
      "polar bear",
      "ice",
      "snow"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐨",
    "name": "Koala",
    "cat": "animals-emoji",
    "tags": [
      "koala",
      "australia"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐯",
    "name": "Tiger Face",
    "cat": "animals-emoji",
    "tags": [
      "tiger",
      "wild",
      "fierce"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦁",
    "name": "Lion",
    "cat": "animals-emoji",
    "tags": [
      "lion",
      "king",
      "safari"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐮",
    "name": "Cow Face",
    "cat": "animals-emoji",
    "tags": [
      "cow",
      "moo",
      "farm"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐷",
    "name": "Pig Face",
    "cat": "animals-emoji",
    "tags": [
      "pig",
      "oink"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐸",
    "name": "Frog Face",
    "cat": "animals-emoji",
    "tags": [
      "frog",
      "toad",
      "pepe",
      "ribbit"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐵",
    "name": "Monkey Face",
    "cat": "animals-emoji",
    "tags": [
      "monkey",
      "ape"
    ],
    "type": "emoji"
  },
  {
    "emote": "🙈",
    "name": "See-No-Evil Monkey",
    "cat": "animals-emoji",
    "tags": [
      "shy",
      "cannot watch",
      "hide"
    ],
    "type": "emoji"
  },
  {
    "emote": "🙉",
    "name": "Hear-No-Evil Monkey",
    "cat": "animals-emoji",
    "tags": [
      "ears",
      "secret"
    ],
    "type": "emoji"
  },
  {
    "emote": "🙊",
    "name": "Speak-No-Evil Monkey",
    "cat": "animals-emoji",
    "tags": [
      "oops",
      "quiet",
      "secret"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐔",
    "name": "Chicken",
    "cat": "animals-emoji",
    "tags": [
      "chicken",
      "hen",
      "farm"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐧",
    "name": "Penguin",
    "cat": "animals-emoji",
    "tags": [
      "penguin",
      "antarctica",
      "cute"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐦",
    "name": "Bird",
    "cat": "animals-emoji",
    "tags": [
      "bird",
      "tweet",
      "fly"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐤",
    "name": "Baby Chick",
    "cat": "animals-emoji",
    "tags": [
      "chick",
      "yellow"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦆",
    "name": "Duck",
    "cat": "animals-emoji",
    "tags": [
      "duck",
      "quack"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦅",
    "name": "Eagle",
    "cat": "animals-emoji",
    "tags": [
      "eagle",
      "america",
      "freedom"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦉",
    "name": "Owl",
    "cat": "animals-emoji",
    "tags": [
      "owl",
      "wise",
      "night"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦇",
    "name": "Bat",
    "cat": "animals-emoji",
    "tags": [
      "bat",
      "vampire",
      "halloween"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐺",
    "name": "Wolf",
    "cat": "animals-emoji",
    "tags": [
      "wolf",
      "howl",
      "moon"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦄",
    "name": "Unicorn",
    "cat": "animals-emoji",
    "tags": [
      "unicorn",
      "magic",
      "fantasy"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐝",
    "name": "Honeybee",
    "cat": "animals-emoji",
    "tags": [
      "bee",
      "honey",
      "buzz"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦋",
    "name": "Butterfly",
    "cat": "animals-emoji",
    "tags": [
      "butterfly",
      "wings",
      "nature"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐌",
    "name": "Snail",
    "cat": "animals-emoji",
    "tags": [
      "snail",
      "slow"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐞",
    "name": "Lady Beetle",
    "cat": "animals-emoji",
    "tags": [
      "ladybug",
      "lucky"
    ],
    "type": "emoji"
  },
  {
    "emote": "🕷️",
    "name": "Spider",
    "cat": "animals-emoji",
    "tags": [
      "spider",
      "arachnid",
      "web"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐢",
    "name": "Turtle",
    "cat": "animals-emoji",
    "tags": [
      "turtle",
      "tortoise",
      "shell"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐍",
    "name": "Snake",
    "cat": "animals-emoji",
    "tags": [
      "snake",
      "python",
      "slither"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦎",
    "name": "Lizard",
    "cat": "animals-emoji",
    "tags": [
      "lizard",
      "gecko"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦖",
    "name": "T-Rex",
    "cat": "animals-emoji",
    "tags": [
      "dino",
      "dinosaur",
      "jurassic"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐙",
    "name": "Octopus",
    "cat": "animals-emoji",
    "tags": [
      "octopus",
      "tentacles",
      "sea"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦑",
    "name": "Squid",
    "cat": "animals-emoji",
    "tags": [
      "squid",
      "ocean"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦐",
    "name": "Shrimp",
    "cat": "animals-emoji",
    "tags": [
      "shrimp",
      "prawn"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦞",
    "name": "Lobster",
    "cat": "animals-emoji",
    "tags": [
      "lobster",
      "seafood"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦀",
    "name": "Crab",
    "cat": "animals-emoji",
    "tags": [
      "crab",
      "beach"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐡",
    "name": "Blowfish",
    "cat": "animals-emoji",
    "tags": [
      "pufferfish",
      "spiky"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐠",
    "name": "Tropical Fish",
    "cat": "animals-emoji",
    "tags": [
      "fish",
      "aquarium",
      "nemo"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐟",
    "name": "Fish",
    "cat": "animals-emoji",
    "tags": [
      "fish",
      "swim"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐬",
    "name": "Dolphin",
    "cat": "animals-emoji",
    "tags": [
      "dolphin",
      "smart",
      "ocean"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐳",
    "name": "Spouting Whale",
    "cat": "animals-emoji",
    "tags": [
      "whale",
      "blowhole"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦈",
    "name": "Shark",
    "cat": "animals-emoji",
    "tags": [
      "shark",
      "jaws",
      "predator"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦭",
    "name": "Seal",
    "cat": "animals-emoji",
    "tags": [
      "seal",
      "cute",
      "sea dog"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐊",
    "name": "Crocodile",
    "cat": "animals-emoji",
    "tags": [
      "alligator",
      "croc"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐆",
    "name": "Leopard",
    "cat": "animals-emoji",
    "tags": [
      "cheetah",
      "fast"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦓",
    "name": "Zebra",
    "cat": "animals-emoji",
    "tags": [
      "stripes",
      "safari"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦍",
    "name": "Gorilla",
    "cat": "animals-emoji",
    "tags": [
      "ape",
      "harambe",
      "silverback"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐘",
    "name": "Elephant",
    "cat": "animals-emoji",
    "tags": [
      "elephant",
      "trunk"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦛",
    "name": "Hippopotamus",
    "cat": "animals-emoji",
    "tags": [
      "hippo"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦏",
    "name": "Rhinoceros",
    "cat": "animals-emoji",
    "tags": [
      "rhino",
      "horn"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦒",
    "name": "Giraffe",
    "cat": "animals-emoji",
    "tags": [
      "tall",
      "safari"
    ],
    "type": "emoji"
  },
  {
    "emote": "🦘",
    "name": "Kangaroo",
    "cat": "animals-emoji",
    "tags": [
      "joey",
      "jump",
      "outback"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐈",
    "name": "Cat",
    "cat": "animals-emoji",
    "tags": [
      "cat",
      "feline"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐈‍⬛",
    "name": "Black Cat",
    "cat": "animals-emoji",
    "tags": [
      "black cat",
      "spooky",
      "lucky"
    ],
    "type": "emoji"
  },
  {
    "emote": "🐕",
    "name": "Dog",
    "cat": "animals-emoji",
    "tags": [
      "dog",
      "shiba",
      "good boy"
    ],
    "type": "emoji"
  },
  {
    "emote": "🌸",
    "name": "Cherry Blossom",
    "cat": "animals-emoji",
    "tags": [
      "sakura",
      "flower",
      "pink",
      "spring"
    ],
    "type": "emoji"
  },
  {
    "emote": "💮",
    "name": "White Flower",
    "cat": "animals-emoji",
    "tags": [
      "flower",
      "japan"
    ],
    "type": "emoji"
  },
  {
    "emote": "🌻",
    "name": "Sunflower",
    "cat": "animals-emoji",
    "tags": [
      "summer",
      "sun"
    ],
    "type": "emoji"
  },
  {
    "emote": "🌼",
    "name": "Blossom",
    "cat": "animals-emoji",
    "tags": [
      "yellow flower",
      "daisy"
    ],
    "type": "emoji"
  },
  {
    "emote": "🌷",
    "name": "Tulip",
    "cat": "animals-emoji",
    "tags": [
      "tulip",
      "garden"
    ],
    "type": "emoji"
  },
  {
    "emote": "🌱",
    "name": "Seedling",
    "cat": "animals-emoji",
    "tags": [
      "sprout",
      "grow",
      "plant"
    ],
    "type": "emoji"
  },
  {
    "emote": "🌲",
    "name": "Evergreen Tree",
    "cat": "animals-emoji",
    "tags": [
      "pine",
      "christmas",
      "forest"
    ],
    "type": "emoji"
  },
  {
    "emote": "🌴",
    "name": "Palm Tree",
    "cat": "animals-emoji",
    "tags": [
      "tropical",
      "beach",
      "summer"
    ],
    "type": "emoji"
  },
  {
    "emote": "🌵",
    "name": "Cactus",
    "cat": "animals-emoji",
    "tags": [
      "desert",
      "spiky"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍀",
    "name": "Four Leaf Clover",
    "cat": "animals-emoji",
    "tags": [
      "lucky",
      "irish",
      "st patrick"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍁",
    "name": "Maple Leaf",
    "cat": "animals-emoji",
    "tags": [
      "autumn",
      "canada",
      "fall"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍂",
    "name": "Fallen Leaf",
    "cat": "animals-emoji",
    "tags": [
      "leaves",
      "breeze",
      "autumn"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍏",
    "name": "Green Apple",
    "cat": "food",
    "tags": [
      "fruit",
      "healthy"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍎",
    "name": "Red Apple",
    "cat": "food",
    "tags": [
      "apple",
      "fruit"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍐",
    "name": "Pear",
    "cat": "food",
    "tags": [
      "pear",
      "fruit"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍊",
    "name": "Tangerine",
    "cat": "food",
    "tags": [
      "orange",
      "citrus"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍋",
    "name": "Lemon",
    "cat": "food",
    "tags": [
      "sour",
      "citrus"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍌",
    "name": "Banana",
    "cat": "food",
    "tags": [
      "banana",
      "potassium"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍉",
    "name": "Watermelon",
    "cat": "food",
    "tags": [
      "summer",
      "melon"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍇",
    "name": "Grapes",
    "cat": "food",
    "tags": [
      "grapes",
      "wine"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍓",
    "name": "Strawberry",
    "cat": "food",
    "tags": [
      "berry",
      "sweet"
    ],
    "type": "emoji"
  },
  {
    "emote": "🫐",
    "name": "Blueberries",
    "cat": "food",
    "tags": [
      "blueberry"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍒",
    "name": "Cherries",
    "cat": "food",
    "tags": [
      "cherry",
      "twin"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍑",
    "name": "Peach",
    "cat": "food",
    "tags": [
      "peach",
      "butt"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥭",
    "name": "Mango",
    "cat": "food",
    "tags": [
      "tropical",
      "sweet"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍍",
    "name": "Pineapple",
    "cat": "food",
    "tags": [
      "tropical",
      "hawaii"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥥",
    "name": "Coconut",
    "cat": "food",
    "tags": [
      "coconut",
      "island"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥑",
    "name": "Avocado",
    "cat": "food",
    "tags": [
      "guacamole",
      "toast"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍆",
    "name": "Eggplant",
    "cat": "food",
    "tags": [
      "aubergine"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥔",
    "name": "Potato",
    "cat": "food",
    "tags": [
      "spud",
      "fries"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥕",
    "name": "Carrot",
    "cat": "food",
    "tags": [
      "vegetable",
      "rabbit"
    ],
    "type": "emoji"
  },
  {
    "emote": "🌽",
    "name": "Ear of Corn",
    "cat": "food",
    "tags": [
      "popcorn",
      "maize"
    ],
    "type": "emoji"
  },
  {
    "emote": "🌶️",
    "name": "Hot Pepper",
    "cat": "food",
    "tags": [
      "spicy",
      "chili",
      "hot"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍄",
    "name": "Mushroom",
    "cat": "food",
    "tags": [
      "toadstool",
      "mario"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍞",
    "name": "Bread",
    "cat": "food",
    "tags": [
      "toast",
      "loaf",
      "bakery"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥐",
    "name": "Croissant",
    "cat": "food",
    "tags": [
      "french",
      "pastry"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥖",
    "name": "Baguette Bread",
    "cat": "food",
    "tags": [
      "french",
      "bread"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥨",
    "name": "Pretzel",
    "cat": "food",
    "tags": [
      "salty",
      "snack"
    ],
    "type": "emoji"
  },
  {
    "emote": "🧀",
    "name": "Cheese Wedge",
    "cat": "food",
    "tags": [
      "cheese",
      "cheddar"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍖",
    "name": "Meat on Bone",
    "cat": "food",
    "tags": [
      "anime meat",
      "steak"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍗",
    "name": "Poultry Leg",
    "cat": "food",
    "tags": [
      "chicken",
      "drumstick"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥩",
    "name": "Cut of Meat",
    "cat": "food",
    "tags": [
      "steak",
      "beef",
      "raw"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥓",
    "name": "Bacon",
    "cat": "food",
    "tags": [
      "crispy",
      "pork",
      "breakfast"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍔",
    "name": "Hamburger",
    "cat": "food",
    "tags": [
      "burger",
      "cheeseburger",
      "fast food"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍟",
    "name": "French Fries",
    "cat": "food",
    "tags": [
      "chips",
      "fast food"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍕",
    "name": "Pizza",
    "cat": "food",
    "tags": [
      "slice",
      "pepperoni",
      "cheese"
    ],
    "type": "emoji"
  },
  {
    "emote": "🌭",
    "name": "Hot Dog",
    "cat": "food",
    "tags": [
      "frankfurter",
      "sausage"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥪",
    "name": "Sandwich",
    "cat": "food",
    "tags": [
      "lunch",
      "sub"
    ],
    "type": "emoji"
  },
  {
    "emote": "🌮",
    "name": "Taco",
    "cat": "food",
    "tags": [
      "mexican",
      "taco tuesday"
    ],
    "type": "emoji"
  },
  {
    "emote": "🌯",
    "name": "Burrito",
    "cat": "food",
    "tags": [
      "wrap",
      "mexican"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍳",
    "name": "Cooking (Fried Egg)",
    "cat": "food",
    "tags": [
      "egg",
      "breakfast",
      "skillet"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍿",
    "name": "Popcorn",
    "cat": "food",
    "tags": [
      "movie",
      "cinema",
      "snack"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥞",
    "name": "Pancakes",
    "cat": "food",
    "tags": [
      "syrup",
      "breakfast"
    ],
    "type": "emoji"
  },
  {
    "emote": "🧇",
    "name": "Waffle",
    "cat": "food",
    "tags": [
      "belgian",
      "breakfast"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍝",
    "name": "Spaghetti",
    "cat": "food",
    "tags": [
      "pasta",
      "italian",
      "noodles"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍜",
    "name": "Steaming Bowl (Ramen)",
    "cat": "food",
    "tags": [
      "ramen",
      "noodles",
      "soup"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍲",
    "name": "Pot of Food (Stew)",
    "cat": "food",
    "tags": [
      "stew",
      "hot pot"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍛",
    "name": "Curry Rice",
    "cat": "food",
    "tags": [
      "curry",
      "indian",
      "japanese"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍣",
    "name": "Sushi",
    "cat": "food",
    "tags": [
      "sashimi",
      "japanese",
      "salmon"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍱",
    "name": "Bento Box",
    "cat": "food",
    "tags": [
      "japanese lunch",
      "box"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥟",
    "name": "Dumpling",
    "cat": "food",
    "tags": [
      "gyoza",
      "dim sum"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍤",
    "name": "Fried Shrimp (Tempura)",
    "cat": "food",
    "tags": [
      "tempura",
      "seafood"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍙",
    "name": "Rice Ball (Onigiri)",
    "cat": "food",
    "tags": [
      "onigiri",
      "seaweed"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍚",
    "name": "Cooked Rice",
    "cat": "food",
    "tags": [
      "bowl of rice"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍦",
    "name": "Soft Ice Cream",
    "cat": "food",
    "tags": [
      "cone",
      "vanilla"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍧",
    "name": "Shaved Ice",
    "cat": "food",
    "tags": [
      "snow cone",
      "dessert"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍨",
    "name": "Ice Cream",
    "cat": "food",
    "tags": [
      "sundae",
      "scoop"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍩",
    "name": "Doughnut",
    "cat": "food",
    "tags": [
      "donut",
      "glazed",
      "sprinkles"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍪",
    "name": "Cookie",
    "cat": "food",
    "tags": [
      "chocolate chip",
      "biscuit"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎂",
    "name": "Birthday Cake",
    "cat": "food",
    "tags": [
      "cake",
      "candles",
      "celebration"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍰",
    "name": "Shortcake",
    "cat": "food",
    "tags": [
      "strawberry cake",
      "dessert"
    ],
    "type": "emoji"
  },
  {
    "emote": "🧁",
    "name": "Cupcake",
    "cat": "food",
    "tags": [
      "icing",
      "muffin"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥧",
    "name": "Pie",
    "cat": "food",
    "tags": [
      "apple pie",
      "baking"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍫",
    "name": "Chocolate Bar",
    "cat": "food",
    "tags": [
      "candy",
      "sweet"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍬",
    "name": "Candy",
    "cat": "food",
    "tags": [
      "sweet",
      "wrapper"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍭",
    "name": "Lollipop",
    "cat": "food",
    "tags": [
      "sucker",
      "sugar"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍮",
    "name": "Custard (Flan)",
    "cat": "food",
    "tags": [
      "pudding",
      "caramel"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍯",
    "name": "Honey Pot",
    "cat": "food",
    "tags": [
      "sweet",
      "pooh"
    ],
    "type": "emoji"
  },
  {
    "emote": "☕",
    "name": "Hot Beverage (Coffee)",
    "cat": "food",
    "tags": [
      "coffee",
      "tea",
      "espresso",
      "cafe"
    ],
    "type": "emoji"
  },
  {
    "emote": "🫖",
    "name": "Teapot",
    "cat": "food",
    "tags": [
      "tea",
      "afternoon"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍵",
    "name": "Teacup Without Handle (Matcha)",
    "cat": "food",
    "tags": [
      "green tea",
      "matcha"
    ],
    "type": "emoji"
  },
  {
    "emote": "🧃",
    "name": "Beverage Box (Juice)",
    "cat": "food",
    "tags": [
      "juice box",
      "straw"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥤",
    "name": "Cup with Straw",
    "cat": "food",
    "tags": [
      "soda",
      "slurpee",
      "drink"
    ],
    "type": "emoji"
  },
  {
    "emote": "🧋",
    "name": "Bubble Tea (Boba)",
    "cat": "food",
    "tags": [
      "boba",
      "tapioca",
      "milk tea"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍶",
    "name": "Sake",
    "cat": "food",
    "tags": [
      "rice wine",
      "bottle"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍺",
    "name": "Beer Mug",
    "cat": "food",
    "tags": [
      "beer",
      "pub",
      "alcohol"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍻",
    "name": "Clinking Beer Mugs",
    "cat": "food",
    "tags": [
      "cheers",
      "toast",
      "party"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥂",
    "name": "Clinking Glasses (Champagne)",
    "cat": "food",
    "tags": [
      "celebrate",
      "toast",
      "new year"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍷",
    "name": "Wine Glass",
    "cat": "food",
    "tags": [
      "red wine",
      "dinner"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍸",
    "name": "Cocktail Glass",
    "cat": "food",
    "tags": [
      "martini",
      "olive"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍹",
    "name": "Tropical Drink",
    "cat": "food",
    "tags": [
      "cocktail",
      "tiki",
      "vacation"
    ],
    "type": "emoji"
  },
  {
    "emote": "🍾",
    "name": "Bottle with Popping Cork",
    "cat": "food",
    "tags": [
      "champagne",
      "celebration"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎮",
    "name": "Video Game Controller",
    "cat": "gaming",
    "tags": [
      "game",
      "playstation",
      "xbox",
      "gamer"
    ],
    "type": "emoji"
  },
  {
    "emote": "🕹️",
    "name": "Joystick",
    "cat": "gaming",
    "tags": [
      "arcade",
      "retro gaming"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎲",
    "name": "Game Die",
    "cat": "gaming",
    "tags": [
      "dice",
      "roll",
      "tabletop",
      "dnd",
      "chance"
    ],
    "type": "emoji"
  },
  {
    "emote": "♟️",
    "name": "Chess Pawn",
    "cat": "gaming",
    "tags": [
      "chess",
      "strategy"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎯",
    "name": "Direct Hit (Bullseye / Darts)",
    "cat": "gaming",
    "tags": [
      "target",
      "goal",
      "accurate"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎳",
    "name": "Bowling",
    "cat": "gaming",
    "tags": [
      "strike",
      "pins"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎰",
    "name": "Slot Machine",
    "cat": "gaming",
    "tags": [
      "casino",
      "jackpot",
      "777",
      "gamble"
    ],
    "type": "emoji"
  },
  {
    "emote": "🧩",
    "name": "Puzzle Piece",
    "cat": "gaming",
    "tags": [
      "puzzle",
      "jigsaw",
      "fit"
    ],
    "type": "emoji"
  },
  {
    "emote": "🏆",
    "name": "Trophy",
    "cat": "gaming",
    "tags": [
      "winner",
      "champion",
      "first place",
      "gold"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥇",
    "name": "1st Place Medal",
    "cat": "gaming",
    "tags": [
      "gold medal",
      "winner"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥈",
    "name": "2nd Place Medal",
    "cat": "gaming",
    "tags": [
      "silver medal"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥉",
    "name": "3rd Place Medal",
    "cat": "gaming",
    "tags": [
      "bronze medal"
    ],
    "type": "emoji"
  },
  {
    "emote": "⚽",
    "name": "Soccer Ball",
    "cat": "gaming",
    "tags": [
      "football",
      "fifa",
      "sports"
    ],
    "type": "emoji"
  },
  {
    "emote": "🏀",
    "name": "Basketball",
    "cat": "gaming",
    "tags": [
      "hoop",
      "nba"
    ],
    "type": "emoji"
  },
  {
    "emote": "🏈",
    "name": "American Football",
    "cat": "gaming",
    "tags": [
      "nfl",
      "touchdown"
    ],
    "type": "emoji"
  },
  {
    "emote": "⚾",
    "name": "Baseball",
    "cat": "gaming",
    "tags": [
      "mlb",
      "homerun"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎾",
    "name": "Tennis",
    "cat": "gaming",
    "tags": [
      "racket",
      "court"
    ],
    "type": "emoji"
  },
  {
    "emote": "🏐",
    "name": "Volleyball",
    "cat": "gaming",
    "tags": [
      "beach volley"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎱",
    "name": "Pool 8 Ball",
    "cat": "gaming",
    "tags": [
      "billiards",
      "pool",
      "eight ball"
    ],
    "type": "emoji"
  },
  {
    "emote": "🏓",
    "name": "Ping Pong",
    "cat": "gaming",
    "tags": [
      "table tennis"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥊",
    "name": "Boxing Glove",
    "cat": "gaming",
    "tags": [
      "fight",
      "punch",
      "knockout"
    ],
    "type": "emoji"
  },
  {
    "emote": "🛹",
    "name": "Skateboard",
    "cat": "gaming",
    "tags": [
      "skate",
      "ollie",
      "kickflip"
    ],
    "type": "emoji"
  },
  {
    "emote": "🚴",
    "name": "Person Biking",
    "cat": "gaming",
    "tags": [
      "bicycle",
      "cycling"
    ],
    "type": "emoji"
  },
  {
    "emote": "🏋️",
    "name": "Person Lifting Weights",
    "cat": "gaming",
    "tags": [
      "gym",
      "workout",
      "weights"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎨",
    "name": "Artist Palette",
    "cat": "gaming",
    "tags": [
      "art",
      "paint",
      "design",
      "creative"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎬",
    "name": "Clapper Board",
    "cat": "gaming",
    "tags": [
      "movie",
      "film",
      "cinema",
      "action"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎤",
    "name": "Microphone",
    "cat": "gaming",
    "tags": [
      "sing",
      "karaoke",
      "podcast"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎧",
    "name": "Headphone",
    "cat": "gaming",
    "tags": [
      "music",
      "audio",
      "listen"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎹",
    "name": "Musical Keyboard (Piano)",
    "cat": "gaming",
    "tags": [
      "piano",
      "music",
      "keys"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎸",
    "name": "Guitar",
    "cat": "gaming",
    "tags": [
      "rock",
      "acoustic",
      "electric"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎺",
    "name": "Trumpet",
    "cat": "gaming",
    "tags": [
      "brass",
      "jazz"
    ],
    "type": "emoji"
  },
  {
    "emote": "🥁",
    "name": "Drum",
    "cat": "gaming",
    "tags": [
      "beat",
      "percussion"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎪",
    "name": "Circus Tent",
    "cat": "gaming",
    "tags": [
      "carnival",
      "fair"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎭",
    "name": "Performing Arts",
    "cat": "gaming",
    "tags": [
      "theater",
      "drama",
      "masks"
    ],
    "type": "emoji"
  },
  {
    "emote": "🚗",
    "name": "Automobile (Car)",
    "cat": "travel",
    "tags": [
      "car",
      "drive",
      "road"
    ],
    "type": "emoji"
  },
  {
    "emote": "🏎️",
    "name": "Racing Car",
    "cat": "travel",
    "tags": [
      "f1",
      "speed",
      "fast"
    ],
    "type": "emoji"
  },
  {
    "emote": "🚓",
    "name": "Police Car",
    "cat": "travel",
    "tags": [
      "cops",
      "siren"
    ],
    "type": "emoji"
  },
  {
    "emote": "🚑",
    "name": "Ambulance",
    "cat": "travel",
    "tags": [
      "hospital",
      "emergency"
    ],
    "type": "emoji"
  },
  {
    "emote": "🚒",
    "name": "Fire Engine",
    "cat": "travel",
    "tags": [
      "fire truck",
      "emergency"
    ],
    "type": "emoji"
  },
  {
    "emote": "🚕",
    "name": "Taxi",
    "cat": "travel",
    "tags": [
      "cab",
      "uber"
    ],
    "type": "emoji"
  },
  {
    "emote": "🚌",
    "name": "Bus",
    "cat": "travel",
    "tags": [
      "transit",
      "public"
    ],
    "type": "emoji"
  },
  {
    "emote": "🚚",
    "name": "Delivery Truck",
    "cat": "travel",
    "tags": [
      "amazon",
      "shipping",
      "package"
    ],
    "type": "emoji"
  },
  {
    "emote": "🚜",
    "name": "Tractor",
    "cat": "travel",
    "tags": [
      "farm",
      "field"
    ],
    "type": "emoji"
  },
  {
    "emote": "🛴",
    "name": "Kick Scooter",
    "cat": "travel",
    "tags": [
      "scooter"
    ],
    "type": "emoji"
  },
  {
    "emote": "🚲",
    "name": "Bicycle",
    "cat": "travel",
    "tags": [
      "bike",
      "eco"
    ],
    "type": "emoji"
  },
  {
    "emote": "🛵",
    "name": "Motor Scooter",
    "cat": "travel",
    "tags": [
      "vespa",
      "moped"
    ],
    "type": "emoji"
  },
  {
    "emote": "🏍️",
    "name": "Motorcycle",
    "cat": "travel",
    "tags": [
      "biker",
      "harley"
    ],
    "type": "emoji"
  },
  {
    "emote": "🚨",
    "name": "Police Car Light",
    "cat": "travel",
    "tags": [
      "alarm",
      "alert",
      "warning",
      "emergency"
    ],
    "type": "emoji"
  },
  {
    "emote": "🚄",
    "name": "High-Speed Train (Bullet)",
    "cat": "travel",
    "tags": [
      "shinkansen",
      "fast"
    ],
    "type": "emoji"
  },
  {
    "emote": "✈️",
    "name": "Airplane",
    "cat": "travel",
    "tags": [
      "flight",
      "vacation",
      "travel"
    ],
    "type": "emoji"
  },
  {
    "emote": "🛫",
    "name": "Airplane Departure",
    "cat": "travel",
    "tags": [
      "takeoff",
      "flying"
    ],
    "type": "emoji"
  },
  {
    "emote": "🛬",
    "name": "Airplane Arrival",
    "cat": "travel",
    "tags": [
      "landing"
    ],
    "type": "emoji"
  },
  {
    "emote": "🚀",
    "name": "Rocket",
    "cat": "travel",
    "tags": [
      "space",
      "moon",
      "launch",
      "to the moon"
    ],
    "type": "emoji"
  },
  {
    "emote": "🛸",
    "name": "Flying Saucer",
    "cat": "travel",
    "tags": [
      "ufo",
      "alien",
      "spaceship"
    ],
    "type": "emoji"
  },
  {
    "emote": "🚁",
    "name": "Helicopter",
    "cat": "travel",
    "tags": [
      "copter",
      "chopper"
    ],
    "type": "emoji"
  },
  {
    "emote": "🛶",
    "name": "Canoe",
    "cat": "travel",
    "tags": [
      "boat",
      "paddle",
      "lake"
    ],
    "type": "emoji"
  },
  {
    "emote": "⛵",
    "name": "Sailboat",
    "cat": "travel",
    "tags": [
      "yacht",
      "sailing",
      "sea"
    ],
    "type": "emoji"
  },
  {
    "emote": "🚤",
    "name": "Speedboat",
    "cat": "travel",
    "tags": [
      "fast boat"
    ],
    "type": "emoji"
  },
  {
    "emote": "🛳️",
    "name": "Passenger Ship (Cruise)",
    "cat": "travel",
    "tags": [
      "cruise",
      "vacation"
    ],
    "type": "emoji"
  },
  {
    "emote": "⚓",
    "name": "Anchor",
    "cat": "travel",
    "tags": [
      "navy",
      "nautical",
      "harbor"
    ],
    "type": "emoji"
  },
  {
    "emote": "⛽",
    "name": "Fuel Pump",
    "cat": "travel",
    "tags": [
      "gas",
      "petrol"
    ],
    "type": "emoji"
  },
  {
    "emote": "🗽",
    "name": "Statue of Liberty",
    "cat": "travel",
    "tags": [
      "new york",
      "usa"
    ],
    "type": "emoji"
  },
  {
    "emote": "🗼",
    "name": "Tokyo Tower",
    "cat": "travel",
    "tags": [
      "japan",
      "tower"
    ],
    "type": "emoji"
  },
  {
    "emote": "🏰",
    "name": "Castle",
    "cat": "travel",
    "tags": [
      "disney",
      "fairytale",
      "kingdom"
    ],
    "type": "emoji"
  },
  {
    "emote": "🏟️",
    "name": "Stadium",
    "cat": "travel",
    "tags": [
      "arena",
      "sports",
      "concert"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎡",
    "name": "Ferris Wheel",
    "cat": "travel",
    "tags": [
      "amusement park",
      "fair"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎢",
    "name": "Roller Coaster",
    "cat": "travel",
    "tags": [
      "theme park",
      "thrill"
    ],
    "type": "emoji"
  },
  {
    "emote": "🏖️",
    "name": "Beach with Umbrella",
    "cat": "travel",
    "tags": [
      "vacation",
      "summer",
      "ocean"
    ],
    "type": "emoji"
  },
  {
    "emote": "🏝️",
    "name": "Desert Island",
    "cat": "travel",
    "tags": [
      "isolated",
      "tropical"
    ],
    "type": "emoji"
  },
  {
    "emote": "🌋",
    "name": "Volcano",
    "cat": "travel",
    "tags": [
      "lava",
      "eruption"
    ],
    "type": "emoji"
  },
  {
    "emote": "⛰️",
    "name": "Mountain",
    "cat": "travel",
    "tags": [
      "climb",
      "nature"
    ],
    "type": "emoji"
  },
  {
    "emote": "🏕️",
    "name": "Camping",
    "cat": "travel",
    "tags": [
      "tent",
      "woods",
      "campfire"
    ],
    "type": "emoji"
  },
  {
    "emote": "🏠",
    "name": "House",
    "cat": "travel",
    "tags": [
      "home",
      "building"
    ],
    "type": "emoji"
  },
  {
    "emote": "🏢",
    "name": "Office Building",
    "cat": "travel",
    "tags": [
      "work",
      "city"
    ],
    "type": "emoji"
  },
  {
    "emote": "⌚",
    "name": "Watch",
    "cat": "objects",
    "tags": [
      "time",
      "apple watch",
      "clock"
    ],
    "type": "emoji"
  },
  {
    "emote": "📱",
    "name": "Mobile Phone",
    "cat": "objects",
    "tags": [
      "iphone",
      "smartphone",
      "cell"
    ],
    "type": "emoji"
  },
  {
    "emote": "📲",
    "name": "Mobile Phone with Arrow",
    "cat": "objects",
    "tags": [
      "call",
      "text",
      "incoming"
    ],
    "type": "emoji"
  },
  {
    "emote": "💻",
    "name": "Laptop",
    "cat": "objects",
    "tags": [
      "computer",
      "macbook",
      "coding",
      "tech"
    ],
    "type": "emoji"
  },
  {
    "emote": "⌨️",
    "name": "Keyboard",
    "cat": "objects",
    "tags": [
      "typing",
      "mechanical",
      "pc"
    ],
    "type": "emoji"
  },
  {
    "emote": "🖥️",
    "name": "Desktop Computer",
    "cat": "objects",
    "tags": [
      "monitor",
      "screen"
    ],
    "type": "emoji"
  },
  {
    "emote": "🖨️",
    "name": "Printer",
    "cat": "objects",
    "tags": [
      "paper",
      "office"
    ],
    "type": "emoji"
  },
  {
    "emote": "🖱️",
    "name": "Computer Mouse",
    "cat": "objects",
    "tags": [
      "click",
      "hardware"
    ],
    "type": "emoji"
  },
  {
    "emote": "📷",
    "name": "Camera",
    "cat": "objects",
    "tags": [
      "photo",
      "picture",
      "snap"
    ],
    "type": "emoji"
  },
  {
    "emote": "📸",
    "name": "Camera with Flash",
    "cat": "objects",
    "tags": [
      "photography",
      "flash"
    ],
    "type": "emoji"
  },
  {
    "emote": "📹",
    "name": "Video Camera",
    "cat": "objects",
    "tags": [
      "recording",
      "youtube"
    ],
    "type": "emoji"
  },
  {
    "emote": "📺",
    "name": "Television",
    "cat": "objects",
    "tags": [
      "tv",
      "screen",
      "stream"
    ],
    "type": "emoji"
  },
  {
    "emote": "📻",
    "name": "Radio",
    "cat": "objects",
    "tags": [
      "broadcast",
      "tunes"
    ],
    "type": "emoji"
  },
  {
    "emote": "⏰",
    "name": "Alarm Clock",
    "cat": "objects",
    "tags": [
      "wake up",
      "morning",
      "bell"
    ],
    "type": "emoji"
  },
  {
    "emote": "⏳",
    "name": "Hourglass Done",
    "cat": "objects",
    "tags": [
      "time",
      "waiting",
      "sand"
    ],
    "type": "emoji"
  },
  {
    "emote": "⌛",
    "name": "Hourglass Not Done",
    "cat": "objects",
    "tags": [
      "loading",
      "wait"
    ],
    "type": "emoji"
  },
  {
    "emote": "🔋",
    "name": "Battery",
    "cat": "objects",
    "tags": [
      "charge",
      "energy",
      "full"
    ],
    "type": "emoji"
  },
  {
    "emote": "🪫",
    "name": "Low Battery",
    "cat": "objects",
    "tags": [
      "dying",
      "empty",
      "recharge"
    ],
    "type": "emoji"
  },
  {
    "emote": "🔌",
    "name": "Electric Plug",
    "cat": "objects",
    "tags": [
      "power",
      "cord"
    ],
    "type": "emoji"
  },
  {
    "emote": "💡",
    "name": "Light Bulb",
    "cat": "objects",
    "tags": [
      "idea",
      "bright",
      "smart",
      "eureka"
    ],
    "type": "emoji"
  },
  {
    "emote": "🔦",
    "name": "Flashlight",
    "cat": "objects",
    "tags": [
      "torch",
      "dark",
      "light"
    ],
    "type": "emoji"
  },
  {
    "emote": "💸",
    "name": "Money with Wings",
    "cat": "objects",
    "tags": [
      "spent",
      "flying away",
      "cash"
    ],
    "type": "emoji"
  },
  {
    "emote": "💵",
    "name": "Dollar Banknote",
    "cat": "objects",
    "tags": [
      "cash",
      "currency",
      "usd"
    ],
    "type": "emoji"
  },
  {
    "emote": "💰",
    "name": "Money Bag",
    "cat": "objects",
    "tags": [
      "rich",
      "wealth",
      "loot"
    ],
    "type": "emoji"
  },
  {
    "emote": "💳",
    "name": "Credit Card",
    "cat": "objects",
    "tags": [
      "pay",
      "visa",
      "mastercard"
    ],
    "type": "emoji"
  },
  {
    "emote": "💎",
    "name": "Gem Stone (Diamond)",
    "cat": "objects",
    "tags": [
      "diamond",
      "jewel",
      "precious",
      "rare"
    ],
    "type": "emoji"
  },
  {
    "emote": "⚖️",
    "name": "Balance Scale",
    "cat": "objects",
    "tags": [
      "justice",
      "law",
      "equal"
    ],
    "type": "emoji"
  },
  {
    "emote": "🔧",
    "name": "Wrench",
    "cat": "objects",
    "tags": [
      "fix",
      "settings",
      "tool"
    ],
    "type": "emoji"
  },
  {
    "emote": "🔨",
    "name": "Hammer",
    "cat": "objects",
    "tags": [
      "build",
      "repair",
      "craft"
    ],
    "type": "emoji"
  },
  {
    "emote": "🛠️",
    "name": "Hammer and Wrench",
    "cat": "objects",
    "tags": [
      "tools",
      "developer",
      "settings"
    ],
    "type": "emoji"
  },
  {
    "emote": "⚙️",
    "name": "Gear",
    "cat": "objects",
    "tags": [
      "settings",
      "config",
      "cog",
      "options"
    ],
    "type": "emoji"
  },
  {
    "emote": "💣",
    "name": "Bomb",
    "cat": "objects",
    "tags": [
      "explode",
      "danger",
      "boom"
    ],
    "type": "emoji"
  },
  {
    "emote": "🧨",
    "name": "Firecracker (Dynamite)",
    "cat": "objects",
    "tags": [
      "explosive",
      "tnt"
    ],
    "type": "emoji"
  },
  {
    "emote": "🔪",
    "name": "Kitchen Knife",
    "cat": "objects",
    "tags": [
      "blade",
      "cook",
      "stab"
    ],
    "type": "emoji"
  },
  {
    "emote": "🗡️",
    "name": "Dagger",
    "cat": "objects",
    "tags": [
      "knife",
      "weapon",
      "rpg"
    ],
    "type": "emoji"
  },
  {
    "emote": "⚔️",
    "name": "Crossed Swords",
    "cat": "objects",
    "tags": [
      "battle",
      "fight",
      "rpg",
      "pvp"
    ],
    "type": "emoji"
  },
  {
    "emote": "🛡️",
    "name": "Shield",
    "cat": "objects",
    "tags": [
      "defense",
      "protect",
      "armor"
    ],
    "type": "emoji"
  },
  {
    "emote": "🔮",
    "name": "Crystal Ball",
    "cat": "objects",
    "tags": [
      "fortune",
      "magic",
      "future"
    ],
    "type": "emoji"
  },
  {
    "emote": "💊",
    "name": "Pill",
    "cat": "objects",
    "tags": [
      "medicine",
      "red pill",
      "drug"
    ],
    "type": "emoji"
  },
  {
    "emote": "💉",
    "name": "Syringe",
    "cat": "objects",
    "tags": [
      "vaccine",
      "shot",
      "doctor"
    ],
    "type": "emoji"
  },
  {
    "emote": "🧬",
    "name": "DNA",
    "cat": "objects",
    "tags": [
      "genetics",
      "science",
      "biology"
    ],
    "type": "emoji"
  },
  {
    "emote": "🔬",
    "name": "Microscope",
    "cat": "objects",
    "tags": [
      "science",
      "research",
      "lab"
    ],
    "type": "emoji"
  },
  {
    "emote": "🔭",
    "name": "Telescope",
    "cat": "objects",
    "tags": [
      "astronomy",
      "stars",
      "space"
    ],
    "type": "emoji"
  },
  {
    "emote": "🔑",
    "name": "Key",
    "cat": "objects",
    "tags": [
      "unlock",
      "password",
      "access",
      "secret"
    ],
    "type": "emoji"
  },
  {
    "emote": "🗝️",
    "name": "Old Key",
    "cat": "objects",
    "tags": [
      "vintage",
      "treasure"
    ],
    "type": "emoji"
  },
  {
    "emote": "🚪",
    "name": "Door",
    "cat": "objects",
    "tags": [
      "exit",
      "enter",
      "room"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎁",
    "name": "Wrapped Gift",
    "cat": "objects",
    "tags": [
      "present",
      "birthday",
      "christmas"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎈",
    "name": "Balloon",
    "cat": "objects",
    "tags": [
      "party",
      "red balloon",
      "it"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎉",
    "name": "Party Popper",
    "cat": "objects",
    "tags": [
      "congrats",
      "tada",
      "celebrate"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎊",
    "name": "Confetti Ball",
    "cat": "objects",
    "tags": [
      "party",
      "new year",
      "festive"
    ],
    "type": "emoji"
  },
  {
    "emote": "🪄",
    "name": "Magic Wand",
    "cat": "objects",
    "tags": [
      "magic",
      "wizard",
      "sorcery"
    ],
    "type": "emoji"
  },
  {
    "emote": "✨",
    "name": "Sparkles",
    "cat": "symbols",
    "tags": [
      "sparkle",
      "shine",
      "clean",
      "magic",
      "ai"
    ],
    "type": "emoji"
  },
  {
    "emote": "🔥",
    "name": "Fire",
    "cat": "symbols",
    "tags": [
      "hot",
      "lit",
      "flame",
      "trending"
    ],
    "type": "emoji"
  },
  {
    "emote": "💥",
    "name": "Collision (Boom)",
    "cat": "symbols",
    "tags": [
      "explosion",
      "bang",
      "impact"
    ],
    "type": "emoji"
  },
  {
    "emote": "⚡",
    "name": "High Voltage (Lightning Bolt)",
    "cat": "symbols",
    "tags": [
      "flash",
      "electricity",
      "fast",
      "zap"
    ],
    "type": "emoji"
  },
  {
    "emote": "💯",
    "name": "Hundred Points",
    "cat": "symbols",
    "tags": [
      "100",
      "perfect",
      "keep it real"
    ],
    "type": "emoji"
  },
  {
    "emote": "💢",
    "name": "Anger Symbol",
    "cat": "symbols",
    "tags": [
      "anime anger",
      "vein"
    ],
    "type": "emoji"
  },
  {
    "emote": "💫",
    "name": "Dizzy Star",
    "cat": "symbols",
    "tags": [
      "stars",
      "magic"
    ],
    "type": "emoji"
  },
  {
    "emote": "💨",
    "name": "Dashing Away",
    "cat": "symbols",
    "tags": [
      "fast",
      "wind",
      "fart",
      "run"
    ],
    "type": "emoji"
  },
  {
    "emote": "💤",
    "name": "Zzz Sleep Symbol",
    "cat": "symbols",
    "tags": [
      "sleep",
      "tired",
      "dream"
    ],
    "type": "emoji"
  },
  {
    "emote": "💬",
    "name": "Speech Balloon",
    "cat": "symbols",
    "tags": [
      "chat",
      "message",
      "talk"
    ],
    "type": "emoji"
  },
  {
    "emote": "👁️‍🗨️",
    "name": "Eye in Speech Bubble",
    "cat": "symbols",
    "tags": [
      "witness",
      "anti-bullying"
    ],
    "type": "emoji"
  },
  {
    "emote": "💭",
    "name": "Thought Balloon",
    "cat": "symbols",
    "tags": [
      "thinking",
      "cloud",
      "dream"
    ],
    "type": "emoji"
  },
  {
    "emote": "👑",
    "name": "Crown",
    "cat": "symbols",
    "tags": [
      "king",
      "queen",
      "royal",
      "vip",
      "leader"
    ],
    "type": "emoji"
  },
  {
    "emote": "⭐",
    "name": "Star",
    "cat": "symbols",
    "tags": [
      "favorite",
      "gold",
      "rating"
    ],
    "type": "emoji"
  },
  {
    "emote": "🌟",
    "name": "Glowing Star",
    "cat": "symbols",
    "tags": [
      "shine",
      "bright"
    ],
    "type": "emoji"
  },
  {
    "emote": "🌈",
    "name": "Rainbow",
    "cat": "symbols",
    "tags": [
      "pride",
      "color",
      "sky"
    ],
    "type": "emoji"
  },
  {
    "emote": "☀️",
    "name": "Sun",
    "cat": "symbols",
    "tags": [
      "sunny",
      "weather",
      "light"
    ],
    "type": "emoji"
  },
  {
    "emote": "🌙",
    "name": "Crescent Moon",
    "cat": "symbols",
    "tags": [
      "night",
      "sleep",
      "dark"
    ],
    "type": "emoji"
  },
  {
    "emote": "🪐",
    "name": "Ringed Planet (Saturn)",
    "cat": "symbols",
    "tags": [
      "space",
      "saturn",
      "galaxy"
    ],
    "type": "emoji"
  },
  {
    "emote": "❄️",
    "name": "Snowflake",
    "cat": "symbols",
    "tags": [
      "cold",
      "winter",
      "ice"
    ],
    "type": "emoji"
  },
  {
    "emote": "🌊",
    "name": "Water Wave",
    "cat": "symbols",
    "tags": [
      "tsunami",
      "ocean",
      "surf"
    ],
    "type": "emoji"
  },
  {
    "emote": "⚠️",
    "name": "Warning",
    "cat": "symbols",
    "tags": [
      "alert",
      "caution",
      "danger"
    ],
    "type": "emoji"
  },
  {
    "emote": "🛑",
    "name": "Stop Sign",
    "cat": "symbols",
    "tags": [
      "halt",
      "red octogon"
    ],
    "type": "emoji"
  },
  {
    "emote": "⛔",
    "name": "No Entry",
    "cat": "symbols",
    "tags": [
      "forbidden",
      "restricted"
    ],
    "type": "emoji"
  },
  {
    "emote": "🚫",
    "name": "Prohibited",
    "cat": "symbols",
    "tags": [
      "no",
      "banned"
    ],
    "type": "emoji"
  },
  {
    "emote": "✅",
    "name": "Check Mark Button",
    "cat": "symbols",
    "tags": [
      "correct",
      "done",
      "yes",
      "approved"
    ],
    "type": "emoji"
  },
  {
    "emote": "✔️",
    "name": "Check Mark",
    "cat": "symbols",
    "tags": [
      "done",
      "ok"
    ],
    "type": "emoji"
  },
  {
    "emote": "❌",
    "name": "Cross Mark",
    "cat": "symbols",
    "tags": [
      "x",
      "wrong",
      "cancel",
      "no"
    ],
    "type": "emoji"
  },
  {
    "emote": "❎",
    "name": "Cross Mark Button",
    "cat": "symbols",
    "tags": [
      "box x",
      "error"
    ],
    "type": "emoji"
  },
  {
    "emote": "❓",
    "name": "Question Mark",
    "cat": "symbols",
    "tags": [
      "what",
      "help",
      "confused"
    ],
    "type": "emoji"
  },
  {
    "emote": "❗",
    "name": "Exclamation Mark",
    "cat": "symbols",
    "tags": [
      "alert",
      "danger",
      "pay attention"
    ],
    "type": "emoji"
  },
  {
    "emote": "➕",
    "name": "Plus Sign",
    "cat": "symbols",
    "tags": [
      "add",
      "math"
    ],
    "type": "emoji"
  },
  {
    "emote": "➖",
    "name": "Minus Sign",
    "cat": "symbols",
    "tags": [
      "subtract",
      "remove"
    ],
    "type": "emoji"
  },
  {
    "emote": "➗",
    "name": "Division Sign",
    "cat": "symbols",
    "tags": [
      "divide"
    ],
    "type": "emoji"
  },
  {
    "emote": "✖️",
    "name": "Multiply Sign",
    "cat": "symbols",
    "tags": [
      "times"
    ],
    "type": "emoji"
  },
  {
    "emote": "♾️",
    "name": "Infinity",
    "cat": "symbols",
    "tags": [
      "forever",
      "endless"
    ],
    "type": "emoji"
  },
  {
    "emote": "♻️",
    "name": "Recycling Symbol",
    "cat": "symbols",
    "tags": [
      "eco",
      "green",
      "recycle"
    ],
    "type": "emoji"
  },
  {
    "emote": "🔔",
    "name": "Bell",
    "cat": "symbols",
    "tags": [
      "notification",
      "alert",
      "ring"
    ],
    "type": "emoji"
  },
  {
    "emote": "🔕",
    "name": "Bell with Slash (Mute)",
    "cat": "symbols",
    "tags": [
      "silent",
      "do not disturb"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎵",
    "name": "Musical Note",
    "cat": "symbols",
    "tags": [
      "melody",
      "music"
    ],
    "type": "emoji"
  },
  {
    "emote": "🎶",
    "name": "Musical Notes",
    "cat": "symbols",
    "tags": [
      "song",
      "tunes"
    ],
    "type": "emoji"
  },
  {
    "emote": "🚩",
    "name": "Triangular Flag (Red Flag)",
    "cat": "symbols",
    "tags": [
      "red flag",
      "warning"
    ],
    "type": "emoji"
  },
  {
    "emote": "🏁",
    "name": "Chequered Flag",
    "cat": "symbols",
    "tags": [
      "finish line",
      "race"
    ],
    "type": "emoji"
  },
  {
    "emote": "(✿◠‿◠)",
    "name": "Flower Smile",
    "cat": "joy",
    "tags": [
      "happy",
      "flower",
      "smile"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(｡◕‿◕｡)",
    "name": "Sparkle Eyes Smile",
    "cat": "joy",
    "tags": [
      "happy",
      "cute",
      "eyes"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(◕‿◕✿)",
    "name": "Blossom Smile",
    "cat": "joy",
    "tags": [
      "happy",
      "blossom"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "٩(◕‿◕｡)۶",
    "name": "Cheering Yay",
    "cat": "joy",
    "tags": [
      "cheer",
      "celebrate",
      "arms up"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(＾▽＾)",
    "name": "Classic Anime Smile",
    "cat": "joy",
    "tags": [
      "anime",
      "happy",
      "grin"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(◠‿◠✿)",
    "name": "Gentle Blossom",
    "cat": "joy",
    "tags": [
      "gentle",
      "smile"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
    "name": "Pure Excitement",
    "cat": "joy",
    "tags": [
      "joy",
      "magic",
      "excited"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(* ^ ω ^)",
    "name": "Warm Grin",
    "cat": "joy",
    "tags": [
      "warm",
      "smile"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(o^▽^o)",
    "name": "Wide Open Joy",
    "cat": "joy",
    "tags": [
      "wide",
      "laugh"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(´ ∀ ` *)",
    "name": "Bashful Delight",
    "cat": "joy",
    "tags": [
      "blush",
      "shy"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "＼(＾▽＾)／",
    "name": "Hurray Arms",
    "cat": "joy",
    "tags": [
      "hurray",
      "cheer"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(⌒▽⌒)☆",
    "name": "Star Joy",
    "cat": "joy",
    "tags": [
      "star",
      "delight"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "╰(▔∀▔)╯",
    "name": "Proud Joy",
    "cat": "joy",
    "tags": [
      "proud",
      "smile"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(✯◡✯)",
    "name": "Star Eyes Grin",
    "cat": "joy",
    "tags": [
      "star",
      "eyes",
      "grin"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(*≧ω≦*)",
    "name": "Giddy Squeeze",
    "cat": "joy",
    "tags": [
      "giddy",
      "excited"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(◕ᴗ◕✿)",
    "name": "Sweet Daisy Grin",
    "cat": "joy",
    "tags": [
      "daisy",
      "cute",
      "sweet"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "٩(ˊᗜˋ*)و",
    "name": "Energetic Cheer",
    "cat": "joy",
    "tags": [
      "energetic",
      "pumped",
      "yes"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(っ˘ڡ˘ς)",
    "name": "Yummy Delicious",
    "cat": "joy",
    "tags": [
      "yummy",
      "food",
      "tasty"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ʘ‿ʘ)",
    "name": "Happy Stare",
    "cat": "joy",
    "tags": [
      "stare",
      "smile"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(＾◡＾)っ",
    "name": "Offering Hand Smile",
    "cat": "joy",
    "tags": [
      "friendly",
      "reach"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(*¯︶¯*)",
    "name": "Content Smug Smile",
    "cat": "joy",
    "tags": [
      "content",
      "relaxed"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(*^▽^*)",
    "name": "Sunny Anime Grin",
    "cat": "joy",
    "tags": [
      "sunny",
      "laugh"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(*・∀・)爻(・∀・*)",
    "name": "High Five Buddies",
    "cat": "joy",
    "tags": [
      "high five",
      "friends"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(๑˃ᴗ˂)ﻭ",
    "name": "Victory Pump",
    "cat": "joy",
    "tags": [
      "victory",
      "success"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ᕕ( ᐛ )ᕗ",
    "name": "Happy Strut",
    "cat": "joy",
    "tags": [
      "strut",
      "walk",
      "derp"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ＾◡＾)",
    "name": "Simple Polite Smile",
    "cat": "joy",
    "tags": [
      "simple",
      "smile",
      "polite"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ´ ▽ ` )",
    "name": "Relieved Gentle Smile",
    "cat": "joy",
    "tags": [
      "relieved",
      "gentle"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(o˘◡˘o)",
    "name": "Peaceful Contentment",
    "cat": "joy",
    "tags": [
      "peaceful",
      "content"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ˙꒳​˙ )",
    "name": "Cute Blank Smile",
    "cat": "joy",
    "tags": [
      "cute",
      "derp"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(b^_^ )b",
    "name": "Thumbs Up Joy",
    "cat": "joy",
    "tags": [
      "thumbs up",
      "approve"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "d( ^_^ )b",
    "name": "Double Thumbs Up",
    "cat": "joy",
    "tags": [
      "thumbs up",
      "double"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(๑•̀ㅂ•́)و✧",
    "name": "Determined Sparkle",
    "cat": "joy",
    "tags": [
      "sparkle",
      "confidence"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(★^O^★)",
    "name": "Star Singing Laugh",
    "cat": "joy",
    "tags": [
      "sing",
      "star",
      "laugh"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ヽ(*・ω・)ﾉ",
    "name": "Cheery Anime Bounce",
    "cat": "joy",
    "tags": [
      "cheery",
      "bounce"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(´｡• ᵕ •｡`)",
    "name": "Sweet Anime Face",
    "cat": "joy",
    "tags": [
      "sweet",
      "kawaii"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "o(>ω<)o",
    "name": "Excited Squint",
    "cat": "joy",
    "tags": [
      "excited",
      "squint"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "＼(￣▽￣)／",
    "name": "Basking in Joy",
    "cat": "joy",
    "tags": [
      "basking",
      "sunny"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(♥ω♥*)",
    "name": "In Love Heart Eyes",
    "cat": "love",
    "tags": [
      "love",
      "heart",
      "kiss"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(✿ ♥‿♥)",
    "name": "Heart Blossom",
    "cat": "love",
    "tags": [
      "love",
      "sweet"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(♡´艸`)",
    "name": "Secret Crush Giggle",
    "cat": "love",
    "tags": [
      "crush",
      "giggle"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(灬♥ω♥灬)",
    "name": "Blushing Heart Love",
    "cat": "love",
    "tags": [
      "blush",
      "heart",
      "passion"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(´｡• ᵕ •｡`) ♡",
    "name": "Holding Heart",
    "cat": "love",
    "tags": [
      "cute",
      "holding heart"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(づ￣ ³￣)づ",
    "name": "Kiss Hug Reach",
    "cat": "love",
    "tags": [
      "kiss",
      "hug",
      "smooch"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(❤ω❤)",
    "name": "Double Heart Stare",
    "cat": "love",
    "tags": [
      "heart",
      "eyes"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(´ε｀ )♡",
    "name": "Sweet Kiss",
    "cat": "love",
    "tags": [
      "kiss",
      "love"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(♡˙︶˙♡)",
    "name": "Tender Hearts",
    "cat": "love",
    "tags": [
      "tender",
      "affection"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(*˘︶˘*).｡.:*♡",
    "name": "Dreamy Love",
    "cat": "love",
    "tags": [
      "dreamy",
      "clouds"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(づ｡◕‿‿◕｡)づ",
    "name": "Big Warm Hug",
    "cat": "love",
    "tags": [
      "hug",
      "cuddle"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ෆ╹ .̮ ╹ෆ",
    "name": "Heart Cheek Pout",
    "cat": "love",
    "tags": [
      "cute",
      "korean"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ˘ ³˘)♥",
    "name": "Blowing Kiss",
    "cat": "love",
    "tags": [
      "kiss",
      "blow"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ◡‿◡ ♡)",
    "name": "Peaceful Heart",
    "cat": "love",
    "tags": [
      "calm",
      "sweet"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(♡ˊ͈ ꒳ ˋ͈)",
    "name": "Bashful Heart Melt",
    "cat": "love",
    "tags": [
      "bashful",
      "melt"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(´꒳`)♡",
    "name": "Cozy Love",
    "cat": "love",
    "tags": [
      "cozy",
      "warm"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(⊃｡•́‿•̀｡)⊃",
    "name": "Comforting Hug",
    "cat": "love",
    "tags": [
      "hug",
      "cuddle",
      "support"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(つ´∀｀)つ",
    "name": "Wide Open Cuddle",
    "cat": "love",
    "tags": [
      "cuddle",
      "arms"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ๑ ❛ ڡ ❛ ๑ )",
    "name": "Cheeky Sweetheart",
    "cat": "love",
    "tags": [
      "sweet",
      "wink"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(♡ >ω< ♡)",
    "name": "Heart Sparkle Overload",
    "cat": "love",
    "tags": [
      "overload",
      "sparkle"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(´,,•ω•,,)♡",
    "name": "Blushing Kitten Love",
    "cat": "love",
    "tags": [
      "blush",
      "kitten",
      "shy"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ˘ ³˘)❤",
    "name": "Red Heart Smooch",
    "cat": "love",
    "tags": [
      "smooch",
      "red heart"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ლ(╹◡╹ლ)",
    "name": "Cheek Pinching",
    "cat": "love",
    "tags": [
      "pinch",
      "cute"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(*♡∀♡)",
    "name": "Love Struck Anime",
    "cat": "love",
    "tags": [
      "love struck",
      "passion"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(♡μ_μ)",
    "name": "Soft Shy Hearts",
    "cat": "love",
    "tags": [
      "shy",
      "soft",
      "heart"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(｡・//ε//・｡)",
    "name": "Flaming Red Kiss Blush",
    "cat": "love",
    "tags": [
      "blush",
      "kiss",
      "embarrassed"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(〃ﾟ3ﾟ〃)",
    "name": "Pouting Kiss",
    "cat": "love",
    "tags": [
      "kiss",
      "pout"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(灬º‿º灬)♡",
    "name": "Rosy Cheek Heart",
    "cat": "love",
    "tags": [
      "rosy",
      "cheeks",
      "love"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(っ˘з(˘⌣˘ )",
    "name": "Couple Sweet Kiss",
    "cat": "love",
    "tags": [
      "couple",
      "kissing",
      "pair"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ˘⌣˘)♡(˘⌣˘ )",
    "name": "Couple Forever Hug",
    "cat": "love",
    "tags": [
      "couple",
      "hug",
      "together"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(｡♥‿♥｡)",
    "name": "Heart Eyes Romance",
    "cat": "love",
    "tags": [
      "eyes",
      "romance"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(´♡‿♡`)",
    "name": "Pure Adoration",
    "cat": "love",
    "tags": [
      "adore",
      "sweetheart"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "（*´▽｀*）",
    "name": "Blushing with Admiration",
    "cat": "love",
    "tags": [
      "admire",
      "blush"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ノಠ益ಠ)ノ",
    "name": "Furious Roar",
    "cat": "angry",
    "tags": [
      "rage",
      "mad",
      "scream"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ಠ_ಠ",
    "name": "Look of Disapproval",
    "cat": "angry",
    "tags": [
      "disapproval",
      "stare",
      "serious"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(╯°□°)╯",
    "name": "Frustrated Toss",
    "cat": "angry",
    "tags": [
      "frustrated",
      "throw"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ง •̀_•́)ง",
    "name": "Ready to Fight",
    "cat": "angry",
    "tags": [
      "fight",
      "fist",
      "boxer"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(◣_◢)",
    "name": "Demonic Glare",
    "cat": "angry",
    "tags": [
      "demon",
      "evil",
      "glare"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "凸(｀⌒´メ)凸",
    "name": "Double Finger Fury",
    "cat": "angry",
    "tags": [
      "offensive",
      "fury"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(╬ Ò﹏Ó)",
    "name": "Vein Popping Rage",
    "cat": "angry",
    "tags": [
      "vein",
      "rage",
      "mad"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ` ω ´ )",
    "name": "Grumpy Growl",
    "cat": "angry",
    "tags": [
      "growl",
      "grumpy"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ヽ( `д´*)ノ",
    "name": "Tantrum Screaming",
    "cat": "angry",
    "tags": [
      "tantrum",
      "shout"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(҂ `з´ )",
    "name": "Aggressive Puff",
    "cat": "angry",
    "tags": [
      "cross",
      "tough"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ง ͠° ͟ل͜ ͡°)ง",
    "name": "Lenny Boxer",
    "cat": "angry",
    "tags": [
      "lenny",
      "fight"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ᗒᗣᗕ)՞",
    "name": "Furious Teary Rage",
    "cat": "angry",
    "tags": [
      "rage",
      "crying mad"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ノ°益°)ノ",
    "name": "Rage Shouting",
    "cat": "angry",
    "tags": [
      "angry",
      "shout"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(‡▼益▼)",
    "name": "Yakuza Glare",
    "cat": "angry",
    "tags": [
      "yakuza",
      "glare",
      "mafia"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(#`Д´)",
    "name": "Bruised & Furious",
    "cat": "angry",
    "tags": [
      "bruised",
      "furious"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(눈_눈)",
    "name": "Cold Dead Glare",
    "cat": "angry",
    "tags": [
      "cold",
      "stare",
      "unimpressed"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(｀皿´＃)",
    "name": "Gritting Teeth Rage",
    "cat": "angry",
    "tags": [
      "teeth",
      "bite",
      "mad"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "凸(ಠ益ಠ)凸",
    "name": "Dual Middle Rage",
    "cat": "angry",
    "tags": [
      "rage",
      "middle"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(╬ಠ益ಠ)",
    "name": "Vein Glare",
    "cat": "angry",
    "tags": [
      "vein",
      "intense"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(;￢_￢)",
    "name": "Suspicious Side Glare",
    "cat": "angry",
    "tags": [
      "side glare",
      "suspicious"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ಠ_ಠ)┌∩┐",
    "name": "Polite Disapproval Finger",
    "cat": "angry",
    "tags": [
      "disapproval",
      "finger"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "╭∩╮(︶︿︶)╭∩╮",
    "name": "Zen Flip Off",
    "cat": "angry",
    "tags": [
      "flip off",
      "indifferent"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ʘдʘ╬)",
    "name": "Wide Eyed Fury",
    "cat": "angry",
    "tags": [
      "fury",
      "vein",
      "shocked angry"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(¬▂¬)",
    "name": "Deadpan Disgust",
    "cat": "angry",
    "tags": [
      "deadpan",
      "disgust"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "`(*>﹏<*)′",
    "name": "Infuriated Squeeze",
    "cat": "angry",
    "tags": [
      "frustrated",
      "infuriated"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ﾒ` ﾛ ´)",
    "name": "Baring Teeth Shouting",
    "cat": "angry",
    "tags": [
      "teeth",
      "shout"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(╥﹏╥)",
    "name": "Stream of Tears",
    "cat": "sad",
    "tags": [
      "crying",
      "sad",
      "weep"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ಥ﹏ಥ)",
    "name": "Waterfall Tears",
    "cat": "sad",
    "tags": [
      "waterfall",
      "cry",
      "bawl"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(T_T)",
    "name": "Classic Crying Face",
    "cat": "sad",
    "tags": [
      "classic",
      "tear"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ノД`)",
    "name": "Wiping Tears Away",
    "cat": "sad",
    "tags": [
      "wipe",
      "cry"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(｡•́︿•̀｡)",
    "name": "Quivering Lip Sad",
    "cat": "sad",
    "tags": [
      "pout",
      "sad",
      "lip"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(╯︵╰,)",
    "name": "Disappointed Sigh",
    "cat": "sad",
    "tags": [
      "downcast",
      "sigh"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(っ- ‸ - ς)",
    "name": "Curled Up Sad",
    "cat": "sad",
    "tags": [
      "lonely",
      "curled"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(;﹏;)",
    "name": "Sniffle Tears",
    "cat": "sad",
    "tags": [
      "sniffle",
      "hurt"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(︶︹︺)",
    "name": "Head Hanging Low",
    "cat": "sad",
    "tags": [
      "depressed",
      "gloomy"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(｡╯︵╰｡)",
    "name": "Heartbroken Gaze",
    "cat": "sad",
    "tags": [
      "heartbroken",
      "sorrow"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ಥ_ಥ",
    "name": "Holding Back Tears",
    "cat": "sad",
    "tags": [
      "holding back",
      "pain"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(｡T ω T｡)",
    "name": "Weeping Cute",
    "cat": "sad",
    "tags": [
      "weep",
      "cute sad"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(个_个)",
    "name": "Tear Drops Falling",
    "cat": "sad",
    "tags": [
      "tears",
      "crying anime"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(;´༎ຶД༎ຶ`)",
    "name": "Agonized Sobbing",
    "cat": "sad",
    "tags": [
      "bawling",
      "agony",
      "sob"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(oT-T)尸",
    "name": "Waving White Flag Tears",
    "cat": "sad",
    "tags": [
      "surrender",
      "defeat"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(っ˘̩╭╮˘̩)っ",
    "name": "Sad Pout Cuddle",
    "cat": "sad",
    "tags": [
      "pout",
      "cuddle"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ɵ̥̥ ˑ̫ ɵ̥̥)",
    "name": "Quiet Kitten Weep",
    "cat": "sad",
    "tags": [
      "quiet",
      "weep"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(TдT)",
    "name": "Wailing Anime Cry",
    "cat": "sad",
    "tags": [
      "wail",
      "anime"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ; ω ; )",
    "name": "Quiet Sniffle",
    "cat": "sad",
    "tags": [
      "sniffle",
      "quiet"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(´；д；`)",
    "name": "Devastated Tear Face",
    "cat": "sad",
    "tags": [
      "devastated",
      "tears"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(இ﹏இ`｡)",
    "name": "Melting in Sorrow",
    "cat": "sad",
    "tags": [
      "sorrow",
      "weep"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ᵒ̴̶̷̥́ _ᵒ̴̶̷̣̥̀ )",
    "name": "Tears Sparkling in Eyes",
    "cat": "sad",
    "tags": [
      "teary",
      "sparkle"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(っ◞‸◟c)",
    "name": "Little Despondent Bal",
    "cat": "sad",
    "tags": [
      "lonely",
      "ball"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(⊙_⊙)",
    "name": "Wide Eyed Shock",
    "cat": "surprise",
    "tags": [
      "shock",
      "stare",
      "stunned"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(°o°)",
    "name": "Open Mouth Gasp",
    "cat": "surprise",
    "tags": [
      "gasp",
      "whoa"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(・o・)",
    "name": "Little Wow",
    "cat": "surprise",
    "tags": [
      "wow",
      "surprise"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ﾟДﾟ)",
    "name": "Jaw Dropped Anime",
    "cat": "surprise",
    "tags": [
      "jaw drop",
      "anime shock"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(•⊙ω⊙•)",
    "name": "Hypnotic Stare",
    "cat": "surprise",
    "tags": [
      "owl",
      "wide eyes"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "Σ(°ロ°)",
    "name": "Startled Jump",
    "cat": "surprise",
    "tags": [
      "sigma",
      "jump",
      "scared"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(°ロ°) !",
    "name": "Sudden Realization",
    "cat": "surprise",
    "tags": [
      "realization",
      "alert"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(⊙_☉)",
    "name": "Disbelief Twitch",
    "cat": "surprise",
    "tags": [
      "twitch",
      "confused"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "w(°ｏ°)w",
    "name": "Hands on Face Scream",
    "cat": "surprise",
    "tags": [
      "scream",
      "home alone"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ﾟдﾟ)",
    "name": "Blank Shock",
    "cat": "surprise",
    "tags": [
      "blank",
      "stunned"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "Σ(O_O)",
    "name": "Double Wide Shock",
    "cat": "surprise",
    "tags": [
      "gasp",
      "freeze"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "Σ(ﾟДﾟ)",
    "name": "Anime Gasp Shock",
    "cat": "surprise",
    "tags": [
      "anime",
      "gasp"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(o_O)",
    "name": "One Eye Raised Shock",
    "cat": "surprise",
    "tags": [
      "confused",
      "eyebrow"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(O_O;)",
    "name": "Sweating Shock",
    "cat": "surprise",
    "tags": [
      "sweat",
      "nervous"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "((( ;ﾟДﾟ)))",
    "name": "Trembling Horror",
    "cat": "surprise",
    "tags": [
      "horror",
      "tremble",
      "fear"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ﾟДﾟ;)",
    "name": "Panic Gasp",
    "cat": "surprise",
    "tags": [
      "panic",
      "gasp"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "Σ(ノ°▽°)ノ",
    "name": "Surprised Stumble",
    "cat": "surprise",
    "tags": [
      "stumble",
      "fall"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(゜Д゜;)",
    "name": "Pale Shock Gasp",
    "cat": "surprise",
    "tags": [
      "pale",
      "nervous"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "Σ(°Д°υ)",
    "name": "Cold Sweat Jump",
    "cat": "surprise",
    "tags": [
      "sweat",
      "jump"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(○o○)",
    "name": "Owl Eyes Stun",
    "cat": "surprise",
    "tags": [
      "owl",
      "stun"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(@_@)",
    "name": "Dizzied by Surprise",
    "cat": "surprise",
    "tags": [
      "dizzy",
      "spiral"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "¯\\_(ツ)_/¯",
    "name": "Classic Shrug (Smug)",
    "cat": "shrug",
    "tags": [
      "shrug",
      "whatever",
      "idc"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "¯\\(°_o)/¯",
    "name": "Derp Shrug",
    "cat": "shrug",
    "tags": [
      "derp",
      "confused",
      "shrug"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "┐(‘～` )┌",
    "name": "Casual Careless Shrug",
    "cat": "shrug",
    "tags": [
      "casual",
      "shrug"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "┐(￣ヘ￣)┌",
    "name": "Scoffing Shrug",
    "cat": "shrug",
    "tags": [
      "scoff",
      "disdain"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "╮(︶▽︶)╭",
    "name": "Peaceful Acceptance",
    "cat": "shrug",
    "tags": [
      "acceptance",
      "calm"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "¯\\_(⊙_ʖ⊙)_/¯",
    "name": "Weirded Out Shrug",
    "cat": "shrug",
    "tags": [
      "weird",
      "shrug"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "┐( ˘_˘ )┌",
    "name": "Indifferent Shrug",
    "cat": "shrug",
    "tags": [
      "indifferent",
      "bored"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "╮(￣ω￣;)╭",
    "name": "Nervous Chuckle Shrug",
    "cat": "shrug",
    "tags": [
      "nervous",
      "sweat"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "¯\\(ツ)/¯",
    "name": "Minimal Shrug",
    "cat": "shrug",
    "tags": [
      "shrug",
      "clean"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "┐( ˘-˘ )┌",
    "name": "Sighing Shrug",
    "cat": "shrug",
    "tags": [
      "sigh",
      "resigned"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "¯\\_(⊙︿⊙)_/¯",
    "name": "Sad Helpless Shrug",
    "cat": "shrug",
    "tags": [
      "sad",
      "helpless"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "╮(╯∀╰)╭",
    "name": "Playful Shrug",
    "cat": "shrug",
    "tags": [
      "playful",
      "wink"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "¯\\_( ͡° ͜ʖ ͡°)_/¯",
    "name": "Lenny Shrug",
    "cat": "shrug",
    "tags": [
      "lenny",
      "shrug"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "┐(´д｀)┌",
    "name": "Weary Shrug",
    "cat": "shrug",
    "tags": [
      "weary",
      "tired"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "¯\\_(ツ)_/¯♪",
    "name": "Musical Shrug",
    "cat": "shrug",
    "tags": [
      "music",
      "shrug"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "╮(╯_╰)╭",
    "name": "What Can You Do Shrug",
    "cat": "shrug",
    "tags": [
      "resigned",
      "casual"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "¯\\_〳 •̀ o •́ 〵_/¯",
    "name": "Raging Shrug",
    "cat": "shrug",
    "tags": [
      "rage",
      "shrug"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "╮( ˘ ､ ˘ )╭",
    "name": "Unbothered Shrug",
    "cat": "shrug",
    "tags": [
      "unbothered",
      "calm"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(=^･ω･^=)",
    "name": "Whiskered Cat",
    "cat": "animals",
    "tags": [
      "cat",
      "kitty",
      "whiskers"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(=^･ｪ･^=)",
    "name": "Curious Kitty",
    "cat": "animals",
    "tags": [
      "cat",
      "pet"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(=^‥^=)",
    "name": "Sweet Neko",
    "cat": "animals",
    "tags": [
      "neko",
      "cute cat"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ʕ•ᴥ•ʔ",
    "name": "Cute Teddy Bear",
    "cat": "animals",
    "tags": [
      "bear",
      "teddy"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ʕ •̀ ω •́ ʔ",
    "name": "Determined Bear",
    "cat": "animals",
    "tags": [
      "bear",
      "fierce"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ʕ •̀ o •́ ʔ",
    "name": "Roaring Bear",
    "cat": "animals",
    "tags": [
      "bear",
      "roar"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(・ᴥ・)",
    "name": "Seal / Puppy Face",
    "cat": "animals",
    "tags": [
      "seal",
      "puppy",
      "dog"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(^・x・^)",
    "name": "Fluffy Bunny",
    "cat": "animals",
    "tags": [
      "bunny",
      "rabbit"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(^◕ᴥ◕^)",
    "name": "Happy Doggo",
    "cat": "animals",
    "tags": [
      "dog",
      "doggo",
      "puppy"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "V(=^･ω･^=)v",
    "name": "Victory Cat Paws",
    "cat": "animals",
    "tags": [
      "cat",
      "peace",
      "victory"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(=`ω´=)",
    "name": "Cheeky Cat Grin",
    "cat": "animals",
    "tags": [
      "cat",
      "scheming"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ఠൠఠ )",
    "name": "Octopus / Alien",
    "cat": "animals",
    "tags": [
      "octopus",
      "alien"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ˏ₍•ɞ•₎ˎ",
    "name": "Little Bird Chick",
    "cat": "animals",
    "tags": [
      "bird",
      "chick",
      "peep"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "∪･ω･∪",
    "name": "Floppy Eared Dog",
    "cat": "animals",
    "tags": [
      "dog",
      "floppy",
      "puppy"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( =ω= )",
    "name": "Sleepy Kitty Face",
    "cat": "animals",
    "tags": [
      "cat",
      "sleepy"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ʕノ)ᴥ(ヾʔ",
    "name": "Shy Peeking Bear",
    "cat": "animals",
    "tags": [
      "bear",
      "shy",
      "peek"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ʕง•ᴥ•ʔง",
    "name": "Boxer Teddy Bear",
    "cat": "animals",
    "tags": [
      "bear",
      "boxer",
      "fight"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "₍ᐢ. ̫.ᐢ₎",
    "name": "Miniature Bunny",
    "cat": "animals",
    "tags": [
      "bunny",
      "rabbit",
      "mini"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "₍ᐢ⑅•ᴗ•⑅ᐢ₎",
    "name": "Hamster Cheeks",
    "cat": "animals",
    "tags": [
      "hamster",
      "cute"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(・θ・)",
    "name": "Little Duckling Peep",
    "cat": "animals",
    "tags": [
      "duck",
      "bird",
      "peep"
    ],
    "type": "kaomoji"
  },
  {
    "emote": ">°))))彡",
    "name": "Swimming Fish",
    "cat": "animals",
    "tags": [
      "fish",
      "ocean",
      "swim"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "▼・ᴥ・▼",
    "name": "Perky Puppy Ears",
    "cat": "animals",
    "tags": [
      "dog",
      "puppy",
      "perky"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(=^-ω-^=)",
    "name": "Napping Cat",
    "cat": "animals",
    "tags": [
      "cat",
      "nap"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(❍ᴥ❍ʋ)",
    "name": "Jake The Dog Stare",
    "cat": "animals",
    "tags": [
      "dog",
      "adventure time"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "໒( •́ ∧ •̀ )७",
    "name": "Puppy Dog Eyes",
    "cat": "animals",
    "tags": [
      "puppy",
      "eyes",
      "begging"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(=ｘェｘ=)",
    "name": "KO Kitty Eyes",
    "cat": "animals",
    "tags": [
      "cat",
      "ko",
      "knockout"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(=⌒‿‿⌒=)",
    "name": "Chubby Content Cat",
    "cat": "animals",
    "tags": [
      "cat",
      "chubby",
      "purr"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ʕ´•ᴥ•`ʔ",
    "name": "Soft Gentle Bear",
    "cat": "animals",
    "tags": [
      "bear",
      "gentle"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ʕ ﾟ ● ﾟʔ",
    "name": "Startled Polar Bear",
    "cat": "animals",
    "tags": [
      "bear",
      "polar"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(V•ᴥ•V)",
    "name": "Puppy Paws Up",
    "cat": "animals",
    "tags": [
      "dog",
      "paws"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "U^ｪ^U",
    "name": "Happy Dog Tongue Out",
    "cat": "animals",
    "tags": [
      "dog",
      "tongue"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(U・x・U)",
    "name": "Sleeping Puppy Snooze",
    "cat": "animals",
    "tags": [
      "puppy",
      "sleep"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ˘Θ˘ )",
    "name": "Wise Owl Contemplation",
    "cat": "animals",
    "tags": [
      "owl",
      "bird"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(￣Θ￣)",
    "name": "Penguin Waddle",
    "cat": "animals",
    "tags": [
      "penguin",
      "bird"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(°))<<",
    "name": "Little Guppy Fish",
    "cat": "animals",
    "tags": [
      "fish",
      "guppy"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "><(((('>",
    "name": "Angelfish Dart",
    "cat": "animals",
    "tags": [
      "fish",
      "ocean"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(V) (°,,,,°) (V)",
    "name": "Crab Claws Zoidberg",
    "cat": "animals",
    "tags": [
      "crab",
      "claws",
      "ocean"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( /)w(\\ )",
    "name": "Monkey Covering Cheeks",
    "cat": "animals",
    "tags": [
      "monkey",
      "shy",
      "paws"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(╯°□°)╯︵ ┻━┻",
    "name": "Classic Table Flip",
    "cat": "tableflip",
    "tags": [
      "table flip",
      "rage",
      "desk"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ノಠ益ಠ)ノ彡┻━┻",
    "name": "Violent Table Toss",
    "cat": "tableflip",
    "tags": [
      "rage",
      "table flip"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "┬─┬ノ( º _ ºノ)",
    "name": "Respectfully Putting Table Back",
    "cat": "tableflip",
    "tags": [
      "put back",
      "polite",
      "calm"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(╯°Д°)╯︵/(.□ . \\)",
    "name": "Flipping a Person",
    "cat": "tableflip",
    "tags": [
      "flip person",
      "judo",
      "chaos"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "┻━┻ ︵ ヽ(°□°ヽ)",
    "name": "Leftward Table Throw",
    "cat": "tableflip",
    "tags": [
      "table flip",
      "throw"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "┻━┻ ︵ ＼( °□° )／ ︵ ┻━┻",
    "name": "Double Table Flip Rampage",
    "cat": "tableflip",
    "tags": [
      "double flip",
      "rampage"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ノ°∀°)ノ⌒･*:.｡. .｡.:*･゜ﾟ･*",
    "name": "Throwing Stardust / Confetti",
    "cat": "tableflip",
    "tags": [
      "throw",
      "sparkles",
      "toss"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "┬─┬ノ( ¯︶¯ノ)",
    "name": "Satisfied Table Restoration",
    "cat": "tableflip",
    "tags": [
      "put back",
      "order"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(╯°□°)╯︵ ʞooqǝɔɐɟ",
    "name": "Flipping The Internet",
    "cat": "tableflip",
    "tags": [
      "flip facebook",
      "rage"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ﾉಥ益ಥ)ﾉ彡┻━┻",
    "name": "Crying Tears Table Flip",
    "cat": "tableflip",
    "tags": [
      "cry",
      "rage",
      "flip"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ノ= ⩊ = )ノ彡┻━┻",
    "name": "Cat Table Swat",
    "cat": "tableflip",
    "tags": [
      "cat",
      "swat",
      "flip"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(╯ರ ~ ರ)╯︵ ┻━┻",
    "name": "Grumpy Table Toss",
    "cat": "tableflip",
    "tags": [
      "grumpy",
      "toss"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "┻━┻ ︵ ¯\\(ツ)/¯ ︵ ┻━┻",
    "name": "Shrugging Table Catastrophe",
    "cat": "tableflip",
    "tags": [
      "shrug",
      "table flip",
      "chaos"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "┬─┬ノ( ಠ_ಠノ)",
    "name": "Putting It Back Disapprovingly",
    "cat": "tableflip",
    "tags": [
      "disapproval",
      "order"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(⌐■_■)",
    "name": "Sunglasses Boss",
    "cat": "cool",
    "tags": [
      "sunglasses",
      "deal with it",
      "cool"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(▀̿Ĺ̯▀̿ ̿)",
    "name": "Secret Service Agent",
    "cat": "cool",
    "tags": [
      "bodyguard",
      "agent",
      "fbi"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ͡° ͜ʖ ͡°)",
    "name": "Classic Lenny Face",
    "cat": "cool",
    "tags": [
      "lenny",
      "smug",
      "meme"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ‾ʖ̫‾)",
    "name": "Relaxed Smug",
    "cat": "cool",
    "tags": [
      "smug",
      "chill"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ¬‿¬)",
    "name": "Sly Sideways Glance",
    "cat": "cool",
    "tags": [
      "sly",
      "scheming"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ≖.≖)",
    "name": "Suspicious Side-Eye",
    "cat": "cool",
    "tags": [
      "side eye",
      "suspicious"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(¬_¬ )",
    "name": "Disapproving Side-Eye",
    "cat": "cool",
    "tags": [
      "side glance",
      "bored"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ͡~ ͜ʖ ͡°)",
    "name": "Lenny Wink",
    "cat": "cool",
    "tags": [
      "lenny",
      "wink"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(•_•) ( •_•)>⌐■-■ (⌐■_■)",
    "name": "Puts On Sunglasses Combo",
    "cat": "cool",
    "tags": [
      "deal with it",
      "sequence",
      "csi"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ͡ʘ ͜ʖ ͡ʘ)",
    "name": "Hyper Staring Lenny",
    "cat": "cool",
    "tags": [
      "lenny",
      "creepy",
      "eyes"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ͡o ͜ʖ ͡o)",
    "name": "Shocked Lenny",
    "cat": "cool",
    "tags": [
      "lenny",
      "shock"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ಠ ͜ʖ ಠ)",
    "name": "Disapproving Lenny",
    "cat": "cool",
    "tags": [
      "lenny",
      "stare"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ˘ ɜ˘) ♬♪",
    "name": "Carefree Whistling",
    "cat": "cool",
    "tags": [
      "whistle",
      "chill"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(•̀ᴗ•́)و ̑̑",
    "name": "Thumbs Up Cool Bro",
    "cat": "cool",
    "tags": [
      "thumbs up",
      "cool",
      "bro"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(づ￣ ³￣)づ⌐■-■",
    "name": "Offering You Sunglasses",
    "cat": "cool",
    "tags": [
      "sunglasses",
      "gift"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(¬‿¬ )",
    "name": "Smirk Glance",
    "cat": "cool",
    "tags": [
      "smirk",
      "glance"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(｀∀´)Ψ",
    "name": "Devil Smug Pitchfork",
    "cat": "cool",
    "tags": [
      "devil",
      "smug"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(￣ー￣)",
    "name": "Mona Lisa Smirk",
    "cat": "cool",
    "tags": [
      "smirk",
      "calm"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(｀・ω・´)",
    "name": "Confident & Ready",
    "cat": "cool",
    "tags": [
      "confident",
      "ready"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(｀・ω・´)b",
    "name": "Confident Thumbs Up",
    "cat": "cool",
    "tags": [
      "thumbs up",
      "ready"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ￣＾￣)",
    "name": "Puffed Up Pride",
    "cat": "cool",
    "tags": [
      "proud",
      "pride",
      "puffed"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ͡ᵔ ͜ʖ ͡ᵔ)",
    "name": "Happy Lenny",
    "cat": "cool",
    "tags": [
      "lenny",
      "happy"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ͡° ʖ̯ ͡°)",
    "name": "Downcast Lenny",
    "cat": "cool",
    "tags": [
      "lenny",
      "sad"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ง'̀-'́)ง",
    "name": "Fist Fight Stance",
    "cat": "combat",
    "tags": [
      "fight",
      "boxing",
      "duel"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "⚔️(ಠ_ಠ)⚔️",
    "name": "Dueling Swords Warrior",
    "cat": "combat",
    "tags": [
      "swords",
      "warrior",
      "gladiator"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(｀_´)ゞ",
    "name": "Military Salute",
    "cat": "combat",
    "tags": [
      "salute",
      "soldier",
      "yes sir"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(҂`з´)ᡕᠵ᠊ᡃ່࡚ࠢ࠘ ⸝່ࠡࠣ᠊߯᠆ࠣ࠘ᡁࠣ࠘᠊᠊°.~",
    "name": "Sniper Rifle Aim",
    "cat": "combat",
    "tags": [
      "gun",
      "rifle",
      "sniper"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "o==[]::::::::::::::::>",
    "name": "Excalibur Broadsword",
    "cat": "combat",
    "tags": [
      "sword",
      "blade",
      "weapon"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "︻╦̵̵͇̿̿̿̿╤───",
    "name": "Assault Sniper",
    "cat": "combat",
    "tags": [
      "sniper",
      "gun"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ͡° ͜ʖ ͡°)つ━☆・*。",
    "name": "Casting a Spell",
    "cat": "combat",
    "tags": [
      "magic",
      "wand",
      "spell"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ᕦ(ò_óˇ)ᕤ",
    "name": "Double Bicep Flex",
    "cat": "combat",
    "tags": [
      "flex",
      "muscles",
      "strong"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ᕦ( ͡° ͜ʖ ͡°)ᕤ",
    "name": "Lenny Flexing Muscles",
    "cat": "combat",
    "tags": [
      "lenny",
      "flex",
      "buff"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "୧( ˵ ° ~ ° ˵ )୨",
    "name": "Tense Flexing",
    "cat": "combat",
    "tags": [
      "flex",
      "power",
      "gym"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(҂`_´)<︻╦̵̵̿╤─",
    "name": "Machine Gunner",
    "cat": "combat",
    "tags": [
      "gun",
      "soldier"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "–’,-’,-’-( ͡° ͜ʖ ͡°)╯",
    "name": "Throwing Kunai Daggers",
    "cat": "combat",
    "tags": [
      "ninja",
      "kunai",
      "dagger"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "▬▬ι═══════ﺤ",
    "name": "Katana Samurai Blade",
    "cat": "combat",
    "tags": [
      "katana",
      "sword",
      "samurai"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "̿̿ ̿̿ ̿̿ ̿'̿'\\̵͇̿̿\\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/'̿'̿ ̿ ̿̿ ̿̿",
    "name": "Dual Pistol Hitman",
    "cat": "combat",
    "tags": [
      "guns",
      "hitman",
      "matrix"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ᕕ( ᐛ )ᕗง",
    "name": "Charging Into Battle",
    "cat": "combat",
    "tags": [
      "charge",
      "battle"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ง •̀ω•́)ง✧",
    "name": "Battle Determination Spark",
    "cat": "combat",
    "tags": [
      "determined",
      "battle",
      "spark"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ᕦ[ ◑ □ ◑ ]ᕤ",
    "name": "Mecha Robot Muscles",
    "cat": "combat",
    "tags": [
      "robot",
      "mecha",
      "flex"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(╬ Ò﹏Ó) ▄︻̷̿┻̿═━一",
    "name": "Heavy Sniper Rage",
    "cat": "combat",
    "tags": [
      "sniper",
      "gun",
      "furious"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( `д´)⊃━☆ﾟ.*･｡",
    "name": "Dark Sorcerer Cast",
    "cat": "combat",
    "tags": [
      "magic",
      "sorcerer",
      "wand"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ヽ(｀⌒´)ノ",
    "name": "Fierce Battle Roar",
    "cat": "combat",
    "tags": [
      "roar",
      "warrior"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( •̀_•́ )ง",
    "name": "Fist Held High",
    "cat": "combat",
    "tags": [
      "fist",
      "power"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "☆*:. o(≧▽≦)o .:*☆",
    "name": "Euphoric Star Shower",
    "cat": "sparkles",
    "tags": [
      "star",
      "sparkle",
      "happy"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ﾉ>ω<)ﾉ :｡･:*:･ﾟ’★,｡･:*:･ﾟ’☆",
    "name": "Galaxy Burst",
    "cat": "sparkles",
    "tags": [
      "galaxy",
      "magic",
      "stars"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(づ ◕‿◕ )づ *:･ﾟ✧",
    "name": "Giving You Magic Dust",
    "cat": "sparkles",
    "tags": [
      "fairy",
      "dust",
      "sparkle"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(∩^o^)⊃━☆゜.*",
    "name": "Wizard Wand Beam",
    "cat": "sparkles",
    "tags": [
      "wizard",
      "wand",
      "beam"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ﾉ´ヮ`)ﾉ*: ･ﾟ",
    "name": "Glitter Toss",
    "cat": "sparkles",
    "tags": [
      "glitter",
      "cheer"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "★~(◠‿◕✿)",
    "name": "Star Wink Flower",
    "cat": "sparkles",
    "tags": [
      "wink",
      "star",
      "flower"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ଘ(੭*ˊᵕˋ)੭* ੈ♡‧₊˚",
    "name": "Fairy Wings Sparkle",
    "cat": "sparkles",
    "tags": [
      "fairy",
      "wings",
      "magic"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ˘▾˘)〜☆",
    "name": "Dreamy Star Charm",
    "cat": "sparkles",
    "tags": [
      "charm",
      "star"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "✧*｡٩(ˊᗜˋ*)و✧*｡",
    "name": "Glitter Victory Spark",
    "cat": "sparkles",
    "tags": [
      "glitter",
      "spark",
      "cheer"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "☆彡(ノ^ ^)ノ",
    "name": "Catching Shooting Star",
    "cat": "sparkles",
    "tags": [
      "shooting star",
      "magic"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(∩｀-´)⊃━☆ﾟ.*･｡ﾟ",
    "name": "Grim Grimoire Spell",
    "cat": "sparkles",
    "tags": [
      "grimoire",
      "magic",
      "spell"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ﾟ+｡:.ﾟ(*ﾟДﾟ*)ﾟ.:｡+ﾟ",
    "name": "Mesmerized by Magic",
    "cat": "sparkles",
    "tags": [
      "magic",
      "stars",
      "mesmerized"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(・_・;)",
    "name": "Nervous Perplexed",
    "cat": "thinking",
    "tags": [
      "perplexed",
      "nervous",
      "thinking"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ˘︹˘ )",
    "name": "Deep Contemplation",
    "cat": "thinking",
    "tags": [
      "ponder",
      "thinking",
      "hmm"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( •᷄ - •᷅ )",
    "name": "Puzzled Furrowed Brow",
    "cat": "thinking",
    "tags": [
      "puzzled",
      "confused",
      "brow"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(・_・ヾ",
    "name": "Scratching Head in Confusion",
    "cat": "thinking",
    "tags": [
      "scratch head",
      "confused"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(￣~￣;)",
    "name": "Chewing Over an Idea",
    "cat": "thinking",
    "tags": [
      "pondering",
      "idea"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(・へ・)",
    "name": "Skeptical Doubt",
    "cat": "thinking",
    "tags": [
      "doubt",
      "suspicious"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ͠° ͟ʖ ͡°)",
    "name": "Suspicious Thinking Lenny",
    "cat": "thinking",
    "tags": [
      "lenny",
      "thinking"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ˘･з･)",
    "name": "Mulling Over Pout",
    "cat": "thinking",
    "tags": [
      "pout",
      "ponder"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ﾟ_ﾟ )",
    "name": "Blank Calculation",
    "cat": "thinking",
    "tags": [
      "blank",
      "calculating"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(・_・)",
    "name": "Neutral Consideration",
    "cat": "thinking",
    "tags": [
      "neutral",
      "blank"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(・∀・)?",
    "name": "Inquiring Question Mark",
    "cat": "thinking",
    "tags": [
      "question",
      "curious"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(◎_◎;)",
    "name": "Dizzy Confusion",
    "cat": "thinking",
    "tags": [
      "dizzy",
      "overwhelmed"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ლ(ಠ_ಠ ლ)",
    "name": "Why Though?!",
    "cat": "thinking",
    "tags": [
      "why",
      "questioning",
      "hands"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ˙꒳​˙ )?",
    "name": "Tilted Head Wonder",
    "cat": "thinking",
    "tags": [
      "wonder",
      "tilt",
      "question"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(・・ ) ?",
    "name": "Looking Around Clueless",
    "cat": "thinking",
    "tags": [
      "clueless",
      "lost"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(•ิ_•ิ)?",
    "name": "One Eyebrow Inquiry",
    "cat": "thinking",
    "tags": [
      "eyebrow",
      "doubt"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ﾟДﾟ)y-~~",
    "name": "Smoking & Calculating",
    "cat": "thinking",
    "tags": [
      "smoke",
      "ponder"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(￣o￣) zzZZ",
    "name": "Deep Snoring",
    "cat": "sleepy",
    "tags": [
      "sleep",
      "snore",
      "bed"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( -.-)ᶻᶻᶻ",
    "name": "Quiet Catnap",
    "cat": "sleepy",
    "tags": [
      "nap",
      "zzz"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(-_-) zzz",
    "name": "Classic Zzz Sleeping",
    "cat": "sleepy",
    "tags": [
      "classic",
      "sleeping"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(∪｡∪)｡｡｡zzz",
    "name": "Dreamland Bliss",
    "cat": "sleepy",
    "tags": [
      "dream",
      "cozy",
      "sleep"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(￣ρ￣)..zzZZ",
    "name": "Drooling in Sleep",
    "cat": "sleepy",
    "tags": [
      "drool",
      "sleepy"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(＿ ＿*) Z z z",
    "name": "Collapsed Asleep on Desk",
    "cat": "sleepy",
    "tags": [
      "desk",
      "exhausted"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(×_×)⌒☆",
    "name": "Knocked Out Cold",
    "cat": "sleepy",
    "tags": [
      "knocked out",
      "ko"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(:3[▓▓]",
    "name": "Tucked In Blanket Bed",
    "cat": "sleepy",
    "tags": [
      "bed",
      "blanket",
      "tucked"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(⊃｡•́‿•̀｡)⊃ 🛏️",
    "name": "Craving My Bed",
    "cat": "sleepy",
    "tags": [
      "bed",
      "tired"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ノДヽ) 💤",
    "name": "Rubbing Tired Eyes",
    "cat": "sleepy",
    "tags": [
      "tired eyes",
      "yawn"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(´〜｀*) zzz",
    "name": "Soft Mumbling Snooze",
    "cat": "sleepy",
    "tags": [
      "soft",
      "snooze"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(￣□￣;).｡o○",
    "name": "Yawning Heavily",
    "cat": "sleepy",
    "tags": [
      "yawn",
      "tired"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ρωｰ).｡o○",
    "name": "Rubbing Eyes Yawning",
    "cat": "sleepy",
    "tags": [
      "yawn",
      "sleepy"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ᵕ≀ ̠ᵕ )",
    "name": "Peaceful Slumber",
    "cat": "sleepy",
    "tags": [
      "peaceful",
      "slumber"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ᴗ͈ˬᴗ͈)ഒ",
    "name": "Sleeping Angel Slumber",
    "cat": "sleepy",
    "tags": [
      "angel",
      "quiet"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(・_・)ノ",
    "name": "Casual Hand Wave",
    "cat": "greeting",
    "tags": [
      "wave",
      "hello",
      "hi"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ° ∀ ° )ﾉﾞ",
    "name": "Enthusiastic Greeting Wave",
    "cat": "greeting",
    "tags": [
      "wave",
      "hello",
      "enthusiastic"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(￣▽￣)ノ",
    "name": "Warm Friendly Wave",
    "cat": "greeting",
    "tags": [
      "warm",
      "hi",
      "welcome"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ヾ(＾∇＾)",
    "name": "Brisk Double Wave",
    "cat": "greeting",
    "tags": [
      "wave",
      "bye",
      "see ya"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(*ﾟ▽ﾟ)ﾉ",
    "name": "Surprised Wave",
    "cat": "greeting",
    "tags": [
      "wave",
      "oh hello"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(o^ ^o)/",
    "name": "Cheerful High Hand",
    "cat": "greeting",
    "tags": [
      "cheer",
      "wave"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ´ ▽ ` )ﾉ",
    "name": "Gentle Goodbye / Hello",
    "cat": "greeting",
    "tags": [
      "gentle",
      "farewell"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ´ ꒳ ` )/ ",
    "name": "Cute Paw Wave",
    "cat": "greeting",
    "tags": [
      "paw",
      "cute",
      "hi"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(*・ω・)ﾉ",
    "name": "Polite Kawaii Wave",
    "cat": "greeting",
    "tags": [
      "kawaii",
      "polite"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ヾ(☆▽☆)",
    "name": "Sparkling Waving Fan",
    "cat": "greeting",
    "tags": [
      "fan",
      "stars"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(*＾-‘)v",
    "name": "Peace Sign Greeting",
    "cat": "greeting",
    "tags": [
      "peace",
      "victory",
      "selfie"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(*･ω･)ﾉ",
    "name": "Peppy Waving Hand",
    "cat": "greeting",
    "tags": [
      "peppy",
      "wave"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "＼(￣O￣)",
    "name": "Yawning Hello",
    "cat": "greeting",
    "tags": [
      "yawn",
      "morning"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "( ´∀｀)ノ～ ♡",
    "name": "Waving With Love",
    "cat": "greeting",
    "tags": [
      "wave",
      "love",
      "heart"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "♪(┌・。・)┌",
    "name": "Right Side Boogie",
    "cat": "dancing",
    "tags": [
      "dance",
      "boogie",
      "music"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "└(・。・)┐♪",
    "name": "Left Side Boogie",
    "cat": "dancing",
    "tags": [
      "dance",
      "disco"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ヘ(^_^ヘ)",
    "name": "Swaying Dance",
    "cat": "dancing",
    "tags": [
      "sway",
      "groove"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(ノ^_^)ノ",
    "name": "Catching The Beat",
    "cat": "dancing",
    "tags": [
      "rhythm",
      "party"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ヾ(⌐■_■)ノ♪",
    "name": "Sunglasses DJ Party",
    "cat": "dancing",
    "tags": [
      "dj",
      "sunglasses",
      "party"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ƪ(˘⌣˘)ʃ",
    "name": "Elegant Waltz",
    "cat": "dancing",
    "tags": [
      "waltz",
      "classical"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(〜￣▽￣)〜",
    "name": "Drifting Through Music",
    "cat": "dancing",
    "tags": [
      "drift",
      "groove"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "~(˘▾˘~)",
    "name": "Swaying In The Breeze",
    "cat": "dancing",
    "tags": [
      "breeze",
      "chill"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "₍₍ ◝(・ω・)◟ ⁾⁾",
    "name": "Excited Bouncing Dance",
    "cat": "dancing",
    "tags": [
      "bounce",
      "happy dance"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "┌|o^▽^o|┘♪",
    "name": "Robot Disco Dance",
    "cat": "dancing",
    "tags": [
      "robot",
      "disco"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "ᕕ(⌐■_■)ᕗ ♪♬",
    "name": "Funk Strutting",
    "cat": "dancing",
    "tags": [
      "funk",
      "strut"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "d[-_-]b",
    "name": "Headphones Jamming",
    "cat": "dancing",
    "tags": [
      "headphones",
      "music",
      "listen"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "d(ﾟｰﾟ@)",
    "name": "DJ Beat Mixing",
    "cat": "dancing",
    "tags": [
      "dj",
      "headphones"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "♪( ´θ｀)ノ",
    "name": "Karaoke Belting",
    "cat": "dancing",
    "tags": [
      "sing",
      "karaoke",
      "music"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "|ω･)ﾉ",
    "name": "Peeking Behind Wall & Wave",
    "cat": "hiding",
    "tags": [
      "peek",
      "wall",
      "hide"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "|・ω・)ノ",
    "name": "Curious Peeker",
    "cat": "hiding",
    "tags": [
      "curious",
      "peek"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "|д･)",
    "name": "Timid Stealth Gaze",
    "cat": "hiding",
    "tags": [
      "stealth",
      "shy"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "| 壁 |д･)",
    "name": "Corner Wall Peeker",
    "cat": "hiding",
    "tags": [
      "wall",
      "corner"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "|ω･)ﾁﾗｯ",
    "name": "Glance from Shadow",
    "cat": "hiding",
    "tags": [
      "shadow",
      "sneak"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "壁|ω-)",
    "name": "Leaning on Wall Sleeping",
    "cat": "hiding",
    "tags": [
      "wall",
      "nap"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "┬┴┬┴┤( ͡° ͜ʖ├┬┴┬┴",
    "name": "Lenny Peeking from Brick Wall",
    "cat": "hiding",
    "tags": [
      "lenny",
      "brick wall",
      "creepy"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "┬┴┬┴┤•ᴥ•ʔ",
    "name": "Teddy Bear Behind Bricks",
    "cat": "hiding",
    "tags": [
      "bear",
      "brick",
      "hide"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "┬┴┬┴┤･ω･)ﾉ",
    "name": "Brick Corner Wave",
    "cat": "hiding",
    "tags": [
      "brick",
      "wave",
      "secret"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "|дﾟ) ｶﾝｻﾂ",
    "name": "Secret Agent Observation",
    "cat": "hiding",
    "tags": [
      "observation",
      "stealth"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(つд⊂)",
    "name": "Covering Eyes Peekaboo",
    "cat": "hiding",
    "tags": [
      "peekaboo",
      "hands"
    ],
    "type": "kaomoji"
  },
  {
    "emote": "(つд⊂)ｴｰﾝ",
    "name": "Hands Over Eyes Shy",
    "cat": "hiding",
    "tags": [
      "shy",
      "hands"
    ],
    "type": "kaomoji"
  }
];

if (typeof window !== 'undefined') {
  window.EMOTE_CATEGORIES = EMOTE_CATEGORIES;
  window.EMOTES_DATABASE = EMOTES_DATABASE;
}
if (typeof globalThis !== 'undefined') {
  globalThis.EMOTE_CATEGORIES = EMOTE_CATEGORIES;
  globalThis.EMOTES_DATABASE = EMOTES_DATABASE;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EMOTE_CATEGORIES, EMOTES_DATABASE };
}
