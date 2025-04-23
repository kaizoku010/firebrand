import misstintedLogo from '../img/mt.png'
import fireman from '../img/shya.jpg'
import NusuLogo from '../img/nusu.png'
import IMager from "../img/bc_ic.png";
import GBunnies from '../img/gbunnies.png'
import NwmLogo from '../img/nwmLogo.png'
import Shiha from '../img/shiha.png'
import Lamp from '../img/lamp2.png'
import Gram from '../img/gram.jpg';
import VoxP from '../img/vox.png'
import Willapp from '../img/william.png'
import MDP from '../img/mdp.png'
import NGR from '../img/ngb.png'
import Motoka from '../img/motoka.png'
import AkibaIc from '../img/akiba.png'
import Medica from '../img/medica.png'
import MX5 from "../img/logo-png.png"
import CH from "../img/ch.png"
import Saj from "../img/sajadi.png"
import IIIMS from "../img/iiims.png" 
  import CY_ from "../img/cy_logo.png"
  import DX from "../img/dx.png"
  import Skip from "../img/skip.png"
  import Ibrahim from "../img/ibra.png"
  import Logo from "../img/logo.png"
  import Oxen from "../img/ox.png"
  import Signature from "../img/sig.png"
  import Cwd from "../img/cwd.svg"
  import NPM from "../img/2npm.png"
  import SiSi from "../img/sisi.png"
  import sembeza from "../img/sembeza.png"
  import musawo from "../img/mus.png"
  import take_aprt from "../img/take-part.png"
  import wal from "../img/wal.png"
  import cty from "../img/ct.png"
  import vimbos from "../img/vim.png"
  import mazima from "../img/mazima.png"



export default {
  // headings shld be #5747ff
  allProjects: [


    {
      id: 'ixy2445',
      title: "Sembeza Africa Shop",
      techStacks: ["online"],
      textColor: 'lightBlue',
      location: 'Kirchberg, Luxembourg',
       desc: 'Our journey began in 1996, when a group of passionate Ugandans discovered the enormous power of sports in mobilizing and supporting young people.',
      icon: sembeza,
      link: 'https://smashop.vercel.app/'

  },

  {
    id: 'ix3y2445',
    title: "Vimbos Fitness",
    techStacks: ["online"],
    textColor: 'lightBlue',
    location: 'Kampala, Uganda',
     desc: 'Number one premier fitness trainer offering personalized training programs, group classes, and specialized fitness solutions to help you reach your goals.',
    icon: vimbos,
    link: 'https://vimbos-fitness.vercel.app/'

},

  {
    id: 'x3y2445',
    title: "Musawo Pharmacy",
    techStacks: ["online"],
    textColor: 'lightBlue',
    location: 'Kampala, Uganda',
     desc: 'A Medical Inventory Management System that is designed to streamline and automate the tracking, ordering, storing, and usage of medical supplies and equipment.',
    icon: musawo,
    link: 'https://musawo-pharmacy.vercel.app/'

},

{
  id: 'ix3y2ew445',
  title: "Take Part",
  techStacks: ["online"],
  textColor: 'lightBlue',
  location: 'Kampala, Uganda',
   desc: 'Tell Your Story UG is an exciting digital campaign designed to showcase the beauty, adventure, and culture of Uganda through the eyes of its travelers',
  icon: take_aprt,
  link: 'https://takepart.vercel.app/'

},
//dont skip
  {
    id: 'ix3y2445',
    title: "SiSi Ai",
    techStacks: ["online"],
    textColor: 'lightBlue',
    location: 'Kampala, Uganda',
     desc: 'Africa faces unique and complex challenges—from rapid urbanization and energy access to security and resource management. At SiSi AI, we harness the power of Artificial Intelligence to create innovative solutions tailored to these realities, driving progress across critical sectors such as defense, energy, infrastructure, and public services',
    icon: SiSi,
    link: 'import React, { useState, useEffect } from 'react';
import './DocumentAnalysis.css';
import * as pdfjsLib from 'pdfjs-dist';
import mammoth from 'mammoth';

const DocumentAnalysis = () => {
  const [documents, setDocuments] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  // Load previously saved documents from localStorage
  useEffect(() => {
    const savedDocs = localStorage.getItem('case_documents');
    if (savedDocs) {
      setDocuments(JSON.parse(savedDocs));
    }
  }, []);

  // Handle drag events for file upload
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Read the content of different types of files
  const readFileContent = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        let content = '';
        const fileType = file.type;

        try {
          if (fileType === 'application/pdf') {
            content = await extractTextFromPdf(reader.result);
          } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            content = await extractTextFromDocx(reader.result);
          } else {
            content = reader.result;
          }
          resolve(content);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  // Extract text from PDF using pdf.js
  const extractTextFromPdf = async (arrayBuffer) => {
    const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
    let textContent = '';
    for (let page = 1; page <= pdf.numPages; page++) {
      const pageContent = await pdf.getPage(page).then(p => p.getTextContent());
      textContent += pageContent.items.map(item => item.str).join(' ');
    }
    return textContent;
  };

  // Extract text from DOCX using Mammoth.js
  const extractTextFromDocx = async (arrayBuffer) => {
    const { value } = await mammoth.extractRawText({ arrayBuffer });
    return value;
  };

  // Handle file uploads (drag and drop or file picker)
  const handleFiles = async (files) => {
    setIsAnalyzing(true);
    const fileArray = Array.from(files);
    const processedFiles = await Promise.all(
      fileArray.map(async (file) => {
        const content = await readFileContent(file);

        const newDoc = {
          id: `doc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          name: file.name,
          type: file.type,
          content: content,
          uploadDate: new Date().toISOString(),
          analysis: {},
          linkedCases: [],
          size: (file.size / 1024).toFixed(2) + ' KB',
        };
        return newDoc;
      })
    );

    const updatedDocs = [...documents, ...processedFiles];
    setDocuments(updatedDocs);
    localStorage.setItem('case_documents', JSON.stringify(updatedDocs));

    // Analyze documents after they are uploaded
    await analyzeDocuments(processedFiles);
    setIsAnalyzing(false);
  };

  // Drop event handler (for drag-and-drop)
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const { files } = e.dataTransfer;
    if (files && files.length) {
      handleFiles(files);
    }
  };

  // File upload button handler
  const handleFileUpload = (e) => {
    const { files } = e.target;
    if (files && files.length) {
      handleFiles(files);
    }
  };

  // Pattern matching and analysis
  const analyzeDocuments = async (docs) => {
    const patterns = {
      kidnapping: {
        pattern: /\b(kidnap|abduct|ransom|hostage|kidnapped)\b/i,
        description: "Potential kidnapping-related content detected"
      },
      fraud: {
        pattern: /\b(fraud|scam|forge|counterfeit|deceive|embezzle)\b/i,
        description: "Possible fraudulent activities mentioned"
      },
      theft: {
        pattern: /\b(theft|steal|robbery|burglary|larceny)\b/i,
        description: "Theft-related indicators found"
      },
      cybercrime: {
        pattern: /\b(hack|malware|cyber|phishing|ransomware)\b/i,
        description: "Cybercrime indicators detected"
      },
      violence: {
        pattern: /\b(assault|violence|weapon|threat|attack)\b/i,
        description: "Violent activity indicators found"
      }
    };

    const updatedDocs = await Promise.all(docs.map(async (doc) => {
      const analysis = {};
      const linkedCases = [];
      let textContent = doc.content;

      // Pattern matching
      Object.entries(patterns).forEach(([crime, { pattern, description }]) => {
        if (pattern.test(textContent)) {
          analysis[crime] = {
            detected: true,
            description,
            matches: textContent.match(pattern)?.length || 0
          };

          // Find related cases
          const cases = JSON.parse(localStorage.getItem('cases') || '[]');
          const related = cases.filter(c => c.intelType.toLowerCase() === crime.toLowerCase());
          linkedCases.push(...related);
        }
      });

      return { ...doc, analysis, linkedCases };
    }));

    const allDocs = documents.map(existingDoc =>
      updatedDocs.find(newDoc => newDoc.id === existingDoc.id) || existingDoc
    );

    setDocuments(allDocs);
    localStorage.setItem('case_documents', JSON.stringify(allDocs));
  };

  // Handle document deletion
  const handleDelete = (docId) => {
    const updatedDocs = documents.filter(doc => doc.id !== docId);
    setDocuments(updatedDocs);
    localStorage.setItem('case_documents', JSON.stringify(updatedDocs));
  };

  return (
    <div className="document-analysis">
      <div
        className={`upload-section ${dragActive ? 'drag-active' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <h2>Document Analysis</h2>
        <div className="upload-box">
          <i className="fas fa-cloud-upload-alt"></i>
          <p>Drag and drop files here or</p>
          <input
            type="file"
            multiple
            accept=".pdf,.docx,.doc,.txt"
            onChange={handleFileUpload}
            className="file-input"
          />
          <button className="upload-btn">Choose Files</button>
        </div>
      </div>

      {isAnalyzing && (
        <div className="analyzing-indicator">
          <i className="fas fa-spinner fa-spin"></i>
          <span>Analyzing documents...</span>
        </div>
      )}

      <div className="documents-list">
        {documents.map(doc => (
          <div key={doc.id} className="document-item">
            <div className="document-header">
              <div className="document-info">
                <i className="fas fa-file-alt"></i>
                <h3>{doc.name}</h3>
                <span className="document-size">{doc.size}</span>
              </div>
              <button
                className="delete-btn"
                onClick={() => handleDelete(doc.id)}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>

            <div className="analysis-results">
              <h4>Analysis Results:</h4>
              {Object.entries(doc.analysis).length > 0 ? (
                Object.entries(doc.analysis).map(([pattern, details]) => (
                  <div key={pattern} className="pattern-tag">
                    <span className="pattern-name">{pattern}</span>
                    <span className="pattern-desc">{details.description}</span>
                    <span className="pattern-matches">
                      {details.matches} matches found
                    </span>
                  </div>
                ))
              ) : (
                <p className="no-patterns">No significant patterns detected</p>
              )}
            </div>

            {doc.linkedCases?.length > 0 && (
              <div className="linked-cases">
                <h4>Linked Cases:</h4>
                {doc.linkedCases.map(case_ => (
                  <div key={case_.id} className="linked-case">
                    <i className="fas fa-link"></i>
                    <div className="case-details">
                      <span className="case-type">{case_.intelType}</span>
                      <p className="case-desc">{case_.desc.substring(0, 100)}...</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentAnalysis;

'

},

  {
      id: 'ix3i2445',
      title: "Nyx Mobile Drawer For Web",
      techStacks: ["online"],
      textColor: 'lightBlue',
      location: 'Kampala, Uganda',
       desc: 'A simple, customizable mobile drawer component for React applications. Perfect for creating responsive menus or side panels in mobile views',
      icon: NPM,
      link: 'https://www.npmjs.com/package/nyx-drawer-menu'

  },


{
  id: '1085',
  title: "Integrated Intelligence Information Management System",
  techStacks: ["Under Maintenance"],
  textColor: 'lightBlue',
  location: 'Kampala, Ug',
   desc: 'The Integrated Intelligence Information Management System is an artificial intelligence (AI) powered System (IIIMS) for Security Agencies in Uganda. The system is designed to address the challenge of information overload and optimize the utilization of intelligence information. ',
  icon: IIIMS,
  link: 'https://iims.vercel.app/'

},

    {
      id: '2445',
      title: "Dx Slider",
      techStacks: ["online"],
      textColor: 'lightBlue',
      location: 'Kampala, Uganda',
       desc: 'The Dx slider is a customizable React Image slider npm package with smooth transitions and auto-play functionality. Best used for rendering smaller images into a carousel',
      icon: NPM,
      link: 'https://www.npmjs.com/package/dx-slider'

  },

  {
    id: '244rr5',
    title: "Skip (Web Expansion)",
    techStacks: ["online"],
    textColor: 'lightBlue',
    location: 'Kampala, Uganda',
     desc: 'Welcome to sk!p Events, Your Dynamic Partner For Corporate Events in Kampala, Uganda Through Innovative Solutions That Transcend Traditional Boundaries',
    icon: Skip,
    link: 'https://skip-web-app.vercel.app/'
  
  },
  
  {
    id: '445',
    title: "GunBunnies",
    techStacks: ["Online"],
    textColor: 'lightBlue',
    location: 'Kampala, Ug',
     desc: 'This is a simple mobile game built to honor my best friend (EMMA). The plot is to help the noble knight Emma annihilate the bunny overlord and her zombie minions from the Castle.',
    icon: GBunnies,
    link: 'https://apkpure.net/gunbunnies/com.xoGames.GunsBunnies'

},

{
  id: 'ix3y2445',
  title: "SiSi Ai",
  techStacks: ["online"],
  textColor: 'lightBlue',
  location: 'Kampala, Uganda',
   desc: 'Africa faces unique and complex challenges—from rapid urbanization and energy access to security and resource management. At SiSi AI, we harness the power of Artificial Intelligence to create innovative solutions tailored to these realities, driving progress across critical sectors such as defense, energy, infrastructure, and public services',
  icon: SiSi,
  link: 'https://sisi-sigma.vercel.app/'

},

  {
    id: '244rr5',
    title: "Company Profiles",
    techStacks: ["online"],
    textColor: 'lightBlue',
    location: 'Kampala, Uganda',
     desc: 'Explore our cutting-edge work, delivering high-quality designs and constructions tailored to your needs. Elevate your leaving experience with top-tier features and services.',
    icon: Logo,
    link: 'https://companyprofiles.vercel.app/'

},


    {
      id: '145',
      title: "Video Ad System",
      techStacks: ["Under Maintenance"],
      textColor: 'lightBlue',
      location: 'Kampala, Ug',
       desc: ' This systems creates video Ads and streams them on custom built mobile Android (back-pack like) Screens in realtime. It monitors online Screens, their locations, their battery level, their network status, IP Address, and current Video Ad playing, the system comprises both an Android App & a React App',
      icon: MX5,
      link: 'https://moxie5screen.vercel.app/'

  },
  {
    id: 'ix3y2445l',
    title: "Walu studio & solutions",
    techStacks: ["online"],
    location: 'Kampala, Uganda',
     desc: 'At Walu Solutions, we are dedicated to helping businesses grow through cutting-edge graphic design, online marketing, web design, and physical branding solutions.',
    icon: wal,
    link: 'https://walstudios.com/'
  
  },
      {
        id: 'ix3y2445i',
        title: "CTY-Arica",
        techStacks: ["online"],
        textColor: 'lightBlue',
        location: 'Kampala, Uganda',
         desc: 'We address the dual challenges of youth unemployment and environmental conservation through our core programs: students empowerment, sustainability education, and Play4Change.',
        icon: cty,
        link: 'https://cty-africa.org/'
  
    },
  
  {
    id: 'ix3y2445',
    title: "Mazima CDI",
    techStacks: ["online"],
    textColor: 'lightBlue',
    location: 'Kampala, Uganda',
     desc: 'Our aim is empowering people and particularly deprived and vulnerable children in Uganda by providing the means to improve their lives and the opportunity to become young adults,',
    icon: mazima,
    link: 'https://mcdi.mazimacdi.org/'
  
  },
  

{
  id:"222",
  title: "Wuzi Africa",
  techStacks: ["Under Maintenance"],
  textColor:"lightBlue",
  location:"Stockholm, Sweden",
  desc:"From West Nile to Kabale, Moroto to Tororo, dedicated creative communities will be creating bold fabrics and designer garments from recycled old clothes collected across Uganda.",
  icon :fireman,
  link:"https://wuzi-app.firebaseapp.com/"

},

{
  id:"1122",
  title: "Cynthia Morganz",
  techStacks: ["Online"],
  textColor:"lightBlue",
  location:"Kampala, Uganda",
  desc:"Cynthia Morganz is a dynamic and inspiring figure in the world of fashion and entertainment. With her unique flair and captivating presence, Cynthia embodies the essence of modern modeling and vixening. Her journey is a testament to the power of dreams, hard work, and relentless pursuit of excellence.",
  icon :CY_,
  link:"https://cymorganz-kaizoku010s-projects.vercel.app/"

},
    {
      id: '465',
      title: "Nusu",
      techStacks: ["Under Maintenance"],
      textColor: 'lightBlue',
      location: 'Kampala, Ug',
      desc: 'Nusu is a simple financial assistant that enables you or your business to keep track of its finances.',
      icon: NusuLogo,
      link: 'https://steprimo.com/android/en/app/com.digitalminds.android.nusu/'

  },
  {
    id: '4642',
    title: 'Moxie 5 Marketing Agency',
    techStacks: ["Online"],
    location: 'Kampala, Uganda',
    desc: "Moxie5 Marketing Agency is a full-service marketing powerhouse established in 2019, specializing in delivering results-oriented marketing solutions tailored to agents of development across Uganda. ",
    icon: MX5,
    link: 'https://moxie5agency.com/',
  },
  {
    id: '4',
    title: 'NWM Ltd',
    techStacks: ["Online"],
    backgroundColor: 'white',
    textColor: 'red',
    location: 'Kampala, Uganda',
    desc: 'Nature Waste Management Limited is a Ugandan growing waste management company that seeks to reduce, re-use and recycle waste in Uganda’s towns and cities.',
    icon: NwmLogo,
   link: 'http://naturewasteug.com/'
  },


    {
      id: '17',
      title: 'Siha Network',
      backgroundColor: 'white',
      techStacks: ["Under Maintenance"],
      textColor: 'lightBlue',
      location: 'Kampala, Ug',
      desc: 'An NGO created by women activists from Somaliland, Ethiopia, and Sudan in the mid-1990s.',
      icon: Shiha,
      link: 'https://sihanet.org/'
    },

    {
      id: '3t2',
      title: 'Akibahub',
      techStacks: ["Online"],
      backgroundColor: 'red',
      desc: 'A digital platform that provies a brigde for the African creators/manufacturers to connect with the USA market.',
      icon: AkibaIc,
      location: 'USA',
      textColor: 'white',
      // link: 'https://akibahub.com/'     
    },
    {
      id: '23',
      title: 'GrammarHolic',
      backgroundColor: 'white',
      techStacks: ["Online"],
      textColor: 'black',
      location: 'London, UK',
      desc: 'The ultimate life hack for all your content writing needs. Elevate your writing game with our comprehensive range of services.',
      icon: Gram,
      // link: 'https://www.grammarholic.com/'
    },
    {
      id: '332',
      title: 'Restorative Medicament',
      techStacks: ["Online"],
      location: 'London, UK',
      desc: "They are a team of tibb doctors that use 100% herbal formulas designed to restore your body to its natural state before experiencing health complications.",
      icon: Medica,
      link: 'https://www.restorativemedicament.com/',
    },

    {
      id: '2',
      location: 'Kampala, Uganda',
      title: 'Vox Pupli',
      techStacks: ["Online"],
      backgroundColor: 'white',
      textColor: 'black',
      desc: 'They are a  publisher and platform, happy to identify their selves as a platform that fosters public debate on issues that we consider the most important for our generation.',
      icon: VoxP,
      link: 'https://voxpopuli.ug/'
    },

    {
      id: '6',
      title: 'MDP ARCHITECTURE SARL',
      backgroundColor: 'white',
      techStacks: ["Under Maintenance"],
      textColor: 'black',
      location: 'Kigali, Rwanda',
      desc: 'Nous sommes un bureau d’architecture dont les activités sont axées principalement sur la prestation de services adéquats de conception en appui à nos clients dans la planification et la mise en œuvre.',
      icon: MDP,
      link: 'http://mdparchitecture.com/'
    },

    {
      id: '8',
      title: 'National Gaming Board',
      desc: 'The National Lotteries and Gaming Regulatory Board Uganda (NLGRB) is a body corporate established under the Lotteries and Gaming Act No. 7 of 2016 which came into effect on 8th April 2016.',
      icon: NGR,
      location: 'Kampala, Uganda',
      techStacks: ["Online"],
      backgroundColor: 'white',
      textColor: 'black',
      link: 'https://lgrb.go.ug/'
    },
  ]
}
