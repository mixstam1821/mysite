

/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "An Assessment of Global Dimming and Brightening during 1984–2018 Using the FORTH Radiative Transfer Model and ISCCP Satellite and MERRA-2 Reanalysis Data",
    authors:
      "Stamatis, M.; Hatzianastassiou, N.; Korras-Carraca, M.-B.; Matsoukas, C.; Wild, M.; Vardavas, I.",
    conferences:
      "",
    researchYr: 2023,
    citebox: "popup1", 
    image: "assets/images/research-page/p2.png",
   citation: {
      vancouver:
        "Stamatis, M.; Hatzianastassiou, N.; Korras-Carraca, M.-B.; Matsoukas, C.; Wild, M.; Vardavas, I. An Assessment of Global Dimming and Brightening during 1984–2018 Using the FORTH Radiative Transfer Model and ISCCP Satellite and MERRA-2 Reanalysis Data. Atmosphere 2023, 14, 1258. https://doi.org/10.3390/atmos14081258",
    },
    abstract:
      "In this study, an assessment of the FORTH radiative transfer model (RTM) surface solar radiation (SSR) as well as its interdecadal changes (Δ(SSR)), namely global dimming and brightening (GDB), is performed during the 35-year period of 1984–2018. Furthermore, a thorough evaluation of SSR and (Δ(SSR)) is conducted against high-quality reference surface measurements from 1193 Global Energy Balance Archive (GEBA) and 66 Baseline Surface Radiation Network (BSRN) stations. For the first time, the FORTH-RTM Δ(SSR) was evaluated over an extended period of 35 years and with a spatial resolution of 0.5° × 0.625°. The RTM uses state-of-the-art input products such as MERRA-2 and ISCCP-H and computes 35-year-long monthly SSR and GDB, which are compared to a comprehensive dataset of reference measurements from GEBA and BSRN. Overall, the FORTH-RTM deseasonalized SSR anomalies correlate satisfactorily with either GEBA (R equal to 0.72) or BSRN (R equal to 0.80). The percentage of agreement between the sign of computed GEBA and FORTH-RTM Δ(SSR) is equal to 63.5% and the corresponding percentage for FORTH-RTM and BSRN is 54.5%. The obtained results indicate that a considerable and statistically significant increase in SSR (Brightening) took place over Europe, Mexico, Brazil, Argentina, Central and NW African areas, and some parts of the tropical oceans from the early 1980s to the late 2010s. On the other hand, during the same 35-year period, a strong and statistically significant decrease in SSR (Dimming) occurred over the western Tropical Pacific, India, Australia, Southern East China, Northern South America, and some parts of oceans. A statistically significant dimming at the 95% confidence level, equal to −0.063 Wm−2 year−1 (or −2.22 Wm−2) from 1984 to 2018 is found over the entire globe, which was more prevalent over oceanic than over continental regions (−0.07 Wm−2 year−1 and −0.03 Wm−2 year−1, statistically significant dimming at the 95% confidence level, respectively) in both hemispheres. Yet, this overall 35-year dimming arose from alternating decadal-scale changes, consisting of dimming during 1984–1989, brightening in the 1990s, turning into dimming over 2000–2009, and brightening during 2010–2018.",
    absbox: "absPopup1",
  },

  {
    title: "Interdecadal Changes of the MERRA-2 Incoming Surface Solar Radiation (SSR) and Evaluation against GEBA & BSRN Stations",
    authors:
      "Stamatis, M.; Hatzianastassiou, N.; Korras-Carraca, M.B.; Matsoukas, C.; Wild, M.; Vardavas, I.",
    conferences:
      "The 58th Annual Meeting of the Association for Computational Linguistics",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/p1.png",
   citation: {
      vancouver:
        "Stamatis, M.; Hatzianastassiou, N.; Korras-Carraca, M.B.; Matsoukas, C.; Wild, M.; Vardavas, I. Interdecadal Changes of the MERRA-2 Incoming Surface Solar Radiation (SSR) and Evaluation against GEBA & BSRN Stations. Appl. Sci. 2022, 12, 10176. https://doi.org/10.3390/app121910176",
    },
    abstract:
      "This study assesses and evaluates the 40-year (1980–2019) Modern-Era Retrospective Analysis for Research and Applications v.2 (MERRA-2) surface solar radiation (SSR) as well as its interdecadal changes (Δ(SSR)) against high quality reference surface measurements from 1397 Global Energy Balance Archive (GEBA) and 73 Baseline Surface Radiation Network (BSRN) stations. The study is innovative since MERRA-2 (Δ(SSR)) has never been evaluated in the past, while the MERRA-2 SSR fluxes themselves have not been evaluated in such large spatial scale, which is global here, and temporal basis, which counts 40-years. Other novelties of the study are the use of the highest quality BSRN stations, done for the first time in such an evaluation, as well as the use of a greater number of reference-GEBA stations than in other studies. Moreover, the assessment and evaluation in this study are largely based on SSR anomalies, while being done in depth, at spatial scales ranging from the local to global/hemispherical, and separately for land and ocean areas, and at temporal scales spanning intervals from decadal sub-periods to 40 years. Overall, the MERRA-2 deseasonalized SSR anomalies correlate well with either GEBA (R equal to 0.61) and BSRN (R equal to 0.62). The percentage of agreement between the sign of computed GEBA and MERRA-2 Δ(SSR) is equal to 63.4% and the corresponding percentage for MERRA-2 and BSRN is 50%. According to MERRA-2, strong and statistically significant positive Δ(SSR) (Brightening) is found over Europe, Central Africa, Mongolia, Mexico, Brazil, Argentina and some parts of the tropical oceans. In contrast, large and statistically significant negative Δ(SSR) (Dimming) occurs over the western Tropical Warm Pool, India, Southern East China, Amazonia, stratocumulus covered areas and some parts of oceans. MERRA-2 yields a dimming equal to −0.158 ± 0.005 W/m2/year over the globe from 1980 to 2019. This 40-year dimming, which occurred in both hemispheres, more over ocean than continental areas (−0.195 ± 0.006 and −0.064 ± 0.006 W/m2/year, respectively), underwent decadal scale variations.",
    absbox: "absPopup2",
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
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
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
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
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
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
