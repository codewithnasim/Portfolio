import React, { Component } from "react";
import NewsItem from "./NewsItem";
import NavbarNews from "./NavbarNews";
export default class Technology extends Component {
  articles = [
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "ET Bureau",
      title:
        "Truecaller launches AI-led feature for answering calls - The Economic Times",
      description:
        "Truecaller has launched an AI-based virtual assistant feature named Truecaller Assistant that can answer calls, the company has revealed. The assistant is cloud-based and works in English, Hindi and  Indianised  Hinglish. When the assistant receives a call, t…",
      url: "https://economictimes.indiatimes.com/industry/telecom/telecom-news/truecaller-launches-ai-led-feature-for-answering-calls/articleshow/102634959.cms",
      urlToImage:
        "https://economictimes.indiatimes.com/thumb/msid-102634963,width-1070,height-580,imgsize-30692,overlay-economictimes/photo.jpg",
      publishedAt: "2023-08-11T05:08:00Z",
      content:
        "Caller identity application Truecaller has launched an artificial intelligence led feature called Truecaller Assistant that can be trained to answer calls on behalf of the user as part of its suite o… [+2420 chars]",
    },
    {
      source: {
        id: null,
        name: "Samsung.com",
      },
      author: null,
      title:
        "Samsung's One UI 6 Beta Program Offers Galaxy S23 Series Users a Sneak Peek at New Enhancements - Samsung",
      description:
        "Feedback from participants will guide final adjustments to the user experience update ahead of its official release",
      url: "https://news.samsung.com/global/samsungs-one-ui-6-beta-program-offers-galaxy-s23-series-users-a-sneak-peek-at-new-enhancements",
      urlToImage:
        "https://img.global.news.samsung.com/global/wp-content/uploads/2023/08/One-UI-6-Beta_PR_Thumb728f.jpg",
      publishedAt: "2023-08-11T05:04:54Z",
      content:
        "Samsung Electronics today launched the One UI 6 beta program for users of its Galaxy S23 series.1 Based on Android 14, One UI 6 enables a more user-friendly experience, bringing a complete package of… [+2765 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Tech",
      title:
        "Instagram tests a cool new feature that will make tagging your entire group in Stories much easier - HT Tech",
      description:
        "Do you hate it when you have to individually tag your friends in a group picture you’re trying to post in the Stories? Instagram is testing a new feature that can take away the hassle. Check details.",
      url: "https://tech.hindustantimes.com/tech/news/instagram-tests-a-cool-new-feature-that-will-make-tagging-your-entire-group-in-stories-much-easier-71691726724656.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2023/08/11/1600x900/instagram-5409107_640_1642317380754_1691726803354.jpg",
      publishedAt: "2023-08-11T04:14:05Z",
      content:
        "Have you ever tried posting that memorable group picture from your college days, office party, or a family event to Instagram Stories? The first reaction of many is instant regret when they realize t… [+1850 chars]",
    },
    {
      source: {
        id: null,
        name: "Fagenwasanni.com",
      },
      author: "Donovan Johnson",
      title:
        "Isro Analyzes Traffic Around the Moon for Chandrayaan-3 Mission - Fagen wasanni",
      description:
        "Isro Analyzes Traffic Around the Moon for Chandrayaan-3 Mission - Fagen Wasanni Technologies",
      url: "https://fagenwasanni.com/news/isro-analyzes-traffic-around-the-moon-for-chandrayaan-3-mission/180925/",
      urlToImage:
        "https://fagenwasanni.com/wp-content/uploads/2023/07/mfrack_realistic_photo_of_woman_reading_local_website_news_413b043e-78c1-4919-9196-9fdb57f01a36.jpeg",
      publishedAt: "2023-08-11T04:11:15Z",
      content:
        "As Isro prepares for the Chandrayaan-3 mission, it has conducted a detailed analysis of the traffic around the Moon to ensure safe operations. Between September and July 2019, Chandrayaan-2 had perfo… [+1600 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "Xiaomi Mi Mix Fold 3 launch date confirmed. Here's what we know so far | Mint - Mint",
      description:
        "Xiaomi announces official launch date for Mi Mix Fold 3 foldable smartphone, rumored to have Leica quad-camera setup and curved corners.",
      url: "https://www.livemint.com/technology/gadgets/xiaomi-mi-mix-fold-3-launch-date-confirmed-heres-what-we-know-so-far-11691725786282.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/08/11/600x338/XIAOMI_1691726586498_1691726602312.jpg",
      publishedAt: "2023-08-11T04:04:27Z",
      content:
        "Xiaomi, the renowned Chinese smartphone manufacturer, has made an announcement on X regarding the official launch date of the Mi Mix Fold 3 foldable smartphone. This highly anticipated device is set … [+1850 chars]",
    },
    {
      source: {
        id: null,
        name: "GSMArena.com",
      },
      author: "Vlad",
      title:
        "Google releases surprise Android 14 Beta 5, pretends it was scheduled all along - GSMArena.com news - GSMArena.com",
      description:
        "Last month it clearly implied there wouldn't be another Beta release, but here we are. Last month Google announced the rollout of Android 14 Beta 4 and...",
      url: "https://www.gsmarena.com/google_releases_surprise_android_14_beta_5_pretends_it_was_scheduled_all_along-news-59514.php",
      urlToImage:
        "https://fdn.gsmarena.com/imgroot/news/23/08/android-14-beta-5/-952x498w6/gsmarena_000.jpg",
      publishedAt: "2023-08-11T03:56:01Z",
      content:
        "Last month Google announced the rollout of Android 14 Beta 4 and implied that we should expect the final, stable release to come next. It even published this image of the release timeframe yet again:… [+1572 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "BGMI redeem codes for Aug 11, 2023: Unlock exciting rewards and free gifts! | Mint - Mint",
      description:
        "BGMI redeem codes allow players to obtain in-game items for free. Follow the steps to redeem and collect rewards.",
      url: "https://www.livemint.com/technology/tech-news/bgmi-redeem-codes-for-aug-11-2023-unlock-exciting-rewards-and-free-gifts-11691724518953.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/08/11/600x338/6_1685340599661_1691724672148.webp",
      publishedAt: "2023-08-11T03:31:30Z",
      content:
        "BGMI (Battlegrounds Mobile India) quickly rose to prominence in India after the ban on PUBG Mobile. Despite facing its own ban, the Indian government decided to allow BGMI back into the country with … [+1993 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "Garena Free Fire Max redeem codes for Aug 11, 2023: Get weapons, diamonds, more | Mint - Mint",
      description:
        "Garena Free Fire Max redeem codes can be used to win in-game items like weapons, diamonds, skins, and more. Players can redeem these codes on the game's official Rewards Redemption site. Hurry up as the codes are available for a limited time and for the first…",
      url: "https://www.livemint.com/technology/tech-news/garena-free-fire-max-redeem-codes-for-aug-11-2023-get-weapons-diamonds-more-11691724136198.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/08/11/600x338/Garena_Free_Fire_Max_1686545079791_1691724209577.webp",
      publishedAt: "2023-08-11T03:24:40Z",
      content:
        "Garena Free Fire Max redeem codes can be used to win in-game items like weapons, diamonds, skins and more. These 12 digit alphanumeric codes consist of capital letters and numbers. For those unaware,… [+1806 chars]",
    },
    {
      source: {
        id: null,
        name: "gizmochina",
      },
      author: "gizmochina",
      title:
        "Xiaomi Pad 6 Max display size, chipset, battery, and more details confirmed officially - gizmochina",
      description: null,
      url: "https://www.gizmochina.com/2023/08/11/xiaomi-pad-6-max-display-size-chipset-battery-and-more-details-confirmed-officially/",
      urlToImage: null,
      publishedAt: "2023-08-11T03:03:01Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Stiven Cartagena",
      title: "Your next technology-charged accessory: A smart ring? - HT Tech",
      description:
        "Driven mainly by startups, smart rings have been developing their industry for over a decade. But big players such as Samsung and Apple could really speed up mass adoption.",
      url: "https://tech.hindustantimes.com/wearables/news/your-next-technology-charged-accessory-a-smart-ring-71691719121272.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2023/08/11/1600x900/smart_ring_1691719620169_1691719648818.jpg",
      publishedAt: "2023-08-11T02:32:30Z",
      content:
        "Everyone's heard of smartwatches, wrist-worn devices that can do everything from tell you the time, monitor your heart rate and make phone calls.\r\nNow there's another wearable accessory for your hand… [+4477 chars]",
    },
    {
      source: {
        id: null,
        name: "GSMArena.com",
      },
      author: "Vlad",
      title:
        "Bose QuietComfort Ultra and QuietComfort Ultra Earbuds leak - GSMArena.com news - GSMArena.com",
      description:
        "Sony's WH-1000XM5 and WF-1000XM5 are about to get some new competition. Sony's WH-1000XM5 headphones and WF-1000XM5 true wireless earbuds are about to get...",
      url: "https://www.gsmarena.com/bose_quietcomfort_ultra_and_quietcomfort_ultra_earbuds_leak-news-59513.php",
      urlToImage:
        "https://fdn.gsmarena.com/imgroot/news/23/08/bose-quietcomfort-ultra-ultra-earbuds-leak/-952x498w6/gsmarena_000.jpg",
      publishedAt: "2023-08-11T00:59:01Z",
      content:
        "Sony's WH-1000XM5 headphones and WF-1000XM5 true wireless earbuds are about to get some renewed competition from Bose, one of the biggest and oldest names in the noise canceling business. Today, the … [+1499 chars]",
    },
    {
      source: {
        id: null,
        name: "Biometric Update",
      },
      author: "Joel R. McConvey",
      title:
        "Passkeys, biometrics deployed for passwordless logins to WhatsApp and more - Biometric Update",
      description:
        "With passkeys, WhatsApp users can authenticate their identity via fingerprint or face scans that pair with a complementary encrypted key stored on the platform.",
      url: "https://www.biometricupdate.com/202308/passkeys-biometrics-deployed-for-passwordless-logins-to-whatsapp-and-more",
      urlToImage:
        "https://d1sr9z1pdl3mb7.cloudfront.net/wp-content/uploads/2021/01/28105701/WhatsApp-biometrics.jpeg",
      publishedAt: "2023-08-11T00:35:00Z",
      content:
        "Metas popular messaging app is expanding support for cryptographic passkeys.\r\nWhatsApps version 2.23.17.5, recently released to beta testers, the post says a screen found by WABetaInfo  suggests pass… [+3312 chars]",
    },
    {
      source: {
        id: null,
        name: "Search Engine Journal",
      },
      author: "Kristi Hines",
      title:
        "OpenAI Expands Custom Instructions To Most ChatGPT Users - Search Engine Journal",
      description:
        "ChatGPT Custom instructions are now available for all users (except in the EU and UK) without a Plus subscription.",
      url: "https://www.searchenginejournal.com/openai-expands-custom-instructions-to-most-chatgpt-users/493744/",
      urlToImage:
        "https://www.searchenginejournal.com/wp-content/uploads/2023/08/custom-instructions-available-for-all-users-64d57b21ef331-sej.jpg",
      publishedAt: "2023-08-11T00:12:09Z",
      content:
        "The latest announcement from OpenAI revealed that Custom Instructions are now available for most ChatGPT users without a Plus subscription.\r\nThe expansion of accessibility excludes users in the Europ… [+1611 chars]",
    },
    {
      source: {
        id: null,
        name: "Search Engine Journal",
      },
      author: "Kristi Hines",
      title:
        "Google Rolls Out Gmail Translation To Mobile Apps - Search Engine Journal",
      description:
        "Google plans to update mobile apps with Gmail translation, improving global business and marketing communications.",
      url: "https://www.searchenginejournal.com/google-rolls-out-gmail-translation-mobile-apps/493718/",
      urlToImage:
        "https://www.searchenginejournal.com/wp-content/uploads/2023/08/google-rollsout-translate-gmail-messages-in-app-for-ios-android-64d56f61b46eb-sej.jpg",
      publishedAt: "2023-08-10T23:33:46Z",
      content:
        "Google is gradually rolling out translation within the Gmail mobile app, enabling users to translate emails into over 100 languages.\r\nFor years, this feature has been available for Gmail on the web. … [+1665 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Baldur's Gate 3 Patches Genital Flashing Bug - IGN Daily Fix - IGN",
      description:
        "On today's Daily Fix:Baldur's Gate 3 developer Larian Studios has detailed the second big post-launch update for the hit RPG. Hilariously, a couple of the ch...",
      url: "https://www.youtube.com/watch?v=ct5NIvH87W8",
      urlToImage: "https://i.ytimg.com/vi/ct5NIvH87W8/maxresdefault.jpg",
      publishedAt: "2023-08-10T23:09:04Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Sportskeeda",
      },
      author: "Siddharth Patil",
      title:
        "All hero changes in Overwatch 2 Season 6 Invasion: Bastion and D.Va buffs, Mercy nerf, and more - Sportskeeda",
      description:
        "Season 6 of Overwatch 2, titled Invasion, is live right now. This is the biggest update Blizzard Entertainment's latest 5v5 hero shooter has received thus far.",
      url: "https://www.sportskeeda.com/esports/all-hero-changes-overwatch-2-season-6-invasion-bastion-d-va-buffs-mercy-nerf-and-more",
      urlToImage:
        "https://staticg.sportskeeda.com/editor/2023/08/df0f2-16917047171845-1920.jpg",
      publishedAt: "2023-08-10T23:03:00Z",
      content:
        "Season 6 of Overwatch 2, titled Invasion, is live right now. This is the biggest update Blizzard Entertainment's latest 5v5 hero shooter has received thus far. With it, players are introduced to many… [+10028 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Juli Clover",
      title: "iOS 17: What's New for AirPods - MacRumors",
      description:
        "iOS 17 doesn't just add new features to the iPhone - it also brings new functionality to the AirPods. Most of what's new is for the AirPods...",
      url: "https://www.macrumors.com/guide/ios-17-airpods/",
      urlToImage:
        "https://images.macrumors.com/t/e8mKKfhijI-oNc56XJoiEOh_RwE=/2500x/article-new/2023/05/airpods-memorial-day.jpg",
      publishedAt: "2023-08-10T21:56:14Z",
      content:
        "iOS 17 doesn't just add new features to the iPhone - it also brings new functionality to the AirPods. Most of what's new is for the AirPods Pro 2, but there are a few additions that are for all AirPo… [+2093 chars]",
    },
    {
      source: {
        id: null,
        name: "Business Insider India",
      },
      author: "Sarah Jackson",
      title:
        "Apple may move the iPhone's end call button in the next major update and it could be confusing for users - Business Insider India",
      description:
        "You might need to get used to a new phone layout on your iPhone when iOS 17 rolls out.The iOS 17 beta currently shows the end call button moved up and the",
      url: "https://www.businessinsider.in/tech/news/apple-may-move-the-iphones-end-call-button-in-the-next-major-update-and-it-could-be-confusing-for-users/articleshow/102625384.cms",
      urlToImage:
        "https://www.businessinsider.in/photo/102625384/apple-may-move-the-iphones-end-call-button-in-the-next-major-update-and-it-could-be-confusing-for-users.jpg?imgsize=13360",
      publishedAt: "2023-08-10T21:30:00Z",
      content:
        "It looks like iPhone users may get a whole new phone call layout in iOS 17.\r\nImages from Apple's iOS 17 beta versions show some notable changes, including the red end call button being moved to join … [+1275 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Police",
      },
      author: "Jay Bonggolto",
      title:
        "OnePlus is ready to make a splash with a touchscreen you can actually use while wet - Android Police",
      description:
        "Rain Water Touch makes its debut with the OnePlus Ace 2 Pro",
      url: "https://www.androidpolice.com/oneplus-rain-water-touch/",
      urlToImage:
        "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/08/oneplus-rain-water-touch-hero.jpg",
      publishedAt: "2023-08-10T21:17:00Z",
      content:
        "Most people have had touch screen devices, including many of the leading rugged phones, act weird when they're wet or in the rain. The water on your fingers can make the screen think you're touching … [+1984 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "Overwatch 2: Invasion - Official Illari Gameplay Trailer - IGN",
      description:
        "Meet Illari in this latest trailer for Overwatch 2, and see the new support hero in action, including her abilities like healing pylon, outburst, and more. L...",
      url: "https://www.youtube.com/watch?v=3M5om9-Esaw",
      urlToImage: "https://i.ytimg.com/vi/3M5om9-Esaw/maxresdefault.jpg",
      publishedAt: "2023-08-10T20:39:45Z",
      content: null,
    },
  ];
  constructor() {
    super();

    this.state = {
      articles: this.articles,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=69f46c3ec069493ea15e2ddba35f0f17&page=1&pageSize=${8}`;
    let data = await fetch(url);
    let show = await data.json();
    this.setState({ articles: show.articles, totalResult: show.totalResult });
  }
  prevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=69f46c3ec069493ea15e2ddba35f0f17&page=${
      this.state.page - 1
    }&pageSize=${8}`;
    let data = await fetch(url);
    let show = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: show.articles,
    });
  };

  nextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResult / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=69f46c3ec069493ea15e2ddba35f0f17&page=${
        this.state.page + 1
      }&pageSize=${8}`;
      let data = await fetch(url);
      let show = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: show.articles,
      });
    }
  };

  render() {
    return (
      <>
        <NavbarNews />
        <div className="container my-3">
          <div className="row my-4">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title}
                    imageUrl={element.urlToImage}
                    description={element.description}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
            <div className="d-flex justify-content-between my-mx-3">
              <button
                type="button"
                disabled={this.state.page <= 1}
                onClick={this.prevClick}
                className="btn btn-dark">
                &larr;prev
              </button>
              <button
                type="button"
                disabled={
                  this.state.page + 1 > Math.ceil(this.state.totalResult / 20)
                }
                onClick={this.nextClick}
                className="btn btn-dark">
                next&rarr;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
