import React, { Component } from "react";
import NewsItem from "./NewsItem";
import NavbarNews from "./NavbarNews";

export default class Business extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Sabyasachi Dasgupta",
      title:
        "MG Motor hikes price of Hector and Gloster SUVs. Check how much they cost now - HT Auto",
      description:
        "MG Motor has increased the prices of two of its flagship SUVs - Hector and Gloster - from August. The maximum increase in price go up to ₹78,000 depending on the model and variant.",
      url: "https://auto.hindustantimes.com/auto/cars/mg-motor-hikes-price-of-hector-and-gloster-suvs-check-how-much-they-cost-now-41691733280037.html",
      urlToImage:
        "https://images.hindustantimes.com/auto/img/2023/08/11/1600x900/MG_Hector_Gloster_price_1691733739994_1691733749495.jpg",
      publishedAt: "2023-08-11T06:19:27Z",
      content:
        "According to the official website, the starting price of the Gloster SUV has gone up more significantly. The SUV, which rivals the likes of Toyota Fortuner and Jeep Meridian, will now come at a start… [+1460 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Air India's Maharaja Gone Or...? New Logo, Design, Rebrand Explained - NDTV",
      description:
        'Tata Group-owned Air India seeks to completely transform itself with a touch of legacy, top officials said as the airline unveiled a "modern new brand identity" on Thursday.',
      url: "https://www.ndtv.com/india-news/no-air-indias-maharaja-is-not-history-mega-rebrand-explained-4288593",
      urlToImage:
        "https://c.ndtvimg.com/air-india-maharaja_625x300_1530443963033.jpg",
      publishedAt: "2023-08-11T05:54:00Z",
      content:
        "Air India said its new logo, The Vista, is inspired by the peak of the gold window frame.\r\nNew Delhi: Tata Group-owned Air India seeks to completely transform itself with a touch of legacy, top offic… [+2919 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Moneycontrol",
      title:
        "Stock Market LIVE Updates: Nifty around 19,450, Sensex down 250 pts dragged by metal, bank, FMCG - Moneycontrol",
      description: null,
      url: "https://www.moneycontrol.com/news/business/markets/stock-market-live-updates-gift-nifty-indicates-flat-opening-asia-trades-mixed-us-markets-flat-11152561.html",
      urlToImage: null,
      publishedAt: "2023-08-11T05:47:29Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Ankit Gohel",
      title:
        "ITC AGM Live: Hotel business demerger to sharpen capital allocation for ITC, says MD Sanjiv Puri at 112th Annual General | Mint - Mint",
      description:
        "ITC Chairman and Managing Director Sanjiv Puri begins his address to shareholders on the company’s business plans and is likely to throw light on the recently announced demerger of the company’s hotels business.",
      url: "https://www.livemint.com/market/stock-market-news/itc-agm-live-itcs-112th-annual-general-meeting-to-begin-shortly-focus-on-hotel-business-demerger-11691724594107.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/08/11/600x338/3-0-2474510376-Sanjiv-Puri1-0_1673808051563_1691724929038.JPG",
      publishedAt: "2023-08-11T05:35:40Z",
      content:
        "ITC Ltd, the cigarette manufacturer and the FMCG major, is holding its 112th Annual General Meeting on August 11. ITC Chairman and Managing Director ITC AGM Live Updates:'s address to the shareholder… [+8706 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "ET Online",
      title:
        "Names of top L&T, Cognizant executives come to fore in corruption case investigation - The Economic Times",
      description:
        "The case involves bribes allegedly paid to officials of Chennai Metropolitan Development Authority (CMDA), state housing, urban development department, as well as the then minister, during the construction of the IT company's 'KITS Campus' facility, ToI repor…",
      url: "https://economictimes.indiatimes.com/news/india/names-of-top-lt-cognizant-executives-come-to-fore-in-corruption-case-investigation/articleshow/102634893.cms",
      urlToImage:
        "https://economictimes.indiatimes.com/thumb/msid-102634870,width-1070,height-580,imgsize-26950,overlay-economictimes/photo.jpg",
      publishedAt: "2023-08-11T05:05:00Z",
      content:
        "The names of a number of top executives of L&amp;T and Cognizant, both past and present, have come to the fore in the Vigilance and Anti-Corruption Unit's probe into an alleged bribery case.The case … [+2183 chars]",
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "India Today Business Desk",
      title:
        "SBFC Finance IPO allotment today: Here’s how to check application status - India Today",
      description:
        "The primary offering of SBFC Finance, amounting to Rs 1,025 crore, received a strong response from investors during the bidding period.",
      url: "https://www.indiatoday.in/business/story/sbfc-finance-ipo-allotment-status-how-to-check-online-2419412-2023-08-11",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/ipo-investment-tips-2023png-014304-16x9.png?VersionId=YByZ3HdfVuIna7E2xUnlfwBzLBydgthV",
      publishedAt: "2023-08-11T04:29:46Z",
      content:
        "SBFC Finance IPO allotment is scheduled for today. The company is set to finalise the allocation of its shares on Thursday.\r\nThe primary offering of the new-age financial services firm, amounting to … [+2480 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Shivendra Kumar",
      title:
        "LIC shares jump 6% after state insurer posts 14-fold jump in net profit - The Economic Times",
      description:
        "LIC on Thursday reported that its standalone net profit for the quarter ended June 2023 rose multifold to Rs 9,544 crore. The same stood at Rs 683 crore in the same quarter of last year.",
      url: "https://economictimes.indiatimes.com/markets/stocks/news/lic-shares-jump-6-after-state-insurer-posts-14-fold-jump-in-net-profit/articleshow/102633375.cms",
      urlToImage:
        "https://economictimes.indiatimes.com/thumb/msid-102633358,width-1070,height-580,imgsize-39074,overlay-etmarkets/photo.jpg",
      publishedAt: "2023-08-11T04:29:00Z",
      content:
        "Shares of Life Insurance Corporation (LIC) jumped nearly 6% on the NSE in Friday's trade following the June quarter earnings for the financial year 2024, where the state insurer reported a near 14-fo… [+1824 chars]",
    },
    {
      source: {
        id: null,
        name: "Bqprime.com",
      },
      author: "Rishabh Mishra",
      title:
        "Stock Market Live: Sensex, Nifty Open Marginally Lower As ICICI Bank, Kotak Mahindra Bank Drag - BQ Prime",
      description: "Live updates on India's equity markets on Aug. 11.",
      url: "https://www.bqprime.com/markets/stock-market-live-updates-11-august-2023-gift-nifty-signals-a-cautious-open-hcl-tech-dlf-zee-hero-moto-lic-biocon-in-focus",
      urlToImage:
        "https://gumlet.assettype.com/bloombergquint%2F2023-07%2Ff0c814d1-abb2-414f-8b49-0082727154f5%2FNSE_National_Stock_Exchange_building___Source_Vijay_Sartape_BQ_Prime__030423.jpeg?w=1200&auto=format%2Ccompress&ogImage=true",
      publishedAt: "2023-08-11T03:39:47Z",
      content:
        "Shares of Supreme Industries Ltd. rose 10.32% to 4,248.4 apiece as of 9:34 a.m., as compared to 0.26% decline in the NSE Nifty 50. The scrip rose as much as 16.51% intraday to hit a record high at Rs… [+489 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Asit Manohar",
      title:
        "Concord Biotech IPO allotment date likely today. GMP, how to check allotment status online | Mint - Mint",
      description:
        "Concord Biotech IPO GMP today is  ₹160, say market observers",
      url: "https://www.livemint.com/market/ipo/concord-biotech-ipo-allotment-date-likely-today-gmp-how-to-check-allotment-status-online-11691723121110.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/08/11/600x338/Concord_Biotech_IPO_allotment_date_1691723404329_1691723414088.JPG",
      publishedAt: "2023-08-11T03:13:54Z",
      content:
        "Concord Biotech IPO: Allotment of shares to the bidders of initial public offering (IPO) of Concord Biotech Limited can be announced any time today. As per the tentative schedule, most likely Concord… [+2349 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "SBI Card allows RuPay credit cards on UPI. Here is how to link | Mint - Mint",
      description:
        "SBI Card and NPCI have linked SBI credit cards on the RuPay platform with UPI, allowing customers to make UPI transactions through their credit cards. This will enhance the payments experience and increase credit card usage",
      url: "https://www.livemint.com/money/personal-finance/sbi-card-allows-rupay-credit-cards-on-upi-here-is-how-to-link-11691721466018.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/08/11/600x338/SBI_Card_1691721851670_1691721851809.jpg",
      publishedAt: "2023-08-11T02:45:38Z",
      content:
        "SBI Card, Indias largest pure-play credit card issuer, and National Payments Corporation of India (NPCI) have announced the linking of SBI credit cards on the RuPay platform with UPI. Starting 10 Aug… [+3180 chars]",
    },
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Aparna Deb",
      title:
        "Petrol, Diesel Fresh Prices Announced For August 11: Check Fuel Rates In Your City - News18",
      description:
        "Petrol, and Diesel prices in Chennai, Kolkata, Bengaluru, Lucknow, Noida, and Gurugram on August 11, 2023",
      url: "https://www.news18.com/business/markets/petrol-diesel-fresh-prices-announced-for-august-11-check-fuel-rates-in-your-city-8531764.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2023/08/petrol-169085767716x9.jpg",
      publishedAt: "2023-08-11T02:37:04Z",
      content:
        "Petrol, and Diesel Prices on August 11: The price of Petrol and Diesel remained constant on Friday, August 11 across major cities like New Delhi, Kolkata, Mumbai, and Chennai. The petrol and diesel r… [+548 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Siddharth Upasani",
      title:
        "Retail inflation likely hit 9-month high of 6.6% in July - Moneycontrol",
      description:
        "The statistics ministry will release IIP data for June later today at 5:30 pm, which is expected to show output growth edged down to 5 percent from 5.2 percent in May",
      url: "https://www.moneycontrol.com/news/business/economy/retail-inflation-likely-hit-9-month-high-of-6-6-in-july-11147471.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/07/Collage-Maker-31-Jul-2023-10-25-AM-9121-1-770x433.jpg",
      publishedAt: "2023-08-11T02:25:29Z",
      content:
        "India's headline retail inflation is expected to have crashed past the upper bound of the Reserve Bank of India's (RBI) 2-6 percent tolerance band in July on its way to a nine-month high due to a sur… [+6469 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Ankit Gohel",
      title:
        "Stock market today: What to expect from Nifty, Sensex, Bank Nifty in trade on August 11 | Mint - Mint",
      description:
        "Trends on Gift Nifty also suggest a weak opening for the frontline indices as the Gift Nifty futures were trading 19,558 as compared to Nifty futures’ previous close of 19,599.",
      url: "https://www.livemint.com/market/stock-market-news/stock-market-today-what-to-expect-from-nifty-sensex-bank-nifty-in-trade-on-august-11-11691719984693.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/08/11/600x338/ANI-20220406134-0_1655257494939_1691720367451.jpg",
      publishedAt: "2023-08-11T02:23:22Z",
      content:
        "The Indian equity market is undergoing a healthy consolidation. The benchmark indices are likely to open lower on Friday amid mixed global cues. Trends on Gift Nifty also suggest a weak opening for t… [+2937 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Sanchari Ghosh",
      title:
        "THESE IT CEOs earn higher salaries than major players like Infosys, HCL in FY23. Here's how much they earned | Mint - Mint",
      description:
        "Smaller IT firms pay their CEOs more than larger counterparts, with Sandeep Kalra of Persistent Systems earning  ₹61.7 crore.",
      url: "https://www.livemint.com/companies/news/midtier-it-ceos-earn-higher-paychecks-than-major-players-like-infosys-hcl-in-fy23-heres-how-much-they-earned-11691718428260.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/08/11/600x338/_Tech_Mahindra_1691718722452_1691718722665.jpg",
      publishedAt: "2023-08-11T01:52:23Z",
      content:
        "Amidst CEO compensation cuts at major IT players like Infosys, HCL, and Tech Mahindra in FY23, smaller IT firms have notably awarded higher CEO paychecks. In fact, Mid-tier IT company bosses are even… [+1800 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Moneycontrol News",
      title:
        "Supreme Industries, REC surge on MSCI addition, ACC dropped from Global Standard Index - Moneycontrol",
      description:
        "Supreme Industries, IDFC First Bank, and HDFC Asset Management Company (AMC) have also been included in the Global Standard Index.",
      url: "https://www.moneycontrol.com/news/business/markets/msci-announces-august-global-standard-index-review-pfc-rec-astral-ashok-leyland-among-additions-acc-excluded-11152591.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/08/sensex_nifty-marketup_sensexup-Niftyup-770x433.jpg",
      publishedAt: "2023-08-11T01:48:41Z",
      content:
        "MSCI on August 11 unveiled its list of stocks as part of the August Global Standard Index review, effective from September 1, 2023. The revised index features notable additions, including Power Finan… [+1264 chars]",
    },
    {
      source: {
        id: null,
        name: "Financial Express",
      },
      author: "The Financial Express",
      title:
        "Stocks To Watch: LIC, Hero MotoCorp, Grasim, Adani Enterprises, Torrent Pharma, ONGC, GCPL, Nykaa, Info Edge - The Financial Express",
      description: null,
      url: "https://www.financialexpress.com/market/stocks-to-watch-lic-hero-motocorp-grasim-adani-enterprises-torrent-pharma-ongc-gcpl-nykaa-info-edge/3207068/",
      urlToImage: null,
      publishedAt: "2023-08-11T01:35:02Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Rakesh Patil",
      title:
        "Buzzing Stocks: Hero MotoCorp, ONGC, Apollo Tyres, Mazagon Dock, others in news - Moneycontrol",
      description:
        "Stocks to watch: Check out the companies making headlines before the opening bell today, August 10, 2023.",
      url: "https://www.moneycontrol.com/news/photos/business/stocks/buzzing-stocks-hero-motocorp-ongc-apollo-tyres-mazagon-dock-others-in-news-11150511.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/08/stocks5-3-770x433.jpg",
      publishedAt: "2023-08-11T01:16:46Z",
      content:
        "Results on August 11: Oil and Natural Gas Corporation, ABB India, Nykaa, Zydus Lifesciences, Apollo Hospitals Enterprise, Glenmark Pharmaceuticals, NALCO, SpiceJet, Astral, BEML, Cochin Shipyard, Cit… [+7487 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Vidnyan Sawant",
      title:
        "Hot Stocks | JSW Steel, KPR Mill, Emami can deliver 11-13% returns in short term - Moneycontrol",
      description:
        "Short to medium term trend of the Nifty Index seems to be corrective in nature as long as it remains below the 19,795 levels.",
      url: "https://www.moneycontrol.com/news/business/markets/hot-stocks-jsw-steel-kpr-mill-emami-can-deliver-11-13-returns-in-short-term-11152281.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/08/Stock-1-770x433.jpg",
      publishedAt: "2023-08-11T00:57:15Z",
      content:
        "The Nifty has recently displayed a lower-top-lower-bottom pattern on the weekly charts, marking the first occurrence of such a pattern since April 2023. This suggests that profit-booking has taken pl… [+4397 chars]",
    },
    {
      source: {
        id: null,
        name: "Themorningcontext.com",
      },
      author: "Ujval Nanavati",
      title:
        "Vijay Shekhar Sharma kills many birds with one stone - The Morning Context",
      description:
        "The Paytm founder has boosted his thin shareholding in the company while providing Alibaba a smooth exit. But he might well be inviting more scrutiny.",
      url: "https://themorningcontext.com/business/vijay-shekhar-sharma-kills-many-birds-with-one-stone",
      urlToImage:
        "https://media2.themorningcontext.com/media/posts_images/GettyImages_PYTM.jpg",
      publishedAt: "2023-08-11T00:41:55Z",
      content:
        "The Paytm founder has boosted his thin shareholding in the company while providing Alibaba a smooth exit. But he might well be inviting more scrutiny.\r\nThe share price of One 97 Communications Ltd (a… [+997 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Kirtika Suneja",
      title:
        "After laptops, cameras and printers could also face import curbs - The Economic Times",
      description:
        "Separately, the government is also said to be reviewing other high-import products such as urea, antibiotics, turbo-jets, lithium-ion accumulators, refined copper, machines and mechanical appliances, solar and photovoltaic cells, aluminium scrap, sunflower se…",
      url: "https://economictimes.indiatimes.com/industry/cons-products/electronics/after-laptops-cameras-and-printers-could-also-face-import-curbs/articleshow/102626255.cms",
      urlToImage:
        "https://economictimes.indiatimes.com/thumb/msid-102626255,width-1070,height-580,imgsize-25728,overlay-economictimes/photo.jpg",
      publishedAt: "2023-08-11T00:36:00Z",
      content:
        "New Delhi: After making a licence mandatory for imports of personal computers and laptops, the government is looking at other products on which such curbs could be imposed such as cameras, printers, … [+2622 chars]",
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
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=69f46c3ec069493ea15e2ddba35f0f17&page=1&pageSize=${8}`;
    let data = await fetch(url);
    let show = await data.json();
    this.setState({ articles: show.articles, totalResult: show.totalResult });
  }
  prevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=69f46c3ec069493ea15e2ddba35f0f17&page=${
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
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=69f46c3ec069493ea15e2ddba35f0f17&page=${
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
            Here some Business News
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
