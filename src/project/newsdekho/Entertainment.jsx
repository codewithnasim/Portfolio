import React, { Component } from "react";
import NewsItem from "./NewsItem";
import NavbarNews from "./NavbarNews";

export default class Entertainment extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        '"Saath Mein Pyaare Lagte Hain," Paparazzo Tells Parineeti Chopra-Raghav Chadha At Airport - NDTV Movies',
      description:
        "Parineeti Chopra and Raghav Chadha got engaged in May this year",
      url: "https://www.ndtv.com/entertainment/saath-mein-pyaare-lagte-hain-paparazzo-tells-parineeti-chopra-raghav-chadha-at-airport-4288720",
      urlToImage:
        "https://c.ndtvimg.com/2023-08/0eplee2o_-parineeti-chopra-_625x300_11_August_23.jpg",
      publishedAt: "2023-08-11T05:44:12Z",
      content:
        "Parineeti Chopra and Raghav Chadha pictured at the Mumbai airport.\r\nNew Delhi: Parineeti Chopra and fiance Raghav Chadha were were pictured at the Mumbai airport on Friday morning. The couple were se… [+1663 chars]",
    },
    {
      source: {
        id: null,
        name: "123telugu.com",
      },
      author: null,
      title:
        "You are not Pushpa or Rocky Bhai: Vijay Deverakonda’s take on his role in Kushi - 123telugu",
      description:
        "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
      url: "https://www.123telugu.com/mnews/you-are-not-pushpa-or-rocky-bhai-vijay-deverakondas-take-on-his-role-in-kushi.html",
      urlToImage:
        "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
      publishedAt: "2023-08-11T05:32:00Z",
      content:
        "Hero Vijay Deverakonda will be next seen in the much-awaited romantic drama, Kushi. The film has Samantha playing Vijay’s love interest. The film’s theatrical trailer was launched recently and it has… [+901 chars]",
    },
    {
      source: {
        id: null,
        name: "CarToq.com",
      },
      author: "Utkarsh Deshmukh",
      title:
        "5 Bollywood celebrities who recently bought new cars: From Jacqueline Fernandez to Karan Johar - CarToq.com",
      description:
        "In today’s world of glitz and glamour, Bollywood celebrities like all the other celebrities are also known for their luxurious lifestyles and extravagant purchases. Among their splurges, automobiles are some of their most expensive ones and they like to spend…",
      url: "https://www.cartoq.com/5-bollywood-celebrities-who-recently-bought-new-cars-from-jacqueline-fernandez-to-karan-johar/",
      urlToImage:
        "https://www.cartoq.com/wp-content/uploads/2023/08/bollywood-celebrities-new-cars-featured.jpg",
      publishedAt: "2023-08-11T05:06:36Z",
      content:
        "In today’s world of glitz and glamour, Bollywood celebrities like all the other celebrities are also known for their luxurious lifestyles and extravagant purchases. Among their splurges, automobiles … [+4134 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TIMESOFINDIA.COM",
      title:
        "From asking 'Nayanthara mam pe lattu huye ya nhi' to being age shamed for 'Jawan', here is how Shah Rukh Khan replied in his style to some weird questions on Twitter - Times of India",
      description:
        "Shah Rukh Khan, who is now gearing up for his upcoming film 'Jawan', recently held a quick session of 'Ask Me Anything' on Twitter where he gave befitting replies to some nasty questions but in SRK style. Taking a dig at King Khan, one user asked “Si",
      url: "https://timesofindia.indiatimes.com/videos/etimes/bollywood/from-asking-nayanthara-mam-pe-lattu-huye-ya-nhi-to-being-age-shamed-for-jawan-here-is-how-shah-rukh-khan-replied-in-his-style-to-some-weird-questions-on-twitter/videoshow/102634897.cms",
      urlToImage:
        "https://timesofindia.indiatimes.com/photo/msid-102634897,imgsize-113266.cms",
      publishedAt: "2023-08-11T05:05:33Z",
      content:
        "Aug 11, 2023, 10:35AM ISTSource: etimes.inShah Rukh Khan, who is now gearing up for his upcoming film 'Jawan', recently held a quick session of 'Ask Me Anything' on Twitter where he gave befitting re… [+1186 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Imran Khan's Cryptic Post Is Giving The Internet Life: \"I Hear You And I'm Working On It\" - NDTV Movies",
      description:
        "A few users pointed out that Imran Khan has posted for the first time in five years",
      url: "https://www.ndtv.com/entertainment/imran-khan-to-make-a-comeback-soon-actor-says-i-hear-you-i-am-working-on-it-4288567",
      urlToImage:
        "https://c.ndtvimg.com/2023-08/bgapctd_imran-khan_625x300_11_August_23.jpg",
      publishedAt: "2023-08-11T05:01:49Z",
      content:
        "Imran Khan shared this image. (courtesy: imrankhan)\r\nNew Delhi: You must be living under a rock if you haven't heard about Imran Khan's 1 million likes comeback challenge. Replying to a fan's comment… [+2581 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Entertainment Desk",
      title:
        "Rani Mukerji had a miscarriage in 2020: 'Lost my baby 5 months into pregnancy' - Hindustan Times",
      description:
        "Rani Mukerji, who is married to Aditya Chopra, opened up about her second pregnancy during the Covid-19 pandemic, and having a miscarriage in her fifth month. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/rani-mukerji-reveals-miscarriage-2020-covid-pandemic-lost-second-baby-5-months-pregnant-101691728112528.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/08/11/1600x900/Rani_Mukerji__1691728559255_1691728559395.jpg",
      publishedAt: "2023-08-11T04:44:05Z",
      content:
        "Rani Mukerji spoke about the personal tragedy she suffered before filming her last movie Mrs Chatterjee vs Norway, which was released in March 2023. The Business Today reported that the actor reveale… [+2954 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Entertainment Desk",
      title:
        "AR Rahman on nepotism: 'If my kids aren't into it, this entire place is going to become a godown' - Hindustan Times",
      description:
        "AR Rahman's three kids, specially daughter Khatija and son Ameen, are into music and have done a lot of work in few years.",
      url: "https://www.hindustantimes.com/entertainment/music/ar-rahman-on-nepotism-if-my-kids-aren-t-into-it-this-entire-place-is-going-to-become-a-godown-101691726294785.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/08/11/1600x900/ar_rahman_kids_1691728024743_1691728024917.jpeg",
      publishedAt: "2023-08-11T04:39:29Z",
      content:
        "Music composer AR Rahman has addressed the topic of nepotism since he encourages all his three kids Khatija, Raheema and Ameen to prosper in their individual careers. He told The Hindu in an intervie… [+2168 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Drishyam 2 Star Ishita Dutta And Vatsal Sheth Reveal Baby Boy's Name - NDTV",
      description: "The couple welcomed a baby boy last month",
      url: "https://www.ndtv.com/entertainment/drishyam-2-star-ishita-dutta-and-vatsal-sheth-reveal-baby-boys-name-4288564",
      urlToImage:
        "https://c.ndtvimg.com/2023-08/d33t1sr8_ishita-dutta_625x300_11_August_23.jpg",
      publishedAt: "2023-08-11T04:38:43Z",
      content:
        "Vatsal and Ishita with son. (courtesy: ishidutta)\r\nNew Delhi: Drishyam 2 star Ishita Dutta and her husband Vatsal Sheth, who welcomed a baby boy last month, shared a video from his namkaran ceremony … [+1596 chars]",
    },
    {
      source: {
        id: null,
        name: "soompi",
      },
      author: "DY_Kim",
      title:
        "Watch: BTS's V Sings Of “Rainy Days” In Nostalgic MV For Pre-Release Single - soompi",
      description:
        "Watch: BTS’s V Sings Of “Rainy Days” In Nostalgic MV For Pre-Release Single",
      url: "https://www.soompi.com/article/1606611wpp/watch-btss-v-sings-of-rainy-days-in-nostalgic-mv-for-pre-release-single",
      urlToImage:
        "https://6.soompi.io/wp-content/uploads/image/20230811042644_v-2.jpg?s=900x600&e=t",
      publishedAt: "2023-08-11T04:32:28Z",
      content:
        "V has dropped another song from his upcoming album Layover!\r\nOn August 11 at 1 p.m. KST, the BTS member pre-released Love Me Again and Rainy Days along with the music video for Rainy Days.\r\nRainy Day… [+218 chars]",
    },
    {
      source: {
        id: null,
        name: "DNA India",
      },
      author: "DNA Web Team",
      title:
        "Gadar 2, OMG 2 release, review live updates: Sunny Deol's film may open at thrice as much as Akshay - DNA India",
      description:
        "Sunny Deol's action-drama Gadar 2 and Akshay Kumar's satirical-comedy OMG 2 have been released in the theaters worldwide.",
      url: "https://www.dnaindia.com/bollywood/report-gadar-2-omg-2-release-review-live-updates-sunny-deol-actioner-takes-on-akshay-kumar-comedy-at-box-office-3055362",
      urlToImage:
        "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2023/08/11/2602902-bo-final.jpg",
      publishedAt: "2023-08-11T03:56:00Z",
      content:
        "Sunny Deol's action-drama Gadar 2 and Akshay Kumar's satirical-comedy OMG 2 have been released in the theaters worldwide.The Independence Day weekend has always been one of the most awaited ones for … [+3735 chars]",
    },
    {
      source: {
        id: null,
        name: "123telugu.com",
      },
      author: null,
      title:
        "Vishal point blankly denies rumors on marriage with young actress - 123telugu",
      description:
        "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
      url: "https://www.123telugu.com/mnews/vishal-point-blankly-denies-rumors-on-marriage-with-young-actress.html",
      urlToImage:
        "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
      publishedAt: "2023-08-11T03:30:00Z",
      content:
        "Rumors on Tamil hero Vishal’s marriage have been doing the rounds for the past few months. Recently, there were unconfirmed reports that Vishal will soon be tying the knot with young Tamil actress La… [+1367 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Komal RJ Panchal",
      title:
        "Yami Gautam Dhar says she was ‘disheartened’ when OMG 2 was given ‘A’ certificate by the CBFC: ‘Will never hurt anyone…’ - The Indian Express",
      description:
        "OMG 2 starring Akshay Kumar, Yami Gautam, Pankaj Tripathi has received an 'A' certificate from the CBFC and suggested 27 modifications.",
      url: "https://indianexpress.com/article/entertainment/bollywood/yami-gautam-dhar-says-she-was-disheartened-when-omg-2-was-given-a-certificate-by-the-cbfc-8886189/",
      urlToImage: "https://images.indianexpress.com/2023/08/Yami-Gautam.jpg",
      publishedAt: "2023-08-11T02:27:49Z",
      content:
        "Akshay Kumar‘s OMG 2 is all set to hit the big screen today. The film, which also stars Yami Gautam Dhar and Pankaj Tripathiamong others, has been a highly anticipated sequel to OMG. The original sta… [+5067 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "The Indian Express",
      title:
        "Abhishek Bachchan hopes the ‘two ladies’ of his family mom Jaya Bachchan, wife Aishwarya Rai ‘do more work’: ‘There’s so much more to give’ - The Indian Express",
      description: null,
      url: "https://indianexpress.com/article/entertainment/bollywood/abhishek-bachchan-hopes-two-ladies-jaya-bachchan-aishwarya-rai-do-more-work-8885890/",
      urlToImage: null,
      publishedAt: "2023-08-11T02:27:45Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Entertainment Desk",
      title:
        "AR Rahman recalls when ‘underworld mafia culture’ dissuaded him from moving to Mumbai: ‘Subhash Ghai asked me…’ - The Indian Express",
      description:
        "AR Rahman recalled the time when Subhash Ghai suggested that he should switch base to Mumbai. But he couldn't, because of a very dangerous problem.",
      url: "https://indianexpress.com/article/entertainment/bollywood/ar-rahman-underworld-mafia-culture-moving-to-mumbai-subhash-ghai-8885352/",
      urlToImage: "https://images.indianexpress.com/2023/04/ar-rahman-wife.jpg",
      publishedAt: "2023-08-11T02:27:41Z",
      content:
        "Musician AR Rahman, who is one of the most celebrated living artists in India, looked back on a pivotal moment in his career, when he was offered the chance to move to Mumbai from Chennai. But he sai… [+1633 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Fast and Factual LIVE: Kuwait has Banned the Movie Barbie Over Public Ethics Concern - Firstpost",
      description: null,
      url: "https://www.youtube.com/watch?v=El-HMc_1W9E",
      urlToImage: null,
      publishedAt: "2023-08-11T02:25:46Z",
      content:
        "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more",
    },
    {
      source: {
        id: null,
        name: "Bollywood Hungama",
      },
      author: "Bollywood Hungama",
      title:
        "Alia Bhatt and Manish Malhotra to drop Rani collection from Rocky Aur Rani Kii Prem Kahaani promotions; proceeds to go to healthcare of women and children - Bollywood Hungama",
      description:
        "Alia Bhatt and Manish Malhotra to drop Rani collection from Rocky Aur Rani Kii Prem Kahaani promotions; proceeds to go to healthcare of women and children. Bollywood News: Latest Bollywood News, Bollywood News Today, Bollywood Celebrity News, Breaking News, C…",
      url: "https://www.bollywoodhungama.com/news/bollywood/alia-bhatt-manish-malhotra-drop-rani-collection-rocky-aur-rani-kii-prem-kahaani-promotions-proceeds-go-healthcare-women-children/",
      urlToImage:
        "https://media5.bollywoodhungama.in/wp-content/uploads/2023/08/Alia-Bhatt-and-Manish-Malhotra-to-drop-Rani-collection-from-Rocky-Aur-Rani-Kii-Prem-Kahaani-promotions-proceeds-to-go-to-healthcare-of-vulnerable-women-and-children.jpg",
      publishedAt: "2023-08-11T01:58:02Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "ANI",
      title:
        "Ayushmann used to imitate woman's voice when his girlfriend's dad picked call - Hindustan Times",
      description:
        "Ayushmann Khurrana has the ability to modulate voice according to characters. He will be seen turning Pooja in his upcoming film, Dream Girl 2.  | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/ayushmann-used-to-imitate-womans-voice-whenever-his-girlfriends-call-was-picked-up-by-her-dad-101691717379801.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/08/11/1600x900/ayushmann_khurrana_dream_girl_2_1691717708415_1691717708716.jpg",
      publishedAt: "2023-08-11T01:42:34Z",
      content:
        "Actor Ayushmann Khurrana is a man of many talents. One of the most unique aspects of his art is his ability to modulate voice according to characters. In 2019, he literally stunned everyone by dubbin… [+2265 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "etimes.in",
      title:
        "Bigg Boss OTT 2: Jiya Shankar reveals she hasn't spoken to her father in last 20 years; says 'He has anot - Times of India",
      description:
        "Bigg Boss OTT season 2 contestant Jiya Shankar in a conversation with Elvish Yadav spoke about her personal life. The actress poured her heart about h",
      url: "https://timesofindia.indiatimes.com/tv/news/hindi/bigg-boss-ott-2-jiya-shankar-reveals-she-hasnt-spoken-to-her-father-in-last-20-years-says-he-has-another-daughter-from-remarriage/articleshow/102623642.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-102623680,width-1070,height-580,imgsize-21454,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2023-08-11T01:30:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Rajinikanth Fans Throng Theatres As Action Thriller Jailer Hits Screens - NDTV",
      description:
        "Hundreds of fans thronged theatres for the customary first day first show as Tamil superstar Rajinikanth's Jailer finally released on Thursday after a two-year of long gap.",
      url: "https://www.ndtv.com/india-news/rajinikanth-fans-throng-theatres-as-action-thriller-jailer-hits-screens-4288370",
      urlToImage:
        "https://c.ndtvimg.com/2023-06/en73408o_-jailer_625x300_02_June_23.jpg",
      publishedAt: "2023-08-11T01:29:40Z",
      content:
        "Tamil Superstar Rajinikanth's much-awaited Jailer hit the theatres yesterday across the world.\r\nChennai: Hundreds of fans thronged theatres for the customary first day first show as Tamil superstar R… [+2090 chars]",
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "Arunesh Kumar Sharma",
      title:
        "Horoscope Today, August 11, 2023: Check here Astrological prediction for all zodiac signs - India Today",
      description:
        "Today Horoscope: Astrological prediction for August 11, 2023: Find out answers to your deepest burning questions related to love, health, money, career in this daily horoscope for Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Caprico…",
      url: "https://www.indiatoday.in/horoscopes/story/horoscope-today-august-11-2023-aries-taurus-gemini-cancer-leo-virgo-libra-scorpio-sagittarius-capricorn-aquarius-pisces-2419085-2023-08-11",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/main-tarot-311458-16x9_7.jpg?VersionId=KxMr04btIZR1SaAIbh72gET1i78wA._H",
      publishedAt: "2023-08-11T01:00:45Z",
      content:
        "Are you expecting a job offer or communication with your romantic partner? Look for your Sun sign in the daily horoscope below and find out.\r\nAries Daily Horoscope\r\nThere are possibilities for growth… [+8274 chars]",
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
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=69f46c3ec069493ea15e2ddba35f0f17&page=1&pageSize=${8}`;
    let data = await fetch(url);
    let show = await data.json();
    this.setState({ articles: show.articles, totalResult: show.totalResult });
  }
  prevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=69f46c3ec069493ea15e2ddba35f0f17&page=${
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
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=69f46c3ec069493ea15e2ddba35f0f17&page=${
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
          <h1 className="text-blue-700 text-2xl text-center animate-bounce font-serif p-2">
            {" "}
            Here some Entertainment news
          </h1>
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
