/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "An Assessment of Global Dimming and Brightening during 1984–2018 Using the FORTH Radiative Transfer Model and ISCCP Satellite and MERRA-2 Reanalysis Data",
    authors:
      "Stamatis, M.; Hatzianastassiou, N.; Korras-Carraca, M.-B.; Matsoukas, C.; Wild, M.; Vardavas, I. An Assessment of Global Dimming and Brightening during 1984–2018 Using the FORTH Radiative Transfer Model and ISCCP Satellite and MERRA-2 Reanalysis Data. Atmosphere 2023, 14, 1258. https://doi.org/10.3390/atmos14081258",
   /* conferences:
      "The 58th Annual Meeting of the Association for Computational Linguistics",
    researchYr: 2020,
    citebox: "popup1", */
    image: "assets/images/research-page/inteferenceNetwork.png",
   /* citation: {
      vancouver:
        "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 1",
    absbox: "absPopup1",*/
  },

  {
    title: "Interdecadal Changes of the MERRA-2 Incoming Surface Solar Radiation (SSR) and Evaluation against GEBA & BSRN Stations",
    authors:
      "Stamatis, M.; Hatzianastassiou, N.; Korras-Carraca, M.B.; Matsoukas, C.; Wild, M.; Vardavas, I. Interdecadal Changes of the MERRA-2 Incoming Surface Solar Radiation (SSR) and Evaluation against GEBA & BSRN Stations. Appl. Sci. 2022, 12, 10176. https://doi.org/10.3390/app121910176",
    /*conferences:
      "The 58th Annual Meeting of the Association for Computational Linguistics",
    researchYr: 2020,
    citebox: "popup2",*/
    image: "assets/images/research-page/crossLingual.png",
  /*  citation: {
      vancouver:
        "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 2",
    absbox: "absPopup2",*/
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      //conferences,
      //researchYr,
      //citebox,
      //citation,
      //absbox,
      //abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
 /*                   <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div> 
                    </div> */
                    
/*                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>*/
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
