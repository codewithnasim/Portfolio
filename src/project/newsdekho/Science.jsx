import React, { Component } from "react";
import NewsItem from "./NewsItem";
import NavbarNews from "./NavbarNews";
export default class Science extends Component {
  articles = [
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "ET Online",
      title:
        "ISRO shares stunning images of the moon and earth captured by the Chandrayaan 3 cameras - The Economic Times",
      description:
        "Chandrayaan-3 achieved lunar orbit on August 5 and is currently undergoing a series of manoeuvres to gradually reduce its orbit and position it over the lunar poles before landing on the South Pole region on August 23. The mission aims to demonstrate end-to-e…",
      url: "https://economictimes.indiatimes.com/news/science/isro-shares-stunning-images-of-the-moon-and-earth-captured-by-the-chandrayaan-3-cameras/articleshow/102635114.cms",
      urlToImage:
        "https://economictimes.indiatimes.com/thumb/msid-102635087,width-1070,height-580,imgsize-170982,overlay-economictimes/photo.jpg",
      publishedAt: "2023-08-11T05:14:00Z",
      content:
        "The Indian Space Research Organisation (ISRO) has shared stunning images of the earth and the moon, which were captured by the cameras onboard Chandrayaan 3 .The image of the earth was captured by th… [+1855 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Russia Sends Spacecraft To Moon, Weeks After Chandrayaan-3 Launch - NDTV",
      description:
        "Russia launched its first moon-landing spacecraft in 47 years on Thursday in a bid to be the first power to make a soft landing on the lunar south pole, a region believed to hold coveted pockets of water ice.",
      url: "https://www.ndtv.com/world-news/russia-launches-lunar-spacecraft-to-find-water-on-moon-4288327",
      urlToImage:
        "https://c.ndtvimg.com/2023-08/3l00q4fg_russia-lunar-lander-_625x300_10_August_23.jpg",
      publishedAt: "2023-08-11T01:11:00Z",
      content:
        "A Soyuz 2.1v rocket carrying the Luna-25 craft blasted off from the east of Moscow on Friday.\r\nMoscow: Russia launched its first probe to the Moon in almost 50 years on Friday, a mission designed to … [+2544 chars]",
    },
    {
      source: {
        id: null,
        name: "ScienceAlert",
      },
      author: "Michelle Starr",
      title:
        "Scientists Appear to Have Found a Gigantic Question Mark in Space - ScienceAlert",
      description:
        "Zoom in on a stunning new image from the James Webb Space Telescope and you might be in for a little surprise.",
      url: "https://www.sciencealert.com/scientists-appear-to-have-found-a-gigantic-question-mark-in-space",
      urlToImage:
        "https://www.sciencealert.com/images/2023/08/QuestionMarkInSpace.jpg",
      publishedAt: "2023-08-11T00:50:07Z",
      content:
        "Zoom in on a stunning new image from the James Webb Space Telescope and you might be in for a little surprise.\r\nThere, in the background of spectacular star birth lurks a curlicue and blob of light i… [+1923 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Testing the Landing Gear for All Scenarios for NASA’s Mars Sample Retrieval Lander | #Shorts - NASA Jet Propulsion Laboratory",
      description:
        "The first leg of Mars Sample Return is underway, as the Perseverance rover collects rock cores and other Mars samples at its landing site, Jezero Crater. Mea...",
      url: "https://www.youtube.com/watch?v=w3xVyeHGIAw",
      urlToImage:
        "https://i.ytimg.com/vi/w3xVyeHGIAw/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYZSBOKDswDw==&rs=AOn4CLCU1qtMtvWpVLpXtDSzlEOBkfeGHw",
      publishedAt: "2023-08-10T20:44:03Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "SciTechDaily",
      },
      author: null,
      title:
        "Japanese Scientists Construct Complex 3D Organoids With Ingenious Device - SciTechDaily",
      description:
        "A team of scientists led by Masaya Hagiwara of RIKEN national science institute in Japan has developed an ingenious device, using layers of hydrogels in a cube-like structure, that allows researchers to construct complex 3D organoids without using elaborate t…",
      url: "https://scitechdaily.com/japanese-scientists-construct-complex-3d-organoids-with-ingenious-device/",
      urlToImage:
        "https://scitechdaily.com/images/Growing-Mini-Organs-Art-Concept.jpg",
      publishedAt: "2023-08-10T20:05:27Z",
      content:
        "ByRIKENAugust 10, 2023\r\nScientists in Japan have innovatively used hydrogels in cube-like structures to create complex 3D organoids, simplifying previously challenging procedures. This advancement ha… [+5939 chars]",
    },
    {
      source: {
        id: null,
        name: "Phys.Org",
      },
      author: "Science X",
      title:
        "How a massive North Atlantic cooling event disrupted early human occupation in Europe - Phys.org",
      description:
        "A new study published in the journal Science finds that around 1.12 million years ago a massive cooling event in the North Atlantic and corresponding shifts in climate, vegetation and food resources disrupted early human occupation of Europe.",
      url: "https://phys.org/news/2023-08-massive-north-atlantic-cooling-event.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/hires/2023/how-a-massive-north-at.jpg",
      publishedAt: "2023-08-10T18:36:43Z",
      content:
        "A new study published in the journal Science finds that around 1.12 million years ago a massive cooling event in the North Atlantic and corresponding shifts in climate, vegetation and food resources … [+5169 chars]",
    },
    {
      source: {
        id: null,
        name: "Science.org",
      },
      author: "Science",
      title:
        "Cell polarity linked to gravity sensing is generated by LZY translocation from statoliths to the plasma membrane - Science",
      description: null,
      url: "https://www.science.org/doi/10.1126/science.adh9978",
      urlToImage: null,
      publishedAt: "2023-08-10T18:03:08Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "New species discovered in southern ocean - FOX 13 Seattle",
      description:
        "Scientists discover a new species lurking in the depths of the southern ocean. This is the Antarctic Strawberry Feather Star. Researchers describe it as a la...",
      url: "https://www.youtube.com/watch?v=Xlt4xZ7kAM8",
      urlToImage: "https://i.ytimg.com/vi/Xlt4xZ7kAM8/maxresdefault.jpg",
      publishedAt: "2023-08-10T17:26:06Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Space.com",
      },
      author: "Mike Wall",
      title: "Watch SpaceX launch 22 Starlink satellites tonight - Space.com",
      description: "Liftoff is scheduled for 12:27 a.m. EDT (0427 GMT).",
      url: "https://www.space.com/spacex-starlink-group-6-9-launch",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/prWapTWeTx6CBpLmh7akhL-1200-80.jpg",
      publishedAt: "2023-08-10T17:05:01Z",
      content:
        "SpaceX will launch 22 more of its Starlink internet satellites early Friday (Aug. 11), and you can watch the action live.\r\nA Falcon 9 rocket topped with the Starlink spacecraft is scheduled to lift o… [+1730 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title: "Scientists at Fermilab close in on fifth force of nature - BBC",
      description:
        "Physicists believe that an unknown force could be acting on sub-atomic particles known as muons.",
      url: "https://www.bbc.com/news/science-environment-66407099",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/B6CC/production/_130669764_screenshot2023-08-06at10.00.47.png",
      publishedAt: "2023-08-10T15:31:05Z",
      content:
        "Scientists near Chicago say they may be getting closer to discovering the existence of a new force of nature. \r\nThey have found more evidence that sub-atomic particles, called muons, are not behaving… [+5671 chars]",
    },
    {
      source: {
        id: null,
        name: "Esa.int",
      },
      author: null,
      title:
        "ESA - Solar System fingerprints found in memories of ESA flotilla - European Space Agency",
      description: null,
      url: "https://www.esa.int/Enabling_Support/Operations/Solar_System_fingerprints_found_in_memories_of_ESA_flotilla",
      urlToImage:
        "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2014/11/rosetta_at_comet/15031338-1-eng-GB/Rosetta_at_Comet_pillars.jpg",
      publishedAt: "2023-08-10T14:16:45Z",
      content:
        "Enabling &amp; Support10/08/2023963 views32 likes\r\nEvery spacecraft is launched with a purpose, and for science missions, the instruments on board are the key to fulfilling it. Whether its Gaias extr… [+7123 chars]",
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
      title: "Gravitas: New discovery in Earth's neighbourhood - WION",
      description:
        "Data from NASA's insight lander has made a startling revelation that Mars' rotation is undergoing an acceleration of approximately 4 milliarcseconds per year...",
      url: "https://www.youtube.com/watch?v=6shEy5ePYwQ",
      urlToImage: "https://i.ytimg.com/vi/6shEy5ePYwQ/maxresdefault.jpg",
      publishedAt: "2023-08-10T12:45:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Phys.Org",
      },
      author: "Amanda Morris",
      title:
        "Longest time-lapse footage of an exoplanet to date assembled from real data - Phys.org",
      description:
        "A Northwestern University astrophysicist has created the longest time-lapse video of an exoplanet to date.",
      url: "https://phys.org/news/2023-08-longest-time-lapse-footage-exoplanet-date.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/2023/longest-time-lapse-foo.jpg",
      publishedAt: "2023-08-10T12:11:11Z",
      content:
        "A Northwestern University astrophysicist has created the longest time-lapse video of an exoplanet to date.\r\nConstructed from real data, the footage shows Beta Pictoris ba planet 12 times the mass of … [+4660 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Hafsa Khalil, Jack Guy",
      title:
        "300,000-year-old skull found in China unlike any early human seen before - CNN",
      description:
        "An ancient skull dating back 300,000 years is unlike any other premodern human fossil ever found, potentially pointing to a new branch in the human family tree, according to new research.",
      url: "https://www.cnn.com/2023/08/10/asia/ancient-skull-china-human-evolution-intl-scli-scn/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230810035045-ancient-skull-china-human-evolution-scli-intl.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-08-10T10:32:00Z",
      content:
        "Editors Note: Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nAn ancient skull dating back 300,000 yea… [+2902 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Satellite wreckage crashes down from space in horror fireball shaking houses in China #shorts - The Sun",
      description:
        "Satellite wreckage has plummeted from space and crashed in China.The debris erupted into a huge fireball after landing in the north of the country.Dramatic f...",
      url: "https://www.youtube.com/watch?v=97dpnO1FiuM",
      urlToImage:
        "https://i.ytimg.com/vi/97dpnO1FiuM/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYZSBbKE8wDw==&rs=AOn4CLCk6sYmMoH8dJ3_RzTdVOI3CaATZQ",
      publishedAt: "2023-08-10T09:49:01Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "The hunt for dark matter, two kilometres under Sudbury - #podcast - The Globe and Mail",
      description:
        "No one really knows what dark matter is. We just think it exists. And we believe it makes up 85 per cent of all mass in the universe. So how do you solve the...",
      url: "https://www.youtube.com/watch?v=Lq1t8hzH8YA",
      urlToImage: "https://i.ytimg.com/vi/Lq1t8hzH8YA/maxresdefault.jpg",
      publishedAt: "2023-08-10T09:00:22Z",
      content: null,
    },
    {
      source: {
        id: "ign",
        name: "IGN",
      },
      author: "Anthony Wood",
      title:
        "Scientists Spot Super High Energy Gamma Rays Coming From The Sun - IGN",
      description:
        "Scientists have detected a dramatic excess of gamma rays pouring out from the Sun, which represent the highest-energy light emissions ever detected from Earth’s star.",
      url: "https://www.ign.com/articles/scientists-spot-super-high-energy-gamma-rays-coming-from-the-sun",
      urlToImage:
        "https://assets-prd.ignimgs.com/2023/08/08/sun-1691509591237.jpg?width=1280",
      publishedAt: "2023-08-10T08:47:55Z",
      content:
        "Scientists have detected a dramatic excess of gamma rays pouring out from the Sun, which represent the highest-energy light emissions ever detected from Earths star.\r\nThe sun is more surprising than … [+4328 chars]",
    },
    {
      source: {
        id: null,
        name: "Swarajya",
      },
      author: "Abhay Rathore",
      title:
        "Here's How ISRO Plans To Mitigate Potential Threats In Lunar Orbit Ahead Of Chandrayaan-3's Landing - Swarajya",
      description: null,
      url: "https://swarajyamag.com/science/heres-how-isro-plans-to-mitigate-potential-threats-in-lunar-orbit-ahead-of-chandrayaan-3s-landing",
      urlToImage:
        "https://gumlet.assettype.com/swarajya/2023-08/aed4976f-f14c-4b1e-b90f-45945e91b414/F3JQS01b0AIasmg.jpg?w=1200&auto=format%2Ccompress&ogImage=true",
      publishedAt: "2023-08-10T08:30:55Z",
      content:
        "As the anticipated soft landing of Chandrayaan-3's lander on the lunar surface on 23 August approaches, the Indian Space Research Organisation (ISRO) has conducted a review of the existing space cond… [+3345 chars]",
    },
    {
      source: {
        id: null,
        name: "Esa.int",
      },
      author: null,
      title:
        "Hera's mini-radar will probe asteroid's heart - European Space Agency",
      description:
        "The smallest radar to fly in space has been delivered to ESA for integration aboard the miniature Juventas CubeSat, part of ESA’s Hera mission for planetary defence. The radar will perform the first radar imaging of an asteroid, peering deep beneath the surfa…",
      url: "https://www.esa.int/Space_Safety/Hera/Hera_s_mini-radar_will_probe_asteroid_s_heart",
      urlToImage:
        "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/10/juventas_studies_asteroid_s_internal_structure/22246997-1-eng-GB/Juventas_studies_asteroid_s_internal_structure_pillars.jpg",
      publishedAt: "2023-08-10T07:51:04Z",
      content:
        "Space Safety10/08/2023743 views31 likes\r\nThe smallest radar to fly in space has been delivered to ESA for integration aboard the miniature Juventas CubeSat, part of ESAs Hera mission for planetary de… [+4738 chars]",
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
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=69f46c3ec069493ea15e2ddba35f0f17&page=1&pageSize=${8}`;
    let data = await fetch(url);
    let show = await data.json();
    this.setState({ articles: show.articles, totalResult: show.totalResult });
  }
  prevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=69f46c3ec069493ea15e2ddba35f0f17&page=${
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
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=69f46c3ec069493ea15e2ddba35f0f17&page=${
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
            <NavbarNews/>
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
