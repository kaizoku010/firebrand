import bcLogo from '../img/bc.png'
import logo2 from '../img/firebrand-2.png'
import misstintedLogo from '../img/mt.png'
import natureWasteLogo from '../img/nwm.png'
import fireman from '../img/wuzi-2.png'
import Gam from '../img/gaming.jpg'
import BCHealth from '../img/physio.webp'
import MDP from '../img/cons.jpg'
import Vox from '../img/news2.jpg'
import Hot from '../img/hot.jpg'
import TrashBags from '../img/blowup2.jpg'
import physio from '../img/bchealthcare.jpg'
import Wuz from '../img/wuz.jpg'

export default {
  // headings shld be #5747ff
  allProjects: [
    {
      id: '7',
      title: 'GrammarHolic',
      backgroundColor: 'white',
      projectImg: physio,
      textColor: 'black',
      location: 'London, UK',
      desc: 'Welcome to a life hack, and a boost to getting better marks. An actual, essay writing service that offers plagiarism-free writing service for students.',
      icon: logo2,
      link: 'https://www.grammarholic.com/'
    },
    {
      id: '1',
      title: 'BC HealthCare Services',
      desc: 'At bchealthcare services, our team aims to protect and maximize the quality of life as well as optimize the way the body heals.',
      icon: bcLogo,
      projectImg: BCHealth,
      location: 'Kampala, Uganda',
      backgroundColor: 'white',
      //506cef
      textColor: 'black',
      link: 'http://bchealthcareug.com/'
    },

    {
      id: '2',
      location: 'Kampala, Uganda',
      title: 'Vox Pupli',
      backgroundColor: 'white',
      textColor: 'black',
      projectImg: Vox,
      desc: 'The rebirth, rejuvenation and sustenance of the fourth estate as an important pillar for democracy in Uganda.',
      icon: logo2,
      link: 'https://voxpopuli.ug/'
    },

    {
      id: '3',
      backgroundColor: 'white',
      textColor: 'red',
      location: 'London, UK',
      projectImg: Hot,
      title: 'MissTinted',
      desc: 'People buy products that make them feel amazing, and at TINTEDS we offer some of the most incredibly useful products.',
      icon: misstintedLogo,
      link: 'http://misstinted.com/'
    },
    {
      id: '4',
      title: 'NWM Ltd',
      backgroundColor: 'white',
      textColor: 'red',
      projectImg: TrashBags,
      location: 'Kampala, Uganda',
      desc: 'Nature Waste Management Limited is a Ugandan growing waste management company that seeks to reduce, re-use and recycle waste in Uganda’s towns and cities.',
      icon: natureWasteLogo,
      link: 'http://naturewasteug.com/'
    },
    {
      id: '6',
      title: 'MDP ARCHITECTURE SARL',
      backgroundColor: 'white',
      textColor: 'black',
      projectImg: MDP,
      location: 'Kigali, Rwanda',
      desc: 'Am decent at tearing things apart, but my strength lies in building stuff/tech, building scalable and responsive mobile, web applications with a touch of creativity on the UI and User Experience.',
      icon: logo2,
      link: 'http://mdparchitecture.com/'
    },

    {
      id: '8',
      title: 'National Gaming Board',
      desc: 'The National Lotteries and Gaming Regulatory Board Uganda (NLGRB) is a body corporate established under the Lotteries and Gaming Act No. 7 of 2016 which came into effect on 8th April 2016.',
      icon: logo2,
      projectImg: Gam,
      location: 'Kampala, Uganda',
      backgroundColor: 'white',
      textColor: 'black',
      link: 'https://lgrb.go.ug/'
    },
    {
      id: '9',
      title: 'Wuzi-Africa',
      backgroundColor: 'white',
      location: 'Stockholm, Sweden',
      textColor: 'black',
      projectImg: Wuz,
      desc: 'From West Nile to Kabale, Moroto to Tororo, dedicated creative communities will be creating bold fabrics and designer garments from recycled old clothes collected across Uganda.',
      icon: fireman,
      link: 'https://wuzi-app.firebaseapp.com/'
    },
    {
      id: '10',
      title: 'Motoka Ads',
      backgroundColor: 'white',
      location: 'Kampala, Uganda',
      textColor: 'red',
      projectImg: Wuz,
      desc: 'Number one carsales spot in Uganda.',
      icon: fireman,
      link: 'https://wuzi-app.firebaseapp.com/'
    }
  ]
}
