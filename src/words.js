import GameManager from "./logique/game.js";

const words = [
  {
    id: "1",
    description: "በግብርና ላይ የተሰማራ ሰው።",
    answer: "ገበሬ",
    image: "images/2.png",
  },
  {
    id: "2",
    description:
      ".. መሣሪያው ከሚከተሉት የተግባር አካላት የተዋቀረ ነው፡- የኃይል ምንጭ፣ መቀየሪያ መንጠቆ፣ ደዋይ፣ አስተላላፊ እና ተቀባይ ነው።",
    answer: "ስልክ",
    image: "images/1.png",
  },
  {
    id: "3",
    description:
      "ይህ ስም በክራይሚያ ጦርነት ወቅት ጦርነት ከተካሄደባት ከክራይሚያ ከተማ ሴቫስቶፖል የተወሰደ ነው።",
    answer: "መድፍ",
    image: "images/3.png",
  },
  {
    description: "ሳንቲሞች ከባንክ ኖቶች በተቃራኒ",
    answer: "ዝርዝር",
    image:
      "https://blog.continentalcurrency.ca/wp-content/uploads/2016/11/ethiopian-birr-922x614.jpg",
  },
  {
    description:
      "ከሄምፕ፣ ከሲሳል፣ ከናይሎን ወይም ተመሳሳይ ነገሮች ክሮች በአንድ ላይ በማጣመም የተሰራ ወፍራም ጠንካራ ነገር",
    answer: "ገመድ",
    image:
      "https://productimages.biltema.com/v1/image/imagebyfilename/25-0754_xxl_1.jpg",
  },
  {
    description:
      "በመያዣው መጨረሻ ላይ በቀኝ ማዕዘኖች ላይ የተጫነ ሄቪ ሜታል ጭንቅላት ያለው መሳሪያ እንደ ነገሮችን መስበር እና በምስማር መንዳት ላሉ ስራዎች።",
    answer: "መዶሻ",
    image:
      "https://res.cloudinary.com/rsc/image/upload/b_auto,c_pad,dpr_1.0,f_auto,h_660,q_auto,w_1175/c_pad,h_660,w_1175/F4499858-01?pgw=1&pgwact=1",
  },
  {
    description: "ጥሩ ስሜት አለማሳየት ደስተኛ ያልሆነ",
    answer: "ሀዘን",
    image:
      "https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_auto/https://cosmosmagazine.com/wp-content/uploads/2022/02/Sadness.jpg",
  },
  {
    description:
      "በአንድ የተወሰነ ዓላማ ላይ፣ በአንድ የተወሰነ አካባቢ ብቻ የተገደበ፣ ወይም የተወሰነ የትግል ዓይነትን የሚያካትቱ ተከታታይ ወታደራዊ ሥራዎች።",
    answer: "ዘመቻ",
    image:
      "https://qph.cf2.quoracdn.net/main-qimg-f9b76ff81fd3aee30c3a7b8114bc3205-lq",
  },
  {
    description:
      "አንድ ጥግ, በተለይም ውጫዊ ትንበያ ወይም የአንድ ሕንፃ ወይም ሌላ መዋቅር ክፍል ውስጣዊ ማረፊያ.",
    answer: "ማዕዘን",
    image:
      "https://cdn-skill.splashmath.com/panel-uploads/GlossaryTerm/a6639fe615d14e21939cdbd33d4d51fe/1564673544_polygon.png",
  },
  {
    description: "አንድ መተግበርያ፣ በተለይም በእጁ የተያዘ፣ የተለየ ተግባር ለማከናወን የሚያገለግል።",
    answer: "መሳሪያ",
    image:
      "https://media.istockphoto.com/id/492201907/photo/many-tools.jpg?s=612x612&w=0&k=20&c=zCuvI6bjhmpsGkbvKK6vBI6Zovv_bRgIrDNSAC3x3tM=",
  },
  {
    description: "እይታን የሚያስደስት እንደ ቅርፅ፣ ቀለም ወይም ቅርፅ ያሉ የጥራት ጥምረት።",
    answer: "ውበት",
    image:
      "https://thumbs.dreamstime.com/b/abstract-poster-woman-face-one-line-drawing-style-female-beauty-fashion-minimalist-concept-contour-face-line-art-design-t-189497327.jpg",
  },
  {
    description:
      "አሸዋውን ከሶዳ እና ከኖራ ጋር በማዋሃድ እና በፍጥነት በማቀዝቀዝ የተሰራ ጠንካራ ፣ ተሰባሪ ፣ በተለይም ግልፅ ወይም ግልፅ። መስኮቶችን, የመጠጫ እቃዎችን እና ሌሎች እቃዎችን ለመሥራት ያገለግላል.",
    answer: "መስታወት",
    image:
      "https://imageio.forbes.com/blogs-images/scottmendelson/files/2019/01/MV5BY2IwMWE4YjctNTVlMy00MDUwLTkxOGYtMmJlNDEwYmViN2YxXkEyXkFqcGdeQXVyMzQ5ODY3NjA@._V1_SX1777_CR001777999_AL_-1200x675.jpg?format=jpg&width=960",
  },
  {
    description: "የቀዘቀዘ ውሃ፣ ተሰባሪ ግልጽ የሆነ ክሪስታል ጠንካራ።",
    answer: "በረዶ",
    image:
      "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2F494027a/MediaObjects/41586_2013_BF494027a_Figa_HTML.jpg",
  },
  {
    description: "አራት እግር ያለው እቃ ማስቅመጫ",
    answer: "ጠረጴዛ",
    image:
      "https://cdn11.bigcommerce.com/s-1u1m3wn/images/stencil/1280x1280/products/3445/9709/Gosford-messmate-timber-dining-table-1800-front-on-02__00409.1673411640.jpg?c=2",
  },
  {
    description: "ውሳኔ ላይ ለመድረስ ወይም ሀሳብ ለመለዋወጥ ስለ አንድ ነገር የመናገር ተግባር ወይም ሂደት",
    answer: "ክርክር",
    image:
      "https://cdn.discordapp.com/attachments/1008571142858092684/1071771000049516614/0xecho_heated_discussion_two_sides_one_laugh_noe_shout_746d6d66-8ffc-4024-b65b-6e5d509f3fb2.png",
  },
  {
    description:
      "የወደፊቱን ክስተቶች አስቀድሞ ለማየት ወይም ለመተንበይ ወይም የተደበቀ እውቀትን ለማግኘት የሚፈልግ ጥበብ ወይም ልምምድ ብዙውን ጊዜ በአስማት ትርጓሜ ወይም ከተፈጥሮ በላይ በሆኑ ኃይሎች እርዳታ",
    answer: "ጥንቆላ",
    image:
      "https://cdn.discordapp.com/attachments/1008571142858092684/1071770600424615957/0xecho_animated_sorcerer_wide_staring_directly_from_the_middle__75d1b6a9-a90d-487a-a99e-f529f511a42c.png",
  },
  {
    description: "ከድመቶች ያነሰ",
    answer: "ቡችላ",
    image:
      "https://cdn.discordapp.com/attachments/1008571074981658694/1071771420557836348/0xecho__a_puppy_that_is_next_to_a_kitten_but_looks_better_1e43b48d-cc93-45ee-834b-749232cfa308.png",
  },
  {
    description:
      "di di di di di di di, dii dii dii, didididi, dididididididi dididi",
    answer: "ማሪዮ",
    image:
      "https://cdn.discordapp.com/attachments/1008571142858092684/1071769367873847296/0xecho_super_mario_peek_a_oo_1146fa84-c28b-43d0-99e1-c6b42277d8c6.png",
  },
  {
    description:
      "አንድ ሰው ምን ማድረግ እንዳለብዎት ወይም በአንድ የተወሰነ ሁኔታ ውስጥ እንዴት እርምጃ መውሰድ እንዳለብዎ የሚገልጽ አስተያየት",
    answer: "ምክር",
    image:
      "https://cdn4.vectorstock.com/i/1000x1000/88/38/a-friend-giving-advice-to-his-friend-who-vector-23988838.jpg",
  },
  {
    description:
      "ሞላላ ቅርጽ ያለው ሰኮና፣ ረጅም ጅራት፣ አጭር ጸጉር፣ ረዣዥም ቀጠን ያሉ እግሮች፣ ጡንቻማ እና ጥልቀት ያለው አካል መገንባት፣ ረጅም ወፍራም አንገቶች እና ረዣዥም ራሶች",
    answer: "ፈረስ",
    image:
      "https://cdn.discordapp.com/attachments/1008571142858092684/1071767775640555570/0xecho_a_horse_hiding_behind_a_few_dogs_f52fe501-2a2a-4227-a0b6-4c4acc7a5270.png",
  },
  {
    description: "ወደ ቢራቢሮ ወይም የእሳት ራት የሚለወጠው ደብዛዛ፣ ትል የሚመስል ነፍሳት",
    answer: "አባጨጓሬ",
    image:
      "https://cdn.discordapp.com/attachments/1008571074981658694/1071768187819012156/0xecho_a_visible_caterpillar_hidding_behind_a_few_ropes_0c41f3a8-17a1-4e54-ac2f-28fd1c840a62.png",
  },
  {
    description:
      "በተጎበኘ ድህረ ገጽ የተሰጠዎት ትንሽ ጽሑፍ ላይ የተመሰረተ ፋይል እርስዎን ወደዚያ ጣቢያ ለመለየት ይረዳል",
    answer: "ኩኪ",
    image:
      "https://cdn.discordapp.com/attachments/1008571074981658694/1071768834953990166/0xecho_cookies_that_donot_look_like_cookies_d95c88b2-4eb2-43e0-80f3-c3e5816587cb.png",
  },
  // {
  //   description: "ጆ ፣ ጃው ፣ ጆንኒ ፣ ነስሩ",
  //   answer: "ዮሃንስ",
  //   image:
  //     "https://cdn.discordapp.com/attachments/962396182846537740/1071772563014963281/jow.jpg",
  // },
  {
    "description": "ስህተቶችን ለማስተካከል ወደ ሌንሶች የተፈጨ ሁለት ብርጭቆ ወይም ፕላስቲክን የሚይዝ ፍሬም",
    "answer": "መነጽር",
    "image":
      "https://cdn.discordapp.com/attachments/1008571074981658694/1071769294540644372/0xecho_looking_into_tokyo_from_behind_an_eye_glass_frame_9ed13a92-de47-4d4e-90bd-7591a570e18a.png",
  },
  {
    "description": "አንዳንድ ሰዎች የተሻለ ለማየት እንዲረዳቸው በፍሬም ውስጥ ሁለት ሌንሶች ናቸው",
    "answer":"መነፅር",
    "image": "https://media.discordapp.net/attachments/966491148640211034/1071760776148308038/Chapi_eye_glass_f18b92a9-64f8-43b8-b076-55248e9eeac6.png?width=660&height=660"
},
{
    "description": "በባህላዊ የጤፍ ዱቄት የተሰራ",
    "answer":"እንጀራ",
    "image": "https://c8.alamy.com/comp/E1YXP9/enjoying-a-colorful-and-tasty-injera-meal-E1YXP9.jpg"
},
{
    "description": "የኢትዮጵያ አራተኛ ትልቅ ከተማ እና የቀድሞ ዋና ከተማ። በ17ኛው እና በ19ኛው ክፍለ ዘመን ንጉስ ፋሲልደስን ጨምሮ የኢትዮጵያ ንጉሳዊ ቤተሰብ መኖሪያ ከተማ",
    "answer":"ጎንደር",
    "image": "https://i0.wp.com/jontynz.com/wp-content/uploads/2020/01/DSC00256.jpg?resize=1024%2C683&ssl=1"
},
{
    "description": "እ.ኤ.አ. መጋቢት 1 ቀን 1896 ዓ.ም ለኢትዮጵያ አስደናቂ ድል ለጣሊያን ግን ውድመት እና ጥፋት ነበር።",
    "answer":"አድዋ",
    "image": "https://www.worqambatour.com/img/slider_single_tour/89070621_10216511670812601_1378766003315408896_n3433144.jpg"
},
{
    "description": "ይህች ሀገር በአፍሪካ ስልጣኔ ውስጥ ካሉት እጅግ ጥንታዊ ሀገራት መካከል አንዷ ነች ከብዙ ሺህ አመታት በፊት የጀመረችው።",
    "answer":"ኢትዮጵያ",
    "image": "https://previews.123rf.com/images/upixel123/upixel1231211/upixel123121100104/16433832-africa-map-ethiopia.jpg"
}
];
export default words.map((word) => ({
  ...word,
  maxDifficulty: GameManager.getMaxDifficulty(word.answer)
}));
