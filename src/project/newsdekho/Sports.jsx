import React, { Component } from "react";
import NewsItem from "./NewsItem";
import NavbarNews from "./NavbarNews";
export default class Sports extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "International Cricket Council",
      },
      author: "ICC",
      title:
        "Pakistan coach steps down ahead of South Africa series - ICC Cricket",
      description:
        "Pakistan have been dealt a blow with news that head coach of their women's team Mark Coles has resigned due to personal reasons.",
      url: "https://www.icc-cricket.com/news/3625864",
      urlToImage:
        "https://resources.pulse.icc-cricket.com/ICC/photo/2023/08/11/55d8248b-65bf-49ec-bb4a-3fbadf79aa2a/Mark-Coles.jpg",
      publishedAt: "2023-08-11T01:28:34Z",
      content:
        "Pakistan have been dealt a blow with news that head coach of their women's team Mark Coles has resigned due to personal reasons.Coles has been at the helm since April this year, but will step down im… [+889 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "Two-time World Cup-winning captain's swipe at India for not winning ICC trophies - Hindustan Times",
      description:
        "Daren Sammy who is no stranger to World titles agreed that India have a wealth of talent but he did not forget to send a reminder of their empty trophy cabinet. | Cricket",
      url: "https://www.hindustantimes.com/cricket/whos-winning-tournaments-two-time-world-cup-winning-captain-takes-swipe-at-india-for-not-winning-icc-trophies-101691685077401.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/08/10/1600x900/CRICKET-IND-WIS-T20I-17_1691685171415_1691685193873.jpg",
      publishedAt: "2023-08-11T01:21:58Z",
      content:
        "Even with the majority of their first-choice players missing, India field an XI capable of beating any team in the world. That's the depth of Indian cricket currently. Many believe that India are cap… [+2646 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "'You did not ask about Jadeja?': Rohit's mic drop reaction to ‘Kohli question' - Hindustan Times",
      description:
        "Rohit Sharma issued a hard-hitting response about a ‘Virat Kohli query’ during a media interaction in Mumbai. | Cricket",
      url: "https://www.hindustantimes.com/cricket/rohit-sharma-mic-drop-reaction-to-virat-kohli-query-ravindra-jadeja-also-not-playing-you-did-not-ask-about-him-101691684869083.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/08/10/1600x900/Collage_Maker-10-Aug-2023-10-04-PM-3216_1691687795055_1691687800185.jpg",
      publishedAt: "2023-08-11T00:47:58Z",
      content:
        "With less than two months remaining for the 2023 edition of the ICC World Cup, Rohit Sharma's Team India is grappling with experiments in the Caribbean. Focusing on the bigger picture, the Rahul Drav… [+2567 chars]",
    },
    {
      source: {
        id: null,
        name: "The Real Champs",
      },
      author: "Sourav Mahanty",
      title:
        "Manchester United hero in advanced talks to join Real Madrid - The Real Champs",
      description:
        "Real Madrid find themselves in a very difficult position right now. One of their most important players, Thibaut Courtois, has torn his ACL before the camp...",
      url: "https://therealchamps.com/2023/08/11/manchester-united-hero-real-madrid-2/",
      urlToImage:
        "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1309339248.jpeg",
      publishedAt: "2023-08-11T00:06:06Z",
      content:
        "Real Madrid find themselves in a very difficult position right now. One of their most important players, Thibaut Courtois, has torn his ACL before the campaign even started. There is a big possibilit… [+1527 chars]",
    },
    {
      source: {
        id: null,
        name: "Managing Madrid",
      },
      author: "Matt_Wiltse",
      title:
        "Athletic Bilbao’s Achilles Heel Set to be Targeted by Real Madrid - Managing Madrid",
      description:
        "Aitor Paredes and Dani Vivian form a makeshift center-back pairing following the departure of Inigo Martinez and an injury to Yeray Alvarez.",
      url: "https://www.managingmadrid.com/2023/8/10/23824567/athletic-bilbaos-achilles-heel-set-to-be-targeted-by-real-madrid",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/Y99M1XY-D2LxX5DlOw5xStN9qWk=/0x0:6000x3141/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24843117/1601458712.jpg",
      publishedAt: "2023-08-10T20:25:25Z",
      content:
        "As the anticipation mounts for this Saturdays clash between Athletic Bilbao and Real Madrid, one glaring weakness in the Basque sides armor has caught the Real Madrid eye the makeshift and somewhat i… [+1594 chars]",
    },
    {
      source: {
        id: null,
        name: "Insidesport.in",
      },
      author: "Nishant Singh",
      title:
        "No words by BCCI on ticketing partner for World Cup 2023, BookMyShow leading race - InsideSport",
      description:
        "Amidst silence from BCCI regarding World Cup 2023 ticketing partner, BookMyShow emerges as the frontrunner.",
      url: "https://www.insidesport.in/no-words-by-bcci-on-ticketing-partner-for-world-cup-2023-bookmyshow-leading-race/",
      urlToImage:
        "https://www.insidesport.in/wp-content/uploads/2023/08/54.jpg",
      publishedAt: "2023-08-10T18:41:50Z",
      content:
        "Recent indications propose that the BCCI is inclining towards delegating the task of ticket distribution for the World Cup 2023 to BookMyShow.With the highly anticipated ODI World Cup 2023 in India j… [+2383 chars]",
    },
    {
      source: {
        id: null,
        name: "Sportskeeda",
      },
      author: "Matthew Guyett",
      title:
        '"Terrible business", "Would have won everything if not for maguire and Ole" - Manchester United fans fume as midfielder agrees deal to leave club - Sportskeeda',
      description:
        "Manchester United fans have given polarising reactions to the news that Fred is heading to Turkish giants Fenerbahce.",
      url: "https://www.sportskeeda.com/football/news-terrible-business-would-won-everything-maguire-ole-manchester-united-fans-fume-midfielder-agrees-deal-leave-club",
      urlToImage:
        "https://staticg.sportskeeda.com/editor/2023/08/d09f8-16916902290033-1920.jpg",
      publishedAt: "2023-08-10T18:18:00Z",
      content:
        "Manchester United fans have given polarising reactions to the news that Fred is heading to Turkish giants Fenerbahce.\r\nTransfer expert Fabrizio Romano reports that the Super Lig outfit have had an ag… [+2389 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: "ECB Reporters Network",
      title:
        "Recent Match Report - Fire vs Phoenix 14th Match 2023 - ESPNcricinfo",
      description:
        "\"Don't worry - I've got this,\" quick tells her captain before staying true to her word",
      url: "https://www.espncricinfo.com/series/the-hundred-women-s-competition-2023-1355568/birmingham-phoenix-women-vs-welsh-fire-women-14th-match-1355585/match-report",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/365400/365489.6.jpg",
      publishedAt: "2023-08-10T17:54:59Z",
      content:
        "Report\"Don't worry - I've got this,\" quick tells her captain before staying true to her word",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "Press Trust of India",
      title:
        "Shikhar Dhawan Announces His Choice For India's No. 4 Batter As ODI World Cup 2023 Looms - NDTV Sports",
      description:
        "With question marks over the fitness of Shreyas Iyer, the number four position in the Indian ODI set-up is up for grabs ahead of the World Cup",
      url: "https://sports.ndtv.com/icc-cricket-world-cup-2023/shikhar-dhawan-announces-his-choice-for-indias-no-4-batter-as-odi-world-cup-2023-looms-4287914",
      urlToImage:
        "https://c.ndtvimg.com/2023-06/c6e0ejns_shikha-dhawan_625x300_30_June_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2023-08-10T17:02:00Z",
      content:
        "With question marks over the fitness of Shreyas Iyer, the number four position in the Indian ODI set-up is up for grabs ahead of the World Cup. Suryakumar Yadav and Sanju Samson are the contenders wh… [+1181 chars]",
    },
    {
      source: {
        id: null,
        name: "Express",
      },
      author: "Ryan Taylor, Lewis Winter",
      title:
        "Transfer news LIVE: Arsenal bonus signing, Man City make £87m bid, Man Utd defender stance - Express",
      description:
        "Transfer news LIVE - Express Sport brings you up to date with all the latest transfer news on Thursday, August 10.",
      url: "https://www.express.co.uk/sport/football/1800665/Transfer-news-LIVE-Chelsea-Romeo-Lavia-Liverpool-Man-Utd",
      urlToImage:
        "https://cdn.images.express.co.uk/img/dynamic/67/1200x712/4901609.jpg?r=1691684846903",
      publishedAt: "2023-08-10T16:11:00Z",
      content:
        'Pep Guardiola was shocked to hear the news that Tottenham have accepted a bid for Harry Kane.\r\nWhen told of the news, Guardiola said in astonishment: "Is that [correct]? Officially?"\r\nHe also added o… [+504 chars]',
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "Harry Kane to snub Bayern, Tottenham captain ‘leaning towards staying’: Report - Hindustan Times",
      description:
        "Tottenham Hotspur captain Harry Kane could reject a massive move to Bayern Munich and is reportedly ‘leaning towards staying’ in England. | Football News",
      url: "https://www.hindustantimes.com/sports/football/harry-kane-to-sensationally-snub-bayern-tottenham-hotspur-captain-leaning-towards-staying-report-101691682261537.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/08/10/1600x900/SOCCER-GERMANY-BAY-KANE-3_1691682329048_1691682366819.JPG",
      publishedAt: "2023-08-10T15:49:20Z",
      content:
        "According to reports, Tottenham Hotspur have finally accepted a bid from Bayern Munich for captain Harry Kane. The Bundesliga side have been eyeing the star striker for quite some time, and according… [+1834 chars]",
    },
    {
      source: {
        id: null,
        name: "Bavarian Football Works",
      },
      author: "CSmith1919",
      title:
        "With Benjamin Pavard on verge of Manchester United transfer, Bayern Munich’s Matthijs de Ligt touts squad’s c… - Bavarian Football Works",
      description: "The Dutchman likes have competition at center-back.",
      url: "https://www.bavarianfootballworks.com/2023/8/10/23826297/benjamin-pavard-manchester-united-bayern-munich-de-ligt-upamecano-kim-jae-tuchel-transfer-rumors-tel",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/Uz1hjBsCXbntSLOG4rL06SP5ABY=/0x310:3294x2035/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24840570/1586817854.jpg",
      publishedAt: "2023-08-10T14:30:00Z",
      content:
        "Bayern Munich center-back Matthijs de Ligt can look at his squads depth chart and see a load of talent in the central defense. \r\nAt the moment (and this all could change depending on how seriously Ba… [+1083 chars]",
    },
    {
      source: {
        id: null,
        name: "Crictracker.com",
      },
      author: "Koustav Sengupta",
      title:
        "Mumbai Indians pick MI-WIN combined XI, Kieron Pollard named as captain - CricTracker",
      description:
        "Right after winning the inaugural edition of the Major League Cricket (MLC), the MI franchise announced a combined playing XI featuring West Indies stars, who represented them in T20 cricket all acros",
      url: "https://www.crictracker.com/cricket-news/mumbai-indians-pick-mi-cum-wi-xi-kieron-pollard-named-captain/",
      urlToImage:
        "https://media.crictracker.com/media/attachments/1685125260020_Mumbai-Indians-vs-Gujarat-Titans.jpeg",
      publishedAt: "2023-08-10T14:10:00Z",
      content:
        "Right after winning the inaugural edition of the Major League Cricket (MLC), the MI franchise announced a combined playing XI featuring West Indies stars, who represented them in T20 cricket all acro… [+2033 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Express News Service",
      title:
        "‘I am not retiring’: Rani Rampal accepts to be coach of U-17 team but lashes out against her sacking as a player from Indian hockey team - The Indian Express",
      description:
        "Former captain Sardar Singh too has been named as a U-17 coach; Rampal maintains she isn’t retiring and lashes out against coach Schopman and selectors.",
      url: "https://indianexpress.com/article/sports/hockey/i-am-not-retiring-rani-rampal-accepts-to-be-coach-of-u-17-team-but-lashes-out-against-her-sacking-as-a-player-from-indian-hockey-team-8886482/",
      urlToImage: "https://images.indianexpress.com/2023/08/Rani.jpg",
      publishedAt: "2023-08-10T14:07:39Z",
      content:
        "Former India captains Rani Rampal and Sardar Singh were named as coaches of India’s soon-to-be-formed under-17 teams, Hockey India announced on Thursday.However, as she took on a new position, Rani s… [+2135 chars]",
    },
    {
      source: {
        id: null,
        name: "Cricxtasy.com",
      },
      author: null,
      title:
        "BPH vs WEF Dream11 Prediction, The Hundred 2023 Fantasy Cricket Tips: Dream11 Team, Weather Report, Pitch Report, Injury Updates and Team News, The Hundred Men's Competition - cricxtasy.com",
      description:
        "BPH vs WEF Dream11 Prediction:The outcome of this game will be decided by how Birmingham Phoenix’s batters counter Welsh Fire’s bowling. Birmingham Phoenix",
      url: "https://cricxtasy.com/fantasycricket/bph-vs-wef-dream11-prediction-the-hundred-2023-mens/cid11878453.htm",
      urlToImage:
        "https://cricxtasy.com/static/c1e/client/95405/uploaded_original/8f630f8c797a522a54000d59c3b1d6b6.webp",
      publishedAt: "2023-08-10T14:01:24Z",
      content:
        "<li>Will Smeed has 65 runs at a strike rate of 154.76 in two innings against Welsh Fire.\r\n</li><li>Will Smeed at Edgbaston in The Hundred: 294 runs, 156 balls, 58.80 avg, 188.46 SR.\r\n</li><li>Will Sm… [+8915 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "The Indian Express",
      title:
        "Indian hockey’s new style: Half-court press to leverage counter attacks - The Indian Express",
      description: null,
      url: "https://indianexpress.com/article/sports/hockey/indian-hockeys-new-style-half-court-press-to-leverage-counter-attacks-8886461/",
      urlToImage: null,
      publishedAt: "2023-08-10T13:50:46Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "India Today Sports Desk",
      title:
        "Finally, someone said it: AB de Villiers thrilled as Harsha Bhogle plays down Tilak Varma 49 controversy - India Today",
      description:
        "West Indies vs India: Legendary South Africa batter AB de Villiers backed Harsha Bhogle's take on prioritising milestones in T20I cricket after Hardik Pandya faced flak for hitting a winning six in a T20I in Guyana that denied Tilak Varma an opportunity to co…",
      url: "https://www.indiatoday.in/sports/cricket/story/ab-de-villiers-hardik-pandya-tilak-varma-49-criticism-west-indies-vs-india-harsha-2419207-2023-08-10",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/tilak-varma-081938-16x9_0.jpg?VersionId=gBXxt2S1NCa7I7atrqvMfp_o9j5i4wwF",
      publishedAt: "2023-08-10T13:40:38Z",
      content:
        "Former South Africa batter AB de Villiers has backed celebrated broadcaster Harsha Bhogle's take on the 'obsession' with individual milestones in T20I cricket. Harsha Bhogle took to social media to s… [+1980 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TIMESOFINDIA.COM",
      title:
        "India vs Japan, Asian Champions Trophy 2023 Semi-final: When and where to watch, date, time, live telecas - IndiaTimes",
      description:
        "Hockey News: India will start as favourites against Japan in the Asian Champions Trophy 2023 semi-final after winning four matches and drawing one in the league st",
      url: "https://timesofindia.indiatimes.com/sports/hockey/top-stories/india-vs-japan-asian-champions-trophy-2023-semi-final-when-and-where-to-watch-date-time-live-telecast-venue/articleshow/102614131.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-102614176,width-1070,height-580,imgsize-96120,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2023-08-10T13:33:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "Barcelona interested in bringing back Neymar on loan from PSG: Report - Hindustan Times",
      description:
        "Barcelona feel they can make the deal work this summer. It could be helped by the fact that Neymar and PSG are unhappy with each other. | Football News",
      url: "https://www.hindustantimes.com/sports/football/barcelona-interested-in-bringing-back-neymar-on-loan-from-psg-report-101691673527475.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/08/10/1600x900/FBL-KOR-PSG-JEONBUK-FRIENDLY-12_1691673646683_1691673668828.jpg",
      publishedAt: "2023-08-10T13:24:05Z",
      content:
        "Barcelona are reportedly considering a loan offer with an option to buy to bring back Brazil forward Neymar to Camp Nou. Paris Saint-Germain (PSG) are believed to have placed a 52 million pounds pric… [+2520 chars]",
    },
    {
      source: {
        id: "bloomberg",
        name: "Bloomberg",
      },
      author: "David Hellier",
      title:
        "Saudi Football League Lines Up Deals to Broadcast Games Globally - Bloomberg",
      description:
        "The Saudi Pro Football League has secured a network of deals to broadcast games featuring superstars such as Cristiano Ronaldo and Karim Benzema around the world.",
      url: "https://www.bloomberg.com/news/articles/2023-08-10/saudi-football-league-lines-up-deals-to-broadcast-games-globally",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iVdCVQ4sEe9Y/v0/1200x800.jpg",
      publishedAt: "2023-08-10T12:40:38Z",
      content:
        "The Saudi Pro Football League has secured a network of deals to broadcast games featuring superstars such as Cristiano Ronaldo and Karim Benzema around the world. \r\nThe deals span more than 130 terri… [+211 chars]",
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
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=69f46c3ec069493ea15e2ddba35f0f17&page=1&pageSize=${8}`;
    let data = await fetch(url);
    let show = await data.json();
    this.setState({ articles: show.articles, totalResult: show.totalResult });
  }
  prevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=69f46c3ec069493ea15e2ddba35f0f17&page=${
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
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=69f46c3ec069493ea15e2ddba35f0f17&page=${
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
