import React, { Component } from "react";
import NavbarNews from "./NavbarNews";
import NewsItem from "./NewsItem";
import "bootstrap/dist/css/bootstrap.min.css";
export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Nikita Prasad",
      title:
        "Air India Rebranding Live: Air India's Maharaja Mascot ‘lives on’, demise ‘exaggerated’, says CEO Wilson | Mint - Mint",
      description:
        "Air India Rebranding Live: Tata Group-backed Air India, today unveiled a modern new brand identity and new aircraft livery, signifying the airline's bold vision of its future. Tata's N Chandrasekaran said the company aims to become world-class in terms of saf…",
      url: "https://www.livemint.com/companies/news/air-india-rebranding-live-air-india-rebranding-on-august-10-revamped-cabin-interiors-new-emblem-maharaja-mascot-11691671398293.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/08/10/600x338/air_1691676589099_1691676589357.jpg",
      publishedAt: "2023-08-10T14:41:11Z",
      content:
        "Air India Rebranding Live: Air India unveiled its new brand identity and aircraft livery on August 10 as part of its rebranding, representing the airline's bold vision of its future. The Tata Group-o… [+7030 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "“In 2028, when you will….” PM Modi derides Opposition with bold prediction in Lok Sabha - ANI News",
      description: null,
      url: "https://www.youtube.com/watch?v=oIFL9fhuKb4",
      urlToImage: "https://via.placeholder.com/300",
      publishedAt: "2023-08-10T13:13:35Z",
      content:
        "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV Sports Desk",
      title:
        '"After Yuvraj Singh Nobody....": Rohit Sharma Admits Grim Situation Ahead Of Asia Cup, World Cup - NDTV Sports',
      description:
        "Yuvraj Singh and Rohit Sharma are veteran India stars. The ODI World Cup 2023 in India is less that two months away but the hosts' team combination is nowhere close to being sorted",
      url: "https://sports.ndtv.com/icc-cricket-world-cup-2023/after-yuvraj-singh-nobody-rohit-sharma-admits-grim-situation-ahead-of-asia-cup-world-cup-4286709",
      urlToImage:
        "https://c.ndtvimg.com/2020-04/g8luj4d8_rohit-sharma-yuvraj-singh-instagram_625x300_08_April_20.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
      publishedAt: "2023-08-10T13:07:00Z",
      content:
        "The ODI World Cup 2023 in India is less that two months away but the hosts' team combination is nowhere close to being sorted. Much like the 2019 World Cup, the one slot which is bothering India is t… [+1746 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Tech",
      title:
        "James Webb Space Telescope sees farthest star ‘Earendel’ in new light; NASA shares photo - HT Tech",
      description:
        "NASA's James Webb Telescope has taken a shot of Earendel, the farthest star known, using a space trick called gravitational lensing. This breakthrough helps us explore the early universe and its first stars.",
      url: "https://tech.hindustantimes.com/tech/news/james-webb-space-telescope-sees-farthest-star-earendel-in-new-light-nasa-shares-photo-71691672114569.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2023/08/10/1600x900/Earendel_1691672262335_1691672262813.jpg",
      publishedAt: "2023-08-10T12:59:00Z",
      content:
        "Following in the footsteps of the iconic Hubble Space Telescope, NASA's James Webb Space Telescope has looked ta the farthest star ever detected called Earendel. This star was first glimpsed using th… [+1772 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Chandrayaan-3 Live Updates | ISRO Successfully Performs Third Lunar-Bound Manoeuvre | English News - CNN-News18",
      description:
        "Chandrayaan-3 Live Updates | ISRO Successfully Performs Third Lunar-Bound Manoeuvre | English NewsChandrayaan-3 Mission Update: The Indian Space Research Org...",
      url: "https://www.youtube.com/watch?v=6DC9xRzEmEY",
      urlToImage: "https://i.ytimg.com/vi/6DC9xRzEmEY/maxresdefault_live.jpg",
      publishedAt: "2023-08-10T12:53:09Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "News-Medical.Net",
      },
      author: null,
      title:
        "Study explores changes in cardiovascular disease hospitalization trends during the COVID-19 pandemic - News-Medical.Net",
      description:
        "A group of researchers examined the variations in cardiovascular disease hospitalizations pre- and post-COVID-19 pandemic.",
      url: "https://www.news-medical.net/news/20230810/Study-explores-changes-in-cardiovascular-disease-hospitalization-trends-during-the-COVID-19-pandemic.aspx",
      urlToImage:
        "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_755966_1691668080552910.jpg",
      publishedAt: "2023-08-10T12:44:00Z",
      content:
        "In a recent study published in Scientific Reports, a group of researchers examined the variations in cardiovascular disease (CVD) hospital diagnoses in the Netherlands during the coronavirus disease … [+6247 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TIMESOFINDIA.COM",
      title:
        "PM Modi takes a dig at Adhir Ranjan Chowdhury: 'Why is Congress neglecting you, is it because of a call from Kolkata ... ?' - Times of India",
      description:
        "Addressing the Lok Sabha in response to the Opposition's no-confidence motion, PM Modi criticized the Congress, highlighting the absence of their tallest leader from the list of speakers. He noted Amit Shah's gesture of granting time to Adhir Ranjan",
      url: "https://timesofindia.indiatimes.com/videos/toi-original/pm-modi-takes-a-dig-at-adhir-ranjan-chowdhury-why-is-congress-neglecting-you-is-it-because-of-a-call-from-kolkata-/videoshow/102612390.cms",
      urlToImage:
        "https://timesofindia.indiatimes.com/photo/msid-102612390,imgsize-42846.cms",
      publishedAt: "2023-08-10T12:31:32Z",
      content:
        "Aug 10, 2023, 06:01PM ISTSource: TOI.inAddressing the Lok Sabha in response to the Opposition's no-confidence motion, PM Modi criticized the Congress, highlighting the absence of their tallest leader… [+528 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        '"When You Bring No-Trust Vote In 2028...": PM Modi Mocks Opposition - NDTV',
      description:
        "Responding to the no-confidence motion against his government, Prime Minister Narendra Modi today predicted that the Opposition will try this again five years later and stressed that India will then be among the world's top 3 economies.",
      url: "https://www.ndtv.com/india-news/when-you-bring-no-trust-vote-in-2028-pm-modi-mocks-opposition-4286879",
      urlToImage:
        "https://c.ndtvimg.com/2023-08/4jsi3eng_pm-modi-ani-650_650x400_10_August_23.jpg",
      publishedAt: "2023-08-10T12:28:09Z",
      content:
        "The Prime Minister is responding to a no-confidence motion over the unrest in Manipur\r\nNew Delhi: Responding to the no-confidence motion against his government, Prime Minister Narendra Modi today pre… [+1375 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "Press Trust of India",
      title:
        "\"When My Name Was Not There...\": 'Shocked' Shikhar Dhawan Breaks Silence On Indian Cricket Team Snub.. - NDTV Sports",
      description:
        'Senior India batter Shikhar Dhawan was a "bit shocked" at his exclusion from India\'s Asian Games squad',
      url: "https://sports.ndtv.com/cricket/when-my-name-was-not-there-shocked-shikhar-dhawan-breaks-silence-on-indian-cricket-team-snub-for-asian-games-4286838",
      urlToImage:
        "https://c.ndtvimg.com/2023-07/pbd37tgo_dhawan_625x300_16_July_23.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
      publishedAt: "2023-08-10T12:20:08Z",
      content:
        'Senior India batter Shikhar Dhawan was a "bit shocked" at his exclusion from India\'s Asian Games squad but remains determined to make a national comeback in the near future. With the first-choice pla… [+2067 chars]',
    },
    {
      source: {
        id: null,
        name: "Bar & Bench - Indian Legal News",
      },
      author: "Bar & Bench",
      title:
        "Appointment of Election Commissioners: New government Bill does not nullify Supreme Court verdict, but is against its spirit - Bar & Bench - Indian Legal News",
      description:
        "The Central government on Thursday introduced a Bill in the parliament to govern the appointment and conditions of service of Election Commissioners (ECs), incl",
      url: "https://www.barandbench.com/news/appointment-of-election-commissioners-new-government-bill-does-not-nullify-supreme-court-verdict-but-is-against-its-spirit",
      urlToImage:
        "https://gumlet.assettype.com/barandbench%2F2021-05%2F6cc58530-52a3-4fd6-8f35-9b20201b9c7d%2FSupreme_Court_and_Election_Commission_of_india__1_.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
      publishedAt: "2023-08-10T12:17:37Z",
      content:
        "That said, this move does violate the spirit of the apex court verdict. \r\nThe Constitution Bench judgment is founded on the premise that the Election Commission should be fiercely independent and ins… [+1582 chars]",
    },
    {
      source: {
        id: null,
        name: "123telugu.com",
      },
      author: null,
      title:
        "SRK gives insights on Vijay Sethupathi’s role in Jawan - 123telugu",
      description:
        "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
      url: "https://www.123telugu.com/mnews/srk-gives-insights-on-vijay-sethupathis-role-in-jawan.html",
      urlToImage:
        "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
      publishedAt: "2023-08-10T12:16:00Z",
      content:
        "Jawan starring King Khan Shah Rukh Khan, is up for a grand release on September 7, 2023. Directed by Atlee, this mass masala entertainer has the versatile actor Vijay Sethupathi as the antagonist.\r\nI… [+607 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT News Desk",
      title:
        "No Confidence Motion LIVE: 'For Oppn, hunger for power above poor', says PM Modi - Hindustan Times",
      description:
        "No Confidence Motion LIVE Updates: This is the second time PM Modi is facing a no-confidence motion during his tenure.",
      url: "https://www.hindustantimes.com/india-news/no-confidence-motion-live-updates-pm-modi-to-reply-in-lok-sabha-parliament-monsoon-session-modi-speech-congress-bjp-101691658037495.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/08/10/1600x900/modi_lok_sabha_1691668158509_1691668167014.jpeg",
      publishedAt: "2023-08-10T11:47:56Z",
      content:
        "No Confidence Motion LIVE Updates: Prime Minister Narendra Modi addressed the Lok Sabha in response to the Opposition's no-confidence motion against the NDA government.\r\n Prime Minister Narendra Modi… [+12554 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "The Indian Express",
      title:
        "Oldest surviving plant species saw dinosaurs come and go, humans threaten it - The Indian Express",
      description: null,
      url: "https://indianexpress.com/article/technology/science/takakia-oldest-surviving-plant-species-8885809/",
      urlToImage: "https://via.placeholder.com/300",
      publishedAt: "2023-08-10T11:40:12Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Sergio Ramos Montoya",
      title:
        "With the Oppo Find N3, fast-charging could soon be a reality for foldable smartphones - HT Tech",
      description:
        "The foldable smartphone industry is about to make a leap in fast charging that puts it on par with non-foldable devices.",
      url: "https://tech.hindustantimes.com/mobile/news/with-the-oppo-find-n3-fast-charging-could-soon-be-a-reality-for-foldable-smartphones-71691666666413.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2023/08/10/1600x900/2_1678696242918_1691666759944.jpg",
      publishedAt: "2023-08-10T11:34:18Z",
      content:
        "The foldable smartphone segment has seen significant advances in recent years. Using Samsung's most recent launch as an example, users should be impressed with the breakthrough hinge technology that … [+2152 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "On Jailer Day, Rajinikanth's Wife Latha And Daughter Aishwaryaa Spotted At Chennai Theatre - NDTV",
      description:
        "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
      url: "https://www.ndtv.com/news",
      urlToImage: "https://cdn.ndtv.com/common/images/ogndtv.png",
      publishedAt: "2023-08-10T11:25:47Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "WION",
      },
      author: "WION Web Team",
      title:
        "WHO designates new Covid strain 'Eris' as 'variant of interest' amid surge in cases globally - WION",
      description:
        "WHO designates new Covid strain ‘Eris’ as variant of interest amid global surge in cases",
      url: "https://www.wionews.com/science/who-designates-new-covid-strain-eris-as-variant-of-interest-amid-surge-in-cases-globally-624194",
      urlToImage:
        "https://cdn.wionews.com/sites/default/files/2023/08/10/372369-untitled-design-2023-08-10t164024858.png",
      publishedAt: "2023-08-10T11:04:46Z",
      content:
        "A new strain of coronavirus has been labelled as a 'variant of interest' by the World Health Organisation, although the officials have predicted a low public health risk. \r\nThe variant, which is know… [+3463 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Akash Podishetti",
      title:
        "Financials drag Sensex 307 points lower post RBI’s hawkish note on inflation - The Economic Times",
      description:
        "Sectors sensitive to domestic interest rates like banks and financial services stocks were among the top losers as Nifty Bank fell 0.76%. Meanwhile, FMCG index lost 0.91%, followed by Pharma, which was down 0.74%.",
      url: "https://economictimes.indiatimes.com/markets/stocks/news/financials-drag-sensex-307-points-lower-post-rbis-hawkish-note-on-inflation/articleshow/102607666.cms",
      urlToImage:
        "https://economictimes.indiatimes.com/thumb/msid-102607655,width-1070,height-580,imgsize-155138,overlay-etmarkets/photo.jpg",
      publishedAt: "2023-08-10T10:29:00Z",
      content:
        "Benchmark indices closed lower on Thursday, dragged by financials and consumer stocks after the Reserve Bank of India (RBI) delivered a hawkish note on inflation in the short term, despite an anticip… [+2136 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "Samsung receives over 1 lakh pre-bookings for Galaxy Z Flip 5 and Z Fold 5 | Mint - Mint",
      description:
        "Samsung India receives record pre-bookings for Galaxy Z Flip 5 and Z Fold 5, with over 100,000 consumers pre-booking in 28 hours.",
      url: "https://www.livemint.com/technology/gadgets/samsung-receives-over-1-lakh-pre-bookings-for-galaxy-z-flip-5-and-z-fold-5-11691662164853.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/08/10/600x338/South-Korea-Samsung-Phones-3_1691662209235_1691662241015.jpg",
      publishedAt: "2023-08-10T10:13:00Z",
      content:
        "Samsung India has revealed that it has secured record pre-bookings for its fifth generation foldable devices launched recently. As announced by the company, more than 1,00,000 consumers pre-booked Ga… [+1955 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "\"What About Your MP?\" Mahua Moitra Attacks Smriti Irani On 'Flying Kiss' Row - NDTV",
      description:
        'Trinamool Congress MP Mahua Moitra today attacked Union Minister Smriti Irani for talking "about some flying kiss" but not saying a word when a BJP MP was accused of sexual harassment by wrestlers.',
      url: "https://www.ndtv.com/india-news/misplaced-priorities-mahua-moitra-attacks-smriti-irani-on-flying-kiss-row-4286168",
      urlToImage:
        "https://c.ndtvimg.com/2023-08/6iu5a0go_mahua-moitra-smriti-irani-650_625x300_10_August_23.jpg",
      publishedAt: "2023-08-10T09:52:17Z",
      content:
        'Ms Moitra did not name outgoing Wrestling Federation of India chief Brij Bhushan Sharan Singh.\r\nNew Delhi: Trinamool Congress MP Mahua Moitra today attacked Union Minister Smriti Irani for talking "a… [+1674 chars]',
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "India vs Pakistan, Asian Champions Trophy 2023: Action in Images - Hindustan Times",
      description:
        "Captain Harmanpreet Singh scored twice while Jugraj Singh and Akashdeep Singh scored as well as India beat Pakistan 4-0.",
      url: "https://www.hindustantimes.com/photos/sports/india-vs-pakistan-asian-champions-trophy-2023-action-in-images-101691658520927.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/08/10/1600x900/FHOCKEY-ASIAN-CHAMPIONS-INDIA-PAKISTAN-12_1691659976702_1691660070552.jpg",
      publishedAt: "2023-08-10T09:50:57Z",
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
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=69f46c3ec069493ea15e2ddba35f0f17&page=1&pageSize=${9}`;
    let data = await fetch(url);
    let show = await data.json();
    this.setState({ articles: show.articles, totalResult: show.totalResult });
  }
  prevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=69f46c3ec069493ea15e2ddba35f0f17&page=${
      this.state.page - 1
    }&pageSize=${9}`;
    let data = await fetch(url);
    let show = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: show.articles,
    });
  };

  nextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResult)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=69f46c3ec069493ea15e2ddba35f0f17&page=${
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
        <div className="container my-3">
          <h1
            style={{ textAlign: "center", padding: "30px" }}
            className="text-5xl">
            Welcome to News Dekho
          </h1>
          <NavbarNews />
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title.slice(0, 50).concat("...")}
                    imageUrl={element.urlToImage}
                    description={element.description}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
            <div className="d-flex justify-content-between">
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
