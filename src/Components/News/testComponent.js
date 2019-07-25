import React from 'react'
import Iframe from 'react-iframe'

let obj = [
  {
    "item": 20514755,
    "author": "less_penguiny",
    "title": "Visual Information Theory (2015)",
    "score": 267,
    "comments_count": 31,
    "time": 1563973191,
    "url": "https://colah.github.io/posts/2015-09-Visual-Information/"
  },
  {
    "item": 20516489,
    "author": "LaSombra",
    "title": "How (not) to sign a JSON object",
    "score": 78,
    "comments_count": 31,
    "time": 1563983662,
    "url": "https://latacora.micro.blog/2019/07/24/how-not-to.html"
  },
  {
    "item": 20516063,
    "author": "emilevauge",
    "title": "Yaegi – Yet Another Go Interpreter",
    "score": 105,
    "comments_count": 28,
    "time": 1563981310,
    "url": "https://blog.containo.us/announcing-yaegi-263a1e2d070a"
  },
  {
    "item": 20515999,
    "author": "edawerd",
    "title": "SMB payroll startup Gusto raises $200m series D, plans R&D expansion to NYC",
    "score": 67,
    "comments_count": 38,
    "time": 1563980982,
    "url": "https://techcrunch.com/2019/07/24/smb-payroll-startup-gusto-raises-200m-series-d-plans-rd-expansion-to-nyc/"
  },
  {
    "item": 20515806,
    "author": "bellinom",
    "title": "Attorney General William P. Barr Delivers Address Conference on Cyber Security",
    "score": 72,
    "comments_count": 91,
    "time": 1563979649,
    "url": "https://www.justice.gov/opa/speech/attorney-general-william-p-barr-delivers-keynote-address-international-conference-cyber"
  },
  {
    "item": 20516471,
    "author": "jrepinc",
    "title": "Extending the Linux Kernel with Built-In Kernel Headers",
    "score": 35,
    "comments_count": 14,
    "time": 1563983579,
    "url": "https://www.linuxjournal.com/content/extending-kernel-built-kernel-headers"
  },
  {
    "item": 20517680,
    "author": "gkoberger",
    "title": "ReadMe (YC W15) is hiring. Help us make APIs easy to use",
    "score": 1,
    "time": 1563990469,
    "url": "http://readme.io/careers"
  },
  {
    "item": 20515880,
    "author": "hemanta212",
    "title": "Show HN: A tool to convert Jupyter notebooks to beautiful blogs",
    "score": 47,
    "comments_count": 9,
    "time": 1563980138,
    "url": "https://github.com/hemanta212/blogger-cli"
  },
  {
    "item": 20516351,
    "author": "fanf2",
    "title": "Tutorial on Good Lisp Programming Style (1993) [pdf]",
    "score": 33,
    "comments_count": 3,
    "time": 1563982983,
    "url": "https://www.cs.umd.edu/~nau/cmsc421/norvig-lisp-style.pdf"
  },
  {
    "item": 20517144,
    "author": "Tomte",
    "title": "Fast Software, the Best Software",
    "score": 17,
    "comments_count": 4,
    "time": 1563987478,
    "url": "https://craigmod.com/essays/fast_software/"
  },
  {
    "item": 20496786,
    "author": "tosh",
    "title": "Space Engine",
    "score": 14,
    "comments_count": 1,
    "time": 1563792334,
    "url": "http://spaceengine.org"
  },
  {
    "item": 20505047,
    "author": "myinnerbanjo",
    "title": "What's Deoxyribonucleotide in Sign Language?",
    "score": 40,
    "comments_count": 20,
    "time": 1563866262,
    "url": "https://www.bbc.com/news/uk-scotland-tayside-central-49057331"
  },
  {
    "item": 20506181,
    "author": "nsajko",
    "title": "The Graphics Chip Chronicles",
    "score": 18,
    "comments_count": 1,
    "time": 1563885000,
    "url": "https://www.electronicdesign.com/embedded-revolution/graphics-chip-chronicles"
  },
  {
    "item": 20517286,
    "author": "vaibhavverma9",
    "title": "Launch HN: Simmer (YC W19) – Reviews for Delivery Dishes",
    "score": 8,
    "comments_count": 5,
    "time": 1563988257,
    "url": "https://news.ycombinator.com/item?id=20517286"
  },
  {
    "item": 20514683,
    "author": "eg312",
    "title": "Show HN: A tool to create printable UI mockups and wireframes templates",
    "score": 84,
    "comments_count": 15,
    "time": 1563972650,
    "url": "https://github.com/alexadam/printable-mockups"
  },
  {
    "item": 20515235,
    "author": "vonmoltke",
    "title": "FTC Imposes $5B Penalty and Sweeping New Privacy Restrictions on Facebook",
    "score": 306,
    "comments_count": 146,
    "time": 1563976282,
    "url": "https://www.ftc.gov/news-events/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions"
  },
  {
    "item": 20516668,
    "author": "mcgwiz",
    "title": "DoorDash Changes Tipping Model After Uproar",
    "score": 63,
    "comments_count": 79,
    "time": 1563984602,
    "url": "https://www.nytimes.com/2019/07/24/nyregion/doordash-tip-policy.html"
  },
  {
    "item": 20512896,
    "author": "hakantan",
    "title": "Winnti: Hackers attacking the heart of German industry",
    "score": 200,
    "comments_count": 116,
    "time": 1563951287,
    "url": "http://br24.de/winnti/english"
  },
  {
    "item": 20517601,
    "author": "a13n",
    "title": "Free SaaS tools for companies on a budget",
    "score": 6,
    "comments_count": 1,
    "time": 1563990073,
    "url": "https://canny.io/blog/free-saas-tools-for-budget/"
  },
  {
    "item": 20499182,
    "author": "yarapavan",
    "title": "The Psychology of Prediction",
    "score": 47,
    "comments_count": 7,
    "time": 1563810817,
    "url": "https://www.collaborativefund.com/blog/the-psychology-of-prediction/"
  }
]

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url : 'https://www.quantamagazine.org/'
    }
  }
   
  render() { 
    return (
     <>
         <Iframe
            url={this.state.url}
            height='100%'
            width='100%'
            />
        )
      )}
     </> 
      

    
    )
  }
}

export default TestComponent

